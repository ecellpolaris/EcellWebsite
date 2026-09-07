export interface CampusStartup {
  slug: string;
  name: string;
  sector: string;
  stage: "Ideating" | "MVP Live" | "Incorporated" | "Funded";
  founders: {
    name: string;
    year: string;
    dept: string;
  }[];
  oneLiner: string;
  description: string;
  whatEcellDid: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  websiteUrl?: string;
  hiringRoles?: string[];
  featured?: boolean;
}

export const STARTUPS: CampusStartup[] = [
  {
    slug: "elitefolks",
    name: "EliteFolks",
    sector: "EdTech",
    stage: "Funded",
    featured: true,
    founders: [
      { name: "Krishiv Agarwal", year: "2029 Batch", dept: "Computer Science & Systems" },
      { name: "Siddhartha Singh", year: "2029 Batch", dept: "Computer Science & AI" },
    ],
    oneLiner: "AI powered platform for coding, interviews, and developer skill building.",
    description: "Empowering global software developers with AI driven interview simulations, intelligent code benchmarking, and interactive technical skill sprints.",
    whatEcellDid: "Incubated in early PST builder cohort, backed with high throughput cloud infrastructure credits, and supported in global go to market.",
    metrics: [
      { label: "Global Reach", value: "50k+ users" },
      { label: "US Monetization", value: "Paid US Users" },
      { label: "Focus", value: "Developer AI" },
    ],
    tags: ["EdTech", "AI"],
    websiteUrl: "https://elitefolks.com",
    hiringRoles: ["Founding AI Engineer", "Full Stack Developer"],
  },
  {
    slug: "sharesaathi",
    name: "Sharesaathi",
    sector: "FinTech",
    stage: "Funded",
    featured: true,
    founders: [
      { name: "Saahi Dubey", year: "Third Year", dept: "Computer Science & Systems" },
    ],
    oneLiner: "India's best AI powered platform to invest in private equity.",
    description: "Democratizing private equity access for Indian retail and high net worth investors through intelligent discovery, compliance automation, and secondary liquidity.",
    whatEcellDid: "Architected through FORGE sprint, connected with seasoned fintech regulatory mentors, and tested on campus private equity syndicates.",
    metrics: [
      { label: "Monthly Traction", value: "₹1.5 Cr GMV" },
      { label: "Timeframe", value: "1 Month" },
      { label: "Segment", value: "Private Equity" },
    ],
    tags: ["FinTech", "AI"],
    websiteUrl: "https://sharesaathi.com",
    hiringRoles: ["Fintech Backend Engineer", "Growth Lead"],
  },
  {
    slug: "mergeship",
    name: "MergeShip",
    sector: "DevTools",
    stage: "MVP Live",
    featured: true,
    founders: [
      { name: "Coder's OG", year: "Second Year", dept: "Computer Science" },
    ],
    oneLiner: "Open source workflow OS for contributors and maintainers.",
    description: "Streamlining the open source collaboration lifecycle with AI issue triage, automated pull request reviews, and reward mechanics for maintainers.",
    whatEcellDid: "Fast tracked after a 24 hour build sprint, prepped for Z47 investor pitch rounds out of 230+ competing teams.",
    metrics: [
      { label: "Build Velocity", value: "Shipped in 24h" },
      { label: "Pitch Gauntlet", value: "Z47 (Top of 230+)" },
      { label: "Type", value: "Open Source" },
    ],
    tags: ["Open Source", "DevTools"],
    websiteUrl: "https://mergeship.vercel.app",
  },
  {
    slug: "parkcity",
    name: "ParkCity",
    sector: "Mobility",
    stage: "MVP Live",
    founders: [
      { name: "Manav Nayak", year: "Second Year", dept: "Product & Engineering" },
    ],
    oneLiner: "A premium parking discovery app that helps find, compare, navigate and list parking spaces.",
    description: "Eliminating urban parking friction in high congestion tech corridors like Bengaluru ORR through real-time spot reservations and peer listings.",
    whatEcellDid: "Beta testing on Bengaluru tech park parking zones; pilot deployment in the DivyaSree corridor.",
    metrics: [
      { label: "Stage", value: "Active Beta" },
      { label: "Corridor", value: "Bengaluru Tech Park" },
    ],
    tags: ["Mobility", "Consumer"],
  },
  {
    slug: "wandermesh",
    name: "WanderMesh",
    sector: "Travel",
    stage: "Ideating",
    founders: [
      { name: "Manav Nayak", year: "Second Year", dept: "Product & Engineering" },
    ],
    oneLiner: "An invite only travel community curating experiences for a curated group of people.",
    description: "Connecting verified experiential travelers, digital nomads, and young operators through invite only micro expeditions and curated retreats.",
    whatEcellDid: "Community launchpad support and peer distribution across SPARK Ambassador networks.",
    metrics: [
      { label: "Model", value: "Invite Only" },
      { label: "Network", value: "Curated Cohort" },
    ],
    tags: ["Travel", "Community"],
  },
  {
    slug: "ejected-q",
    name: "Ejected Q",
    sector: "Gaming",
    stage: "MVP Live",
    founders: [
      { name: "Garvit", year: "First Year", dept: "Computer Science" },
      { name: "Anurag", year: "First Year", dept: "Computer Science" },
    ],
    oneLiner: "Productivity first 3D runner designed for mindful student breaks.",
    description: "A browser based 3D runner game engineered to provide micro doses of mental reset during intensive coding and study sessions.",
    whatEcellDid: "Showcased at campus builder night, optimized 3D WebGL asset rendering, and deployed on student portal.",
    metrics: [
      { label: "Deployment", value: "Live 3D Web Game" },
      { label: "Engine", value: "Three.js / WebGL" },
    ],
    tags: ["Gaming", "Wellness"],
  },
  {
    slug: "nova-accounts",
    name: "Nova Accounts",
    sector: "FinTech",
    stage: "MVP Live",
    founders: [
      { name: "Shreyas", year: "First Year", dept: "Computer Science" },
      { name: "Utkarsh", year: "First Year", dept: "Computer Science" },
    ],
    oneLiner: "Digital ledger that auto categorizes spend for people and small businesses.",
    description: "Smart transaction ingestion and automated ledger balancing designed for Indian freelancers, students, and neighborhood SMBs.",
    whatEcellDid: "Accelerated from zero to working ledger MVP in 3 weeks through FORGE weekly milestones.",
    metrics: [
      { label: "Build Pace", value: "MVP in 3 Weeks" },
      { label: "Traction", value: "10 Day Beta" },
    ],
    tags: ["FinTech", "SaaS"],
  },
  {
    slug: "verity",
    name: "Verity",
    sector: "AI",
    stage: "MVP Live",
    founders: [
      { name: "Manav", year: "First Year", dept: "Computer Science" },
      { name: "Harshita", year: "First Year", dept: "Computer Science" },
    ],
    oneLiner: "AI news layer that strips emotional spin and returns fact first summaries.",
    description: "Using multi model consensus to parse bias, emotional triggers, and clickbait out of breaking headlines, delivering clean factual digests.",
    whatEcellDid: "Mentored on LLM cost optimization and subscription retention funnels in Founder Hours.",
    metrics: [
      { label: "Status", value: "Live Product" },
      { label: "Revenue Model", value: "Subscription First" },
    ],
    tags: ["AI", "Media"],
  },
  {
    slug: "nesthealth",
    name: "NestHealth",
    sector: "HealthTech",
    stage: "MVP Live",
    founders: [
      { name: "Rajdeep Singh", year: "Second Year", dept: "Computer Science" },
    ],
    oneLiner: "24/7 AI triage plus a fast path to a real doctor.",
    description: "Barton, the conversational medical assistant, provides symptom triage, medication checks, and instant teleconsult escalations.",
    whatEcellDid: "Barton AI triage pilot tested with campus wellness desk and faculty health advisory.",
    metrics: [
      { label: "AI Agent", value: "Barton Assistant" },
      { label: "Access", value: "Live & Free" },
    ],
    tags: ["HealthTech", "AI"],
  },
];
