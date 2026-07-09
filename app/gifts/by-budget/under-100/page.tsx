import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("under-100"));

export default function GiftsUnder100Page() {
  return <GiftGuidePage guideSlug="under-100" />;
}
