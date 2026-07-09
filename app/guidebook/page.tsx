import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import { guidebookLinks } from "@/data/guidebookLinks";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "The Holiday Guidebook",
  description: "Explore Holiday Road Map guides for Christmas gifts, wrapping, planning, decorating, hosting, and practical seasonal decisions.",
  path: "/guidebook"
});

export default function GuidebookPage() {
  return (
    <>
      <Hero
        eyebrow="The Holiday Guidebook"
        title="Helpful Christmas ideas with a planner’s point of view."
        description="The Guidebook is the editorial center of Holiday Road Map: gift listicles, wrapping tutorials, planning help, decorating notes, hosting ideas, and seasonal decision guides."
        primaryCta={{ label: "Browse gift guides", href: "/gifts" }}
        secondaryCta={{ label: "Visit WrapLab", href: "/guidebook/wrapping" }}
      />
      <section className="section container">
        <SectionHeader
          eyebrow="Guidebook sections"
          title="Choose your next road stop."
          description="Each section is designed to become a deep content library without making the first site feel heavy. Gift guides now live in the dedicated /gifts taxonomy for cleaner SEO."
        />
        <div className="feature-grid">
          {guidebookLinks.map((link) => (
            <FeatureCard
              key={link.href}
              title={link.title}
              label={link.eyebrow}
              description={link.description}
              href={link.href}
            />
          ))}
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup context="homepage" />
      </section>
    </>
  );
}
