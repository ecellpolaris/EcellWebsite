"use client";

import React, { useState, useEffect } from "react";
import {
  getPlayerProfile,
  savePlayerProfile,
  calculateLevel,
  getNextLevel,
  PlayerProfile,
} from "@/lib/xp";
import { Dialog } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Zap, User, Edit3, Shield, Trophy } from "lucide-react";

export const PlayerProfileCard: React.FC = () => {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    handle: "",
    name: "",
    year: "",
    dept: "",
  });

  useEffect(() => {
    const p = getPlayerProfile();
    setProfile(p);
    setFormData({
      handle: p.handle,
      name: p.name,
      year: p.year,
      dept: p.dept,
    });

    const handleUpdate = (e: any) => {
      if (e?.detail) setProfile(e.detail);
    };
    window.addEventListener("ecell-xp-updated", handleUpdate);
    return () => window.removeEventListener("ecell-xp-updated", handleUpdate);
  }, []);

  if (!profile) return null;

  const currentLevel = calculateLevel(profile.xp);
  const { nextLevel, xpNeeded, progressPct } = getNextLevel(profile.xp);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...profile,
      handle: formData.handle.startsWith("@") ? formData.handle : `@${formData.handle}`,
      name: formData.name,
      year: formData.year,
      dept: formData.dept,
    };
    savePlayerProfile(updated);
    setIsEditOpen(false);
  };

  return (
    <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-7 shadow-lift space-y-6 relative">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-paper-border pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[4px] bg-ink text-lime flex items-center justify-center font-display font-extrabold text-xl shadow-sm">
            {profile.handle.substring(1, 3).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display font-bold text-xl text-ink">
                {profile.handle}
              </h2>
              <button
                type="button"
                onClick={() => setIsEditOpen(true)}
                className="p-1 text-ink-muted hover:text-ink hover:bg-paper-sunken rounded transition-colors"
                title="Edit player card"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs font-mono text-ink-muted">
              {profile.name} &middot; {profile.year} &middot; {profile.dept}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="micro-label text-ink-muted text-[10px] block">
            SEASON PASS
          </span>
          <span className="stamp-tag bg-lime text-ink font-bold text-xs mt-0.5">
            LVL 0{currentLevel.rank} &middot; {currentLevel.name}
          </span>
        </div>
      </div>

      {/* Level Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-ink font-bold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-lime text-ink" />
            <span>{profile.xp} TOTAL SCORE</span>
          </span>
          {nextLevel ? (
            <span className="text-ink-muted">
              {xpNeeded} pts to {nextLevel.name}
            </span>
          ) : (
            <span className="text-status-ok font-bold">MAX OPERATOR RANK</span>
          )}
        </div>

        <div className="w-full h-3 bg-paper-sunken rounded-full overflow-hidden border border-paper-border p-0.5">
          <div
            className="h-full bg-lime rounded-full transition-all duration-300 border border-[#9DD400]"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <p className="text-xs text-ink-muted italic font-mono">
          &ldquo;{currentLevel.description}&rdquo;
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-3 gap-3 pt-2 border-t border-paper-border text-center">
        <div className="p-2.5 bg-paper-sunken rounded-[3px] border border-paper-border">
          <span className="micro-label text-ink-muted text-[9px] block">
            QUESTS DONE
          </span>
          <span className="font-mono font-bold text-base text-ink">
            {profile.completedQuests.length}
          </span>
        </div>
        <div className="p-2.5 bg-paper-sunken rounded-[3px] border border-paper-border">
          <span className="micro-label text-ink-muted text-[9px] block">
            BADGES EARNED
          </span>
          <span className="font-mono font-bold text-base text-ink">
            {profile.badges.length} / 7
          </span>
        </div>
        <div className="p-2.5 bg-paper-sunken rounded-[3px] border border-paper-border">
          <span className="micro-label text-ink-muted text-[9px] block">
            QUIZ BEST
          </span>
          <span className="font-mono font-bold text-base text-ink">
            {profile.quizHighScore}/10
          </span>
        </div>
      </div>

      {/* Edit Handle Dialog */}
      <Dialog
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Edit Builder Identity"
        kicker="ARENA PROFILE SETTINGS"
      >
        <form onSubmit={handleSave} className="space-y-4 pt-2">
          <Input
            label="Campus Handle (@dorm_founder)"
            value={formData.handle}
            onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
            placeholder="@dorm_founder"
            required
          />
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Academic Year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              placeholder="1st Year"
              required
            />
            <Input
              label="Department / Focus"
              value={formData.dept}
              onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
              placeholder="CSE · AI"
              required
            />
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-paper-border">
            <Button
              type="button"
              variant="subtle"
              onClick={() => setIsEditOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="lime">
              Save Profile
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
