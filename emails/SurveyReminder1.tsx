import * as React from 'react';
import {
  Html, Head, Body, Container, Section, Text, Button, Heading, Hr,
} from '@react-email/components';

interface SurveyReminder1Props {
  name?: string;
  surveyUrl: string;
}

export const SurveyReminder1 = ({ name, surveyUrl }: SurveyReminder1Props) => {
  const greeting = name ? `Hey ${name}` : 'Hey there';

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
              Got 2 minutes? 🙏
            </Heading>

            <Text style={paragraph}>
              {greeting} — thanks again for signing up for Sermon Clips!
            </Text>

            <Text style={paragraph}>
              We're building tools specifically for pastors and ministry teams, and we want to make sure we get it right. Your input directly shapes what we build next.
            </Text>

            <Text style={paragraph}>
              Would you mind taking our quick survey? It's literally 2 minutes — we timed it.
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={surveyUrl}>
                Take the 2-Min Survey
              </Button>
            </Section>

            <Text style={paragraph}>
              Every response helps us build better tools for your ministry. No fluff, no sales pitch — just us trying to understand what you actually need.
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              Questions? Just reply — a real human reads these.
            </Text>
            <Text style={footer}>— The Sermon Clips Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SurveyReminder1;

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
const buttonContainer = { textAlign: 'center' as const, margin: '32px 0' };
const button = { backgroundColor: '#E8725A', borderRadius: '8px', color: '#ffffff', fontSize: '16px', fontWeight: '600', textDecoration: 'none', textAlign: 'center' as const, display: 'inline-block', padding: '14px 32px' };
const hr = { borderColor: '#2D2D2D20', margin: '32px 0' };
const footer = { color: '#5c5c5c', fontSize: '14px', lineHeight: '20px', margin: '8px 0 0 0' };
