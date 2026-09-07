# ANTIGRAVITY MASTER PROMPT
# Build a complete multi-page Entrepreneurship Cell website from scratch

Read this entire document before writing a single file.
Act as a senior product designer + senior full-stack engineer shipping a real student-run product, not a college-club brochure.
Do not produce a generic purple-gradient “startup landing page.”
First output an implementation plan and file tree. Then build the full working site.

---

## 0. LOCKED BRAND TOKENS — DO NOT LEAVE PLACEHOLDERS

Put every constant below in `lib/site-config.ts` and import them. Never invent a different college name.

```ts
export const site = {
  collegeName: "Polaris School of Technology",
  collegeShort: "PST",
  city: "Bengaluru",
  foundedYear: 2024,                 // college + E-Cell era — young on purpose
  email: "ecell@polariscampus.com",
  instagram: "https://www.instagram.com/ecell.polaris/",
  instagramHandle: "@ecell.polaris",
  websiteCampus: "https://polariscampus.com",
  president: {
    name: "Saahi Dubey",
    role: "President, E-Cell PST",
    blurb:
      "Builder who chose PST over IIT Bombay Aerospace, cracked GSoC in year one, now running the campus founder stack.",
  },
  facultyAdvisor: {
    name: "[Faculty Advisor — add official name]",
    role: "Faculty Advisor, E-Cell PST",
    officeHours: "To be published",
  },
  address:
    "Polaris School of Technology, Bengaluru — tech-park campus (Wipro / DivyaSree corridor).",
  brand: "E-Cell PST",
  product: "SPARK",
  tagline: "Build companies. Not résumés.",
  taglineAlt: "From hostel rooms to term sheets.",
  summit: "E-Summit 26",
  summitTheme: "UNFINISHED",
  pitchLeague: "IGNITE",
  preIncubation: "FORGE",
  ambassadors: "SPARK Ambassadors",
  arena: "The Arena",
} as const;
```

Brand lockup: **E-Cell PST**
Product voice mark: **SPARK**
Primary tagline: **Build companies. Not résumés.**
Secondary: **From hostel rooms to term sheets.**
President byline everywhere it matters: **Saahi Dubey, President**

Socials to wire in navbar/footer:
- Instagram (live): https://www.instagram.com/ecell.polaris/
- Email: ecell@polariscampus.com
- LinkedIn / X / WhatsApp: use labelled placeholders `Add official link` — do not fake follower counts

---

## 0.1 CAMPUS REALITY (so the site does not lie)

Polaris School of Technology is a **new-age CS / AI tech school in Bengaluru (est. 2024)**, founded by Classplus founders Mukul Rustagi and Bhaswat Agarwal. Campus sits inside a **tech park**, not a 100-year sandstone quad. Curriculum is build-first. College already runs builder energy: Vibeathon with Replit, OpenAI sessions, Tech Combinator-style student founder support, Constellation fest.

E-Cell PST is therefore **young, sharp, and high-access** — not Asia’s largest student body. Trust comes from:
- a President with a public builder story (Saahi Dubey)
- Bengaluru / tech-park proximity to operators and capital
- college-level founder DNA (Classplus)
- honest early metrics, not fake 60K startups

**Forbidden numbers:** 500K students reached, 60K startups, 25 years of legacy, Nasdaq tower, “Asia’s largest.”
**Allowed numbers (seed as placeholders the team can edit):** events this year, ideas submitted, students in the WhatsApp loop, mentors booked, startups in FORGE. Keep them campus-scale (tens to low thousands).

Positioning line:
> E-Cell PST is the founder operating system inside Polaris School of Technology — a 2024 Bengaluru tech school where the default is to ship, not to spectate.

---

## 1. PRODUCT INTENT

This is the official website of a college Entrepreneurship Cell in India.
It must do four jobs at once:

1. Recruit students who have never started anything.
2. Convert “I have an idea” into a submitted idea + team.
3. Look credible to sponsors, mentors, incubators, and other E-Cells (IITB / IITM / IITH / KGP calibre).
4. Feel Gen-Z: fast, slightly irreverent, game-like, never cringe corporate, never “dear students kindly attend.”

Reference DNA (do not clone layouts; steal principles):

