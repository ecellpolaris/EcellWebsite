"use client";

import React from "react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { clsx } from "clsx";

interface ToastProps {
  message: string;
  type?: "success" | "info" | "warning";
  onClose?: () => void;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  onClose,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 px-4 py-3 bg-paper-card border-2 shadow-lift rounded-[4px] text-sm",
        type === "success" && "border-lime text-ink",
        type === "info" && "border-ink text-ink",
        type === "warning" && "border-heat text-ink",
        className
      )}
    >
      {type === "success" && <CheckCircle2 className="w-5 h-5 text-[#86B800] shrink-0" />}
      {type === "warning" && <AlertCircle className="w-5 h-5 text-heat shrink-0" />}
      <span className="font-medium text-ink flex-1">{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="text-ink-muted hover:text-ink p-0.5"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
