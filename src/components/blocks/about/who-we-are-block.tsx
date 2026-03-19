import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SectionHeading from "@/components/ui/section-heading";
import { useTranslations } from "next-intl";

/**
 * WhoWeAreBlock
 * Narrative about origin and purpose in a clean, professional layout.
 */
export default function WhoWeAreBlock() {
  const t = useTranslations("About");

  return (
    <SectionShell className="bg-neutral-900/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <SectionHeading 
          subtitle="whoWeAre"
          title="whoWeAreTitle"
          align="left"
          className="mb-0"
        />
        <div className="space-y-10 text-neutral-400 text-lg md:text-xl leading-relaxed font-light border-l border-white/5 pl-10">
          <p>
            {t("whoWeAreP1")}
          </p>
          <p>
            {t("whoWeAreP2")}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
