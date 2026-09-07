export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  tag: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "faculty-advisor",
    quote: "Most Indian universities run entrepreneurship cells as ceremonial event management clubs. At Polaris, E Cell is an engineering incubator. If students don't have code in production or customers using their tool, we don't issue participation certificates.",
    author: "Dr. Arvind Narayanan",
    role: "Faculty Advisor, E Cell PST",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    tag: "Faculty Desk",
  },
  {
    id: "alumni-founder",
    quote: "We brought an unstable Python script into Founder Hours on a rainy Wednesday. Three weeks later, an operator in the network tore down our query latency and connected us to our first 4 B2B clients. NexusEval wouldn't exist without FORGE.",
    author: "Rohit Krishnan",
    role: "Founder, NexusEval (Raised Pre Seed)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    tag: "Campus Founder",
  },
  {
    id: "first-year-builder",
    quote: "I walked into Polaris with zero startup background and imposter syndrome. I filled out an unhinged 3 step idea form on this website at 1 AM. Within two days, I had a co founder from systems and an office hour slot. DormCart did 1,800 orders this month.",
    author: "Shreya Shenoy",
    role: "Co Founder, DormCart (1st Year)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
    tag: "1st Year Builder",
  },
  {
    id: "ecosystem-mentor",
    quote: "I review pitch decks across all premier colleges in Karnataka. PST students have an unfair edge because they live inside a tech park and are taught to ship working software rather than polished 40 page MBA projections.",
    author: "Priya Sundaram",
    role: "Principal, ORR Seed Ventures",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    tag: "Venture Partner",
  },
];
