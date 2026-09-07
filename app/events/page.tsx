"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EVENTS, CampusEvent } from "@/lib/data/events";
import { site } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Calendar, MapPin, Users, Zap, ArrowRight, MessageCircle, Clock, Sparkles } from "lucide-react";

// Set to false when ready to restore full events calendar
const IS_COMING_SOON = true;

export default function EventsPage() {
  if (IS_COMING_SOON) {
    return <EventsComingSoon />;
  }

  return <EventsContent />;
}

/**
 * Coming Soon State (Daylight Foundry Theme)
 */
function EventsComingSoon() {
  return (
    <div className="py-12 lg:py-20 bg-paper min-h-screen corner-wash flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="stamp-tag bg-lime text-ink font-bold">
            CAMPUS CALENDAR
          </span>
          <span className="micro-label font-mono text-heat font-bold text-xs uppercase bg-[#FFF0EB] border border-[#FFD5C7] px-2 py-0.5 rounded">
            COMING SOON &middot; SEASON 26
          </span>
        </div>

        {/* Heading Lockup */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            Events &amp; Sprints.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
            From late night common room coding jams to high stakes investor pitch sprints on the auditorium stage.
          </p>
        </div>

        {/* Hero Notice Card */}
        <div className="bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-10 shadow-card space-y-6 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3 border-b border-paper-border pb-4">
            <div className="w-10 h-10 rounded-[3px] bg-paper-sunken border border-paper-border flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-ink" />
            </div>
            <div>
              <span className="micro-label font-mono text-xs text-ink-muted uppercase block">
                SCHEDULE IN THE FOUNDRY
              </span>
              <h3 className="font-display font-bold text-xl text-ink">
                Curating the upcoming lineup.
              </h3>
            </div>
          </div>

          <p className="text-sm text-ink-muted leading-relaxed font-sans">
            We are structuring high-signal operator teardowns, student venture pitch leagues, and hands-on builder masterclasses for the semester. Venue passes and RSVP slots will unlock here shortly.
          </p>

          <div className="p-4 bg-[#EAFCC0] border border-lime rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
              <span className="font-mono text-xs font-bold text-ink">
                Pass drops &amp; RSVP links drop on WhatsApp first:
              </span>
            </div>
            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs px-3.5 py-1.5 rounded-[3px] font-bold shrink-0 inline-flex items-center gap-1 transition-colors"
            >
              <span>Join Loop</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs">
            <Link
              href="/programs"
              className="bg-ink hover:bg-ink-muted text-paper-card px-4 py-2.5 rounded-[3px] font-bold text-center transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="border border-paper-border hover:border-ink bg-paper-card text-ink px-4 py-2.5 rounded-[3px] font-bold text-center transition-colors"
            >
              Host or Pitch an Event &rarr;
            </Link>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-heat" />
            <span>48-hour response SLA</span>
          </span>
          <span>&middot;</span>
          <span>Room 204 E-Cell Bay</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Full Events Content (Preserved completely for future re-activation)
 */
function EventsContent() {
  const [activeStatus, setActiveStatus] = useState<string>("Upcoming");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const statusTabs = [
    { id: "Upcoming", label: "Upcoming & Live", badge: EVENTS.filter((e) => e.status === "Upcoming").length },
    { id: "Past", label: "Past Archives", badge: EVENTS.filter((e) => e.status === "Past").length },
  ];

  const categories = ["All", "Workshop", "Competition", "Talk", "Mixer", "Summit"];

  const filtered = EVENTS.filter((e) => {
    const matchesStatus = e.status === activeStatus;
    const matchesCategory = activeCategory === "All" || e.category === activeCategory;
    return matchesStatus && matchesCategory;
  });

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                CAMPUS CALENDAR
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                SEASON 26 &middot; BENGALURU
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Events &amp; Sprints.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              From late night common room coding jams to high stakes investor pitch sprints on the auditorium stage.
            </p>
          </div>

          <Tabs
            tabs={statusTabs}
            activeTab={activeStatus}
            onChange={setActiveStatus}
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                activeCategory === cat
                  ? "bg-ink text-paper-card border-ink font-bold"
                  : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* WhatsApp Events Notice Banner */}
        <div className="p-4 bg-[#EAFCC0] border border-lime rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white border border-lime flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-ink block">
                Never miss an RSVP or pop up founder sprint.
              </span>
              <span className="text-xs font-mono text-ink-muted block">
                Venue pass drops, speaker slides, and pitch shortlists are announced on WhatsApp first.
              </span>
            </div>
          </div>
          <a
            href={site.links.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono font-bold text-xs px-4 py-2 rounded-[3px] shrink-0 inline-flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <span>Join WhatsApp Community</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((event) => (
            <div
              key={event.slug}
              className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-7 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <span className="micro-label font-mono text-xs font-bold text-ink-muted uppercase">
                    [{event.category}] &middot; {event.kicker}
                  </span>
                  <Badge variant="xp" size="xs">
                    +{event.xpReward} XP
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-ink leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {event.shortDesc}
                  </p>
                </div>

                <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-2 text-ink font-bold">
                    <Calendar className="w-3.5 h-3.5 text-heat" />
                    <span>{event.date} &middot; {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-muted">
                    <MapPin className="w-3.5 h-3.5 text-ink" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink-muted">
                    <Users className="w-3.5 h-3.5 text-ink" />
                    <span>
                      {event.status === "Upcoming"
                        ? `${event.spotsLeft} seats remaining (${event.capacity})`
                        : `${event.capacity} attended`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-status-ok" />
                  <span className="font-mono text-xs text-ink-muted">
                    Led by {event.speaker.name}
                  </span>
                </div>

                <Link
                  href={`/events/${event.slug}`}
                  className="bg-lime hover:bg-lime-hover text-ink font-mono text-xs px-3.5 py-2 rounded-[3px] font-bold border border-[#9DD400] flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-95 w-full sm:w-auto"
                >
                  <span>{event.status === "Upcoming" ? "RSVP & Agenda" : "View Archive"}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
