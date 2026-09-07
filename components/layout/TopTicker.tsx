"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export const TopTicker: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number }>({
    days: 40,
    hours: 14,
    mins: 22,
  });

  useEffect(() => {
    // E Summit date: Oct 17, 2026
    const target = new Date("2026-10-17T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.max(target - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, mins });
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-ink text-paper-card text-xs py-1.5 px-4 border-b border-ink/20 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-flex items-center gap-1 bg-heat text-white text-[10px] font-bold px-1.5 py-0.2 rounded-[2px] uppercase">
            <Flame className="w-3 h-3 animate-pulse" /> LIVE
          </span>
          <span className="truncate text-paper-sunken">
            FORGE Cohort 03 &amp; E Summit 26 Passes Open
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 shrink-0 text-paper-sunken">
          <span className="text-[11px] text-[#A6E000]">
            T {timeLeft.days}D:{String(timeLeft.hours).padStart(2, "0")}H:{String(timeLeft.mins).padStart(2, "0")}M
          </span>
          <span className="text-paper-border">|</span>
          <Link
            href="/summit"
            className="text-xs hover:text-lime flex items-center gap-1 transition-colors underline underline-offset-2"
          >
            <span>Request Pass</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
