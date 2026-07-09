import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { LocalMarket } from "@/lib/localMarkets";

type LocalMarketCardProps = {
  market: LocalMarket;
};

export default function LocalMarketCard({ market }: LocalMarketCardProps) {
  return (
    <Link className="market-card" href={market.href}>
      <span>{market.verificationStatus.replaceAll("-", " ")}</span>
      <strong>{market.city}, {market.state}</strong>
      <p>{market.summary}</p>
      <div className="status-row">
        {market.statuses.slice(0, 2).map((status) => <StatusBadge key={status} status={status} />)}
      </div>
    </Link>
  );
}
