import { redClayAssets, type RedClayAsset } from "@/lib/assets/registry";

export type CoffeeId = "KENYA LOT 01" | "BURUNDI LOT 01" | "ETHIOPIA LOT 01" | "ETHIOPIA LOT 02";

export type CoffeeMedia = {
  shopPrimary: RedClayAsset;
  shopAlternate?: RedClayAsset;
  pdpHero: RedClayAsset;
  origin?: RedClayAsset;
  process?: RedClayAsset;
  secondaryProcess?: RedClayAsset;
  botanical?: RedClayAsset;
  ritual?: RedClayAsset;
};

export type Coffee = {
  id: CoffeeId;
  slug: string;
  origin: string;
  region: string;
  sensoryStatement?: string;
  notes: string[];
  process?: string;
  variety?: string;
  elevation?: string;
  price: number | null;
  currency: string | null;
  availability: string | null;
  media: CoffeeMedia;
  relatedEdition?: string;
};

const pendingCoffee = (asset: RedClayAsset) => asset;

export const coffees: Coffee[] = [
  {
    id: "KENYA LOT 01",
    slug: "kenya-lot-01",
    origin: "Kenya",
    region: "Central Kenya",
    sensoryStatement: "A bright, fruit-led cup with a clear sweetness.",
    notes: ["Blackcurrant", "plum", "cane sugar"],
    process: "Washed",
    price: null,
    currency: null,
    availability: null,
    media: {
      shopPrimary: pendingCoffee(redClayAssets.pending.kenyaProduct),
      shopAlternate: redClayAssets.origins.kenyaDetail,
      pdpHero: pendingCoffee(redClayAssets.pending.kenyaProduct),
      origin: redClayAssets.origins.kenyaLead,
      process: redClayAssets.origins.kenyaProcess,
      secondaryProcess: redClayAssets.origins.kenyaDrying,
      botanical: redClayAssets.origins.kenyaDetail,
      ritual: redClayAssets.ritual.pourOver,
    },
    relatedEdition: "water-and-time",
  },
  {
    id: "BURUNDI LOT 01",
    slug: "burundi-lot-01",
    origin: "Burundi",
    region: "Kayanza / Burundi",
    sensoryStatement: "A lifted, floral cup with soft fruit and honeyed depth.",
    notes: ["Red apple", "honey", "orange blossom"],
    price: null,
    currency: null,
    availability: null,
    media: {
      shopPrimary: pendingCoffee(redClayAssets.pending.burundiProduct),
      shopAlternate: redClayAssets.origins.burundiBotanical,
      pdpHero: pendingCoffee(redClayAssets.pending.burundiProduct),
      origin: redClayAssets.origins.burundiLead,
      process: redClayAssets.origins.burundiSupport,
      botanical: redClayAssets.origins.burundiBotanical,
      ritual: redClayAssets.ritual.hands,
    },
  },
  {
    id: "ETHIOPIA LOT 01",
    slug: "ethiopia-lot-01",
    origin: "Ethiopia",
    region: "Southern Ethiopia",
    sensoryStatement: "A tactile process-led release with a clean, open finish.",
    notes: [],
    price: null,
    currency: null,
    availability: null,
    media: {
      shopPrimary: pendingCoffee(redClayAssets.pending.ethiopia01Product),
      shopAlternate: redClayAssets.origins.ethiopiaSupport,
      pdpHero: pendingCoffee(redClayAssets.pending.ethiopia01Product),
      origin: redClayAssets.origins.ethiopiaLead,
      process: redClayAssets.origins.ethiopiaSupport,
      secondaryProcess: redClayAssets.origins.ethiopiaDetail,
      ritual: redClayAssets.ritual.pourOver,
    },
  },
  {
    id: "ETHIOPIA LOT 02",
    slug: "ethiopia-lot-02",
    origin: "Ethiopia",
    region: "Southern Ethiopia",
    sensoryStatement: "A close, process-led study of fruit, sorting, and attention.",
    notes: [],
    price: null,
    currency: null,
    availability: null,
    media: {
      shopPrimary: pendingCoffee(redClayAssets.pending.ethiopia02Product),
      shopAlternate: redClayAssets.origins.ethiopiaDetail,
      pdpHero: pendingCoffee(redClayAssets.pending.ethiopia02Product),
      origin: redClayAssets.origins.ethiopiaLead,
      process: redClayAssets.origins.ethiopiaDetail,
      secondaryProcess: redClayAssets.origins.ethiopiaSupport,
      ritual: redClayAssets.ritual.hands,
    },
  },
];

export const kilnCup = {
  id: "THE KILN CUP" as const,
  slug: "the-kiln-cup",
  origin: "Companion object",
  region: "Companion object",
  notes: ["Raw terracotta", "mineral-white glaze"],
  price: null,
  currency: null,
  availability: null,
  assetId: "SHOP-KILN-01",
  media: {
    shopPrimary: redClayAssets.pending.kilnCup,
    pdpHero: redClayAssets.pending.kilnCup,
  },
};

export type Product = Coffee | typeof kilnCup;

export function getProductBySlug(slug: string) {
  return [...coffees, kilnCup].find((product) => product.slug === slug);
}

export function formatPrice(price: number | null, currency: string | null) {
  if (price === null || currency === null) return null;
  return new Intl.NumberFormat("en", { style: "currency", currency }).format(price);
}
