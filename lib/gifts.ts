import { gifts, priceBandLabels, type GiftRecord, type GiftStatus, type PriceBand } from "@/data/gifts";

export { gifts, priceBandLabels };
export type { GiftRecord, GiftStatus, PriceBand };

export function getGiftsByGuideSlug(guideSlug: string, limit?: number) {
  const results = gifts
    .filter((gift) => gift.guideSlugs?.includes(guideSlug))
    .sort((a, b) => (b.seasonalPriority ?? 0) - (a.seasonalPriority ?? 0));

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

export function getFeaturedGifts(limit = 6) {
  return gifts
    .filter((gift) => gift.featured)
    .sort((a, b) => (b.seasonalPriority ?? 0) - (a.seasonalPriority ?? 0))
    .slice(0, limit);
}

export function getAffiliateReadyGifts(limit?: number) {
  const results = gifts
    .filter((gift) => gift.status === "live" && Boolean(gift.affiliateUrl))
    .sort((a, b) => (b.seasonalPriority ?? 0) - (a.seasonalPriority ?? 0));

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

export function getGiftStatusLabel(status: GiftStatus) {
  if (status === "live") return "Live link";
  if (status === "research-needed") return "Research needed";
  return "Editorial sample";
}

export function getPriceBandLabel(priceBand: PriceBand) {
  return priceBandLabels[priceBand];
}
