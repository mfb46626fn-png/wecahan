import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { useTranslations } from "next-intl";

/**
 * ProjectsIntroBlock
 * Clean, modern header for the Projects page.
 */
export default function ProjectsIntroBlock() {
  const t = useTranslations("Projects");
  const tNav = useTranslations("Navigation");

  return (
    <SectionShell className="pt-32 md:pt-48 pb-16 md:pb-24">
      <div className="max-w-5xl">
        <span className="text-neutral-500 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">
          {tNav("projects")}
        </span>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.85] max-w-4xl">
          {tNav("projects")} <br />
          <span className="text-neutral-500">
            Ecosystem
          </span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-2xl mt-12 leading-relaxed max-w-3xl font-light">
          {t("introDescription")}
        </p>
      </div>
    </SectionShell>
  );
}
