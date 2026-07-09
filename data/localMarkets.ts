import type { PageStatus } from "@/data/status";

export type LocalMarket = {
  city: string;
  state: string;
  stateSlug: string;
  slug: string;
  href: string;
  statuses: PageStatus[];
  lastUpdated: string;
  verificationStatus: "sample" | "planned" | "needs-primary-source-review" | "verified";
  eventCategories: string[];
  officialSourceUrls: string[];
  localGiftStopTypes: string[];
  summary: string;
};

export const localMarkets: LocalMarket[] = [
  {
    city: "Detroit",
    state: "Michigan",
    stateSlug: "michigan",
    slug: "detroit",
    href: "/christmas-near-me/michigan/detroit",
    statuses: ["sample", "needs-verification", "high-priority-seo"],
    lastUpdated: "2026-07-09",
    verificationStatus: "sample",
    eventCategories: ["Tree lightings", "Christmas lights", "Holiday markets", "Tree farms", "Family activities", "Date ideas", "Free events"],
    officialSourceUrls: [],
    localGiftStopTypes: ["Independent bookstores", "Maker markets", "Museum stores", "Chocolate shops", "Florists", "Specialty food shops"],
    summary: "Detroit is the first sample local SEO page. It demonstrates the page shape but requires primary-source verification before real listings are promoted."
  },
  {
    city: "Chicago",
    state: "Illinois",
    stateSlug: "illinois",
    slug: "chicago",
    href: "/christmas-near-me/illinois/chicago",
    statuses: ["coming-soon", "needs-verification", "high-priority-seo"],
    lastUpdated: "2026-07-09",
    verificationStatus: "planned",
    eventCategories: ["Downtown holiday events", "Markets", "Lights", "Ice skating", "Family activities", "Date ideas"],
    officialSourceUrls: [],
    localGiftStopTypes: ["Bookstores", "Food halls", "Museum shops", "Maker markets", "Neighborhood boutiques"],
    summary: "Planned MerryMap market page for Chicago. No event listings should be added until official sources are reviewed."
  },
  {
    city: "Columbus",
    state: "Ohio",
    stateSlug: "ohio",
    slug: "columbus",
    href: "/christmas-near-me/ohio/columbus",
    statuses: ["coming-soon", "needs-verification", "high-priority-seo"],
    lastUpdated: "2026-07-09",
    verificationStatus: "planned",
    eventCategories: ["Holiday events", "Lights", "Markets", "Tree farms", "Family activities", "Free events"],
    officialSourceUrls: [],
    localGiftStopTypes: ["Local gift shops", "Bookstores", "Specialty food shops", "Craft markets", "Florists"],
    summary: "Planned MerryMap market page for Columbus. It should remain clearly marked until listings are researched and verified."
  }
];
