import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Operations",
  description:
    "Explore Freshroots Malawi's current farming focus on rice and maize production.",
};

export default function OperationsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Our operations"
        title="Two crops at the centre of our work."
        description="Freshroots farms rice as its main crop and also grows maize. Further details about varieties, harvest periods and commercial supply will be published when verified."
      />

      <section className="section section--white anchor-target" id="rice">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">01 / Main crop</p>
            <h2 className="display-heading">Rice</h2>
          </div>
          <div className="split-grid__body prose-block">
            <p>
              Rice is Freshroots' primary crop and the core of its current
              farming activity. The business is focused on producing quality
              crops.
            </p>
            <p>
              Crop varieties, production practices, harvest periods,
              specifications and available quantities will be shared once
              they have been confirmed by Freshroots.
            </p>
            <ButtonLink href="/corporate-supply" variant="text">Discuss rice supply</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section anchor-target" id="maize">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">02 / Also grown</p>
            <h2 className="display-heading">Maize</h2>
          </div>
          <div className="split-grid__body prose-block">
            <p>
              Freshroots also farms maize as part of its agricultural
              activities in Malawi.
            </p>
            <p>
              Further information about crop specifications, supply periods
              and commercial availability will be published after the
              business verifies and approves those details.
            </p>
            <ButtonLink href="/corporate-supply" variant="text">Discuss maize supply</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="notice">
            Production figures, acreage, locations, crop varieties,
            certifications and supply details are not published here because
            they have not yet been confirmed for public use.
          </div>
        </div>
      </section>
    </main>
  );
}
