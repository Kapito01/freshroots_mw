import { ButtonLink } from "@/components/button-link";
import { PhotoFrame } from "@/components/photo-frame";
import { agroStore } from "@/content/home";

export function HomeAgroStore() {
  return (
    <section className="section section--white" aria-labelledby="agro-store-title">
      <div className="container feature">
        <PhotoFrame
          image={agroStore.image}
          sizes="(max-width: 900px) 100vw, 55vw"
          className="feature__media"
        />
        <div className="feature__body">
          <p className="eyebrow">{agroStore.eyebrow}</p>
          <h2 id="agro-store-title" className="display-heading">
            {agroStore.title}
          </h2>
          <p className="body-large">{agroStore.description}</p>
          <ul className="inline-list" aria-label="Planned product categories">
            {agroStore.categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <ButtonLink href={agroStore.action.href} variant="primary">
            {agroStore.action.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
