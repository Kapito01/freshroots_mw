import { ButtonLink } from "@/components/button-link";
import { PhotoFrame } from "@/components/photo-frame";
import { SectionHeading } from "@/components/section-heading";
import { operations, type CropFeature } from "@/content/home";

function CropItem({ crop }: { crop: CropFeature }) {
  return (
    <article className="crop" aria-labelledby={`crop-${crop.id}`}>
      <PhotoFrame
        image={crop.image}
        sizes="(max-width: 700px) 100vw, 50vw"
        className="crop__media"
      />
      <div className="crop__body">
        <p className="crop__label">{crop.label}</p>
        <h3 id={`crop-${crop.id}`}>{crop.name}</h3>
        <p>{crop.description}</p>
        <ButtonLink href={crop.href} variant="text">
          {crop.name} operations
        </ButtonLink>
      </div>
    </article>
  );
}

export function HomeOperations() {
  return (
    <section className="section" aria-labelledby="operations-title">
      <div className="container">
        <SectionHeading
          id="operations-title"
          eyebrow={operations.eyebrow}
          title={operations.title}
          description={operations.description}
        />
        <div className="crop-grid">
          {operations.crops.map((crop) => (
            <CropItem crop={crop} key={crop.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
