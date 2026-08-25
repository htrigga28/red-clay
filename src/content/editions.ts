import { redClayAssets, type RedClayAsset } from "@/lib/assets/registry";

export type EditionSection = { heading: string; body: string; asset?: RedClayAsset; assetClass?: string; caption?: string };
export type Edition = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  region: string;
  connectedCoffeeSlugs: string[];
  relatedOriginSlug: string;
  leadAsset: RedClayAsset;
  supportingAssets: RedClayAsset[];
  sections: EditionSection[];
};

export const editions: Edition[] = [
  {
    slug: "water-and-time", eyebrow: "THE EDITIONS // VOLUME 01", title: "Water & Time", subtitle: "Washed coffee in the Central Kenya highlands.", summary: "A study of water, sorting, and the clear sweetness held in a Central Kenya release.", region: "Central Kenya", connectedCoffeeSlugs: ["kenya-lot-01"], relatedOriginSlug: "central-kenya", leadAsset: redClayAssets.origins.kenyaLead, supportingAssets: [redClayAssets.origins.kenyaProcess, redClayAssets.origins.kenyaDrying],
    sections: [
      { heading: "A highland held in green", body: "Central Kenya opens through a cultivated highland context: coffee plants, red earth, and a working landscape held at the edge of the frame.", asset: redClayAssets.origins.kenyaLead, assetClass: "edition-section-media--wide" },
      { heading: "The clarity of a washed lot", body: "Water gives the process its quiet architecture. Sorting and drying make the work visible without turning it into spectacle.", asset: redClayAssets.origins.kenyaProcess, caption: "Kenya process context. The image is used broadly and does not identify the fictional lot location." },
      { heading: "A release for early light", body: "Red Clay’s Kenya release is bright, fruit-led, and clear in the cup: blackcurrant, plum, and cane sugar held in a precise line." },
    ],
  },
  {
    slug: "along-the-kayanza-hills", eyebrow: "THE EDITIONS // VOLUME 02", title: "Along the Kayanza Hills", subtitle: "Hills, washing-station geometry, and a lifted Burundi cup.", summary: "An intimate chapter on vertical landscapes, drying beds, and the patient shape of a Burundi release.", region: "Kayanza / Burundi", connectedCoffeeSlugs: ["burundi-lot-01"], relatedOriginSlug: "kayanza-burundi", leadAsset: redClayAssets.origins.burundiLead, supportingAssets: [redClayAssets.origins.burundiBotanical, redClayAssets.origins.burundiSupport],
    sections: [
      { heading: "A landscape with vertical rhythm", body: "The approved Kayanza plate carries the chapter: hills, processing geometry, and a sense of work moving across a steep horizon.", asset: redClayAssets.origins.burundiLead, assetClass: "edition-section-media--tall" },
      { heading: "Detail before declaration", body: "Coffee cherries and leaves bring the story closer. The broader Burundi support plate remains broader context, not a Kayanza-specific claim.", asset: redClayAssets.origins.burundiBotanical, caption: "Burundi botanical context from Ngozi." },
      { heading: "Lifted, floral, honeyed", body: "The fictional Burundi release holds red apple, honey, and orange blossom in a soft, lifted line that returns the chapter to the cup." },
    ],
  },
  {
    slug: "canopy-and-landrace", eyebrow: "THE EDITIONS // VOLUME 03", title: "Canopy & Landrace", subtitle: "Coffee diversity in the southern Ethiopian highlands.", summary: "A process-led look at botanical depth, sorting work, and the open finish of Southern Ethiopia releases.", region: "Southern Ethiopia", connectedCoffeeSlugs: ["ethiopia-lot-01", "ethiopia-lot-02"], relatedOriginSlug: "southern-ethiopia", leadAsset: redClayAssets.origins.ethiopiaLead, supportingAssets: [redClayAssets.origins.ethiopiaSupport, redClayAssets.origins.ethiopiaDetail],
    sections: [
      { heading: "Process as close landscape", body: "The current Ethiopian library is strongest at close range: sorting work, hands, and coffee moving through attention near Hawassa. It gives the story texture without claiming a narrower landscape than the archive supports.", asset: redClayAssets.origins.ethiopiaLead, assetClass: "edition-section-media--wide" },
      { heading: "Botanical depth", body: "The chapter stays with coffee diversity and process detail. Its visual language is layered, tactile, and deliberately open.", asset: redClayAssets.origins.ethiopiaDetail, caption: "Southern Ethiopia process context." },
      { heading: "Two studies, one continuum", body: "The two Ethiopia releases are close studies of fruit, sorting, and attention: a clean, open finish in one; a more tactile process-led line in the other." },
    ],
  },
];

export const legacyEditionSlugs: Record<string, string> = {
  "the-shape-of-sweetness": "along-the-kayanza-hills",
  "a-vessel-for-morning": "canopy-and-landrace",
};

export const getEditionBySlug = (slug: string) => editions.find((edition) => edition.slug === (legacyEditionSlugs[slug] ?? slug));