- https://www.ecell.in/ — scale, initiatives as products, speaker gravity, media proof, “Creating Job Creators”
- https://ecell.iith.ac.in/ — “Ideas That Ignite”, dorm-room-to-startup, IDEATE → PITCH → BUILD → LAUNCH loop
- https://ecell-rvu.vercel.app/ — Gen-Z copy, failure as culture, community inner circle, reasons-to-join cards
- https://ecellnitjsr.org/ — gamified “battleground”, quizzes, leaderboards, live notices
- https://www.ecell-iitkgp.in/ — mission + impact numbers + structured initiatives
- https://e-cellnitt.org/ — 0-to-1 programs, internship portal, pre-incubation sprints
- https://ecell.iitm.ac.in/ — vision that entrepreneurship is a development pathway, not a club hobby

Positioning line:
> E-Cell PST is the campus operating system for Polaris builders — competitions, FORGE pre-incubation, mentors, capital intros, and a public Arena where effort is visible.

---

## 2. TECH STACK (MANDATORY)

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react icons
- A small component system inspired by shadcn/ui (build the primitives yourself if you cannot install shadcn: Button, Badge, Card, Dialog, Tabs, Input, Textarea, Accordion, Avatar)
- next/font: **Syne** (display) + **Satoshi or Outfit or Geist** (body). If Satoshi is unavailable, use **Outfit** + **Syne**.
- All content in typed data files (`lib/data/*.ts`) — no hardcoded page-only copy except layout chrome
- Working client-side forms (validate + success states). Persist to localStorage where useful (idea submissions, XP, quiz scores, join applications) so the demo feels alive without a backend
- SEO: unique metadata per page, Open Graph, sitemap, robots.txt, JSON-LD Organization + Event
- Fully responsive (360px → 1440px), keyboard accessible, reduced-motion support
- **White / paper theme is the only default.** Do not ship a dark homepage. A dark mode toggle is optional and secondary — if you add it, light must still be the first paint.
- Dummy images via carefully chosen Unsplash / picsum with meaningful alt text. Prefer abstract grain, campus night, neon signage, founder portraits, whiteboard shots — not stock handshake photos

Folder conventions:

```
app/
  layout.tsx
  page.tsx
  about/page.tsx
  programs/page.tsx
  programs/[slug]/page.tsx
  events/page.tsx
  events/[slug]/page.tsx
  summit/page.tsx
  startups/page.tsx
  mentors/page.tsx
  team/page.tsx
  arena/page.tsx
  arena/quiz/page.tsx
  join/page.tsx
  ambassadors/page.tsx
  resources/page.tsx
  gallery/page.tsx
  contact/page.tsx
  idea/page.tsx
components/
  layout/Navbar.tsx
  layout/Footer.tsx
  layout/PageTransition.tsx
  home/*
  ui/*
  arena/*
lib/
  site-config.ts
  data/*.ts
  xp.ts
public/
```

---

## 3. DESIGN SYSTEM — GEN Z AESTHETIC LOCK (WHITE / PAPER)

**Theme mandate: the complete website is WHITE.**
Not dark-with-a-toggle. Not grey corporate. A warm paper-white campus magazine that still feels Gen Z.

This site must look like a **2026 campus product**, not a college committee PDF and not a Y Combinator template.
If a 19-year-old would screenshot the hero for Instagram Stories (white poster, huge ink type, lime sticker), you are in range.
If it looks like Bootstrap light, Stripe docs, or a purple SaaS landing, you failed.

Reference *feel* (do not clone):
- Highsnobiety / A24 print campaign on white
- Apple keynote slide + streetwear lookbook
- Arcade HUD printed on paper (season pass, perforated ticket)
- Linear-level density for The Arena, but on cream
- RVU E-Cell’s blunt copy + NIT Jamshedpur’s game layer

### 3.1 Visual thesis
**“Daylight foundry.”**
Warm white field. Ink-black type. One acid-lime scar. Paper grain. A living ticker.
Mood: Sunday noon in a Bengaluru tech-park hostel — sunlight on a cheap table, printed pitch deck, lime highlighter, last night’s Red Bull can.

Texture stack on every full-bleed section:
1. paper base (`#F6F3EC` or `#FAFAF7`) — never raw `#FFFFFF` on every surface
2. 3–5% paper grain / noise overlay (`pointer-events: none`)
3. one soft wash (lime at 6% or orange at 5%) in a corner — never a rainbow gradient
4. 1px hairlines in warm stone (`#E6E1D6`)
5. stamped labels in black or lime: `SEASON 26` / `LIVE` / `PST · BLR`
6. rare ink blocks: a single full-black band is allowed (footer or one CTA ribbon) so the white stays expensive

