export type PrintableLink = {
  title: string;
  description: string;
  status: "Free starter" | "Coming soon";
};

export const printableLinks: PrintableLink[] = [
  {
    title: "Gift Tracker",
    description: "Track recipients, ideas, ordered items, arrivals, wrapping status, and thank-you notes.",
    status: "Free starter"
  },
  {
    title: "Holiday Budget Planner",
    description: "Plan gifts, meals, travel, décor, cards, shipping, and last-minute extras in one place.",
    status: "Free starter"
  },
  {
    title: "December Calendar Page",
    description: "A printable monthly route map for parties, school events, shipping dates, and family traditions.",
    status: "Free starter"
  },
  {
    title: "Shipping Deadline Tracker",
    description: "A clean checklist for order dates, ship-by reminders, and local pickup plans.",
    status: "Coming soon"
  },
  {
    title: "Christmas Meal Planner",
    description: "Map appetizers, mains, sides, desserts, drinks, groceries, and prep timing.",
    status: "Coming soon"
  }
];
