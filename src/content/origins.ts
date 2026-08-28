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
  hub: {
    place: string;
    process: string;
    cup: string;
  };
  place: string;
  context: string;
  process: string;
  work: string;
  cup: string;
  coffeeSlugs: string[];
  editionSlug: string;
  relatedEditionBlurb: string;
  assets: {
    lead: RedClayAsset;
    support: RedClayAsset;
    detail: RedClayAsset;
  };
  factualContext: string[];
  layout: "structured" | "vertical" | "botanical";
  headings: {
    place: string;
    context: string;
    process: string;
    work: string;
    coffees: string;
    facts: string;
  };
};

export const origins: Origin[] = [
  {
    slug: "central-kenya",
    number: "01",
    name: "Central Kenya",
    region: "Central Kenya",
    country: "Kenya",
    leadAssetId: "KEN-LAND-001",
    descriptor: "Water, selection, and two bright Kenyan coffees.",
    summary: "Central Kenya is a useful place to see how variety, careful cherry selection, washed processing, and drying meet without reducing the cup to any one of them.",
    hub: {
      place: "Cultivated coffee highlands around Kiambu and Kirinyaga.",
      process: "A long association with washed coffee, from ripe-cherry selection to drying.",
      cup: "Compare structured Kiambu with the more floral, citrus-led Kirinyaga.",
    },
    place: "Kiambu and Kirinyaga sit within Kenya’s central coffee-growing highlands. Farms and cooperative factories vary in scale, but coffee moves through an agricultural landscape shaped by cultivation, selective picking, and primary processing close to where the cherries are grown.",
    context: "SL28 and SL34 were selected in Kenya in the 1930s. Ruiru 11, a compact composite hybrid released in 1985, was developed later for productivity and resistance to coffee berry disease. These names can help describe the plant material in a coffee, but they do not predict the finished cup on their own.",
    process: "In a common washed sequence, ripe cherries are sorted and depulped. Fermentation or mechanical demucilaging removes the sticky mucilage around the seed. The parchment coffee is then washed, sorted again, and dried. Kenya also produces natural, honey, and other process styles, so “Kenyan” and “washed” are not interchangeable terms.",
    work: "Clarity begins before water reaches a tank. Picking maturity, removing damaged fruit, monitoring fermentation, washing evenly, and controlling the drying layer all affect the condition of the green coffee. Each stage calls for observation and adjustment rather than one fixed recipe.",
    cup: "Kiambu / Washed 01 moves through blackcurrant, plum, and cane sugar with a bright, structured line. Kirinyaga / Washed 02 is the more lifted comparison, with red currant, hibiscus, and pomelo.",
    coffeeSlugs: ["kiambu-washed-01", "kirinyaga-washed-02"],
    editionSlug: "water-and-time",
    relatedEditionBlurb: "Follow the washed sequence from coffee fruit to dry parchment, then meet three varieties that became important in Kenya.",
    assets: {
      lead: redClayAssets.origins.kenyaLead,
      support: redClayAssets.origins.kenyaProcess,
      detail: redClayAssets.origins.kenyaDetail,
    },
    factualContext: [
      "Washed processing has a long and prominent place in Kenya, alongside natural, honey, and newer process methods.",
      "SL28 and SL34 were selected in Kenya in the 1930s; Ruiru 11 was released in 1985.",
      "Kiambu and Kirinyaga are distinct regional references; neither name describes all Kenyan coffee.",
    ],
    layout: "structured",
    headings: {
      place: "Two regions within the central highlands.",
      context: "Variety names carry history, not a flavor guarantee.",
      process: "What happens in a washed sequence.",
      work: "Selection continues after picking.",
      coffees: "Kiambu or Kirinyaga? Start with the contrast.",
      facts: "Keep these distinctions in view.",
    },
  },
  {
    slug: "kayanza-burundi",
    number: "02",
    name: "Kayanza / Burundi",
    region: "Kayanza / Burundi",
    country: "Burundi",
    leadAssetId: "BUR-LAND-001",
    descriptor: "Steep hills, shared stations, and careful drying.",
    summary: "Kayanza’s coffee landscape connects small hillside plots with washing stations, sorting tables, and the repeated work of drying coffee evenly.",
    hub: {
      place: "Coffee-growing hills in northern Burundi, read as a vertical landscape.",
      process: "Cherries move from many small plots to washing stations and drying tables.",
      cup: "Compare floral, honeyed washed coffee with a rounder natural profile.",
    },
    place: "In Kayanza, coffee is grown across steep, densely cultivated hills. A farmer may tend a relatively small stand of trees, then deliver ripe cherry to a nearby washing station. That movement from dispersed plots to a shared processing site is central to how much Burundian coffee is organized.",
    context: "Bourbon-type Arabica is widely associated with Burundi, although the exact plant material must be verified for an individual coffee. At a washing station, deliveries from many growers can be received, sorted, and processed in daily batches. The station is not the farm; it is the point where separate harvests enter a shared sequence of equipment, water, labor, and record keeping.",
    process: "For fully washed coffee, stations can pre-sort cherry, depulp it, ferment or otherwise remove mucilage, wash the parchment, and prepare it for drying. In a natural process, the fruit remains around the seed during drying. These routes create different conditions for fermentation and drying, but neither route dictates one inevitable flavor.",
    work: "Raised beds and drying tables lift coffee away from the ground and allow air to move around it. They still require active work: controlling layer depth, turning coffee, covering it when conditions change, and removing defects. Sector records show raised-bed drying at individual Kayanza stations, but equipment and routines differ from station to station.",
    cup: "Kayanza / Washed 01 is the softer, more floral choice: red apple, honey, and orange blossom. Kayanza / Natural 02 keeps the region in view while moving toward raspberry, black tea, and brown-sugar depth.",
    coffeeSlugs: ["kayanza-washed-01", "kayanza-natural-02"],
    editionSlug: "along-the-kayanza-hills",
    relatedEditionBlurb: "Trace the route from hillside plots to a shared washing station, then see why drying is an active stage of production.",
    assets: {
      lead: redClayAssets.origins.burundiLead,
      support: redClayAssets.origins.burundiSupport,
      detail: redClayAssets.origins.burundiBotanical,
    },
    factualContext: [
      "Coffee in Burundi is commonly grown on small holdings and delivered to washing stations for primary processing.",
      "Bourbon is common in Burundi, but a specific coffee still needs lot-level variety information.",
      "Raised-bed drying is documented at Kayanza stations; it should not be treated as one universal station design.",
    ],
    layout: "vertical",
    headings: {
      place: "A hillside crop moving toward a shared station.",
      context: "What a washing station brings together.",
      process: "One region can take more than one route.",
      work: "Drying is not a passive wait.",
      coffees: "Washed or natural? Compare the two Kayanza coffees.",
      facts: "Keep the station, process, and coffee distinct.",
    },
  },
  {
    slug: "southern-ethiopia",
    number: "03",
    name: "Southern Ethiopia",
    region: "Southern Ethiopia",
    country: "Ethiopia",
    leadAssetId: "ETH-PROC-103",
    descriptor: "Two places, two processes, and no single shorthand.",
    summary: "Sidama and Guji offer two entries into southern Ethiopia’s coffee diversity. Their names locate a coffee; they do not assign it a universal flavor.",
    hub: {
      place: "Sidama and Guji are distinct coffee geographies within southern Ethiopia.",
      process: "Washed and natural handling add another axis of difference.",
      cup: "Compare a floral, tea-like Sidama with a rounder, fruit-driven Guji.",
    },
    place: "Sidama and Guji are separate geographic references, each containing many growing areas, farms, plant populations, and processing sites. Research collections from southern Ethiopia treat both as distinct sources of coffee germplasm. A region name is therefore useful orientation, but it is too broad to function as a complete sensory description.",
    context: "Ethiopia is a primary center of diversity for Coffea arabica. Its coffee includes forest and semi-forest populations, farmer-maintained landraces, local selections, and varieties released through research programs. “Heirloom” cannot name all of that accurately, and even “landrace” should not be used for every Ethiopian coffee by default.",
    process: "Washed processing removes the skin and most mucilage before the seed is dried in parchment. Natural processing dries the seed inside the whole fruit before hulling. Those different conditions matter, but so do plant genetics, ripeness, fermentation management, drying, storage, roasting, and brewing.",
    work: "Sorting makes quality decisions visible. Workers separate coffee by ripeness, density, size, or visible defect at different points in the chain. The work can happen before and after drying, and it depends on people knowing which differences matter at each stage.",
    cup: "Sidama / Washed 01 is the lighter comparison, with jasmine, yellow peach, and lemon tea. Guji / Natural 02 is rounder and more saturated, with strawberry, apricot, and cacao nib.",
    coffeeSlugs: ["sidama-washed-01", "guji-natural-02"],
    editionSlug: "beyond-heirloom",
    relatedEditionBlurb: "Look beyond a convenient bag label to the landraces, local selections, research varieties, and geographic detail underneath it.",
    assets: {
      lead: redClayAssets.origins.ethiopiaLead,
      support: redClayAssets.origins.ethiopiaSupport,
      detail: redClayAssets.origins.ethiopiaDetail,
    },
    factualContext: [
      "Ethiopia contains major wild and cultivated genetic resources for Coffea arabica.",
      "Landraces, local selections, and formally released varieties can all appear in Ethiopian production.",
      "Sidama and Guji are places, while washed and natural describe post-harvest routes. None of those labels predicts the cup by itself.",
    ],
    layout: "botanical",
    headings: {
      place: "Sidama and Guji are places, not flavor presets.",
      context: "What sits beneath the word “heirloom.”",
      process: "Washed and natural add a second comparison.",
      work: "Sorting is part of the product, not background scenery.",
      coffees: "Sidama or Guji? Read more than the country name.",
      facts: "Use each label for the job it can do.",
    },
  },
];

export function getOriginBySlug(slug: string) {
  return origins.find((origin) => origin.slug === slug);
}
