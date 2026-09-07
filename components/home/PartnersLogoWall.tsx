import React from "react";
import { PARTNER_LOGOS } from "@/lib/data/arena-data";

export const PartnersLogoWall: React.FC = () => {
  return (
    <section className="py-14 border-b border-paper-border bg-paper-card select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest uppercase">
            ECOSYSTEM ALLIANCES &middot; INSTITUTIONAL TRUST
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {PARTNER_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] text-center hover:border-ink transition-colors flex flex-col items-center justify-center min-h-[84px]"
            >
              <span className="font-display font-extrabold text-sm sm:text-base text-ink tracking-tight block">
                {p.name}
              </span>
              <span className="font-mono text-[10px] text-ink-muted uppercase mt-0.5 block">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
