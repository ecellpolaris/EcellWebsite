"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { STARTUPS, CampusStartup } from "@/lib/data/startups";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Dialog } from "@/components/ui/Dialog";
import { addXP } from "@/lib/xp";
import { ExternalLink, Plus, Sparkles, Building, CheckCircle2 } from "lucide-react";

const SideRays = dynamic(() => import("@/components/ui/SideRays"), {
  ssr: false,
});

export default function StartupsPage() {
  const [activeSector, setActiveSector] = useState<string>("All");
  const [activeStage, setActiveStage] = useState<string>("All");
  const [startupsList, setStartupsList] = useState<CampusStartup[]>(STARTUPS);

  // Get Listed modal state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    sector: "EdTech",
    stage: "MVP Live" as const,
    founderName: "",
    oneLiner: "",
    whatEcellDid: "Applied through campus portal",
  });

  const sectors = ["All", ...Array.from(new Set(startupsList.map((s) => s.sector)))];
  const stages = ["All", "Funded", "Incorporated", "MVP Live", "Ideating"];

  const filtered = startupsList.filter((s) => {
    const matchSector = activeSector === "All" || s.sector === activeSector;
    const matchStage = activeStage === "All" || s.stage === activeStage;
    return matchSector && matchStage;
  });

  const handleAddStartup = (e: React.FormEvent) => {
    e.preventDefault();
    const newStartup: CampusStartup = {
      slug: form.name.toLowerCase().replace(/\s+/g, "-"),
      name: form.name,
      sector: form.sector,
      stage: form.stage,
      founders: [{ name: form.founderName, year: "1st Year", dept: "Computer Science" }],
      oneLiner: form.oneLiner,
      description: form.oneLiner,
      whatEcellDid: form.whatEcellDid,
      metrics: [{ label: "Status", value: "Review Queue" }],
      tags: ["Campus Venture", form.sector],
    };
    setStartupsList([newStartup, ...startupsList]);
    addXP(80, `Startup Submission: ${form.name}`);
    setHasSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      {/* Daylight Foundry SideRays Top Atmosphere */}
      <div
        className="absolute top-0 left-0 right-0 h-[460px] pointer-events-none z-0 opacity-75"
        style={{
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      >
        <SideRays
          origin="top-right"
          rayColor1="#B6F000"
          rayColor2="#FF4D1C"
          speed={1.8}
          intensity={1.5}
          spread={2.2}
          falloff={1.5}
          saturation={1.4}
          blend={0.7}
          opacity={0.85}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                CAMPUS PORTFOLIO
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                {startupsList.length} VENTURES IN MOTION
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Startups.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              We track working products, not logo graveyards. Here are the companies founded by undergraduate Polarisians across Bengaluru and beyond.
            </p>
          </div>

          <Button
            variant="lime"
            onClick={() => {
              setIsSubmitModalOpen(true);
              setHasSubmitted(false);
            }}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Get Listed on Campus
          </Button>
        </div>

        {/* Portfolio Stats Bar */}
        <div className="p-3.5 sm:p-5 bg-paper-card border border-paper-border rounded-[4px] shadow-card grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-mono">
          <div>
            <span className="text-ink-muted block uppercase text-[10px]">TOTAL VENTURES</span>
            <span className="font-bold text-ink text-lg sm:text-xl">{startupsList.length} Active</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase text-[10px]">INCORPORATED / FUNDED</span>
            <span className="font-bold text-ink text-lg sm:text-xl">
              {startupsList.filter((s) => s.stage === "Funded" || s.stage === "Incorporated").length} Entities
            </span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase text-[10px]">ACTIVE HIRING ROLES</span>
            <span className="font-bold text-ink text-lg sm:text-xl">6 Open Roles</span>
          </div>
          <div>
            <span className="text-ink-muted block uppercase text-[10px]">NON DILUTIVE EQUITY</span>
            <span className="font-bold text-ink text-lg sm:text-xl">0% Taken</span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-muted mr-1 font-bold">SECTOR:</span>
            {sectors.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setActiveSector(sec)}
                className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                  activeSector === sec
                    ? "bg-ink text-paper-card border-ink font-bold"
                    : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-muted mr-1 font-bold">STAGE:</span>
            {stages.map((stg) => (
              <button
                key={stg}
                type="button"
                onClick={() => setActiveStage(stg)}
                className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                  activeStage === stg
                    ? "bg-lime text-ink border-[#9DD400] font-bold"
                    : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
                }`}
              >
                {stg}
              </button>
            ))}
          </div>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((startup) => (
            <div
              key={startup.slug}
              className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-5 sm:space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <span className="micro-label font-mono text-xs font-bold text-ink-muted uppercase">
                    {startup.sector}
                  </span>
                  <Badge
                    variant={
                      startup.stage === "Funded"
                        ? "lime"
                        : startup.stage === "Incorporated"
                        ? "teal"
                        : startup.stage === "MVP Live"
                        ? "heat"
                        : "muted"
                    }
                    size="xs"
                  >
                    {startup.stage}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-ink flex items-center justify-between">
                    <span>{startup.name}</span>
                    {startup.websiteUrl && (
                      <a
                        href={startup.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink-muted hover:text-ink"
                        title="Visit external site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-xs font-mono text-ink-muted">
                    Founders: {startup.founders.map((f) => `${f.name} (${f.year} &middot; ${f.dept})`).join(", ")}
                  </p>
                </div>

                <p className="text-sm text-ink leading-relaxed">
                  {startup.oneLiner}
                </p>

                {/* What E Cell Did */}
                <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] text-xs">
                  <span className="font-mono font-bold text-ink block mb-0.5">
                    WHAT E CELL DID:
                  </span>
                  <p className="text-ink-muted leading-relaxed font-sans">
                    {startup.whatEcellDid}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {startup.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-paper-sunken border border-paper-border rounded text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="pt-4 border-t border-paper-border grid grid-cols-2 gap-2 text-xs font-mono">
                {startup.metrics.slice(0, 2).map((m, idx) => (
                  <div key={idx}>
                    <span className="text-ink-muted block text-[10px] uppercase">
                      {m.label}
                    </span>
                    <span className="font-bold text-ink text-xs sm:text-sm">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Get Listed Modal */}
        <Dialog
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
          title="Get Your Startup Listed"
          kicker="CAMPUS VENTURE DIRECTORY"
        >
          {!hasSubmitted ? (
            <form onSubmit={handleAddStartup} className="space-y-4 pt-2">
              <Input
                label="Company / Project Name"
                placeholder="e.g. NexusEval"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                label="Founder Name(s)"
                placeholder="Your Name (Year &amp; Department)"
                value={form.founderName}
                onChange={(e) => setForm({ ...form, founderName: e.target.value })}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                    Sector
                  </label>
                  <select
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value as any })}
                    className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2 rounded-[4px]"
                  >
                    {sectors.filter((s) => s !== "All").map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                    Current Stage
                  </label>
                  <select
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value as any })}
                    className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2 rounded-[4px]"
                  >
                    <option value="Ideating">Ideating</option>
                    <option value="MVP Live">MVP Live</option>
                    <option value="Incorporated">Incorporated</option>
                    <option value="Funded">Funded</option>
                  </select>
                </div>
              </div>
              <Textarea
                label="One-Liner (What do you do?)"
                placeholder="Automated regression testing for LLM pipelines..."
                rows={3}
                value={form.oneLiner}
                onChange={(e) => setForm({ ...form, oneLiner: e.target.value })}
                required
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
                <Button type="button" variant="subtle" onClick={() => setIsSubmitModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="lime">
                  Add to Directory
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-status-ok" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Startup Added to Portfolio!
              </h3>
              <p className="text-xs font-mono text-ink-muted">
                {form.name} is now listed in the directory.
              </p>
              <Button variant="subtle" onClick={() => setIsSubmitModalOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
