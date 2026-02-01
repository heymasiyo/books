import type { Metadata } from "next";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { fontVariables } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    default: "Books - The Modern Accounting System",
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={cn(fontVariables)}>{children}</body>
    </html>
  );
}
