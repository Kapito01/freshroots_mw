/**
 * Shared site content.
 *
 * Only client-provided or client-verifiable information belongs here.
 * Unknown contact details must not be added until Freshroots confirms them
 * (see docs/CONTENT_REQUIREMENTS.md).
 */

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Operations", href: "/operations" },
  { label: "Agro-Store", href: "/agro-store" },
  { label: "Corporate Supply", href: "/corporate-supply" },
];

export const contactNavItem: NavItem = { label: "Contact", href: "/contact" };

/** Official Instagram profile supplied by the client. */
export const instagramUrl = "https://www.instagram.com/freshroots_mw/";

export type SiteImage = {
  src: string;
  alt: string;
  /**
   * True while the image is temporary stock photography. Placeholder images
   * are visibly labelled so they are never mistaken for Freshroots' own
   * farms, people or facilities. Set to false only for approved Freshroots
   * photography.
   */
  placeholder: boolean;
};

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const images = {
  hero: {
    src: unsplash("photo-1500382017468-9049fed747ef", 2400),
    alt: "Placeholder stock photograph of an agricultural landscape. Not a Freshroots farm.",
    placeholder: true,
  },
  rice: {
    src: unsplash("photo-1499529112087-3cb3b73cec95", 1400),
    alt: "Placeholder stock photograph representing rice production. Not a Freshroots farm.",
    placeholder: true,
  },
  maize: {
    src: unsplash("photo-1416879595882-3373a0480b5b", 1400),
    alt: "Placeholder stock photograph representing maize production. Not a Freshroots farm.",
    placeholder: true,
  },
  agroStore: {
    src: unsplash("photo-1500937386664-56d1dfef3854", 1800),
    alt: "Placeholder stock photograph of farmland representing the planned Agro-Store. Not a Freshroots facility.",
    placeholder: true,
  },
} satisfies Record<string, SiteImage>;
