import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { useTranslations } from "next-intl";

/**
 * EcosystemNoteBlock
 * Brief, clean statement unifying the projects.
 */
export default function EcosystemNoteBlock() {
  const t = useTranslations("Projects");

  return (
    <SectionShell>
      <div className="max-w-5xl mx-auto text-center border-t border-b border-white/5 py-16">
        <p className="text-neutral-500 text-xl md:text-2xl italic leading-relaxed font-light px-6">
          &quot;{t("ecosystemNote")}&quot;
        </p>
      </div>
    </SectionShell>
  );
}
