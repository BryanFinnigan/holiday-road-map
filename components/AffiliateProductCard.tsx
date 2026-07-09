import StatusBadge from "@/components/StatusBadge";
import { getGiftStatusLabel, getPriceBandLabel, type GiftRecord } from "@/lib/gifts";

type AffiliateProductCardProps = {
  product: GiftRecord;
  contextLabel?: string;
};

export default function AffiliateProductCard({ product, contextLabel }: AffiliateProductCardProps) {
  const hasLiveLink = product.status === "live" && Boolean(product.affiliateUrl);

  return (
    <article className="gift-card affiliate-product-card">
      <div className="gift-card-header">
        <div>
          <p className="card-label">{contextLabel ?? getPriceBandLabel(product.priceBand)}</p>
          <h3>{product.title}</h3>
        </div>
        <StatusBadge status={product.status === "live" ? "affiliate-ready" : "coming-soon"} />
      </div>
      <p>{product.summary}</p>
      <p><strong>Best for:</strong> {product.bestFor.join(", ")}</p>
      <p><strong>Gift lane:</strong> {product.category} · {getPriceBandLabel(product.priceBand)}</p>
      <div className="tag-list" aria-label="Product tags">
        {product.tags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {product.buyingNote ? <p className="match-reasons">{product.buyingNote}</p> : null}
      {hasLiveLink ? (
        <a className="button affiliate" href={product.affiliateUrl} rel="sponsored nofollow noopener" target="_blank">
          View gift option
        </a>
      ) : (
        <p className="link-placeholder">{getGiftStatusLabel(product.status)} · Affiliate link coming soon</p>
      )}
    </article>
  );
}
