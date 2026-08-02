import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";

const SITE_URL = "https://crevis.agency";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: location.level === "country" ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...locationRoutes];
}
