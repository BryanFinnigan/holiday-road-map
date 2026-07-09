import type { Metadata } from "next";
import LocalMarketPage from "@/components/LocalMarketPage";
import { getLocalMarketMetadata } from "@/lib/localMarkets";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getLocalMarketMetadata("illinois", "chicago"));

export default function ChicagoChristmasPage() {
  return <LocalMarketPage stateSlug="illinois" slug="chicago" />;
}
