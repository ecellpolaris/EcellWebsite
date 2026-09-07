export interface FounderResource {
  slug: string;
  title: string;
  category: "How to Start" | "How to Pitch" | "How to Incorporate" | "Co-Founders" | "Fundraising & Capital" | "Product Architecture";
  readTime: string;
  oneLiner: string;
  content: string[];
  keyTakeaways: string[];
  downloadableAsset?: {
    name: string;
    format: string;
    fileSize: string;
  };
  author: string;
  publishedDate: string;
}

export const RESOURCES: FounderResource[] = [
  {
    slug: "hostel-room-to-first-wedge",
    title: "The Wedge: How to Choose a Problem You Can Ship in 30 Days",
    category: "How to Start",
    readTime: "5 min read",
    oneLiner: "Stop trying to build the next 'Uber for Everything'. Start with a sharp, ugly, acute pain point.",
    author: "Saahi Dubey, President",
    publishedDate: "August 2026",
    keyTakeaways: [
      "A wedge is a hyper-specific utility that solves one painful micro-problem with zero setup friction.",
      "If you cannot identify the exact 10 people whose day gets ruined without this fix, your problem is too vague.",
      "Target high frequency over high market size in the first 4 weeks.",
    ],
    content: [
      "Most college founders fail before writing a single line of code because they pick broad, grandiose abstractions. They want to 'revolutionize higher education', 'disrupt Indian agriculture', or 're-architect global supply chains'. In reality, when you are a 19-year-old in a Bengaluru dorm room with four hours between classes, you have zero distribution leverage for enterprise disruption.",
      "What you do have is proximity to acute, localized friction. You know the exact moments when your peers waste money, get stranded, lose sleep, or suffer through broken software. The secret to your first venture is not a 50-page business model canvas; it is a wedge.",
      "A wedge is a product that does exactly one thing so fast and so well that customers tolerate its rough edges. Look at early Zenefits (free HR software to sell health insurance), early DoorDash (a PDF menu website for Palo Alto restaurants), or early Flipkart (selling books online because ISBN numbers made cataloging deterministic).",
      "To test whether your idea has a viable wedge, run this three question diagnostic:",
      "1. Frequency: Does the user experience this pain multiple times a week, or once a semester? High frequency problems allow you to iterate user feedback ten times faster.",
      "2. Alternative: What is their current hack? If they aren't already duct-taping a Google Sheet, a WhatsApp group, or an ugly Python script to solve it, the pain is merely a minor annoyance, not a hair on fire problem.",
      "3. 30 Day Ship: Can two engineers build a usable v1 that solves the core loop in four weekends? If your architecture requires three ML pipelines, two mobile apps, and enterprise SSO before the first user gets value, prune your scope until it hurts.",
      "At E Cell PST, every team entering FORGE begins with this audit. Prune the fluff. Find your wedge. Ship before the month ends."
    ],
    downloadableAsset: {
      name: "PST_30_Day_Wedge_Audit_Framework.pdf",
      format: "PDF Document",
      fileSize: "240 KB",
    },
  },
  {
    slug: "the-5-minute-investor-pitch-that-survives",
    title: "How to Pitch: Surviving 5 Minutes in the Hot Seat",
    category: "How to Pitch",
    readTime: "6 min read",
    oneLiner: "Kill the corporate jargon. Operators don't care about TAM; they care about unfair velocity and user obsession.",
    author: "Tanvi Rao, Head of Incubation",
    publishedDate: "July 2026",
    keyTakeaways: [
      "Slide 1 must establish the acute human problem in under 20 seconds.",
      "Demo beats wireframes every single time; show real latency and clicks.",
      "Never fake defensibility; honesty about your current vulnerability builds credibility.",
    ],
    content: [
      "If you stand up at an IGNITE pitch sprint and start reading bullet points about 'a burgeoning market opportunity driven by macroeconomic tailwinds', the judges have already opened Twitter on their phones. Real operators and angel investors hear hundreds of pitches a month. Their brains are finely tuned pattern matching machines that instantly discard memorized corporate scripts.",
      "Your objective in a five-minute pitch is not to explain every single database table or future revenue stream. Your only goal is to make the room lean forward and believe two things: first, that this problem is urgent; and second, that your team will run through brick walls to solve it faster than anyone else.",
      "Here is the strict 6 slide structure we mandate at E Cell PST:",
      "Slide 1 · The Scar (0:00 to 0:45): Who is in pain, how much money or time are they hemorrhaging right now, and why has existing software left them stranded?",
      "Slide 2 · The Weapon (0:45 to 1:45): No mockups. Show the screen recording or live product. What happens in the first 10 seconds when a user touches your tool?",
      "Slide 3 · The Proof (1:45 to 2:45): Show real metrics. If you have 30 daily users who screamed when the server went down yesterday, tell that story. Thirty obsessive users matter more than 3,000 passive email signups.",
      "Slide 4 · Unit Economics & Distribution (2:45 to 3:30): How do you acquire the next 500 customers without burning capital on Meta ads? What is your organic loop or campus distribution channel?",
      "Slide 5 · The Core Team (3:30 to 4:15): Why you? Mention what you have personally shipped or broken. What gives you technical unfair advantage?",
      "Slide 6 · The Ask & Milestones (4:15 to 5:00): What specific milestone does this capital or mentorship unlock over the next 90 days?",
      "Practice your timing until you can deliver this in four minutes flat, leaving a full minute of buffer. If an investor asks a technical question and you don't know the answer, say: 'We haven't tested that edge case yet; we will run an experiment this week and email you the data.' Never guess or pretend."
    ],
    downloadableAsset: {
      name: "IGNITE_Seed_Pitch_Deck_Template.pdf",
      format: "Keynote / PDF",
      fileSize: "410 KB",
    },
  },
  {
    slug: "incorporating-pvt-ltd-in-india-undergrad-guide",
    title: "How to Incorporate in India as a College Founder",
    category: "How to Incorporate",
    readTime: "7 min read",
    oneLiner: "The unvarnished legal checklist: SPICe+, DIN, PAN, GST, DPIIT recognition, and zero-bullshit compliance.",
    author: "Zoya Khan, Regulatory Counsel",
    publishedDate: "September 2026",
    keyTakeaways: [
      "Do NOT incorporate before you have customer proof or need to hold IP/capital.",
      "A Private Limited (Pvt Ltd) company is the only viable structure if you plan to raise institutional angel/VC funding.",
      "Lock in founder vesting agreements on day zero before issuing shares.",
    ],
    content: [
      "Every semester at Polaris, we see students spend ₹15,000 incorporating a Private Limited company before they even have a single user. Two months later, the idea pivots, and they are left with annual MCA filings, auditor fees, and compliance headaches. Incorporation is a legal shell; it does not validate your venture.",
      "Only incorporate when you hit one of three concrete triggers: 1) You are signing a commercial pilot agreement that requires formal invoices; 2) You are receiving outside equity capital; or 3) You are signing software contracts requiring IP assignment.",
      "When you do incorporate, follow this step-by-step pathway through the Ministry of Corporate Affairs (MCA):",
      "Step 1: Director Identification Numbers (DIN) & Digital Signature Certificates (DSC) for all founding directors. Takes 48 hours.",
      "Step 2: Name Reservation via RUN (Reserve Unique Name) or integrated SPICe+ Part A. Ensure your brand name does not infringe existing trademarks under Class 9, 35, or 42.",
      "Step 3: SPICe+ Part B Filing for simultaneous issuance of Certificate of Incorporation (COI), PAN, TAN, EPFO, ESIC, and Profession Tax registration.",
      "Step 4: Bank Account Opening & Capital Contribution. Directors must deposit the agreed initial paid-up capital into the company account within 180 days and file Form INC-20A (Commencement of Business).",
      "Step 5: DPIIT Startup India Recognition. This unlocks eligibility for Section 80-IAC tax exemptions and fast-tracked patent examinations.",
      "Most crucially, never issue equity without a signed Shareholders Agreement (SHA) featuring a standard 4-year reverse vesting schedule with a 1-year cliff. If your co-founder quits after four months to study for GRE exams, unvested shares must return to the company pool. Protect the company first."
    ],
    downloadableAsset: {
      name: "PST_Undergrad_Incorporation_Checklist.pdf",
      format: "PDF Document",
      fileSize: "185 KB",
    },
  },
  {
    slug: "how-to-find-a-technical-cofounder",
    title: "How to Find a Co-Founder: Beyond Awkward LinkedIn DMs",
    category: "Co-Founders",
    readTime: "5 min read",
    oneLiner: "How to evaluate technical chops, emotional resilience under pressure, and complementary skill stacks.",
    author: "Dev Mehta, Head of WebOps",
    publishedDate: "August 2026",
    keyTakeaways: [
      "Never pick a co-founder solely on friendship; test how they react when production crashes at 2 AM.",
      "Run a 2-week 'hack project trial' before legally locking equity agreements.",
      "Complementary skills matter more than overlapping enthusiasm.",
    ],
    content: [
      "The number one cause of early startup death on college campuses is not lack of money or technical difficulty; it is co-founder implosion. Two friends start with immense excitement, hit their first major product disagreement or exam season stress, and stop responding to messages.",
      "Finding a co-founder is fundamentally a matchmaking process based on values, work ethic, and complementary operational roles. If both of you want to write backend Rust code and neither is willing to cold-call 50 customers, you do not have a company; you have a coding club.",
      "At Polaris, we recommend the 'Trial Hack sprint' before signing any equity agreements. Before discussing percentages, pick a toy project or hackathon challenge and build it together over 14 straight days. Watch for these signals:",
      "1. Speed of resolution: When you disagree on architecture or design, how quickly can you reach a decision and commit without resentment?",
      "2. Reliability under sleep deprivation: When the deployment fails at midnight before a deadline, do they dig into logs or disappear from chat?",
      "3. Directness: Can they tell you your code is messy or your copy is ineffective without sugarcoating, and can you take that critique constructively?",
      "If you need a technical partner, bring a working proof of customer demand. An engineer is ten times more likely to join you if you have 150 waitlist signups or a recorded video of a customer begging for the solution."
    ],
    downloadableAsset: {
      name: "Founder_Compatibility_50_Questions.pdf",
      format: "PDF Document",
      fileSize: "190 KB",
    },
  },
  {
    slug: "why-you-should-not-raise-too-early",
    title: "Why You Should Not Raise Too Early: The Valuation Trap",
    category: "Fundraising & Capital",
    readTime: "6 min read",
    oneLiner: "Taking venture capital before Product Market Fit puts you on an irreversible treadmill of expectations.",
    author: "Priya Sundaram, Investor in Residence",
    publishedDate: "June 2026",
    keyTakeaways: [
      "Venture capital is rocket fuel; pouring it into an engine that doesn't run simply causes an explosion.",
      "High initial valuations force you to raise even higher future rounds at punishing growth multiples.",
      "Bootstrap or use non dilutive campus grants to find product truth first.",
    ],
    content: [
      "In the college startup ecosystem, there is an unhealthy obsession with raising money as a status symbol. Students put 'Founder · Raised Pre Seed' on their LinkedIn profiles and celebrate term sheets as if the finish line has been crossed. In reality, raising venture money is the moment the debt is incurred.",
      "When you take institutional capital, you are signing an implicit contract to build a venture scale company returning 10x to 100x the investor's fund. That means if your market is only ₹50 Cr ($6M), venture capital will destroy your business because you will be forced to spend recklessly on unprofitable growth to justify your valuation.",
      "The biggest danger of raising too early is the 'Valuation Trap'. If you raise at a ₹25 Cr valuation with zero revenue, your next round needs to be at ₹80 Cr+. If you haven't figured out PMF, you cannot deliver the revenue growth required to justify that price, leading to a catastrophic down round or liquidation.",
      "Instead of rushing to pitch VCs, use the resources right around you: campus hackathon prize pools, E Cell non dilutive grants, student cloud credits, and free dorm room Wi-Fi. Build the product until users are literally demanding more bandwidth and features. When you have genuine customer pull, investors will compete for your allocation on your terms."
    ],
    downloadableAsset: {
      name: "Dilution_And_Cap_Table_Simulator.pdf",
      format: "Spreadsheet / PDF",
      fileSize: "320 KB",
    },
  },
  {
    slug: "zero-to-one-systems-architecture-for-mvp",
    title: "Production Architecture for Students: Ship Without the Cloud Bill",
    category: "Product Architecture",
    readTime: "5 min read",
    oneLiner: "Why you don't need Kubernetes, microservices, or expensive vector databases for your first 1,000 users.",
    author: "Dev Mehta, Head of WebOps",
    publishedDate: "September 2026",
    keyTakeaways: [
      "Start with a boring monolith: Next.js or FastAPI + single Postgres instance.",
      "Use free edge tiers (Vercel, Supabase, Cloudflare Workers) before spending a single rupee.",
      "Premature optimization is the root of missed deadlines.",
    ],
    content: [
      "We regularly see student teams spend three weeks configuring Kubernetes clusters, Kafka topics, and five separate microservices for an application that has twelve active users. By the time their architecture is set up, their AWS trial credits have expired, and they haven't shipped a single user-facing feature.",
      "For your first 10,000 users, boring technology wins every time. A single managed PostgreSQL database on Supabase or Neon paired with a Next.js or Go application running on edge workers can easily handle hundreds of concurrent requests per second with sub-50ms latency.",
      "Here is the canonical zero-cost stack we recommend to every FORGE cohort team:",
      "Frontend & API: Next.js App Router deployed on Vercel or Cloudflare Pages (Free Tier).",
      "Database & Auth: Managed PostgreSQL on Supabase or Neon with row-level security enabled.",
      "Storage: Cloudflare R2 (zero egress fees, S3 compatible API).",
      "Caching: Upstash Serverless Redis for rate-limiting and session deduplication.",
      "Background Jobs: Inngest or Trigger.dev for asynchronous webhook and email processing.",
      "This entire stack costs ₹0 per month up to roughly 10,000 monthly active users. When you actually encounter bottlenecks, optimize your database queries and add appropriate compound indices before upgrading server tiers."
    ],
    downloadableAsset: {
      name: "PST_Zero_Cost_Production_Stack_Guide.pdf",
      format: "PDF Document",
      fileSize: "210 KB",
    },
  },
];
