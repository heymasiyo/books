import { Geist_Mono as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const satoshi = localFont({
  src: "../styles/Satoshi-Variable.woff2",
  variable: "--font-display",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVariables = cn(
  satoshi.variable,
  fontSans.variable,
  fontMono.variable
);
