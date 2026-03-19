export interface Project {
  slug: string;
  name: string;
  status: "active" | "in-development";
  ctaHref?: string; // Optional external link if applicable
}

export const projects: Project[] = [
  {
    slug: "aaa-automation",
    name: "AAA Automation",
    status: "active",
    ctaHref: "https://aaa-automation.wecahan.com"
  },
  {
    slug: "prificient",
    name: "Prificient",
    status: "in-development",
    ctaHref: "https://prificient.wecahan.com"
  },
  {
    slug: "prificient-tools",
    name: "Prificient Tools",
    status: "active",
    ctaHref: "https://tools.prificient.com"
  }
];
