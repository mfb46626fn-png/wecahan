import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Cpu, Globe, BarChart3, Layers } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * WhatWeBuildDetailBlock
 * Dives deeper into specific engineering capabilities with a clean, modern aesthetic.
 */
export default function WhatWeBuildDetailBlock() {
  const t = useTranslations("About");

  const details = [
    {
      id: "automation",
      icon: Cpu,
    },
    {
      id: "infrastructure",
      icon: Globe,
    },
    {
      id: "financial",
      icon: BarChart3,
    },
    {
      id: "ecosystems",
      icon: Layers,
    },
  ];

  return (
    <SectionShell>
      <SectionHeading 
        subtitle="capabilities"
        title="whatWeBuild"
        description={t("whatWeBuildDetailDescription")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
        {details.map((detail) => (
          <div key={detail.id} className="bg-neutral-950 p-12 border border-white/5 space-y-8 hover:border-white/10 transition-all duration-300">
            <div className="flex items-center space-x-6">
               <detail.icon className="w-8 h-8 text-white" />
               <h3 className="text-white text-xl font-bold uppercase tracking-tight">
                 {t(`capabilitiesDetail.${detail.id}.title`)}
               </h3>
            </div>
            <ul className="space-y-4">
              {t.raw(`capabilitiesDetail.${detail.id}.items`).map((item: string) => (
                <li key={item} className="flex items-center text-neutral-500 text-sm font-light">
                  <div className="w-1.5 h-[1px] bg-white/20 mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
