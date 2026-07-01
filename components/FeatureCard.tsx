import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  label?: string;
};

export default function FeatureCard({ title, description, href, icon = "✦", label }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">{icon}</div>
      {label ? <p className="card-label">{label}</p> : null}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href} aria-label={`Explore ${title}`}>Explore the stop →</Link>
    </article>
  );
}
