import { images, type SiteImage } from "@/content/site";

/**
 * Homepage copy. Statements are limited to what the client has provided:
 * Freshroots is an integrated Malawian agribusiness focused on producing
 * quality crops, mainly rice and also maize, and plans to open an
 * agricultural supplies store. Do not add figures, locations, partners or
 * delivery promises here without client approval.
 */

export const hero = {
  eyebrow: "Integrated agribusiness · Malawi",
  title: "Quality rice and maize, grown in Malawi.",
  description:
    "Freshroots is an integrated agribusiness focused on producing quality crops, with an agricultural supplies store planned.",
  primaryAction: { label: "Corporate supply enquiries", href: "/corporate-supply" },
  secondaryAction: { label: "Explore our operations", href: "/operations" },
  image: images.hero,
};

export const intro = {
  eyebrow: "About Freshroots",
  title: "A Malawian agribusiness focused on quality crops.",
  paragraphs: [
    "Freshroots farms rice as its main crop, together with maize. The business is also preparing to open a store for agricultural supplies.",
  ],
  link: { label: "About Freshroots", href: "/about" },
};

export type CropFeature = {
  id: string;
  name: string;
  label: string;
  description: string;
  href: string;
  image: SiteImage;
};

export const operations = {
  eyebrow: "Operations",
  title: "Two crops at the centre of our work.",
  description:
    "Rice and maize define Freshroots' current farming activity. Varieties, harvest periods and supply details will be published once confirmed.",
  crops: [
    {
      id: "rice",
      name: "Rice",
      label: "Main crop",
      description:
        "Rice is Freshroots' primary crop and the core of its current farming operations.",
      href: "/operations#rice",
      image: images.rice,
    },
    {
      id: "maize",
      name: "Maize",
      label: "Also grown",
      description:
        "Maize is farmed alongside rice as part of Freshroots' crop production.",
      href: "/operations#maize",
      image: images.maize,
    },
  ] satisfies CropFeature[],
};

export const agroStore = {
  eyebrow: "Agro-Store · Planned",
  title: "Agricultural supplies, from a business that farms.",
  description:
    "Freshroots plans to open a store for agricultural supplies. Product listings will be published once they are confirmed.",
  categories: ["Fertilizers", "Protective gear", "Farming essentials"],
  action: { label: "View the Agro-Store", href: "/agro-store" },
  image: images.agroStore,
};

export const corporateSupply = {
  eyebrow: "Corporate supply",
  title: "Sourcing rice or maize for your organisation?",
  description:
    "Freshroots welcomes conversations with organisations that buy agricultural produce. Share your requirements to start a discussion about supply.",
  audiences: [
    "Food processors and manufacturers",
    "Wholesalers and distributors",
    "Supermarkets and retailers",
    "Institutions and business partners",
  ],
  action: { label: "Start a corporate enquiry", href: "/corporate-supply" },
};

export const contactCta = {
  eyebrow: "Contact",
  title: "Talk to Freshroots.",
  description:
    "For general enquiries and updates, contact Freshroots or follow the business on Instagram.",
  action: { label: "Contact Freshroots", href: "/contact" },
};
