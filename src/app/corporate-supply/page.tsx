import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Corporate Supply",
  description:
    "Prepare a corporate enquiry about rice, maize or agricultural partnership opportunities with Freshroots Malawi.",
};

export default function CorporateSupplyPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Corporate supply"
        title="A conversation about agricultural supply starts here."
        description="Freshroots welcomes enquiries from organisations interested in discussing rice, maize and potential business partnerships."
      />

      <section className="section section--white">
        <div className="container enquiry-layout">
          <div className="enquiry-layout__aside">
            <p className="eyebrow">For organisations</p>
            <h2 className="display-heading">Share the requirements behind your enquiry.</h2>
            <p className="body-large">
              Corporate buyers, wholesalers, distributors, food processors,
              retailers and institutions can use this enquiry builder to
              organise the details of their request.
            </p>
            <div className="enquiry-guidance">
              <h3>Useful details to include</h3>
              <ul className="rule-list rule-list--light">
                <li>Crop or area of interest</li>
                <li>Estimated quantity, if known</li>
                <li>Required specifications, if known</li>
                <li>Destination and timing, if known</li>
              </ul>
            </div>
          </div>
          <EnquiryForm mode="corporate" />
        </div>
      </section>
    </main>
  );
}
