import { redClayAssets, type RedClayAsset } from "@/lib/assets/registry";

export type ProductFamily = "material-series" | "current-harvest" | "other-ways-to-drink" | "object";

export type CoffeeId =
  | "LATERITE"
  | "BASALT"
  | "LINEN"
  | "KIAMBU / WASHED 01"
  | "KIRINYAGA / WASHED 02"
  | "KAYANZA / WASHED 01"
  | "KAYANZA / NATURAL 02"
  | "SIDAMA / WASHED 01"
  | "GUJI / NATURAL 02"
  | "AFTERLIGHT"
  | "RED CLAY INSTANT — ETHIOPIA"
  | "THREE REGIONS";

export type ProductId = CoffeeId | "THE KILN CUP";

export type CoffeeMedia = {
  shopPrimary: RedClayAsset;
  shopAlternate?: RedClayAsset;
  pdpHero: RedClayAsset;
  origin?: RedClayAsset;
  process?: RedClayAsset;
  secondaryProcess?: RedClayAsset;
  botanical?: RedClayAsset;
};

type ProductBase = {
  id: ProductId;
  slug: string;
  family: ProductFamily;
  role: string;
  origin: string;
  region: string;
  country?: string;
  process?: string;
  sensoryStatement: string;
  character: string;
  notes: string[];
  shortDescription: string;
  customerDirection: string;
  formats: string[];
  uses: string[];
  placeHeading: string;
  placeCopy: string;
  comparison: string;
  relatedOrigin?: string;
  relatedEdition?: string;
  relatedProducts: ProductId[];
  discoveryGuide?: { name: string; direction: string }[];
  price: number | null;
  currency: string | null;
  availability: string | null;
  isActive: true;
  media: CoffeeMedia;
};

export type Coffee = ProductBase & {
  id: CoffeeId;
  kind: "coffee";
  family: Exclude<ProductFamily, "object">;
};

export type ObjectProduct = ProductBase & {
  id: "THE KILN CUP";
  kind: "kiln-cup";
  family: "object";
};

export type Product = Coffee | ObjectProduct;

const media = (primary: RedClayAsset, support: Omit<CoffeeMedia, "shopPrimary" | "pdpHero"> = {}): CoffeeMedia => {
  return { shopPrimary: primary, pdpHero: primary, ...support };
};

const baseCommerce = {
  price: null,
  currency: null,
  availability: null,
  isActive: true,
} as const;

export const materialSeries: Coffee[] = [
  {
    ...baseCommerce,
    id: "LATERITE",
    slug: "laterite",
    kind: "coffee",
    family: "material-series",
    role: "House Coffee",
    origin: "Seasonal East African composition",
    region: "House Coffee",
    sensoryStatement: "Red plum, brown sugar, and cacao in a warm, balanced cup.",
    character: "Warm · Balanced · Generous",
    notes: ["Red plum", "brown sugar", "cacao"],
    shortDescription: "Laterite is Red Clay's centre of gravity: generous sweetness, vivid fruit, and enough depth to remain an everyday coffee.",
    customerDirection: "Start here if you want balance.",
    formats: ["250G", "1KG"],
    uses: ["Filter", "Batch", "Espresso"],
    placeHeading: "A familiar profile through the seasons.",
    placeCopy: "The East African components can change with the harvest. The cup stays centred on red plum, brown sugar, and cacao.",
    comparison: "Choose Basalt for more body and espresso. Choose Linen for a lighter, more floral filter coffee.",
    relatedProducts: ["BASALT", "LINEN", "KIAMBU / WASHED 01"],
    media: media(redClayAssets.pending.laterite),
  },
  {
    ...baseCommerce,
    id: "BASALT",
    slug: "basalt",
    kind: "coffee",
    family: "material-series",
    role: "House Espresso",
    origin: "Seasonal East African composition",
    region: "House Espresso",
    sensoryStatement: "Dark cherry, cacao, and molasses with deeper sweetness and body.",
    character: "Deep · Round · Structured",
    notes: ["Dark cherry", "cacao", "molasses"],
    shortDescription: "Basalt is built for weight rather than darkness: deeper sweetness, rounder texture, and enough fruit to keep the cup alive.",
    customerDirection: "Choose Basalt for deeper sweetness, more body, or espresso.",
    formats: ["250G", "1KG"],
    uses: ["Espresso", "Moka", "Milk"],
    placeHeading: "Depth without losing the fruit.",
    placeCopy: "The seasonal composition can change while the intended profile remains steady: dark cherry, cacao, and molasses with a rounder texture.",
    comparison: "Choose Laterite for greater versatility. Choose Linen when you want the lightest coffee in the house collection.",
    relatedProducts: ["LATERITE", "KAYANZA / NATURAL 02", "GUJI / NATURAL 02"],
    media: media(redClayAssets.pending.basalt),
  },
  {
    ...baseCommerce,
    id: "LINEN",
    slug: "linen",
    kind: "coffee",
    family: "material-series",
    role: "House Filter",
    origin: "Seasonal East African composition",
    region: "House Filter",
    sensoryStatement: "Pear, bergamot, and jasmine in a light, aromatic filter coffee.",
    character: "Light · Floral · Clean",
    notes: ["Pear", "bergamot", "jasmine"],
    shortDescription: "Linen is clean, aromatic, and deliberately light on its feet.",
    customerDirection: "Choose Linen for a lighter, floral filter coffee.",
    formats: ["250G", "1KG"],
    uses: ["Pour-over", "Batch"],
    placeHeading: "The lightest house profile.",
    placeCopy: "Its East African components can rotate with the season. Pear, bergamot, and jasmine keep the profile aromatic, clean, and recognisable.",
    comparison: "Choose Laterite for more balance and versatility. Choose Basalt for more body, espresso, or milk.",
    relatedProducts: ["LATERITE", "SIDAMA / WASHED 01", "KIRINYAGA / WASHED 02"],
    media: media(redClayAssets.pending.linen),
  },
];

