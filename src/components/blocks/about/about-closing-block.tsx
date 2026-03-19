import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/**
 * AboutClosingBlock
 * Strong, clean closing for the About page.
 */
export default function AboutClosingBlock() {
  const t = useTranslations("About");
  const tCommon = useTranslations("Common");

  return (
    <SectionShell className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-tight">
          {t("closingTitle")}
        </h2>
        
        <p className="text-neutral-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          {t("closingDescription")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
          <Link href="/projects" className="w-full sm:w-auto">
            <PrimaryButton className="w-full">{tCommon("explore")}</PrimaryButton>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <SecondaryButton className="w-full">{tCommon("contact")}</SecondaryButton>
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
