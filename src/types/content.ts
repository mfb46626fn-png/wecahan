export type Locale = 'tr' | 'en';

export interface LocalizedText {
  tr: string;
  en: string;
}

export interface PageHeroContent {
  badge?: string;
  title: string;
  description: string;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export interface SectionIntroContent {
  badge?: string;
  title: string;
  description?: string;
}

export interface CTAContent {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}
