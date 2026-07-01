export type LocalMarket = {
  city: string;
  state: string;
  href: string;
  status: "Sample" | "Planned";
};

export const localMarkets: LocalMarket[] = [
  {
    city: "Detroit",
    state: "Michigan",
    href: "/christmas-near-me/michigan/detroit",
    status: "Sample"
  },
  {
    city: "Grand Rapids",
    state: "Michigan",
    href: "#future-market-grand-rapids",
    status: "Planned"
  },
  {
    city: "Chicago",
    state: "Illinois",
    href: "#future-market-chicago",
    status: "Planned"
  },
  {
    city: "Columbus",
    state: "Ohio",
    href: "#future-market-columbus",
    status: "Planned"
  }
];
