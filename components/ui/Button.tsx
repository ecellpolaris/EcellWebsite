import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "ghost" | "ink" | "heat" | "subtle";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "lime",
      size = "md",
      href,
      isExternal,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 active:scale-[0.98] select-none rounded-[4px] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ink";

    const variantStyles = {
      lime: "bg-lime text-ink font-semibold hover:bg-lime-hover shadow-sm border border-[#A6E000]",
      ghost: "bg-transparent text-ink border border-ink hover:bg-paper-sunken",
      ink: "bg-ink text-paper-card hover:bg-ink-muted shadow-sm",
      heat: "bg-heat text-white font-semibold hover:opacity-90 shadow-sm",
      subtle: "bg-paper-sunken text-ink hover:bg-paper-border border border-paper-border",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-3 gap-2.5 font-semibold",
    };

    const combinedClassName = clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
