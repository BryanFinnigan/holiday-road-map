import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";
import { getPlannerPageBySlug } from "@/lib/plannerPages";

type PrintableDetailPageProps = {
  slug: string;
};

export default function PrintableDetailPage({ slug }: PrintableDetailPageProps) {
  const page = getPlannerPageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      <Hero
        eyebrow="Road Map Pages"
        title={`${page.title}: Free Holiday Planning Page`}
        description={page.description}
        primaryCta={{ label: page.fileUrl ? "Download page" : "Join for file updates", href: page.fileUrl ?? "#road-map-letter-heading" }}
        secondaryCta={{ label: "View all printables", href: "/printables" }}
      />
      <section className="section container editorial-section">
        <div className="status-row page-status-row">
          {page.statuses.map((status) => <StatusBadge key={status} status={status} />)}
        </div>
        <SectionHeader
          eyebrow="Printable preview"
          title="Built as a useful planning tool first, download second."
          description={page.useCase}
        />
        <div className="editorial-grid guide-meta-grid">
          <article>
            <h2>What it helps with</h2>
            <p>{page.description}</p>
          </article>
          <article>
            <h2>Planner connection</h2>
            <p>{page.plannerTieIn}</p>
          </article>
          <article>
            <h2>Download status</h2>
            <p>{page.fileUrl ? "A file URL is present and the download button can be used." : "The printable file is not in the repo yet, so this page uses an honest coming-soon state instead of a fake download."}</p>
          </article>
        </div>
        <div className="inline-cta">
          <p>Want the complete seasonal system?</p>
          <Link className="button primary" href="/planner">Preview The Holiday Road Map Planner</Link>
        </div>
      </section>
      <section className="section container">
        <NewsletterSignup context="printables" />
      </section>
    </>
  );
}
