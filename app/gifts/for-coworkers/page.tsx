import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("for-coworkers"));

export default function GiftsForCoworkersPage() {
  return <GiftGuidePage guideSlug="for-coworkers" />;
}
