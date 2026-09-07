export interface TeamMember {
  name: string;
  role: string;
  vertical: "Executive" | "Technology" | "Incubation & Programs" | "Design & Brand" | "Outreach & Capital" | "Operations & Finance";
  bio: string;
  buildingOrObsessed: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  featured?: boolean;
}

export const FACULTY_ADVISOR = {
  name: "Avinash Ramakant",
  role: "Dean & Faculty Advisor, E Cell PST",
  affiliation: "Dean, Polaris School of Technology",
  bio: "Overseeing student venture governance, incubator partnerships, and institutional research commercialization at Polaris. Dedicated to creating high-autonomy environments for student builders.",
  officeHours: "Wednesdays & Fridays, 4:00 PM to 6:00 PM (E Cell Bay, Room 204)",
  avatar: "/team/avinash.png",
};

export const PRESIDENT: TeamMember = {
  name: "Saahi Dubey",
  role: "President, E Cell PST",
  vertical: "Executive",
  featured: true,
  bio: "Builder who chose PST over IIT Bombay Aerospace, cracked GSoC in year one, founder of Sharesaathi (₹1.5 Cr GMV in 1 month), now running the campus founder stack.",
  buildingOrObsessed: "Building distributed compiler toolchains & obsessed with turning every hostel block into a shipping unit.",
  avatar: "/team/saahi.png",
  socials: {
    linkedin: "https://in.linkedin.com/in/saahi-dubey-5a1145373",
    github: "https://github.com/saahidubey",
  },
};

export const CORE_MEMBERS: TeamMember[] = [
  PRESIDENT,
  {
    name: "Krishiv Agarwal",
    role: "Head of Technology & Systems",
    vertical: "Technology",
    bio: "Co founder of EliteFolks (50k+ users visit, paid US users). Architecting AI powered developer workflows, skill building engines, and campus platforms.",
    buildingOrObsessed: "Building AI driven interview simulation pipelines and high throughput developer infrastructure.",
    avatar: "/team/krishiv.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/krishivag?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    name: "Sarthak Basu",
    role: "Head of Incubation (FORGE & IGNITE)",
    vertical: "Incubation & Programs",
    bio: "Spearheading the 8 week FORGE pre incubation cohort and quarterly pitch leagues. Ruthless about cohort milestone accountability and customer truth.",
    buildingOrObsessed: "Obsessed with cohort velocity, user retention loops, and helping teams survive first contact with real users.",
    avatar: "/team/sarthak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/sarthak-basu?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    name: "Sakshi Kasat",
    role: "Head of Outreach & Community Alliances",
    vertical: "Outreach & Capital",
    bio: "Connecting campus ventures with angel syndicates, venture partners along the ORR corridor, and premier student developer circles.",
    buildingOrObsessed: "Obsessed with ecosystem density, capital access for student founders, and cross campus community loops.",
    avatar: "/team/sakshi.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/sakshidkasat?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    name: "Priyanka Potlia",
    role: "Head of Brand & Product Design",
    vertical: "Design & Brand",
    bio: "Crafting the visual identity of E Cell PST, tactile Summit collateral, merchandise drops, and daylight design systems.",
    buildingOrObsessed: "Obsessed with Swiss editorial typography, tactile paper textures, and eliminating generic corporate templates.",
    avatar: "/team/priyanka.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/priyankapotlia?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    name: "Kulratan Thapar",
    role: "Head of Treasury & Corporate Relations",
    vertical: "Operations & Finance",
    bio: "Managing competition prize distributions, corporate sponsor pipelines, and non dilutive student server grants.",
    buildingOrObsessed: "Obsessed with financial hygiene, grant disbursements, and corporate partnership governance.",
    avatar: "/team/kulratan.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kulratan-thapar-366402364?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    name: "Manav Nayak",
    role: "Lead Product Engineer",
    vertical: "Technology",
    bio: "Founder of ParkCity (premium parking discovery) and WanderMesh (invite only travel community). Building mobility and community tech.",
    buildingOrObsessed: "Obsessed with hyperlocal mapping, consumer discovery UX, and offline community networks.",
    avatar: "/team/manav.png",
    socials: {},
  },
  {
    name: "Priyanshu Gupta",
    role: "Head of WebOps & Infrastructure",
    vertical: "Technology",
    bio: "Full stack engineer managing the digital infrastructure of E Cell, The Arena gamification engine, and automated judge portals.",
    buildingOrObsessed: "Obsessed with sub 100ms API latency, edge deployments, zero runtime CSS, and state persistence architecture.",
    avatar: "/team/priyanshu.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/priyanshu--gupta/",
    },
  },
];

export const ASSOCIATES: { name: string; role: string; vertical: string }[] = [
  { name: "Prateek Yadav", role: "WebOps Associate", vertical: "Technology" },
  { name: "Divya Balan", role: "Design Associate", vertical: "Design & Brand" },
  { name: "Siddharth Jain", role: "Programs Associate", vertical: "Incubation" },
  { name: "Nisha Varma", role: "Outreach Associate", vertical: "Outreach" },
  { name: "Karan Pillai", role: "Community Associate", vertical: "Operations" },
  { name: "Ishita Roy", role: "Editorial Associate", vertical: "Editorial" },
];
