import React from "react";

/**
 * SecondaryButton
 * A low-contrast, bordered button for secondary actions.
 */
interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryButton({
  children,
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={`relative group px-8 py-3 bg-transparent border border-white/20 text-white font-bold text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5 hover:text-[#00f0ff] active:scale-95 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
