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
      await prisma.user.upsert({
        where: { email },
        update: {
          name: name || undefined,
          surveyClickedAt: new Date(),
          surveyData: JSON.stringify({ role, churchSize, currentMethod, painPoint, topFeatures, budget }),
        },
        create: {
          email,
          name: name || null,
          surveyClickedAt: new Date(),
          surveyData: JSON.stringify({ role, churchSize, currentMethod, painPoint, topFeatures, budget }),
        },
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Tally webhook error:', err);
    return NextResponse.json({ ok: false }, { status: 200 }); // always 200 so Tally doesn't retry
  }
}
