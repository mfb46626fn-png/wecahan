import React from "react";

/**
 * SectionHeading
 * A standardized heading for page sections.
 * Features a small subtitle and a prominent, tracking-tight title.
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
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignmentClass} ${className}`}>
      {subtitle && (
        <span className="inline-block text-[#00f0ff] text-xs font-bold tracking-[0.2em] uppercase mb-4 glow-text">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white uppercase mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
