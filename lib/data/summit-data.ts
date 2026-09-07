export interface SummitConclave {
  id: string;
  title: string;
  badge: string;
  description: string;
  audience: string;
  keySessions: string[];
}

export const SUMMIT_CONCLAVES: SummitConclave[] = [
  {
    id: "builders",
    title: "Builders' Conclave",
    badge: "ENGINEERING & SHIP",
    description: "Deep technical teardowns on building resilient software, AI agents, edge infra, and hardware from zero to scale.",
    audience: "Developers, Systems Engineers, AI Researchers",
    keySessions: [
      "Sub 100ms Inference: Optimizing LLMs for Low Cost Production",
      "Building Offline First Telemetry on Microcontrollers",
      "Why Your Postgres DB is Slow: Live Index Teardowns",
    ],
  },
  {
    id: "youth",
    title: "Youth Conclave",
    badge: "FIRST TIME FOUNDERS",
    description: "Candid war stories from 20-something founders who navigated hostel pushback, Indian parent expectations, and early rejections.",
    audience: "Undergrads, First Time Founders, Freshers",
    keySessions: [
      "Dropping Out vs. Staying In: The Honest Calculus",
      "How to Ship a Revenue Generating Tool Before Graduation",
      "Finding Co Founders Without Cringe Networking",
    ],
  },
  {
    id: "capital",
    title: "Capital & Operator Conclave",
    badge: "ANGELS & VCS",
    description: "Closed door roundtables between early stage micro VCs, angel syndicates, and student founders pitching real metrics.",
    audience: "Seed Investors, Angel Networks, FORGE Cohort Teams",
    keySessions: [
      "The State of Indian Seed Financings in 2026",
      "iSAFE vs. CCPS: Cap Table Mistakes That Haunt You Later",
      "Live 5 Minute Elevator Roasts: Investor Feedback in Public",
    ],
  },
  {
    id: "campus",
    title: "Campus Ecosystem Summit",
    badge: "E CELL DIRECTORS",
    description: "Gathering leadership teams from premier E Cells across India to share incubation playbooks, sponsor models, and student policies.",
    audience: "E Cell Presidents, Faculty Advisors, TBI Directors",
    keySessions: [
      "Transforming Campus Clubs into Venture Incubators",
      "Securing Non Dilutive Corporate Grants for Student Labs",
      "Inter College Hack Leagues: The 2027 Roadmap",
    ],
  },
];

export interface SummitSpeaker {
  name: string;
  role: string;
  company: string;
  conclave: string;
  topic: string;
  avatar: string;
}

export const SUMMIT_SPEAKERS: SummitSpeaker[] = [
  {
    name: "Saahi Dubey",
    role: "President",
    company: "E Cell PST",
    conclave: "Youth & Builders",
    topic: "The Campus Founder Stack: Why 2024 to 2026 is the Era of the Solo Operator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Priya Sundaram",
    role: "Principal",
    company: "ORR Seed Ventures",
    conclave: "Capital",
    topic: "What I Look for in a 19 Year Old Founder's GitHub Commit History",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Tanmay Sharma",
    role: "VP Engineering",
    company: "HyperScale Cloud Labs",
    conclave: "Builders",
    topic: "Architecting for 10M DAU Without Burning Your Seed Round on Cloud Bills",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Mukul Rustagi",
    role: "Co Founder",
    company: "Classplus & Polaris Lineage",
    conclave: "Youth & Capital",
    topic: "Keynote: Zero to 100 · Surviving the First 1,000 Days of Building in India",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Rohit Krishnan",
    role: "Founder",
    company: "NexusEval",
    conclave: "Builders",
    topic: "Testing LLMs at Scale: The Hard Truth About Hallucination Metrics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Neha Kulkarni",
    role: "Co Founder",
    company: "D2C Pulse Collective",
    conclave: "Youth",
    topic: "Scaling from a Dorm Room Sample to ₹15 Cr ARR in 24 Months",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Karan Johar",
    role: "Venture Counsel",
    company: "Bangalore Angel Syndicate",
    conclave: "Capital",
    topic: "The 3 Red Flags in Every First Time Founder's Shareholders Agreement",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Zoya Khan",
    role: "Startup Attorney",
    company: "IndieLegal Counsel",
    conclave: "Capital",
    topic: "IP Protection for Student AI Engineers: Who Owns Your Code?",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Varun Hegde",
    role: "Co Founder",
    company: "VoltLoop",
    conclave: "Builders",
    topic: "Hardware in Bengaluru: Sourcing Sensors from SP Road to Shenzhen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Ananya Trivedi",
    role: "Chief Design Officer",
    company: "Studio Craft BLR",
    conclave: "Builders",
    topic: "Stop Shipping Boring SaaS: Design as an Unfair Conversion Moat",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Avinash Ramakanth",
    role: "Faculty Advisor",
    company: "Polaris School of Technology",
    conclave: "Campus",
    topic: "Bridging Academic Deep Tech Research into Commercial Spinouts",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=80",
  },
  {
    name: "Vivek Ranjan",
    role: "Growth Architect",
    company: "IndieHacker Lab",
    conclave: "Youth",
    topic: "Acquiring Your First 5,000 Users Without Spending a Single Rupee",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
  },
];

export interface SummitPass {
  id: string;
  name: string;
  price: string;
  tag: string;
  perks: string[];
  recommended?: boolean;
}

export const SUMMIT_PASSES: SummitPass[] = [
  {
    id: "student-pass",
    name: "Student Delegate Pass",
    price: "Free",
    tag: "CAMPUS VERIFIED",
    perks: [
      "Access to all 4 Conclaves across 2 days",
      "Auditorium seating for keynotes & panel roasts",
      "Access to Demo Alley & sponsor booths",
      "Digital Summit Certificate & +250 Arena XP",
    ],
  },
  {
    id: "builder-pass",
    name: "Builder & Hacker Pass",
    price: "₹499",
    tag: "MOST POPULAR",
    recommended: true,
    perks: [
      "Everything in Student Pass",
      "Entry into IGNITE Pitch Sprint competition",
      "Exclusive E Summit 26 swag bag & physical handbook",
      "Access to closed door technical teardown workshops",
      "Lunch & refreshments catered over both days",
    ],
  },
  {
    id: "founder-vip",
    name: "Founder & Investor VIP",
    price: "₹1,499",
    tag: "HIGH ACCESS",
    perks: [
      "All Builder Pass perks",
      "VIP green room access with keynote speakers",
      "Closed door angel syndicate networking dinner",
      "Priority consideration for FORGE Cohort 03 desk",
      "1 on 1 scheduled office hours with partner VCs",
    ],
  },
];
