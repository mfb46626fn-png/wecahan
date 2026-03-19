export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  status: "active" | "in-development";
  category: string;
  href: string;
  isFeatured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: "aaa-automation",
    name: "AAA Automation",
    shortDescription: "A focused automation initiative built to streamline repetitive workflows and operational processes.",
    status: "active",
    category: "Automation Systems",
    href: "/projects/aaa-automation",
    isFeatured: true,
    order: 1
  },
  {
    slug: "prificient",
    name: "Prificient",
    shortDescription: "A financial visibility platform designed to track profit, costs and business performance with more clarity.",
    status: "in-development",
    category: "Financial Intelligence Platform",
    href: "/projects/prificient",
    isFeatured: true,
    order: 2
  },
  {
    slug: "prificient-tools",
    name: "Prificient Tools",
    shortDescription: "An actively maintained collection of practical tools that support financial clarity and better business decisions.",
    status: "active",
    category: "Utility Tools",
    href: "/projects/prificient-tools",
    isFeatured: true,
    order: 3
  }
];
