import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Flame, Trophy, Hammer, Globe, Users, Zap } from "lucide-react";

export const FlagshipGrid: React.FC = () => {
  const flagships = [
    {
      title: "E Summit 26",
      theme: "UNFINISHED",
      status: "APPS OPEN" as const,
      statusVariant: "lime" as const,
      tagline: "48 hour flagship festival with 4 conclaves, 25+ operators, and direct angel demo alley.",
      metric: "₹3.5L Grant Pool",
      href: "/summit",
      icon: <Flame className="w-5 h-5 text-heat" />,
      span: "md:col-span-2",
      badgeText: "OCT 17 to 18",
    },
    {
      title: "IGNITE Pitch League",
      theme: "COMPETITION",
      status: "LIVE" as const,
      statusVariant: "heat" as const,
      tagline: "No academic slide decks. 5 minutes pitch, 7 minutes ruthless operator roast.",
      metric: "₹1.5L First Prize",
      href: "/programs/ignite",
      icon: <Trophy className="w-5 h-5 text-ink" />,
      span: "md:col-span-1",
      badgeText: "FALL SPRINT",
    },
    {
      title: "FORGE Pre Incubation",
      theme: "8 WEEK SPRINT",
      status: "APPS OPEN" as const,
      statusVariant: "lime" as const,
      tagline: "Weekly Saturday audits, cloud credits, customer traction, and 0% equity.",
      metric: "7 Startups in Cohort",
      href: "/programs/forge",
      icon: <Hammer className="w-5 h-5 text-ink" />,
      span: "md:col-span-1",
      badgeText: "COHORT 03",
    },
    {
      title: "The Arena",
      theme: "FOUNDER GAMIFICATION",
      status: "LIVE" as const,
      statusVariant: "teal" as const,
      tagline: "Earn XP, clear founder quests, take the timed IQ quiz, and top the campus board.",
      metric: "400+ In The Loop",
      href: "/arena",
      icon: <Zap className="w-5 h-5 text-teal-data fill-teal-data/20" />,
      span: "md:col-span-2",
      badgeText: "SEASON 26",
    },
    {
      title: "Founder Hours",
      theme: "1 ON 1 SESSIONS",
      status: "ROLLING" as const,
      statusVariant: "outline" as const,
      tagline: "Unvarnished 25 minute tactical slots with operators who built Series A+ companies.",
      metric: "18 Active Mentors",
      href: "/mentors",
      icon: <Users className="w-5 h-5 text-ink" />,
      span: "md:col-span-1",
      badgeText: "WED & FRI",
    },
    {
      title: "SPARK Ambassadors",
      theme: "CAMPUS NETWORK",
      status: "APPS OPEN" as const,
      statusVariant: "lime" as const,
      tagline: "Represent E Cell PST across Karnataka. Run satellite pitches and win VIP summit passes.",
      metric: "12 Partner Colleges",
      href: "/ambassadors",
      icon: <Globe className="w-5 h-5 text-ink" />,
      span: "md:col-span-2",
      badgeText: "ENVOY CORPS",
    },
  ];

  return (
    <section className="py-20 border-b border-paper-border bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            THE CAMPUS FOUNDER STACK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
            Flagship initiatives.
          </h2>
          <p className="text-sm sm:text-base text-ink-muted">
            Each initiative is engineered as a distinct product with clear outcomes, deadlines, and real incentives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flagships.map((f, i) => (
            <div
              key={i}
              className={`bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all ${f.span}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-[3px] bg-paper-sunken border border-paper-border">
                      {f.icon}
                    </span>
                    <span className="micro-label font-mono text-xs font-bold text-ink-muted">
                      {f.theme}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={f.statusVariant} size="xs">
                      {f.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-ink">
                    {f.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {f.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-paper-border flex items-center justify-between">
                <div className="font-mono text-xs font-bold text-ink">
                  {f.metric}
                </div>
                <Link
                  href={f.href}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-ink hover:underline decoration-lime decoration-2"
                >
                  <span>Enter Track</span>
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
