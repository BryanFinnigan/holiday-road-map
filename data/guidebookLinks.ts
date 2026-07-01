export type GuidebookLink = {
  title: string;
  href: string;
  description: string;
  eyebrow: string;
};

export const guidebookLinks: GuidebookLink[] = [
  {
    title: "Gift Guides",
    href: "/guidebook/gifts",
    eyebrow: "Gift lists",
    description: "Editorial listicles and practical picks by recipient, budget, timing, and gift style."
  },
  {
    title: "Wrapping",
    href: "/guidebook/wrapping",
    eyebrow: "WrapLab",
    description: "Simple tutorials for boxes, mugs, bottles, soft gifts, bows, ribbons, and last-minute polish."
  },
  {
    title: "Planning",
    href: "/guidebook/planning",
    eyebrow: "Season systems",
    description: "Checklists, calendars, planning rhythms, and ways to make the holidays feel less scattered."
  },
  {
    title: "Decorating",
    href: "/guidebook/decorating",
    eyebrow: "Home notes",
    description: "Tree ideas, mantel inspiration, small-space decorating, and reusable style formulas."
  },
  {
    title: "Hosting",
    href: "/guidebook/hosting",
    eyebrow: "Gatherings",
    description: "Menus, prep timelines, guest comforts, easy traditions, and low-stress hosting help."
  }
];
