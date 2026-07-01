import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/giftmatch",
  "/guidebook",
  "/guidebook/gifts",
  "/guidebook/wrapping",
  "/guidebook/planning",
  "/guidebook/decorating",
  "/guidebook/hosting",
  "/printables",
  "/planner",
  "/merrymap",
  "/christmas-near-me/michigan/detroit",
  "/gifts/for-mom",
  "/gifts/by-budget/under-50"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-01"),
    changeFrequency: route.includes("christmas-near-me") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("giftmatch") ? 0.9 : 0.7
  }));
}
