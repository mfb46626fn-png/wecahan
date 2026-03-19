export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: "automation",
    title: "Automation",
    description: "Streamlining complex workflows and operational processes for maximum efficiency.",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Integrating intelligent systems and decision-making logic into digital products.",
  },
  {
    id: "e-commerce",
    title: "E-commerce Infrastructure",
    description: "Building scalable and robust foundations for modern digital marketplaces.",
  },
  {
    id: "financial-analysis",
    title: "Financial Analysis",
    description: "Developing tools that provide clarity and visibility into business performance.",
  },
  {
    id: "product-development",
    title: "Digital Product Development",
    description: "End-to-end architecture and implementation of focused software solutions.",
  },
];
