import type { Metadata } from "next";
import LocalMarketPage from "@/components/LocalMarketPage";
import { getLocalMarketMetadata } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getLocalMarketMetadata("ohio", "columbus"));

export default function ColumbusChristmasPage() {
  return <LocalMarketPage stateSlug="ohio" slug="columbus" />;
}
