"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { EVENTS, CampusEvent } from "@/lib/data/events";
import { site } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/client";
import { addXP, getPlayerProfile, savePlayerProfile } from "@/lib/xp";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Dialog } from "@/components/ui/Dialog";
import { Calendar, MapPin, Users, Zap, CheckCircle2, ArrowRight, Download, MessageCircle } from "lucide-react";

interface EventPageProps {
  params: { slug: string };
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = EVENTS.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);
  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    year: "1st Year",
    dept: "Computer Science & AI",
    why: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = getPlayerProfile();
    if (!profile.registeredEvents.includes(event.slug)) {
      profile.registeredEvents.push(event.slug);
      savePlayerProfile(profile);
      addXP(event.xpReward, `RSVP: ${event.title}`);
    }
    setHasRegistered(true);
    setIsRsvpOpen(false);

    try {
      supabase
        .from("event_rsvps")
        .insert({
          event_slug: event.slug,
          event_title: event.title,
          name: rsvpForm.name,
          email: rsvpForm.email,
          year: rsvpForm.year,
          dept: rsvpForm.dept,
          why: rsvpForm.why,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase event RSVP sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase RSVP exception:", err);
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
          <Link href="/events" className="hover:text-ink">
            &larr; All Events
          </Link>
          <span>/</span>
          <span className="text-ink font-bold">{event.title}</span>
        </div>

        {/* Hero Card */}
        <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 lg:p-10 shadow-lift space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-border pb-4">
            <span className="stamp-tag bg-lime text-ink font-bold">
              {event.kicker}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
              {event.title}
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              {event.fullDesc}
            </p>
          </div>

          {/* Key Logistics Bar */}
          <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-ink-muted uppercase text-[10px] block">DATE &amp; TIME</span>
              <span className="font-bold text-ink text-sm flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-heat" />
                <span>{event.date}</span>
              </span>
              <span className="text-ink-muted text-xs block">{event.time}</span>
            </div>

            <div className="space-y-1">
              <span className="text-ink-muted uppercase text-[10px] block">CAMPUS VENUE</span>
              <span className="font-bold text-ink text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-ink" />
                <span className="truncate">{event.venue}</span>
              </span>
              <span className="text-ink-muted text-xs block">Polaris Tech Park</span>
            </div>

            <div className="space-y-1">
              <span className="text-ink-muted uppercase text-[10px] block">CAPACITY STATUS</span>
              <span className="font-bold text-ink text-sm flex items-center gap-1.5">
                <Users className="w-4 h-4 text-ink" />
                <span>{event.spotsLeft > 0 ? `${event.spotsLeft} spots left` : "Capacity Reached"}</span>
              </span>
              <span className="text-ink-muted text-xs block">{event.capacity}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {hasRegistered ? (
              <div className="p-3 bg-[#EAFCC0] border border-lime rounded-[4px] flex items-center gap-2 text-ink font-mono text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-status-ok" />
                <span>You are registered!</span>
              </div>
            ) : (
              <Button
                variant="lime"
                onClick={() => setIsRsvpOpen(true)}
                disabled={event.spotsLeft <= 0 && event.status !== "Upcoming"}
              >
                <span>{event.status === "Upcoming" ? "Reserve Your Seat" : "Event Concluded"}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            )}

            <button
              type="button"
              onClick={() => alert("Added to dummy calendar (.ics)!")}
              className="bg-paper-card border border-paper-border hover:border-ink px-4 py-2.5 rounded-[4px] font-mono text-xs text-ink flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Add to Calendar (.ics)</span>
            </button>

            <a
              href={site.links.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] dark:text-[#25D366] border border-[#25D366]/40 px-4 py-2.5 rounded-[4px] font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
              <span>Event WhatsApp Loop</span>
            </a>
          </div>
        </div>

        {/* Section 2: Speaker & Agenda */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Agenda (7 cols) */}
          <div className="md:col-span-7 bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card space-y-6">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              SCHEDULE RUNDOWN
            </span>
            <h3 className="font-display font-bold text-2xl text-ink">
              Event Agenda.
            </h3>

            <div className="divide-y divide-paper-border/60">
              {event.agenda.map((item, idx) => (
                <div key={idx} className="py-3 flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-ink bg-paper-sunken border border-paper-border px-2 py-0.5 rounded shrink-0 mt-0.5">
                    {item.time}
                  </span>
                  <span className="text-sm text-ink font-medium leading-relaxed">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker & Prerequisites (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card space-y-4">
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                FEATURED OPERATOR
              </span>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-paper-border bg-paper-sunken shrink-0">
                  <Image
                    src={event.speaker.avatar}
                    alt={event.speaker.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-ink">
                    {event.speaker.name}
                  </h4>
                  <p className="text-xs font-mono text-ink-muted">
                    {event.speaker.role}
                  </p>
                  <p className="text-xs font-bold text-ink mt-0.5">
                    {event.speaker.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-paper-sunken border border-paper-border rounded-[4px] p-4 sm:p-6 space-y-3">
              <span className="font-mono font-bold text-xs uppercase text-ink block">
                PREREQUISITES &middot; PREP:
              </span>
              <ul className="space-y-1.5 text-xs font-mono text-ink-muted">
                {event.prerequisites.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-lime font-bold">&check;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* RSVP Dialog */}
        <Dialog
          isOpen={isRsvpOpen}
          onClose={() => setIsRsvpOpen(false)}
          title={`RSVP: ${event.title}`}
          kicker="CAMPUS EVENT REGISTRATION"
        >
          <form onSubmit={handleRegister} className="space-y-4 pt-2">
            <Input
              label="Full Name"
              placeholder="Your Name"
              value={rsvpForm.name}
              onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
              required
            />
            <Input
              label="Polaris Student Email"
              type="email"
              placeholder="name@polariscampus.com"
              value={rsvpForm.email}
              onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Year of Study"
                value={rsvpForm.year}
                onChange={(e) => setRsvpForm({ ...rsvpForm, year: e.target.value })}
                required
              />
              <Input
                label="Department"
                value={rsvpForm.dept}
                onChange={(e) => setRsvpForm({ ...rsvpForm, dept: e.target.value })}
                required
              />
            </div>
            <Textarea
              label="What specific question do you want answered?"
              placeholder="e.g. How do I optimize my LLM inference costs for edge devices?"
              rows={3}
              value={rsvpForm.why}
              onChange={(e) => setRsvpForm({ ...rsvpForm, why: e.target.value })}
              required
            />

            <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
              <Button type="button" variant="subtle" onClick={() => setIsRsvpOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="lime">
                Confirm Registration
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  );
}
