import { ButtonLink } from "@/components/button-link";
import { PhotoFrame } from "@/components/photo-frame";
import { hero } from "@/content/home";

export function HomeHero() {
  return (
    <section className="hero surface-dark" aria-labelledby="hero-title">
      <PhotoFrame image={hero.image} sizes="100vw" priority className="hero__media" />
      <div className="hero__scrim" aria-hidden="true" />
      <div className="container hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="hero__lede">{hero.description}</p>
        <div className="action-row">
          <ButtonLink href={hero.primaryAction.href} variant="light">
            {hero.primaryAction.label}
          </ButtonLink>
          <ButtonLink href={hero.secondaryAction.href} variant="outline-light">
            {hero.secondaryAction.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
