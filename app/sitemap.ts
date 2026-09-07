import { MetadataRoute } from "next";
import { PROGRAMS } from "@/lib/data/programs";
import { EVENTS } from "@/lib/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ecell.polariscampus.com";

  const staticRoutes = [
    "",
    "/about",
    "/programs",
    "/events",
    "/summit",
    "/startups",
    "/mentors",
    "/team",
    "/arena",
    "/arena/quiz",
    "/join",
    "/ambassadors",
    "/resources",
    "/gallery",
    "/contact",
    "/idea",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const programRoutes = PROGRAMS.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eventRoutes = EVENTS.map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes, ...eventRoutes];
}
