import "@/styles/globals.css";

import type { Metadata } from "next";

import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Books: The Modern Accounting System",
    template: "%s | Books",
  },
  description:
    "Books is the modern accounting platform that simplifies invoicing, expense tracking, and financial reporting in one place.",
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
      data-scroll-behavior="smooth"
      className={fontVariables}
    >
      <body className="bg-background text-foreground relative font-sans font-medium antialiased">
        {children}
      </body>
    </html>
  );
}
