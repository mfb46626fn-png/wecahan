import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/**
 * ProjectsCtaBlock
 * Clean closing conversion block for the Projects page.
 */
export default function ProjectsCtaBlock() {
  const t = useTranslations("Projects");
  const tCommon = useTranslations("Common");

  return (
    <SectionShell className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-tight">
          {t("ctaTitle")}
        </h2>
        
        <p className="text-neutral-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          {t("ctaDescription")}
        </p>

        <div className="pt-8">
          <Link href="/contact" className="inline-block">
            <PrimaryButton>{tCommon("contact")}</PrimaryButton>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
