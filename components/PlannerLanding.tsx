import Link from "next/link";
import Hero from "@/components/Hero";
import NewsletterSignup from "@/components/NewsletterSignup";
import SectionHeader from "@/components/SectionHeader";
import StatusBadge from "@/components/StatusBadge";

const seasonalRoute = [
  {
    title: "September: Set the Route",
    description: "Define the season, rough budget, gift list, card list, travel expectations, traditions, and first no-rush shopping ideas."
  },
  {
    title: "October: Prepare the Season",
    description: "Refine recipient notes, compare gift ideas, map local activities, plan decor, and build the early shipping strategy."
  },
  {
    title: "November: Shop and Schedule",
    description: "Move from ideas to decisions: track orders, sale windows, local pickup, meals, party dates, and wrapping supplies."
  },
  {
    title: "December: Celebrate",
    description: "Keep the month visible with calendars, hosting notes, gift status, school events, travel reminders, and small memory space."
  },
  {
    title: "January 1–15: Reset and Remember",
    description: "Capture what worked, note returns, save addresses, track thank-you notes, organize decor, and preserve next-year ideas."
  }
];

const sections = [
  "Season route map",
  "Gift list and recipient notes",
  "Holiday budget planner",
  "September through January calendars",
  "Weekly route pages",
  "Shopping and order tracker",
  "Shipping and local pickup tracker",
  "Cards and mailing list",
  "Meal and hosting pages",
  "Wrapping supply checklist",
  "Traditions, memories, and photos",
  "After-Christmas reset"
];

export default function PlannerLanding() {
  return (
    <>
      <Hero
        eyebrow="The Holiday Road Map Planner"
        title="A September 1 – January 15 Christmas planning system."
        description="The Holiday Road Map Planner is a future premium planner concept built to make the whole season visible: gifts, budgets, calendars, meals, wrapping, traditions, local plans, and the January reset."
        primaryCta={{ label: "Join the planner waitlist", href: "#planner-waitlist" }}
        secondaryCta={{ label: "Use free Road Map Pages", href: "/printables" }}
      />
      <section className="section container">
        <div className="status-row page-status-row">
          <StatusBadge status="coming-soon" />
          <StatusBadge status="planning-tool" />
          <StatusBadge status="high-priority-revenue" />
        </div>
        <SectionHeader
          eyebrow="Product promise"
          title="Free pages help with single problems. The planner ties the whole season together."
          description="This page is a product landing foundation for a future print-on-demand or digital planner. It keeps the product status honest while building demand through newsletter capture and internal links."
        />
        <div className="editorial-grid guide-meta-grid">
          <article>
            <h2>Who it is for</h2>
            <p>People who love Christmas but feel scattered by gifts, budgets, events, meals, school dates, shipping, cards, wrapping, travel, and the after-Christmas cleanup.</p>
          </article>
          <article>
            <h2>What makes it different</h2>
            <p>It starts on September 1 and ends on January 15 so planning, shopping, celebration, and reset all have a clear place.</p>
          </article>
          <article>
            <h2>Product status</h2>
            <p>This is not yet a live purchase page. Future CTA: connect to a print-on-demand storefront, preorder form, or digital planner checkout when the product files are ready.</p>
          </article>
        </div>
      </section>
      <section className="section container">
        <SectionHeader
          eyebrow="Planner route"
          title="September 1 to January 15, organized by the way the season really unfolds."
          description="The seasonal timeline gives the product a practical rhythm without copying any proprietary planner system."
        />
        <div className="timeline-list">
          {seasonalRoute.map((month) => (
            <article className="timeline-card" key={month.title}>
              <h2>{month.title}</h2>
              <p>{month.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container compact-section">
        <SectionHeader
          eyebrow="Inside the planner"
          title="The planned sections support gifts, schedules, hosting, and the reset."
          description="Each section can later become a preview card, product image, downloadable sample, or sales-page block."
        />
        <div className="tag-list large-tag-list" aria-label="Planner sections">
          {sections.map((section) => <span key={section}>{section}</span>)}
        </div>
        <div className="inline-cta">
          <p>Want the smaller free version first?</p>
          <Link className="button secondary" href="/printables">Browse Road Map Pages</Link>
        </div>
      </section>
      <section className="section container" id="planner-waitlist">
        <NewsletterSignup context="planner" />
      </section>
    </>
  );
}
