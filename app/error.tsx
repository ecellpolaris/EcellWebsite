"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home, AlertOctagon, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-config";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("E Cell Application Segment Error:", error);
  }, [error]);

  return (
    <div className="py-20 lg:py-32 bg-paper min-h-[75vh] flex items-center justify-center corner-wash px-4 sm:px-6">
      <div className="max-w-lg w-full ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-10 shadow-lift space-y-6 text-center">
        {/* Error Stamped Badge */}
        <div className="w-14 h-14 bg-[#FFEAE4] border border-heat rounded-full mx-auto flex items-center justify-center shadow-sm">
          <AlertOctagon className="w-7 h-7 text-heat" />
        </div>

        <div className="space-y-2">
          <span className="stamp-tag bg-heat text-white font-bold border-heat">
            SYSTEM CIRCUIT BREAKER &middot; ERROR 500
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Unexpected Circuit Breaker.
          </h1>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-mono">
            Something in this route encountered an exception during execution. The system caught it cleanly to protect your session.
          </p>
        </div>

        {/* Technical Digest Box */}
        {error.digest && (
          <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] text-xs font-mono text-left space-y-1">
            <span className="text-ink-muted block text-[10px] uppercase font-bold">FAILURE DIGEST</span>
            <code className="text-heat font-bold break-all block">{error.digest}</code>
          </div>
        )}

        {/* Recovery Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto bg-lime hover:bg-lime-hover text-ink font-mono text-xs px-5 py-3 rounded-[3px] font-bold border border-[#9DD400] flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-98"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto bg-paper-card hover:bg-paper-sunken text-ink font-mono text-xs px-5 py-3 rounded-[3px] border border-paper-border hover:border-ink flex items-center justify-center gap-2 transition-colors font-semibold"
          >
            <Home className="w-4 h-4" />
            <span>Return to Foundry</span>
          </Link>
        </div>

        {/* Support Help Strip */}
        <div className="pt-4 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>Campus Bay: Room 204</span>
          <a
            href={`mailto:${site.email}?subject=Bug Report: ${encodeURIComponent(error.message || "App Exception")}`}
            className="text-ink hover:underline decoration-lime decoration-2 flex items-center gap-1 font-semibold"
          >
            <span>Report to WebOps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
