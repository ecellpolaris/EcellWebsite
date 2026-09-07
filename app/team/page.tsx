import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRESIDENT, CORE_MEMBERS, ASSOCIATES, FACULTY_ADVISOR } from "@/lib/data/team";
import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Github, Linkedin, Twitter, Instagram, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Team · Season 26",
  description: `Meet the student operators and engineering leads behind ${site.brand}, led by President Saahi Dubey.`,
};

export default function TeamPage() {
  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header with Season Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-[4px] overflow-hidden border-2 border-ink bg-paper-card shrink-0 shadow-sm">
                <Image
                  src="/team/ecell-logo.jpeg"
                  alt="E Cell PST Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="stamp-tag bg-lime text-ink font-bold">
                  OPERATIONAL CREW
                </span>
                <span className="micro-label font-mono text-ink-muted text-xs">
                  SEASON 26 &middot; BENGALURU
                </span>
              </div>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              The Builders Behind It.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              No ceremonial committees. The E Cell PST Core is run by students who write production software, design daylight brand systems, and assemble investor networks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="p-2 bg-paper-sunken border border-paper-border font-mono text-xs font-bold text-ink rounded">
              Cohort: 2026 to 2027 Core
            </span>
            <Button variant="lime" href="/join">
              Apply to Core &rarr;
            </Button>
          </div>
        </div>

        {/* President Card: First and Largest */}
        <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 lg:p-10 shadow-lift">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-md group">
                <Image
                  src={PRESIDENT.avatar}
                  alt={PRESIDENT.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-paper-border pb-3">
                <span className="stamp-tag bg-lime text-ink font-bold">
                  EXECUTIVE LEADERSHIP
                </span>
                <div className="flex items-center gap-3 text-ink">
                  {PRESIDENT.socials.github && (
                    <a href={PRESIDENT.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink-muted">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {PRESIDENT.socials.linkedin && (
                    <a href={PRESIDENT.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink-muted">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {PRESIDENT.socials.twitter && (
                    <a href={PRESIDENT.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-ink-muted">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
                  {PRESIDENT.name}
                </h2>
                <p className="font-mono text-sm font-bold text-heat mt-0.5">
                  {PRESIDENT.role}
                </p>
              </div>

              <p className="text-base text-ink leading-relaxed font-medium">
                {PRESIDENT.bio}
              </p>

              <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] text-xs font-mono">
                <span className="font-bold text-ink block mb-0.5">CURRENT OBSESSION:</span>
                <span className="text-ink-muted">{PRESIDENT.buildingOrObsessed}</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                {PRESIDENT.socials.linkedin && (
                  <a
                    href={PRESIDENT.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-ink text-paper-card hover:bg-ink-muted px-4 py-2 rounded transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-lime" />
                    <span>Connect on LinkedIn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Advisor Section */}
        <div className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-8 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-paper-border bg-paper-sunken shrink-0 shadow-sm">
            <Image
              src={FACULTY_ADVISOR.avatar}
              alt={FACULTY_ADVISOR.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-ink" />
              <span className="micro-label font-mono text-ink-muted text-xs">
                INSTITUTIONAL MENTOR
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-ink">
              {FACULTY_ADVISOR.name}
            </h3>
            <p className="text-xs font-mono text-ink-muted">
              {FACULTY_ADVISOR.role} &middot; {FACULTY_ADVISOR.affiliation}
            </p>
            <p className="text-sm text-ink-muted leading-relaxed pt-1">
              {FACULTY_ADVISOR.bio}
            </p>
          </div>
        </div>

        {/* Vertical Leads Bento Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              VERTICAL LEADS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Functional Heads.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-4 sm:space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-paper-border pb-3">
                    <span className="micro-label font-mono text-[10px] text-ink-muted uppercase">
                      {member.vertical}
                    </span>
                    <div className="flex items-center gap-2 text-ink-muted">
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-sm group">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-ink">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-heat font-semibold">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-ink leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="p-2.5 bg-paper-sunken border border-paper-border rounded-[3px] text-[11px] font-mono">
                    <span className="text-ink-muted block uppercase text-[9px]">OBSESSED WITH:</span>
                    <span className="text-ink">{member.buildingOrObsessed}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-paper-border/60 flex items-center justify-between">
                  {member.socials.linkedin ? (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-ink hover:text-ink-muted bg-paper-sunken border border-paper-border hover:border-ink px-2.5 py-1 rounded transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      <span>LinkedIn Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-ink-muted">PST Core</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Associates & WebOps Credit */}
        <div className="p-5 sm:p-8 bg-paper-sunken border border-paper-border rounded-[4px] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-paper-border pb-4">
            <div>
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                ASSOCIATES &amp; WEBOPS DEPLOYMENT
              </span>
              <h3 className="font-display font-bold text-2xl text-ink">
                WebOps &amp; Support Crew.
              </h3>
            </div>
            <span className="stamp-tag bg-paper-card text-ink">
              SHIPPED BY WEBOPS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-mono">
            {ASSOCIATES.map((a, i) => (
              <div key={i} className="p-3 bg-paper-card border border-paper-border rounded">
                <span className="font-bold text-ink block">{a.name}</span>
                <span className="text-ink-muted text-[11px] block">{a.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote & Join CTA */}
        <div className="pt-8 border-t border-paper-border text-center space-y-4 max-w-xl mx-auto">
          <blockquote className="font-display font-bold text-xl text-ink">
            &ldquo;We will not clap for participation. We will help you ship.&rdquo;
          </blockquote>
          <p className="text-xs font-mono text-ink-muted">
            &middot; Saahi Dubey, President
          </p>
          <div className="pt-2">
            <Button variant="lime" href="/join">
              Apply for Core Team 2026 to 2027
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
