import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Freshroots Malawi through its official social channel.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contact Freshroots"
        title="Let's start a conversation."
        description="For updates and initial enquiries, connect with Freshroots through its official Instagram profile."
      />
      <section className="section section--white">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Connect with us</span>
            <h2>Freshroots Malawi.</h2>
          </div>
          <div className="prose-block">
            <p>
              Follow Freshroots for updates about its agricultural activities
              and upcoming developments.
            </p>
            <Link
              className="button button--forest"
              href="https://www.instagram.com/freshroots_mw/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Instagram <span aria-hidden="true">↗</span>
            </Link>
            <p className="notice" style={{ marginTop: "2rem" }}>
              Business telephone, email and physical contact details will be
              published after they are confirmed by Freshroots.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
