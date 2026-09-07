"use client";

import React, { useState } from "react";
import { RESOURCES, FounderResource } from "@/lib/data/resources";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { BookOpen, Download, ArrowRight, Clock, User, CheckCircle2 } from "lucide-react";

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<FounderResource | null>(null);

  const categories = [
    "All",
    "How to Start",
    "How to Pitch",
    "How to Incorporate",
    "Co Founders",
    "Fundraising & Capital",
    "Product Architecture",
  ];

  const filtered =
    selectedCategory === "All"
      ? RESOURCES
      : RESOURCES.filter((r) => r.category === selectedCategory);

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-paper-border pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="stamp-tag bg-lime text-ink">
                FOUNDER FIELD GUIDES
              </span>
              <span className="micro-label font-mono text-ink-muted text-xs">
                A LIBRARY &middot; NOT A BLOG DUMP
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
              Playbooks &amp; Lore.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Opinionated tactical field guides written by operators and engineering leads at Polaris. No generic fluff · real mechanics for the Indian ecosystem.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCategory(c)}
              className={`text-xs font-mono px-3 py-1.5 rounded-[3px] border transition-colors ${
                selectedCategory === c
                  ? "bg-ink text-paper-card border-ink font-bold"
                  : "bg-paper-card text-ink-muted border-paper-border hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <div
              key={resource.slug}
              className="bg-paper-card border border-paper-border rounded-[4px] p-4 sm:p-6 shadow-card flex flex-col justify-between hover:border-ink/50 transition-all space-y-5 sm:space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-paper-border pb-3">
                  <span className="micro-label font-mono text-xs font-bold text-ink-muted uppercase">
                    {resource.category}
                  </span>
                  <span className="text-xs font-mono text-ink-muted flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{resource.readTime}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-ink leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {resource.oneLiner}
                  </p>
                </div>

                {/* Key Takeaways Preview */}
                <div className="p-3 bg-paper-sunken border border-paper-border rounded-[3px] space-y-1.5 text-xs font-mono">
                  <span className="font-bold text-ink block text-[10px] uppercase">
                    KEY DOCTRINE:
                  </span>
                  <p className="text-ink text-[11px] leading-relaxed">
                    {resource.keyTakeaways[0]}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="text-xs font-mono text-ink-muted">
                  By {resource.author}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(resource)}
                  className="bg-lime hover:bg-lime-hover text-ink font-mono text-xs px-3 py-1.5 rounded-[3px] font-bold border border-[#9DD400] flex items-center justify-center gap-1.5 transition-transform active:scale-95 w-full sm:w-auto"
                >
                  <span>Read Field Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Downloadable One Pagers Strip */}
        <div className="bg-paper-sunken border border-paper-border rounded-[4px] p-5 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
              OFFLINE ASSETS
            </span>
            <h3 className="font-display font-bold text-2xl text-ink">
              Official Printable One Pagers &amp; Checklists.
            </h3>
            <p className="text-sm text-ink-muted">
              Operational checklists formatted and ready to pin to your dorm wall or whiteboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RESOURCES.filter((r) => r.downloadableAsset).slice(0, 3).map((r, i) => (
              <div
                key={i}
                className="p-4 bg-paper-card border border-paper-border rounded-[4px] shadow-sm flex items-center justify-between gap-3"
              >
                <div className="space-y-0.5">
                  <span className="font-mono text-xs font-bold text-ink block truncate max-w-[180px]">
                    {r.downloadableAsset?.name}
                  </span>
                  <span className="text-[10px] font-mono text-ink-muted">
                    {r.downloadableAsset?.format} &middot; {r.downloadableAsset?.fileSize}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => alert(`Downloaded dummy template: ${r.downloadableAsset?.name}`)}
                  className="p-2 border border-paper-border hover:border-ink rounded text-ink"
                  title="Download template"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Article Reader Modal */}
        <Dialog
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle?.title}
          kicker={activeArticle ? `${activeArticle.category} · ${activeArticle.readTime}` : ""}
          maxWidth="lg"
        >
          {activeArticle && (
            <div className="space-y-6 pt-2 max-h-[70vh] overflow-y-auto pr-2">
              <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] space-y-2">
                <span className="font-mono font-bold text-xs uppercase text-ink block">
                  KEY PRINCIPLES:
                </span>
                <ul className="space-y-1.5 text-xs font-mono text-ink">
                  {activeArticle.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-status-ok shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-sm text-ink leading-relaxed font-sans">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-paper-border flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>Written by: {activeArticle.author}</span>
                <span>Published: {activeArticle.publishedDate}</span>
              </div>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}
