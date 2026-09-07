import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, ShieldCheck, MapPin, Clock, Trophy, Flame, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About · The Founder OS of Polaris School of Technology",
  description: `Learn the origin story of ${site.brand}, our young-campus DNA, leadership under Saahi Dubey, and how student ventures are incubated.`,
};

export default function AboutPage() {
  const values = [
    { title: "Ship first.", desc: "Code in production beats 50 pages of PowerPoint slides. If a user cannot click it, it does not exist." },
    { title: "Tell the truth.", desc: "We celebrate honest metrics and brutal roasts. Fake 10M user vanity numbers have no place in our rooms." },
    { title: "Help the next founder.", desc: "When your startup raises or cracks distribution, you give 2 hours a month back to the campus freshers." },
    { title: "Play long games.", desc: "Venture building is a multi-year compounding game. We are here to create generational tech founders." },
  ];

  const timeline = [
    { year: "EARLY 2024", title: "Polaris Campus Opens", desc: "Founded by Classplus founders Mukul Rustagi and Bhaswat Agarwal inside the DivyaSree tech park." },
    { year: "FALL 2024", title: "E Cell PST Bootstrapped", desc: "Saahi Dubey and early student engineers formalize the cell, running first midnight hack nights." },
    { year: "2025", title: "FORGE & IGNITE Launch", desc: "First 6 campus ventures incubated; first angel cheques written for student prototypes." },
    { year: "2026", title: "The Arena & E Summit 26", desc: "Public gamification engine deployed; UNFINISHED flagship summit gathers 500+ builders." },
  ];

  const verticals = [
    { name: "WebOps & Technology", lead: "Dev Mehta", role: "Maintains The Arena, platform APIs, and digital infrastructure." },
    { name: "Incubation (FORGE/IGNITE)", lead: "Tanvi Rao", role: "Runs 8 week cohorts, pitch gauntlets, and milestone audits." },
    { name: "Product & Brand Design", lead: "Aarav Kapur", role: "Owns the daylight design system, physical merchandise, and UX." },
    { name: "Outreach & Capital", lead: "Ananya Sen", role: "Bridges campus founders with Bengaluru venture syndicates and partner colleges." },
    { name: "Editorial & Founder Lore", lead: "Kabir Malhotra", role: "Documents authentic dorm building stories and investigative deep dives." },
    { name: "Treasury & Micro Grants", lead: "Riya Chawla", role: "Disburses non dilutive cloud and server grants to student builders." },
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "Is E Cell PST only for computer science students?",
      answer: "No. Startups need multidisciplinary squads: systems engineers, UI/UX designers, growth marketers, and financial operators. We run cross department matchmaking precisely to pair builders across fields.",
    },
    {
      id: "faq-2",
      question: "Do I need to already have a working startup idea to join?",
      answer: "Not at all. More than 60% of students join as Explorers to attend bootcamps, participate in hack nights, and meet co founders. You can find your problem after arriving.",
    },
    {
      id: "faq-3",
      question: "Does E Cell PST or Polaris School of Technology take equity in student ventures?",
      answer: "Strictly zero percent. We are a student run institutional incubator. We provide cloud credits, desk space, and angel introductions with zero dilution or cap table encumbrance.",
    },
    {
      id: "faq-4",
      question: "How do decisions get made inside E Cell?",
      answer: "Transparency is our policy. Program selections, grant disbursements, and cohort admissions are evaluated by a joint committee of the student executive board, the Faculty Advisor, and rotating external operators.",
    },
    {
      id: "faq-5",
      question: "Is participating in E Cell activities an accredited college course?",
      answer: "Certain FORGE capstone projects fulfill university technical project requirements. However, entrepreneurship here is treated as an ambitious voluntary pursuit, not compulsory homework.",
    },
    {
      id: "faq-6",
      question: "How are members selected for the core team?",
      answer: "We open formal recruitment once a year via /join. Selection is based on proof of work (repos, designs, past community coordination), followed by a practical 48 hour tactical task and a peer interview.",
    },
    {
      id: "faq-7",
      question: "What is the physical presence of E Cell on campus?",
      answer: "We operate out of the E Cell Bay (Room 204) in the tech park campus. It includes a 24/7 hardware prototyping bench, whiteboard review rooms, and drop-in office hours desks.",
    },
    {
      id: "faq-8",
      question: "Can founders from other colleges participate in your competitions?",
      answer: "Yes! IGNITE Pitch League, E Summit 26, and the SPARK Ambassadors program are fully open to student builders from all recognized institutions across India.",
    },
  ];

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="stamp-tag bg-lime text-ink">
              MISSION &amp; ORIGIN
            </span>
            <span className="micro-label font-mono text-ink-muted text-xs">
              EST. {site.foundedYear} &middot; BENGALURU
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            The daylight foundry.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Polaris School of Technology is a 2024 tech park CS/AI school where the default is to ship. E Cell PST is the operating system that turns campus curiosity into viable companies.
          </p>
        </div>

        {/* Origin Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-y border-paper-border py-12">
          <div className="lg:col-span-6 space-y-4">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              ORIGIN STORY
            </span>
            <h2 className="font-display font-extrabold text-3xl text-ink">
              Born inside a tech park, not a 100 year quad.
            </h2>
            <p className="text-sm sm:text-base text-ink leading-relaxed">
              When Classplus founders Mukul Rustagi and Bhaswat Agarwal founded Polaris School of Technology in 2024, they established campus within the DivyaSree Wipro corridor in Bengaluru.
            </p>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              E Cell PST was founded immediately after by President <strong className="text-ink">Saahi Dubey</strong> · a builder who chose PST over IIT Bombay Aerospace and cracked Google Summer of Code (GSoC) in year one. Rather than copying 25 year old traditional college club bureaucracies, E Cell was structured like an early stage startup accelerator.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-ink">
              <span className="p-2 bg-paper-sunken border border-paper-border rounded">
                0% Equity Taken
              </span>
              <span className="p-2 bg-paper-sunken border border-paper-border rounded">
                24/7 Bay Access
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="ticket-perforated bg-paper-card border-2 border-ink p-5 sm:p-7 rounded-[4px] shadow-lift space-y-5">
              <span className="micro-label text-ink-muted text-xs font-mono">
                PRESIDENT BYLINE
              </span>
              <blockquote className="font-display font-bold text-xl text-ink leading-snug">
                &ldquo;If you want to spend four years preparing for a mass recruiter exam, there are hundreds of colleges in India. Polaris exists for the rare few who want to ship code that impacts real people before their 21st birthday.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-[4px] overflow-hidden border-2 border-ink shrink-0 bg-paper-sunken shadow-sm">
                    <Image
                      src="/team/saahi.png"
                      alt={site.president.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-ink block">{site.president.name}</span>
                    <span className="font-mono text-xs text-heat font-semibold">{site.president.role}</span>
                  </div>
                </div>
                <Link
                  href="/team"
                  className="font-mono text-xs text-ink-muted hover:text-ink underline underline-offset-4 shrink-0 font-medium"
                >
                  Meet the Core &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Values */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              FOUNDATION
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Our Operating Values.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-paper-card border border-paper-border p-4 sm:p-6 rounded-[4px] shadow-card space-y-3 hover:border-ink/50 transition-colors"
              >
                <span className="w-8 h-8 rounded-[3px] bg-paper-sunken border border-paper-border flex items-center justify-center font-mono font-bold text-xs text-ink">
                  0{i + 1}
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  {v.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Timeline */}
        <div className="space-y-8 pt-4">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              CHRONOLOGY
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Our Honest Timeline.
            </h2>
            <p className="text-sm text-ink-muted">
              We don&apos;t pretend to have a 25-year heritage. We are young, agile, and high-access.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t, idx) => (
              <div
                key={idx}
                className="bg-paper-sunken border border-paper-border p-5 rounded-[4px] space-y-2"
              >
                <span className="font-mono font-bold text-xs text-heat uppercase">
                  {t.year}
                </span>
                <h3 className="font-display font-bold text-lg text-ink">
                  {t.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Desk Card */}
        <div className="bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-ink" />
              <span className="micro-label font-mono text-ink-muted text-xs">
                FACULTY DESK &middot; INSTITUTIONAL TRUST
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-ink">
              {site.facultyAdvisor.name}
            </h3>
            <p className="text-xs font-mono text-ink-muted">
              {site.facultyAdvisor.role} &middot; Polaris School of Technology
            </p>
            <p className="text-sm text-ink leading-relaxed">
              &ldquo;E Cell PST bridges academic rigorous research into deployment. We encourage our computer science students to commercialize their IP and test algorithms against live consumer demand.&rdquo;
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted">
              <Clock className="w-3.5 h-3.5 text-ink" />
              <span>Office Hours: {site.facultyAdvisor.officeHours}</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs px-4 py-2.5 rounded-[3px] font-bold shrink-0 transition-colors"
          >
            Request Appointment &rarr;
          </Link>
        </div>

        {/* Vertical Structure Bento */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              ORGANIZATIONAL ARCHITECTURE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              How the Cell is Structured.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((v, i) => (
              <div
                key={i}
                className="bg-paper-card border border-paper-border p-6 rounded-[4px] shadow-card space-y-2 hover:border-ink/50 transition-colors"
              >
                <span className="micro-label text-ink-muted text-[10px] font-mono">
                  VERTICAL 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  {v.name}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {v.role}
                </p>
                <div className="pt-2 border-t border-paper-border/60 text-xs font-mono text-ink font-bold">
                  Lead: {v.lead}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-8 pt-6 border-t border-paper-border max-w-3xl">
          <div className="space-y-2">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              FREQUENT QUESTIONS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
              Everything you need to know.
            </h2>
          </div>

          <Accordion items={faqs} defaultOpenIndex={0} />
        </div>
      </div>
    </div>
  );
}
