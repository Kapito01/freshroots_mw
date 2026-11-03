import Link from "next/link";

/**
 * Temporary typographic mark echoing the circular Freshroots "F" emblem.
 * Replace with the client's original logo file (SVG or transparent PNG in
 * public/brand/) once supplied. Do not redraw the emblem.
 */
export function BrandMark() {
  return (
    <Link className="brand" href="/" aria-label="Freshroots Malawi home">
      <span className="brand-mark" aria-hidden="true">
        F
      </span>
      <span className="brand-copy" aria-hidden="true">
        <span className="brand-name">freshroots</span>
        <span className="brand-location">MALAWI</span>
      </span>
    </Link>
  );
}
