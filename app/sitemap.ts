import type { MetadataRoute } from "next";
import { giftGuides } from "@/lib/giftGuides";
import { localMarkets } from "@/lib/localMarkets";
import { plannerPages } from "@/lib/plannerPages";
import { siteConfig } from "@/lib/seo";
import { wrappingTutorials } from "@/lib/wrappingTutorials";

const staticRoutes = [
  "",
  "/giftmatch",
  "/gifts",
  "/guidebook",
  "/guidebook/gifts",
  "/guidebook/wrapping",
  "/guidebook/planning",
  "/guidebook/decorating",
  "/guidebook/hosting",
  "/printables",
  "/planner",
  "/planner/holiday-road-map-planner",
  "/planner/september-1-january-15",
  "/merrymap",
  "/christmas-near-me",
  "/christmas-near-me/michigan",
  "/christmas-near-me/illinois",
  "/christmas-near-me/ohio",
  "/newsletter"
];

const routes = Array.from(new Set([
  ...staticRoutes,
  ...giftGuides.map((guide) => guide.href),
  ...plannerPages.map((page) => page.href),
  ...localMarkets.map((market) => market.href),
  ...wrappingTutorials.map((tutorial) => tutorial.href)
]));

function getPriority(route: string) {
  if (route === "") return 1;
  if (["/giftmatch", "/gifts", "/printables", "/planner", "/merrymap"].includes(route)) return 0.9;
  if (route.includes("by-budget") || route.includes("for-")) return 0.82;
  if (route.includes("christmas-near-me")) return 0.72;
  return 0.7;
}

function getChangeFrequency(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route.includes("christmas-near-me")) return "weekly";
  if (route.includes("gifts")) return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-09"),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route)
  }));
}
