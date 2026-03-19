export interface NavLink {
  name: string;
  href: string;
}

export const mainNavigation: NavLink[] = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const footerNavigation = {
  brand: [
    { name: "We CaHan", href: "/" },
  ],
  nav: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  projects: [
    { name: "AAA Automation", href: "/projects/aaa-automation" },
    { name: "Prificient", href: "/projects/prificient" },
    { name: "Prificient Tools", href: "/projects/prificient-tools" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};
