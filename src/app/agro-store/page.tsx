import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Agro-Store",
  description:
    "Discover the upcoming Freshroots Malawi agricultural supplies store.",
};

const plannedCategories = [
  {
    title: "Fertilizers",
    description:
      "Agricultural nutrients and soil-support products for farming needs.",
  },
  {
    title: "Protective gear",
    description:
      "Protective clothing and equipment for people working in agriculture.",
  },
  {
    title: "Farming essentials",
    description:
      "A planned range of useful supplies and equipment for agricultural work.",
  },
];

export default function AgroStorePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Freshroots Agro-Store"
        title="Practical supplies for agricultural work."
        description="Freshroots is preparing to expand into agricultural supplies, including fertilizers, protective gear and other farming essentials."
      />

      <section className="section section--white">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Planned product categories</span>
            <h2>Supporting the work behind every harvest.</h2>
            <p>
              The Agro-Store is an upcoming part of Freshroots. Product
              listings, specifications, prices and availability will be
              published when confirmed.
            </p>
          </div>
          <div className="pillars-grid">
            {plannedCategories.map((category, index) => (
              <article className="pillar" key={category.title}>
                <p className="pillar-index">0{index + 1} / CATEGORY</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
          <div className="notice" style={{ marginTop: "3rem" }}>
            The store is presented as an upcoming business initiative. This
            website does not currently offer online purchasing or confirm
            product stock.
          </div>
        </div>
      </section>
    </main>
  );
}
