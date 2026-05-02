import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PhotoGen AI - Professional Product Photos in Seconds",
  description:
    "Transform your product images into stunning e-commerce photos with AI. Upload any product shot, choose a scene, and get professional results instantly. Free to try.",
  keywords: [
    "AI product photo generator",
    "e-commerce photography",
    "product image AI",
    "AI photo background",
    "product photo editor",
    "AI photography tool",
    "online product photos",
  ],
  openGraph: {
    title: "PhotoGen AI - Professional Product Photos in Seconds",
    description:
      "Transform your product images into stunning e-commerce photos with AI. No studio needed.",
    type: "website",
    locale: "en_US",
    siteName: "PhotoGen AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoGen AI - Professional Product Photos in Seconds",
    description:
      "Transform your product images into stunning e-commerce photos with AI. No studio needed.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://photogen-ai.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
