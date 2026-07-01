import type { Metadata } from "next";
import Link from "next/link";
import Disclosure from "@/components/Disclosure";
import GiftCard from "@/components/GiftCard";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { gifts } from "@/data/gifts";
import { createMetadata } from "@/lib/seo";
import type { GiftMatchResult } from "@/lib/matchGifts";

export const metadata: Metadata = createMetadata({
  title: "Christmas Gifts Under $50",
  description: "Find thoughtful Christmas gifts under $50 by recipient and gift style, with sample GiftGraph records and practical buying guidance.",
  path: "/gifts/by-budget/under-50"
});

const under50Gifts = gifts
  .filter((gift) => gift.approximatePrice <= 50)
  .slice(0, 8)
  .map((gift, index) => ({ ...gift, score: 10 - index, matchReasons: ["Under $50", "Editorial starter pick"] })) as GiftMatchResult[];

export default function GiftsUnder50Page() {
  return (
    <>
      <Hero
        eyebrow="Budget gift landing page"
        title="Christmas Gifts Under $50"
        description="The best under-$50 gifts are specific enough to feel chosen, practical enough to get used, and simple enough to buy without overthinking the whole season."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Gifts for Mom", href: "/gifts/for-mom" }}
      />
      <section className="section container editorial-section">
        <SectionHeader
          eyebrow="Buying strategy"
          title="Under $50 works best when the gift has a clear role."
          description="Instead of chasing novelty, choose a lane: cozy, useful, consumable, personalized, local, desk-friendly, kitchen-friendly, or easy to mail."
        />
        <div className="editorial-grid">
          <article>
            <h2>For parents</h2>
            <p>Look for comfort, home organization, food gifts, family calendar tools, or personal items that make ordinary days feel a little easier.</p>
          </article>
          <article>
            <h2>For coworkers</h2>
            <p>Keep it polished and low-risk: coffee, tea, small desk items, local treats, nice notebooks, or simple winter comforts.</p>
          </article>
          <article>
            <h2>For friends</h2>
            <p>Use personality clues: cozy night in, travel, books, cooking, photos, hobbies, or a shared inside tradition that can be expressed simply.</p>
          </article>
        </div>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow="Starter GiftGraph picks"
          title="Sample gifts under $50"
          description="These examples are static sample records. Future versions can add real availability, affiliate links, price history, and editorial scoring."
        />
        <div className="gift-results-grid standalone-grid">
          {under50Gifts.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
        </div>
        <div className="inline-cta">
          <p>Have a specific recipient in mind?</p>
          <Link className="button primary" href="/giftmatch">Match gifts by person</Link>
        </div>
        <Disclosure />
      </section>
    </>
  );
}
