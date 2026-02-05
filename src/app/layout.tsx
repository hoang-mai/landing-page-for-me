import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mai Anh Hoàng | Full Stack Developer",
  description: "Portfolio of Mai Anh Hoàng - Full Stack Developer with experience in React, Next.js, Node.js and modern web technologies. Explore my projects and skills.",
  keywords: [
    "Mai Anh Hoàng",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Mai Anh Hoàng" }],
  creator: "Mai Anh Hoàng",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mai Anh Hoàng Portfolio",
    title: "Mai Anh Hoàng | Full Stack Developer",
    description: "Portfolio of Mai Anh Hoàng - Full Stack Developer with experience in React, Next.js, Node.js and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mai Anh Hoàng | Full Stack Developer",
    description: "Portfolio of Mai Anh Hoàng - Full Stack Developer with experience in React, Next.js, Node.js and modern web technologies.",
    creator: "@maianhhoang",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
