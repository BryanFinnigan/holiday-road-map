export type GiftRecord = {
  id: string;
  title: string;
  priceBand: "Under $10" | "Under $25" | "Under $50" | "$50–$100" | "$100+";
  approximatePrice: number;
  bestFor: string;
  whyItWorks: string;
  tags: string[];
  recipientHints: string[];
  personalityHints: string[];
  vibeHints: string[];
  avoidIf: string[];
};

export const gifts: GiftRecord[] = [
  {
    id: "ceramic-mug-warmer",
    title: "Desk Mug Warmer Set",
    priceBand: "Under $25",
    approximatePrice: 24,
    bestFor: "Coffee lovers, remote workers, teachers",
    whyItWorks: "It turns a daily habit into a small comfort without feeling overly personal or expensive.",
    tags: ["cozy", "desk", "practical", "coffee"],
    recipientHints: ["mom", "dad", "teacher", "coworker", "friend"],
    personalityHints: ["practical", "busy", "homebody", "organized"],
    vibeHints: ["cozy", "useful", "low-risk"],
    avoidIf: ["no caffeine", "minimal desk space"]
  },
  {
    id: "linen-recipe-journal",
    title: "Linen Recipe Journal",
    priceBand: "Under $50",
    approximatePrice: 36,
    bestFor: "Home cooks, grandparents, newlyweds",
    whyItWorks: "It feels personal and heirloom-like, especially when paired with a handwritten recipe or family note.",
    tags: ["kitchen", "sentimental", "planner", "family"],
    recipientHints: ["mom", "grandma", "host", "partner"],
    personalityHints: ["sentimental", "creative", "organized"],
    vibeHints: ["meaningful", "classic", "home"],
    avoidIf: ["does not cook", "prefers digital tools"]
  },
  {
    id: "wool-blend-throw",
    title: "Soft Wool-Blend Throw Blanket",
    priceBand: "$50–$100",
    approximatePrice: 78,
    bestFor: "Parents, hosts, homebodies",
    whyItWorks: "A warm, attractive throw is useful all winter and can make a room feel instantly more finished.",
    tags: ["cozy", "home", "winter", "hosting"],
    recipientHints: ["mom", "dad", "host", "in-laws"],
    personalityHints: ["homebody", "design-minded", "comfort-seeking"],
    vibeHints: ["cozy", "premium", "safe"],
    avoidIf: ["pet hair concerns", "wool sensitivity"]
  },
  {
    id: "stocking-sampler-tea",
    title: "Small-Batch Tea Sampler",
    priceBand: "Under $25",
    approximatePrice: 18,
    bestFor: "Stockings, coworkers, readers",
    whyItWorks: "Consumable gifts are easy to enjoy, easy to share, and rarely add clutter.",
    tags: ["stocking", "cozy", "consumable", "tea"],
    recipientHints: ["coworker", "friend", "mom", "teacher"],
    personalityHints: ["calm", "reader", "homebody"],
    vibeHints: ["cozy", "simple", "low-clutter"],
    avoidIf: ["caffeine sensitivity", "tea dislike"]
  },
  {
    id: "portable-phone-tripod",
    title: "Portable Phone Tripod",
    priceBand: "Under $25",
    approximatePrice: 22,
    bestFor: "Content creators, families, travelers",
    whyItWorks: "It solves the familiar problem of taking better group photos without asking a stranger.",
    tags: ["tech", "travel", "photos", "useful"],
    recipientHints: ["teen", "friend", "sibling", "parent"],
    personalityHints: ["creative", "social", "traveler"],
    vibeHints: ["fun", "practical", "tech"],
    avoidIf: ["already has camera gear", "prefers no gadgets"]
  },
  {
    id: "nice-olive-oil",
    title: "Finishing Olive Oil",
    priceBand: "Under $50",
    approximatePrice: 32,
    bestFor: "Hosts, food lovers, hard-to-shop-for adults",
    whyItWorks: "A high-quality pantry upgrade feels thoughtful but does not require knowing someone’s exact size or style.",
    tags: ["food", "hosting", "premium", "consumable"],
    recipientHints: ["host", "dad", "mom", "coworker", "neighbor"],
    personalityHints: ["foodie", "host", "practical"],
    vibeHints: ["elevated", "useful", "low-clutter"],
    avoidIf: ["diet restrictions", "does not cook"]
  },
  {
    id: "puzzle-map",
    title: "Vintage-Style Map Puzzle",
    priceBand: "Under $25",
    approximatePrice: 20,
    bestFor: "Families, road-trip people, cozy nights",
    whyItWorks: "It fits the season’s slower evenings and gives people something screen-free to do together.",
    tags: ["nostalgic", "family", "games", "map"],
    recipientHints: ["family", "dad", "grandparent", "friend"],
    personalityHints: ["nostalgic", "patient", "curious"],
    vibeHints: ["retro", "cozy", "family"],
    avoidIf: ["hates puzzles", "limited table space"]
  },
  {
    id: "heated-car-blanket",
    title: "Heated Car Blanket",
    priceBand: "Under $50",
    approximatePrice: 42,
    bestFor: "Commuters, road trippers, winter drivers",
    whyItWorks: "It has a practical winter-road feel and can be useful for cold mornings, tailgates, or emergency kits.",
    tags: ["road", "winter", "car", "practical"],
    recipientHints: ["dad", "mom", "commuter", "college student"],
    personalityHints: ["practical", "traveler", "prepared"],
    vibeHints: ["useful", "winter", "road-trip"],
    avoidIf: ["no car", "prefers home gifts"]
  },
  {
    id: "personalized-stationery",
    title: "Personalized Stationery Set",
    priceBand: "Under $50",
    approximatePrice: 45,
    bestFor: "Writers, teachers, thoughtful note-senders",
    whyItWorks: "It feels tailored without becoming too intimate, and it gives everyday communication a small sense of occasion.",
    tags: ["personalized", "paper", "classic", "thoughtful"],
    recipientHints: ["mom", "teacher", "coworker", "friend"],
    personalityHints: ["organized", "sentimental", "classic"],
    vibeHints: ["thoughtful", "editorial", "personal"],
    avoidIf: ["never writes notes", "prefers digital"]
  },
  {
    id: "mini-tool-kit",
    title: "Compact Home Tool Kit",
    priceBand: "Under $50",
    approximatePrice: 39,
    bestFor: "New homeowners, college students, practical dads",
    whyItWorks: "It is quietly useful and often appreciated more after the first small household fix.",
    tags: ["practical", "home", "starter", "utility"],
    recipientHints: ["dad", "son", "daughter", "college student", "new homeowner"],
    personalityHints: ["practical", "independent", "prepared"],
    vibeHints: ["useful", "starter", "no-fuss"],
    avoidIf: ["already has tools", "prefers decorative gifts"]
  },
  {
    id: "sleep-mask-set",
    title: "Soft Sleep Mask and Pillow Spray Set",
    priceBand: "Under $25",
    approximatePrice: 19,
    bestFor: "Moms, travelers, stressed friends",
    whyItWorks: "It signals rest and care without requiring a luxury price point.",
    tags: ["rest", "self-care", "travel", "cozy"],
    recipientHints: ["mom", "friend", "sister", "traveler"],
    personalityHints: ["busy", "wellness-minded", "comfort-seeking"],
    vibeHints: ["relaxing", "thoughtful", "soft"],
    avoidIf: ["fragrance sensitive", "does not like sleep accessories"]
  },
  {
    id: "family-calendar",
    title: "Magnetic Family Calendar Board",
    priceBand: "$50–$100",
    approximatePrice: 64,
    bestFor: "Busy families, planners, household managers",
    whyItWorks: "It helps bring school, meal, travel, and holiday schedules into one visible place.",
    tags: ["planning", "family", "calendar", "organized"],
    recipientHints: ["mom", "dad", "family", "host"],
    personalityHints: ["organized", "busy", "planner"],
    vibeHints: ["practical", "organized", "family"],
    avoidIf: ["small fridge", "prefers digital calendars"]
  },
  {
    id: "artisan-hot-chocolate",
    title: "Artisan Hot Chocolate Tin",
    priceBand: "Under $25",
    approximatePrice: 16,
    bestFor: "Stockings, neighbors, teachers, families",
    whyItWorks: "It is seasonal, easy to wrap, and cheerful without becoming novelty clutter.",
    tags: ["seasonal", "stocking", "cozy", "consumable"],
    recipientHints: ["teacher", "neighbor", "coworker", "family"],
    personalityHints: ["homebody", "sweet tooth", "host"],
    vibeHints: ["cozy", "simple", "seasonal"],
    avoidIf: ["diet restrictions", "does not like sweets"]
  },
  {
    id: "bookstore-gift-card",
    title: "Local Bookstore Gift Card with a Personal Note",
    priceBand: "Under $50",
    approximatePrice: 30,
    bestFor: "Readers, teachers, last-minute gifting",
    whyItWorks: "A gift card feels warmer when it points to a local place and includes a note about why you chose it.",
    tags: ["books", "local", "flexible", "last-minute"],
    recipientHints: ["teacher", "mom", "dad", "friend", "coworker"],
    personalityHints: ["reader", "curious", "independent"],
    vibeHints: ["thoughtful", "flexible", "local"],
    avoidIf: ["does not read", "prefers physical gifts"]
  }
];
