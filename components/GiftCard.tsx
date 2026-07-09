import type { GiftMatchResult } from "@/lib/matchGifts";
import { getGiftStatusLabel, getPriceBandLabel } from "@/lib/gifts";
import StatusBadge from "@/components/StatusBadge";

type GiftCardProps = {
  gift: GiftMatchResult;
};

export default function GiftCard({ gift }: GiftCardProps) {
  const hasLiveLink = gift.status === "live" && Boolean(gift.affiliateUrl);

  return (
    <article className="gift-card">
      <div className="gift-card-header">
        <div>
          <p className="card-label">{getPriceBandLabel(gift.priceBand)}</p>
          <h3>{gift.title}</h3>
        </div>
        <span className="score-pill">Score {gift.score}</span>
      </div>
      <div className="status-row">
        <StatusBadge status={gift.status === "live" ? "affiliate-ready" : "coming-soon"} />
        <span>{getGiftStatusLabel(gift.status)}</span>
      </div>
      <p><strong>Best for:</strong> {gift.bestFor.join(", ")}</p>
      <p>{gift.summary}</p>
      <div className="tag-list" aria-label="Gift tags">
        {gift.tags.slice(0, 6).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <p className="match-reasons">Matched on: {gift.matchReasons.join(", ")}</p>
      {hasLiveLink ? (
        <a className="button affiliate" href={gift.affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
          View gift option
        </a>
      ) : (
        <p className="link-placeholder">Affiliate link coming soon. This is an editorial sample, not a fake product link.</p>
      )}
    </article>
  );
}
