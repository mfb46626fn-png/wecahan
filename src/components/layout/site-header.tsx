"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";
import { mainNavigation } from "@/data/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

/**
 * SiteHeader
 * A fixed, minimal navigation header for a premium corporate brand.
 */
export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="w-10 h-1 bg-white" />
          <span className="text-2xl font-bold tracking-tighter uppercase text-white">
            WeCaHan
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-10 mr-4 border-r border-white/10 pr-10">
            {mainNavigation.map((item) => {
              const isActive = pathname.includes(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {t(item.name)}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-6">
          <LanguageSwitcher />
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-10 space-y-8">
              {mainNavigation.map((item) => {
                const isActive = pathname.includes(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-bold tracking-widest uppercase transition-colors ${
                      isActive ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {t(item.name)}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
