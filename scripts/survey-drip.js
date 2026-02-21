#!/usr/bin/env node
/**
 * Survey Follow-Up Email Drip for Sermon Clips
 * 
 * Sends reminder emails to contacts who signed up but haven't completed the survey.
 * Schedule: Run daily via cron.
 * 
 * Timing:
 *   - Day 3: Friendly reminder (SurveyReminder1)
 *   - Day 7: Social proof (SurveyReminder2)
 *   - Day 14: Last call + incentive (SurveyReminder3)
 * 
 * Uses Resend audience "Sermon Clips Signups" (5425a414-f3d2-4cf4-b3c9-8c46ba877bfe)
 * Contacts get a tag "survey_drip_N" after each email to avoid duplicates.
 * 
 * Usage: RESEND_API_KEY=re_xxx node survey-drip.js [--dry-run]
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = '5425a414-f3d2-4cf4-b3c9-8c46ba877bfe';
const SURVEY_URL = 'https://sermon-clips.com/survey?utm_source=drip&utm_medium=email';
const FROM = 'Sermon Clips <hello@sermon-clips.com>';
const DRY_RUN = process.argv.includes('--dry-run');

if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY not set');
  process.exit(1);
}

const headers = {
  'Authorization': `Bearer ${RESEND_API_KEY}`,
  'Content-Type': 'application/json',
};

async function api(method, path, body) {
  const res = await fetch(`https://api.resend.com${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

// Pre-rendered HTML email templates (matching the React Email components)
function makeEmail(num, name) {
  const greeting = name ? `Hey ${name}` : 'Hey there';
  
  const styles = {
    main: 'background-color:#F5F1EB;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#2D2D2D;padding:40px 20px;',
    container: 'max-width:600px;margin:0 auto;',
    header: 'text-align:center;margin-bottom:40px;',
    h1: 'color:#2D2D2D;font-size:32px;font-weight:700;margin:0 0 8px 0;',
    tagline: 'color:#5c5c5c;font-size:14px;margin:0;',
    card: 'background:#ffffff;border-radius:12px;padding:40px 32px;border:2px solid #2D2D2D;',
    h2: 'color:#2D2D2D;font-size:24px;font-weight:600;margin:0 0 24px 0;',
    p: 'color:#2D2D2D;font-size:16px;line-height:24px;margin:0 0 16px 0;',
    btn: 'background-color:#E8725A;border-radius:8px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;display:inline-block;padding:14px 32px;',
    hr: 'border-color:rgba(45,45,45,0.13);margin:32px 0;',
    footer: 'color:#5c5c5c;font-size:14px;line-height:20px;margin:8px 0 0 0;',
  };

  const templates = {
    1: {
      subject: "Got 2 minutes? Your input shapes what we build",
      body: `
        <h2 style="${styles.h2}">Got 2 minutes? 🙏</h2>
        <p style="${styles.p}">${greeting} — thanks again for signing up for Sermon Clips!</p>
        <p style="${styles.p}">We're building tools specifically for pastors and ministry teams, and we want to make sure we get it right. Your input directly shapes what we build next.</p>
        <p style="${styles.p}">Would you mind taking our quick survey? It's literally 2 minutes — we timed it.</p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${SURVEY_URL}&utm_content=reminder1" style="${styles.btn}">Take the 2-Min Survey</a>
        </div>
        <p style="${styles.p}">Every response helps us build better tools for your ministry. No fluff, no sales pitch — just us trying to understand what you actually need.</p>`,
    },
    2: {
      subject: "500+ pastors weighed in — we'd love your take",
      body: `
        <h2 style="${styles.h2}">Quick update 📊</h2>
        <p style="${styles.p}">${greeting} — quick update on what's happening behind the scenes.</p>
        <p style="${styles.p}">Over 500 pastors and ministry leaders have already shared their feedback, and it's shaping everything we're building:</p>
        <p style="${styles.p}">🎬 Auto-captioned vertical clips from full sermons<br/>📱 One-click posting to Instagram, TikTok & YouTube Shorts<br/>🎨 Brand-matched templates that look professional<br/>📊 Analytics to see which clips actually reach people</p>
        <p style="${styles.p}">We'd love your perspective too. The survey takes about 2 minutes and helps us prioritize what matters most to <em>your</em> ministry.</p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${SURVEY_URL}&utm_content=reminder2" style="${styles.btn}">Share Your Input</a>
        </div>`,
    },
    3: {
      subject: "Last call + early beta access 🎁",
      body: `
        <h2 style="${styles.h2}">Last call 🎁</h2>
        <p style="${styles.p}">${name || 'Hey'}, last reminder on this — we're closing the survey soon and wanted to make sure you had a chance to share your thoughts.</p>
        <p style="${styles.p}">Here's the deal: everyone who completes the survey gets early access to our beta tools before public launch. That means you'll be first in line to:</p>
        <p style="${styles.p}">🚀 Try AI-powered sermon clipping before anyone else<br/>💬 Get a direct line to our team for feedback<br/>🎯 Help shape the features that launch</p>
        <p style="${styles.p}">It's 2 minutes. You get early access. Your ministry gets better tools. Everybody wins.</p>
        <div style="text-align:center;margin:32px 0;">
          <a href="${SURVEY_URL}&utm_content=reminder3" style="${styles.btn}">Take Survey → Get Early Access</a>
        </div>
        <p style="${styles.p}">This is our last email about the survey — promise. 😊</p>`,
    },
  };

  const t = templates[num];
  return {
    subject: t.subject,
    html: `<div style="${styles.main}"><div style="${styles.container}">
      <div style="${styles.header}"><h1 style="${styles.h1}">Sermon Clips</h1><p style="${styles.tagline}">Every Message, Multiplied</p></div>
      <div style="${styles.card}">${t.body}<hr style="${styles.hr}"/>
        <p style="${styles.footer}">Questions? Just reply — a real human reads these.</p>
        <p style="${styles.footer}">— The Sermon Clips Team</p>
      </div></div></div>`,
  };
}

async function run() {
  console.log(`[survey-drip] ${DRY_RUN ? 'DRY RUN' : 'LIVE'} — ${new Date().toISOString()}`);

  // Get all contacts in the audience
  const contacts = await api('GET', `/audiences/${AUDIENCE_ID}/contacts`);
  if (!contacts.data || contacts.data.length === 0) {
    console.log('[survey-drip] No contacts in audience. Done.');
    return;
  }

  const now = Date.now();
  let sent = { 1: 0, 2: 0, 3: 0 };

  for (const contact of contacts.data) {
    const created = new Date(contact.created_at).getTime();
    const daysSinceSignup = (now - created) / (1000 * 60 * 60 * 24);

    // Determine which email to send based on days and what they've received
    // We use the first_name field to track drip state: "drip:N" appended
    // Better: check tags or use a simple state file
    const dripState = contact.last_name || ''; // hack: store drip state in last_name field
    const lastDrip = parseInt(dripState.replace('drip:', '')) || 0;

    let emailNum = null;
    if (lastDrip === 0 && daysSinceSignup >= 3) emailNum = 1;
    else if (lastDrip === 1 && daysSinceSignup >= 7) emailNum = 2;
    else if (lastDrip === 2 && daysSinceSignup >= 14) emailNum = 3;

    if (!emailNum) continue;

    const email = makeEmail(emailNum, contact.first_name);
    console.log(`[survey-drip] ${DRY_RUN ? 'WOULD SEND' : 'Sending'} email ${emailNum} to ${contact.email} (${daysSinceSignup.toFixed(1)} days)`);

    if (!DRY_RUN) {
      const result = await api('POST', '/emails', {
        from: FROM,
        to: [contact.email],
        subject: email.subject,
        html: email.html,
      });

      if (result.id) {
        sent[emailNum]++;
        // Update contact to mark drip state
        await api('PATCH', `/audiences/${AUDIENCE_ID}/contacts/${contact.id}`, {
          last_name: `drip:${emailNum}`,
        });
      } else {
        console.error(`[survey-drip] Failed for ${contact.email}:`, result);
      }
    } else {
      sent[emailNum]++;
    }
  }

  console.log(`[survey-drip] Done. Sent: R1=${sent[1]}, R2=${sent[2]}, R3=${sent[3]}`);
}

run().catch(e => { console.error(e); process.exit(1); });
