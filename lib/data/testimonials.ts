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
    id: "dean-avinash-ramakant",
    quote:
      "In the fast-evolving landscape of modern engineering and venture building, E-Cell PST acts as the catalyst that transforms raw student curiosity into high-impact startups. We have moved far beyond traditional classroom theory—our students build with real code, deploy to real markets, and iterate under relentless peer feedback. The institutional momentum built here is setting a benchmark for what undergraduate entrepreneurship should look like in India.",
    author: "Prof. Avinash Ramakant",
    role: "Dean, Polaris School of Technology",
    avatar: "/testimonials/avinash-avatar.png",
    tag: "Dean's Desk",
  },
  {
    id: "founder-mukul-rastogi",
    quote:
      "Polaris was conceived with a clear conviction: tech founders are forged by building in the arena, not sitting passively in lecture halls. E-Cell PST is the engine driving that vision forward. Watching our first and second-year students pitch to top venture capitalists, secure pilot customers, and build scalable systems validates everything we stand for. The E-Cell is breeding the next generation of tech giants.",
    author: "Mukul Rastogi",
    role: "Founder, Polaris School of Technology",
    avatar: "/testimonials/mukul-avatar.png",
    tag: "Founder's Note",
  },
  {
    id: "success-rohan-saneja",
    quote:
      "My mission at Polaris is to ensure every student finds their highest trajectory, and E-Cell is where that ambition turns into tangible reality. The collaborative culture here is unmatched—seniors mentoring juniors at 2 AM, cross-disciplinary teams shipping hackathon MVPs in 48 hours, and an unconditional support network. E-Cell doesn't just produce founders; it builds resilient leaders who know how to win.",
    author: "Rohan Saneja",
    role: "Student Success Manager, Polaris School of Technology",
    avatar: "/testimonials/rohan-avatar.png",
    tag: "Student Success",
  },
];

