"use client";

import React, { useState } from "react";
import { site } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/client";
import { addXP } from "@/lib/xp";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CheckCircle2, ArrowRight, Clock, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";

export default function JoinPage() {
  const [hasApplied, setHasApplied] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    year: "1st Year",
    dept: "Computer Science & AI",
    role: "WebOps & Full Stack Systems",
    portfolioUrl: "",
    pastProject: "",
    whyJoin: "",
  });

  const roles = [
    {
      title: "WebOps & Full Stack Systems",
      hardTruth: "Why this is actually hard: You will maintain production Next.js apps, zero downtime judge scoring portals, and Redis rate limiting during high traffic pitch nights.",
      tags: ["TypeScript", "Next.js", "Tailwind", "Supabase"],
    },
    {
      title: "Venture Incubation & FORGE Lead",
      hardTruth: "Why this is actually hard: You must ruthlessly hold fellow students accountable to weekly user growth milestones and reject fluff pitch decks without apology.",
      tags: ["Accountability", "Operations", "Cohort Reviews"],
    },
    {
      title: "Brand Systems & Editorial Design",
      hardTruth: "Why this is actually hard: We have banned purple SaaS gradients and Canva templates. You will design Swiss-inspired daylight posters, physical print tickets, and high contrast decks.",
      tags: ["Figma", "Typography", "Print Collateral"],
    },
    {
      title: "Capital & Angel Syndicate Outreach",
      hardTruth: "Why this is actually hard: You will cold email 50 micro VCs and Series A operators along the ORR corridor and coordinate private 1 on 1 Founder Hours.",
      tags: ["Venture Capital", "Partnerships", "SLA Discipline"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qNum = Math.floor(140 + Math.random() * 60);
    setQueueNumber(qNum);
    addXP(100, `Core Team Application: ${form.role}`);
    setHasApplied(true);

    try {
      supabase
        .from("core_applications")
        .insert({
          queue_number: qNum,
          name: form.name,
          email: form.email,
          year: form.year,
          dept: form.dept,
          role: form.role,
          portfolio_url: form.portfolioUrl || null,
          past_project: form.pastProject,
          why_join: form.whyJoin,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase application sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase application exception:", err);
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="stamp-tag bg-lime text-ink">
              SEASON 26 RECRUITMENT
            </span>
            <span className="micro-label font-mono text-ink-muted text-xs">
              48 HOUR SLA QUEUE
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            Join the Engine.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            This is not a resume padding club. You will ship real infrastructure, host high stakes pitch leagues, and handle high calibre operators.
          </p>

          {/* Quick WhatsApp Loop Prompt */}
          <div className="p-3.5 bg-[#EAFCC0] border border-lime rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-ink shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-ink">
                Want to build with campus founders right away? Join our official WhatsApp loop.
              </span>
            </div>
            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink hover:bg-ink-muted text-paper-card text-xs font-mono font-bold px-3.5 py-1.5 rounded-[3px] shrink-0 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Join WhatsApp Group</span>
              <ArrowRight className="w-3 h-3 text-lime" />
            </a>
          </div>
        </div>

        {/* Roles Breakdown */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              OPEN SPECIALIZATIONS
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Why Each Role is Actually Hard.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {roles.map((r, i) => (
              <div
                key={i}
                className="p-5 bg-paper-card border border-paper-border rounded-[4px] shadow-card space-y-3"
              >
                <h3 className="font-display font-bold text-lg text-ink">
                  {r.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  {r.hardTruth}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {r.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-paper-sunken border border-paper-border rounded text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-4 sm:p-8 lg:p-10 shadow-lift">
          {!hasApplied ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-paper-border pb-4 space-y-1">
                <span className="micro-label text-ink-muted text-xs font-mono">
                  APPLICATION FORM &middot; SEASON 26
                </span>
                <h3 className="font-display font-bold text-2xl text-ink">
                  Submit Your Proof of Work.
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  label="Polaris Student Email"
                  type="email"
                  placeholder="name@polariscampus.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Academic Year"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  required
                />
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                    Target Vertical
                  </label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
                  >
                    {roles.map((r, i) => (
                      <option key={i} value={r.title}>{r.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Input
                label="Portfolio / GitHub / Figma URL"
                placeholder="https://github.com/yourhandle"
                value={form.portfolioUrl}
                onChange={(e) => setForm({ ...form, portfolioUrl: e.target.value })}
                required
              />

              <Textarea
                label="Ship something you've already made (link, script, design, or initiative)"
                placeholder="I built an open source Next.js tool that does..."
                rows={3}
                value={form.pastProject}
                onChange={(e) => setForm({ ...form, pastProject: e.target.value })}
                required
              />

              <Textarea
                label="What exactly do you want to build here this year? (Max 600 chars)"
                placeholder="I want to build an automated pitch scoring system for IGNITE..."
                rows={4}
                maxLength={600}
                value={form.whyJoin}
                onChange={(e) => setForm({ ...form, whyJoin: e.target.value })}
                required
              />

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-paper-border">
                <span className="text-xs font-mono text-ink-muted">
                  SLA: Expected reply within 48 hours
                </span>
                <Button type="submit" variant="lime" className="w-full sm:w-auto">
                  <span>Submit Application (+100 XP)</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-14 h-14 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-status-ok" />
              </div>

              <div className="space-y-2">
                <span className="stamp-tag bg-ink text-paper-card">
                  QUEUE TICKET #{queueNumber}
                </span>
                <h3 className="font-display font-black text-3xl text-ink">
                  You&apos;re in the queue.
                </h3>
                <p className="text-sm text-ink-muted max-w-md mx-auto">
                  Application logged for <strong className="text-ink">{form.role}</strong>. Our core executive board reviews applications twice weekly.
                </p>
              </div>

              <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] max-w-md mx-auto text-xs font-mono text-left space-y-2">
                <div className="flex items-center gap-2 text-ink font-bold">
                  <Clock className="w-3.5 h-3.5 text-ink" />
                  <span>EXPECTED SLA WINDOW: 48 HOURS</span>
                </div>
                <p className="text-ink-muted">
                  If shortlisted, you will receive a 48 hour tactical task challenge followed by an in person bay interview with Saahi Dubey and vertical leads.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={site.links.whatsappCommunity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-[4px] inline-flex items-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Join Official WhatsApp Group While You Wait</span>
                </a>
              </div>

              <Button
                variant="subtle"
                onClick={() => setHasApplied(false)}
              >
                Submit another response
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
