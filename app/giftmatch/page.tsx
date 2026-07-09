import type { Metadata } from "next";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import GiftMatcher from "@/components/GiftMatcher";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GiftMatch Christmas Gift Finder",
  description: "Use GiftMatch to find Christmas gift directions by recipient, budget, personality, gift vibe, and avoidances, then route to relevant Holiday Road Map gift guides.",
  path: "/giftmatch"
});

export default function GiftMatchPage() {
  return (
    <>
      <Hero
        eyebrow="GiftMatch"
        title="Find a thoughtful gift without wandering every aisle."
        description="GiftMatch keeps the first version simple: who the gift is for, what you want to spend, the recipient's personality, the gift feeling, and anything to avoid. Results point toward useful gift categories and affiliate-ready guides."
        primaryCta={{ label: "Use the matcher", href: "#matcher" }}
        secondaryCta={{ label: "Browse gift guides", href: "/gifts" }}
      />
      <section id="matcher" className="section container">
        <SectionHeader
          eyebrow="GiftGraph starter data"
          title="A simple matching form with honest product states."
          description="GiftMatch ranks structured gift records and only shows product buttons when real affiliate URLs exist. Placeholder recommendations stay clearly marked as editorial samples."
        />
        <GiftMatcher />
      </section>
      <section className="section container compact-section">
        <AffiliateDisclosure />
      </section>
      <section className="section container">
        <NewsletterSignup context="giftmatch" />
      </section>
    </>
  );
}
