import React from "react";
import { clsx } from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "lime" | "heat" | "muted" | "teal" | "ink" | "outline" | "xp";
  size?: "xs" | "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "outline",
  size = "sm",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-mono font-medium uppercase tracking-wider select-none";

  const variantStyles = {
    lime: "bg-[#E6FAA5] text-[#2C4000] border border-[#B6F000]",
    heat: "bg-[#FFEAE4] text-[#C42500] border border-[#FF876B]",
    muted: "bg-[#EFEAE0] text-[#6F6B64] border border-[#D8D2C4]",
    teal: "bg-[#E0F4F5] text-[#006068] border border-[#00A4B1]",
    ink: "bg-ink text-paper-card border border-ink",
    outline: "bg-transparent text-ink border border-paper-border",
    xp: "bg-lime text-ink font-bold border border-[#9DD400] shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
  };

  const sizeStyles = {
    xs: "text-[10px] px-1.5 py-0.5 rounded-[3px]",
    sm: "text-xs px-2 py-0.5 rounded-[4px]",
    md: "text-xs px-2.5 py-1 rounded-[4px]",
  };

  return (
    <span
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
