import * as React from 'react';
import {
  Html, Head, Body, Container, Section, Text, Button, Heading, Hr,
} from '@react-email/components';

interface SurveyReminder2Props {
  name?: string;
  surveyUrl: string;
}

export const SurveyReminder2 = ({ name, surveyUrl }: SurveyReminder2Props) => {
  const greeting = name ? `Hey ${name}` : 'Hey';

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Sermon Clips</Heading>
            <Text style={tagline}>Every Message, Multiplied</Text>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={h2}>
              500+ pastors weighed in 👀
            </Heading>

            <Text style={paragraph}>
              {greeting} — quick update on what's happening behind the scenes.
            </Text>

            <Text style={paragraph}>
              Over 500 pastors and ministry leaders have already shared their feedback, and it's shaping everything we're building:
            </Text>

            <Text style={list}>
              🎬 Auto-captioned vertical clips from full sermons<br />
              📱 One-click posting to Instagram, TikTok & YouTube Shorts<br />
              🎨 Brand-matched templates that look professional<br />
              📊 Analytics to see which clips actually reach people
            </Text>

            <Text style={paragraph}>
              We'd love your perspective too. The survey takes about 2 minutes and helps us prioritize what matters most to <em>your</em> ministry.
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={surveyUrl}>
                Share Your Input
              </Button>
            </Section>

            <Text style={paragraph}>
              Your voice matters here — we're building this <em>with</em> pastors, not just <em>for</em> them.
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              Hit reply anytime — we read every message.
            </Text>
            <Text style={footer}>— The Sermon Clips Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SurveyReminder2;

const main = {
  backgroundColor: '#F5F1EB',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  color: '#2D2D2D',
};
const container = { margin: '0 auto', padding: '40px 20px', maxWidth: '600px' };
const header = { textAlign: 'center' as const, marginBottom: '40px' };
const h1 = { color: '#2D2D2D', fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0' };
const tagline = { color: '#5c5c5c', fontSize: '14px', margin: '0', fontWeight: '400' };
const content = { backgroundColor: '#ffffff', borderRadius: '12px', padding: '40px 32px', border: '2px solid #2D2D2D' };
const h2 = { color: '#2D2D2D', fontSize: '24px', fontWeight: '600', margin: '0 0 24px 0' };
const paragraph = { color: '#2D2D2D', fontSize: '16px', lineHeight: '24px', margin: '0 0 16px 0' };
const list = { color: '#2D2D2D', fontSize: '16px', lineHeight: '28px', margin: '16px 0 24px 0' };
const buttonContainer = { textAlign: 'center' as const, margin: '32px 0' };
const button = { backgroundColor: '#E8725A', borderRadius: '8px', color: '#ffffff', fontSize: '16px', fontWeight: '600', textDecoration: 'none', textAlign: 'center' as const, display: 'inline-block', padding: '14px 32px' };
const hr = { borderColor: '#2D2D2D20', margin: '32px 0' };
const footer = { color: '#5c5c5c', fontSize: '14px', lineHeight: '20px', margin: '8px 0 0 0' };
