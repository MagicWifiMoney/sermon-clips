import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const fields = payload?.data?.fields || [];

    // Extract fields by label
    const getField = (label: string) => {
      const f = fields.find((f: any) => f.label?.toLowerCase().includes(label.toLowerCase()));
      return f?.value || f?.options?.map((o: any) => o.text).join(', ') || null;
    };

    const email = getField('email');
    const name = getField('name');
    const role = getField('role');
    const churchSize = getField('church size');
    const currentMethod = getField('currently create');
    const painPoint = getField('frustration');
    const topFeatures = getField('features');
    const budget = getField('budget');

    if (email) {
      const surveyJson = JSON.stringify({ role, churchSize, currentMethod, painPoint, topFeatures, budget });

      // Try to update existing user first; if not found, create with a placeholder clerkId
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        await prisma.user.update({
          where: { email },
          data: {
            name: name || undefined,
            surveyClickedAt: new Date(),
            surveyData: surveyJson,
          },
        });
      } else {
        await prisma.user.create({
          data: {
            clerkId: `tally_${Date.now()}`,
            email,
            name: name || null,
            surveyClickedAt: new Date(),
            surveyData: surveyJson,
          },
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Tally webhook error:', err);
    return NextResponse.json({ ok: false }, { status: 200 }); // always 200 so Tally doesn't retry
  }
}
