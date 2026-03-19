import React from "react";
import SectionShell from "@/components/layout/section-shell";
import PrimaryButton from "@/components/ui/primary-button";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/**
 * HomeHeroBlock
 * Clean, high-impact brand introduction for a modern tech company.
 */
export default function HomeHeroBlock() {
  const t = useTranslations("Hero");

  return (
    <SectionShell className="min-h-[85vh] flex items-center pt-24 pb-12">
      <div className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          <span className="text-neutral-500 text-[10px] font-bold tracking-[0.4em] uppercase">
            {t("badge")}
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.9] max-w-4xl">
            {t("titlePrefix")} <br className="hidden md:block" />
            <span className="text-neutral-500">
              {t("titleGradient")}
            </span>
          </h1>
        </div>
        
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-6">
          <Link href="/projects">
            <PrimaryButton className="w-full sm:w-auto">{t("ctaPrimary")}</PrimaryButton>
          </Link>
          <Link href="/about">
            <SecondaryButton className="w-full sm:w-auto">{t("ctaSecondary")}</SecondaryButton>
          </Link>
        </div>
      </div>
      
      {/* Subtle background depth indicator - no neon blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-dark-surface)_0%,_transparent_70%)] opacity-40 pointer-events-none" />
    </SectionShell>
  );
}
