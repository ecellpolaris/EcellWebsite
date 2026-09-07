import React from "react";
import Link from "next/link";
import { Sparkles, Swords, Building2, ArrowRight } from "lucide-react";

export const WhatWeDo: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Light the match",
      tag: "INSPIRATION & SKILLS",
      desc: "Founder AMAs with operators who built Series B companies, midnight hack nights in the hostel common room, and zero-bullshit technical teardowns.",
      bulletPoints: [
        "Uncensored founder firesides",
        "Agentic coding & systems bootcamps",
        "Freshers' Ignition for 1st years",
      ],
      icon: <Sparkles className="w-5 h-5 text-ink" />,
      link: "/events",
      linkText: "Explore events",
    },
    {
      num: "02",
      title: "Pitch on the big stage",
      tag: "POLARIS DEMO DAY",
      desc: "Selected student founders pitch their products directly to industry mentors and angels for seed funding and fast-track paid startup internships.",
      bulletPoints: [
        "Live on-stage product demo",
        "Direct angel & seed cheques",
        "Paid startup internship pipelines",
      ],
      icon: <Swords className="w-5 h-5 text-ink" />,
      link: "/programs/polaris-demo-day",
      linkText: "Explore Demo Day",
    },
    {
      num: "03",
      title: "Deep industry immersion",
      tag: "FELLOWSHIP & GLOBAL FUND",
      desc: "A selective 6-month program connecting exceptional student builders with leading Bengaluru startups, backed by a $10M+ global tech resource network.",
      bulletPoints: [
        "Production engineering residencies",
        "1-on-1 founder mentorship",
        "Access to $10M+ global tech fund",
      ],
      icon: <Building2 className="w-5 h-5 text-ink" />,
      link: "/programs/polaris-fellowship",
      linkText: "View Fellowship",
    },
  ];

  return (
    <section className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            HOW THE OPERATING SYSTEM WORKS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            What we actually do.
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            No ceremonial ribbon cuttings. We run an end-to-end founder pipeline built specifically for engineering and design students.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-paper-card border border-paper-border p-5 sm:p-7 lg:p-8 rounded-[4px] shadow-card flex flex-col justify-between relative group hover:border-ink/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-4">
                  <span className="font-mono font-extrabold text-2xl text-ink">
                    {pillar.num}
                  </span>
                  <div className="w-9 h-9 rounded-[3px] bg-paper-sunken border border-paper-border flex items-center justify-center">
                    {pillar.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="micro-label text-ink-muted text-[10px] font-mono">
                    {pillar.tag}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {pillar.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-paper-border/60 text-xs font-mono text-ink">
                  {pillar.bulletPoints.map((bp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime border border-[#86B800]" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-paper-border">
                <Link
                  href={pillar.link}
                  className="font-mono text-xs font-bold text-ink hover:text-ink-muted flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
