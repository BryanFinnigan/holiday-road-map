import Link from "next/link";

const footerSections = [
  {
    title: "Plan",
    links: [
      { href: "/printables", label: "Road Map Pages" },
      { href: "/printables/gift-tracker", label: "Gift Tracker" },
      { href: "/printables/holiday-budget-planner", label: "Holiday Budget Planner" },
      { href: "/planner", label: "Holiday Road Map Planner" },
      { href: "/planner/september-1-january-15", label: "September 1 – January 15" },
      { href: "/guidebook/planning", label: "Planning Guidebook" }
    ]
  },
  {
    title: "Find",
    links: [
      { href: "/giftmatch", label: "GiftMatch" },
      { href: "/gifts", label: "Gift Guides" },
      { href: "/gifts/for-mom", label: "Gifts for Mom" },
      { href: "/gifts/for-dad", label: "Gifts for Dad" },
      { href: "/gifts/for-teachers", label: "Gifts for Teachers" },
      { href: "/gifts/by-budget/under-25", label: "Gifts Under $25" },
      { href: "/gifts/by-budget/under-50", label: "Gifts Under $50" },
      { href: "/gifts/stocking-stuffers", label: "Stocking Stuffers" },
      { href: "/gifts/last-minute", label: "Last-Minute Gifts" }
    ]
  },
  {
    title: "Explore",
    links: [
      { href: "/merrymap", label: "MerryMap" },
      { href: "/christmas-near-me", label: "Christmas Near Me" },
      { href: "/christmas-near-me/michigan/detroit", label: "Christmas in Detroit" },
      { href: "/christmas-near-me/illinois/chicago", label: "Christmas in Chicago" },
      { href: "/christmas-near-me/ohio/columbus", label: "Christmas in Columbus" },
      { href: "/guidebook/wrapping", label: "WrapLab" },
      { href: "/newsletter", label: "The Road Map Letter" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Holiday Road Map</p>
          <p className="footer-copy">Plan the season. Find the gifts. Enjoy the road.</p>
          <p className="footer-note">A warm, practical planning system for Christmas gifts, affiliate-ready gift guides, printables, local guides, wrapping tutorials, and seasonal ideas.</p>
          <p className="footer-note">Less stressful. More joyful.</p>
        </div>
        {footerSections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            {section.links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
