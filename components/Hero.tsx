import Link from "next/link";
import RouteBadge from "@/components/RouteBadge";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="hero route-paper">
      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow ? <RouteBadge>{eyebrow}</RouteBadge> : null}
          <h1>{title}</h1>
          <p>{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="button-row">
              {primaryCta ? <Link className="button primary" href={primaryCta.href}>{primaryCta.label}</Link> : null}
              {secondaryCta ? <Link className="button secondary" href={secondaryCta.href}>{secondaryCta.label}</Link> : null}
            </div>
          ) : null}
        </div>
        <div className="hero-card" aria-label="Holiday Road Map seasonal system preview">
          <div className="map-card-topline">
            <span>Route 12</span>
            <span>Christmas Season</span>
          </div>
          <div className="route-line" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="road-stop-list">
            <li><strong>GiftMatch</strong><span>Thoughtful ideas by person, budget, and vibe</span></li>
            <li><strong>Road Map Pages</strong><span>Printable pages for lists, budget, meals, and dates</span></li>
            <li><strong>MerryMap</strong><span>Local events, lights, farms, markets, and traditions</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
