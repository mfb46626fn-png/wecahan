"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

/**
 * LanguageSwitcher
 * A minimalist toggle for switching between Turkish and English.
 * Clean, modern design matching the premium WeCaHan corporate aesthetic.
 */
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: "en" | "tr") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center bg-neutral-900 border border-white/10 p-1">
      <button
        onClick={() => handleLocaleChange("tr")}
        className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
          locale === "tr"
            ? "bg-white text-black"
            : "text-neutral-600 hover:text-white"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
          locale === "en"
            ? "bg-white text-black"
            : "text-neutral-600 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
