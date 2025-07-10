import type { Metadata } from "next";
import { Fascinate, Lora } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { MotionConfig } from "motion/react";

const fascinateFont = Fascinate({
  variable: "--font-fascinate",
  subsets: ["latin"],
  weight: "400",
});

const loraFont = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G. Landon Snodgrass - Full-Stack Developer",
  description:
    "Full-stack developer specializing in React, TypeScript, and Go.",
  keywords: [
    "full-stack developer",
    "frontend developer",
    "react",
    "typescript",
    "go",
    "vue",
  ],
  authors: [{ name: "G. Landon Snodgrass" }],
  openGraph: {
    title: "G. Landon Snodgrass - Full-Stack Developer",
    description:
      "Full-stack developer specializing in React, TypeScript, and Go.",
    url: "https://landonsnodgrass.com",
    siteName: "G. Landon Snodgrass",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fascinateFont.variable} ${loraFont.variable}`}>
        <main className="min-h-screen">
          <MotionConfig reducedMotion="user">
            <Navigation />
            {children}
          </MotionConfig>
        </main>
      </body>
    </html>
  );
}
