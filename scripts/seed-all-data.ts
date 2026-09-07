import pg from "pg";
import { STARTUPS } from "../lib/data/startups";
import { EVENTS } from "../lib/data/events";
import { PROGRAMS } from "../lib/data/programs";
import { MENTORS } from "../lib/data/mentors";
import { PRESIDENT, FACULTY_ADVISOR, CORE_MEMBERS } from "../lib/data/team";
import { GALLERY_ITEMS } from "../lib/data/gallery";
import { CA_LEADERBOARD } from "../lib/data/ambassadors-data";
import { RESOURCES } from "../lib/data/resources";
import { SUMMIT_CONCLAVES } from "../lib/data/summit-data";
import { SEEDED_LEADERBOARD, LIVE_NOTICES } from "../lib/data/arena-data";

const { Client } = pg;

const CONNECTION_STRING =
  process.env.DATABASE_URL ||
  "postgresql://postgres:Ecell%402025Polaris@db.saidjblbjceptjdmovnn.supabase.co:5432/postgres";

async function main() {
  console.log("===============================================================");
  console.log(" E CELL PST (SPARK) · FULL SUPABASE MIGRATION & SEED RUNNER");
  console.log("===============================================================\n");

  const client = new Client({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  });

  const startTime = Date.now();

  try {
    await client.connect();
    console.log(" Connected to Supabase PostgreSQL 17 database.\n");

    // 1. Create Schema and Tables
    console.log("--- Step 1: Creating Content Tables & Indexes ---");
    const ddl = `
      -- Enable Extensions
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      -- 1. Startups
      CREATE TABLE IF NOT EXISTS public.startups (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        sector TEXT NOT NULL,
        stage TEXT NOT NULL,
        featured BOOLEAN DEFAULT FALSE,
        one_liner TEXT NOT NULL,
        description TEXT NOT NULL,
        what_ecell_did TEXT NOT NULL,
        website_url TEXT,
        founders JSONB NOT NULL DEFAULT '[]'::jsonb,
        metrics JSONB NOT NULL DEFAULT '[]'::jsonb,
        tags TEXT[] DEFAULT '{}',
        hiring_roles TEXT[] DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_startups_slug ON public.startups(slug);
      CREATE INDEX IF NOT EXISTS idx_startups_featured ON public.startups(featured);
      CREATE INDEX IF NOT EXISTS idx_startups_sector ON public.startups(sector);

      -- 2. Events
      CREATE TABLE IF NOT EXISTS public.events (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        kicker TEXT NOT NULL,
        category TEXT NOT NULL,
        status TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        venue TEXT NOT NULL,
        xp_reward INTEGER NOT NULL DEFAULT 50,
        capacity TEXT NOT NULL,
        spots_left INTEGER NOT NULL,
        short_desc TEXT NOT NULL,
        full_desc TEXT NOT NULL,
        speaker JSONB NOT NULL DEFAULT '{}'::jsonb,
        agenda JSONB NOT NULL DEFAULT '[]'::jsonb,
        prerequisites TEXT[] DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_events_slug ON public.events(slug);
      CREATE INDEX IF NOT EXISTS idx_events_status ON public.events(status);
      CREATE INDEX IF NOT EXISTS idx_events_category ON public.events(category);

      -- 3. Programs
      CREATE TABLE IF NOT EXISTS public.programs (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        kicker TEXT NOT NULL,
        category TEXT NOT NULL,
        status TEXT NOT NULL,
        one_liner TEXT NOT NULL,
        tagline TEXT NOT NULL,
        duration TEXT NOT NULL,
        who_its_for TEXT NOT NULL,
        format TEXT NOT NULL,
        mentors_count TEXT NOT NULL,
        prizes_or_grant TEXT,
        timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
        outcomes TEXT[] DEFAULT '{}',
        faqs JSONB NOT NULL DEFAULT '[]'::jsonb,
        cta_text TEXT NOT NULL,
        cta_link TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_programs_slug ON public.programs(slug);
      CREATE INDEX IF NOT EXISTS idx_programs_status ON public.programs(status);
      CREATE INDEX IF NOT EXISTS idx_programs_category ON public.programs(category);

      -- 4. Mentors
      CREATE TABLE IF NOT EXISTS public.mentors (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        mentor_id TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        company TEXT NOT NULL,
        type TEXT NOT NULL,
        sector TEXT NOT NULL,
        bio TEXT NOT NULL,
        expertise TEXT[] DEFAULT '{}',
        availability TEXT NOT NULL,
        slots_this_week INTEGER NOT NULL DEFAULT 0,
        avatar TEXT NOT NULL,
        linkedin_url TEXT,
        office_hours_venue TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_mentors_id ON public.mentors(mentor_id);
      CREATE INDEX IF NOT EXISTS idx_mentors_sector ON public.mentors(sector);
      CREATE INDEX IF NOT EXISTS idx_mentors_type ON public.mentors(type);

      -- 5. Team Members
      CREATE TABLE IF NOT EXISTS public.team_members (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL,
        vertical TEXT NOT NULL,
        bio TEXT NOT NULL,
        building_or_obsessed TEXT NOT NULL,
        avatar TEXT NOT NULL,
        socials JSONB NOT NULL DEFAULT '{}'::jsonb,
        featured BOOLEAN DEFAULT FALSE,
        display_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_team_vertical ON public.team_members(vertical);

      -- 6. Gallery Items
      CREATE TABLE IF NOT EXISTS public.gallery_items (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        item_id TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        date TEXT NOT NULL,
        venue TEXT NOT NULL,
        caption TEXT NOT NULL,
        image_url TEXT NOT NULL,
        aspect TEXT NOT NULL,
        stamped TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_gallery_cat ON public.gallery_items(category);

      -- 7. Resources
      CREATE TABLE IF NOT EXISTS public.resources (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        slug TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        read_time TEXT NOT NULL,
        one_liner TEXT NOT NULL,
        author TEXT NOT NULL,
        published_date TEXT NOT NULL,
        key_takeaways TEXT[] DEFAULT '{}',
        content TEXT[] DEFAULT '{}',
        downloadable_asset JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_resources_slug ON public.resources(slug);
      CREATE INDEX IF NOT EXISTS idx_resources_category ON public.resources(category);

      -- 8. Summit Conclaves
      CREATE TABLE IF NOT EXISTS public.summit_conclaves (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        conclave_id TEXT UNIQUE NOT NULL,
        title TEXT NOT NULL,
        badge TEXT NOT NULL,
        description TEXT NOT NULL,
        audience TEXT NOT NULL,
        key_sessions TEXT[] DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- 9. Campus Ambassadors Leaderboard
      CREATE TABLE IF NOT EXISTS public.ambassadors_leaderboard (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        rank INTEGER NOT NULL,
        name TEXT NOT NULL,
        college TEXT NOT NULL,
        city TEXT NOT NULL,
        delegates_registered INTEGER NOT NULL,
        points INTEGER NOT NULL,
        badge TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- 10. The Arena Builder Leaderboard
      CREATE TABLE IF NOT EXISTS public.arena_leaderboard (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        rank INTEGER UNIQUE NOT NULL,
        handle TEXT NOT NULL,
        name TEXT NOT NULL,
        dept TEXT NOT NULL,
        year TEXT NOT NULL,
        xp INTEGER NOT NULL,
        level TEXT NOT NULL,
        ideas_count INTEGER NOT NULL DEFAULT 0,
        quiz_score INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_arena_rank ON public.arena_leaderboard(rank);

      -- 11. The Arena Live Notices
      CREATE TABLE IF NOT EXISTS public.arena_notices (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        notice_id TEXT UNIQUE NOT NULL,
        tag TEXT NOT NULL,
        title TEXT NOT NULL,
        timestamp_text TEXT NOT NULL,
        link_text TEXT,
        link_url TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    await client.query(ddl);
    console.log("  All 11 content tables and b-tree performance indexes created.");

    // Step 2: Configure Public Read Policies (RLS)
    console.log("\n--- Step 2: Applying Row Level Security & Public Read Policies ---");
    const tables = [
      "startups",
      "events",
      "programs",
      "mentors",
      "team_members",
      "gallery_items",
      "resources",
      "summit_conclaves",
      "ambassadors_leaderboard",
      "arena_leaderboard",
      "arena_notices",
    ];

    for (const t of tables) {
      await client.query(`ALTER TABLE public.${t} ENABLE ROW LEVEL SECURITY;`);
      await client.query(`DROP POLICY IF EXISTS "Allow public read on ${t}" ON public.${t};`);
      await client.query(`CREATE POLICY "Allow public read on ${t}" ON public.${t} FOR SELECT TO anon, authenticated USING (true);`);
    }
    console.log(`  Applied public read access RLS policies across ${tables.length} tables.`);

    // Step 3: Seed Startups
    console.log("\n--- Step 3: Seeding Startups ---");
    for (const s of STARTUPS) {
      await client.query(
        `INSERT INTO public.startups 
          (slug, name, sector, stage, featured, one_liner, description, what_ecell_did, website_url, founders, metrics, tags, hiring_roles)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         ON CONFLICT (slug) DO UPDATE SET
          name = EXCLUDED.name,
          sector = EXCLUDED.sector,
          stage = EXCLUDED.stage,
          featured = EXCLUDED.featured,
          one_liner = EXCLUDED.one_liner,
          description = EXCLUDED.description,
          what_ecell_did = EXCLUDED.what_ecell_did,
          website_url = EXCLUDED.website_url,
          founders = EXCLUDED.founders,
          metrics = EXCLUDED.metrics,
          tags = EXCLUDED.tags,
          hiring_roles = EXCLUDED.hiring_roles`,
        [
          s.slug,
          s.name,
          s.sector,
          s.stage,
          s.featured || false,
          s.oneLiner,
          s.description,
          s.whatEcellDid,
          s.websiteUrl || null,
          JSON.stringify(s.founders),
          JSON.stringify(s.metrics),
          s.tags,
          s.hiringRoles || [],
        ]
      );
    }
    console.log(`  Seeded ${STARTUPS.length} startups.`);

    // Step 4: Seed Events
    console.log("\n--- Step 4: Seeding Events ---");
    for (const e of EVENTS) {
      await client.query(
        `INSERT INTO public.events 
          (slug, title, kicker, category, status, date, time, venue, xp_reward, capacity, spots_left, short_desc, full_desc, speaker, agenda, prerequisites)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
         ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          kicker = EXCLUDED.kicker,
          category = EXCLUDED.category,
          status = EXCLUDED.status,
          date = EXCLUDED.date,
          time = EXCLUDED.time,
          venue = EXCLUDED.venue,
          xp_reward = EXCLUDED.xp_reward,
          capacity = EXCLUDED.capacity,
          spots_left = EXCLUDED.spots_left,
          short_desc = EXCLUDED.short_desc,
          full_desc = EXCLUDED.full_desc,
          speaker = EXCLUDED.speaker,
          agenda = EXCLUDED.agenda,
          prerequisites = EXCLUDED.prerequisites`,
        [
          e.slug,
          e.title,
          e.kicker,
          e.category,
          e.status,
          e.date,
          e.time,
          e.venue,
          e.xpReward,
          e.capacity,
          e.spotsLeft,
          e.shortDesc,
          e.fullDesc,
          JSON.stringify(e.speaker),
          JSON.stringify(e.agenda),
          e.prerequisites,
        ]
      );
    }
    console.log(`  Seeded ${EVENTS.length} events.`);

    // Step 5: Seed Programs
    console.log("\n--- Step 5: Seeding Programs ---");
    for (const p of PROGRAMS) {
      await client.query(
        `INSERT INTO public.programs 
          (slug, title, kicker, category, status, one_liner, tagline, duration, who_its_for, format, mentors_count, prizes_or_grant, timeline, outcomes, faqs, cta_text, cta_link)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
         ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          kicker = EXCLUDED.kicker,
          category = EXCLUDED.category,
          status = EXCLUDED.status,
          one_liner = EXCLUDED.one_liner,
          tagline = EXCLUDED.tagline,
          duration = EXCLUDED.duration,
          who_its_for = EXCLUDED.who_its_for,
          format = EXCLUDED.format,
          mentors_count = EXCLUDED.mentors_count,
          prizes_or_grant = EXCLUDED.prizes_or_grant,
          timeline = EXCLUDED.timeline,
          outcomes = EXCLUDED.outcomes,
          faqs = EXCLUDED.faqs,
          cta_text = EXCLUDED.cta_text,
          cta_link = EXCLUDED.cta_link`,
        [
          p.slug,
          p.title,
          p.kicker,
          p.category,
          p.status,
          p.oneLiner,
          p.tagline,
          p.duration,
          p.whoItsFor,
          p.format,
          p.mentorsCount,
          p.prizesOrGrant || null,
          JSON.stringify(p.timeline),
          p.outcomes,
          JSON.stringify(p.faqs),
          p.ctaText,
          p.ctaLink,
        ]
      );
    }
    console.log(`  Seeded ${PROGRAMS.length} programs.`);

    // Step 6: Seed Mentors
    console.log("\n--- Step 6: Seeding Mentors ---");
    for (const m of MENTORS) {
      await client.query(
        `INSERT INTO public.mentors 
          (mentor_id, name, role, company, type, sector, bio, expertise, availability, slots_this_week, avatar, linkedin_url, office_hours_venue)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         ON CONFLICT (mentor_id) DO UPDATE SET
          name = EXCLUDED.name,
          role = EXCLUDED.role,
          company = EXCLUDED.company,
          type = EXCLUDED.type,
          sector = EXCLUDED.sector,
          bio = EXCLUDED.bio,
          expertise = EXCLUDED.expertise,
          availability = EXCLUDED.availability,
          slots_this_week = EXCLUDED.slots_this_week,
          avatar = EXCLUDED.avatar,
          linkedin_url = EXCLUDED.linkedin_url,
          office_hours_venue = EXCLUDED.office_hours_venue`,
        [
          m.id,
          m.name,
          m.role,
          m.company,
          m.type,
          m.sector,
          m.bio,
          m.expertise,
          m.availability,
          m.slotsThisWeek,
          m.avatar,
          m.linkedinUrl || null,
          m.officeHoursVenue || null,
        ]
      );
    }
    console.log(`  Seeded ${MENTORS.length} mentors.`);

    // Step 7: Seed Team Members
    console.log("\n--- Step 7: Seeding Team Members ---");
    const allTeam = [
      { ...FACULTY_ADVISOR, vertical: "Advisory" as const, buildingOrObsessed: "Guiding institutional research spinouts.", socials: {}, featured: true, order: 0 },
      { ...PRESIDENT, featured: true, order: 1 },
      ...CORE_MEMBERS.map((m, idx) => ({ ...m, featured: false, order: idx + 2 })),
    ];
    for (const tm of allTeam) {
      await client.query(
        `INSERT INTO public.team_members 
          (name, role, vertical, bio, building_or_obsessed, avatar, socials, featured, display_order)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (name) DO UPDATE SET
          role = EXCLUDED.role,
          vertical = EXCLUDED.vertical,
          bio = EXCLUDED.bio,
          building_or_obsessed = EXCLUDED.building_or_obsessed,
          avatar = EXCLUDED.avatar,
          socials = EXCLUDED.socials,
          featured = EXCLUDED.featured,
          display_order = EXCLUDED.display_order`,
        [
          tm.name,
          tm.role,
          tm.vertical,
          tm.bio,
          tm.buildingOrObsessed,
          tm.avatar,
          JSON.stringify(tm.socials || {}),
          tm.featured,
          tm.order,
        ]
      );
    }
    console.log(`  Seeded ${allTeam.length} team members.`);

    // Step 8: Seed Gallery Items
    console.log("\n--- Step 8: Seeding Gallery Items ---");
    for (const g of GALLERY_ITEMS) {
      await client.query(
        `INSERT INTO public.gallery_items 
          (item_id, title, category, date, venue, caption, image_url, aspect, stamped)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (item_id) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          date = EXCLUDED.date,
          venue = EXCLUDED.venue,
          caption = EXCLUDED.caption,
          image_url = EXCLUDED.image_url,
          aspect = EXCLUDED.aspect,
          stamped = EXCLUDED.stamped`,
        [g.id, g.title, g.category, g.date, g.venue, g.caption, g.imageUrl, g.aspect, g.stamped || null]
      );
    }
    console.log(`  Seeded ${GALLERY_ITEMS.length} gallery items.`);

    // Step 9: Seed Resources
    console.log("\n--- Step 9: Seeding Resources ---");
    for (const r of RESOURCES) {
      await client.query(
        `INSERT INTO public.resources 
          (slug, title, category, read_time, one_liner, author, published_date, key_takeaways, content, downloadable_asset)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
         ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          category = EXCLUDED.category,
          read_time = EXCLUDED.read_time,
          one_liner = EXCLUDED.one_liner,
          author = EXCLUDED.author,
          published_date = EXCLUDED.published_date,
          key_takeaways = EXCLUDED.key_takeaways,
          content = EXCLUDED.content,
          downloadable_asset = EXCLUDED.downloadable_asset`,
        [
          r.slug,
          r.title,
          r.category,
          r.readTime,
          r.oneLiner,
          r.author,
          r.publishedDate,
          r.keyTakeaways,
          r.content,
          r.downloadableAsset ? JSON.stringify(r.downloadableAsset) : null,
        ]
      );
    }
    console.log(`  Seeded ${RESOURCES.length} resources.`);

    // Step 10: Seed Summit Conclaves
    console.log("\n--- Step 10: Seeding Summit Conclaves ---");
    for (const sc of SUMMIT_CONCLAVES) {
      await client.query(
        `INSERT INTO public.summit_conclaves 
          (conclave_id, title, badge, description, audience, key_sessions)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (conclave_id) DO UPDATE SET
          title = EXCLUDED.title,
          badge = EXCLUDED.badge,
          description = EXCLUDED.description,
          audience = EXCLUDED.audience,
          key_sessions = EXCLUDED.key_sessions`,
        [sc.id, sc.title, sc.badge, sc.description, sc.audience, sc.keySessions]
      );
    }
    console.log(`  Seeded ${SUMMIT_CONCLAVES.length} summit conclaves.`);

    // Step 11: Seed Ambassadors Leaderboard
    console.log("\n--- Step 11: Seeding Campus Ambassadors Leaderboard ---");
    await client.query(`TRUNCATE TABLE public.ambassadors_leaderboard;`);
    for (const ca of CA_LEADERBOARD) {
      await client.query(
        `INSERT INTO public.ambassadors_leaderboard 
          (rank, name, college, city, delegates_registered, points, badge)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [ca.rank, ca.name, ca.college, ca.city, ca.delegatesRegistered, ca.points, ca.badge]
      );
    }
    console.log(`  Seeded ${CA_LEADERBOARD.length} ambassador ranks.`);

    // Step 12: Seed The Arena Leaderboard
    console.log("\n--- Step 12: Seeding The Arena Leaderboard ---");
    for (const alb of SEEDED_LEADERBOARD) {
      await client.query(
        `INSERT INTO public.arena_leaderboard 
          (rank, handle, name, dept, year, xp, level, ideas_count, quiz_score)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         ON CONFLICT (rank) DO UPDATE SET
          handle = EXCLUDED.handle,
          name = EXCLUDED.name,
          dept = EXCLUDED.dept,
          year = EXCLUDED.year,
          xp = EXCLUDED.xp,
          level = EXCLUDED.level,
          ideas_count = EXCLUDED.ideas_count,
          quiz_score = EXCLUDED.quiz_score`,
        [
          alb.rank,
          alb.handle,
          alb.name,
          alb.dept,
          alb.year,
          alb.xp,
          alb.level,
          alb.ideasCount,
          alb.quizScore,
        ]
      );
    }
    console.log(`  Seeded ${SEEDED_LEADERBOARD.length} builder leaderboard profiles.`);

    // Step 13: Seed Live Notices
    console.log("\n--- Step 13: Seeding Arena Live Notices ---");
    for (const ln of LIVE_NOTICES) {
      await client.query(
        `INSERT INTO public.arena_notices 
          (notice_id, tag, title, timestamp_text, link_text, link_url)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (notice_id) DO UPDATE SET
          tag = EXCLUDED.tag,
          title = EXCLUDED.title,
          timestamp_text = EXCLUDED.timestamp_text,
          link_text = EXCLUDED.link_text,
          link_url = EXCLUDED.link_url`,
        [ln.id, ln.tag, ln.title, ln.timestamp, ln.linkText || null, ln.linkUrl || null]
      );
    }
    console.log(`  Seeded ${LIVE_NOTICES.length} arena live notices.`);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log("\n===============================================================");
    console.log(` SUCCESS! All frontend collections migrated and seeded to Supabase in ${elapsed}s.`);
    console.log("===============================================================");
  } catch (err: any) {
    console.error("Migration error:", err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
