import React from "react";

/**
 * PrimaryButton
 * A high-contrast, professional button for main actions.
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
      className={`relative group px-10 py-3 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 rounded-sm ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
