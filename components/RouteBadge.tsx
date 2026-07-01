import type { ReactNode } from "react";

type RouteBadgeProps = {
  children: ReactNode;
};

export default function RouteBadge({ children }: RouteBadgeProps) {
  return <span className="route-badge">✦ {children}</span>;
}
