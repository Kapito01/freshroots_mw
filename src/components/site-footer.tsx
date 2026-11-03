import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contactNavItem, instagramUrl, primaryNavigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <BrandMark />
            <p className="footer-description">
              An integrated agribusiness in Malawi, focused on producing
              quality crops.
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Explore</h2>
            <nav className="footer-links" aria-label="Footer navigation">
              {primaryNavigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="footer-heading">Connect</h2>
            <ul className="footer-links">
              <li>
                <Link href={contactNavItem.href}>Contact Freshroots</Link>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  Instagram <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Freshroots Malawi. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
