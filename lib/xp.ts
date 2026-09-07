export interface Level {
  rank: number;
  name: string;
  minXp: number;
  maxXp: number;
  description: string;
}

export const LEVELS: Level[] = [
  { rank: 1, name: "Spectator", minXp: 0, maxXp: 99, description: "Lurking in the tech park. Watching others ship." },
  { rank: 2, name: "Explorer", minXp: 100, maxXp: 249, description: "Attending AMAs and scouting dorm room problems." },
  { rank: 3, name: "Ideator", minXp: 250, maxXp: 499, description: "Has submitted at least one unhinged hypothesis." },
  { rank: 4, name: "Builder", minXp: 500, maxXp: 899, description: "Code or prototype is live. Not sleeping until 3 AM." },
  { rank: 5, name: "Pitcher", minXp: 900, maxXp: 1499, description: "Survived the IGNITE gauntlet and mentor grilling." },
  { rank: 6, name: "Campus Founder", minXp: 1500, maxXp: 2499, description: "FORGE incubated. Users are breaking the product." },
  { rank: 7, name: "Operator", minXp: 2500, maxXp: 99999, description: "Term sheet in sight. Teaching the next freshers." },
];

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "shipping" | "pitching" | "community" | "intel";
}

export const BADGES: Badge[] = [
  { id: "ship-or-die", name: "Ship or Die", description: "Shipped a working MVP prototype within 30 days.", icon: "⚡", category: "shipping" },
  { id: "first-pitch", name: "First Pitch", description: "Pitched in front of a live panel of operators.", icon: "🎤", category: "pitching" },
  { id: "night-owl", name: "Night Owl", description: "Submitted an idea or quest log between 1 AM and 5 AM.", icon: "🌙", category: "shipping" },
  { id: "squad-up", name: "Squad Up", description: "Found a co founder through the PST Idea Lab board.", icon: "🤝", category: "community" },
  { id: "summit-resident", name: "Summit Resident", description: "Registered for all 4 conclaves at E Summit 26.", icon: "🎟️", category: "intel" },
  { id: "mentor-magnet", name: "Mentor Magnet", description: "Booked and attended an official Founder Hours slot.", icon: "🎯", category: "community" },
  { id: "campus-diplomat", name: "Campus Diplomat", description: "Represented PST at an inter college entrepreneurship league.", icon: "🏛️", category: "community" },
];

export interface Quest {
  id: string;
  title: string;
  description: string;
  xp: number;
  category: "daily" | "season" | "milestone" | "upcoming";
  badgeRewardId?: string;
  actionUrl?: string;
  actionLabel?: string;
  isUpcoming?: boolean;
}

export const QUESTS: Quest[] = [
  {
    id: "submit-idea",
    title: "Submit a Campus Problem",
    description: "Frame a real wedge in the Idea Lab. No pitch decks, just problems.",
    xp: 120,
    category: "milestone",
    badgeRewardId: "ship-or-die",
    actionUrl: "/idea",
    actionLabel: "Submit Idea",
  },
  {
    id: "arena-quiz",
    title: "Clear the Founder IQ Quiz",
    description: "Score at least 6/10 on the timed 10 question startup sprint.",
    xp: 60,
    category: "upcoming",
    isUpcoming: true,
    actionUrl: "/arena/quiz",
    actionLabel: "Upcoming",
  },
  {
    id: "refer-cofounder",
    title: "List or Join on Co Founder Board",
    description: "Post a role or apply to an existing hostel room team.",
    xp: 80,
    category: "season",
    badgeRewardId: "squad-up",
    actionUrl: "/idea#cofounder-board",
    actionLabel: "View Board",
  },
  {
    id: "checkin-founder-hours",
    title: "Request Mentor Office Hours",
    description: "Book an unvarnished review with an active operator or alumnus.",
    xp: 40,
    category: "season",
    badgeRewardId: "mentor-magnet",
    actionUrl: "/mentors",
    actionLabel: "Book Mentor",
  },
  {
    id: "summit-pass",
    title: "Lock in for OJT Demo Day 2027",
    description: "Request an invite pass for the OJT Demo Day 2027 flagship cohort.",
    xp: 20,
    category: "season",
    badgeRewardId: "summit-resident",
    actionUrl: "/summit",
    actionLabel: "Lock In",
  },
  {
    id: "rsvp-event",
    title: "RSVP to Upcoming Week's Workshop",
    description: "Reserve a seat at the upcoming campus founder breakdown.",
    xp: 30,
    category: "daily",
    actionUrl: "/events",
    actionLabel: "Explore Events",
  },
];

