import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getLocalMarketByStateAndSlug } from "@/lib/localMarkets";

type LocalMarketPageProps = {
  stateSlug: string;
  slug: string;
};

export default function LocalMarketPage({ stateSlug, slug }: LocalMarketPageProps) {
  const market = getLocalMarketByStateAndSlug(stateSlug, slug);

  if (!market) notFound();

  return (
    <>
      <Hero
        eyebrow="MerryMap local guide"
        title={`Christmas in ${market.city}, ${market.state}: events, lights, markets, tree farms & things to do`}
        description={`${market.summary} Local listings must be verified with primary sources before this page becomes a final commercial guide.`}
        primaryCta={{ label: "Explore MerryMap", href: "/merrymap" }}
        secondaryCta={{ label: "Find gifts before you go", href: "/giftmatch" }}
      />
      <section className="section container local-note-card">
        <div className="status-row page-status-row">
          {market.statuses.map((status) => <StatusBadge key={status} status={status} />)}
        </div>
        <p className="eyebrow">Verification note</p>
        <h2>{market.verificationStatus === "verified" ? "Verified local guide" : "Local content requires verification"}</h2>
        <p>No event dates, hours, addresses, prices, parking notes, or cancellation policies should be published here until checked against official event, venue, city, park, or organizer sources.</p>
        <p><strong>Last updated:</strong> {market.lastUpdated}</p>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow={`${market.city} holiday route`}
          title="Build the page around local planning categories."
          description="Each category is a future section for verified listings, official links, practical notes, internal links, and local gift stop ideas."
        />
        <div className="local-section-list">
          {market.eventCategories.map((category) => (
            <article className="local-section-card" key={category}>
              <h2>{category}</h2>
              <p>Planned section: add verified listings, official source links, dates, cost notes, family fit, weather considerations, parking, accessibility, and nearby route ideas.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Local gift stops"
          title="Add local shopping without inventing listings."
          description="These are the kinds of stops this market page can support after verification."
        />
        <div className="tag-list large-tag-list" aria-label="Local gift stop types">
          {market.localGiftStopTypes.map((type) => <span key={type}>{type}</span>)}
        </div>
        <div className="inline-cta">
          <p>Planning a local Christmas day out?</p>
          <Link className="button primary" href="/gifts/last-minute">Browse last-minute gift routes</Link>
          <Link className="button secondary" href="/printables/december-calendar">Use the December calendar</Link>
        </div>
        <AffiliateDisclosure showLocalNote />
      </section>
      <section className="section container">
        <NewsletterSignup context="merrymap" />
      </section>
    </>
  );
}
