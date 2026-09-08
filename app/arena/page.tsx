import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { PlayerProfileCard } from "@/components/arena/PlayerProfileCard";
import { QuestBoard } from "@/components/arena/QuestBoard";
import { BadgeGrid } from "@/components/arena/BadgeGrid";
import { Zap, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Arena · Campus Founder Skill Gym",
  description: "Track your startup quests, unlock founder badges, and build your public track record.",
};

export default function ArenaPage() {
  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                PUBLIC GAMIFICATION
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                SEASON 26 &middot; LIVE
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              The Arena.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Effort is scored. Lurking is free, but building is earned. Complete campus founder quests, test your startup IQ, and build your public track record.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-[4px] flex items-center gap-2 font-bold shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Join Builders WhatsApp</span>
            </a>

            <Link
              href="/arena/quiz"
              className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs sm:text-sm px-5 py-3 rounded-[4px] flex items-center gap-2 transition-colors font-bold"
            >
              <HelpCircle className="w-4 h-4 text-lime" />
              <span>Take Founder IQ Quiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Top: Player Card */}
        <PlayerProfileCard />

        {/* Main Sections: Quests & Badges */}
        <div className="space-y-8">
          <QuestBoard />
          <BadgeGrid />
        </div>
      </div>
    </div>
  );
}
