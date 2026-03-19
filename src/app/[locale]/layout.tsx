import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import PageContainer from "@/components/layout/page-container";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "We CaHan | Future of Commerce",
    description: "Building intelligent systems and scalable e-commerce infrastructures.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-white glass-panel`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SiteHeader />
          <PageContainer>
            {children}
          </PageContainer>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
