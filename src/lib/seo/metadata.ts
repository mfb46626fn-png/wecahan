import { Metadata } from "next";
import { siteConfig } from "@/data/seo/metadata";

export function getLocalizedMetadata(
  locale: "tr" | "en",
  path: string,
  overrides?: Partial<Metadata>
): Metadata {
  const baseUrl = siteConfig.baseUrl;
  const canonical = `${baseUrl}/${locale}${path === "/" ? "" : path}`;
  
  const alternates = {
    canonical,
    languages: {
      tr: `${baseUrl}/tr${path === "/" ? "" : path}`,
      en: `${baseUrl}/en${path === "/" ? "" : path}`,
    },
  };

  const ogImage = `${baseUrl}/og-fallback.png`;

  return {
    ...overrides,
    metadataBase: new URL(baseUrl),
    alternates,
    openGraph: {
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      ...overrides?.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: overrides?.title?.toString() || siteConfig.name,
      description: overrides?.description?.toString(),
      images: [ogImage],
      ...overrides?.twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
