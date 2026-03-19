import React from "react";
import SectionShell from "@/components/layout/section-shell";
import SecondaryButton from "@/components/ui/secondary-button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

/**
 * AboutSnapshotBlock
 * A clean, professional summary of the brand mission.
 */
export default function AboutSnapshotBlock() {
  const t = useTranslations("Home");
  const tCommon = useTranslations("Common");

  return (
    <SectionShell>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <span className="text-neutral-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            {t("aboutBadge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase leading-tight">
            {t("aboutTitle")}
          </h2>
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
            <p>
              {t("aboutP1")}
            </p>
            <p>
              {t("aboutP2")}
            </p>
          </div>
          <Link href="/about" className="inline-block pt-4">
            <SecondaryButton>{tCommon("learnMore")}</SecondaryButton>
          </Link>
        </div>
        
        <div className="relative aspect-video bg-neutral-900 border border-white/10 rounded-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-32 h-32 border border-white/5 rounded-full" />
             <div className="absolute w-24 h-24 border border-white/10 rounded-full" />
          </div>
          {/* Subtle visual content */}
          <div className="absolute bottom-10 left-10 opacity-20">
            <div className="h-[2px] w-40 bg-white mb-2" />
            <div className="h-[2px] w-24 bg-white" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
