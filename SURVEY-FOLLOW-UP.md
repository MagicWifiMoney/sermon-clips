# Survey Follow-Up Email Drip Sequence

## Overview

3-email automated sequence targeting users who signed up but haven't completed the survey within 3 days.

**Trigger:** User signed up + 3 days elapsed + no survey click tracked  
**From:** hello@sermon-clips.com  
**Reply-to:** hello@sermon-clips.com

---

## Email Templates

All 3 templates are in `emails/`:

| # | File | Subject Line | Send Day | Goal |
|---|------|-------------|----------|------|
| 1 | `SurveyReminder1.tsx` | "Got 2 minutes? Your input shapes what we build" | Day 3 | Friendly nudge |
| 2 | `SurveyReminder2.tsx` | "500+ pastors weighed in — we'd love your take" | Day 7 | Social proof |
| 3 | `SurveyReminder3.tsx` | "Last call + early beta access 🎁" | Day 14 | Urgency + incentive |

All emails match the existing WelcomeEmail style (cream background #F5F1EB, coral CTA #E8725A, 2px dark border cards).

---

## Email Copy (Plain Text Reference)

### Email 1 — Day 3: Friendly Reminder

**Subject:** Got 2 minutes? Your input shapes what we build  
**Preview:** We're building this for pastors like you — help us get it right.

> Hey {name} — thanks again for signing up for Sermon Clips!
>
> We're building tools specifically for pastors and ministry teams, and we want to make sure we get it right. Your input directly shapes what we build next.
>
> Would you mind taking our quick survey? It's literally 2 minutes — we timed it.
>
> [Take the 2-Min Survey]
>
> Every response helps us build better tools for your ministry. No fluff, no sales pitch — just us trying to understand what you actually need.

### Email 2 — Day 7: Social Proof

**Subject:** 500+ pastors weighed in — we'd love your take  
**Preview:** Here's what we're building based on their feedback...

> Hey {name} — quick update on what's happening behind the scenes.
>
> Over 500 pastors and ministry leaders have already shared their feedback, and it's shaping everything we're building:
>
> 🎬 Auto-captioned vertical clips from full sermons  
> 📱 One-click posting to Instagram, TikTok & YouTube Shorts  
> 🎨 Brand-matched templates that look professional  
> 📊 Analytics to see which clips actually reach people
>
> We'd love your perspective too. The survey takes about 2 minutes and helps us prioritize what matters most to *your* ministry.
>
> [Share Your Input]

### Email 3 — Day 14: Last Call + Incentive

**Subject:** Last call + early beta access 🎁  
**Preview:** Complete the survey → get first access to our tools.

> {name}, last reminder on this — we're closing the survey soon and wanted to make sure you had a chance to share your thoughts.
>
> Here's the deal: everyone who completes the survey gets early access to our beta tools before public launch. That means you'll be first in line to:
>
> 🚀 Try AI-powered sermon clipping before anyone else  
> 💬 Get a direct line to our team for feedback  
> 🎯 Help shape the features that launch
>
> It's 2 minutes. You get early access. Your ministry gets better tools. Everybody wins.
>
> [Take Survey → Get Early Access]
>
> This is our last email about the survey — promise. 😊

---

## Implementation Plan

### 1. Database Changes

Add to `prisma/schema.prisma` in the User model:

```prisma
model User {
  // ... existing fields ...
  surveyClickedAt       DateTime?
  surveyCompletedAt     DateTime?
  surveyRemindersSent   Int        @default(0)
  lastSurveyReminderAt  DateTime?
}
```

Run: `npx prisma migrate dev --name add-survey-tracking`

### 2. Track Survey Clicks

Create `app/api/survey/click/route.ts`:

```typescript
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('uid');
  const surveyUrl = process.env.SURVEY_URL || 'https://...'; // your typeform/google form

  if (userId) {
    await prisma.user.update({
      where: { id: userId },
      data: { surveyClickedAt: new Date() },
    }).catch(() => {}); // don't block redirect on DB errors
  }

  return NextResponse.redirect(surveyUrl);
}
```

Update all survey links to: `https://sermon-clips.com/api/survey/click?uid={userId}`

### 3. Cron Job — Send Reminders

Create `app/api/cron/survey-reminders/route.ts`:

```typescript
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import SurveyReminder1 from '@/emails/SurveyReminder1';
import SurveyReminder2 from '@/emails/SurveyReminder2';
import SurveyReminder3 from '@/emails/SurveyReminder3';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const SCHEDULE = [
  { day: 3, component: SurveyReminder1, subject: 'Got 2 minutes? Your input shapes what we build' },
  { day: 7, component: SurveyReminder2, subject: '500+ pastors weighed in — we\'d love your take' },
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
    const html = await render(Component({ name: user.name || undefined, surveyUrl }));

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
```

### 4. Set Up Cron Trigger

**Option A: Vercel Cron** (if deployed on Vercel)

Add to `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/cron/survey-reminders",
    "schedule": "0 14 * * *"
  }]
}
```
Set `CRON_SECRET` in Vercel env vars.

**Option B: External cron** (any host)
```bash
# Run daily at 2pm CT
0 14 * * * curl -H "Authorization: Bearer $CRON_SECRET" https://sermon-clips.com/api/cron/survey-reminders
```

### 5. Environment Variables Needed

```
RESEND_API_KEY=re_...        # ✅ Already set
SURVEY_URL=https://...       # Your survey form URL
CRON_SECRET=<random-string>  # Auth for cron endpoint
```

---

## Suppression Logic

Users are **excluded** from the drip if:
- They clicked the survey link (`surveyClickedAt` is set)
- They've already received all 3 reminders (`surveyRemindersSent >= 3`)

If a user clicks the survey link at any point, no further reminders are sent.

---

## Testing

1. Preview emails: `npx react-email dev` → open localhost:3000
2. Send test: Use Resend dashboard or:
```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"from":"Sermon Clips <hello@sermon-clips.com>","to":"test@example.com","subject":"Test","html":"<h1>Test</h1>"}'
```
3. Test cron locally: `curl http://localhost:3000/api/cron/survey-reminders -H "Authorization: Bearer test"`

---

## Files Created

- `emails/SurveyReminder1.tsx` — Day 3 friendly reminder
- `emails/SurveyReminder2.tsx` — Day 7 social proof
- `emails/SurveyReminder3.tsx` — Day 14 last call + incentive
- `SURVEY-FOLLOW-UP.md` — This document

## Files To Create (Implementation)

- `app/api/survey/click/route.ts` — Survey click tracker + redirect
- `app/api/cron/survey-reminders/route.ts` — Daily cron to send reminders
- Prisma migration for survey tracking fields
- `vercel.json` cron config (if using Vercel)
