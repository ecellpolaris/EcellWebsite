export interface AmbassadorPerk {
  title: string;
  desc: string;
  icon: string;
}

export const AMBASSADOR_PERKS: AmbassadorPerk[] = [
  {
    title: "Official Recommendation Letter",
    desc: "Signed by President Saahi Dubey & Faculty Advisor detailing your venture coordination impact.",
    icon: "📜",
  },
  {
    title: "VIP E Summit 26 All Access Pass",
    desc: "Complimentary access to all 4 conclaves, speaker green rooms, and closed door dinner mixers.",
    icon: "🎟️",
  },
  {
    title: "Exclusive SPARK Merch Drop",
    desc: "Heavyweight daylight edition hoodie, tote, sticker sheets, and founder field journal.",
    icon: "🧢",
  },
  {
    title: "Direct Founder & Incubator Intros",
    desc: "Fast track pipeline to recommend founders from your campus directly to the FORGE evaluation committee.",
    icon: "⚡",
  },
];

export interface AmbassadorTask {
  id: string;
  category: string;
  title: string;
  xpReward: number;
  cadence: string;
  desc: string;
}

export const AMBASSADOR_TASKS: AmbassadorTask[] = [
  {
    id: "task-satellite",
    category: "Event Hosting",
    title: "Host a Satellite Problem Sprint",
    xpReward: 150,
    cadence: "Once a semester",
    desc: "Organize a 2 hour problem framing sprint at your college. Top team advances directly to IGNITE Round 2.",
  },
  {
    id: "task-summit-delegation",
    category: "Summit Delegation",
    title: "Lead a 10 Student Summit Delegation",
    xpReward: 200,
    cadence: "Annual",
    desc: "Coordinate a group of passionate builders from your campus to attend E Summit 26 in Bengaluru.",
  },
  {
    id: "task-scout",
    category: "Venture Scouting",
    title: "Scout 3 High Conviction Dorm Startups",
    xpReward: 100,
    cadence: "Monthly",
    desc: "Identify fellow students who have written working code or built hardware MVPs and introduce them to FORGE.",
  },
  {
    id: "task-social",
    category: "Community Broadcast",
    title: "Broadcast Season Notices to College Slack/WhatsApp",
    xpReward: 40,
    cadence: "Bi weekly",
    desc: "Keep your local student developer groups informed on grant deadlines and founder office hours.",
  },
];

export interface CampusAmbassadorRank {
  rank: number;
  name: string;
  college: string;
  city: string;
  delegatesRegistered: number;
  points: number;
  badge: string;
}

export const CA_LEADERBOARD: CampusAmbassadorRank[] = [
  { rank: 1, name: "Varun K.", college: "PES University", city: "Bengaluru", delegatesRegistered: 34, points: 1420, badge: "Grand Envoy" },
  { rank: 2, name: "Meghna Nair", college: "RV College of Engineering", city: "Bengaluru", delegatesRegistered: 28, points: 1250, badge: "Master Ambassador" },
  { rank: 3, name: "Ayush Saxena", college: "IIIT Bangalore", city: "Bengaluru", delegatesRegistered: 24, points: 1100, badge: "Master Ambassador" },
  { rank: 4, name: "Pooja Reddy", college: "BMS College of Engineering", city: "Bengaluru", delegatesRegistered: 19, points: 940, badge: "Senior Scout" },
  { rank: 5, name: "Harsh Vardhan", college: "NIT Surathkal", city: "Mangaluru", delegatesRegistered: 17, points: 870, badge: "Senior Scout" },
  { rank: 6, name: "Sneha Sen", college: "Manipal Institute of Tech", city: "Manipal", delegatesRegistered: 14, points: 760, badge: "Active Envoy" },
  { rank: 7, name: "Rishi Menon", college: "Ramaiah Institute of Tech", city: "Bengaluru", delegatesRegistered: 11, points: 640, badge: "Active Envoy" },
  { rank: 8, name: "Gaurav Paul", college: "BITS Goa", city: "Goa", delegatesRegistered: 9, points: 520, badge: "Active Envoy" },
];
