import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Freshroots Malawi, an integrated agribusiness focused on producing quality crops, mainly rice and also maize.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="About Freshroots"
        title="Agriculture is the work at the centre of Freshroots."
        description="Freshroots is an integrated agribusiness in Malawi focused on producing quality crops, with rice as its main crop and maize also part of its farming activity."
      />

      <section className="section section--white">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">The business</p>
            <h2 className="display-heading">Rooted in crop production. Building towards more.</h2>
          </div>
          <div className="split-grid__body prose-block">
            <p>
              Freshroots focuses on producing quality agricultural crops in
              Malawi. Rice is its main crop, alongside maize. The business is
              also planning an agricultural supplies store for protective
              gear, fertilizers and related farming essentials.
            </p>
            <p>
              This website introduces those areas of work and provides a
              starting point for conversations with organisations, buyers
              and people interested in agricultural supplies.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Areas of focus</p>
            <h2>Current farming activity and a planned new offer.</h2>
            <p>
              These are the areas Freshroots has identified for its current
              website. Further operational details will be added when
              confirmed by the business.
            </p>
          </div>
          <div className="pillars-grid">
            <article className="pillar">
              <p className="pillar-index">01 / PRODUCTION</p>
              <h3>Rice</h3>
              <p>Freshroots&apos; main crop and a central part of its agricultural focus.</p>
            </article>
            <article className="pillar">
              <p className="pillar-index">02 / PRODUCTION</p>
              <h3>Maize</h3>
              <p>Grown alongside rice as part of Freshroots&apos; farming activity.</p>
            </article>
            <article className="pillar">
              <p className="pillar-index">03 / PLANNED</p>
              <h3>Agro-Store</h3>
              <p>An upcoming agricultural supplies store, with its product range still to be confirmed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container contact-cta">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display-heading">Looking to work with Freshroots?</h2>
            <p className="body-large">Share a corporate supply or general enquiry.</p>
          </div>
          <div className="action-row">
            <ButtonLink href="/corporate-supply" variant="primary">Corporate supply</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
