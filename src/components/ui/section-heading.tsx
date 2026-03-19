import React from "react";
import { useTranslations } from "next-intl";

/**
 * SectionHeading
 * A standardized heading for page sections.
 * Optimized for a clean, credible corporate feel.
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const t = useTranslations("SectionHeadings");
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  const displayTitle = title.includes(".") ? title : (t.has(title) ? t(title) : title);
  const displaySubtitle = subtitle && (subtitle.includes(".") ? subtitle : (t.has(subtitle) ? t(subtitle) : subtitle));

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {subtitle && (
        <span className="inline-block text-neutral-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
          {displaySubtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-6 leading-tight">
        {displayTitle}
      </h2>
      <div className="w-12 h-[2px] bg-white/20 mx-auto mb-8" />
      {description && (
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
