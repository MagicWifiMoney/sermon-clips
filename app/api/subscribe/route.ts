import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/WelcomeEmail';

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

    // Add contact to Resend audience
    // Note: You'll need to create an audience in Resend dashboard first
    // For now, we'll just send the welcome email and log the subscriber
    
    console.log(`New subscriber: ${email}`);

    // Send welcome email
    const { data, error } = await getResend().emails.send({
      from: 'Sermon Clips <hello@sermon-clips.com>',
      to: [email],
      subject: 'Welcome to Sermon Clips — Get Your First 3 Clips Free',
      react: WelcomeEmail({ email }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email' },
        { status: 500 }
      );
    }

    // Optional: Add to Resend contacts/audience
    // const audienceId = process.env.RESEND_AUDIENCE_ID;
    // if (audienceId) {
    //   await resend.contacts.create({
    //     email,
    //     audienceId,
    //   });
    // }

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
