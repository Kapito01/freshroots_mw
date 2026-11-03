import { ButtonLink } from "@/components/button-link";
import { corporateSupply } from "@/content/home";

export function HomeCorporateSupply() {
  return (
    <section
      className="section section--forest surface-dark"
      aria-labelledby="corporate-supply-title"
    >
      <div className="container split-grid">
        <div>
          <p className="eyebrow">{corporateSupply.eyebrow}</p>
          <h2 id="corporate-supply-title" className="display-heading">
            {corporateSupply.title}
          </h2>
        </div>
        <div className="split-grid__body">
          <p className="body-large">{corporateSupply.description}</p>
          <ul className="rule-list" aria-label="Organisations we welcome enquiries from">
            {corporateSupply.audiences.map((audience) => (
              <li key={audience}>{audience}</li>
            ))}
          </ul>
          <ButtonLink href={corporateSupply.action.href} variant="light">
            {corporateSupply.action.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
