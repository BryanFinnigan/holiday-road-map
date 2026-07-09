import GiftGuideCard from "@/components/GiftGuideCard";
import type { GiftGuide } from "@/lib/giftGuides";

type GiftGuideGridProps = {
  guides: GiftGuide[];
};

export default function GiftGuideGrid({ guides }: GiftGuideGridProps) {
  return (
    <div className="feature-grid">
      {guides.map((guide) => <GiftGuideCard key={guide.slug} guide={guide} />)}
    </div>
  );
}
