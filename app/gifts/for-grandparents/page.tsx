import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("for-grandparents"));

export default function GiftsForGrandparentsPage() {
  return <GiftGuidePage guideSlug="for-grandparents" />;
}
