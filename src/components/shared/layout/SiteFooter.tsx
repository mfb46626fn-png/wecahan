"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { footerData } from "@/data/site/footer";
import { useTranslations } from "next-intl";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tProj = useTranslations("ProjectsData");

  return (
    <footer className="relative border-t border-border-subtle bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-8 md:col-span-1">
          <Link href="/" className="group flex items-center" aria-label="WeCaHan Home">
             <Image 
              src="/logo.png" 
              alt="WeCaHan" 
              width={160} 
              height={32} 
              className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity object-contain" 
            />
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-xs font-light">
            {t("description")}
          </p>
        </div>

        {/* Footer Sections */}
        {footerData.map((section) => (
          <div key={section.title} className="flex flex-col space-y-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted font-display">{t(section.title)}</h3>
            <ul className="space-y-4">
              {section.links.map((link) => {
                let label = "";
                if (section.title === "explore") label = tNav(link.label);
                else if (section.title === "ecosystem") label = tProj(`${link.label}.name`);
                else if (section.title === "compliance") label = tNav(link.label);
                
                return (
                  <li key={link.href}>
                    <Link href={link.href} className="text-text-secondary hover:text-text-primary transition-colors text-[10px] uppercase font-bold tracking-[0.2em]">
                       {label || link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-24 pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-text-muted">
        <p className="text-[10px] tracking-[0.2em] uppercase">
          © {currentYear} WeCaHan. {t("rights")}
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase">
          {t("united")}
        </p>
      </div>
    </footer>
  );
}
