import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { EnquiryForm } from "@/components/enquiry-form";
import { instagramUrl } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prepare a message for Freshroots Malawi or visit its official Instagram profile.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contact Freshroots"
        title="Let's start a conversation."
        description="Use the enquiry builder to prepare a message, or connect with Freshroots through its official Instagram profile."
      />

      <section className="section section--white">
        <div className="container enquiry-layout">
          <div className="enquiry-layout__aside">
            <p className="eyebrow">Connect with Freshroots</p>
            <h2 className="display-heading">A clear first step.</h2>
            <p className="body-large">
              For general questions, updates and initial conversations, visit
              the official Freshroots Instagram profile.
            </p>
            <a className="button button--outline" href={instagramUrl} target="_blank" rel="noreferrer">
              Visit Freshroots on Instagram <span aria-hidden="true">↗</span>
            </a>
            <p className="form-footnote">
              Business telephone, email and physical address details will
              appear here once confirmed by Freshroots.
            </p>
          </div>
          <EnquiryForm mode="contact" />
        </div>
      </section>
    </main>
  );
}
