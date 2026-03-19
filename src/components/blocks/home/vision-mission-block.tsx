import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { useTranslations } from "next-intl";

/**
 * VisionMissionBlock
 * Explains the long-term outlook of the brand in a clean, professional manner.
 */
export default function VisionMissionBlock() {
  const t = useTranslations("Home");

  return (
    <SectionShell>
      <SectionHeading 
        subtitle="strategy"
        title="visionMission"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <div className="bg-neutral-950 p-16 border border-white/5 space-y-8">
          <h3 className="text-white text-xl font-bold uppercase tracking-widest">{t("visionLabel")}</h3>
          <p className="text-neutral-400 text-lg leading-relaxed font-light">
            {t("visionDescription")}
          </p>
        </div>
        
        <div className="bg-neutral-900/50 p-16 border border-white/5 space-y-8">
          <h3 className="text-white text-xl font-bold uppercase tracking-widest">{t("missionLabel")}</h3>
          <p className="text-neutral-400 text-lg leading-relaxed font-light">
            {t("missionDescription")}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
