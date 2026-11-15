import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { EnquiryForm } from "@/components/enquiry-form";
import { catalogueCategories } from "@/content/catalogue";

export const metadata: Metadata = {
  title: "Agro-Store",
  description:
    "Explore the planned Freshroots Malawi agricultural supplies categories, including fertilizers, crop protection, protective clothing and equipment.",
};

export default function AgroStorePage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Freshroots Agro-Store · Planned"
        title="Practical supplies for agricultural work."
        description="Freshroots is preparing an agricultural supplies store. Its planned range includes fertilizers, crop protection, protective clothing, safety equipment, tools and related essentials."
      />

      <section className="section section--white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Planned catalogue</p>
            <h2>Categories under development.</h2>
            <p>
              The categories below reflect the planned direction of the
              Agro-Store. Specific brands, product specifications, prices,
              opening information and availability have not yet been
              confirmed.
            </p>
          </div>

          <div className="catalogue-grid">
            {catalogueCategories.map((category) => (
              <article className="catalogue-item" id={category.id} key={category.id}>
                <div className="catalogue-item__top">
                  <span className="catalogue-item__number">{category.number}</span>
                  <span className="catalogue-item__status">Planned category</span>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>

          <div className="catalogue-note">
            <p className="eyebrow">Availability</p>
            <p>
              This is a category preview, not a live inventory. No product is
              represented as currently stocked or available to purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container enquiry-layout">
          <div className="enquiry-layout__aside">
            <p className="eyebrow">Product enquiry</p>
            <h2 className="display-heading">Looking for a particular supply?</h2>
            <p className="body-large">
              Prepare an enquiry with the category and product information
              you need. Freshroots can confirm the range directly.
            </p>
          </div>
          <EnquiryForm mode="agro-store" />
        </div>
      </section>
    </main>
  );
}
