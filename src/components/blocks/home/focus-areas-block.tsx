import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { focusAreas } from "@/data/focus-areas";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * FocusAreasBlock
 * Displays core expertise areas in a clean, modern grid.
 */
export default function FocusAreasBlock() {
  const t = useTranslations("FocusAreasData");

  return (
    <SectionShell className="bg-neutral-900/10">
      <SectionHeading 
        subtitle="expertise"
        title="focusAreas"
        align="left"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-20">
        {focusAreas.map((area) => (
          <div key={area.id} className="group flex flex-col space-y-5 border-l border-white/10 pl-8 hover:border-white/40 transition-all duration-300">
            <h3 className="text-white text-base font-bold uppercase tracking-widest flex items-center transition-colors">
              {t(`${area.id}.title`)}
              <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
              {t(`${area.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