### 3.2 Color tokens — LIGHT ONLY

```
--bg:        #F6F3EC          /* warm paper */
--bg-2:      #FFFEFA          /* card / nav */
--bg-3:      #EFEAE0          /* sunken / bento cell */
--line:      #E6E1D6
--ink:       #111114          /* primary text */
--muted:     #6F6B64
--accent:    #B6F000          /* acid lime on white — slightly hotter so it pops */
--accent-ink:#10140A          /* text on lime buttons */
--accent-2:  #FF4D1C          /* heat / live */
--accent-3:  #007C86          /* ink-teal for Arena data only */
--ok:        #0F9F6E
```

Rules:
- Background is paper. Text is ink. Accent is lime. That is the whole brand.
- One loud accent per viewport. Headlines stay ink, not lime.
- Primary buttons: lime fill + near-black text, radius 4px max (or sharp 0).
- Ghost buttons: ink outline on paper.
- Status pills: tiny, mono, uppercase. `LIVE` = orange on a warm tint, `APPS OPEN` = lime, `ENDED` = muted.
- Cards: white/`--bg-2`, 1px `--line`, no heavy shadow. At most a 16px soft warm shadow at 6% black.
- No purple. No sky-blue links. No navy corporate header. No dark hero “because contrast.”
- Images sit on paper with a thin hairline frame, like prints taped to a wall.

### 3.3 Type (this is 40% of the aesthetic)

- Display: **Syne ExtraBold** (or Syne + a condensed fallback). Allow slight overflow / crop on desktop heroes.
- Body: **Outfit** or **Geist**. 16–18px, 1.55 leading, ink on paper.
- Micro: `ui-monospace` for XP, `LVL 04`, `T–04:12:08`, file names, season chips.
- Hero: `clamp(56px, 10vw, 128px)`, tracking `-0.04em`, line-height `0.92`, color `--ink`.
- Kickers: 11–12px, uppercase, tracking `0.22em`, lime or muted stone.
- Mix locked-caps labels with sentence-case body. Never all-Inter.

Headline tricks that read Gen Z:
- Break the line where the joke is (`Build companies.` / `Not résumés.`)
- Strike-through a safe word: `Not ~~placements~~ companies.`
- Tiny annotation next to a word, like a sticker: `ship*` `*this semester`

### 3.4 Layout + composition

- Max width 1320px. Uneven columns 7/5 or 8/4. Avoid centered brochure stacks.
- Hero is a poster, not a bootstrap jumbotron. Type left, object right (HUD / Polaroid stack / ticket stub).
- Bento boards with one cell that spans 2×2 (featured startup or live event).
- Full-bleed black bands between sections. Not identical 80px padding every time — vary 64 / 96 / 140.
- Marquee (two speeds, opposite directions):
  `IDEATE · VALIDATE · PITCH · BUILD · SHIP · RAISE · REPEAT`
  and a name ticker.
- Sticky nav: frosted paper / white 85% + blur, 1px `--line` bottom. Logo = **SPARK** in Syne ink, `E-CELL PST` micro under it.
- Mobile: full-screen paper drawer, huge ink links, lime CTA glued to the bottom, Instagram row.

Objects that make it feel designed, not templated:
- perforated ticket / festival pass for E-Summit
- Polaroid / dumped-on-desk photo stack for gallery teaser
- season-pass card in the hero HUD
- stamped “PST BLR 26” rotate `-6deg` on one image
- custom cursor optional on desktop (lime crosshair) — disable on touch

### 3.5 Motion (premium, short, physical)

- Page enter: 200ms fade + 16px rise, stagger children 40ms
- Hover: 4px lift + lime 1px inset, 150ms
- Buttons: press scale `0.98`
- Count-ups only for stats in view
- Marquees linear, pause on hover
- Arena: printed-grid / graph-paper HUD, number tick — not a black cyber terminal
- Magnetic pull on primary CTA (desktop only, 8px)
- Image hover: slow zoom 1.04 + slight grain
- `prefers-reduced-motion: reduce` kills marquees, magnets, count-ups

Do not: looping Lottie everywhere, particles, 3D splines, scroll-jacking.

