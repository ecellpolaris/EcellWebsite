"use client";

import React, { useState } from "react";
import { site } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { addXP } from "@/lib/xp";
import {
  MapPin,
  Mail,
  Clock,
  Instagram,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [hasSent, setHasSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addXP(30, "Contact Inquiry Dispatched");
    setHasSent(true);

    try {
      supabase
        .from("contact_inquiries")
        .insert({
          name: form.name,
          email: form.email,
          category: form.category,
          subject: form.subject,
          message: form.message,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase contact inquiry sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase contact inquiry exception:", err);
    }
  };

  const verticalEmails = [
    { label: "Executive & President", email: site.email },
    { label: "FORGE & Pre Incubation", email: "incubation@polariscampus.com" },
    { label: "E Summit & Corporate Alliances", email: "summit@polariscampus.com" },
    { label: "WebOps & Tech Support", email: "webops@polariscampus.com" },
  ];

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="stamp-tag bg-lime text-ink">
              COMMUNICATIONS HUB
            </span>
            <span className="micro-label font-mono text-ink-muted text-xs">
              48 HOUR SLA RESPONSE
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            Contact the Bay.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Have a partnership proposal, sponsor inquiry, or high conviction student venture question? Drop a message or find us in Room 204.
          </p>
        </div>

        {/* Main Grid: Info on Left (5 cols), Form on Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Physical Bay, SLA, and Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Physical Bay Location Card */}
            <div className="bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-7 shadow-card space-y-4">
              <div className="flex items-center gap-2 border-b border-paper-border pb-3">
                <MapPin className="w-4 h-4 text-ink" />
                <span className="font-mono font-bold text-xs uppercase text-ink">
                  PHYSICAL BAY PRESENCE
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl text-ink">
                  E Cell Bay (Room 204)
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed font-sans">
                  {site.address}
                </p>
              </div>

              <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] text-xs font-mono space-y-1 text-ink">
                <span className="font-bold block">OPEN HOURS:</span>
                <p className="text-ink-muted">
                  Monday to Saturday &middot; 9:00 AM to 10:00 PM (24/7 for FORGE founders)
                </p>
              </div>
            </div>

            {/* SLA Notice */}
            <div className="p-5 bg-paper-sunken border border-paper-border rounded-[4px] space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-heat font-bold">
                <Clock className="w-4 h-4 text-heat" />
                <span>RESPONSE SLA &middot; 48 HOURS:</span>
              </div>
              <p className="text-ink-muted leading-relaxed">
                We reply within 48 hours. If it&apos;s a funding emergency or urgent sponsor deadline, mention <strong className="text-ink">&ldquo;HEAT&rdquo;</strong> in the email subject.
              </p>
            </div>

            {/* Vertical Emails */}
            <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 shadow-card space-y-3">
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                DIRECT VERTICAL DESKS
              </span>
              <div className="divide-y divide-paper-border/60 text-xs font-mono">
                {verticalEmails.map((v, i) => (
                  <div key={i} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-ink-muted">{v.label}</span>
                    <a
                      href={`mailto:${v.email}`}
                      className="font-bold text-ink hover:underline decoration-lime decoration-2 break-all sm:break-normal"
                    >
                      {v.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social & WhatsApp Community Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={site.links.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 bg-[#EAFCC0] border border-lime hover:border-ink rounded-[4px] flex items-center justify-between font-mono text-xs font-bold text-ink transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-ink" />
                  <span>Join WhatsApp Loop</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3.5 bg-paper-card border border-paper-border hover:border-ink rounded-[4px] flex items-center justify-between font-mono text-xs font-bold text-ink transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-ink" />
                  <span>{site.instagramHandle}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Partner Form */}
          <div className="lg:col-span-7">
            <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-4 sm:p-8 lg:p-10 shadow-lift">
              {!hasSent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-paper-border pb-4 space-y-1">
                    <span className="micro-label text-ink-muted text-xs font-mono">
                      INQUIRY DISPATCH
                    </span>
                    <h3 className="font-display font-bold text-2xl text-ink">
                      Send a Direct Note.
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="e.g. Mukul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                        Category
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm({ ...form, category: e.target.value })}
                        className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="E Summit Sponsorship">E Summit Sponsorship</option>
                        <option value="Mentor / Operator Office Hours">Mentor / Operator Office Hours</option>
                        <option value="Campus Venture Partnership">Campus Venture Partnership</option>
                        <option value="Media & Press">Media &amp; Press</option>
                      </select>
                    </div>

                    <Input
                      label="Subject"
                      placeholder="e.g. Partnership Proposal / HEAT"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                    />
                  </div>

                  <Textarea
                    label="Message or Proposal"
                    placeholder="Provide details on your project, partnership scope, or question..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-paper-border">
                    <span className="text-xs font-mono text-ink-muted">
                      Direct to {site.email}
                    </span>
                    <Button type="submit" variant="lime" className="w-full sm:w-auto">
                      <span>Dispatch Message (+30 XP)</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="w-14 h-14 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-status-ok" />
                  </div>

                  <div className="space-y-2">
                    <span className="stamp-tag bg-ink text-paper-card">
                      MESSAGE LOGGED
                    </span>
                    <h3 className="font-display font-black text-3xl text-ink">
                      Note dispatched to Bay.
                    </h3>
                    <p className="text-sm text-ink-muted max-w-md mx-auto">
                      Thank you, <strong className="text-ink">{form.name}</strong>. Our team will review and reply within 48 hours.
                    </p>
                  </div>

                  <Button variant="subtle" onClick={() => setHasSent(false)}>
                    Send another message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
