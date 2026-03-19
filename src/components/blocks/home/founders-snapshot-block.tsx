import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { founders } from "@/data/founders";
import { useTranslations } from "next-intl";

/**
 * FoundersSnapshotBlock
 * Clean, minimal summary of the engineering leadership.
 */
export default function FoundersSnapshotBlock() {
  const t = useTranslations("FoundersData");

  return (
    <SectionShell className="bg-neutral-900/10">
      <SectionHeading 
        subtitle="leadership"
        title="founders"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {founders.map((founder) => (
          <div 
            key={founder.id}
            className="bg-neutral-950 border border-white/5 p-12 transition-all duration-300 hover:border-white/10"
          >
            <div className="flex items-center space-x-8 mb-8">
               <div className="w-16 h-16 bg-neutral-900 border border-white/10 rounded-sm flex items-center justify-center font-bold text-white/10 uppercase">
                  WC
               </div>
               <div>
                 <h3 className="text-white text-xl font-bold uppercase tracking-tight">{founder.name}</h3>
                 <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1 block tracking-wider">
                   {t(`${founder.id}.role`)}
                 </span>
               </div>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed border-t border-white/5 pt-8 font-light">
              {t(`${founder.id}.bio`)}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
