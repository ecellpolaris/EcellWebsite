# E-Cell PST (SPARK) — Official Campus Web Platform

The official builder operating system for **Polaris School of Technology (PST)**, Bengaluru.

Built from scratch with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Strictly implements the **"Daylight Foundry"** design system: warm paper canvas (`#F6F3EC`), deep ink typography (`Syne` + `Outfit`), and acid lime accents (`#B6F000`).

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in daylight mode.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design System ("Daylight Foundry")

Theme mandate: **The entire website is WHITE/PAPER first.** No dark homepage, no purple gradients, no generic SaaS templates.

### Color Tokens
- `--bg`: `#F6F3EC` (Warm paper field)
- `--bg-2`: `#FFFEFA` (Card surface and sticky navbar)
- `--bg-3`: `#EFEAE0` (Sunken bento cells, tabs)
- `--line`: `#E6E1D6` (Hairline borders)
- `--ink`: `#111114` (Deep ink black typography)
- `--muted`: `#6F6B64` (Editorial secondary text)
- `--accent`: `#B6F000` (Acid lime highlight & button fill)
- `--accent-ink`: `#10140A` (Text on lime buttons)
- `--accent-2`: `#FF4D1C` (Heat / live status badge)
- `--accent-3`: `#007C86` (Data-teal for Arena charts)

### Typography
- **Display**: `Syne` (Google Fonts, weights 700 & 800) for headlines, brand mark lockup, and posters.
- **Body**: `Outfit` (Google Fonts, weights 400, 500, 600) for editorial paragraphs and clean reading.
- **Micro**: `ui-monospace` for season tags, XP counters, timestamps, and ticket codes.

---

## 📝 Where to Edit Content & Data

All copy and campus constants are centralized in typed files:

1. **`lib/site-config.ts`**: Single source of truth for:
   - College name: `Polaris School of Technology`
   - Short: `PST`
   - City: `Bengaluru`
   - President: `Saahi Dubey`
   - Faculty Advisor: `Avinash Ramakant`
   - Campus bay address & office hours
   - Contact email: `ecell@polariscampus.com`
   - Social links & official Instagram (`@ecell.polaris`)

2. **`lib/data/`**:
   - `programs.ts`: 9 campus initiatives (E-Summit, IGNITE, FORGE, Ambassadors, etc.)
   - `events.ts`: 8 chronological campus events with RSVPs, agendas, and speakers
   - `startups.ts`: 8 campus startups (NexusEval, DormCart, VoltLoop, etc.)
   - `mentors.ts`: 12 ecosystem mentors & office hours slots
   - `team.ts`: 2026–27 Core leadership, vertical heads, and associates
   - `quiz.ts`: 10 timed startup IQ questions with tactical debriefs
   - `resources.ts`: 6 full-length founder field guides and downloadable templates
   - `gallery.ts`: Categorized photo items with dates and venues
   - `testimonials.ts`: Authentic student and faculty quotes
   - `cofounders.ts`: Campus co-founder matchmaker board listings

3. **`lib/xp.ts`**:
   - Level ladders (`Spectator` 0-99 XP to `Operator` 2500+ XP)
   - Badge cases and season quests
   - Reactive `localStorage` player persistence engine

---

## 🗺️ Complete Page Inventory

| Route | Purpose | Key Features |
|---|---|---|
| `/` | **Home** | Poster hero, Founder HUD, dual-speed marquee, proof strip, 6-node loop, flagship bento, startups teaser, voices |
| `/about` | **About** | Origin story, Saahi Dubey, values, 2024–26 timeline, vertical structure, faculty desk, 8 FAQs |
| `/programs` | **Programs Index** | Filterable category grid of 9 programs |
| `/programs/[slug]` | **Program Detail** | Curricula, target profile, cohort timeline, outcomes, and program FAQs |
| `/events` | **Events Calendar** | Upcoming/Past tabs, category filters, seats left, XP rewards |
| `/events/[slug]` | **Event Detail** | Agenda, speaker profile, add-to-calendar, and interactive RSVP modal with +XP |
| `/summit` | **E-Summit 26** | Theme `UNFINISHED`, 4 conclaves, 12 speakers, 3 pass tiers, invite modal, sponsor deck CTA |
| `/startups` | **Portfolio** | Filterable by stage & sector, 8 venture cards, metrics, "Get Listed" modal |
| `/mentors` | **Mentors** | Search & filters, office hours availability, "Book Founder Hours" modal |
| `/team` | **Core Team** | Saahi Dubey card first, Faculty advisor, vertical heads bento, WebOps credit |
| `/arena` | **The Arena** | Player profile, level ladder, quest board with instant claims, badge showcase, leaderboard, notices |
| `/arena/quiz` | **Founder IQ Quiz** | 20s timed questions, instant explanations, shareable score card, XP attribution |
| `/join` | **Recruitment** | Product waitlist aesthetic, role difficulty breakdown, multi-field application with 48h SLA |
| `/ambassadors` | **Ambassadors** | Perks, operational tasks, CA leaderboard, application form |
| `/resources` | **Field Guides** | Full-text reading modal, downloadable PDF/checklist templates |
| `/gallery` | **Gallery** | Category filters, masonry photo cards, lightbox dialog |
| `/contact` | **Contact** | Physical bay details, vertical email desks, 48h SLA notice, inquiry form |
| `/idea` | **Idea Lab** | 3-step problem/wedge/crew submission engine, ticket generator, co-founder board |
| `/not-found` | **404** | On-brand "This page pivoted" with quick recovery links |

---

## 🛡️ Trust Architecture & SLAs
- **Response SLA**: All contact and application channels maintain a public 48-hour response SLA.
- **Physical Bay**: Room 204, E-Cell Bay, Polaris School of Technology (DivyaSree Wipro corridor, Bengaluru).
- **Faculty Desk**: Avinash Ramakant, Wednesdays & Fridays 4:00 PM – 6:00 PM.
