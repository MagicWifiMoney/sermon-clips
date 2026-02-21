import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const fields = payload?.data?.fields || [];

    const getField = (label: string) => {
      const f = fields.find((field: any) =>
        field.label?.toLowerCase().includes(label.toLowerCase())
      );
      return f?.value || f?.options?.map((o: any) => o.text).join(', ') || null;
    };

    const email = getField('email');
    if (!email) {
      return NextResponse.json({ ok: true, skipped: 'no email' });
    }

    const name = getField('name');
    const role = getField('role');
    const churchSize = getField('church size');
    const currentMethod = getField('currently create');
    const painPoint = getField('frustration');
    const topFeatures = getField('features');
    const budget = getField('budget');

    // Check if this person is already a signed-up user
    const existingUser = await prisma.user.findUnique({ where: { email } });

    // Upsert into SurveyResponse (retakes update, don't duplicate)
    await prisma.surveyResponse.upsert({
      where: { email },
      create: {
        email,
        name,
        role,
        churchSize,
        currentMethod,
        painPoint,
        topFeatures,
        budget,
        source: 'tally',
        userId: existingUser?.id || null,
      },
      update: {
        name: name || undefined,
        role,
        churchSize,
        currentMethod,
        painPoint,
        topFeatures,
        budget,
        userId: existingUser?.id || undefined,
      },
    });

    // If they're already a user, also mark survey completed on the user record
    if (existingUser) {
      const surveyJson = JSON.stringify({ role, churchSize, currentMethod, painPoint, topFeatures, budget });
      await prisma.user.update({
        where: { email },
        data: {
          surveyData: surveyJson,
          surveyCompletedAt: new Date(),
        },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Tally webhook error:', err);
    return NextResponse.json({ ok: false }, { status: 200 }); // always 200 so Tally doesn't retry
  }
}
