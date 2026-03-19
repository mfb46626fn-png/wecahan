import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Cpu, Zap, Globe, BarChart3, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * WhatWeBuildBlock
 * Showcases core capabilities in a clean, professional grid.
 */
export default function WhatWeBuildBlock() {
  const t = useTranslations("Home");

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

  return (
    <SectionShell className="bg-neutral-900/10">
      <SectionHeading 
        subtitle="capabilities"
        title="whatWeBuild"
        description={t("capabilitiesDescription")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {capabilities.map((item) => (
          <div 
            key={item.title}
            className="glass-panel p-9 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
          >
            <item.icon className="w-8 h-8 text-white mb-6 transition-transform duration-300 group-hover:-translate-y-1" />
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3">{item.title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed font-light">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
