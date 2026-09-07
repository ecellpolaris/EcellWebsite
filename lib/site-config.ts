export const site = {
  collegeName: "Polaris School of Technology",
  collegeShort: "PST",
  city: "Bengaluru",
  foundedYear: 2024,
  email: "ecell@polariscampus.com",
  instagram: "https://www.instagram.com/ecell.polaris/",
  instagramHandle: "@ecell.polaris",
  websiteCampus: "https://polariscampus.com",
  president: {
    name: "Saahi Dubey",
    role: "President, E Cell PST",
    blurb:
      "Builder who chose PST over IIT Bombay Aerospace, cracked GSoC in year one, now running the campus founder stack.",
  },
  facultyAdvisor: {
    name: "Avinash Ramakant",
    role: "Dean & Faculty Advisor, E Cell PST",
    officeHours: "Wednesdays & Fridays, 4:00 PM to 6:00 PM (E Cell Bay)",
  },
  address:
    "Polaris School of Technology, Bengaluru · tech park campus (Wipro / DivyaSree corridor).",
  brand: "E Cell PST",
  product: "SPARK",
  tagline: "Build companies. Not résumés.",
  taglineAlt: "From hostel rooms to term sheets.",
  summit: "E Summit 26",
  summitTheme: "UNFINISHED",
  pitchLeague: "IGNITE",
  preIncubation: "FORGE",
  ambassadors: "SPARK Ambassadors",
  arena: "The Arena",
  links: {
    whatsappCommunity: "https://chat.whatsapp.com/Hae2cpFYZDn6U9n8X331CZ?mode=gi_t",
    linkedin: "https://linkedin.com/company/ecell-pst",
    twitter: "https://x.com/ecell_pst",
    youtube: "https://youtube.com/@ecell_pst",
    github: "https://github.com/ecell-pst",
  },
  metrics: {
    builderSessionsPerYear: "18+",
    ideasInMotion: "12",
    mentorsInOrbit: "25+",
    studentsInLoop: "400+",
    activeStartupsInForge: "7",
    fellowshipPrizes: "₹3.5L",
  },
} as const;

export type SiteConfig = typeof site;
