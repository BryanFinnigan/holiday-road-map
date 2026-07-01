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
  title: "Christmas Gifts for Mom",
  description: "Find Christmas gifts for mom by budget, personality, and gift style with thoughtful editorial guidance from Holiday Road Map.",
  path: "/gifts/for-mom"
});

const momGifts = gifts
  .filter((gift) => gift.recipientHints.includes("mom"))
  .slice(0, 6)
  .map((gift, index) => ({ ...gift, score: 10 - index, matchReasons: ["Mom recipient fit", "Editorial starter pick"] })) as GiftMatchResult[];

export default function GiftsForMomPage() {
  return (
    <>
      <Hero
        eyebrow="Gift landing page"
        title="Christmas Gifts for Mom"
        description="A good Christmas gift for mom does not have to be extravagant. The best picks usually say: I noticed what makes your days easier, calmer, warmer, or more enjoyable."
        primaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
        secondaryCta={{ label: "Gifts under $50", href: "/gifts/by-budget/under-50" }}
      />
      <section className="section container editorial-section">
        <SectionHeader
          eyebrow="Editorial guidance"
          title="Start with the kind of care the gift should show."
          description="For mom, the strongest categories often include rest, home comfort, kitchen upgrades, personal paper goods, meaningful keepsakes, and useful planning tools."
        />
        <div className="editorial-grid">
          <article>
            <h2>Budget-friendly ideas</h2>
            <p>Under $25, think consumable comforts, small desk upgrades, tea, cocoa, sleep accessories, stationery, or one beautifully wrapped everyday item.</p>
          </article>
          <article>
            <h2>Mid-range ideas</h2>
            <p>Under $50, look for gifts that feel considered: a recipe journal, premium pantry item, compact self-care set, local bookstore gift card, or a better version of something she already uses.</p>
          </article>
          <article>
            <h2>Personality-based ideas</h2>
            <p>For practical moms, choose household systems or useful winter items. For sentimental moms, pair a physical gift with a note, memory, recipe, or family photo plan.</p>
          </article>
        </div>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow="Starter GiftGraph picks"
          title="Sample Christmas gifts for mom"
          description="These sample cards demonstrate how editorial gift pages can reuse structured gift data without becoming thin product grids."
        />
        <div className="gift-results-grid standalone-grid">
          {momGifts.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
        </div>
        <div className="inline-cta">
          <p>Want a more tailored answer?</p>
          <Link className="button primary" href="/giftmatch">Use GiftMatch</Link>
        </div>
        <Disclosure />
      </section>
    </>
  );
}
