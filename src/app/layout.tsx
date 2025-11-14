import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "uni4e",
  description:
    "Field notes on intelligent testing, automation craft, and quality leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "min-h-screen bg-sand-50 font-sans text-ink-900 dark:bg-[#0b0f19] dark:text-slate-100"
        )}
      >
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
