import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { GiftGuide } from "@/lib/giftGuides";

type GiftGuideCardProps = {
  guide: GiftGuide;
};

export default function GiftGuideCard({ guide }: GiftGuideCardProps) {
  return (
    <article className="feature-card guide-card">
      <div className="status-row">
        <p className="card-label">{guide.eyebrow}</p>
        {guide.statuses.slice(0, 2).map((status) => <StatusBadge key={status} status={status} />)}
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <div className="tag-list" aria-label={`${guide.title} tags`}>
        {guide.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <Link href={guide.href}>Open guide →</Link>
    </article>
  );
}
