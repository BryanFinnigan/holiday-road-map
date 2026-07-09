import { giftGuides, type GiftGuide } from "@/data/giftGuides";

export { giftGuides };
export type { GiftGuide };

export function getGiftGuideBySlug(slug: string) {
  return giftGuides.find((guide) => guide.slug === slug);
}

export function getFeaturedGiftGuides(limit = 6) {
  return giftGuides
    .filter((guide) => guide.featured || guide.statuses.includes("featured"))
    .sort((a, b) => b.seasonalPriority - a.seasonalPriority)
    .slice(0, limit);
}

export function getGiftGuidesBySlugs(slugs: string[], limit?: number) {
  const slugSet = new Set(slugs);
  const results = giftGuides
    .filter((guide) => slugSet.has(guide.slug))
    .sort((a, b) => b.seasonalPriority - a.seasonalPriority);

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

export function getGiftGuideMetadata(slug: string) {
  const guide = getGiftGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Christmas Gift Guide",
      description: "Browse Holiday Road Map Christmas gift guides by recipient, budget, and gift style.",
      path: "/gifts"
    };
  }

  return {
    title: guide.h1,
    description: guide.description,
    path: guide.href
  };
}
