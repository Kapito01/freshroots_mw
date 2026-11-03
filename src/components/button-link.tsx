import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "light" | "outline-light" | "text";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "button button--forest",
  secondary: "button button--outline",
  light: "button button--light",
  "outline-light": "button button--outline-light",
  text: "text-link",
};

/**
 * Link styled as a button or text link. External links open in a new tab,
 * are announced to screen readers and use the ↗ glyph; internal links use →.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const classes = [variantClass[variant], className].filter(Boolean).join(" ");

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <span className="link-arrow" aria-hidden="true">
          ↗
        </span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <span className="link-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