### 3.6 UI chrome that feels Gen Z

- Scroll progress as a 2px lime line under the nav
- “Now playing” style live chip when an event is today
- Bottom-mobile dock on Arena only: Profile / Quests / Quiz / Board
- Share cards that look like white story posters (paper + huge ink score + lime stamp + `E-CELL PST`)
- Empty states with one dry line (`Nobody queued this roast. Be first.`)
- Forms as stacked “cards in a deck”, step pips, not a long government form
- Sound off by default. No autoplay music. Ever.

### 3.7 Photography + graphic direction

- Daylight campus, whiteboards, printouts, hands, cables, auditorium, tech-park glass
- Grade: bright but not HDR-tourist. Slightly warm. One image per page may be lime duotone.
- Photos live in white frames / tape / Polaroid — collage on paper, not full-bleed dark cinema
- No handshake stock. No “diverse young professionals pointing at a laptop”
- Team photos can be casual phone pics inside a strict frame — that’s the point

### 3.8 What Gen Z is NOT on this site

Forbidden cringe:
- “Hey besties”, “slay”, “it’s giving entrepreneur”, infinite 🔥🚀
- Comic neon cyberpunk city, vaporwave grid, among-us jokes
- Instagram carousel of motivational quotes
- Mascot unless it’s a 1-color stamp
- Confetti on every submit
- TikTok UI clone

Allowed attitude:
- dry, specific, slightly mean to mediocrity
- failure is public and useful
- effort is scored
- design looks expensive even when the cell is two years old

### 3.9 Anti-patterns (ship-blockers)

- Dark homepage, dark hero, or “cinematic black” sections except one footer/CTA ribbon
- Purple gradients, glassmorphism soup, Inter + blue hero
- Cold #FFFFFF + #0000FF corporate
- “Welcome to our official website”
- Rounded-2xl cards in a 3-column grid with identical icons
- Fake 10,000,000 users
- Lorem ipsum
- alert() forms
- Centered everything
- More than one emoji in a heading
- Light-grey LinkedIn about-us

**Aesthetic QA before you call it done:**
Screenshot Home, Arena, Summit, Idea Lab on mobile and desktop.
All four must be **white/paper first**, same poster energy (Syne ink + lime scar + grain + HUD-on-paper).
If any page painted itself dark, restyle it before adding more pages.

---

## 4. INFORMATION ARCHITECTURE

Navbar:
Logo SPARK / E-Cell PST
Links: About · Programs · Events · Startups · Arena · Team
Overflow (drawer + footer): Mentors · Summit · Ambassadors · Resources · Gallery · Contact
Primary CTA: Submit idea
Secondary: Join the cell

Footer (4 columns):
1. Brand blurb + socials
2. Explore
3. Build (Idea form, Arena, Forge, Summit)
4. Trust (Faculty advisor, IIC / Institution’s Innovation Council, MoE’s IIC if relevant, address, email)
Bottom bar: © year · Made by E-Cell WebOps · Privacy

Global components:
- Top slim ticker: next event + days-hours countdown + “Applications open”
- Command-palette style search optional (events + programs)
- Cookie-free. No dark-pattern popups

---

## 5. PAGE-BY-PAGE SPEC

### 5.1 HOME `/`

**Hero**
Kicker: `EST. 2024 · BENGALURU · POLARIS SCHOOL OF TECHNOLOGY`
H1 (two lines):
`Build companies.`
`Not résumés.`
Sub: `E-Cell PST is where Polarisians turn a hostel-room itch into a team, a mentor, a deadline, and a stage. If you can ship a prototype before the semester ends, you already belong here.`
CTAs: `Submit your idea` → /idea   |   `Enter The Arena` → /arena
Tertiary text link: `Watch E-Summit recap`

Right side “Founder HUD” card (this is the trust + game hook):
- Live campus season: `Season 26 · Chapter 01`
- User-agnostic demo stats: XP pool, ideas this month, teams forming
- Next boss fight: upcoming flagship event name + date
- Mini progress: `Ideate → Team → Mentor → Pitch`
- Button: `Start quest`

Under hero: infinite marquee of speaker / founder names (mix real well-known Indian startup names as “past / target speakers” clearly labelled as featured voices, plus campus founders).

