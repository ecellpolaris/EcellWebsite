import React from "react";
import { site } from "@/lib/site-config";

export const ProofStrip: React.FC = () => {
  const stats = [
    { value: site.metrics.builderSessionsPerYear, label: "BUILDER SESSIONS / YR", note: "Hack nights & deep-dives" },
    { value: site.metrics.ideasInMotion, label: "CAMPUS IDEAS IN MOTION", note: "Across tech & climate" },
    { value: site.metrics.mentorsInOrbit, label: "MENTORS IN ORBIT", note: "Operators along the ORR" },
    { value: site.metrics.studentsInLoop, label: "STUDENTS IN THE LOOP", note: "PST engineers & designers" },
  ];

  return (
    <section className="py-12 border-b border-paper-border bg-paper-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="space-y-1 p-2 sm:p-0 sm:border-r last:border-r-0 border-paper-border/80 sm:pr-6 lg:pr-8"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Park Proximity Stamp */}
        <div className="mt-8 pt-6 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-ok" />
            <span>CAMPUS LOCATION: DivyaSree Tech Park &middot; Wipro Corridor, Bengaluru</span>
          </div>
          <div className="text-ink">
            Founder lineage: Classplus &middot; GSoC &middot; Zero fluff
          </div>
        </div>
      </div>
    </section>
  );
};
