import type { Metadata } from "next";
import GiftGuidePage from "@/components/GiftGuidePage";
import { getGiftGuideMetadata } from "@/lib/giftGuides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(getGiftGuideMetadata("for-preschoolers"));

export default function GiftsForPreschoolersPage() {
  return <GiftGuidePage guideSlug="for-preschoolers" />;
}
