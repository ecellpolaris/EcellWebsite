"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { QUESTS, completeQuest, getPlayerProfile, Quest } from "@/lib/xp";
import { CheckCircle2, Circle, ArrowUpRight, Zap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const QuestBoard: React.FC = () => {
  const [completedQuests, setCompletedQuests] = useState<string[]>([]);
  const [justCompleted, setJustCompleted] = useState<string | null>(null);

  useEffect(() => {
    const profile = getPlayerProfile();
    setCompletedQuests(profile.completedQuests);

    const handleUpdate = (e: any) => {
      if (e?.detail) setCompletedQuests(e.detail.completedQuests);
    };
    window.addEventListener("ecell-xp-updated", handleUpdate);
    return () => window.removeEventListener("ecell-xp-updated", handleUpdate);
  }, []);

  const handleClaim = (quest: Quest) => {
    if (quest.isUpcoming || completedQuests.includes(quest.id)) return;
    const res = completeQuest(quest.id);
    if (res.success) {
      setJustCompleted(quest.id);
      setTimeout(() => setJustCompleted(null), 3000);
    }
  };

  return (
    <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-paper-border pb-4">
        <div>
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            SEASON 26 TASK LOG
          </span>
          <h3 className="font-display font-bold text-2xl text-ink">
            Founder Quests.
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="lime" size="xs">
            {completedQuests.length} / {QUESTS.length} CLEARED
          </Badge>
        </div>
      </div>

      {justCompleted && (
        <div className="p-3 bg-[#EAFCC0] border border-lime text-ink text-xs font-mono rounded-[4px] flex items-center gap-2 animate-in fade-in duration-200">
          <Zap className="w-4 h-4 text-ink fill-lime shrink-0" />
          <span className="font-bold">Quest completed! Badge granted to your profile.</span>
        </div>
      )}

      {/* Quest items list */}
      <div className="divide-y divide-paper-border/70">
        {QUESTS.map((quest) => {
          const isDone = completedQuests.includes(quest.id) && !quest.isUpcoming;
          const isUpcoming = quest.isUpcoming;
          return (
            <div
              key={quest.id}
              className={`py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                isDone ? "opacity-60" : "hover:bg-paper-sunken/40"
              }`}
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-status-ok shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-ink-muted shrink-0" />
                  )}
                  <h4 className="font-display font-bold text-base text-ink">
                    {quest.title}
                  </h4>
                  <span className="micro-label text-[10px] px-1.5 py-0.2 rounded bg-paper-sunken border border-paper-border text-ink-muted uppercase">
                    {quest.category}
                  </span>
                </div>
                <p className="text-xs text-ink-muted pl-6">
                  {quest.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 pl-6 sm:pl-0">

                {isUpcoming ? (
                  <span className="font-mono text-xs font-bold text-ink-muted bg-paper-sunken border border-paper-border px-3 py-1 rounded-[3px] uppercase tracking-wider">
                    Upcoming
                  </span>
                ) : isDone ? (
                  <span className="font-mono text-xs font-bold text-status-ok px-2.5 py-1">
                    CLAIMED
                  </span>
                ) : quest.actionUrl ? (
                  <div className="flex items-center gap-2">
                    <Link
                      href={quest.actionUrl}
                      className="text-xs font-mono font-bold text-ink underline underline-offset-2 hover:text-ink-muted"
                    >
                      {quest.actionLabel || "Go"}
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleClaim(quest)}
                      className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs px-2.5 py-1 rounded-[3px] transition-colors"
                    >
                      Check Off
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleClaim(quest)}
                    className="bg-ink hover:bg-ink-muted text-paper-card font-mono text-xs px-2.5 py-1 rounded-[3px] transition-colors"
                  >
                    Check Off
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
