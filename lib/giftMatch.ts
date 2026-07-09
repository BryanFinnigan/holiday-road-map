import { gifts, type GiftRecord, type PriceBand } from "@/data/gifts";

export type GiftMatchInput = {
  recipient: string;
  budget: string;
  personality: string;
  vibe: string;
  avoidances: string;
};

export type GiftMatchResult = GiftRecord & {
  score: number;
  matchReasons: string[];
  relatedGuideSlugs: string[];
};

const priceBandMax: Record<PriceBand, number> = {
  "under-25": 25,
  "under-50": 50,
  "under-100": 100,
  premium: 999
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const normalizeList = (items: string[] = []) => items.flatMap(normalize);

const parseBudget = (budget: string): number | null => {
  const lower = budget.toLowerCase();
  if (lower.includes("under-25")) return 25;
  if (lower.includes("under-50")) return 50;
  if (lower.includes("under-100")) return 100;
  if (lower.includes("premium")) return 999;

  const numeric = budget.match(/\d+/g)?.map(Number) ?? [];
  if (numeric.length === 0) return null;
  return Math.max(...numeric);
};

const hasOverlap = (source: string[], targets: string[]) =>
  targets.length > 0 && source.some((item) => targets.includes(item));

const hasPartialOverlap = (source: string[], targets: string[]) =>
  targets.length > 0 && source.some((item) => targets.some((target) => item.includes(target) || target.includes(item)));

function guideSlugsFromInput(input: GiftMatchInput) {
  const recipientTokens = normalize(input.recipient);
  const budget = parseBudget(input.budget);
  const vibeTokens = normalize(input.vibe);
  const guideSlugs = new Set<string>();

  recipientTokens.forEach((token) => {
    if (["mom", "mother"].includes(token)) guideSlugs.add("for-mom");
    if (["dad", "father"].includes(token)) guideSlugs.add("for-dad");
    if (["teacher", "teachers"].includes(token)) guideSlugs.add("for-teachers");
    if (["coworker", "coworkers", "boss", "office"].includes(token)) guideSlugs.add("for-coworkers");
    if (["grandma", "grandpa", "grandparent", "grandparents"].includes(token)) guideSlugs.add("for-grandparents");
    if (["preschool", "preschooler", "kid", "child", "4"].includes(token)) guideSlugs.add("for-preschoolers");
  });

  if (budget !== null) {
    if (budget <= 25) guideSlugs.add("under-25");
    if (budget <= 50) guideSlugs.add("under-50");
    if (budget <= 100) guideSlugs.add("under-100");
  }

  if (vibeTokens.includes("practical")) guideSlugs.add("practical");
  if (vibeTokens.includes("timeless") || vibeTokens.includes("classic")) guideSlugs.add("timeless");
  if (vibeTokens.includes("funny") || vibeTokens.includes("goofy")) guideSlugs.add("funny");
  if (vibeTokens.includes("last-minute") || vibeTokens.includes("late")) guideSlugs.add("last-minute");

  return Array.from(guideSlugs);
}

export function matchGifts(input: GiftMatchInput, source: GiftRecord[] = gifts): GiftMatchResult[] {
  const recipientTokens = normalize(input.recipient);
  const personalityTokens = normalize(input.personality);
  const vibeTokens = normalize(input.vibe);
  const avoidanceTokens = normalize(input.avoidances);
  const maxBudget = parseBudget(input.budget);
  const relatedGuideSlugs = guideSlugsFromInput(input);

  return source
    .map((gift) => {
      let score = gift.featured ? 1 : 0;
      const matchReasons: string[] = [];
      const giftRecipientTokens = normalizeList([...gift.bestFor, ...gift.recipientTypes, ...(gift.ageRanges ?? [])]);
      const giftPersonalityTokens = normalizeList([...(gift.personalities ?? []), ...(gift.interests ?? []), ...gift.tags]);
      const giftVibeTokens = normalizeList([...(gift.giftVibes ?? []), ...gift.tags, gift.category]);
      const giftAvoidanceTokens = normalizeList(gift.avoidFor ?? []);

      if (hasPartialOverlap(giftRecipientTokens, recipientTokens)) {
        score += 5;
        matchReasons.push("Recipient fit");
      }

      if (hasPartialOverlap(giftPersonalityTokens, personalityTokens)) {
        score += 4;
        matchReasons.push("Personality match");
      }

      if (hasPartialOverlap(giftVibeTokens, vibeTokens)) {
        score += 4;
        matchReasons.push("Gift vibe match");
      }

      if (maxBudget !== null) {
        const bandMax = priceBandMax[gift.priceBand];
        const approximatePrice = gift.approximatePrice ?? bandMax;

        if (approximatePrice <= maxBudget || bandMax <= maxBudget) {
          score += 4;
          matchReasons.push("Within budget");
        } else if (approximatePrice <= maxBudget * 1.2) {
          score += 1;
          matchReasons.push("Close to budget");
        } else {
          score -= 4;
        }
      }

      if (hasOverlap(giftAvoidanceTokens, avoidanceTokens) || hasPartialOverlap(giftAvoidanceTokens, avoidanceTokens)) {
        score -= 6;
        matchReasons.push("Review avoidances");
      }

      if (gift.status === "live" && gift.affiliateUrl) {
        score += 2;
        matchReasons.push("Live affiliate option");
      }

      if (score <= 0) {
        score = 1;
        matchReasons.push("Broad seasonal fit");
      }

      return {
        ...gift,
        score,
        matchReasons,
        relatedGuideSlugs: Array.from(new Set([...(gift.guideSlugs ?? []), ...relatedGuideSlugs]))
      };
    })
    .sort((a, b) => b.score - a.score || (b.seasonalPriority ?? 0) - (a.seasonalPriority ?? 0))
    .slice(0, 6);
}
