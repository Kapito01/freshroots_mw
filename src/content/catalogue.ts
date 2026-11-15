export type CatalogueCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  status: "planned";
};

export const catalogueCategories: CatalogueCategory[] = [
  {
    id: "fertilizers",
    number: "01",
    title: "Fertilizers",
    description: "Nutrients and soil-support products for agricultural use.",
    status: "planned",
  },
  {
    id: "crop-protection",
    number: "02",
    title: "Crop protection",
    description: "Products intended to help protect crops during production.",
    status: "planned",
  },
  {
    id: "protective-clothing",
    number: "03",
    title: "Protective clothing",
    description: "Clothing and wearable protection for agricultural work.",
    status: "planned",
  },
  {
    id: "safety-equipment",
    number: "04",
    title: "Safety equipment",
    description: "Equipment intended to support safer working conditions.",
    status: "planned",
  },
  {
    id: "tools-equipment",
    number: "05",
    title: "Tools and equipment",
    description: "Practical tools and equipment for farming activities.",
    status: "planned",
  },
  {
    id: "other-supplies",
    number: "06",
    title: "Other farming supplies",
    description: "Additional agricultural essentials as the range is confirmed.",
    status: "planned",
  },
];

export const agroStoreEnquiryOptions = catalogueCategories.map(
  (category) => category.title,
);

export const corporateEnquiryOptions = [
  "Rice",
  "Maize",
  "Rice and maize",
  "Partnership enquiry",
  "Other",
];
