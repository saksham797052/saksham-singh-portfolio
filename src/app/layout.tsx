import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Saksham Raj Singh | Cyber Security & IoT Portfolio',
  description: 'The interactive portfolio of Saksham Raj Singh, a B.Tech IoT & Cyber Security student based in Jaipur. Explore my projects in ethical hacking, web development, and hardware.',
  keywords: ['Saksham Raj Singh', 'Cyber Security Portfolio', 'IoT Developer', 'B.Tech Jaipur', 'Ethical Hacking', 'Next.js Developer'],
  openGraph: {
    title: 'Saksham Raj Singh | Cyber Security Portfolio',
    description: 'B.Tech IoT & Cyber Security student from Jaipur. Explore my journey and projects.',
    url: 'https://sakshamsingh.online',
    siteName: 'Saksham Raj Singh',
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630 screenshot of your site and put it in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="5ce1dad0-1ec5-47d4-8c8f-1bd0906c7026"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
