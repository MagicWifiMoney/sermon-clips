import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('uid');
  const surveyUrl = process.env.SURVEY_URL || 'https://forms.gle/placeholder';

  if (userId) {
    await prisma.user.update({
      where: { id: userId },
      data: { surveyClickedAt: new Date() },
    }).catch(() => {}); // don't block redirect on DB errors
  }

  return NextResponse.redirect(surveyUrl);
}
