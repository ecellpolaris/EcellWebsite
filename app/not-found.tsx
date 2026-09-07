import React from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Compass, Home } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    { href: "/programs", label: "Programs & Forge" },
    { href: "/events", label: "Calendar & Hacks" },
    { href: "/startups", label: "Startup Portfolio" },
    { href: "/summit", label: "E Summit 26" },
    { href: "/team", label: "Core Team" },
    { href: "/contact", label: "Contact Bay" },
  ];

  return (
    <div className="py-20 lg:py-32 bg-paper min-h-[75vh] flex items-center justify-center corner-wash px-4 sm:px-6">
      <div className="max-w-lg w-full ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-10 shadow-lift space-y-6 text-center">
        <div className="space-y-2">
          <span className="stamp-tag bg-heat text-white font-bold border-heat">
            ERROR 404 &middot; COLD LEAD
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-ink tracking-tight">
            This page pivoted.
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-mono">
            The route you queried was either deprecated or failed its early hypothesis test. No dead ends · re route below.
          </p>
        </div>

        {/* Directory Recovery Grid */}
        <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] text-xs font-mono text-left space-y-2.5">
          <span className="font-bold text-ink uppercase tracking-wider block flex items-center gap-1.5 text-[10px]">
            <Compass className="w-3.5 h-3.5 text-ink" />
            <span>ACTIVE FOUNDRY DESTINATIONS:</span>
          </span>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-2 bg-paper-card border border-paper-border hover:border-ink rounded-[3px] text-ink font-semibold flex items-center justify-between transition-colors"
              >
                <span className="truncate">{link.label}</span>
                <ArrowRight className="w-3 h-3 text-ink-muted shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Primary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto bg-lime hover:bg-lime-hover text-ink font-bold font-mono text-xs px-5 py-3 rounded-[3px] border border-[#9DD400] flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-98"
          >
            <Home className="w-4 h-4" />
            <span>Return to Foundry</span>
          </Link>
          <Link
            href="/arena"
            className="w-full sm:w-auto bg-paper-card hover:bg-paper-sunken text-ink font-mono text-xs px-5 py-3 rounded-[3px] border border-paper-border hover:border-ink flex items-center justify-center gap-2 transition-colors font-semibold"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Enter The Arena</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
