import Link from "next/link";

const navItems = [
  { href: "/giftmatch", label: "GiftMatch" },
  { href: "/gifts", label: "Gift Guides" },
  { href: "/printables", label: "Printables" },
  { href: "/planner", label: "Planner" },
  { href: "/merrymap", label: "MerryMap" },
  { href: "/guidebook/wrapping", label: "WrapLab" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand-mark" href="/" aria-label="Holiday Road Map home">
          <span className="brand-icon" aria-hidden="true">✶</span>
          <span>
            <strong>Holiday Road Map</strong>
            <small>Plan the season</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
