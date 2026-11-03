import { ButtonLink } from "@/components/button-link";
import { intro } from "@/content/home";

export function HomeIntro() {
  return (
    <section className="section section--white" aria-labelledby="intro-title">
      <div className="container split-grid">
        <div>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 id="intro-title" className="display-heading">
            {intro.title}
          </h2>
        </div>
        <div className="split-grid__body">
          {intro.paragraphs.map((paragraph) => (
            <p className="body-large" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <ButtonLink href={intro.link.href} variant="text">
            {intro.link.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
