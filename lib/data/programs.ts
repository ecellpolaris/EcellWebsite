export interface Program {
  slug: string;
  title: string;
  kicker: string;
  category: "Flagship" | "Pre-Incubation" | "Competition" | "Access" | "Community" | "Build";
  status: "LIVE" | "APPS OPEN" | "SEASON CLOSED" | "ROLLING";
  oneLiner: string;
  tagline: string;
  duration: string;
  whoItsFor: string;
  format: string;
  timeline: { step: string; title: string; desc: string }[];
  outcomes: string[];
  mentorsCount: string;
  prizesOrGrant?: string;
  faqs: { q: string; a: string }[];
  ctaText: string;
  ctaLink: string;
}

export const PROGRAMS: Program[] = [
  {
    slug: "e-summit",
    title: "E Summit 26",
    kicker: "FLAGSHIP GATHERING · THEME: UNFINISHED",
    category: "Flagship",
    status: "APPS OPEN",
    oneLiner: "48 hours of high stakes pitches, teardown workshops, and operator conclaves inside the tech park.",
    tagline: "The largest concentration of builders on the ORR tech corridor.",
    duration: "2 Days (Oct 17 to 18, 2026)",
    whoItsFor: "Any college student or early operator across India who refuses to treat venture building as a hobby.",
    format: "In-person at Polaris School of Technology Auditorium + Tech Park Innovation Bays.",
    timeline: [
      { step: "Phase 01", title: "Pass Applications & Conclave Selection", desc: "Select your track: Builders, Youth, Capital, or Campus." },
      { step: "Phase 02", title: "Day 01: The Conclaves & Keynotes", desc: "Direct uncensored keynotes and closed door teardowns with Series A/B founders." },
      { step: "Phase 03", title: "Day 02: IGNITE Finals & Demo Alley", desc: "Top 12 campus startups pitch to an angel syndicate for non dilutive cheques." },
    ],
    outcomes: [
      "Access to 15+ angel investors and active micro VCs",
      "Direct entry pipeline to FORGE Season 27",
      "₹3.5L non dilutive grant pool across competitions",
      "E Summit 26 Fellow credential",
    ],
    mentorsCount: "25+ Operators",
    prizesOrGrant: "₹3,50,000 Pool",
    faqs: [
      { q: "Is E Summit only for Polaris students?", a: "No. While hosted at PST Bengaluru, passes and competition tracks are open to student founders nationwide." },
      { q: "Do I need an incorporated startup to attend?", a: "Not at all. The Builders and Youth Conclaves are designed for students who haven't even written their first line of code." },
      { q: "What does the 'UNFINISHED' theme mean?", a: "It's an homage to raw work. We don't celebrate polished corporate PR; we celebrate products that are halfway built, messy, and in the wild." },
    ],
    ctaText: "Request Summit Pass",
    ctaLink: "/summit",
  },
  {
    slug: "forge",
    title: "FORGE Pre Incubation",
    kicker: "8 WEEK SPRINT · DORM TO FIRST REVENUE",
    category: "Pre-Incubation",
    status: "APPS OPEN",
    oneLiner: "A ruthless 8 week cohort that turns hostel prototypes into user traction, architecture reviews, and pitch decks.",
    tagline: "We don't give you attendance. We give you weekly founder audits.",
    duration: "8 Weeks (Cohort 03: Nov 2026)",
    whoItsFor: "Teams of 1 to 4 PST students with a functional MVP or deep engineering prototype ready for user testing.",
    format: "Hybrid: Weekly physical sprint reviews on Saturday mornings at the E Cell Bay + 24/7 Slack channel.",
    timeline: [
      { step: "Week 01-02", title: "The Wedge & User Anatomy", desc: "Deconstruct your target persona. Interview 25 prospective users or ship a landing page test." },
      { step: "Week 03-05", title: "Architecture & Ship Velocity", desc: "Weekly code audits with senior Bengaluru engineers. Cloud credits unlocked." },
      { step: "Week 06-07", title: "Traction & Unit Economics", desc: "First paying customer or active daily engagement metric locked." },
      { step: "Week 08", title: "PST Demo Day", desc: "Closed door pitching to 8 institutional early stage seed funds." },
    ],
    outcomes: [
      "Up to $25k in AWS/GCP and developer tool credits",
      "Assigned operator mentor meeting weekly",
      "Zero equity campus incubation desk and 24/7 tech bay access",
      "Direct pipeline to Bengaluru angel networks",
    ],
    mentorsCount: "12 Vetted Operators",
    prizesOrGrant: "Cloud credits + Coworking access",
    faqs: [
      { q: "Does E Cell PST take equity?", a: "Never. We are a student run institution body. 0% equity, 100% builder allegiance." },
      { q: "Can solo founders apply?", a: "Yes, but we strongly encourage finding a co founder during week 1 via the Idea Lab matching board." },
    ],
    ctaText: "Apply to FORGE Cohort 03",
    ctaLink: "/idea",
  },
  {
    slug: "ignite",
    title: "IGNITE Pitch League",
    kicker: "COMPETITION · NO FLUFF B-PLAN ROAST",
    category: "Competition",
    status: "LIVE",
    oneLiner: "Quarterly pitch competition where ideas get roasted by operators and winners take immediate cash cheques.",
    tagline: "Survive 5 minutes of investor grilling. Win cash with no strings.",
    duration: "3 Rounds across 3 Weeks",
    whoItsFor: "Undergrad teams across Karnataka and premier Indian engineering institutions.",
    format: "Round 1 Virtual teardown → Round 2 In person demo → Grand Finals at E Summit.",
    timeline: [
      { step: "Stage 1", title: "3 Minute Video Deck Teardown", desc: "Async video screen. No 40-page PDFs allowed. Show the problem and the screen recording." },
      { step: "Stage 2", title: "Closed Room Roast", desc: "10 minute brutal Q&A on customer acquisition cost, tech stack, and moat." },
      { step: "Stage 3", title: "Main Stage Grand Finals", desc: "Live in front of 400 peers and 6 venture partners." },
    ],
    outcomes: [
      "₹1,50,000 first prize grant",
      "Spot in FORGE Pre Incubation fast track",
      "Coverage in Bengaluru tech student publications",
    ],
    mentorsCount: "8 Pitch Judges",
    prizesOrGrant: "₹2,50,000 Total Prizes",
    faqs: [
      { q: "What stage should my idea be?", a: "Working code or clickable prototype preferred. Wireframes accepted if unit economics are exceptional." },
    ],
    ctaText: "Register for IGNITE",
    ctaLink: "/idea",
  },
  {
    slug: "founder-hours",
    title: "Founder Hours",
    kicker: "DIRECT ACCESS · 1 ON 1 OFFICE HOURS",
    category: "Access",
    status: "ROLLING",
    oneLiner: "Weekly 25 minute closed door slots with operators who have raised, scaled, or sold venture backed startups.",
    tagline: "Uncensored feedback from founders who actually built it.",
    duration: "25 minutes per session (Every Wednesday & Friday)",
    whoItsFor: "PST students with a specific bottleneck: GTM, fundraising, systems architecture, or hiring.",
    format: "In-person at E Cell Bay (Room 204) or private Google Meet.",
    timeline: [
      { step: "Step 01", title: "Slot Request & Context Submission", desc: "Submit your problem, metric dashboard, and current wall." },
      { step: "Step 02", title: "Mentor Match", desc: "Matched based on sector (fintech, developer tooling, AI infra, D2C)." },
      { step: "Step 03", title: "The 25 Minute Drill", desc: "5 mins context, 15 mins tactical diagnosis, 5 mins action items." },
    ],
    outcomes: [
      "Actionable 7 day tactical roadmap",
      "Direct contact with ecosystem operators",
      "+40 Arena XP on completion",
    ],
    mentorsCount: "18 Active Mentors",
    faqs: [
      { q: "How many times can I book?", a: "Once every 3 weeks per project to ensure fair rotation across campus." },
    ],
    ctaText: "Browse Mentor Roster",
    ctaLink: "/mentors",
  },
  {
    slug: "spark-ambassadors",
    title: "SPARK Ambassadors",
    kicker: "CAMPUS NETWORK · OUTREACH & REPS",
    category: "Community",
    status: "APPS OPEN",
    oneLiner: "Represent E Cell PST at your campus or hostel block. Run satellite hackathons, distribute passes, and build your rep.",
    tagline: "Be the startup node in your campus network.",
    duration: "6 Months (Academic Semester)",
    whoItsFor: "Passionate community builders, college leads, and network orchestrators.",
    format: "Distributed across colleges in Bengaluru and national tech institutes.",
    timeline: [
      { step: "Month 1", title: "Foundations & Booting Up", desc: "Onboarding call, playbook walkthrough, and ambassador kit." },
      { step: "Month 2-4", title: "Campus Activations & Hack Leagues", desc: "Host satellite ideation sprints and pitch screening nodes." },
      { step: "Month 5-6", title: "E Summit Delegation", desc: "Lead your college delegation to Bengaluru for the flagship festival." },
    ],
    outcomes: [
      "Official Letter of Recommendation from President Saahi Dubey & Faculty Desk",
      "VIP all access delegate pass to E Summit 26",
      "Direct referral into Polaris partner startup hiring pipelines",
    ],
    mentorsCount: "Core Team Leads",
    prizesOrGrant: "Merch + LoRs + Summit Passes",
    faqs: [
      { q: "Can non-PST students apply?", a: "Yes! In fact, the SPARK Ambassador program is explicitly for external college ambassadors across India." },
    ],
    ctaText: "Apply as Ambassador",
    ctaLink: "/ambassadors",
  },
  {
    slug: "internships",
    title: "Startup Internship Board",
    kicker: "TALENT MATCH · ZERO UNPAID BUSYWORK",
    category: "Access",
    status: "LIVE",
    oneLiner: "Direct pipelines connecting PST software, design, and AI builders into seed stage startups in Bengaluru.",
    tagline: "Work with Series A founders, not enterprise ticket systems.",
    duration: "Rolling 2 to 6 month roles",
    whoItsFor: "PST engineers and designers looking for high velocity early startup experience.",
    format: "Curated board refreshed every Monday at 10 AM.",
    timeline: [
      { step: "Step 01", title: "Vetting & Skill Profile", desc: "Submit your GitHub, live projects, and primary weapon." },
      { step: "Step 02", title: "Fast Track Intro", desc: "Skip generic HR portals. Direct intros to CTOs and technical founders." },
    ],
    outcomes: [
      "Competitive stipends (₹25k to ₹60k/month)",
      "Real production code contributions",
      "Early employee equity opportunities",
    ],
    mentorsCount: "15 Hiring Companies",
    faqs: [
      { q: "Are unpaid internships allowed on the board?", a: "Strictly forbidden. Every role listed on our board pays a fair market stipend." },
    ],
    ctaText: "View Open Roles",
    ctaLink: "/startups",
  },
  {
    slug: "freshers-ignition",
    title: "Freshers' Ignition",
    kicker: "FIRST YEAR BOOTCAMP · ZERO PREREQUISITES",
    category: "Community",
    status: "SEASON CLOSED",
    oneLiner: "A high octane 3 weekend onboarding into startup mechanics, Git, deploying products, and finding co founders.",
    tagline: "Unlearn high school exam culture. Start shipping on day one.",
    duration: "3 Weekends (August)",
    whoItsFor: "Exclusively for 1st year incoming Polaris undergraduate students.",
    format: "Hands-on weekend hack rooms in the Polaris campus hub.",
    timeline: [
      { step: "Weekend 1", title: "From Problem to Git Repo", desc: "Finding non-trivial campus friction and structuring full stack repos." },
      { step: "Weekend 2", title: "Deploy or Don't Speak", desc: "Live Vercel/Supabase deploys before 6 PM Sunday." },
      { step: "Weekend 3", title: "Micro Pitch & Teammate Lock", desc: "Locking in co founders for the year ahead." },
    ],
    outcomes: [
      "First deployed public web project",
      "Automatic unlock of Explorer Rank (+150 XP) in The Arena",
    ],
    mentorsCount: "Senior Core Members",
    faqs: [
      { q: "Do I need coding experience?", a: "No. We pair technical and non-technical students to build balanced product squads." },
    ],
    ctaText: "Join Waiting List",
    ctaLink: "/join",
  },
  {
    slug: "women-who-build",
    title: "Women Who Build",
    kicker: "INCLUSIVE CIRCLE · SERIOUS TECH VENTURES",
    category: "Community",
    status: "ROLLING",
    oneLiner: "Founder circle dedicated to women building deep tech, AI, and venture scale companies from Indian campuses.",
    tagline: "No performative panels. High density technical mentorship and angel intros.",
    duration: "Bi weekly mixers & quarterly grants",
    whoItsFor: "Women founders, developers, and researchers at PST and partner colleges.",
    format: "Closed room technical roundtables + angel mentor pairing.",
    timeline: [
      { step: "Cycle 1", title: "Technical Teardown", desc: "Reviewing system architecture and scalability." },
      { step: "Cycle 2", title: "Founder in Residence AMA", desc: "Candid closed sessions with female Series B+ founders." },
    ],
    outcomes: [
      "Access to female angel investor networks",
      "Dedicated micro grants for server and cloud spend",
    ],
    mentorsCount: "8 Female Operators",
    faqs: [
      { q: "How do I participate?", a: "Join the bi weekly circle meetings or apply via the E Cell Bay." },
    ],
    ctaText: "Join the Circle",
    ctaLink: "/contact",
  },
  {
    slug: "dept-labs",
    title: "Cross Dept Venture Studios",
    kicker: "INTERDISCIPLINARY · TECH x DESIGN x OPS",
    category: "Build",
    status: "LIVE",
    oneLiner: "Colleague matchmaking studios connecting systems engineers with UI/UX designers and growth operators.",
    tagline: "Stop building AI tools with zero design. Bridge the campus divide.",
    duration: "Quarterly hack matches",
    whoItsFor: "PST engineers wanting design partners, and designers wanting technical co founders.",
    format: "Matchmaking dinners and 48 hour prototype sprint.",
    timeline: [
      { step: "Sprint 1", title: "Skill Matrix & Speed Matching", desc: "5 minute round robin pitches of complementary skillsets." },
      { step: "Sprint 2", title: "The 48 Hour Ship", desc: "Build a joint prototype together before midnight." },
    ],
    outcomes: [
      "Balanced 2 to 3 person founding teams",
      "Fast track entry into FORGE Pre Incubation",
    ],
    mentorsCount: "6 Design & Tech Leads",
    faqs: [
      { q: "What if I only have a design portfolio?", a: "That's exactly why this exists! Engineers need you more than they realize." },
    ],
    ctaText: "Enter Matching Studio",
    ctaLink: "/idea#cofounder-board",
  },
];
