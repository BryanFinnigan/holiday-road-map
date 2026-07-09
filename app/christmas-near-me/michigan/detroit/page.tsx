import type { Metadata } from "next";
import LocalMarketPage from "@/components/LocalMarketPage";
import { getLocalMarketMetadata } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getLocalMarketMetadata("michigan", "detroit"));

export default function DetroitChristmasPage() {
  return <LocalMarketPage stateSlug="michigan" slug="detroit" />;
}
