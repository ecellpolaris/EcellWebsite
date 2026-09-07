import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const OperatingLoop: React.FC = () => {
  const steps = [
    {
      step: "01",
      name: "IDEATE",
      sub: "Hostel Problem Wedge",
      targetUrl: "/idea",
      action: "Submit in Lab",
    },
    {
      step: "02",
      name: "VALIDATE",
      sub: "25 User Conversations",
      targetUrl: "/idea",
      action: "Idea Lab Wedge",
    },
    {
      step: "03",
      name: "PITCH",
      sub: "Demo & Term Sheets",
      targetUrl: "/programs/polaris-demo-day",
      action: "Polaris Demo Day",
    },
    {
      step: "04",
      name: "BUILD",
      sub: "6-Month Immersion",
      targetUrl: "/programs/polaris-fellowship",
      action: "Fellowship Cohort",
    },
    {
      step: "05",
      name: "SHIP",
      sub: "Production & First Rupee",
      targetUrl: "/startups",
      action: "Portfolio Board",
    },
    {
      step: "06",
      name: "RAISE",
      sub: "Angel / Micro VC Demo",
      targetUrl: "/summit",
      action: "E Summit 26",
    },
  ];

  return (
    <section className="py-20 border-b border-paper-border bg-paper-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              CAMPUS VENTURE CYCLE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              The 6 Node Founder Loop.
            </h2>
            <p className="text-sm sm:text-base text-ink-muted">
              From an unstable script in room 304 to institutional term sheets. Every node has an official program behind it.
            </p>
          </div>

          <Link
            href="/programs"
            className="font-mono text-xs font-bold text-ink underline underline-offset-4 hover:text-ink-muted flex items-center gap-1 shrink-0"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* The 6 Nodes Stepper */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {steps.map((node) => (
            <Link
              key={node.step}
              href={node.targetUrl}
              className="bg-paper-card border border-paper-border hover:border-ink p-3 sm:p-5 rounded-[4px] shadow-card group transition-all flex flex-col justify-between"
            >
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-ink-muted">
                    {node.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-lime group-hover:scale-150 transition-transform" />
                </div>
                <h3 className="font-display font-extrabold text-base sm:text-lg text-ink group-hover:text-ink">
                  {node.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-ink-muted leading-tight">
                  {node.sub}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-paper-border flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-ink group-hover:underline">
                <span className="truncate pr-1">{node.action}</span>
                <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
