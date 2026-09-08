export interface GalleryItem {
  id: string;
  title: string;
  category: "Pitch Day" | "Workshops" | "Team" | "Behind the scenes";
  date: string;
  venue: string;
  caption: string;
  imageUrl: string;
  aspect: "landscape" | "portrait" | "square";
  stamped?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "pitch-day-keynote-auditorium",
    title: "The Mainstage Silence",
    category: "Pitch Day",
    date: "Oct 2025",
    venue: "PST Main Auditorium",
    caption: "350 students listening to the reality of Indian early stage CAC teardowns.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
    aspect: "landscape",
    stamped: "PST BLR · 25",
  },
  {
    id: "whiteboard-architecture-session",
    title: "Postgres Sharding Debate at 2 AM",
    category: "Behind the scenes",
    date: "Aug 2026",
    venue: "E Cell Bay, Room 204",
    caption: "NexusEval and SynthForge founders debating relational integrity and edge caching.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80",
    aspect: "square",
    stamped: "SEASON 26",
  },
  {
    id: "pitch-roast-ignite",
    title: "The IGNITE Hotseat",
    category: "Workshops",
    date: "Sep 2025",
    venue: "Lab 3B Tech Park Hub",
    caption: "A 5 minute teardown where judges dissected actual Supabase queries live on projector.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
    aspect: "landscape",
  },
  {
    id: "team-photo-tech-park-stairs",
    title: "Core Team on the Tech Park Steps",
    category: "Team",
    date: "Jul 2026",
    venue: "DivyaSree Wipro Corridor",
    caption: "The Season 26 Core. No blazers, no boardroom poses. Just the operators running the stack.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    aspect: "landscape",
    stamped: "CORE 26",
  },
  {
    id: "hardware-soldering-bench",
    title: "VoltLoop Battery Telemetry Rig",
    category: "Behind the scenes",
    date: "Aug 2026",
    venue: "Polaris Hardware Prototyping Bay",
    caption: "Testing IoT vibration sensors under high thermal load before deployment on test scooters.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
    aspect: "portrait",
  },
  {
    id: "mentor-1on1-chai-break",
    title: "Founder Hours Teardown",
    category: "Workshops",
    date: "Jun 2026",
    venue: "PST Rooftop Lounge",
    caption: "Tanmay Sharma reviewing API gateway latency benchmarks with a 1st year founder.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    aspect: "landscape",
  },
  {
    id: "pitch-day-trophy-ceremony",
    title: "Cheques on Daylight",
    category: "Pitch Day",
    date: "Oct 2025",
    venue: "Open Amphitheatre",
    caption: "₹1,50,000 non dilutive cheque handed to the winner of the Inter College Pitch League.",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80",
    aspect: "landscape",
    stamped: "PITCH DAY",
  },
  {
    id: "midnight-hack-pizza-boxes",
    title: "T 00:42 Before Deploy",
    category: "Behind the scenes",
    date: "Aug 2026",
    venue: "Block B Common Room",
    caption: "Empty chai cups and code editors. The true incubator of student technology.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
    aspect: "square",
  },
];
