import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import SiteHeader from "@/components/shared/layout/SiteHeader";
import SiteFooter from "@/components/shared/layout/SiteFooter";
import PageContainer from "@/components/shared/layout/PageContainer";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { getLocalizedMetadata } from "@/lib/seo/metadata";
import { pageMetadata } from "@/data/seo/metadata";

// Rest of imports...

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: "tr" | "en" }> 
}): Promise<Metadata> {
  const { locale } = await params;
  
  return getLocalizedMetadata(locale, "/", {
    title: pageMetadata.home.title[locale],
    description: pageMetadata.home.description[locale],
  });
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased text-white`}>
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
