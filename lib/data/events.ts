export interface CampusEvent {
  slug: string;
  title: string;
  kicker: string;
  category: "Talk" | "Workshop" | "Competition" | "Mixer" | "Summit";
  status: "Upcoming" | "Ongoing" | "Past";
  date: string;
  time: string;
  venue: string;
  xpReward: number;
  capacity: string;
  spotsLeft: number;
  shortDesc: string;
  fullDesc: string;
  speaker: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  agenda: { time: string; activity: string }[];
  prerequisites: string[];
}

export const EVENTS: CampusEvent[] = [
  {
    slug: "vibeathon-replit-teardown",
    title: "Vibe Coding & Autonomous Agent Stacks",
    kicker: "HANDS-ON WORKSHOP · THIS WEEK",
    category: "Workshop",
    status: "Upcoming",
    date: "Sep 18, 2026",
    time: "4:30 PM to 7:30 PM IST",
    venue: "Lab 3B, Polaris Tech Campus (Wipro Corridor)",
    xpReward: 80,
    capacity: "60 Seats",
    spotsLeft: 8,
    shortDesc: "Tear down how autonomous coding agents build, test, and ship complete products before dinner.",
    fullDesc: "An aggressive live coding session. We will build a multi tenant micro SaaS with modern agent workflows, deploy it to edge workers, and measure real inference latency.",
    speaker: {
      name: "Akash Singhal",
      role: "Lead Systems Engineer & ex-Replit Fellow",
      company: "Polaris Labs",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "4:30 PM", activity: "Check-in & API Key verification" },
      { time: "5:00 PM", activity: "Building agent tools from scratch" },
      { time: "6:15 PM", activity: "Live deploy sprint: 30 minutes to ship" },
      { time: "7:00 PM", activity: "Lightning peer roasts & +80 XP grant" },
    ],
    prerequisites: ["Laptop with Node.js installed", "GitHub account", "Basic TypeScript familiarity"],
  },
  {
    slug: "ignite-fall-pitch-sprint",
    title: "IGNITE Fall Pitch Sprint & Live Roast",
    kicker: "B-PLAN LEAGUE · CASH PRIZES",
    category: "Competition",
    status: "Upcoming",
    date: "Sep 28, 2026",
    time: "2:00 PM to 6:00 PM IST",
    venue: "Auditorium A, Polaris Campus",
    xpReward: 120,
    capacity: "120 Attendees",
    spotsLeft: 24,
    shortDesc: "8 selected campus teams face a gauntlet of 4 angel operators. 5 minutes pitch, 7 minutes brutal roast.",
    fullDesc: "No academic slide presentations. The judges will inspect your GitHub repos, customer landing page analytics, and conversion funnels. Winners receive direct cash grants.",
    speaker: {
      name: "Priya Sundaram",
      role: "Principal",
      company: "ORR Seed Ventures",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "2:00 PM", activity: "Judge introduction & scoring rubric" },
      { time: "2:30 PM", activity: "Cohort 1 pitches (Fintech & Infra)" },
      { time: "4:00 PM", activity: "Chai & Operator mixer" },
      { time: "4:45 PM", activity: "Cohort 2 pitches (AI tools & Campus ops)" },
      { time: "5:45 PM", activity: "Cheque awards & FORGE pre qualification" },
    ],
    prerequisites: ["Open to all students", "Register attendance for +120 XP"],
  },
  {
    slug: "founder-ama-classplus-lineage",
    title: "Zero to Series A: The Harsh Unit Economics of India",
    kicker: "FOUNDER AMA · REAL TALK",
    category: "Talk",
    status: "Upcoming",
    date: "Oct 06, 2026",
    time: "5:00 PM to 6:30 PM IST",
    venue: "Main Amphitheatre, PST Campus",
    xpReward: 50,
    capacity: "150 Seats",
    spotsLeft: 35,
    shortDesc: "A raw teardown of what CAC, churn, and distribution actually look like in Indian Tier 1 & 2 markets.",
    fullDesc: "Why most student consumer apps die before reaching 1,000 DAU, and how to build unshakeable distribution loops without a marketing budget.",
    speaker: {
      name: "Mukul Rustagi (Invited)",
      role: "Co-Founder",
      company: "Classplus & Polaris Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "5:00 PM", activity: "Opening context & market shifts in 2026" },
      { time: "5:30 PM", activity: "Audience cold Q&A (no pre screened questions)" },
      { time: "6:15 PM", activity: "E Cell PST announcement on FORGE grants" },
    ],
    prerequisites: ["Bring 1 genuine question about distribution or retention"],
  },
  {
    slug: "summit-26-unfinished",
    title: "E Summit 26: UNFINISHED",
    kicker: "ANNUAL FLAGSHIP FESTIVAL",
    category: "Summit",
    status: "Upcoming",
    date: "Oct 17 to 18, 2026",
    time: "9:00 AM to 8:00 PM IST (2 Days)",
    venue: "Polaris Campus & Tech Park Pavilion",
    xpReward: 250,
    capacity: "500 Attendees",
    spotsLeft: 95,
    shortDesc: "2 full days of founder war stories, tech conclaves, live investor pitches, and the campus demo alley.",
    fullDesc: "UNFINISHED is E Cell PST's flagship annual summit. Bringing together 25+ operators, 15+ angel investors, and hundreds of student builders from across Karnataka and beyond.",
    speaker: {
      name: "Saahi Dubey",
      role: "President",
      company: "E Cell PST",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "Day 1 (09:00 AM)", activity: "Conclave Keynotes: Builders, Youth, Capital" },
      { time: "Day 1 (03:00 PM)", activity: "Breakout teardowns & architecture roasts" },
      { time: "Day 2 (10:00 AM)", activity: "IGNITE Grand Finals Live Pitching" },
      { time: "Day 2 (04:00 PM)", activity: "Demo Alley showcase & award ceremony" },
    ],
    prerequisites: ["E Summit pass required", "Request invite pass via website"],
  },
  {
    slug: "hostel-hack-night-04",
    title: "Midnight Build Sprint: The 6 Hour Deploy",
    kicker: "MICRO HACKATHON · CODE ONLY",
    category: "Workshop",
    status: "Past",
    date: "Aug 29, 2026",
    time: "10:00 PM to 4:00 AM IST",
    venue: "Common Room, Block B Hostel",
    xpReward: 100,
    capacity: "40 Builders",
    spotsLeft: 0,
    shortDesc: "40 students locked into a 6 hour sprint. Ship a public URL or donate ₹500 to the pizza pool.",
    fullDesc: "The fourth edition of our legendary night owl hack. 14 teams completed working prototypes before sunrise. 3 teams secured entry into the FORGE evaluation pipeline.",
    speaker: {
      name: "Dev Mehta",
      role: "Tech Lead",
      company: "E Cell PST WebOps",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "10:00 PM", activity: "Problem statement lock" },
      { time: "01:00 AM", activity: "Midway build check & energy drinks" },
      { time: "04:00 AM", activity: "Final deploy validation & voting" },
    ],
    prerequisites: ["Git push proof required"],
  },
  {
    slug: "term-sheet-anatomy-workshop",
    title: "Deconstructing the Indian Seed Term Sheet",
    kicker: "FINANCE & LEGAL · PRACTICAL",
    category: "Talk",
    status: "Past",
    date: "Aug 14, 2026",
    time: "4:00 PM to 6:00 PM IST",
    venue: "Seminar Hall 2, Polaris Campus",
    xpReward: 60,
    capacity: "80 Seats",
    spotsLeft: 0,
    shortDesc: "Liquidation preference, anti-dilution clauses, and board seats explained in plain human language.",
    fullDesc: "Why high valuations kill early startups, how ESOP pools actually dilute founders, and what clauses you should never sign as a first time college founder.",
    speaker: {
      name: "Karan Johar",
      role: "Venture Partner & Legal Counsel",
      company: "Bangalore Angel Syndicate",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "4:00 PM", activity: "The standard SAFE vs. CCPS debrief" },
      { time: "4:45 PM", activity: "Red lining a sample predatory term sheet" },
      { time: "5:30 PM", activity: "Founder Q&A on equity splits" },
    ],
    prerequisites: ["None"],
  },
  {
    slug: "cross-campus-founder-mixer",
    title: "Bengaluru Tech Corridor Student Mixer",
    kicker: "NETWORKING · NO FORMAL SUITS",
    category: "Mixer",
    status: "Past",
    date: "Jul 22, 2026",
    time: "6:00 PM to 9:00 PM IST",
    venue: "Rooftop Cafeteria, DivyaSree Tech Park",
    xpReward: 40,
    capacity: "100 Founders",
    spotsLeft: 0,
    shortDesc: "Connecting engineers from PST with design and business students across Bengaluru tech institutes.",
    fullDesc: "A high bandwidth mixer where 100+ students pitched their current bottlenecks over cold brew and snacks. Resulted in 4 active co founder teams.",
    speaker: {
      name: "Tanvi Rao",
      role: "Head of Outreach",
      company: "E Cell PST",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "6:00 PM", activity: "Icebreaker: 60 second unhinged ideas" },
      { time: "7:00 PM", activity: "Skill circle matchmaking" },
      { time: "8:15 PM", activity: "Open networking" },
    ],
    prerequisites: ["Must have built at least one toy project"],
  },
  {
    slug: "dpiit-startup-india-fasttrack",
    title: "DPIIT Recognition & Tax Exemptions 101",
    kicker: "GOV & POLICY · COMPLIANCE",
    category: "Workshop",
    status: "Past",
    date: "Jun 11, 2026",
    time: "3:00 PM to 5:00 PM IST",
    venue: "Lab 1A, PST Campus",
    xpReward: 50,
    capacity: "50 Seats",
    spotsLeft: 0,
    shortDesc: "A step by step walkthrough on registering on Startup India, DPIIT recognition, and Section 80-IAC.",
    fullDesc: "Practical guidance on incorporating a private limited entity while still a student, opening an escrow bank account, and claiming the 3 year tax holiday.",
    speaker: {
      name: "Siddharth Verma",
      role: "Chartered Accountant & Startup Advisor",
      company: "FinScale Advisors",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    },
    agenda: [
      { time: "3:00 PM", activity: "Sole proprietorship vs. LLP vs. Pvt Ltd" },
      { time: "3:45 PM", activity: "DPIIT portal live walkthrough" },
      { time: "4:30 PM", activity: "Q&A and document checklist" },
    ],
    prerequisites: ["None"],
  },
];
