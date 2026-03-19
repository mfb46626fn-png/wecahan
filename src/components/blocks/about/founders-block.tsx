import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { founders } from "@/data/founders";
import { useTranslations } from "next-intl";

/**
 * FoundersBlock
 * Controlled display of founders for the About page.
 * Keeps the brand narrative dominant with a clean, credible aesthetic.
 */
export default function FoundersBlock() {
  const t = useTranslations("About");
  const tF = useTranslations("FoundersData");

  return (
    <SectionShell className="bg-neutral-900/10">
      <SectionHeading 
        subtitle="leadership"
        title="founders"
        description={t("foundersGridDescription")}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-16">
        {founders.map((founder) => (
          <div 
            key={founder.id}
            className="bg-neutral-950 p-12 border border-white/5 transition-all duration-300 hover:border-white/10"
          >
            <div className="flex items-center space-x-8 mb-10">
               <div className="w-16 h-16 bg-neutral-900 border border-white/10 rounded-sm flex items-center justify-center font-bold text-white/5 uppercase">
                  WC
               </div>
               <div>
                 <h3 className="text-white text-xl font-bold uppercase tracking-tight">{founder.name}</h3>
                 <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1 block">{tF(`${founder.id}.role`)}</span>
               </div>
            </div>
            <p className="text-neutral-500 text-base leading-relaxed border-t border-white/5 pt-10 font-light">
              {tF(`${founder.id}.bio`)}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center max-w-2xl mx-auto text-neutral-600 text-xs italic font-light">
        {t("foundersNote")}
      </div>
    </SectionShell>
  );
}
