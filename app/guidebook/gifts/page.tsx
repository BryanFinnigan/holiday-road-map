import type { Metadata } from "next";
import Link from "next/link";
import Disclosure from "@/components/Disclosure";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Christmas Gift Guides and Listicles",
  description: "Browse planned Holiday Road Map Christmas gift listicles for dads, moms, coworkers, stocking stuffers, and last-minute thoughtful gifts.",
  path: "/guidebook/gifts"
});

const listicles = [
  "21 Gifts for Dads Who Say They Don’t Want Anything",
  "25 Stocking Stuffers Under $10 That Don’t Feel Cheap",
  "19 Gifts for Coworkers Under $25",
  "23 Gifts for Moms Who Deserve a Break",
  "20 Last-Minute Christmas Gifts That Still Feel Thoughtful"
];

export default function GiftGuidesPage() {
  return (
    <>
      <Hero
        eyebrow="Gift guides"
        title="Christmas gift lists that feel edited, useful, and calm."
        description="This category will house editorial listicles organized by recipient, budget, timing, relationship, and gift style. The goal is practical inspiration, not endless product clutter."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Gifts under $50", href: "/gifts/by-budget/under-50" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Planned listicles"
          title="Gift stories to build first"
          description="These are starter article concepts for search demand, social sharing, and newsletter reuse."
        />
        <div className="article-list">
          {listicles.map((title, index) => (
            <article className="article-row" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{title}</h2>
                <p>Future article: editorial intro, buying advice, gift picks, budget notes, avoidances, and internal links to GiftMatch.</p>
              </div>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <p>Need a more personal starting point?</p>
          <Link className="button primary" href="/giftmatch">Try GiftMatch</Link>
        </div>
        <Disclosure />
      </section>
    </>
  );
}
