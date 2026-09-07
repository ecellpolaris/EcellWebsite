"use client";

import React, { useState, useEffect } from "react";
import { SEEDED_LEADERBOARD, LeaderboardEntry } from "@/lib/data/arena-data";
import { getPlayerProfile } from "@/lib/xp";
import { Tabs } from "@/components/ui/Tabs";
import { Zap, Trophy, Lightbulb, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export const LeaderboardTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("xp");
  const [entries, setEntries] = useState<LeaderboardEntry[]>(() =>
    SEEDED_LEADERBOARD.map((item, index) => ({ ...item, rank: index + 1 }))
  );
  const [visibleCount, setVisibleCount] = useState<number>(5);

  useEffect(() => {
    const profile = getPlayerProfile();

    // Create user entry
    const userEntry: LeaderboardEntry = {
      rank: 99,
      handle: profile.handle,
      name: `${profile.name} (You)`,
      dept: profile.dept,
      year: profile.year,
      xp: profile.xp,
      level: "Builder",
      ideasCount: profile.submittedIdeas.length,
      quizScore: profile.quizHighScore,
      isCurrentUser: true,
    };

    // Filter out duplicate if handle exists in seed
    const all = [...SEEDED_LEADERBOARD.filter((e) => e.handle !== profile.handle), userEntry];

    // Sort based on active tab
    if (activeTab === "xp") {
      all.sort((a, b) => b.xp - a.xp);
    } else if (activeTab === "quiz") {
      all.sort((a, b) => b.quizScore - a.quizScore);
    } else {
      all.sort((a, b) => b.ideasCount - a.ideasCount);
    }

    // Reassign ranks
    const ranked = all.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

    setEntries(ranked);
  }, [activeTab]);

  const tabs = [
    { id: "xp", label: "XP Standings" },
    { id: "quiz", label: "Quiz IQ" },
    { id: "ideas", label: "Ideas Logged" },
  ];

  return (
    <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-paper-border pb-4">
        <div>
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            PUBLIC RANKINGS
          </span>
          <h3 className="font-display font-bold text-2xl text-ink">
            Campus Leaderboard.
          </h3>
          <p className="text-xs font-mono text-ink-muted mt-0.5">
            Season 26 campus board. Resets every semester.
          </p>
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-paper-border text-[11px] font-mono text-ink-muted uppercase">
              <th className="py-2.5 px-3 w-12 text-center">Rank</th>
              <th className="py-2.5 px-3">Builder</th>
              <th className="py-2.5 px-3 hidden sm:table-cell">Dept &middot; Year</th>
              <th className="py-2.5 px-3 text-right">
                {activeTab === "xp"
                  ? "XP Score"
                  : activeTab === "quiz"
                  ? "Quiz Score"
                  : "Ideas Submitted"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-paper-border/60 font-mono">
            {entries.slice(0, visibleCount).map((entry) => (
              <tr
                key={entry.handle}
                className={`transition-colors ${
                  entry.isCurrentUser
                    ? "bg-[#EAFCC0] border-l-4 border-lime font-bold text-ink"
                    : "hover:bg-paper-sunken/50 text-ink"
                }`}
              >
                <td className="py-3 px-3 text-center">
                  {entry.rank === 1 ? (
                    <span className="inline-block px-1.5 py-0.5 bg-lime text-ink rounded font-bold text-xs">
                      #1
                    </span>
                  ) : entry.rank === 2 ? (
                    <span className="inline-block px-1.5 py-0.5 bg-paper-sunken text-ink rounded font-bold text-xs">
                      #2
                    </span>
                  ) : entry.rank === 3 ? (
                    <span className="inline-block px-1.5 py-0.5 bg-paper-sunken text-ink rounded font-bold text-xs">
                      #3
                    </span>
                  ) : (
                    <span className="text-xs text-ink-muted">#{entry.rank}</span>
                  )}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-ink">{entry.handle}</span>
                    {entry.isCurrentUser && (
                      <span className="text-[10px] bg-ink text-paper-card px-1.5 py-0.2 rounded uppercase">
                        YOU
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-ink-muted block font-sans">
                    {entry.name}
                  </span>
                </td>
                <td className="py-3 px-3 hidden sm:table-cell text-xs text-ink-muted">
                  {entry.dept} &middot; {entry.year}
                </td>
                <td className="py-3 px-3 text-right font-bold text-ink">
                  {activeTab === "xp" && (
                    <span className="flex items-center justify-end gap-1 text-ink">
                      <Zap className="w-3.5 h-3.5 fill-lime text-ink" />
                      {entry.xp} XP
                    </span>
                  )}
                  {activeTab === "quiz" && (
                    <span className="text-ink">
                      {entry.quizScore}/10 ({entry.quizScore * 10}%)
                    </span>
                  )}
                  {activeTab === "ideas" && (
                    <span className="text-ink flex items-center justify-end gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-lime" />
                      {entry.ideasCount} Ideas
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trigger Button to show next */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-paper-border text-xs font-mono">
        <span className="text-ink-muted">
          Showing Top {Math.min(visibleCount, entries.length)} of {entries.length} Builders
        </span>
        {visibleCount < entries.length ? (
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + 5, entries.length))}
            className="w-full sm:w-auto bg-paper-sunken hover:bg-paper-border text-ink px-4 py-2 rounded-[3px] border border-paper-border hover:border-ink font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-98"
          >
            <span>View Next 5 Builders</span>
            <ChevronDown className="w-3.5 h-3.5 text-ink" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setVisibleCount(5)}
            className="w-full sm:w-auto bg-paper-sunken hover:bg-paper-border text-ink px-4 py-2 rounded-[3px] border border-paper-border hover:border-ink font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-98"
          >
            <span>Show Top 5 Only</span>
            <ChevronUp className="w-3.5 h-3.5 text-ink" />
          </button>
        )}
      </div>
    </div>
  );
};
