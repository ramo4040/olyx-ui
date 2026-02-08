import "../index.css";

import { StackedToastProvider } from "@olyx/react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "olyx ui",
  description: "olyx ui",
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
            <StackedToastProvider timeout={3000} />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
