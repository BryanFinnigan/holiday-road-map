import type { PageStatus } from "@/data/status";
import type { PriceBand } from "@/data/gifts";

export type GiftGuide = {
  slug: string;
  title: string;
  h1: string;
  href: string;
  eyebrow: string;
  description: string;
  intro: string;
  whoFor: string;
  buyingStrategy: string;
  whatToAvoid: string[];
  statuses: PageStatus[];
  recipientType?: string;
  budgetBand?: PriceBand;
  giftVibe?: string;
  tags: string[];
  relatedSlugs: string[];
  featured?: boolean;
  seasonalPriority: number;
};

export const giftGuides: GiftGuide[] = [
  {
    slug: "for-mom",
    title: "Gifts for Mom",
    h1: "Christmas Gifts for Mom",
    href: "/gifts/for-mom",
    eyebrow: "Recipient guide",
    description: "Thoughtful Christmas gifts for mom by budget, personality, and gift style.",
    intro: "The best Christmas gifts for mom usually say: I noticed what makes your days easier, calmer, warmer, or more enjoyable.",
    whoFor: "Moms, stepmoms, grandmothers, mother-in-law gifts, and household managers who deserve something more considered than a generic basket.",
    buyingStrategy: "Start with care, not price. Choose comfort, rest, useful home upgrades, recipe memories, paper goods, or a premium version of something she already uses.",
    whatToAvoid: ["Anything that feels like an assignment", "Fragrance-heavy items unless you know her preferences", "Decor that requires exact style knowledge"],
    statuses: ["featured", "affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    recipientType: "mom",
    tags: ["mom", "parents", "comfort", "thoughtful"],
    relatedSlugs: ["under-50", "practical", "timeless", "last-minute"],
    featured: true,
    seasonalPriority: 98
  },
  {
    slug: "for-dad",
    title: "Gifts for Dad",
    h1: "Christmas Gifts for Dad",
    href: "/gifts/for-dad",
    eyebrow: "Recipient guide",
    description: "Useful, cozy, practical, and quietly thoughtful Christmas gifts for dads.",
    intro: "Dad gifts work best when they solve a small problem, upgrade a routine, or support how he actually spends winter weekends.",
    whoFor: "Dads, stepdads, fathers-in-law, grandpas, practical men, commuters, home project people, and hard-to-shop-for adults.",
    buyingStrategy: "Look for practical winter gear, home tools, food gifts, road-trip useful items, puzzles, and comfortable home upgrades.",
    whatToAvoid: ["Novelty gifts with no second use", "Gear that requires exact specs", "Hobby equipment when you do not know the hobby well"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    recipientType: "dad",
    tags: ["dad", "practical", "tools", "winter"],
    relatedSlugs: ["under-50", "practical", "timeless", "last-minute"],
    featured: true,
    seasonalPriority: 96
  },
  {
    slug: "for-teachers",
    title: "Gifts for Teachers",
    h1: "Christmas Gifts for Teachers",
    href: "/gifts/for-teachers",
    eyebrow: "Recipient guide",
    description: "Teacher Christmas gifts that stay useful, warm, appropriate, and easy to give.",
    intro: "Teacher gifts should be useful, respectful, easy to carry home, and not too personal.",
    whoFor: "Classroom teachers, school staff, aides, tutors, coaches, daycare staff, and families buying several small gifts.",
    buyingStrategy: "Favor consumables, classroom supplies, desk comforts, paper goods, gift cards with a note, and low-clutter items.",
    whatToAvoid: ["Oversized mugs when they already receive many", "Personal fragrance", "Anything that ignores classroom wish lists or school gift policies"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    recipientType: "teacher",
    tags: ["teacher", "school", "desk", "consumable"],
    relatedSlugs: ["under-25", "under-50", "practical", "stocking-stuffers"],
    featured: true,
    seasonalPriority: 94
  },
  {
    slug: "for-coworkers",
    title: "Gifts for Coworkers",
    h1: "Christmas Gifts for Coworkers",
    href: "/gifts/for-coworkers",
    eyebrow: "Recipient guide",
    description: "Polished Christmas gifts for coworkers that feel useful without getting too personal.",
    intro: "Coworker gifts should be low-risk, appropriate, useful, and easy to understand in a quick exchange.",
    whoFor: "Coworkers, bosses, direct reports, office gift exchanges, remote teammates, and workplace Secret Santa lists.",
    buyingStrategy: "Stay with desk-friendly comforts, consumables, coffee and tea, small paper goods, local treats, and practical winter items.",
    whatToAvoid: ["Anything too intimate", "Political or joke gifts", "Strong scents", "Large items that are awkward to carry home"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    recipientType: "coworker",
    tags: ["coworker", "office", "desk", "low-risk"],
    relatedSlugs: ["under-25", "under-50", "stocking-stuffers", "last-minute"],
    featured: true,
    seasonalPriority: 91
  },
  {
    slug: "for-grandparents",
    title: "Gifts for Grandparents",
    h1: "Christmas Gifts for Grandparents",
    href: "/gifts/for-grandparents",
    eyebrow: "Recipient guide",
    description: "Warm, useful, memory-friendly Christmas gifts for grandparents.",
    intro: "Grandparent gifts often work best when they support comfort, family connection, memory keeping, food, reading, or winter routines.",
    whoFor: "Grandmas, grandpas, older relatives, family hosts, and relatives who value notes and shared memories.",
    buyingStrategy: "Pair practical comfort with a personal touch: a note, recipe, family photo plan, favorite treat, or easy shared activity.",
    whatToAvoid: ["Complicated tech without setup help", "Items requiring exact sizing", "Décor that may not match their home"],
    statuses: ["affiliate-ready", "high-priority-seo"],
    recipientType: "grandparent",
    tags: ["grandparents", "family", "comfort", "memory"],
    relatedSlugs: ["timeless", "under-50", "under-100", "practical"],
    seasonalPriority: 86
  },
  {
    slug: "for-preschoolers",
    title: "Gifts for Preschoolers",
    h1: "Christmas Gifts for Preschoolers",
    href: "/gifts/for-preschoolers",
    eyebrow: "Recipient guide",
    description: "Active, hands-on, durable Christmas gift directions for preschoolers.",
    intro: "For preschoolers, the best gift fit starts with energy level, safety, durability, and how quickly the child can start playing.",
    whoFor: "Kids around ages 3 to 5, especially active, curious, hands-on children who like movement, pretend play, vehicles, stacking, and simple challenges.",
    buyingStrategy: "Choose open-ended toys, movement-friendly gifts, pretend adventure sets, simple building, and durable pieces with age-appropriate parts.",
    whatToAvoid: ["Tiny parts", "Overly complex instructions", "Fragile items", "Sit-still activities as the main gift for energetic kids"],
    statuses: ["featured", "affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    recipientType: "preschooler",
    tags: ["preschool", "kids", "active play", "toy guide"],
    relatedSlugs: ["under-25", "under-50", "practical"],
    featured: true,
    seasonalPriority: 97
  },
  {
    slug: "under-25",
    title: "Gifts Under $25",
    h1: "Christmas Gifts Under $25",
    href: "/gifts/by-budget/under-25",
    eyebrow: "Budget guide",
    description: "Small Christmas gifts under $25 that still feel thoughtful and useful.",
    intro: "Under-$25 gifts work when they are specific, consumable, desk-friendly, cozy, or part of a useful routine.",
    whoFor: "Stockings, teachers, coworkers, neighbors, extended family, gift exchanges, and budget-conscious shoppers buying several gifts.",
    buyingStrategy: "Prioritize low-clutter gifts: tea, cocoa, desk comforts, small tools, useful accessories, puzzles, and easy-to-wrap consumables.",
    whatToAvoid: ["Cheap novelty clutter", "Items with hidden shipping costs", "Gifts that look bigger online than they are"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    budgetBand: "under-25",
    tags: ["under-25", "budget", "stocking", "teacher"],
    relatedSlugs: ["stocking-stuffers", "for-teachers", "for-coworkers", "last-minute"],
    featured: true,
    seasonalPriority: 93
  },
  {
    slug: "under-50",
    title: "Gifts Under $50",
    h1: "Christmas Gifts Under $50",
    href: "/gifts/by-budget/under-50",
    eyebrow: "Budget guide",
    description: "Thoughtful Christmas gifts under $50 by recipient and gift style.",
    intro: "The best under-$50 gifts are specific enough to feel chosen, practical enough to get used, and simple enough to buy without overthinking the season.",
    whoFor: "Parents, friends, teachers, coworkers, siblings, in-laws, neighbors, and shoppers trying to keep a list under control.",
    buyingStrategy: "Choose a clear lane: cozy, useful, consumable, personalized, local, desk-friendly, kitchen-friendly, or easy to mail.",
    whatToAvoid: ["Fake premium gifts", "Fragile items with poor shipping reviews", "Products where the accessory costs more than the gift"],
    statuses: ["featured", "affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    budgetBand: "under-50",
    tags: ["under-50", "budget", "high-intent", "affiliate"],
    relatedSlugs: ["for-mom", "for-dad", "for-teachers", "practical"],
    featured: true,
    seasonalPriority: 99
  },
  {
    slug: "under-100",
    title: "Gifts Under $100",
    h1: "Christmas Gifts Under $100",
    href: "/gifts/by-budget/under-100",
    eyebrow: "Budget guide",
    description: "Christmas gifts under $100 that feel more substantial without drifting into luxury guesswork.",
    intro: "Under-$100 gifts should feel like meaningful upgrades: better home comfort, organization, winter gear, or family-use items.",
    whoFor: "Parents, partners, grandparents, hosts, family gifts, and higher-budget exchanges.",
    buyingStrategy: "Focus on durable usefulness, home comfort, seasonal gear, and gifts that can serve a person or household through winter.",
    whatToAvoid: ["Tech with poor compatibility", "Style-specific décor", "Oversized gifts without a clear home"],
    statuses: ["affiliate-ready", "high-priority-seo"],
    budgetBand: "under-100",
    tags: ["under-100", "home", "substantial", "family"],
    relatedSlugs: ["for-mom", "for-dad", "for-grandparents", "timeless"],
    seasonalPriority: 79
  },
  {
    slug: "stocking-stuffers",
    title: "Stocking Stuffers",
    h1: "Christmas Stocking Stuffers",
    href: "/gifts/stocking-stuffers",
    eyebrow: "Gift style guide",
    description: "Useful stocking stuffer ideas that do not feel like throwaway clutter.",
    intro: "A strong stocking stuffer is small, easy to enjoy, and specific enough that it does not feel like filler.",
    whoFor: "Kids, adults, teachers, coworkers, neighbors, siblings, and last-minute shoppers filling several stockings.",
    buyingStrategy: "Favor consumables, mini comforts, small tools, paper goods, socks, desk accessories, and easy repeat-buy categories.",
    whatToAvoid: ["Plastic clutter", "Items with no clear use", "Small gifts with unsafe parts for young children"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    giftVibe: "stocking",
    tags: ["stocking", "under-25", "small gifts", "consumable"],
    relatedSlugs: ["under-25", "for-teachers", "for-coworkers", "last-minute"],
    featured: true,
    seasonalPriority: 95
  },
  {
    slug: "practical",
    title: "Practical Gifts",
    h1: "Practical Christmas Gifts People Will Actually Use",
    href: "/gifts/practical",
    eyebrow: "Gift style guide",
    description: "Practical Christmas gifts with a clear role, use case, and reason to exist.",
    intro: "Practical gifts should not feel boring. They should remove friction from everyday life.",
    whoFor: "Hard-to-shop-for adults, parents, dads, teachers, new homeowners, commuters, and shoppers who want useful gifts.",
    buyingStrategy: "Choose gifts with obvious use cases: organization, warmth, food, desk comfort, car preparedness, tools, wrapping supplies, and household systems.",
    whatToAvoid: ["Products that create another chore", "Needs you do not know they have", "Overly technical versions of simple gifts"],
    statuses: ["featured", "affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    giftVibe: "practical",
    tags: ["practical", "useful", "home", "tools"],
    relatedSlugs: ["under-50", "for-dad", "for-mom", "last-minute"],
    featured: true,
    seasonalPriority: 96
  },
  {
    slug: "timeless",
    title: "Timeless Gifts",
    h1: "Timeless Christmas Gifts That Do Not Feel Trendy",
    href: "/gifts/timeless",
    eyebrow: "Gift style guide",
    description: "Classic Christmas gifts with lasting usefulness, warmth, and broad appeal.",
    intro: "Timeless gifts work because they feel useful, beautiful, familiar, and a little more considered than the everyday version.",
    whoFor: "Parents, grandparents, hosts, in-laws, classic dressers, readers, homebodies, and people who dislike gimmicks.",
    buyingStrategy: "Look for paper goods, blankets, food gifts, books, puzzles, classic kitchen items, and comfort upgrades.",
    whatToAvoid: ["Trend-dependent novelty", "Overbranded items", "Decor that locks someone into a style"],
    statuses: ["affiliate-ready", "high-priority-seo"],
    giftVibe: "timeless",
    tags: ["timeless", "classic", "home", "family"],
    relatedSlugs: ["for-mom", "for-grandparents", "under-50", "under-100"],
    seasonalPriority: 82
  },
  {
    slug: "funny",
    title: "Funny Gifts",
    h1: "Funny Christmas Gifts That Still Feel Giftable",
    href: "/gifts/funny",
    eyebrow: "Gift style guide",
    description: "Funny Christmas gift ideas that avoid junk, mean jokes, and one-laugh clutter.",
    intro: "Funny gifts should still be useful, tasteful, or connected to a real interest so they survive past the first laugh.",
    whoFor: "Siblings, friends, white elephant exchanges, coworkers you know well, and people who like playful gifts.",
    buyingStrategy: "Choose humor around shared interests, cozy nights, food, games, desk life, or harmless seasonal rituals.",
    whatToAvoid: ["Mean jokes", "Embarrassing workplace gifts", "Products that are funny only in the listing title"],
    statuses: ["coming-soon", "high-priority-seo"],
    giftVibe: "funny",
    tags: ["funny", "goofy", "white elephant", "playful"],
    relatedSlugs: ["stocking-stuffers", "under-25", "for-coworkers", "last-minute"],
    seasonalPriority: 64
  },
  {
    slug: "last-minute",
    title: "Last-Minute Gifts",
    h1: "Last-Minute Christmas Gifts That Still Feel Thoughtful",
    href: "/gifts/last-minute",
    eyebrow: "Timing guide",
    description: "Last-minute Christmas gifts with safer categories, easy pickup, and useful fallback strategies.",
    intro: "Last-minute gifts work best when they are simple, available, easy to wrap, and still connected to the person.",
    whoFor: "Late shoppers, pickup shoppers, office exchanges, travel-weekend buyers, and anyone who missed a shipping cutoff.",
    buyingStrategy: "Choose consumables, local gift cards with notes, bookstore stops, pantry upgrades, practical tools, wrapping kits, and gifts that can be bought locally.",
    whatToAvoid: ["Unverified shipping promises", "Personalized items too close to Christmas", "Fragile gifts when travel is involved"],
    statuses: ["affiliate-ready", "high-priority-seo", "high-priority-revenue"],
    giftVibe: "last-minute",
    tags: ["last-minute", "pickup", "shipping", "local"],
    relatedSlugs: ["under-25", "under-50", "stocking-stuffers", "practical"],
    featured: true,
    seasonalPriority: 97
  }
];
