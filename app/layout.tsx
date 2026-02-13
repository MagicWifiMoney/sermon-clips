import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
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
  title: "Sermon Clips — Every Message, Multiplied",
  description: "Transform your weekly sermons into scroll-stopping social clips. Professional sermon clipping service for churches. Get your first clips free.",
  keywords: "sermon clips, church social media, video clips for churches, sermon repurposing, church marketing",
  openGraph: {
    title: "Sermon Clips — Every Message, Multiplied",
    description: "Transform your weekly sermons into scroll-stopping social clips. Professional sermon clipping service for churches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#E8725A",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
        >
          {children}
          <Toaster position="bottom-right" richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
