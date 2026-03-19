import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Cpu, Zap, Globe, BarChart3, Layers } from "lucide-react";

/**
 * WhatWeBuildBlock
 * Showcases core capabilities in a compact grid.
 */
const capabilities = [
  {
    title: "Automation Systems",
    description: "Streamlined operational workflows for modern businesses.",
    icon: Cpu,
  },
  {
    title: "AI-Powered Systems",
    description: "Intelligent decision-making logic integrated into digital products.",
    icon: Zap,
  },
  {
    title: "Digital Infrastructure",
    description: "Robust foundations for scalable software ecosystems.",
    icon: Globe,
  },
  {
    title: "Financial Intelligence",
    description: "Tools for clarity, visibility, and performance tracking.",
    icon: BarChart3,
  },
  {
    title: "Product Ecosystems",
    description: "Integrated suites of tools for efficient business growth.",
    icon: Layers,
  },
];

export default function WhatWeBuildBlock() {
  return (
    <SectionShell className="bg-neutral-950/50">
      <SectionHeading 
        subtitle="Capabilities"
        title="What We Build"
        description="We focus on creating systems that provide long-term value and scalability."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {capabilities.map((item) => (
          <div 
            key={item.title}
            className="glass-panel p-8 border border-white/5 hover:border-[#00f0ff]/30 transition-all duration-500 group"
          >
            <item.icon className="w-8 h-8 text-[#00f0ff] mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3">{item.title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
