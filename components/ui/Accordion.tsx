"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex,
  className,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={clsx("divide-y divide-paper-border border-y border-paper-border", className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display font-semibold text-base sm:text-lg text-ink group-hover:text-ink/80 transition-colors pr-4">
                {item.question}
              </span>
              <span
                className={clsx(
                  "p-1 rounded-[3px] border border-paper-border transition-transform duration-200 shrink-0",
                  isOpen ? "rotate-180 bg-paper-sunken" : "bg-paper-card"
                )}
              >
                <ChevronDown className="w-4 h-4 text-ink" />
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 pr-8 text-sm text-ink-muted leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