**Proof strip** (count-up)
Use believable **young-campus** numbers, not IITB numbers. Seed these and mark them editable:
- 18+ builder sessions / year
- 12 campus ideas in motion
- 25+ mentors & operators in orbit
- 400+ Polarisians in the loop
- Tech-park access + college founder network (Classplus lineage — mention as context, not as “we are Classplus”)

**What we actually do** — 3 columns, not fluff:
1. Light the match — talks, bootcamps, founder AMAs
2. Run the gauntlet — ideathons, IGNITE B-Plan, case comps
3. Stay in the building — FORGE pre-incubation, mentor office hours, investor intros

**Operating system / loop**
Visual stepper: IDEATE → VALIDATE → PITCH → BUILD → SHIP → RAISE
Each node clickable to a program.

**Flagship products** (initiative cards like IITB Eureka / NEC, but original names):
1. E-Summit — flagship festival
2. IGNITE — campus + inter-college pitch league
3. FORGE — 6–8 week pre-incubation sprint
4. SPARK Ambassadors — other-campus reps
5. Founder Hours — weekly mentor office hours
6. The Arena — quizzes, streaks, public XP

Each card: status pill (`LIVE` / `APPS OPEN` / `SEASON CLOSED`), one-line job-to-be-done, metric, CTA.

**Startups born here**
3 featured startup cards (invent plausible campus startups with sectors: climate, student fintech, campus ops, health, D2C). Status: ideating / MVP / incorporated / funded. “View portfolio →”

**Voices**
4 testimonials: faculty advisor, an alumni founder, a first-year who joined with zero idea, a mentor. Real-sounding, short, specific. No “it was a great learning experience.”

**Partners**
Logo wall: IIC, local incubator (NASSCOM 10k / SINE-style / campus TBI), 4–6 company marks as placeholders.

**Final CTA band**
`Don’t lurk the ecosystem. Enter it.`
Buttons: Submit idea / Join core team

---

### 5.2 ABOUT `/about`

- Origin story: E-Cell PST stood up in the 2024 Polaris era — student-run, faculty-backed, born inside a Bengaluru tech park rather than a traditional campus club calendar. President: **Saahi Dubey**.
- Mission: create job creators from this campus
- Vision: every department ships at least one real venture a year
- Values: Ship. Tell the truth. Help the next founder. Play long games.
- Timeline (short, honest): 2024 campus opens → E-Cell forms → first founder hours / pitch night → Arena launches 2026 → E-Summit 26 (UNFINISHED). Do not fabricate a 20-year history.
- “In the spotlight” bento: media / college magazine / inter-college wins
- How we’re structured: Core, Verticals (Events, Design, Tech, Outreach, Content, Finance, Mentorship)
- Faculty desk: photo placeholder, quote, office hours
- FAQ accordion (8 questions): is this only for B-school kids? do I need an idea? is it a credit course? how do we pick core team? etc.

---

### 5.3 PROGRAMS `/programs` + `/programs/[slug]`

Index = filterable grid: Awareness / Build / Compete / Capital / Community
Each program has a dedicated page:

Must-have programs (write full copy, dates, who it’s for, what you walk away with, FAQ):

1. E-Summit
2. IGNITE Pitch League
3. FORGE Pre-incubation
4. SPARK Ambassadors
5. Founder Hours
6. Startup Internship Board
7. Freshers’ Ignition (first-year only bootcamp)
8. Women Who Build (inclusive founder circle — serious, not token)
9. Dept. x E-Cell labs (engg / design / law / medical depending on college — keep generic “cross-dept studios”)

Program template:
Hero, who it’s for, format, timeline, prizes / outcomes, mentors involved, past winners, CTA register / notify

---

### 5.4 EVENTS `/events` + `/events/[slug]`

- Tabs: Upcoming / Ongoing / Past
- Filters: Talk, Workshop, Competition, Mixer, Summit
- Event cards with date block, campus venue, XP reward (e.g. +80 XP), capacity
- Detail page: agenda, speakers, register form (name, email, year, department, why), add-to-calendar dummy, related events
- Seed 8 events across the year including a live “this week” one

---

### 5.5 E-SUMMIT `/summit`

Separate brand moment. Slightly louder.
Theme name: **HEAT / 26** or **UNFINISHED**
- Cinematic hero with countdown
- 4 conclaves: Youth, Builders, Capital, Campus
- Speaker grid (12 placeholders with real-style titles)
- Competitions list
- Tickets: Student / External / Founder pass (no real payments; “request invite”)
- Sponsors prospectus CTA
- Gallery strip from past year
- FAQ

