import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    console.log(`New subscriber: ${email}`);

    const { data, error } = await getResend().emails.send({
      from: 'Sermon Clips <hello@sermon-clips.com>',
      to: [email],
      subject: 'Welcome to Sermon Clips — Get Your First 3 Clips Free',
      html: `
        <div style="background-color:#F5F1EB;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#2D2D2D;padding:40px 20px;">
          <div style="max-width:600px;margin:0 auto;">
            <div style="text-align:center;margin-bottom:40px;">
              <h1 style="color:#2D2D2D;font-size:32px;font-weight:700;margin:0 0 8px 0;">Sermon Clips</h1>
              <p style="color:#5c5c5c;font-size:14px;margin:0;">Every Message, Multiplied</p>
            </div>
            <div style="background:#ffffff;border-radius:12px;padding:40px 32px;border:2px solid #2D2D2D;">
              <h2 style="color:#2D2D2D;font-size:24px;font-weight:600;margin:0 0 24px 0;">Welcome! 🎉</h2>
              <p style="font-size:16px;line-height:24px;margin:0 0 16px 0;">
                Thanks for joining Sermon Clips! You're about to discover how easy it is to turn your weekly sermons into viral social media clips.
              </p>
              <p style="font-size:16px;line-height:24px;margin:0 0 16px 0;">
                <strong>Here's what happens next:</strong>
              </p>
              <p style="font-size:16px;line-height:28px;margin:16px 0 24px 0;">
                ✓ Get your first 3 clips absolutely free<br/>
                ✓ See what AI can do with your sermons<br/>
                ✓ Start multiplying your message this week
              </p>
              <div style="text-align:center;margin:32px 0;">
                <a href="https://sermon-clips.com?utm_source=welcome-email" style="background-color:#E8725A;border-radius:8px;color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;display:inline-block;padding:14px 32px;">
                  Get Your Free Clips
                </a>
              </div>
              <hr style="border-color:rgba(45,45,45,0.13);margin:32px 0;"/>
              <p style="color:#5c5c5c;font-size:14px;line-height:20px;margin:8px 0 0 0;">
                Questions? Just reply to this email — we're here to help.
              </p>
              <p style="color:#5c5c5c;font-size:14px;line-height:20px;margin:8px 0 0 0;">
                — The Sermon Clips Team
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Subscription successful!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
