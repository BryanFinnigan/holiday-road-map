import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("stocking-stuffers"));

export default function StockingStuffersPage() {
  return <GiftGuidePage guideSlug="stocking-stuffers" />;
}
