type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
};

/** Eyebrow label, h2 and optional supporting paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={["section-heading", className].filter(Boolean).join(" ")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-lede">{description}</p> : null}
    </div>
  );
}
