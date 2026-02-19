import * as React from 'react';
import {
  Html, Head, Body, Container, Section, Text, Button, Heading, Hr,
} from '@react-email/components';

interface SurveyReminder3Props {
  name?: string;
  surveyUrl: string;
}

export const SurveyReminder3 = ({ name, surveyUrl }: SurveyReminder3Props) => {
  const greeting = name ? `${name}, last` : 'Last';

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
              Final call + a thank-you gift 🎁
            </Heading>

            <Text style={paragraph}>
              {greeting} reminder on this — we're closing the survey soon and wanted to make sure you had a chance to share your thoughts.
            </Text>

            <Text style={paragraph}>
              <strong>Here's the deal:</strong> everyone who completes the survey gets early access to our beta tools before public launch. That means you'll be first in line to:
            </Text>

            <Text style={list}>
              🚀 Try AI-powered sermon clipping before anyone else<br />
              💬 Get a direct line to our team for feedback<br />
              🎯 Help shape the features that launch
            </Text>

            <Text style={paragraph}>
              It's 2 minutes. You get early access. Your ministry gets better tools. Everybody wins.
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={surveyUrl}>
                Take Survey → Get Early Access
              </Button>
            </Section>

            <Text style={paragraph}>
              This is our last email about the survey — promise. 😊
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              Thanks for being part of this. We're excited about what's coming.
            </Text>
            <Text style={footer}>— The Sermon Clips Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SurveyReminder3;

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
