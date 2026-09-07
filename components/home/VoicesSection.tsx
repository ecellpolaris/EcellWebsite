import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data/testimonials";

export const VoicesSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            UNCENSORED VOICES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            What they say when the slides turn off.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            From faculty advisors to first-year founders. Candid observations on the PST builder culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-paper-card border border-paper-border p-5 sm:p-7 lg:p-8 rounded-[4px] shadow-card flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                <span className="stamp-tag bg-paper-sunken border-paper-border text-ink-muted">
                  {t.tag}
                </span>

                <blockquote className="font-display text-base sm:text-lg text-ink font-semibold leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-paper-border flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-paper-border shrink-0 bg-paper-sunken">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">
                    {t.author}
                  </h4>
                  <p className="text-xs font-mono text-ink-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
