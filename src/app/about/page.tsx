import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Freshroots Malawi, an integrated agribusiness focused on producing quality crops.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About Freshroots"
        title="Grounded in agriculture. Looking ahead."
        description="Freshroots is an integrated agribusiness focused on producing quality crops in Malawi, with current farming activities centred on rice and maize."
      />
      <section className="section section--white">
        <div className="container prose-block">
          <span className="eyebrow">Our business</span>
          <h2>A practical approach to agricultural growth.</h2>
          <p>
            Freshroots brings together a focus on crop production with plans to
            expand into agricultural supplies. The business is developing its
            role across the agricultural sector while keeping quality crop
            production at the centre of its work.
          </p>
          <p>
            As Freshroots grows, its website will share more about its people,
            operations, products and the opportunities it is building with
            customers and business partners.
          </p>
        </div>
      </section>
    </main>
  );
}
