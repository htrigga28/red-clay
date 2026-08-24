import type { Metadata } from "next";
import { Newsreader, Geist, Geist_Mono } from "next/font/google";
import { BagProvider } from "@/components/commerce/BagProvider";
import { Header } from "@/components/navigation/Header";
import "./globals.css";

const editorial = Newsreader({ subsets: ["latin"], variable: "--font-editorial", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Red Clay — Contemporary African Coffee House", template: "%s — Red Clay" },
  description: "A fictional contemporary African coffee house built around the material character of place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${editorial.variable} ${sans.variable} ${mono.variable}`}><body><BagProvider><Header />{children}</BagProvider></body></html>;
}
