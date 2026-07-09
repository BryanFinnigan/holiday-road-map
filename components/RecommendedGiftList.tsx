import GiftCard from "@/components/GiftCard";
import type { GiftRecord } from "@/lib/gifts";
import type { GiftMatchResult } from "@/lib/matchGifts";

type RecommendedGiftListProps = {
  gifts: GiftRecord[];
  reason: string;
};

export default function RecommendedGiftList({ gifts, reason }: RecommendedGiftListProps) {
  if (gifts.length === 0) {
    return <p className="link-placeholder">Gift records for this guide are ready to be added.</p>;
  }

  const results = gifts.map((gift, index) => ({
    ...gift,
    score: 10 - index,
    matchReasons: [reason, gift.status === "live" ? "Live affiliate option" : "Editorial sample"],
    relatedGuideSlugs: gift.guideSlugs ?? []
  })) as GiftMatchResult[];

  return (
    <div className="gift-results-grid standalone-grid">
      {results.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
    </div>
  );
}
