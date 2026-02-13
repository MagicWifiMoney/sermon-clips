import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Heading,
  Hr,
} from '@react-email/components';

interface WelcomeEmailProps {
  email: string;
}

export const WelcomeEmail = ({ email }: WelcomeEmailProps) => {
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
              Welcome! 🎉
            </Heading>
            
            <Text style={paragraph}>
              Thanks for joining Sermon Clips! You're about to discover how easy it is to turn your weekly sermons into viral social media clips.
            </Text>

            <Text style={paragraph}>
              <strong>Here's what happens next:</strong>
            </Text>

            <Text style={list}>
              ✓ Get your first 3 clips absolutely free<br />
              ✓ See what AI can do with your sermons<br />
              ✓ Start multiplying your message this week
            </Text>

            <Section style={buttonContainer}>
              <Button
                style={button}
                href="https://sermon-clips.com?utm_source=welcome-email"
              >
                Get Your Free Clips
              </Button>
            </Section>

            <Text style={paragraph}>
              Or book a quick demo to see the platform in action →{' '}
              <a href="https://sermon-clips.com?utm_source=welcome-email#demo" style={link}>
                Book Demo
              </a>
            </Text>

            <Hr style={hr} />

            <Text style={footer}>
              Questions? Just reply to this email — we're here to help.
            </Text>

            <Text style={footer}>
              — The Sermon Clips Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

// Styles matching the cream/coral branding
const main = {
  backgroundColor: '#F5F1EB',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  color: '#2D2D2D',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const header = {
  textAlign: 'center' as const,
  marginBottom: '40px',
};

const h1 = {
  color: '#2D2D2D',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 8px 0',
};

const tagline = {
  color: '#5c5c5c',
  fontSize: '14px',
  margin: '0',
  fontWeight: '400',
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '40px 32px',
  border: '2px solid #2D2D2D',
};

const h2 = {
  color: '#2D2D2D',
  fontSize: '24px',
  fontWeight: '600',
  margin: '0 0 24px 0',
};

const paragraph = {
  color: '#2D2D2D',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px 0',
};

const list = {
  color: '#2D2D2D',
  fontSize: '16px',
  lineHeight: '28px',
  margin: '16px 0 24px 0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#E8725A',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
};

const link = {
  color: '#E8725A',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#2D2D2D20',
  margin: '32px 0',
};

const footer = {
  color: '#5c5c5c',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '8px 0 0 0',
};
