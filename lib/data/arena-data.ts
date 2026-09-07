export interface LeaderboardEntry {
  rank: number;
  handle: string;
  name: string;
  dept: string;
  year: string;
  xp: number;
  level: string;
  ideasCount: number;
  quizScore: number;
  isCurrentUser?: boolean;
}

export const SEEDED_LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, handle: "@saahi_d", name: "Saahi Dubey", dept: "CSE", year: "2nd Year", xp: 2840, level: "Operator", ideasCount: 5, quizScore: 10 },
  { rank: 2, handle: "@rohit_eval", name: "Rohit Krishnan", dept: "CSE · AI", year: "2nd Year", xp: 2150, level: "Campus Founder", ideasCount: 4, quizScore: 9 },
  { rank: 3, handle: "@dev_m", name: "Dev Mehta", dept: "Systems", year: "2nd Year", xp: 1980, level: "Campus Founder", ideasCount: 3, quizScore: 9 },
  { rank: 4, handle: "@tanvi_r", name: "Tanvi Rao", dept: "CSE", year: "2nd Year", xp: 1740, level: "Campus Founder", ideasCount: 4, quizScore: 8 },
  { rank: 5, handle: "@varun_volt", name: "Varun Hegde", dept: "Electronics", year: "2nd Year", xp: 1620, level: "Campus Founder", ideasCount: 3, quizScore: 8 },
  { rank: 6, handle: "@shreya_cart", name: "Shreya Shenoy", dept: "Design", year: "1st Year", xp: 1410, level: "Pitcher", ideasCount: 3, quizScore: 8 },
  { rank: 7, handle: "@arjun_split", name: "Arjun Bhatia", dept: "CSE", year: "1st Year", xp: 1280, level: "Pitcher", ideasCount: 2, quizScore: 9 },
  { rank: 8, handle: "@kabir_m", name: "Kabir Malhotra", dept: "Systems", year: "2nd Year", xp: 1150, level: "Pitcher", ideasCount: 2, quizScore: 8 },
  { rank: 9, handle: "@ananya_bio", name: "Ananya Iyer", dept: "Bio & CS", year: "1st Year", xp: 940, level: "Pitcher", ideasCount: 2, quizScore: 7 },
  { rank: 10, handle: "@kunal_rev", name: "Kunal Bansal", dept: "Systems", year: "2nd Year", xp: 820, level: "Builder", ideasCount: 2, quizScore: 8 },
  { rank: 11, handle: "@aarav_k", name: "Aarav Kapur", dept: "Design", year: "2nd Year", xp: 750, level: "Builder", ideasCount: 1, quizScore: 8 },
  { rank: 12, handle: "@pranav_n", name: "Pranav Nair", dept: "CSE", year: "1st Year", xp: 680, level: "Builder", ideasCount: 2, quizScore: 7 },
  { rank: 13, handle: "@rhea_chai", name: "Rhea Chhabra", dept: "Tech & Mgmt", year: "2nd Year", xp: 590, level: "Builder", ideasCount: 1, quizScore: 7 },
  { rank: 14, handle: "@nikhil_j", name: "Nikhil Joshi", dept: "CSE", year: "2nd Year", xp: 480, level: "Ideator", ideasCount: 2, quizScore: 6 },
  { rank: 15, handle: "@zain_a", name: "Zain Ahmed", dept: "CSE · AI", year: "1st Year", xp: 320, level: "Ideator", ideasCount: 1, quizScore: 7 },
];

export interface LiveNotice {
  id: string;
  tag: "FORGE" | "IGNITE" | "SUMMIT" | "MENTORS" | "BAY";
  title: string;
  timestamp: string;
  linkText?: string;
  linkUrl?: string;
}

export const LIVE_NOTICES: LiveNotice[] = [
  {
    id: "n-0",
    tag: "BAY",
    title: "Official E Cell PST Founders & Builders WhatsApp group is now live. Join the internal loop.",
    timestamp: "Just now",
    linkText: "Join WhatsApp Loop",
    linkUrl: "https://chat.whatsapp.com/Hae2cpFYZDn6U9n8X331CZ?mode=gi_t",
  },
  {
    id: "n-1",
    tag: "SUMMIT",
    title: "E Summit 26 conclave speaker schedule published. 12 operators confirmed.",
    timestamp: "2 hours ago",
    linkText: "View Conclaves",
    linkUrl: "/summit",
  },
  {
    id: "n-2",
    tag: "MENTORS",
    title: "Tanmay Sharma (VP Engg) opened 3 new Founder Hours slots for Wednesday.",
    timestamp: "5 hours ago",
    linkText: "Reserve Slot",
    linkUrl: "/mentors",
  },
  {
    id: "n-3",
    tag: "FORGE",
    title: "FORGE Cohort 03 applications cross 18 dorm problem submissions.",
    timestamp: "Yesterday",
    linkText: "Submit Idea",
    linkUrl: "/idea",
  },
  {
    id: "n-4",
    tag: "IGNITE",
    title: "Round 2 shortlisted teams announced for the Fall Pitch Sprint.",
    timestamp: "2 days ago",
    linkText: "Check Schedule",
    linkUrl: "/events",
  },
  {
    id: "n-5",
    tag: "BAY",
    title: "E Cell Bay hardware prototyping bench now open 24/7 for FORGE founders.",
    timestamp: "3 days ago",
    linkText: "Bay Guidelines",
    linkUrl: "/contact",
  },
];

export const PARTNER_LOGOS = [
  { name: "Institution's Innovation Council", label: "MHRD / IIC PST" },
  { name: "Classplus Founder Network", label: "Founder DNA" },
  { name: "ORR Seed Ventures", label: "Early Stage Capital" },
  { name: "DivyaSree Tech Hub", label: "Campus Partner" },
  { name: "AWS Startups", label: "Cloud Credits" },
  { name: "Supabase", label: "Dev Platform" },
];
