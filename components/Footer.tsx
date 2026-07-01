import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Holiday Road Map</p>
          <p className="footer-copy">Plan the season. Find the gifts. Enjoy the road.</p>
          <p className="footer-note">A warm, practical planning system for Christmas gifts, printables, local guides, and seasonal ideas.</p>
        </div>
        <div>
          <h2>Plan</h2>
          <Link href="/printables">Road Map Pages</Link>
          <Link href="/planner">Holiday Road Map Planner</Link>
          <Link href="/guidebook/planning">Planning Guidebook</Link>
        </div>
        <div>
          <h2>Find</h2>
          <Link href="/giftmatch">GiftMatch</Link>
          <Link href="/gifts/for-mom">Gifts for Mom</Link>
          <Link href="/gifts/by-budget/under-50">Gifts Under $50</Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/merrymap">MerryMap</Link>
          <Link href="/christmas-near-me/michigan/detroit">Christmas in Detroit</Link>
          <Link href="/guidebook/wrapping">WrapLab</Link>
        </div>
      </div>
    </footer>
  );
}
