import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Operations", href: "/operations" },
  { label: "Agro-Store", href: "/agro-store" },
  { label: "Corporate Supply", href: "/corporate-supply" },
];

function Brand() {
  // Temporary typographic mark. Replace with the client's original logo file
  // once a production-quality SVG or transparent PNG is supplied.
  return (
    <Link className="brand" href="/" aria-label="Freshroots Malawi home">
      <span className="brand-mark" aria-hidden="true">
        F
      </span>
      <span className="brand-copy">
        <span className="brand-name">freshroots</span>
        <span className="brand-location">MALAWI</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/contact">
            Contact
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true">☰</span>
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
