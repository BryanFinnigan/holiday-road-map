import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { PlannerPageRecord } from "@/lib/plannerPages";

type RoadMapPageCardProps = {
  page: PlannerPageRecord;
};

export default function RoadMapPageCard({ page }: RoadMapPageCardProps) {
  const hasDownload = Boolean(page.fileUrl);

  return (
    <article className="feature-card roadmap-page-card">
      <div className="feature-icon" aria-hidden="true">▦</div>
      <div className="status-row">
        {page.statuses.slice(0, 2).map((status) => <StatusBadge key={status} status={status} />)}
      </div>
      <h3>{page.title}</h3>
      <p>{page.description}</p>
      <p className="match-reasons"><strong>Use it for:</strong> {page.useCase}</p>
      <p className="match-reasons"><strong>Format target:</strong> {page.format}</p>
      <div className="button-row card-buttons">
        <Link className="button secondary" href={page.href}>Preview page</Link>
        {hasDownload ? (
          <a className="button primary" href={page.fileUrl} download>Download</a>
        ) : (
          <span className="link-placeholder">Download file coming soon</span>
        )}
      </div>
    </article>
  );
}
