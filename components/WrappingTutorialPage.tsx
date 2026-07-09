import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getWrappingTutorialBySlug } from "@/lib/wrappingTutorials";

type WrappingTutorialPageProps = {
  slug: string;
};

export default function WrappingTutorialPage({ slug }: WrappingTutorialPageProps) {
  const tutorial = getWrappingTutorialBySlug(slug);

  if (!tutorial) notFound();

  return (
    <>
      <Hero
        eyebrow="WrapLab"
        title={tutorial.title}
        description={tutorial.description}
        primaryCta={{ label: "Get supply checklist", href: "/printables/wrapping-supply-checklist" }}
        secondaryCta={{ label: "Back to WrapLab", href: "/guidebook/wrapping" }}
      />
      <section className="section container editorial-section">
        <div className="status-row page-status-row">
          {tutorial.statuses.map((status) => <StatusBadge key={status} status={status} />)}
        </div>
        <SectionHeader
          eyebrow="Tutorial structure"
          title="Supplies, steps, mistakes, and related planning pages."
          description="This page is ready for photos, video, and affiliate supply links later. It currently avoids pretending that product links are live."
        />
        <div className="editorial-grid guide-meta-grid">
          <article>
            <h2>Works for</h2>
            <ul>{tutorial.giftTypes.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <h2>Supplies</h2>
            <ul>{tutorial.supplies.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <h2>Mistakes to avoid</h2>
            <ul>{tutorial.mistakesToAvoid.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Step-by-step"
          title="A simple wrapping route."
          description="This starter copy should be expanded with original photos or short video before heavy promotion."
        />
        <div className="article-list">
          {tutorial.steps.map((step, index) => (
            <article className="article-row" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{step}</p></div>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Keep the supplies visible before wrapping night.</p>
          <Link className="button primary" href="/printables/wrapping-supply-checklist">Open wrapping supply checklist</Link>
        </div>
        <AffiliateDisclosure />
      </section>
      <section className="section container">
        <NewsletterSignup context="wraplab" />
      </section>
    </>
  );
}
