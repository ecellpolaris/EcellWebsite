import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { Instagram, Mail, ArrowUpRight, ShieldCheck, MapPin, Clock, MessageCircle } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper border-t-2 border-ink pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Blurb & Socials */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-[4px] overflow-hidden border border-paper-border bg-paper-sunken flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="/team/ecell-logo.jpeg"
                  alt="E Cell PST Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-ink tracking-tight">
                {site.brand}
              </span>
            </div>

            <p className="font-display text-base font-bold text-ink">
              {site.tagline}
            </p>

            <p className="text-sm text-ink-muted leading-relaxed">
              The founder operating system inside Polaris School of Technology · a 2024 Bengaluru tech park institution where the default is to ship, not to spectate.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-[3px] bg-paper-sunken border border-paper-border hover:border-ink transition-colors text-ink"
              >
                <Instagram className="w-3.5 h-3.5 text-ink" />
                <span>{site.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-[3px] bg-paper-sunken border border-paper-border hover:border-ink transition-colors text-ink"
              >
                <Mail className="w-3.5 h-3.5 text-ink" />
                <span>Email</span>
              </a>
              <a
                href={site.links.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-[3px] bg-[#EAFCC0] border border-lime hover:border-ink transition-colors text-ink font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-ink" />
                <span>WhatsApp Loop</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              EXPLORE
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink hover:underline decoration-lime decoration-2">
                  About E Cell PST
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-ink hover:underline decoration-lime decoration-2">
                  Initiatives &amp; Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-ink hover:underline decoration-lime decoration-2">
                  Calendar &amp; Hack Nights
                </Link>
              </li>
              <li>
                <Link href="/startups" className="text-ink hover:underline decoration-lime decoration-2">
                  Campus Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-ink hover:underline decoration-lime decoration-2">
                  Season 26 Core Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-ink hover:underline decoration-lime decoration-2">
                  Daylight Photo Archive
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-ink hover:underline decoration-lime decoration-2">
                  Founder Field Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Build */}
          <div className="space-y-3">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              BUILD &amp; SHIP
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/idea" className="font-semibold text-ink flex items-center gap-1.5 hover:text-ink/80">
                  <span className="w-2 h-2 rounded-full bg-lime border border-[#86B800]" />
                  <span>Idea Lab &amp; Co Founder Match</span>
                </Link>
              </li>
              <li>
                <Link href="/arena" className="font-semibold text-ink flex items-center gap-1.5 hover:text-ink/80">
                  <span className="w-2 h-2 rounded-full bg-[#007C86]" />
                  <span>The Arena (XP &amp; Quests)</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/polaris-demo-day" className="text-ink hover:underline decoration-lime decoration-2">
                  Polaris Demo Day
                </Link>
              </li>
              <li>
                <Link href="/programs/polaris-fellowship" className="text-ink hover:underline decoration-lime decoration-2">
                  Polaris Fellowship Program
                </Link>
              </li>
              <li>
                <Link href="/summit" className="text-ink hover:underline decoration-lime decoration-2">
                  E Summit 26 (UNFINISHED)
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="text-ink hover:underline decoration-lime decoration-2">
                  Book Founder Hours
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-ink hover:underline decoration-lime decoration-2">
                  Apply to Core Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Institutional Presence */}
          <div className="space-y-3">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-ink" />
              <span>INSTITUTION &amp; TRUST</span>
            </span>

            <div className="p-3 bg-paper-card border border-paper-border rounded-[4px] space-y-2 text-xs">
              <div>
                <p className="font-semibold text-ink">{site.facultyAdvisor.name}</p>
                <p className="text-ink-muted">{site.facultyAdvisor.role}</p>
                <p className="text-ink-muted mt-0.5">{site.facultyAdvisor.officeHours}</p>
              </div>

              <div className="border-t border-paper-border pt-2 flex items-start gap-1.5 text-ink-muted">
                <MapPin className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                <span>{site.address}</span>
              </div>

              <div className="border-t border-paper-border pt-2 flex items-start gap-1.5 text-ink-muted">
                <Clock className="w-3.5 h-3.5 text-ink shrink-0 mt-0.5" />
                <span className="italic">
                  SLA: We reply within 48h. For funding emergencies, mention &quot;HEAT&quot; in the email subject.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ribbon Bar */}
        <div className="pt-8 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} {site.brand}.</span>
            <span>All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="font-medium text-ink">
              Saahi Dubey, President
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-ink-muted">
              This site is developed by{" "}
              <a
                href="https://github.com/Siddhartha-singh01"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-ink hover:text-amber-500 transition-colors"
              >
                Siddhartha Singh
              </a>
            </span>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-ink transition-colors">
              Contact Bay
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
