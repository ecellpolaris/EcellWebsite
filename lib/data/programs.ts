export interface Program {
  slug: string;
  title: string;
  kicker: string;
  category: "Pitch Day" | "Fellowship" | "Global Fund" | "Community" | "Flagship" | "Pre-Incubation" | "Competition" | "Access" | "Build";
  status: "Upcoming" | "Already done" | "Ongoing" | "APPS OPEN" | "LIVE" | "SEASON CLOSED" | "ROLLING";
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
    slug: "polaris-demo-day",
    title: "Polaris Demo Day",
    kicker: "PITCH DAY · FUNDING & DIRECT INTERNSHIPS",
    category: "Pitch Day",
    status: "Upcoming",
    oneLiner: "A pitch day where a few selected students pitch their product to industry mentors, a chance to get funding and also land to direct paid internships.",
    tagline: "High-conviction student ventures meet angel capital and paid engineering roles.",
    duration: "Full-Day Flagship Pitch",
    whoItsFor: "Selected student founders and builders with live MVPs, prototypes, or traction.",
    format: "Live on-stage demo and pitch before industry mentors, VCs, and startup founders in Bengaluru.",
    timeline: [
      { step: "Phase 01", title: "Applications & Product Screening", desc: "Submit product demos, GitHub repositories, and user traction metrics for review." },
      { step: "Phase 02", title: "Pitch Clinics & Operator Dry Runs", desc: "1-on-1 pitch deck clinics and teardown sessions with seasoned tech founders." },
      { step: "Phase 03", title: "Live Demo Day & Investor Matchmaking", desc: "Pitch on stage, field operator questions, and close seed funding or paid internships." },
    ],
    outcomes: [
      "Direct seed and angel funding opportunities from active investors",
      "Fast-track offers for direct paid startup internships in Bengaluru",
      "Closed-door reviews with senior engineering and product operators",
      "Featured placement on the official PST venture portfolio",
    ],
    mentorsCount: "15+ Industry Mentors & Angels",
    prizesOrGrant: "Funding & Paid Roles",
    faqs: [
      { q: "Who can pitch at Polaris Demo Day?", a: "Shortlisted student founders from Polaris School of Technology with functional prototypes or live products." },
      { q: "What kind of internships are available?", a: "Direct paid internships at top seed and Series A startups across product, engineering, and AI." },
      { q: "How are pitches evaluated?", a: "Evaluation focuses on working software demonstration, technical depth, problem insight, and founder velocity." },
    ],
    ctaText: "Register Interest",
    ctaLink: "/contact",
  },
  {
    slug: "polaris-fellowship",
    title: "Polaris Fellowship program",
    kicker: "SELECTIVE 6-MONTH FELLOWSHIP · INDUSTRY IMMERSION",
    category: "Fellowship",
    status: "Already done",
    oneLiner: "Polaris Fellowship is a selective six-month program connecting exceptional student builders with leading startups, investors, and technology companies in Bengaluru. Fellows gain hands-on industry experience, mentorship, and exposure to real-world challenges.",
    tagline: "Connecting exceptional student builders with Bengaluru's leading tech ecosystem.",
    duration: "6 Months (Inaugural Cohort Completed)",
    whoItsFor: "Exceptional student engineers and founders seeking immersion with top tech companies.",
    format: "In-person startup residencies, weekly founder roundtables, and architecture teardowns.",
    timeline: [
      { step: "Month 1", title: "Ecosystem Matching & Residency", desc: "Fellows are matched with leading startups and assigned critical production initiatives." },
      { step: "Month 2-4", title: "Deep Production Immersion", desc: "Hands-on engineering sprints, weekly operator roundtables, and architectural reviews." },
      { step: "Month 5-6", title: "Capstone & Ecosystem Showcase", desc: "Present real-world impact and production milestones to senior industry leaders." },
    ],
    outcomes: [
      "Hands-on engineering experience at top venture-backed companies",
      "Direct 1-on-1 mentorship from senior technology executives and founders",
      "Lifelong network of high-caliber student engineering fellows",
      "Pre-placement offers and early backing for student ventures",
    ],
    mentorsCount: "30+ Industry Leaders & Founders",
    prizesOrGrant: "Cohort Completed",
    faqs: [
      { q: "What was the selection criteria for the fellowship?", a: "Exceptional technical proficiency, demonstrated past projects, algorithmic problem-solving, and builder conviction." },
      { q: "Will there be another cohort?", a: "Yes. The inaugural cohort has completed. Join our WhatsApp loop or contact the bay to be notified when Cohort 02 opens." },
    ],
    ctaText: "Join Waitlist",
    ctaLink: "/contact",
  },
  {
    slug: "polaris-global-fund",
    title: "Polaris 10 million $ global fund",
    kicker: "GLOBAL TECH PARTNER NETWORK · $10M+ RESOURCES",
    category: "Global Fund",
    status: "Ongoing",
    oneLiner: "Polaris Global Fund connects students with 50+ leading global tech companies through credits, mentorship, industry-led learning, and real-world access—building the next generation of engineers and innovators.",
    tagline: "Building the next generation of engineers with direct access to 50+ global tech giants.",
    duration: "Ongoing Multi-Year Initiative",
    whoItsFor: "All student engineers, founders, and research squads building production software.",
    format: "Direct infrastructure grants, API cloud credits, industry-led learning, and executive mentorship.",
    timeline: [
      { step: "Track 01", title: "Cloud Credits & Infrastructure Allocation", desc: "Access AWS, GCP, Azure, and AI API credits to deploy scalable production systems." },
      { step: "Track 02", title: "Industry-Led Learning & Architecture Reviews", desc: "Curated learning tracks, deep dives, and system architecture audits with tech leaders." },
      { step: "Track 03", title: "Global Access & Partner Deployments", desc: "Connect directly with 50+ leading tech companies for pilots, hiring, and collaboration." },
    ],
    outcomes: [
      "Access to $10M+ collective credits across leading cloud and AI providers",
      "Direct mentorship and guidance from 50+ global technology partners",
      "Industry-recognized certifications and real-world project deployments",
      "Fast-track recruitment pipelines with top tech companies worldwide",
    ],
    mentorsCount: "50+ Global Tech Partners",
    prizesOrGrant: "$10M+ Resources Pool",
    faqs: [
      { q: "How can student teams access the Global Fund credits?", a: "Registered Polaris students and campus venture teams can apply directly through E Cell." },
      { q: "What companies are part of the network?", a: "The network spans over 50 global technology leaders across cloud infrastructure, AI labs, and developer platforms." },
    ],
    ctaText: "Access Fund",
    ctaLink: "/contact",
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
];
