import React from "react";
import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "sunken" | "ticket" | "ink";
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      hoverEffect = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative rounded-[4px] border transition-all duration-200";

    const variantStyles = {
      default: "bg-paper-card border-paper-border text-ink shadow-card",
      sunken: "bg-paper-sunken border-paper-border text-ink",
      ticket: "ticket-perforated bg-paper-card text-ink shadow-card",
      ink: "bg-ink border-ink text-paper-card",
    };

    const hoverStyles = hoverEffect
      ? "hover:-translate-y-1 hover:shadow-lift hover:border-ink/50"
      : "";

    return (
      <div
        ref={ref}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
