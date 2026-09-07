"use client";

import React, { useState, useEffect } from "react";
import { BADGES, getPlayerProfile } from "@/lib/xp";
import { Lock } from "lucide-react";

export const BadgeGrid: React.FC = () => {
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);

  useEffect(() => {
    const profile = getPlayerProfile();
    setUnlockedBadges(profile.badges);

    const handleUpdate = (e: any) => {
      if (e?.detail) setUnlockedBadges(e.detail.badges);
    };
    window.addEventListener("ecell-xp-updated", handleUpdate);
    return () => window.removeEventListener("ecell-xp-updated", handleUpdate);
  }, []);

  return (
    <div className="bg-paper-card border border-paper-border rounded-[4px] p-6 sm:p-7 shadow-card space-y-6">
      <div className="flex items-center justify-between border-b border-paper-border pb-4">
        <div>
          <span className="micro-label text-ink-muted text-xs font-mono tracking-widest block">
            ACHIEVEMENT SHOWCASE
          </span>
          <h3 className="font-display font-bold text-2xl text-ink">
            Badge Case.
          </h3>
        </div>
        <span className="font-mono text-xs text-ink-muted font-bold">
          {unlockedBadges.length} / {BADGES.length} UNLOCKED
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {BADGES.map((badge) => {
          const isUnlocked = unlockedBadges.includes(badge.id);
          return (
            <div
              key={badge.id}
              className={`p-4 rounded-[4px] border transition-all flex flex-col justify-between relative ${
                isUnlocked
                  ? "bg-paper-sunken border-ink shadow-sm"
                  : "bg-paper-card/50 border-paper-border/60 opacity-50"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl select-none">{badge.icon}</span>
                  {isUnlocked ? (
                    <span className="micro-label text-[9px] bg-lime text-ink font-bold px-1.5 py-0.2 rounded">
                      UNLOCKED
                    </span>
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-ink-muted" />
                  )}
                </div>

                <h4 className="font-display font-bold text-sm text-ink leading-tight">
                  {badge.name}
                </h4>

                <p className="text-[11px] text-ink-muted leading-snug">
                  {badge.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-paper-border/60 text-[10px] font-mono text-ink-muted uppercase">
                {badge.category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
