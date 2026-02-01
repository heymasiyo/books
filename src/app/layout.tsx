import type { Metadata } from "next";

import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { fontVariables } from "@/styles/fonts";

export const metadata: Metadata = {
  title: {
    default: "Books",
    template: "%s | Books",
  },
  description: "The open source accounting app built for simplicity.",
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