---

### 5.6 STARTUPS `/startups`

Portfolio, not a graveyard of logos.
- Filters by sector + stage
- Each startup: one-liner, founders (year + dept), what E-Cell did for them, link
- “Have a startup on campus? Get listed” form
- Stats: incorporated / MVPs / intern hiring

Seed 8 startups with distinct stories.

---

### 5.7 MENTORS `/mentors`

- Search + filter: sector, type (alumni / operator / investor / faculty)
- Cards with availability: `Open for office hours` / `Async only`
- Request session modal (stored locally)
- 12 mentor placeholders with Indian startup ecosystem flavour (fintech, D2C, climate, SaaS, VC)

---

### 5.8 TEAM `/team`

- Year selector: 2026–27 Core
- Faculty advisor card (name left as editable config)
- President card first and largest: **Saahi Dubey — President, E-Cell PST**
- Then vertical heads as a bento, then associates
- Each person: photo placeholder, role, one-line “building / obsessed with”, Instagram/LinkedIn
- No fake alumni-core wall from 2018. If you show past core, label it “Season 25” only if needed; otherwise omit
- “This site was shipped by WebOps” credit
- Apply to core → /join
- Footer quote can be from Saahi, short, specific

---

### 5.9 THE ARENA `/arena`  ← GAMIFICATION CORE

This is what makes the site feel Gen-Z and unlike ecell.in.

Concept: public skill gym for campus founders.

**Player profile (localStorage)**
On first visit, prompt a lightweight “create handle”:
name, year, department, handle (`@ dorm-founder`)
Then persist:
- XP
- level
- badges
- quiz high score
- ideas submitted
- events marked “I’m in”

**Level ladder**
0–99 XP Spectator
100 Explorer
250 Ideator
500 Builder
900 Pitcher
1500 Campus Founder
2500 Operator

Show a progress bar and the next unlock.

**Quests board**
Daily / season quests with XP:
- Submit an idea +120
- Complete Arena quiz +60
- Refer a co-founder +80
- Check in at Founder Hours +40
- Share E-Summit +20
Mark complete in UI (honour system + form completion)

**Badge case**
Ship or Die, First Pitch, Night Owl, Squad Up, Summit Resident, Mentor Magnet, Campus Diplomat

**Leaderboard**
Seed 15 fake campus handles + insert the current user.
Tabs: XP / Quiz / Ideas
Note: “Season 26 campus board. Resets every semester.”

**Quiz: Founder IQ** `/arena/quiz`
10-question timed quiz (20s each) on:
startup basics, Indian ecosystem (DPIIT, startup India, term sheet lite), famous founder lore, product sense
- Immediate feedback
- End screen with score, XP grant, share card aesthetic
- Questions in `lib/data/quiz.ts`

**Live notices**
3–5 notices with timestamps (apps open, mentor dropped a slot, IGNITE round 2)

Visual: HUD frames, lime pips, level chips, not childish game art.

---

### 5.10 JOIN `/join`

Recruitment that feels like a product waitlist, not a Google Form dump.
- Open roles with “why this role is actually hard”
- Timeline: applications → case / task → interview → onboarding
- Form: name, year, dept, role, links, “ship something you’ve already made”, 600-char “what you want to build here”
- Success state writes to localStorage and shows “you’re in the queue · expected reply window”
- If apps closed: collect notify-me + show last cycle stats

---

### 5.11 AMBASSADORS `/ambassadors`

Inspired by IITB Campus Ambassador / NEC, scaled honestly.
- What CAs actually do
- Perks: certificate, Summit pass, merch, leaderboard, LoR language
- Task types
- Apply form
- CA leaderboard (seeded)

---

### 5.12 RESOURCES `/resources`

A library, not a blog dump.
Categories: How to start · How to pitch · How to incorporate in India · How to find a co-founder · How to not raise too early
6–8 articles written in full (400–700 words, useful, opinionated).
Plus downloadable one-pagers listed (PDF links can be `#`).

---

### 5.13 GALLERY `/gallery`

Filter: Summit / Workshops / Team / Behind the scenes
Masonry. Captions with date. Lightbox.

---

### 5.14 CONTACT `/contact`

