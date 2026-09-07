"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { site } from "@/lib/site-config";
import { ArrowUpRight, Zap, MessageCircle } from "lucide-react";

const SideRays = dynamic(() => import("@/components/ui/SideRays"), {
  ssr: false,
});

export const HeroPoster: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-paper-border corner-wash">
      {/* Daylight Foundry Animated Rays Background Atmosphere */}
      <div
        className="absolute top-0 right-0 w-full h-[700px] pointer-events-none opacity-65 z-0 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        <SideRays
          origin="top-right"
          rayColor1="#B6F000"
          rayColor2="#FF4D1C"
          speed={2.4}
          intensity={2.2}
          spread={2.8}
          tilt={-12}
          saturation={1.7}
          blend={0.75}
          falloff={1.3}
          opacity={0.9}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Stamped Kicker */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative w-6 h-6 rounded-[3px] overflow-hidden border border-paper-border bg-paper-card shrink-0">
              <Image
                src="/team/ecell-logo.jpeg"
                alt="E Cell PST Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="stamp-tag bg-paper-card text-ink border-ink">
              EST. {site.foundedYear}
            </span>
            <span className="micro-label text-ink-muted text-xs tracking-widest font-mono">
              BENGALURU &middot; {site.collegeName.toUpperCase()}
            </span>
          </div>

          {/* Massive 2-Line Syne Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-[-0.035em] text-ink break-normal">
            <span className="block">Build companies.</span>
            <span className="inline-block relative mt-1 sm:mt-2">
              <span className="relative z-10">Not résumés.</span>
              <span className="absolute bottom-1.5 sm:bottom-3 left-0 right-0 h-3 sm:h-5 bg-lime/70 -z-10 transform -rotate-1" />
            </span>
          </h1>

          {/* Subtitle with Honest Campus Tone */}
          <p className="text-base sm:text-lg lg:text-xl text-ink-muted leading-relaxed max-w-2xl">
            E Cell PST is where Polarisians turn a hostel room itch into a team, a mentor, a deadline, and a stage. If you can ship a prototype before the semester ends, you already belong here.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/idea"
              className="bg-lime hover:bg-lime-hover text-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-[4px] border border-[#A6E000] shadow-sm inline-flex items-center gap-2 active:scale-98 transition-transform"
            >
              <span>Submit your idea</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/arena"
              className="bg-paper-card hover:bg-paper-sunken text-ink font-semibold text-sm sm:text-base px-5 py-3.5 rounded-[4px] border border-ink shadow-sm inline-flex items-center gap-2 transition-colors"
            >
              <Zap className="w-4 h-4 fill-lime text-ink" />
              <span>Enter The Arena</span>
            </Link>



            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] dark:text-[#25D366] font-semibold text-sm sm:text-base px-5 py-3.5 rounded-[4px] border border-[#25D366]/40 shadow-sm inline-flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>

          {/* Micro Trust Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-status-ok inline-block" />
              <span>FORGE Cohort 03 Apps Live</span>
            </span>
            <span>&bull;</span>
            <span>Wipro / DivyaSree Tech Park Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
};
