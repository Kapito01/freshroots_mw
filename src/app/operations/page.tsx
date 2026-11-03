import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Our Operations",
  description:
    "Explore Freshroots Malawi's current agricultural focus on rice and maize production.",
};

export default function OperationsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Our operations"
        title="Growing quality crops."
        description="Rice and maize are at the centre of Freshroots' current farming activities. This page will grow as more details about the farms and production operations are approved for publication."
      />

      <section className="section section--white">
        <div className="container">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">01 / Rice</span>
              <h2>A core part of our agricultural focus.</h2>
            </div>
            <div className="prose-block">
              <p>
                Rice is one of Freshroots&apos; main crops. The company is focused
                on producing quality crops and will share further details
                about varieties, growing practices, harvest periods and supply
                as these are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div>
              <span className="eyebrow">02 / Maize</span>
              <h2>Another important crop in our work.</h2>
            </div>
            <div className="prose-block">
              <p>
                Freshroots also farms maize. More information about the
                operation, crop specifications and commercial availability
                will be added after confirmation by the business.
              </p>
            </div>
          </div>
          <div className="notice" style={{ marginTop: "3rem" }}>
            Production figures, locations, crop varieties and supply details
            will only be published once they have been verified and approved
            by Freshroots.
          </div>
        </div>
      </section>
    </main>
  );
}
