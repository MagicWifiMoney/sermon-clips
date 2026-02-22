import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { PostHogProvider } from "@/components/posthog-provider";
import {
  OrganizationSchema,
  SoftwareApplicationSchema,
  FAQPageSchema,
  HowToSchema,
  BreadcrumbListSchema,
} from "./components/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sermon Clips — AI-Powered Sermon Clips for Churches",
  description: "AI-powered sermon clips for churches. Upload your sermon, get 5 scroll-stopping clips with captions in minutes. Sermon transcription, reframing, and social publishing included. Free to start.",
  keywords: "sermon clips, sermon clip maker, ai sermon clips, church video clips, sermon transcription, church social media, sermon highlights, sermon shorts, church content creator",
  openGraph: {
    title: "Sermon Clips — AI-Powered Sermon Clips for Churches",
    description: "Upload your sermon. Get 5 scroll-stopping clips with captions in minutes. Free to start — no editor required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Combine all schemas into @graph
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      OrganizationSchema,
      SoftwareApplicationSchema,
      FAQPageSchema,
      HowToSchema,
      BreadcrumbListSchema,
    ],
  };

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#E8725A",
        },
      }}
    >
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
          />
        </head>
        <body
          className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
        >
          <PostHogProvider>
            {children}
          </PostHogProvider>
          <Toaster position="bottom-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
