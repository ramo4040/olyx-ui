import "../index.css";

import { StackedToastProvider } from "@olyx/react";
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "@/components/error-boundary";
import { siteConfig } from "@/lib/config";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords as string[],
  authors: [{ name: siteConfig.creator, url: siteConfig.github }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Modern React Component Library`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="light"
      className={dmSans.variable}
      data-scroll-behavior="smooth"
    >
      <head />

      <body>
        <div className="root">
          <ThemeProvider
            enableColorScheme
            attribute="data-theme"
            defaultTheme="system"
            enableSystem
          >
            <ErrorBoundary>
              <StackedToastProvider timeout={3000} />
              {children}
            </ErrorBoundary>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
