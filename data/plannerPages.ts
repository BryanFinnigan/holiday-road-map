import type { PageStatus } from "@/data/status";

export type PlannerPageRecord = {
  slug: string;
  title: string;
  href: string;
  description: string;
  useCase: string;
  format: "SVG" | "PDF" | "SVG/PDF";
  statuses: PageStatus[];
  fileUrl?: string;
  featured?: boolean;
  plannerTieIn: string;
};

export const plannerPages: PlannerPageRecord[] = [
  {
    slug: "gift-tracker",
    title: "Gift Tracker",
    href: "/printables/gift-tracker",
    description: "Track recipients, ideas, ordered items, arrivals, wrapping status, delivery, and thank-you notes.",
    useCase: "Best first download for shoppers who have more ideas than decisions.",
    format: "SVG/PDF",
    statuses: ["featured", "downloadable", "planning-tool", "coming-soon"],
    featured: true,
    plannerTieIn: "This becomes the core gift-management section in the paid planner."
  },
  {
    slug: "holiday-budget-planner",
    title: "Holiday Budget Planner",
    href: "/printables/holiday-budget-planner",
    description: "Plan gifts, food, travel, decor, cards, shipping, donations, and last-minute extras in one clean budget page.",
    useCase: "Best for people who keep remembering another seasonal cost.",
    format: "SVG/PDF",
    statuses: ["featured", "downloadable", "planning-tool", "coming-soon"],
    featured: true,
    plannerTieIn: "This becomes the budget route across September through January."
  },
  {
    slug: "december-calendar",
    title: "December Calendar Page",
    href: "/printables/december-calendar",
    description: "Map parties, school events, shipping dates, travel, traditions, shopping windows, and quiet nights.",
    useCase: "Best for making the whole month visible before it gets crowded.",
    format: "SVG/PDF",
    statuses: ["featured", "downloadable", "planning-tool", "coming-soon"],
    featured: true,
    plannerTieIn: "This becomes the December command-center calendar."
  },
  {
    slug: "shipping-deadline-tracker",
    title: "Shipping Deadline Tracker",
    href: "/printables/shipping-deadline-tracker",
    description: "A checklist for order dates, ship-by reminders, local pickup plans, gift arrivals, and backup ideas.",
    useCase: "Best for turning shipping anxiety into a visible checklist.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This supports November shopping and December delivery tracking."
  },
  {
    slug: "christmas-meal-planner",
    title: "Christmas Meal Planner",
    href: "/printables/christmas-meal-planner",
    description: "Map appetizers, mains, sides, desserts, drinks, groceries, assignments, prep timing, and leftovers.",
    useCase: "Best for hosts who need the meal plan to stop living in text messages.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This becomes part of the hosting and Christmas-week section."
  },
  {
    slug: "card-and-mailing-list",
    title: "Card and Mailing List",
    href: "/printables/card-and-mailing-list",
    description: "Track addresses, card status, stamps, mailed dates, returned mail, and next-year updates.",
    useCase: "Best for people who send cards but keep rebuilding the list every year.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This supports September setup and January address cleanup."
  },
  {
    slug: "wrapping-supply-checklist",
    title: "Wrapping Supply Checklist",
    href: "/printables/wrapping-supply-checklist",
    description: "Track paper, bags, boxes, tape, ribbon, bows, tags, tissue, scissors, and storage needs before wrapping night.",
    useCase: "Best for connecting WrapLab tutorials to actual supply planning.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This supports the WrapLab and November prep sections."
  },
  {
    slug: "christmas-week-checklist",
    title: "Christmas Week Checklist",
    href: "/printables/christmas-week-checklist",
    description: "A final-week checklist for meals, gifts, batteries, travel, guest rooms, trash bags, chargers, and forgotten errands.",
    useCase: "Best for last-mile planning when the season gets loud.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This becomes the practical checklist for December 20 through 25."
  },
  {
    slug: "after-christmas-reset",
    title: "After-Christmas Reset Page",
    href: "/printables/after-christmas-reset",
    description: "Capture returns, thank-you notes, decor storage, receipts, what worked, what did not, and ideas for next year.",
    useCase: "Best for turning the January landing into a useful reset instead of a blur.",
    format: "SVG/PDF",
    statuses: ["downloadable", "planning-tool", "coming-soon"],
    plannerTieIn: "This anchors the January 1 through January 15 planner section."
  }
];
