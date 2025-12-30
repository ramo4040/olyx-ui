import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../index.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: "fluentx",
  description: "fluentx",
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
      </head>
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
