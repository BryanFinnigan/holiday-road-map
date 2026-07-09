import type { Metadata } from "next";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Road Map Letter Newsletter",
  description: "Sign up for The Road Map Letter for Christmas gift ideas, printable planning pages, wrapping shortcuts, local guide updates, and planner launch notes.",
  path: "/newsletter"
});

const newsletterThemes = [
  "Gift ideas by recipient, budget, and timing",
  "New Road Map Pages and printable planning tools",
  "Seasonal reminders for shipping, cards, meals, and wrapping",
  "WrapLab shortcuts and supply checklists",
  "MerryMap local guide updates",
  "The Holiday Road Map Planner launch updates"
];

export default function NewsletterPage() {
  return (
    <>
      <Hero
        eyebrow="The Road Map Letter"
        title="A calmer Christmas, one useful note at a time."
        description="Sign up for our newsletter to get practical Christmas planning ideas, gift-guide updates, printable pages, wrapping shortcuts, local guide notes, and future planner launch updates."
        primaryCta={{ label: "Sign up", href: "#road-map-letter-heading" }}
        secondaryCta={{ label: "Start GiftMatch", href: "/giftmatch" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Seasonal retention engine"
          title="The newsletter connects every major revenue path."
          description="The Road Map Letter should become the recurring relationship between GiftMatch, gift guides, free downloads, local pages, WrapLab, and the future paid planner."
        />
        <div className="tag-list large-tag-list" aria-label="Newsletter themes">
          {newsletterThemes.map((theme) => <span key={theme}>{theme}</span>)}
        </div>
      </section>
      <section className="section container compact-section">
        <NewsletterSignup context="homepage" />
      </section>
    </>
  );
}
