import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link className="brand" href="/" aria-label="Freshroots Malawi home">
              <span className="brand-mark" aria-hidden="true">
                F
              </span>
              <span className="brand-copy">
                <span className="brand-name">freshroots</span>
                <span className="brand-location">MALAWI</span>
              </span>
            </Link>
            <p className="footer-description">
              An integrated agribusiness focused on producing quality crops
              and building agricultural opportunities in Malawi.
            </p>
          </div>

          <div>
            <p className="footer-heading">Explore</p>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/about">About Freshroots</Link>
              <Link href="/operations">Our operations</Link>
              <Link href="/agro-store">Agro-Store</Link>
              <Link href="/corporate-supply">Corporate supply</Link>
            </nav>
          </div>

          <div>
            <p className="footer-heading">Connect</p>
            <nav className="footer-links" aria-label="Social and contact links">
              <Link
                href="https://www.instagram.com/freshroots_mw/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram ↗
              </Link>
              <Link href="/contact">Contact Freshroots</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Freshroots Malawi. All rights reserved.</span>
          <span>Rooted in agriculture. Focused on growth.</span>
        </div>
      </div>
    </footer>
  );
}