export const currentHarvest: Coffee[] = [
  {
    ...baseCommerce,
    id: "KIAMBU / WASHED 01",
    slug: "kiambu-washed-01",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Kenya",
    region: "Kiambu, Kenya",
    country: "Kenya",
    process: "Washed",
    sensoryStatement: "A bright Kenyan coffee built around blackcurrant, plum, and clear cane-sugar sweetness.",
    character: "Bright · Structured · Clear",
    notes: ["Blackcurrant", "plum", "cane sugar"],
    shortDescription: "Vivid fruit and clean sweetness.",
    customerDirection: "Choose Kiambu for darker fruit, structured acidity, and a precise cup.",
    formats: ["250G"],
    uses: [],
    placeHeading: "Kiambu, read through water and selection.",
    placeCopy: "This washed profile moves through blackcurrant and plum toward clear cane-sugar sweetness. Selection, washing, and drying are part of the context, but no one variable explains the whole cup.",
    comparison: "Kiambu is darker-fruited and more structured. Kirinyaga / Washed 02 is brighter, more floral, and more citrus-led.",
    relatedOrigin: "central-kenya",
    relatedEdition: "water-and-time",
    relatedProducts: ["KIRINYAGA / WASHED 02", "LATERITE", "KAYANZA / WASHED 01"],
    media: media(redClayAssets.pending.kiambuWashed01, {
      shopAlternate: redClayAssets.origins.kenyaDetail,
      origin: redClayAssets.origins.kenyaLead,
      process: redClayAssets.origins.kenyaProcess,
      secondaryProcess: redClayAssets.origins.kenyaDrying,
      botanical: redClayAssets.origins.kenyaDetail,
    }),
  },
  {
    ...baseCommerce,
    id: "KIRINYAGA / WASHED 02",
    slug: "kirinyaga-washed-02",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Kenya",
    region: "Kirinyaga, Kenya",
    country: "Kenya",
    process: "Washed",
    sensoryStatement: "A lifted Kenyan coffee moving from red currant into hibiscus and pomelo.",
    character: "Floral · Bright · Citrus-led",
    notes: ["Red currant", "hibiscus", "pomelo"],
    shortDescription: "The more lifted of the two Kenyan coffees.",
    customerDirection: "Choose Kirinyaga for brighter florals and a sharper citrus line.",
    formats: ["250G"],
    uses: [],
    placeHeading: "A brighter Kenyan direction.",
    placeCopy: "Red currant, hibiscus, and pomelo make this the more lifted Kenyan profile in the Current Harvest.",
    comparison: "Kirinyaga is brighter, more floral, and more citrus-led. Kiambu / Washed 01 brings darker fruit and firmer structure.",
    relatedOrigin: "central-kenya",
    relatedEdition: "water-and-time",
    relatedProducts: ["KIAMBU / WASHED 01", "LINEN", "SIDAMA / WASHED 01"],
    media: media(redClayAssets.pending.kirinyagaWashed02),
  },
  {
    ...baseCommerce,
    id: "KAYANZA / WASHED 01",
    slug: "kayanza-washed-01",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Burundi",
    region: "Kayanza, Burundi",
    country: "Burundi",
    process: "Washed",
    sensoryStatement: "Red apple, honey, and orange blossom in a soft, lifted Burundi cup.",
    character: "Floral · Soft · Honeyed",
    notes: ["Red apple", "honey", "orange blossom"],
    shortDescription: "Softer fruit and floral sweetness.",
    customerDirection: "Choose the washed Kayanza for floral sweetness and a cleaner cup.",
    formats: ["250G"],
    uses: [],
    placeHeading: "A softer reading of Kayanza.",
    placeCopy: "This washed profile brings red apple, honey, and orange blossom into a cleaner, more floral line.",
    comparison: "The washed coffee is cleaner, floral, and honeyed. Kayanza / Natural 02 is fruitier, rounder, and deeper.",
    relatedOrigin: "kayanza-burundi",
    relatedEdition: "along-the-kayanza-hills",
    relatedProducts: ["KAYANZA / NATURAL 02", "LATERITE", "SIDAMA / WASHED 01"],
    media: media(redClayAssets.pending.kayanzaWashed01, {
      shopAlternate: redClayAssets.origins.burundiBotanical,
      origin: redClayAssets.origins.burundiLead,
      process: redClayAssets.origins.burundiSupport,
      botanical: redClayAssets.origins.burundiBotanical,
    }),
  },
  {
    ...baseCommerce,
    id: "KAYANZA / NATURAL 02",
    slug: "kayanza-natural-02",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Burundi",
    region: "Kayanza, Burundi",
    country: "Burundi",
    process: "Natural",
    sensoryStatement: "A fruit-forward Kayanza coffee with raspberry, black tea, and brown-sugar depth.",
    character: "Fruit-forward · Round · Deep",
    notes: ["Raspberry", "black tea", "brown sugar"],
    shortDescription: "The deeper, fruitier Kayanza release.",
    customerDirection: "Choose the natural Kayanza for rounder fruit and deeper sweetness.",
    formats: ["250G"],
    uses: [],
    placeHeading: "The deeper Kayanza profile.",
    placeCopy: "Raspberry, black tea, and brown sugar give this coffee a rounder, fruit-forward direction. Process is one part of the contrast, not its only cause.",
    comparison: "The natural is fruitier, rounder, and deeper. Kayanza / Washed 01 is cleaner, more floral, and honeyed.",
    relatedOrigin: "kayanza-burundi",
    relatedEdition: "along-the-kayanza-hills",
    relatedProducts: ["KAYANZA / WASHED 01", "BASALT", "GUJI / NATURAL 02"],
    media: media(redClayAssets.pending.kayanzaNatural02, {
      shopAlternate: redClayAssets.origins.burundiBotanical,
      origin: redClayAssets.origins.burundiLead,
      process: redClayAssets.origins.burundiSupport,
      botanical: redClayAssets.origins.burundiBotanical,
    }),
  },
  {
    ...baseCommerce,
    id: "SIDAMA / WASHED 01",
    slug: "sidama-washed-01",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Ethiopia",
    region: "Sidama, Ethiopia",
    country: "Ethiopia",
    process: "Washed",
    sensoryStatement: "A clean, floral Ethiopian coffee with jasmine, yellow peach, and a tea-like finish.",
    character: "Floral · Clean · Tea-like",
    notes: ["Jasmine", "yellow peach", "lemon tea"],
    shortDescription: "The lighter of the two Ethiopian coffees.",
    customerDirection: "Choose Sidama for florality, lighter body, and a tea-like finish.",
    formats: ["250G"],
    uses: [],
    placeHeading: "A light, aromatic Ethiopian profile.",
    placeCopy: "Jasmine, yellow peach, and lemon tea give this washed Sidama coffee a clean, high-toned direction. Region and process help describe the coffee; neither predicts the cup by itself.",
    comparison: "Sidama is floral, tea-like, and lighter. Guji / Natural 02 is fruit-driven, rounder, and deeper.",
    relatedOrigin: "southern-ethiopia",
    relatedEdition: "beyond-heirloom",
    relatedProducts: ["GUJI / NATURAL 02", "LINEN", "KIAMBU / WASHED 01"],
    media: media(redClayAssets.pending.sidamaWashed01, {
      shopAlternate: redClayAssets.origins.ethiopiaSupport,
      origin: redClayAssets.origins.ethiopiaLead,
      process: redClayAssets.origins.ethiopiaSupport,
      secondaryProcess: redClayAssets.origins.ethiopiaDetail,
    }),
  },
  {
    ...baseCommerce,
    id: "GUJI / NATURAL 02",
    slug: "guji-natural-02",
    kind: "coffee",
    family: "current-harvest",
    role: "Current Harvest",
    origin: "Ethiopia",
    region: "Guji, Ethiopia",
    country: "Ethiopia",
    process: "Natural",
    sensoryStatement: "A fruit-driven Ethiopian natural with strawberry, apricot, and cacao-nib depth.",
    character: "Fruit-driven · Round · Saturated",
    notes: ["Strawberry", "apricot", "cacao nib"],
    shortDescription: "Riper fruit and deeper sweetness.",
    customerDirection: "Choose Guji for rounder fruit, more weight, and deeper sweetness.",
    formats: ["250G"],
    uses: [],
    placeHeading: "A fuller Ethiopian direction.",
    placeCopy: "Strawberry, apricot, and cacao nib make this the rounder, more saturated Ethiopian profile. Whole-cherry drying is one variable within a much larger coffee context.",
    comparison: "Guji is fruit-driven, rounder, and deeper. Sidama / Washed 01 is floral, tea-like, and lighter.",
    relatedOrigin: "southern-ethiopia",
    relatedEdition: "beyond-heirloom",
    relatedProducts: ["SIDAMA / WASHED 01", "BASALT", "KAYANZA / NATURAL 02"],
    media: media(redClayAssets.pending.gujiNatural02, {
      shopAlternate: redClayAssets.origins.ethiopiaDetail,
      origin: redClayAssets.origins.ethiopiaLead,
      process: redClayAssets.origins.ethiopiaDetail,
      secondaryProcess: redClayAssets.origins.ethiopiaSupport,
    }),
  },
];

