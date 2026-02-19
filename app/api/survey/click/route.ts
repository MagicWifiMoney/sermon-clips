import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const TALLY_FORM_URL = process.env.TALLY_FORM_URL || 'https://tally.so/r/9qWJpY';

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('uid');

  if (userId) {
    await prisma.user.update({
      where: { id: userId },
      data: { surveyClickedAt: new Date() },
    }).catch(() => {}); // don't block redirect on DB errors
  }

  return NextResponse.redirect(TALLY_FORM_URL);
}
