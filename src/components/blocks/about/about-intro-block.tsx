import React from "react";
import SectionShell from "@/components/layout/section-shell";
import { useTranslations } from "next-intl";

/**
 * AboutIntroBlock
 * Clean, professional page header for the About page.
 */
export default function AboutIntroBlock() {
  const t = useTranslations("About");
  const tNav = useTranslations("Navigation");

  return (
    <SectionShell className="min-h-[50vh] flex flex-col justify-end pt-32 pb-16">
      <div className="max-w-5xl">
        <div className="flex items-center space-x-3 mb-8 text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          <span className="hover:text-white transition-colors cursor-default">{tNav("home")}</span>
          <span className="text-white/10">/</span>
          <span className="text-white">{tNav("about")}</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-[ -0.05em] text-white uppercase leading-[0.85] max-w-4xl">
          {tNav("about")} <br />
          <span className="text-neutral-500">
            WeCaHan
          </span>
        </h1>
        <p className="mt-12 text-neutral-400 text-lg md:text-2xl max-w-3xl leading-relaxed font-light">
          {t("introDescription")}
        </p>
      </div>
    </SectionShell>
  );
}