export const otherWaysToDrink: Coffee[] = [
  {
    ...baseCommerce,
    id: "AFTERLIGHT",
    slug: "afterlight",
    kind: "coffee",
    family: "other-ways-to-drink",
    role: "Ethiopia Decaf",
    origin: "Ethiopia",
    region: "Ethiopia Decaf",
    country: "Ethiopia",
    sensoryStatement: "Plum, cocoa, and honey for the cup that comes after the day has slowed down.",
    character: "Sweet · Round · Decaffeinated",
    notes: ["Plum", "cocoa", "honey"],
    shortDescription: "A serious decaf with sweetness, body, and a full place in the collection.",
    customerDirection: "Choose Afterlight when you want the depth of a Red Clay coffee without the usual caffeine.",
    formats: [],
    uses: [],
    placeHeading: "Decaf without the apology.",
    placeCopy: "Afterlight keeps the focus on the cup: plum, cocoa, honey, and a rounded finish.",
    comparison: "Choose Laterite for a caffeinated all-rounder. Choose Basalt for more espresso weight and deeper sweetness.",
    relatedProducts: ["LATERITE", "BASALT", "RED CLAY INSTANT — ETHIOPIA"],
    media: media(redClayAssets.pending.afterlight),
  },
  {
    ...baseCommerce,
    id: "RED CLAY INSTANT — ETHIOPIA",
    slug: "red-clay-instant",
    kind: "coffee",
    family: "other-ways-to-drink",
    role: "Specialty Instant",
    origin: "Ethiopia",
    region: "Ethiopia · 6 sachets",
    country: "Ethiopia",
    sensoryStatement: "Good coffee when the grinder, scale, and brewer are not coming with you.",
    character: "Direct · Portable · Ready",
    notes: [],
    shortDescription: "Six single-serve sachets for travel, work, or a simpler cup.",
    customerDirection: "Choose Instant when convenience matters more than bringing the full brew setup.",
    formats: ["6 SACHETS"],
    uses: ["Travel", "Office"],
    placeHeading: "A simpler route to the cup.",
    placeCopy: "Add hot water and drink it where a grinder, scale, and brewer are not practical.",
    comparison: "Choose Three Regions when you want to compare three brewed coffees. Choose Afterlight when caffeine is the deciding factor.",
    relatedProducts: ["THREE REGIONS", "AFTERLIGHT", "LATERITE"],
    media: media(redClayAssets.pending.instantEthiopia),
  },
  {
    ...baseCommerce,
    id: "THREE REGIONS",
    slug: "three-regions",
    kind: "coffee",
    family: "other-ways-to-drink",
    role: "Discovery Box",
    origin: "Kenya · Burundi · Ethiopia",
    region: "Discovery Box · 3 × 100G",
    sensoryStatement: "Taste the collection by place before choosing a full bag.",
    character: "Bright · Soft · Aromatic",
    notes: ["Kiambu", "Kayanza", "Sidama"],
    shortDescription: "Three 100g coffees selected to make regional comparison straightforward.",
    customerDirection: "Start here if you do not yet know which regional profile suits you.",
    formats: ["3 × 100G"],
    uses: ["Filter comparison"],
    placeHeading: "Three clear starting points.",
    placeCopy: "You do not need to understand every process or region before choosing coffee. Brew the three coffees side by side or move through them one at a time.",
    comparison: "Kiambu is bright and structured. Kayanza is soft and floral. Sidama is light and aromatic.",
    relatedProducts: ["KIAMBU / WASHED 01", "KAYANZA / WASHED 01", "SIDAMA / WASHED 01"],
    discoveryGuide: [
      { name: "KIAMBU", direction: "Bright · Structured" },
      { name: "KAYANZA", direction: "Soft · Floral" },
      { name: "SIDAMA", direction: "Light · Aromatic" },
    ],
    media: media(redClayAssets.pending.threeRegions),
  },
];

