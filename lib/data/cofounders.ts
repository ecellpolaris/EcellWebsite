export interface CoFounderPost {
  id: string;
  projectTitle: string;
  oneLiner: string;
  lookingFor: "Technical Co Founder (Backend / AI)" | "Lead Product Designer" | "Growth & Campus Ops" | "Hardware / IoT Engineer";
  postedBy: {
    handle: string;
    name: string;
    year: string;
    dept: string;
  };
  timePosted: string;
  stage: "Problem Framed" | "MVP in Progress" | "First 50 Users";
  tags: string[];
  contactEmail: string;
}

export const CO_FOUNDER_POSTS: CoFounderPost[] = [
  {
    id: "cf-1",
    projectTitle: "DocuQuery India",
    oneLiner: "OCR and local LLM extraction for non standard vernacular Indian tax receipts.",
    lookingFor: "Technical Co Founder (Backend / AI)",
    postedBy: {
      handle: "@ananya_s",
      name: "Ananya Sen",
      year: "2nd Year",
      dept: "Business & Tech",
    },
    timePosted: "Yesterday",
    stage: "MVP in Progress",
    tags: ["FastAPI", "Python", "Tesseract", "Tax"],
    contactEmail: "ananya.sen@polariscampus.com",
  },
  {
    id: "cf-2",
    projectTitle: "GridSync Mobility",
    oneLiner: "Smart dispatch optimization for multi campus student shuttle vans.",
    lookingFor: "Lead Product Designer",
    postedBy: {
      handle: "@kunal_m",
      name: "Kunal Bansal",
      year: "2nd Year",
      dept: "Computer Science",
    },
    timePosted: "2 days ago",
    stage: "First 50 Users",
    tags: ["Figma", "Design Systems", "Mobile UI", "Maps"],
    contactEmail: "kunal.bansal@polariscampus.com",
  },
  {
    id: "cf-3",
    projectTitle: "ZeroWaste Mess",
    oneLiner: "Predictive food prep analytics to slash kitchen wastage across student mess halls.",
    lookingFor: "Growth & Campus Ops",
    postedBy: {
      handle: "@rohan_v",
      name: "Rohan Varma",
      year: "1st Year",
      dept: "CSE · AI",
    },
    timePosted: "3 days ago",
    stage: "Problem Framed",
    tags: ["Operations", "Negotiation", "Analytics"],
    contactEmail: "rohan.varma@polariscampus.com",
  },
  {
    id: "cf-4",
    projectTitle: "HydraSensor IoT",
    oneLiner: "Ultra low power soil moisture telemetry for high density vertical hydroponic farms.",
    lookingFor: "Hardware / IoT Engineer",
    postedBy: {
      handle: "@aditya_k",
      name: "Aditya Kumar",
      year: "2nd Year",
      dept: "Electronics & Systems",
    },
    timePosted: "4 days ago",
    stage: "MVP in Progress",
    tags: ["ESP32", "LoRaWAN", "Circuit Design", "C++"],
    contactEmail: "aditya.kumar@polariscampus.com",
  },
  {
    id: "cf-5",
    projectTitle: "QuickPitch Audio",
    oneLiner: "AI pitch roast agent giving students real time pacing, filler word, and tone critiques.",
    lookingFor: "Technical Co Founder (Backend / AI)",
    postedBy: {
      handle: "@tanya_d",
      name: "Tanya Dua",
      year: "1st Year",
      dept: "Design & Product",
    },
    timePosted: "5 days ago",
    stage: "Problem Framed",
    tags: ["Web Audio API", "Whisper", "Next.js"],
    contactEmail: "tanya.dua@polariscampus.com",
  },
  {
    id: "cf-6",
    projectTitle: "CampusBazaar",
    oneLiner: "Verified peer to peer textbook, calculator, and hardware dev board exchange.",
    lookingFor: "Growth & Campus Ops",
    postedBy: {
      handle: "@rahul_j",
      name: "Rahul Joshi",
      year: "1st Year",
      dept: "Computer Science",
    },
    timePosted: "6 days ago",
    stage: "First 50 Users",
    tags: ["Community", "Growth", "Escrow"],
    contactEmail: "rahul.joshi@polariscampus.com",
  },
];
