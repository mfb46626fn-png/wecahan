"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { footerNavigation as navigation } from "@/data/navigation";
import { useTranslations } from "next-intl";

/**
 * SiteFooter
 * A clean, multi-column professional footer for a premium corporate brand.
 */
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tProj = useTranslations("ProjectsData");

  return (
    <footer className="relative border-t border-white/5 bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-8">
          <Link href="/" className="group flex items-center space-x-3">
             <div className="w-10 h-1 bg-white" />
            <span className="text-2xl font-bold tracking-tighter uppercase text-white">
              WeCaHan
            </span>
          </Link>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-light">
            {t("description")}
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{t("explore")}</h3>
          <ul className="space-y-4">
            {navigation.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-500 hover:text-white transition-colors text-xs uppercase font-bold tracking-[0.3em]">
                   {tNav(item.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Projects Section */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{t("ecosystem")}</h3>
          <ul className="space-y-4">
            {navigation.projects.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-500 hover:text-white transition-colors text-xs uppercase font-bold tracking-[0.3em]">
                   {tProj(`${item.name}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{t("compliance")}</h3>
          <ul className="space-y-4">
            {navigation.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-500 hover:text-white transition-colors text-xs uppercase font-bold tracking-[0.3em]">
                   {tNav(item.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">
          © {currentYear} WeCaHan. {t("rights")}
        </p>
        <p className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">
          {t("united")}
        </p>
      </div>
    </footer>
  );
}
