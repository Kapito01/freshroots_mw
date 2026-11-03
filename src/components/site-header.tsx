import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contactNavItem, primaryNavigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Main navigation">
          {primaryNavigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-contact" href={contactNavItem.href}>
            {contactNavItem.label}
          </Link>
        </nav>

        {/* Native <details> keeps the mobile menu functional without client JS. */}
        <details className="mobile-menu">
          <summary aria-label="Navigation menu">
            <span className="menu-icon" aria-hidden="true" />
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            {primaryNavigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href={contactNavItem.href}>{contactNavItem.label}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