- Campus map embed placeholder
- Vertical-wise emails
- WhatsApp community CTA
- Partnership / sponsor form
- Physical room: “E-Cell bay, Polaris School of Technology, Bengaluru”
- Email: ecell@polariscampus.com
- Instagram: @ecell.polaris
- Response SLA: “We reply within 48 hours. If it’s a funding emergency, mention HEAT in the subject.”

---

### 5.15 IDEA LAB `/idea`

The conversion engine.
Multi-step (3 steps, progress bar):
1. The problem (who hurts, how often)
2. The wedge (what you’ll ship in 30 days)
3. The crew (solo / need co-founder / already a team) + contact
On submit: create an “idea ticket” in localStorage, grant Arena XP, show next actions (book Founder Hours, find co-founder board, upcoming IGNITE).

Co-founder board section on the same page: 6 open “looking for” cards (tech, design, ops, domain).

---

## 6. COPY VOICE

Write like a sharp 20-year-old PST builder who ships at 2am, watches IPL, and has no patience for circulars.
Aesthetic and voice have to match: expensive looking, unimpressed tone.

Yes:
- “Bring a problem, not a pitch deck.”
- “If your idea cannot survive a hostel-room roast, it cannot survive a market.”
- “We will not clap for participation. We will help you ship.”
- “Season 26 is open. Spectating is free. XP is not.”
- Button labels: `Submit idea`, `Enter Arena`, `Start quest`, `Request a roast`, `Get the pass` — not `Click here` / `Learn more` everywhere.

No:
- “Kindly find the attached brochure.”
- “Holistic development of budding entrepreneurs.”
- Empty adjectives: vibrant, plethora, embark, journey (max twice on the whole site)
- “Hey besties let’s slay this pitch” — that is not Gen Z, that is a brand intern

Trust copy is specific:
- office hours weekday + room
- what FORGE actually gives (mentor, weekly review, demo day)
- what you do not give (guaranteed funding)

---

## 7. TRUST ARCHITECTURE (MUST BE VISIBLE)

Every key page should contain at least two of:
- Named faculty advisor
- Named student leads with faces
- Real program mechanics (timeline, not just poster)
- Outcome stories (even small: “placed 11 interns into campus startups”)
- Partner / IIC / TBI marks
- Public Arena activity (so the org looks alive)
- Media or inter-college proof
- Clear contact + physical presence

Add a `/about` “How decisions get made” blurb so it doesn’t feel like a black box.

---

## 8. CONTENT SEEDING RULES

Invent a coherent fictional-but-plausible campus universe:
- Reuse the same 12 people across team / mentors / speakers
- Reuse the same 8 startups
- Dates sit in the current academic year (2026–27)
- City is Bengaluru. College is Polaris School of Technology (PST)
- President across team page hero + about + footer quote: Saahi Dubey
- Do not pretend to be IIT Bombay. Do not copy Eureka/NEC names. Original program names only.
- Do not use copyrighted logos (no Classplus / OpenAI / Replit marks unless drawn as plain wordmarks in mono). Use lettermark placeholders.
- Saahi’s public story may be referenced once, tightly, as trust — never as a personality cult. One paragraph max on About + Team.

---

## 9. IMPLEMENTATION QUALITY BAR

- Lighthouse-minded: next/image, font subsetting, no layout shift on nav
- Semantic HTML, skip-to-content link
- 404 page on-brand (“This page pivoted.”)
- Loading states on forms
- Mobile nav that doesn’t trap scroll
- Consistent button sizes
- Empty states for filters
- README.md with: how to run, where to edit copy (`lib/site-config.ts` + `lib/data`), design tokens, page list
- `npm run build` must succeed

Priority order if you must sequence work:
1. Design tokens + layout shell
2. Home + Idea + Arena (the product)
3. Programs + Events + Summit
4. Team + Mentors + Startups
5. Join + Ambassadors + Resources + Gallery + Contact
6. SEO + 404 + polish motion

---

## 10. FIRST REPLY FORMAT (BEFORE CODE)

1. Restate the product in 5 lines
2. Proposed file tree
3. Component inventory
4. Confirm locked identity: Polaris School of Technology / PST / Bengaluru / 2024 / ecell@polariscampus.com / @ecell.polaris / President Saahi Dubey
5. Then start scaffolding

Every string that might change lives in `lib/site-config.ts`.

Build the complete website now.
