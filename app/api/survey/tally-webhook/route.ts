import { prisma } from '@/lib/prisma';
import { appendFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface TallyField {
  key: string;
  label: string;
  type: string;
  value: string | string[] | number | null;
  options?: { id: string; text: string }[];
}

interface TallyWebhookPayload {
  eventId: string;
  eventType: string;
  createdAt: string;
  data: {
    responseId: string;
    submissionId: string;
    respondentId: string;
    formId: string;
    formName: string;
    createdAt: string;
    fields: TallyField[];
  };
}

/** Resolve MULTIPLE_CHOICE/CHECKBOXES value (IDs) → human-readable text(s) */
function resolveOptions(field: TallyField): string | string[] | null {
  if (!field.options || !field.value) return field.value as string | string[] | null;
  const ids = Array.isArray(field.value) ? field.value : [field.value];
  const texts = ids.map((id) => field.options!.find((o) => o.id === id)?.text ?? id);
  return field.type === 'MULTIPLE_CHOICE' ? texts[0] ?? null : texts;
}

export async function POST(req: NextRequest) {
  try {
    const payload: TallyWebhookPayload = await req.json();

    // Only handle form response events
    if (payload.eventType !== 'FORM_RESPONSE') {
      return NextResponse.json({ ok: true });
    }

    const fields = payload.data?.fields ?? [];

    // ── Extract field values ──────────────────────────────────────────────────
    let email: string | null = null;
    let name: string | null = null;
    const responses: Record<string, string | string[] | null> = {};

    for (const field of fields) {
      const resolved = resolveOptions(field);
      const labelKey = field.label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
      responses[labelKey] = resolved as string | string[] | null;

      if (field.type === 'INPUT_EMAIL') {
        email = (field.value as string) ?? null;
      }
      if (field.type === 'INPUT_TEXT' && field.label.toLowerCase().includes('name')) {
        name = (field.value as string) ?? null;
      }
    }

    // ── Log raw payload to JSONL ───────────────────────────────────────────────
    try {
      const dir = join(process.cwd(), 'data');
      mkdirSync(dir, { recursive: true });
      appendFileSync(
        join(dir, 'tally-submissions.jsonl'),
        JSON.stringify({ ...payload.data, parsedAt: new Date().toISOString(), responses }) + '\n'
      );
    } catch {
      // non-fatal
    }

    // ── Update user in DB (if we have an email) ────────────────────────────────
    if (email) {
      try {
        const updateData: Record<string, unknown> = {
          surveyCompletedAt: new Date(payload.data.createdAt),
          surveyClickedAt: new Date(payload.data.createdAt), // ensure clicked is set too
        };

        // Optionally update name if they filled it in
        if (name) {
          updateData.name = name;
        }

        await prisma.user.updateMany({
          where: { email: email.toLowerCase() },
          data: updateData,
        });

        console.log(`[tally-webhook] Updated survey completion for ${email}`);
      } catch (err) {
        console.error('[tally-webhook] DB update error:', err);
        // Don't fail the webhook — Tally will retry
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[tally-webhook] Parse error:', err);
    // Return 200 to avoid Tally retries for bad payloads
    return NextResponse.json({ ok: false, error: 'parse error' });
  }
}
