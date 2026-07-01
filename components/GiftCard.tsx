import type { GiftMatchResult } from "@/lib/matchGifts";

type GiftCardProps = {
  gift: GiftMatchResult;
};

export default function GiftCard({ gift }: GiftCardProps) {
  return (
    <article className="gift-card">
      <div className="gift-card-header">
        <div>
          <p className="card-label">{gift.priceBand}</p>
          <h3>{gift.title}</h3>
        </div>
        <span className="score-pill">Score {gift.score}</span>
      </div>
      <p><strong>Best for:</strong> {gift.bestFor}</p>
      <p>{gift.whyItWorks}</p>
      <div className="tag-list" aria-label="Gift tags">
        {gift.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <p className="match-reasons">Matched on: {gift.matchReasons.join(", ")}</p>
      {/* Future affiliate URL goes here. Keep rel="sponsored nofollow" when real links are added. */}
      <a className="button affiliate" href="#future-affiliate-link" aria-label={`View placeholder affiliate option for ${gift.title}`}>
        Placeholder gift link
      </a>
    </article>
  );
}
