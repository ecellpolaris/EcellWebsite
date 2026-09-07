"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SUMMIT_CONCLAVES,
  SUMMIT_SPEAKERS,
  SUMMIT_PASSES,
  SummitPass,
} from "@/lib/data/summit-data";
import { site } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/client";
import { addXP } from "@/lib/xp";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Dialog } from "@/components/ui/Dialog";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Flame, Calendar, MapPin, ArrowRight, CheckCircle2, Ticket, Trophy, Download, MessageCircle } from "lucide-react";

export default function SummitPage() {
  const [selectedPass, setSelectedPass] = useState<SummitPass | null>(null);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [requestConfirmed, setRequestConfirmed] = useState(false);
  const [passForm, setPassForm] = useState({
    name: "",
    email: "",
    college: "Polaris School of Technology",
    track: "Builders Conclave",
  });

  const handleOpenPass = (pass: SummitPass) => {
    setSelectedPass(pass);
    setIsPassModalOpen(true);
    setRequestConfirmed(false);
  };

  const handleSubmitPassRequest = (e: React.FormEvent) => {
    e.preventDefault();
    addXP(100, `E Summit 26 Pass Request: ${selectedPass?.name}`);
    setRequestConfirmed(true);

    try {
      supabase
        .from("summit_pass_requests")
        .insert({
          pass_id: selectedPass?.id || "pass-delegate",
          pass_name: selectedPass?.name || "Delegate Pass",
          name: passForm.name,
          email: passForm.email,
          college: passForm.college,
          track: passForm.track,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase summit pass sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase summit pass exception:", err);
    }
  };

  const summitFaqs = [
    {
      id: "s-1",
      question: "Who is eligible to apply for E Summit 26 passes?",
      answer: "Passes are open to all undergraduate and postgraduate students across India, as well as early stage startup operators, engineers, and angel investors.",
    },
    {
      id: "s-2",
      question: "Where will E Summit 26 physically take place?",
      answer: "Across the Polaris School of Technology campus and DivyaSree Tech Park central auditorium in Bengaluru (Wipro / Sarjapur ORR corridor).",
    },
    {
      id: "s-3",
      question: "Are real payments collected for Builder or Founder VIP passes?",
      answer: "No. All passes operate on an application and invite basis. Accepted applicants will receive direct registration links with zero platform markup.",
    },
    {
      id: "s-4",
      question: "How do teams qualify for the IGNITE Grand Finals at E Summit?",
      answer: "Teams qualify by submitting their problem in the Idea Lab or winning one of the regional satellite pitch sprints hosted by our SPARK Ambassadors.",
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Summit Hero Poster */}
        <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 lg:p-12 shadow-2xl relative space-y-6 sm:space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper-border pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-heat animate-ping" />
              <span className="stamp-tag bg-heat text-white font-bold border-heat">
                ANNUAL FLAGSHIP FESTIVAL
              </span>
            </div>
            <span className="micro-label font-mono text-ink-muted text-xs">
              OCTOBER 17 to 18, 2026 &middot; BENGALURU
            </span>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-4xl">
            <span className="font-mono text-xs font-bold text-heat uppercase tracking-widest">
              THEME: UNFINISHED
            </span>
            <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ink tracking-tight leading-[0.94]">
              E SUMMIT 26.
            </h1>
            <p className="font-display text-lg sm:text-2xl text-ink font-semibold">
              Two days of high velocity teardowns, investor roasts, and campus demo alleys inside the tech park.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
              We celebrate products that are halfway built, messy, and in the wild. If your product is still unfinished, you belong on this stage.
            </p>
          </div>

          {/* Logistics & Action */}
          <div className="pt-4 border-t border-paper-border flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-ink">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-heat shrink-0" />
                <span>2 Full Days (Oct 17 to 18)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ink shrink-0" />
                <span>Polaris Auditorium &middot; DivyaSree Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-lime shrink-0" />
                <span>₹3,50,000 Grant Pool</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleOpenPass(SUMMIT_PASSES[0])}
                className="w-full sm:w-auto bg-lime hover:bg-lime-hover text-ink font-bold text-sm px-6 py-3 rounded-[4px] border border-[#A6E000] inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Delegate Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={site.links.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Summit WhatsApp Loop</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Conclaves Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              ARCHITECTURE &middot; 4 DISTINCT TRACKS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              The 4 Summit Conclaves.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUMMIT_CONCLAVES.map((c) => (
              <div
                key={c.id}
                className="bg-paper-card border border-paper-border rounded-[4px] p-5 sm:p-7 shadow-card space-y-4 hover:border-ink/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-paper-border pb-3">
                    <span className="stamp-tag bg-paper-sunken border-paper-border text-ink-muted text-[10px]">
                      {c.badge}
                    </span>
                    <span className="micro-label text-ink-muted text-xs font-mono">
                      TRACK 0{c.id}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {c.description}
                  </p>

                  <div className="pt-2">
                    <span className="micro-label text-[10px] text-ink-muted font-mono block mb-1">
                      FEATURED SESSIONS:
                    </span>
                    <ul className="space-y-1 text-xs font-mono text-ink">
                      {c.keySessions.map((s, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-lime font-bold">&bull;</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-paper-border text-xs font-mono text-ink-muted">
                  Audience: {c.audience}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Speakers Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              OPERATOR GRAVITY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              12 Featured Voices.
            </h2>
            <p className="text-sm text-ink-muted">
              Founders, venture partners, and engineering leads who have scaled real companies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {SUMMIT_SPEAKERS.map((spk, idx) => (
              <div
                key={idx}
                className="bg-paper-card border border-paper-border rounded-[4px] p-3.5 sm:p-5 shadow-card space-y-3 hover:border-ink/50 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-paper-border bg-paper-sunken shrink-0">
                    <Image
                      src={spk.avatar}
                      alt={spk.name}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                      {spk.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-mono text-ink-muted">
                      {spk.role}
                    </p>
                    <p className="text-[11px] sm:text-xs font-bold text-ink">
                      {spk.company}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-paper-border text-[10px] sm:text-[11px] text-ink leading-tight font-sans italic">
                  &ldquo;{spk.topic}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Passes Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              TICKETING &middot; PASS APPLICATIONS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Choose Your Pass.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUMMIT_PASSES.map((pass) => (
              <div
                key={pass.id}
                className={`bg-paper-card border-2 rounded-[4px] p-5 sm:p-7 shadow-card flex flex-col justify-between space-y-6 relative ${
                  pass.recommended ? "border-ink shadow-lift" : "border-paper-border"
                }`}
              >
                {pass.recommended && (
                  <span className="absolute -top-3 right-6 bg-lime text-ink font-mono font-bold text-[10px] px-2 py-0.5 rounded uppercase border border-[#9DD400]">
                    RECOMMENDED
                  </span>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="micro-label text-ink-muted text-[10px] font-mono">
                      {pass.tag}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-ink">
                      {pass.name}
                    </h3>
                    <div className="font-display font-extrabold text-3xl text-ink pt-1">
                      {pass.price}
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs font-mono text-ink divide-y divide-paper-border/60">
                    {pass.perks.map((perk, i) => (
                      <li key={i} className="pt-2 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenPass(pass)}
                  className={`w-full py-3 rounded-[3px] font-mono text-xs font-bold transition-colors ${
                    pass.recommended
                      ? "bg-lime hover:bg-lime-hover text-ink border border-[#9DD400]"
                      : "bg-ink hover:bg-ink-muted text-paper-card"
                  }`}
                >
                  Request Invite Pass
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Prospectus CTA */}
        <div className="bg-paper-sunken border border-paper-border rounded-[4px] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="stamp-tag bg-paper-card text-ink">PARTNERSHIPS</span>
            <h3 className="font-display font-bold text-2xl text-ink">
              Interested in Sponsoring E Summit 26?
            </h3>
            <p className="text-sm text-ink-muted max-w-xl">
              Connect with 500+ top engineering and AI founders in Bengaluru. Access recruitment pipelines, keynote conclaves, and demo alley sponsor booths.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs px-5 py-3 rounded-[3px] font-bold shrink-0 transition-colors"
          >
            Request Sponsor Deck &rarr;
          </Link>
        </div>

        {/* Summit FAQ */}
        <div className="space-y-6 max-w-3xl pt-6 border-t border-paper-border">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              SUMMIT LOGISTICS
            </span>
            <h3 className="font-display font-bold text-2xl text-ink">
              Summit Questions.
            </h3>
          </div>
          <Accordion items={summitFaqs} defaultOpenIndex={0} />
        </div>

        {/* Pass Request Dialog */}
        <Dialog
          isOpen={isPassModalOpen}
          onClose={() => setIsPassModalOpen(false)}
          title={`Request: ${selectedPass?.name || "Summit Pass"}`}
          kicker="E SUMMIT 26 INVITATION QUEUE"
        >
          {!requestConfirmed ? (
            <form onSubmit={handleSubmitPassRequest} className="space-y-4 pt-2">
              <Input
                label="Full Name"
                placeholder="Your Name"
                value={passForm.name}
                onChange={(e) => setPassForm({ ...passForm, name: e.target.value })}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="name@college.edu"
                value={passForm.email}
                onChange={(e) => setPassForm({ ...passForm, email: e.target.value })}
                required
              />
              <Input
                label="College / Organization"
                value={passForm.college}
                onChange={(e) => setPassForm({ ...passForm, college: e.target.value })}
                required
              />

              <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
                <Button type="button" variant="subtle" onClick={() => setIsPassModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="lime">
                  Submit Invitation Request (+100 XP)
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-status-ok" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                Application Received.
              </h3>
              <p className="text-xs font-mono text-ink-muted">
                You are in the queue for {selectedPass?.name}. Invitations and ticket QR codes are dispatched in rolling batches.
              </p>
              <Button variant="subtle" onClick={() => setIsPassModalOpen(false)}>
                Close
              </Button>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
