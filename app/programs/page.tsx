"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROGRAMS, Program } from "@/lib/data/programs";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { ArrowRight, Clock, Users, Trophy } from "lucide-react";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Initiatives", badge: PROGRAMS.length },
    { id: "Pitch Day", label: "Pitch Day" },
    { id: "Fellowship", label: "Fellowship" },
    { id: "Global Fund", label: "Global Fund" },
    { id: "Community", label: "Community" },
  ];

  const filtered =
    activeCategory === "All"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                CAMPUS OPERATING SYSTEM
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                {PROGRAMS.length} TAILORED PROGRAMS
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Programs &amp; Initiatives.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Every stage of your venture journey has a dedicated track · from first year onboarding bootcamps to pre incubation and pitch leagues.
            </p>
          </div>

          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <div
              key={program.slug}
              className="bg-paper-card border border-paper-border rounded-[4px] p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <span className="micro-label font-mono text-[10px] text-ink-muted font-bold uppercase">
                    {program.category}
                  </span>
                  <Badge
                    variant={
                      program.status === "Ongoing" || program.status === "LIVE"
                        ? "heat"
                        : program.status === "Upcoming" || program.status === "APPS OPEN"
                        ? "lime"
                        : program.status === "Already done"
                        ? "muted"
                        : "teal"
                    }
                    size="xs"
                  >
                    {program.status}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-ink leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-xs font-mono text-ink-muted font-bold">
                    {program.kicker}
                  </p>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {program.oneLiner}
                </p>

                <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-ink">
                    <Clock className="w-3.5 h-3.5 text-ink-muted" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-ink">
                    <Users className="w-3.5 h-3.5 text-ink-muted" />
                    <span>{program.mentorsCount}</span>
                  </div>
                  {program.prizesOrGrant && (
                    <div className="flex items-center gap-1.5 text-ink font-bold">
                      <Trophy className="w-3.5 h-3.5 text-lime" />
                      <span>{program.prizesOrGrant}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border flex items-center justify-between">
                <Link
                  href={`/programs/${program.slug}`}
                  className="font-mono text-xs font-bold text-ink hover:underline decoration-lime decoration-2 flex items-center gap-1.5"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href={program.ctaLink}
                  className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs px-3 py-1.5 rounded-[3px] font-bold transition-colors"
                >
                  {program.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
