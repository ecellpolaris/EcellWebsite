"use client";

import React, { useState } from "react";
import {
  AMBASSADOR_PERKS,
  AMBASSADOR_TASKS,
  CA_LEADERBOARD,
} from "@/lib/data/ambassadors-data";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Dialog } from "@/components/ui/Dialog";
import { addXP } from "@/lib/xp";
import { CheckCircle2, Trophy, Globe, ArrowRight, Zap } from "lucide-react";

export default function AmbassadorsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    city: "",
    year: "2nd Year",
    reach: "100 to 500 students",
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    addXP(60, "SPARK Ambassador Application");
    setHasApplied(true);
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                CAMPUS ENVOY NETWORK
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                INTER-COLLEGE COALITION
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              SPARK Ambassadors.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Represent E Cell PST at your campus or university. Scout high conviction dorm ventures, host satellite pitch screenings, and unlock VIP access to E Summit 26.
            </p>
          </div>

          <Button
            variant="lime"
            onClick={() => {
              setIsApplyOpen(true);
              setHasApplied(false);
            }}
          >
            Apply as Ambassador (+60 XP)
          </Button>
        </div>

        {/* 4 Perks Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              RETURN ON EFFORT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Ambassador Perks.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMBASSADOR_PERKS.map((p, i) => (
              <div
                key={i}
                className="bg-paper-card border border-paper-border rounded-[4px] p-6 shadow-card space-y-3 hover:border-ink/50 transition-colors"
              >
                <span className="text-3xl select-none">{p.icon}</span>
                <h3 className="font-display font-bold text-lg text-ink">
                  {p.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What Ambassadors Actually Do */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              OPERATIONAL CADENCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              What You Actually Do.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AMBASSADOR_TASKS.map((task) => (
              <div
                key={task.id}
                className="p-5 bg-paper-card border border-paper-border rounded-[4px] shadow-card space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-paper-border pb-2 text-xs font-mono">
                    <span className="font-bold text-ink-muted uppercase">
                      {task.category}
                    </span>
                    <span className="font-bold text-ink bg-lime px-2 py-0.5 rounded text-[10px]">
                      +{task.xpReward} XP
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {task.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed font-sans">
                    {task.desc}
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-ink-muted">
                  Cadence: {task.cadence}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CA Leaderboard Table */}
        <div className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-8 shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-paper-border pb-4">
            <div>
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                INTER-CAMPUS STANDINGS
              </span>
              <h3 className="font-display font-bold text-2xl text-ink">
                Ambassador Leaderboard.
              </h3>
            </div>
            <span className="stamp-tag bg-paper-sunken text-ink text-xs">
              SEASON 26
            </span>
          </div>

          <div className="overflow-x-auto font-mono text-xs">
            <table className="w-full min-w-[480px] text-left border-collapse">
              <thead>
                <tr className="border-b border-paper-border text-ink-muted uppercase text-[10px]">
                  <th className="py-2.5 px-3">Rank</th>
                  <th className="py-2.5 px-3">Ambassador</th>
                  <th className="py-2.5 px-3">College &middot; City</th>
                  <th className="py-2.5 px-3 text-center">Delegates</th>
                  <th className="py-2.5 px-3 text-right">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-paper-border/60">
                {CA_LEADERBOARD.map((ca) => (
                  <tr key={ca.rank} className="hover:bg-paper-sunken/50 text-ink">
                    <td className="py-3 px-3 font-bold">#{ca.rank}</td>
                    <td className="py-3 px-3">
                      <span className="font-bold block">{ca.name}</span>
                      <span className="text-[10px] text-ink-muted">{ca.badge}</span>
                    </td>
                    <td className="py-3 px-3 text-ink-muted">
                      {ca.college} &middot; {ca.city}
                    </td>
                    <td className="py-3 px-3 text-center font-bold">
                      {ca.delegatesRegistered}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-ink">
                      {ca.points} PTS
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Apply Dialog */}
        <Dialog
          isOpen={isApplyOpen}
          onClose={() => setIsApplyOpen(false)}
          title="Apply to SPARK Ambassadors"
          kicker="INTER-COLLEGE NETWORK &middot; +60 ARENA XP"
        >
          {!hasApplied ? (
            <form onSubmit={handleApply} className="space-y-4 pt-2">
              <Input
                label="Full Name"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="name@college.edu"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  label="College Name"
                  placeholder="e.g. PES, RVCE, IIITB"
                  value={form.college}
                  onChange={(e) => setForm({ ...form, college: e.target.value })}
                  required
                />
                <Input
                  label="City"
                  placeholder="e.g. Bengaluru"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  required
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
                <Button type="button" variant="subtle" onClick={() => setIsApplyOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="lime">
                  Submit Application (+60 XP)
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-status-ok" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Application Received!
              </h3>
              <p className="text-xs font-mono text-ink-muted">
                Our outreach vertical reviews campus envoy applications within 48 hours. Welcome to the coalition.
              </p>
              <Button variant="subtle" onClick={() => setIsApplyOpen(false)}>
                Done
              </Button>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
