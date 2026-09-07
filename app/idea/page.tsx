"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CO_FOUNDER_POSTS, CoFounderPost } from "@/lib/data/cofounders";
import { site } from "@/lib/site-config";
import { supabase } from "@/lib/supabase/client";
import { addXP, getPlayerProfile, savePlayerProfile } from "@/lib/xp";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { Dialog } from "@/components/ui/Dialog";
import { ArrowRight, CheckCircle2, Zap, Users, Lightbulb, UserPlus, Sparkles, MessageCircle } from "lucide-react";

export default function IdeaLabPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    problem: "",
    whoHurts: "",
    frequency: "Daily",
    wedge: "",
    shipTimeline: "Within 30 Days",
    wedge30Days: "",
    crewStatus: "Solo builder looking for co founder",
    contactName: "",
    contactEmail: "",
    contactHandle: "",
    githubUrl: "",
    demoUrl: "",
  });

  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; xpEarned: number } | null>(null);

  // New post modal for co founder board
  const [isPostRoleOpen, setIsPostRoleOpen] = useState(false);
  const [boardPosts, setBoardPosts] = useState<CoFounderPost[]>(CO_FOUNDER_POSTS);
  const [newPost, setNewPost] = useState({
    projectTitle: "",
    oneLiner: "",
    lookingFor: "Technical Co Founder (Backend / AI)" as const,
    contactEmail: "",
  });

  // Fetch live posts from Supabase on mount
  useEffect(() => {
    supabase
      .from("cofounder_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) {
          const mapped: CoFounderPost[] = data.map((d: any) => ({
            id: d.id,
            projectTitle: d.project_title,
            oneLiner: d.one_liner,
            lookingFor: d.looking_for,
            postedBy: {
              handle: d.poster_handle,
              name: d.poster_name,
              year: d.poster_year,
              dept: d.poster_dept,
            },
            timePosted: "Recently",
            stage: d.stage,
            tags: d.tags || [],
            contactEmail: d.contact_email,
          }));
          setBoardPosts([...mapped, ...CO_FOUNDER_POSTS]);
        }
      });
  }, []);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => ((prev + 1) as 1 | 2 | 3));
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = `IDEA-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedTicket({ id: ticketId, xpEarned: 120 });
    addXP(120, `Submitted Idea Lab Ticket: ${ticketId}`);

    // Persist to Supabase
    try {
      supabase
        .from("idea_submissions")
        .insert({
          ticket_id: ticketId,
          problem: formData.problem,
          who_hurts: formData.whoHurts,
          frequency: formData.frequency,
          wedge: formData.wedge,
          ship_timeline: formData.shipTimeline,
          crew_status: formData.crewStatus,
          contact_name: formData.contactName,
          contact_email: formData.contactEmail,
          contact_handle: formData.contactHandle || null,
          github_url: formData.githubUrl || null,
          demo_url: formData.demoUrl || null,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase idea submission sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase idea submission exception:", err);
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const created: CoFounderPost = {
      id: `cf-${Date.now()}`,
      projectTitle: newPost.projectTitle,
      oneLiner: newPost.oneLiner,
      lookingFor: newPost.lookingFor,
      postedBy: {
        handle: "@dorm_founder",
        name: "Campus Builder",
        year: "1st Year",
        dept: "Computer Science",
      },
      timePosted: "Just now",
      stage: "Problem Framed",
      tags: ["Student Builder", "Seed Concept"],
      contactEmail: newPost.contactEmail,
    };
    setBoardPosts([created, ...boardPosts]);
    setIsPostRoleOpen(false);
    addXP(40, "Co Founder Board Post");

    // Persist to Supabase
    try {
      supabase
        .from("cofounder_posts")
        .insert({
          project_title: newPost.projectTitle,
          one_liner: newPost.oneLiner,
          looking_for: newPost.lookingFor,
          poster_handle: created.postedBy.handle,
          poster_name: created.postedBy.name,
          poster_year: created.postedBy.year,
          poster_dept: created.postedBy.dept,
          stage: created.stage,
          tags: created.tags,
          contact_email: created.contactEmail,
        })
        .then(({ error }) => {
          if (error) console.warn("Supabase cofounder post sync error:", error.message);
        });
    } catch (err) {
      console.warn("Supabase cofounder post exception:", err);
    }
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="stamp-tag bg-lime text-ink">
              THE CONVERSION ENGINE
            </span>
            <span className="micro-label font-mono text-ink-muted text-xs">
              NO DECKS &middot; NO BUSINESS PLANS
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            Idea Lab.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            If your idea cannot survive a hostel room roast, it cannot survive a market. Bring a real problem, define a 30 day wedge, and lock in your squad.
          </p>
        </div>

        {/* 3-Step Wizard Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-4 sm:p-8 shadow-lift space-y-6 sm:space-y-8">
              {!submittedTicket ? (
                <>
                  {/* Step Progress Bar */}
                  <div className="space-y-2 border-b border-paper-border pb-6">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-ink">
                        STEP 0{currentStep} OF 03 &middot;{" "}
                        {currentStep === 1
                          ? "THE PROBLEM"
                          : currentStep === 2
                          ? "THE 30-DAY WEDGE"
                          : "THE CREW"}
                      </span>
                      <span className="text-lime-ink bg-lime px-2 py-0.5 rounded font-bold">
                        +120 XP REWARD
                      </span>
                    </div>

                    <div className="w-full h-2 bg-paper-sunken rounded-full overflow-hidden border border-paper-border">
                      <div
                        className="h-full bg-lime transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleNextStep} className="space-y-6">
                    {/* Step 1: The Problem */}
                    {currentStep === 1 && (
                      <div className="space-y-5 animate-in fade-in duration-150">
                        <div className="space-y-1">
                          <h3 className="font-display font-bold text-xl text-ink">
                            What is broken, and who suffers?
                          </h3>
                          <p className="text-xs text-ink-muted">
                            Do not write &ldquo;students need an AI tool.&rdquo; Be ruthlessly specific about the friction.
                          </p>
                        </div>

                        <Textarea
                          label="Describe the acute pain point"
                          placeholder="Every Thursday night before mess menu changes, 200 hostel students..."
                          rows={4}
                          value={formData.problem}
                          onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                          required
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input
                            label="Who exactly is the victim?"
                            placeholder="e.g. 1st year dorm residents, campus van drivers"
                            value={formData.whoHurts}
                            onChange={(e) => setFormData({ ...formData, whoHurts: e.target.value })}
                            required
                          />

                          <div>
                            <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                              Frequency of pain
                            </label>
                            <select
                              value={formData.frequency}
                              onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                              className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
                            >
                              <option value="Daily">Daily (Multiple times a day)</option>
                              <option value="Weekly">Weekly (Repeated headache)</option>
                              <option value="Monthly">Monthly</option>
                              <option value="Once a semester">Once a semester</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: The Wedge */}
                    {currentStep === 2 && (
                      <div className="space-y-5 animate-in fade-in duration-150">
                        <div className="space-y-1">
                          <h3 className="font-display font-bold text-xl text-ink">
                            The Wedge: What can you ship in 30 days?
                          </h3>
                          <p className="text-xs text-ink-muted">
                            What is the smallest usable knife that cuts this problem? No multi-platform suites.
                          </p>
                        </div>

                        <Textarea
                          label="The 30-Day Ship Hypothesis"
                          placeholder="A simple WhatsApp bot + Google Sheet that automates..."
                          rows={4}
                          value={formData.wedge}
                          onChange={(e) => setFormData({ ...formData, wedge: e.target.value })}
                          required
                        />

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                            Committed Velocity
                          </label>
                          <select
                            value={formData.shipTimeline}
                            onChange={(e) => setFormData({ ...formData, shipTimeline: e.target.value })}
                            className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
                          >
                            <option value="Within 14 Days">Within 14 Days (Weekend Hack)</option>
                            <option value="Within 30 Days">Within 30 Days (Standard FORGE Pace)</option>
                            <option value="Within 60 Days">Within 60 Days</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 3: The Crew & Contact */}
                    {currentStep === 3 && (
                      <div className="space-y-5 animate-in fade-in duration-150">
                        <div className="space-y-1">
                          <h3 className="font-display font-bold text-xl text-ink">
                            The Crew: Who is in the room?
                          </h3>
                          <p className="text-xs text-ink-muted">
                            Solo or assembled squad. Tell us where you are.
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                            Current Squad Status
                          </label>
                          <select
                            value={formData.crewStatus}
                            onChange={(e) => setFormData({ ...formData, crewStatus: e.target.value })}
                            className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
                          >
                            <option value="Solo builder looking for co founder">
                              Solo builder looking for co founder
                            </option>
                            <option value="Complete team (2 to 4 builders)">
                              Complete team (2 to 4 builders)
                            </option>
                            <option value="Need technical mentor first">
                              Need technical mentor first
                            </option>
                          </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <Input
                            label="Your Name"
                            placeholder="Full Name"
                            value={formData.contactName}
                            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                            required
                          />
                          <Input
                            label="Polaris / Personal Email"
                            type="email"
                            placeholder="name@polariscampus.com"
                            value={formData.contactEmail}
                            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                            required
                          />
                          <Input
                            label="Handle (@handle)"
                            placeholder="@dorm_founder"
                            value={formData.contactHandle}
                            onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                          />
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="pt-4 flex items-center justify-between border-t border-paper-border">
                      {currentStep > 1 ? (
                        <Button
                          type="button"
                          variant="subtle"
                          onClick={() => setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : 1))}
                        >
                          Back
                        </Button>
                      ) : (
                        <div />
                      )}

                      <Button type="submit" variant="lime">
                        <span>{currentStep === 3 ? "Submit Hypothesis (+120 XP)" : "Continue"}</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                /* Ticket Success State */
                <div className="text-center py-6 space-y-6">
                  <div className="w-14 h-14 bg-[#EAFCC0] border border-lime rounded-full mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#5A8700]" />
                  </div>

                  <div className="space-y-2">
                    <span className="stamp-tag bg-ink text-paper-card">
                      {submittedTicket.id}
                    </span>
                    <h3 className="font-display font-extrabold text-3xl text-ink">
                      Hypothesis Ticket Issued.
                    </h3>
                    <p className="text-sm text-ink-muted max-w-md mx-auto">
                      Your submission is logged in local persistence and granted{" "}
                      <span className="font-bold text-ink">+{submittedTicket.xpEarned} Arena XP</span>.
                    </p>
                  </div>

                  {/* Next Tactical Actions */}
                  <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] text-left max-w-md mx-auto space-y-3">
                    <span className="font-mono font-bold text-xs uppercase text-ink block">
                      RECOMMENDED NEXT ACTIONS:
                    </span>
                    <div className="space-y-2 text-xs font-mono">
                      <Link
                        href="/mentors"
                        className="p-2.5 bg-paper-card border border-paper-border rounded-[3px] flex items-center justify-between hover:border-ink"
                      >
                        <span>1. Book Wednesday Founder Hours</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href="#cofounder-board"
                        className="p-2.5 bg-paper-card border border-paper-border rounded-[3px] flex items-center justify-between hover:border-ink"
                      >
                        <span>2. Post or Match on Co-Founder Board</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href="/programs/ignite"
                        className="p-2.5 bg-paper-card border border-paper-border rounded-[3px] flex items-center justify-between hover:border-ink"
                      >
                        <span>3. Review IGNITE Pitch League Rubric</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={site.links.whatsappCommunity}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[#EAFCC0] border border-lime rounded-[3px] flex items-center justify-between hover:border-ink font-bold text-ink"
                      >
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
                          <span>4. Join Founders WhatsApp Loop</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-ink" />
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="subtle"
                    onClick={() => {
                      setSubmittedTicket(null);
                      setCurrentStep(1);
                    }}
                  >
                    Submit Another Idea
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right 4 cols: Side Guidance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 shadow-card space-y-4">
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                WHAT GETS GREENLIT
              </span>
              <h3 className="font-display font-bold text-lg text-ink">
                How FORGE Evaluates:
              </h3>
              <ul className="space-y-2.5 text-xs text-ink-muted leading-relaxed font-mono">
                <li className="flex items-start gap-2">
                  <span className="text-lime font-bold">&check;</span>
                  <span><strong>High Frequency:</strong> Pain experienced weekly or daily.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime font-bold">&check;</span>
                  <span><strong>Clear Wedge:</strong> 1 core feature that delivers value in 60 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime font-bold">&check;</span>
                  <span><strong>Willingness to talk to users:</strong> You will cold DM 50 peers.</span>
                </li>
                <li className="flex items-start gap-2 text-heat">
                  <span className="font-bold">&cross;</span>
                  <span><strong>Disqualified:</strong> Unfocused &ldquo;Uber for Everything&rdquo; slides.</span>
                </li>
              </ul>
            </div>

            <div className="bg-paper-sunken border border-paper-border rounded-[4px] p-6 text-xs font-mono space-y-2">
              <span className="font-bold text-ink block">OFFICE HOURS VENUE:</span>
              <p className="text-ink-muted">
                Room 204, E Cell Bay, Polaris Tech Park Campus. Drop-in reviews every Wednesday 4:00 PM.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Co-Founder Matching Board */}
        <div id="cofounder-board" className="pt-10 border-t border-paper-border space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
                CAMPUS TALENT MATCH
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                Co Founder Matchmaker Board.
              </h2>
              <p className="text-sm text-ink-muted">
                Dorm ventures actively scouting technical partners, lead product designers, and growth hackers.
              </p>
            </div>

            <Button
              variant="lime"
              onClick={() => setIsPostRoleOpen(true)}
              leftIcon={<UserPlus className="w-4 h-4" />}
            >
              Post a Role (+40 XP)
            </Button>
          </div>

          {/* 6 Co-Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardPosts.map((post) => (
              <div
                key={post.id}
                className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-4 sm:space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-paper-border pb-3">
                    <span className="micro-label text-xs font-mono text-ink-muted">
                      {post.timePosted}
                    </span>
                    <Badge variant="lime" size="xs">
                      {post.stage}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-ink">
                      {post.projectTitle}
                    </h3>
                    <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                      {post.oneLiner}
                    </p>
                  </div>

                  <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] text-xs font-mono">
                    <span className="text-ink-muted block text-[10px] uppercase">
                      LOOKING FOR:
                    </span>
                    <span className="font-bold text-ink">
                      {post.lookingFor}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 bg-paper-sunken border border-paper-border rounded text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-paper-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div>
                    <span className="font-bold text-ink block">{post.postedBy.name}</span>
                    <span className="text-ink-muted text-[11px]">{post.postedBy.handle} &middot; {post.postedBy.dept}</span>
                  </div>
                  <a
                    href={`mailto:${post.contactEmail}`}
                    className="px-3 py-1.5 bg-ink text-paper-card rounded-[3px] font-bold text-xs hover:bg-ink-muted transition-colors"
                  >
                    Reach Out
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Post a Role */}
        <Dialog
          isOpen={isPostRoleOpen}
          onClose={() => setIsPostRoleOpen(false)}
          title="Post to Co Founder Board"
          kicker="CAMPUS MATCHMAKING"
        >
          <form onSubmit={handleCreatePost} className="space-y-4 pt-2">
            <Input
              label="Project or Concept Name"
              placeholder="e.g. DocuQuery India"
              value={newPost.projectTitle}
              onChange={(e) => setNewPost({ ...newPost, projectTitle: e.target.value })}
              required
            />
            <Textarea
              label="One-Line Thesis"
              placeholder="What are you building and why does it matter?"
              rows={3}
              value={newPost.oneLiner}
              onChange={(e) => setNewPost({ ...newPost, oneLiner: e.target.value })}
              required
            />
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-semibold text-ink mb-1.5">
                Role Needed
              </label>
              <select
                value={newPost.lookingFor}
                onChange={(e) => setNewPost({ ...newPost, lookingFor: e.target.value as any })}
                className="w-full bg-paper-card border border-paper-border text-ink text-sm px-3.5 py-2.5 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-ink"
              >
                <option value="Technical Co Founder (Backend / AI)">Technical Co Founder (Backend / AI)</option>
                <option value="Lead Product Designer">Lead Product Designer</option>
                <option value="Growth & Campus Ops">Growth & Campus Ops</option>
                <option value="Hardware / IoT Engineer">Hardware / IoT Engineer</option>
              </select>
            </div>
            <Input
              label="Contact Email"
              type="email"
              placeholder="yourname@polariscampus.com"
              value={newPost.contactEmail}
              onChange={(e) => setNewPost({ ...newPost, contactEmail: e.target.value })}
              required
            />

            <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
              <Button type="button" variant="subtle" onClick={() => setIsPostRoleOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="lime">
                Publish Listing (+40 XP)
              </Button>
            </div>
          </form>
        </Dialog>
      </div>
    </div>
  );
}
