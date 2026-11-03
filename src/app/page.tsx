import { HomeAgroStore } from "@/components/home/home-agro-store";
import { HomeContactCta } from "@/components/home/home-contact-cta";
import { HomeCorporateSupply } from "@/components/home/home-corporate-supply";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIntro } from "@/components/home/home-intro";
import { HomeOperations } from "@/components/home/home-operations";

// Section order follows docs/DESIGN_SYSTEM.md → "Homepage section order".
export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeIntro />
      <HomeOperations />
      <HomeAgroStore />
      <HomeCorporateSupply />
      <HomeContactCta />
    </main>
  );
}