export interface PlayerProfile {
  handle: string;
  name: string;
  year: string;
  dept: string;
  xp: number;
  completedQuests: string[];
  badges: string[];
  quizHighScore: number;
  submittedIdeas: {
    id: string;
    title: string;
    wedge: string;
    date: string;
  }[];
  registeredEvents: string[];
  createdAt: string;
}

const STORAGE_KEY = "ecell_pst_player_v1";

export function getDefaultProfile(): PlayerProfile {
  return {
    handle: "@dorm_founder",
    name: "PST Builder",
    year: "1st Year",
    dept: "Computer Science & AI",
    xp: 60,
    completedQuests: [],
    badges: ["first-pitch"],
    quizHighScore: 0,
    submittedIdeas: [],
    registeredEvents: [],
    createdAt: new Date().toISOString(),
  };
}

export function getPlayerProfile(): PlayerProfile {
  if (typeof window === "undefined") {
    return getDefaultProfile();
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const def = getDefaultProfile();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(def));
      return def;
    }
    const parsed = JSON.parse(raw);
    if (parsed.completedQuests && parsed.completedQuests.includes("arena-quiz")) {
      parsed.completedQuests = parsed.completedQuests.filter((id: string) => id !== "arena-quiz");
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch {
    return getDefaultProfile();
  }
}

export function savePlayerProfile(profile: PlayerProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    window.dispatchEvent(new CustomEvent("ecell-xp-updated", { detail: profile }));
  } catch (e) {
    console.error("Failed to save player profile", e);
  }
}

export function calculateLevel(xp: number): Level {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getNextLevel(xp: number): { nextLevel: Level | null; xpNeeded: number; progressPct: number } {
  const current = calculateLevel(xp);
  const next = LEVELS.find((l) => l.rank === current.rank + 1) || null;
  if (!next) {
    return { nextLevel: null, xpNeeded: 0, progressPct: 100 };
  }
  const range = next.minXp - current.minXp;
  const progress = Math.min(Math.max(xp - current.minXp, 0), range);
  const progressPct = Math.round((progress / range) * 100);
  const xpNeeded = next.minXp - xp;
  return { nextLevel: next, xpNeeded, progressPct };
}

export function addXP(amount: number, reason: string): { newTotal: number; levelUp: boolean; newLevel: Level } {
  const profile = getPlayerProfile();
  const oldLevel = calculateLevel(profile.xp);
  profile.xp += amount;
  const newLevel = calculateLevel(profile.xp);
  const levelUp = newLevel.rank > oldLevel.rank;

  // Check night-owl badge
  const hours = new Date().getHours();
  if ((hours >= 1 && hours < 5) && !profile.badges.includes("night-owl")) {
    profile.badges.push("night-owl");
  }

  savePlayerProfile(profile);
  return { newTotal: profile.xp, levelUp, newLevel };
}

export function completeQuest(questId: string): { success: boolean; xpEarned: number } {
  const profile = getPlayerProfile();
  if (profile.completedQuests.includes(questId)) {
    return { success: false, xpEarned: 0 };
  }
  const quest = QUESTS.find((q) => q.id === questId);
  const xpReward = quest ? quest.xp : 30;
  profile.completedQuests.push(questId);
  if (quest?.badgeRewardId && !profile.badges.includes(quest.badgeRewardId)) {
    profile.badges.push(quest.badgeRewardId);
  }
  savePlayerProfile(profile);
  addXP(xpReward, `Quest: ${quest?.title || questId}`);
  return { success: true, xpEarned: xpReward };
}
