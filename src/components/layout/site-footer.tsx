import React from "react";
import { Link } from "@/i18n/routing";
import { footerNavigation as navigation } from "@/data/navigation";

/**
 * SiteFooter
 * A multi-column, professional footer for the global brand.
 */
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#00f0ff] rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
            <span className="text-xl font-bold tracking-tighter uppercase text-white glow-text">
              We CaHan
            </span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Architecting intelligent systems and scalable digital infrastructures for the future of commerce and technology.
          </p>
          <div className="flex space-x-4 pt-2">
             {/* Social placeholders if needed */}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#00f0ff]">Explore</h3>
          <ul className="space-y-3">
            {navigation.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                   {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Projects Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#00f0ff]">Ecosystem</h3>
          <ul className="space-y-3">
            {navigation.projects.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                   {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#00f0ff]">Compliance</h3>
          <ul className="space-y-3">
            {navigation.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                   {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-neutral-500 text-xs tracking-widest uppercase">
          © {currentYear} We CaHan. All rights reserved.
        </p>
        <p className="text-neutral-500 text-xs tracking-widest uppercase">
          United in Innovation.
        </p>
      </div>
    </footer>
  );
}
