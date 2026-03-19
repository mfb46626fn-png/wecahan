import React from "react";

/**
 * PrimaryButton
 * A high-contrast, futuristic button for main actions.
 */
interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`relative group px-8 py-3 bg-white text-black font-bold text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] active:scale-95 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
