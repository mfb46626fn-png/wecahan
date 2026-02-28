"use client";

import { useLocale } from "next-intl";
import { Link, usePathname as useLocalizedPathname } from "@/i18n/routing";
import { useTransition } from "react";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const pathname = useLocalizedPathname();

    const toggleLocale = () => {
        const nextLocale = locale === "tr" ? "en" : "tr";
        startTransition(() => {
            // In next-intl app router, changing language involves navigating to the same path but forcing the new locale.
            window.location.replace(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
        });
    };

    return (
        <button
            onClick={toggleLocale}
            disabled={isPending}
            className="px-3 py-1 text-sm font-mono border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all bg-black/50 backdrop-blur-md rounded-none"
        >
            {locale === "tr" ? "EN" : "TR"}
        </button>
    );
}
