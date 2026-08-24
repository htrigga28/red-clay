import type { CoffeeId } from "./coffees";
import { redClayAssets, type RedClayAsset } from "@/lib/assets/registry";

export type Origin = {
  slug: string;
  number: "01" | "02" | "03";
  name: string;
  region: string;
  country: string;
  leadAssetId: string;
  descriptor: string;
  summary: string;
  place: string;
  process: string;
  cup: string;
  coffeeIds: CoffeeId[];
  editionSlug?: string;
  assets: {
    lead: RedClayAsset;
    support: RedClayAsset;
    detail: RedClayAsset;
  };
  factualContext: string[];
};

export const origins: Origin[] = [
  {
    slug: "central-kenya",
    number: "01",
    name: "Central Kenya",
    region: "Central Kenya",
    country: "Kenya",
    leadAssetId: "KEN-LAND-001",
    descriptor: "Precision in the highlands.",
    summary: "A chapter of coffee plants, rain, and the quiet work of sorting.",
    place: "Central Kenya opens through Kiambu County context: a green, cultivated highland view held at the edge of the coffee plant.",
    process: "Sorting, drying, and plant work appear as a sequence of careful material decisions rather than a single regional formula.",
    cup: "Blackcurrant, plum, and cane sugar.",
    coffeeIds: ["KENYA LOT 01"],
    editionSlug: "water-and-time",
    assets: {
      lead: redClayAssets.origins.kenyaLead,
      support: redClayAssets.origins.kenyaProcess,
      detail: redClayAssets.origins.kenyaDetail,
    },
    factualContext: ["Lead place context: Kiambu County, Kenya.", "Process and botanical images are contextual documentary photographs; they do not imply a Red Clay sourcing relationship."],
  },
  {
    slug: "kayanza-burundi",
    number: "02",
    name: "Kayanza / Burundi",
    region: "Kayanza / Burundi",
    country: "Burundi",
    leadAssetId: "BUR-LAND-001",
    descriptor: "Hills held in vertical rhythm.",
    summary: "A landscape of drying geometry, hillside movement, and red-fruited brightness.",
    place: "The lead plate carries an approved Kayanza context. A wider Burundi landscape and a botanical detail broaden the chapter without collapsing their locations into one claim.",
    process: "Raised drying beds and careful sorting make the work visible as a shared rhythm of attention, movement, and time.",
    cup: "Red apple, honey, and orange blossom.",
    coffeeIds: ["BURUNDI LOT 01"],
    assets: {
      lead: redClayAssets.origins.burundiLead,
      support: redClayAssets.origins.burundiSupport,
      detail: redClayAssets.origins.burundiBotanical,
    },
    factualContext: ["Lead place context: Kayanza, Burundi.", "The broader landscape is Banga, Burundi; the botanical detail is from Ngozi, Burundi."],
  },
  {
    slug: "southern-ethiopia",
    number: "03",
    name: "Southern Ethiopia",
    region: "Southern Ethiopia",
    country: "Ethiopia",
    leadAssetId: "ETH-PROC-103",
    descriptor: "Process, people, and open attention.",
    summary: "A close process-led chapter built from sorting, material detail, and breathing room.",
    place: "The current visual record is process-led: the lead plate shows sorting work near Hawassa, Ethiopia, and is used as broad context rather than a claim about a specific Southern Ethiopia landscape.",
    process: "Hands, beans, and sorting surfaces carry the chapter. The sequence stays close to the work without inventing a single processing story for every lot.",
    cup: "A clean, open finish with a tactile process character.",
    coffeeIds: ["ETHIOPIA LOT 01", "ETHIOPIA LOT 02"],
    assets: {
      lead: redClayAssets.origins.ethiopiaLead,
      support: redClayAssets.origins.ethiopiaSupport,
      detail: redClayAssets.origins.ethiopiaDetail,
    },
    factualContext: ["Lead and support context: Hawassa, Ethiopia, used for process and people imagery.", "The current archive does not provide a dedicated Southern Ethiopia landscape plate, so no narrower landscape claim is made."],
  },
];

export function getOriginBySlug(slug: string) {
  return origins.find((origin) => origin.slug === slug);
}
