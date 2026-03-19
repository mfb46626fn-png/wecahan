import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { focusAreas } from "@/data/focus-areas";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * AboutFocusAreasBlock
 * Detailed display of core expertise areas for the About page in a clean, modern style.
 */
export default function AboutFocusAreasBlock() {
  const t = useTranslations("FocusAreasData");

  return (
    <SectionShell>
      <SectionHeading 
        subtitle="expertise"
        title="focusAreas"
        align="left"
        className="mb-16"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {focusAreas.map((area) => (
          <div key={area.id} className="group flex flex-col space-y-6 border-l border-white/10 pl-10 hover:border-white/30 transition-all duration-300 py-4">
            <h3 className="text-white text-3xl font-bold uppercase tracking-tighter flex items-center transition-colors">
              {t(`${area.id}.title`)}
              <ChevronRight className="ml-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
            </h3>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-xl font-light">
              {t(`${area.id}.description`)}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
