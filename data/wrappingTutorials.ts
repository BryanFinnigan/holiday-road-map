import type { PageStatus } from "@/data/status";

export type WrappingTutorial = {
  slug: string;
  title: string;
  href: string;
  description: string;
  giftTypes: string[];
  supplies: string[];
  steps: string[];
  mistakesToAvoid: string[];
  relatedPrintables: string[];
  statuses: PageStatus[];
};

export const wrappingTutorials: WrappingTutorial[] = [
  {
    slug: "how-to-wrap-a-box",
    title: "How to Wrap a Box Cleanly",
    href: "/guidebook/wrapping/how-to-wrap-a-box",
    description: "A basic clean-corner wrapping tutorial for rectangular boxes, books, and standard packages.",
    giftTypes: ["Books", "Boxed toys", "Small appliances", "Clothing boxes"],
    supplies: ["Wrapping paper", "Tape", "Scissors", "Gift tag", "Optional ribbon"],
    steps: ["Measure enough paper to cover the box with a small overlap.", "Fold one long edge for a cleaner seam.", "Pull paper snug but not so tight that it tears.", "Create even triangular flaps at each end.", "Tape seams flat and add a tag or ribbon."],
    mistakesToAvoid: ["Too much paper at the ends", "Loose corners", "Tape on the front face when it can be hidden"],
    relatedPrintables: ["wrapping-supply-checklist", "gift-tracker"],
    statuses: ["coming-soon", "affiliate-ready", "high-priority-seo"]
  },
  {
    slug: "how-to-wrap-a-mug",
    title: "How to Wrap a Mug",
    href: "/guidebook/wrapping/how-to-wrap-a-mug",
    description: "A simple approach for mugs, small ceramics, and handle-shaped gifts that do not sit neatly in paper.",
    giftTypes: ["Mugs", "Small ceramics", "Candles", "Odd-shaped desk gifts"],
    supplies: ["Tissue paper", "Gift bag or small box", "Tape", "Ribbon", "Tag"],
    steps: ["Pad the inside and handle area with tissue.", "Use a small box when available for safer wrapping.", "If using a bag, add structured tissue so the gift sits upright.", "Tie ribbon or a tag to the handle only if it will not pull or chip."],
    mistakesToAvoid: ["Wrapping fragile ceramic with only thin paper", "Leaving the handle exposed", "Using a bag that is too large"],
    relatedPrintables: ["wrapping-supply-checklist", "gift-tracker"],
    statuses: ["coming-soon", "affiliate-ready", "high-priority-seo"]
  },
  {
    slug: "how-to-wrap-a-bottle",
    title: "How to Wrap a Bottle",
    href: "/guidebook/wrapping/how-to-wrap-a-bottle",
    description: "A clean bottle-wrapping structure for olive oil, syrups, sauces, bath products, and non-alcoholic host gifts.",
    giftTypes: ["Olive oil", "Sauces", "Syrups", "Bath bottles", "Tall pantry gifts"],
    supplies: ["Bottle bag or kraft paper", "Tissue", "Ribbon", "Tag", "Optional box"],
    steps: ["Choose a bottle bag or wrap with paper that rises above the neck.", "Pad glass with tissue if needed.", "Gather the top neatly around the neck.", "Tie ribbon below the cap and add a tag."],
    mistakesToAvoid: ["Thin paper on sharp bottle shoulders", "No padding for glass", "Ribbon tied too loosely"],
    relatedPrintables: ["wrapping-supply-checklist", "christmas-meal-planner"],
    statuses: ["coming-soon", "affiliate-ready", "high-priority-seo"]
  },
  {
    slug: "how-to-wrap-a-soft-gift",
    title: "How to Wrap a Soft Gift Without a Box",
    href: "/guidebook/wrapping/how-to-wrap-a-soft-gift",
    description: "A practical method for scarves, blankets, sweaters, pajamas, and soft gifts that shift while wrapping.",
    giftTypes: ["Scarves", "Sweaters", "Blankets", "Pajamas", "Soft accessories"],
    supplies: ["Tissue paper", "Wrapping paper", "Tape", "Ribbon", "Gift box if available"],
    steps: ["Fold the item into a compact rectangle.", "Wrap in tissue first to create structure.", "Place the folded item seam-side down on paper.", "Use a ribbon band to keep the package from puffing open."],
    mistakesToAvoid: ["Skipping the tissue layer", "Over-tightening paper", "Using too little paper around bulky fabric"],
    relatedPrintables: ["wrapping-supply-checklist", "gift-tracker"],
    statuses: ["coming-soon", "affiliate-ready", "high-priority-seo"]
  },
  {
    slug: "simple-bow",
    title: "How to Make a Simple Bow Look Better",
    href: "/guidebook/wrapping/simple-bow",
    description: "A simple finishing tutorial for ribbon, tags, and small details that make basic wrapping feel more intentional.",
    giftTypes: ["Boxed gifts", "Gift bags", "Host gifts", "Stockings", "Baskets"],
    supplies: ["Ribbon", "Scissors", "Gift tag", "Optional greenery or small ornament"],
    steps: ["Choose ribbon that matches the package size.", "Tie a firm knot before forming loops.", "Keep the loops even and the tails angled.", "Trim tails at a clean angle.", "Add the tag close to the knot so it feels intentional."],
    mistakesToAvoid: ["Ribbon that is too thin for the package", "Huge loops on tiny gifts", "Untrimmed ribbon tails"],
    relatedPrintables: ["wrapping-supply-checklist", "christmas-week-checklist"],
    statuses: ["coming-soon", "affiliate-ready", "high-priority-seo"]
  }
];
