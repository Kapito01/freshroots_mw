import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/operations", priority: 0.8 },
  { path: "/agro-store", priority: 0.8 },
  { path: "/corporate-supply", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

  // Do not emit localhost or placeholder URLs in a production sitemap.
  if (!siteUrl) return [];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path || "/"}`,
    changeFrequency: "monthly",
    priority,
  }));
}
