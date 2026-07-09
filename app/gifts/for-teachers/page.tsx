import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("for-teachers"));

export default function GiftsForTeachersPage() {
  return <GiftGuidePage guideSlug="for-teachers" />;
}
