import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85";
const riceImage =
  "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1400&q=85";
const maizeImage =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85";
const supplyImage =
  "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=85";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Image
          className="hero-image"
          src={heroImage}
          alt="Agricultural landscape used as temporary website imagery"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Freshroots Malawi · Integrated agribusiness</span>
          <h1>Rooted in Malawi. Growing with purpose.</h1>
          <p className="hero-copy">
            An integrated agribusiness focused on producing quality crops and
            building opportunities across Malawi&apos;s agricultural sector.
          </p>
          <div className="hero-actions">
            <Link className="button button--light" href="/operations">
              Explore our operations <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button--outline-light" href="/corporate-supply">
              Corporate enquiries
            </Link>
          </div>
        </div>
        <span className="hero-caption">Agriculture · Quality · Opportunity</span>
      </section>

      <section className="section section--white">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A growing business, grounded in agriculture.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Freshroots is a Malawian integrated agribusiness focused on
              producing quality crops. With rice and maize at the centre of its
              current farming activities, the business is building a broader
              presence across the agricultural value chain.
            </p>
            <Link className="text-link" href="/about">
              Discover Freshroots <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our operations</span>
            <h2>Focused on the crops that matter.</h2>
            <p>
              Our current farming focus is rice and maize. Explore the crops
              that shape Freshroots&apos; agricultural work.
            </p>
          </div>

          <div className="operation-grid">
            <article className="operation-card">
              <Image
                src={riceImage}
                alt="Agricultural field imagery used as a temporary placeholder for rice production"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="operation-card-content">
                <span className="eyebrow">Crop production</span>
                <h3>Rice</h3>
                <p>
                  Discover Freshroots&apos; rice production focus and its role
                  in the business&apos; growing agricultural ambitions.
                </p>
                <Link className="text-link" href="/operations">
                  Explore operations <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>

            <article className="operation-card">
              <Image
                src={maizeImage}
                alt="Cultivated plants used as a temporary placeholder for maize production"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="operation-card-content">
                <span className="eyebrow">Crop production</span>
                <h3>Maize</h3>
                <p>
                  Learn about maize as another important part of
                  Freshroots&apos; current farming activities.
                </p>
                <Link className="text-link" href="/operations">
                  Explore operations <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div className="split-feature-image">
          <Image
            src={supplyImage}
            alt="Agricultural landscape used as temporary imagery for the upcoming agricultural supplies store"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="split-feature-content">
          <span className="eyebrow">The next chapter</span>
          <h2>Supporting the people who make agriculture possible.</h2>
          <p>
            Freshroots is preparing to expand into agricultural supplies,
            including fertilizers, protective gear and other farming
            essentials.
          </p>
          <Link className="button button--light" href="/agro-store">
            Discover the Agro-Store <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">One business, growing opportunities</span>
            <h2>Built around agriculture. Open to what comes next.</h2>
          </div>
          <div className="pillars-grid">
            <article className="pillar">
              <p className="pillar-index">01 / PRODUCTION</p>
              <h3>Crop production</h3>
              <p>
                Rice and maize farming form the foundation of Freshroots&apos;
                current agricultural focus.
              </p>
            </article>
            <article className="pillar">
              <p className="pillar-index">02 / SUPPLIES</p>
              <h3>Agricultural supplies</h3>
              <p>
                An upcoming store focused on fertilizers, protective gear and
                practical farming essentials.
              </p>
            </article>
            <article className="pillar">
              <p className="pillar-index">03 / PARTNERSHIPS</p>
              <h3>Business relationships</h3>
              <p>
                A point of connection for organisations interested in
                discussing agricultural supply and partnership opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Work with Freshroots</span>
              <h2>Let&apos;s explore what we can grow together.</h2>
            </div>
            <Link className="button button--light" href="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
