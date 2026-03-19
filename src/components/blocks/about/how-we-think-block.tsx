import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { Zap, Box, Maximize } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * HowWeThinkBlock
 * Brand philosophy cards in a clean, professional grid.
 */
export default function HowWeThinkBlock() {
  const t = useTranslations("About");

  const philosophies = [
    {
      id: "howWeThink1",
      icon: Box,
    },
    {
      id: "howWeThink2",
      icon: Maximize,
    },
    {
      id: "howWeThink3",
      icon: Zap,
    },
  ];

  return (
    <SectionShell className="bg-neutral-900/10">
      <SectionHeading 
        subtitle="philosophy"
        title="howWeThink"
        description={t("philosophyDescription")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {philosophies.map((phil) => (
          <div key={phil.id} className="bg-neutral-950 p-10 border border-white/5 group hover:border-white/20 transition-all duration-300">
            <phil.icon className="w-8 h-8 text-white mb-8 group-hover:-translate-y-1 transition-transform duration-300" />
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-4">{t(phil.id)}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed font-light">{t(`${phil.id}Desc`)}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
