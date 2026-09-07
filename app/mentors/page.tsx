"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MENTORS, Mentor } from "@/lib/data/mentors";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Dialog } from "@/components/ui/Dialog";
import { addXP } from "@/lib/xp";
import { Calendar, Search, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedSector, setSelectedSector] = useState<string>("All");

  // Booking modal state
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [hasBooked, setHasBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    studentName: "",
    email: "",
    project: "",
    bottleneck: "",
  });

  const types = ["All", "Operator", "Investor", "Alumni", "Faculty"];
  const sectors = ["All", "Fintech", "AI & Systems", "B2B SaaS", "D2C & Consumer", "Climate", "Legal & VC"];

  const filtered = MENTORS.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = selectedType === "All" || m.type === selectedType;
    const matchesSector = selectedSector === "All" || m.sector === selectedSector;
    return matchesSearch && matchesType && matchesSector;
  });

  const handleOpenBooking = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setIsBookModalOpen(true);
    setHasBooked(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    addXP(40, `Mentor Office Hours Booked: ${selectedMentor?.name}`);
    setHasBooked(true);
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                OPERATOR NETWORK
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                FOUNDER HOURS &middot; 25 MIN SLOTS
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Mentors in Orbit.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Closed door office hours with founders and operators who have raised capital, scaled architectures, and hired engineering teams along the ORR corridor.
            </p>
          </div>

          <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] text-xs font-mono">
            <span className="font-bold text-ink block mb-0.5">WEEKLY SCHEDULE:</span>
            <span>Wednesdays &amp; Fridays &middot; E Cell Bay (Room 204)</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
            <input
              type="text"
              placeholder="Search mentors by name, tech stack, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-paper-card border border-paper-border rounded-[4px] text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-1 focus:ring-ink"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-muted mr-1 font-bold">TYPE:</span>
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                  selectedType === t
                    ? "bg-ink text-paper-card border-ink font-bold"
                    : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-muted mr-1 font-bold">SECTOR:</span>
            {sectors.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSector(s)}
                className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                  selectedSector === s
                    ? "bg-lime text-ink border-[#9DD400] font-bold"
                    : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-5 sm:space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <span className="micro-label font-mono text-xs font-bold text-ink-muted uppercase">
                    {mentor.sector} &middot; {mentor.type}
                  </span>
                  <Badge
                    variant={mentor.availability === "Open for office hours" ? "lime" : "muted"}
                    size="xs"
                  >
                    {mentor.availability}
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-paper-border bg-paper-sunken shrink-0">
                    <Image
                      src={mentor.avatar}
                      alt={mentor.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-mono text-ink-muted">
                      {mentor.role}
                    </p>
                    <p className="text-xs font-bold text-ink mt-0.5">
                      {mentor.company}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-ink leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {mentor.expertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-paper-sunken border border-paper-border rounded text-ink-muted"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <span className="font-mono text-xs text-ink font-bold">
                  {mentor.slotsThisWeek > 0
                    ? `${mentor.slotsThisWeek} slots this week`
                    : "Async review only"}
                </span>

                <Button
                  variant={mentor.availability === "Open for office hours" ? "lime" : "subtle"}
                  size="sm"
                  onClick={() => handleOpenBooking(mentor)}
                  disabled={mentor.availability === "Async only"}
                  className="w-full sm:w-auto"
                >
                  <span>{mentor.availability === "Open for office hours" ? "Book Slot" : "Async Only"}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Dialog */}
        <Dialog
          isOpen={isBookModalOpen}
          onClose={() => setIsBookModalOpen(false)}
          title={`Founder Hours: ${selectedMentor?.name}`}
          kicker="25 MINUTE TACTICAL SLICE"
        >
          {!hasBooked ? (
            <form onSubmit={handleConfirmBooking} className="space-y-4 pt-2">
              <Input
                label="Student Name"
                placeholder="Your Name"
                value={bookingForm.studentName}
                onChange={(e) => setBookingForm({ ...bookingForm, studentName: e.target.value })}
                required
              />
              <Input
                label="Polaris Email"
                type="email"
                placeholder="name@polariscampus.com"
                value={bookingForm.email}
                onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                required
              />
              <Input
                label="Current Venture / Project"
                placeholder="e.g. NexusEval or Dorm Problem Hypothesis"
                value={bookingForm.project}
                onChange={(e) => setBookingForm({ ...bookingForm, project: e.target.value })}
                required
              />
              <Textarea
                label="What specific technical or business bottleneck will we dissect?"
                placeholder="e.g. We are stuck on Postgres index performance under 5k concurrent queries..."
                rows={3}
                value={bookingForm.bottleneck}
                onChange={(e) => setBookingForm({ ...bookingForm, bottleneck: e.target.value })}
                required
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
                <Button type="button" variant="subtle" onClick={() => setIsBookModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="lime">
                  Lock Slot
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-status-ok" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Office Hour Confirmed.
              </h3>
              <p className="text-xs font-mono text-ink-muted">
                Your 25 minute slot with {selectedMentor?.name} has been queued. Check your calendar for Room 204 venue details.
              </p>
              <Button variant="subtle" onClick={() => setIsBookModalOpen(false)}>
                Done
              </Button>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
