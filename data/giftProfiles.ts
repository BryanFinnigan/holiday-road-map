export type GiftProfile = {
  id: string;
  label: string;
  recipient: string;
  budget: string;
  personality: string;
  giftVibe: string;
  avoidances: string;
  recommendedGuideSlugs: string[];
  matchSummary: string;
};

export const giftProfiles: GiftProfile[] = [
  {
    id: "male-4-energetic",
    label: "Male, 4, energetic",
    recipient: "male preschooler age 4",
    budget: "under 50",
    personality: "energetic curious playful active",
    giftVibe: "hands-on movement-based durable fun",
    avoidances: "tiny parts fragile complex instructions sit-still",
    recommendedGuideSlugs: ["for-preschoolers", "under-50", "practical"],
    matchSummary: "Best suited for active play, simple building, pretend adventure, vehicle-themed toys, and durable hands-on gifts that are easy to start using."
  },
  {
    id: "busy-practical-mom",
    label: "Busy practical mom",
    recipient: "mom",
    budget: "under 50",
    personality: "busy practical organized comfort-seeking",
    giftVibe: "useful cozy thoughtful everyday upgrade",
    avoidances: "fragrance clutter complicated setup",
    recommendedGuideSlugs: ["for-mom", "under-50", "practical"],
    matchSummary: "Best suited for comfort, planning, home, kitchen, paper, and rest-focused gifts that make ordinary days easier."
  },
  {
    id: "low-risk-coworker",
    label: "Low-risk coworker",
    recipient: "coworker",
    budget: "under 25",
    personality: "professional practical low-clutter",
    giftVibe: "polished useful consumable desk-friendly",
    avoidances: "personal fragrance politics oversized",
    recommendedGuideSlugs: ["for-coworkers", "under-25", "stocking-stuffers"],
    matchSummary: "Best suited for desk comforts, coffee or tea, small paper goods, local treats, and polished gifts that do not get too personal."
  }
];
