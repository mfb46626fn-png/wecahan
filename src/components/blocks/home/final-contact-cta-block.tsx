import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/**
 * FinalContactCtaBlock
 * A strong, clean closing section for the Home page.
 */
export default function FinalContactCtaBlock() {
  const t = useTranslations("Home");
  const tHead = useTranslations("SectionHeadings");
  const tCommon = useTranslations("Common");

  return (
    <SectionShell className="relative overflow-hidden py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <span className="text-neutral-500 text-[10px] font-bold tracking-[0.4em] uppercase">
            {tHead("getInTouch")}
          </span>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter text-white uppercase leading-tight">
            {t("ctaTitle")}
          </h2>
        </div>
        
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          {t("ctaDescription")}
        </p>

        <Link href="/contact" className="inline-block pt-8">
          <PrimaryButton>{tCommon("contact")}</PrimaryButton>
        </Link>
      </div>

      {/* Very subtle background visual - removed neon radial */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-neutral-900/10" />
    </SectionShell>
  );
}
