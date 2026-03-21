import { FooterGroup } from "@/types/navigation";

export const footerData: FooterGroup[] = [
  {
    title: "explore",
    links: [
      { label: "home", href: "/" },
      { label: "about", href: "/about" },
      { label: "projects", href: "/projects" },
      { label: "contact", href: "/contact" },
    ],
  },
  {
    title: "ecosystem",
    links: [
      { label: "wecahan-auto", href: "/projects/wecahan-auto" },
      { label: "prificient", href: "/projects/prificient" },
      { label: "prificient-tools", href: "/projects/prificient-tools" },
    ],
  },
  {
    title: "compliance",
    links: [
      { label: "privacy", href: "/privacy-policy" },
      { label: "terms", href: "/terms-of-service" },
    ],
  },
];
