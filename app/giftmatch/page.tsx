import type { Metadata } from "next";
import Disclosure from "@/components/Disclosure";
import GiftMatcher from "@/components/GiftMatcher";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "GiftMatch Christmas Gift Finder",
  description: "Use the GiftMatch MVP to find sample Christmas gift ideas by recipient, budget, personality, vibe, and avoidances.",
  path: "/giftmatch"
});

export default function GiftMatchPage() {
  return (
    <>
      <Hero
        eyebrow="GiftMatch"
        title="Find a thoughtful gift without wandering every aisle."
        description="GiftMatch is the first working tool in the Holiday Road Map system. Enter a few simple clues and the sample GiftGraph data will rank ideas by fit."
        primaryCta={{ label: "Use the matcher", href: "#matcher" }}
        secondaryCta={{ label: "Browse gifts for mom", href: "/gifts/for-mom" }}
      />
      <section id="matcher" className="section container">
        <SectionHeader
          eyebrow="GiftGraph sample data"
          title="A simple first-pass matching form"
          description="Keep the inputs light: who the gift is for, what you want to spend, the recipient’s personality, the gift feeling, and anything to avoid."
        />
        <GiftMatcher />
      </section>
      <section className="section container compact-section">
        <Disclosure />
      </section>
    </>
  );
}
