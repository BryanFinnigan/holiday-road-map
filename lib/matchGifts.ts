import { GiftRecord, gifts } from "@/data/gifts";

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
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const parseBudget = (budget: string): number | null => {
  const numeric = budget.match(/\d+/g)?.map(Number) ?? [];
  if (numeric.length === 0) return null;
  return Math.max(...numeric);
};

const includesAny = (source: string[], targets: string[]) =>
  source.some((item) => targets.includes(item));

export function matchGifts(input: GiftMatchInput, source: GiftRecord[] = gifts): GiftMatchResult[] {
  const recipientTokens = normalize(input.recipient);
  const personalityTokens = normalize(input.personality);
  const vibeTokens = normalize(input.vibe);
  const avoidanceTokens = normalize(input.avoidances);
  const maxBudget = parseBudget(input.budget);

  return source
    .map((gift) => {
      let score = 0;
      const matchReasons: string[] = [];
      const giftTags = gift.tags.map((tag) => tag.toLowerCase());
      const recipientHints = gift.recipientHints.map((hint) => hint.toLowerCase());
      const personalityHints = gift.personalityHints.map((hint) => hint.toLowerCase());
      const vibeHints = gift.vibeHints.map((hint) => hint.toLowerCase());
      const avoidIf = gift.avoidIf.flatMap(normalize);

      if (recipientTokens.length && includesAny(recipientHints, recipientTokens)) {
        score += 4;
        matchReasons.push("Recipient fit");
      }

      if (personalityTokens.length && includesAny([...personalityHints, ...giftTags], personalityTokens)) {
        score += 3;
        matchReasons.push("Personality match");
      }

      if (vibeTokens.length && includesAny([...vibeHints, ...giftTags], vibeTokens)) {
        score += 3;
        matchReasons.push("Gift vibe match");
      }

      if (maxBudget !== null) {
        if (gift.approximatePrice <= maxBudget) {
          score += 3;
          matchReasons.push("Within budget");
        } else if (gift.approximatePrice <= maxBudget * 1.2) {
          score += 1;
          matchReasons.push("Close to budget");
        } else {
          score -= 4;
        }
      }

      if (avoidanceTokens.length && includesAny(avoidIf, avoidanceTokens)) {
        score -= 5;
        matchReasons.push("Review avoidances");
      }

      if (score === 0) {
        score = 1;
        matchReasons.push("Broad seasonal fit");
      }

      return { ...gift, score, matchReasons };
    })
    .sort((a, b) => b.score - a.score || a.approximatePrice - b.approximatePrice)
    .slice(0, 6);
}
