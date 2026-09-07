import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROGRAMS, Program } from "@/lib/data/programs";
import { site } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, Clock, Users, Trophy, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";

interface ProgramPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const program = PROGRAMS.find((p) => p.slug === params.slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.title} · Initiatives`,
    description: program.oneLiner,
  };
}

export default function ProgramDetailPage({ params }: ProgramPageProps) {
  const program = PROGRAMS.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
          <Link href="/programs" className="hover:text-ink">
            &larr; All Programs
          </Link>
          <span>/</span>
          <span className="text-ink font-bold">{program.title}</span>
        </div>

        {/* Hero Banner */}
        <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 lg:p-10 shadow-lift space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-border pb-4">
            <span className="stamp-tag bg-lime text-ink font-bold">
              {program.kicker}
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
              size="sm"
            >
              {program.status}
            </Badge>
          </div>

          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
              {program.title}
            </h1>
            <p className="font-display text-lg sm:text-xl text-ink font-semibold">
              {program.tagline}
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
              {program.oneLiner}
            </p>
          </div>

          {/* Quick Details Bar */}
          <div className="pt-4 border-t border-paper-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-ink-muted block uppercase text-[10px]">DURATION</span>
              <span className="font-bold text-ink text-sm">{program.duration}</span>
            </div>
            <div>
              <span className="text-ink-muted block uppercase text-[10px]">CATEGORY</span>
              <span className="font-bold text-ink text-sm">{program.category}</span>
            </div>
            <div>
              <span className="text-ink-muted block uppercase text-[10px]">MENTORS</span>
              <span className="font-bold text-ink text-sm">{program.mentorsCount}</span>
            </div>
            {program.prizesOrGrant && (
              <div>
                <span className="text-ink-muted block uppercase text-[10px]">PRIZES &amp; GRANTS</span>
                <span className="font-bold text-ink text-sm text-heat">{program.prizesOrGrant}</span>
              </div>
            )}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href={program.ctaLink}
              className="bg-lime hover:bg-lime-hover text-ink font-bold text-sm px-6 py-3 rounded-[4px] border border-[#A6E000] inline-flex items-center gap-2"
            >
              <span>{program.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/idea"
              className="bg-paper-sunken hover:bg-paper-border text-ink font-mono text-xs px-4 py-3 rounded-[4px] border border-paper-border inline-flex items-center gap-1.5"
            >
              <span>Submit Project Hypothesis &rarr;</span>
            </Link>
            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] dark:text-[#25D366] font-mono text-xs px-4 py-3 rounded-[4px] border border-[#25D366]/40 inline-flex items-center gap-1.5 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
              <span>Initiative WhatsApp Loop</span>
            </a>
          </div>
        </div>

        {/* Section 2: Who It's For & Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-paper-card border border-paper-border rounded-[4px] p-5 sm:p-7 shadow-card space-y-3">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              TARGET PROFILE
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
              Who it&apos;s for.
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {program.whoItsFor}
            </p>
          </div>

          <div className="bg-paper-card border border-paper-border rounded-[4px] p-5 sm:p-7 shadow-card space-y-3">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              OPERATING MODEL
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
              Program format.
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {program.format}
            </p>
          </div>
        </div>

        {/* Section 3: Timeline Stepper */}
        <div className="bg-paper-card border border-paper-border rounded-[4px] p-5 sm:p-8 shadow-card space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              ROADMAP &amp; MILESTONES
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
              Cohort Progression.
            </h3>
          </div>

          <div className="divide-y divide-paper-border/60">
            {program.timeline.map((item, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="font-mono text-xs font-bold text-ink bg-paper-sunken border border-paper-border px-2.5 py-1 rounded w-fit shrink-0">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-ink">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: What You Walk Away With */}
        <div className="bg-paper-sunken border border-paper-border rounded-[4px] p-5 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              TANGIBLE VALUE
            </span>
            <h3 className="font-display font-bold text-2xl text-ink">
              What you walk away with.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {program.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-4 bg-paper-card border border-paper-border rounded-[4px] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-status-ok shrink-0 mt-0.5" />
                <span className="text-ink font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Program FAQs */}
        {program.faqs.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-paper-border">
            <div className="space-y-1">
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                DIRECT ANSWERS
              </span>
              <h3 className="font-display font-bold text-2xl text-ink">
                Program FAQ.
              </h3>
            </div>

            <Accordion
              items={program.faqs.map((f, i) => ({
                id: `p-faq-${i}`,
                question: f.q,
                answer: f.a,
              }))}
            />
          </div>
        )}
      </div>
    </div>
  );
}
