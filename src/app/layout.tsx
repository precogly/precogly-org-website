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
  title: "Precogly — Open-Source Enterprise Threat Modeling Platform",
  description: "Open-source, enterprise-grade threat modeling platform with an advanced DFD editor, compliance mapping (DORA, CRA, ASVS, NIST CSF), community library packs, and an AI-ready REST API. Licensed under Apache 2.0.",
  keywords: ["threat modeling", "security", "open source", "enterprise", "cybersecurity", "DFD editor", "STRIDE", "MITRE ATT&CK", "compliance", "DORA", "ASVS"],
  openGraph: {
    title: "Precogly — Open-Source Enterprise Threat Modeling Platform",
    description: "Open-source, enterprise-grade threat modeling platform with an advanced DFD editor, compliance mapping (DORA, CRA, ASVS, NIST CSF), community library packs, and an AI-ready REST API. Licensed under Apache 2.0.",
    type: "website",
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
