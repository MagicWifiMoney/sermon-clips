import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { SurveyReminder1 } from '@/emails/SurveyReminder1';
import { SurveyReminder2 } from '@/emails/SurveyReminder2';
import { SurveyReminder3 } from '@/emails/SurveyReminder3';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const SCHEDULE = [
  { day: 3, component: SurveyReminder1, subject: 'Got 2 minutes? Your input shapes what we build' },
  { day: 7, component: SurveyReminder2, subject: "500+ pastors weighed in — we'd love your take" },
  { day: 14, component: SurveyReminder3, subject: 'Last call + early beta access 🎁' },
];

export async function GET(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  let sent = 0;

  // Find users who signed up, haven't clicked survey, and need a reminder
  const users = await prisma.user.findMany({
    where: {
      surveyClickedAt: null,
      surveyRemindersSent: { lt: 3 },
    },
  });

  for (const user of users) {
    const daysSinceSignup = Math.floor(
      (now.getTime() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24)
    );

    const nextReminder = SCHEDULE[user.surveyRemindersSent];
    if (!nextReminder || daysSinceSignup < nextReminder.day) continue;

    const surveyUrl = `https://sermon-clips.com/api/survey/click?uid=${user.id}`;
    const Component = nextReminder.component;
    const html = await render(
      React.createElement(Component, { name: user.name || undefined, surveyUrl })
    );

    try {
      await resend.emails.send({
        from: 'Sermon Clips <hello@sermon-clips.com>',
        to: user.email,
        subject: nextReminder.subject,
        html,
      });

      await prisma.user.update({
        where: { id: user.id },
        data: {
          surveyRemindersSent: { increment: 1 },
          lastSurveyReminderAt: now,
        },
      });

      sent++;
    } catch (err) {
      console.error(`Failed to send survey reminder to ${user.email}:`, err);
    }
  }

  return NextResponse.json({ sent, checked: users.length });
}
