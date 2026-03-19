export interface NavLink {
  name: string;
  href: string;
}

export const mainNavigation: NavLink[] = [
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];

export const footerNavigation = {
  nav: [
    { name: "about", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ],
  projects: [
    { name: "aaa-automation", href: "/projects/aaa-automation" },
    { name: "prificient", href: "/projects/prificient" },
    { name: "prificient-tools", href: "/projects/prificient-tools" },
  ],
  legal: [
    { name: "privacy", href: "/privacy" },
    { name: "terms", href: "/terms" },
  ],
};
