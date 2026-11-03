import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Corporate Supply",
  description:
    "Connect with Freshroots Malawi to discuss agricultural supply and business partnership opportunities.",
};

export default function CorporateSupplyPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Corporate supply"
        title="A conversation about agricultural supply starts here."
        description="Freshroots welcomes conversations with businesses and organisations interested in rice, maize and agricultural partnership opportunities."
      />
      <section className="section section--white">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Business enquiries</span>
            <h2>Tell us what your organisation is looking for.</h2>
          </div>
          <div className="prose-block">
            <p>
              Corporate buyers, wholesalers, distributors and institutions
              can connect with Freshroots to discuss their requirements.
              Details such as quantities, specifications, packaging and
              delivery arrangements should be confirmed directly with the
              business.
            </p>
            <p>
              Official procurement contact details and a structured
              quotation process will be added once Freshroots confirms the
              appropriate business contact channel.
            </p>
            <Link className="button button--forest" href="/contact">
              Contact Freshroots <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
