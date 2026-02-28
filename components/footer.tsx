"use client";

import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="border-t border-white/5 bg-black/80 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <span className="text-xl font-bold tracking-tighter text-white block mb-2">We CaHan</span>
                    <p className="text-neutral-500 text-sm max-w-sm">
                        {t("description")}
                    </p>
                </div>
                <div className="text-neutral-600 text-xs tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} WE CAHAN. {t("rights")}
                </div>
            </div>
        </footer>
    );
}