export const kilnCup: ObjectProduct = {
  ...baseCommerce,
  id: "THE KILN CUP",
  slug: "the-kiln-cup",
  kind: "kiln-cup",
  family: "object",
  role: "Companion object",
  origin: "High-fired stoneware",
  region: "High-fired stoneware",
  sensoryStatement: "Clay outside. Glaze within.",
  character: "Exposed red clay · Mineral-white satin glaze",
  notes: ["Exposed red clay", "mineral-white satin glaze"],
  shortDescription: "A gently tapered stoneware cup made for filter coffee, long black, and the everyday brew.",
  customerDirection: "Choose the coffee first. The Kiln Cup remains its companion.",
  formats: ["Approx. 300ML / 10OZ"],
  uses: ["Filter coffee", "Long black", "Everyday coffee"],
  placeHeading: "Built around the daily brew.",
  placeCopy: "The form is gently tapered, with a compact loop handle, an exposed red clay exterior, and a warm mineral-white satin glaze inside.",
  comparison: "Pair it with Laterite for balance, Linen for a lighter filter, or a coffee from the Current Harvest.",
  relatedProducts: ["LATERITE", "LINEN", "KIAMBU / WASHED 01"],
  media: media(redClayAssets.pending.kilnCup),
};

export const coffees: Coffee[] = [...materialSeries, ...currentHarvest, ...otherWaysToDrink];
export const objects: ObjectProduct[] = [kilnCup];
export const allActiveProducts: Product[] = [...coffees, ...objects];
export const products = allActiveProducts;

export const legacyProductSlugs = {
  "kenya-lot-01": "kiambu-washed-01",
  "burundi-lot-01": "kayanza-washed-01",
  "ethiopia-lot-01": "sidama-washed-01",
  "ethiopia-lot-02": "guji-natural-02",
} as const;

export function getProductBySlug(slug: string) {
  return allActiveProducts.find((product) => product.slug === slug);
}

export function getProductById(id: ProductId) {
  return allActiveProducts.find((product) => product.id === id);
}

export function formatPrice(price: number | null, currency: string | null) {
  if (price === null || currency === null) return null;
  return new Intl.NumberFormat("en", { style: "currency", currency }).format(price);
}
