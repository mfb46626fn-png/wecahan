import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { useTranslations } from "next-intl";

/**
 * CollaborationNoteBlock
 * A clean, closing note for the contact page emphasizing brand values.
 */
export default function CollaborationNoteBlock() {
  const t = useTranslations("Contact");

  return (
    <SectionShell>
      <div className="max-w-5xl mx-auto text-center border-t border-white/5 py-24">
        <p className="text-neutral-500 text-xl md:text-2xl font-light leading-relaxed italic px-8">
          &quot;{t("collaborationNote")}&quot;
        </p>
      </div>
    </SectionShell>
  );
}
