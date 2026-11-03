import { ButtonLink } from "@/components/button-link";
import { contactCta } from "@/content/home";
import { instagramUrl } from "@/content/site";

export function HomeContactCta() {
  return (
    <section className="section" aria-labelledby="contact-cta-title">
      <div className="container contact-cta">
        <div>
          <p className="eyebrow">{contactCta.eyebrow}</p>
          <h2 id="contact-cta-title" className="display-heading">
            {contactCta.title}
          </h2>
          <p className="body-large">{contactCta.description}</p>
        </div>
        <div className="action-row">
          <ButtonLink href={contactCta.action.href} variant="primary">
            {contactCta.action.label}
          </ButtonLink>
          <ButtonLink href={instagramUrl} variant="secondary">
            Instagram
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
