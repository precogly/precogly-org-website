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
  title: "Precogly - Open-Source Enterprise Threat Modeling",
  description: "Open-source, enterprise-grade threat modeling platform. Make threat modeling a core engineering practice accessible to every organization.",
  keywords: ["threat modeling", "security", "open source", "enterprise", "cybersecurity"],
  openGraph: {
    title: "Precogly - Open-Source Enterprise Threat Modeling",
    description: "Open-source, enterprise-grade threat modeling platform. Make threat modeling a core engineering practice accessible to every organization.",
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
