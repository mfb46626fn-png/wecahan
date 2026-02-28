"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion } from "framer-motion";

export function Navbar() {
    const t = useTranslations("Navigation");
    const pathname = usePathname();

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("about"), href: "/about" },
        { name: t("projects"), href: "/projects" },
        { name: t("contact"), href: "/contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="group relative z-10">
                    <span className="text-2xl font-bold tracking-tighter text-white">We CaHan</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full"></span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm tracking-wide font-medium uppercase transition-colors relative group ${isActive ? "text-[#00f0ff]" : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-2 left-0 w-full h-px bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
}
