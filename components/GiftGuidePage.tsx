import Link from "next/link";
import { notFound } from "next/navigation";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import RecommendedGiftList from "@/components/RecommendedGiftList";
import RelatedGiftGuides from "@/components/RelatedGiftGuides";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getGiftGuideBySlug } from "@/lib/giftGuides";
import { getGiftsByGuideSlug } from "@/lib/gifts";

type GiftGuidePageProps = {
  guideSlug: string;
};

export default function GiftGuidePage({ guideSlug }: GiftGuidePageProps) {
  const guide = getGiftGuideBySlug(guideSlug);

  if (!guide) notFound();

  const guideGifts = getGiftsByGuideSlug(guide.slug, 8);
  const hasLiveAffiliateLinks = guideGifts.some((gift) => gift.status === "live" && gift.affiliateUrl);

  return (
    <>
      <Hero
        eyebrow={guide.eyebrow}
        title={guide.h1}
        description={guide.intro}
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Browse all gift guides", href: "/gifts" }}
      />

      <section className="section container editorial-section">
        <div className="status-row page-status-row">
          {guide.statuses.map((status) => <StatusBadge key={status} status={status} />)}
        </div>
        <SectionHeader
          eyebrow="Buying strategy"
          title="Start with fit before product links."
          description={guide.description}
        />
        <div className="editorial-grid guide-meta-grid">
          <article>
            <h2>Who this guide is for</h2>
            <p>{guide.whoFor}</p>
          </article>
          <article>
            <h2>How to shop it</h2>
            <p>{guide.buyingStrategy}</p>
          </article>
          <article>
            <h2>What to avoid</h2>
            <ul>
              {guide.whatToAvoid.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          eyebrow={hasLiveAffiliateLinks ? "Affiliate-ready recommendations" : "Editorial sample recommendations"}
          title={`Starter picks for ${guide.title.toLowerCase()}`}
          description={hasLiveAffiliateLinks ? "These cards can include real affiliate links when approved retailer URLs are present." : "These cards are structured for future affiliate links. They intentionally do not use fake product URLs."}
        />
        <RecommendedGiftList gifts={guideGifts} reason={guide.title} />
        <div className="inline-cta">
          <p>Want a more tailored match for one person?</p>
          <Link className="button primary" href="/giftmatch">Use GiftMatch</Link>
        </div>
        <AffiliateDisclosure />
      </section>

      <section className="section container compact-section">
        <RelatedGiftGuides slugs={guide.relatedSlugs} />
      </section>

      <section className="section container">
        <NewsletterSignup context="gift-guide" />
      </section>
    </>
  );
}
