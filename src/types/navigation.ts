export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface SiteConfig {
  name: string;
  url: string;
  ogImage: string;
  description: string;
  links: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}
