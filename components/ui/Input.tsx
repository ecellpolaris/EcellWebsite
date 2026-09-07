import React from "react";
import { clsx } from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5"
          >
            {label}
            {props.required && <span className="text-heat ml-0.5">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            "w-full bg-paper-card border text-ink text-sm px-3.5 py-2.5 rounded-[4px] placeholder:text-ink-muted/50 transition-colors focus:outline-none focus:ring-1 focus:ring-ink focus:border-ink",
            error ? "border-heat" : "border-paper-border hover:border-ink/40",
            className
          )}
          {...props}
        />
        {helperText && !error && (
          <p className="mt-1 text-xs text-ink-muted">{helperText}</p>
        )}
        {error && <p className="mt-1 text-xs text-heat font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
