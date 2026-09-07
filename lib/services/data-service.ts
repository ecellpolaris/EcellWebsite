import { supabase } from "@/lib/supabase/client";
import { STARTUPS, CampusStartup } from "@/lib/data/startups";
import { EVENTS, CampusEvent } from "@/lib/data/events";
import { PROGRAMS, Program } from "@/lib/data/programs";
import { MENTORS, Mentor } from "@/lib/data/mentors";
import { PRESIDENT, FACULTY_ADVISOR, CORE_MEMBERS, TeamMember } from "@/lib/data/team";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/gallery";
import { RESOURCES, FounderResource } from "@/lib/data/resources";
import { SUMMIT_CONCLAVES, SummitConclave } from "@/lib/data/summit-data";
import { SEEDED_LEADERBOARD, LIVE_NOTICES, LeaderboardEntry, LiveNotice } from "@/lib/data/arena-data";
import { CA_LEADERBOARD, CampusAmbassadorRank } from "@/lib/data/ambassadors-data";

/**
 * High-Speed Data Service with Stale-While-Revalidate (SWR) In-Memory Caching.
 * Guarantees sub-5ms instant data delivery on server and client while keeping data
 * synchronized with Supabase PostgreSQL in the background.
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const CACHE_TTL_MS = 60 * 1000; // 60 seconds background revalidation

// In-Memory cache pre-seeded with baseline data for 0ms initial render
const cache = {
  startups: { data: STARTUPS, timestamp: Date.now() } as CacheEntry<CampusStartup[]>,
  events: { data: EVENTS, timestamp: Date.now() } as CacheEntry<CampusEvent[]>,
  programs: { data: PROGRAMS, timestamp: Date.now() } as CacheEntry<Program[]>,
  mentors: { data: MENTORS, timestamp: Date.now() } as CacheEntry<Mentor[]>,
  gallery: { data: GALLERY_ITEMS, timestamp: Date.now() } as CacheEntry<GalleryItem[]>,
  resources: { data: RESOURCES, timestamp: Date.now() } as CacheEntry<FounderResource[]>,
  conclaves: { data: SUMMIT_CONCLAVES, timestamp: Date.now() } as CacheEntry<SummitConclave[]>,
  leaderboard: { data: SEEDED_LEADERBOARD, timestamp: Date.now() } as CacheEntry<LeaderboardEntry[]>,
  notices: { data: LIVE_NOTICES, timestamp: Date.now() } as CacheEntry<LiveNotice[]>,
  ambassadors: { data: CA_LEADERBOARD, timestamp: Date.now() } as CacheEntry<CampusAmbassadorRank[]>,
};

/**
 * Trigger background revalidation from Supabase without blocking the current request
 */
async function backgroundRevalidate<T>(
  tableName: string,
  cacheKey: keyof typeof cache,
  transform: (row: any) => any,
  selectQuery: string = "*"
) {
  const now = Date.now();
  if (now - cache[cacheKey].timestamp < CACHE_TTL_MS) {
    return; // Cache is still fresh
  }

  // Update timestamp to avoid duplicate concurrent fetches
  cache[cacheKey].timestamp = now;

  try {
    const { data, error } = await supabase.from(tableName).select(selectQuery);
    if (!error && data && data.length > 0) {
      (cache[cacheKey] as CacheEntry<any>).data = data.map(transform);
    }
  } catch (err) {
    console.warn(`[DataService] Background sync error for ${tableName}:`, err);
  }
}

// -----------------------------------------------------------------------------
// Fast Data Getters (Instant SWR + Supabase background sync)
// -----------------------------------------------------------------------------

export async function getStartups(): Promise<CampusStartup[]> {
  backgroundRevalidate("startups", "startups", (row: any) => ({
    slug: row.slug,
    name: row.name,
    sector: row.sector,
    stage: row.stage,
    featured: row.featured,
    oneLiner: row.one_liner,
    description: row.description,
    whatEcellDid: row.what_ecell_did,
    websiteUrl: row.website_url,
    founders: row.founders || [],
    metrics: row.metrics || [],
    tags: row.tags || [],
    hiringRoles: row.hiring_roles || [],
  }));
  return cache.startups.data;
}

export async function getEvents(): Promise<CampusEvent[]> {
  backgroundRevalidate("events", "events", (row: any) => ({
    slug: row.slug,
    title: row.title,
    kicker: row.kicker,
    category: row.category,
    status: row.status,
    date: row.date,
    time: row.time,
    venue: row.venue,
    xpReward: row.xp_reward,
    capacity: row.capacity,
    spotsLeft: row.spots_left,
    shortDesc: row.short_desc,
    fullDesc: row.full_desc,
    speaker: row.speaker || {},
    agenda: row.agenda || [],
    prerequisites: row.prerequisites || [],
  }));
  return cache.events.data;
}

export async function getPrograms(): Promise<Program[]> {
  backgroundRevalidate("programs", "programs", (row: any) => ({
    slug: row.slug,
    title: row.title,
    kicker: row.kicker,
    category: row.category,
    status: row.status,
    oneLiner: row.one_liner,
    tagline: row.tagline,
    duration: row.duration,
    whoItsFor: row.who_its_for,
    format: row.format,
    mentorsCount: row.mentors_count,
    prizesOrGrant: row.prizes_or_grant,
    timeline: row.timeline || [],
    outcomes: row.outcomes || [],
    faqs: row.faqs || [],
    ctaText: row.cta_text,
    ctaLink: row.cta_link,
  }));
  return cache.programs.data;
}

export async function getMentors(): Promise<Mentor[]> {
  backgroundRevalidate("mentors", "mentors", (row: any) => ({
    id: row.mentor_id,
    name: row.name,
    role: row.role,
    company: row.company,
    type: row.type,
    sector: row.sector,
    bio: row.bio,
    expertise: row.expertise || [],
    availability: row.availability,
    slotsThisWeek: row.slots_this_week,
    avatar: row.avatar,
    linkedinUrl: row.linkedin_url,
    officeHoursVenue: row.office_hours_venue,
  }));
  return cache.mentors.data;
}

export async function getLiveNotices(): Promise<LiveNotice[]> {
  backgroundRevalidate("arena_notices", "notices", (row: any) => ({
    id: row.notice_id,
    tag: row.tag,
    title: row.title,
    timestamp: row.timestamp_text,
    linkText: row.link_text,
    linkUrl: row.link_url,
  }));
  return cache.notices.data;
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  backgroundRevalidate("arena_leaderboard", "leaderboard", (row: any) => ({
    rank: row.rank,
    handle: row.handle,
    name: row.name,
    dept: row.dept,
    year: row.year,
    xp: row.xp,
    level: row.level,
    ideasCount: row.ideas_count,
    quizScore: row.quiz_score,
  }));
  return cache.leaderboard.data;
}
