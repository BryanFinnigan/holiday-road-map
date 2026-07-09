import { localMarkets, type LocalMarket } from "@/data/localMarkets";

export { localMarkets };
export type { LocalMarket };

export function getLocalMarketByStateAndSlug(stateSlug: string, slug: string) {
  return localMarkets.find((market) => market.stateSlug === stateSlug && market.slug === slug);
}

export function getLocalMarketsByState(stateSlug: string) {
  return localMarkets.filter((market) => market.stateSlug === stateSlug);
}

export function getLocalMarketMetadata(stateSlug: string, slug: string) {
  const market = getLocalMarketByStateAndSlug(stateSlug, slug);

  if (!market) {
    return {
      title: "Christmas Near Me",
      description: "Explore planned Holiday Road Map local Christmas guides.",
      path: "/christmas-near-me"
    };
  }

  return {
    title: `Christmas in ${market.city}, ${market.state}`,
    description: `${market.summary} Browse the MerryMap structure for local Christmas events, lights, markets, tree farms, family activities, date ideas, and local gift stops.`,
    path: market.href
  };
}
