import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
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
  title: "We CaHan | Digital Commerce Holding",
  description:
    "We CaHan is a global innovation hub building intelligent systems and scalable e-commerce infrastructures. Architecting the future of digital commerce.",
  keywords: [
    "We CaHan",
    "digital commerce",
    "e-commerce",
    "fintech",
    "SaaS",
    "Prificient",
    "Dropsetup",
    "holding company",
  ],
  authors: [{ name: "We CaHan" }],
  creator: "We CaHan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wecahan.com",
    siteName: "We CaHan",
    title: "We CaHan | Digital Commerce Holding",
    description:
      "Architecting the future of digital commerce. Building intelligent systems and scalable e-commerce infrastructures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "We CaHan | Digital Commerce Holding",
    description:
      "Architecting the future of digital commerce. Building intelligent systems and scalable e-commerce infrastructures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
