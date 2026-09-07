"use client";

import React from "react";
import { clsx } from "clsx";

interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div
      className={clsx(
        "inline-flex flex-wrap items-center gap-1 p-1 bg-paper-sunken border border-paper-border rounded-[4px] max-w-full",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={clsx(
              "px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all rounded-[3px] select-none flex items-center gap-1.5",
              isActive
                ? "bg-paper-card text-ink font-semibold shadow-sm border border-paper-border"
                : "text-ink-muted hover:text-ink hover:bg-paper-border/50"
            )}
          >
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={clsx(
                  "text-[10px] px-1.5 py-0.2 rounded font-mono",
                  isActive
                    ? "bg-lime text-ink font-bold"
                    : "bg-paper-border text-ink-muted"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
