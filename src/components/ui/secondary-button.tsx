import React from "react";

/**
 * SecondaryButton
 * A subtle, outlined button for secondary actions.
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
      className={`relative group px-10 py-3 bg-transparent text-white border border-white/20 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black active:scale-95 rounded-sm ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
