import { redClayAssets, type RedClayAsset } from "@/lib/assets/registry";

export type EditionSection = {
  label: string;
  heading: string;
  paragraphs: string[];
  asset?: RedClayAsset;
  assetClass?: string;
  caption?: string;
};

export type EditionSource = {
  title: string;
  organization: string;
  url: string;
};

export type ConnectedCoffee = {
  slug: string;
  name: string;
  blurb: string;
};

export type Edition = {
  slug: string;
  storyOrdinal: "01" | "02" | "03";
  eyebrow: string;
  title: string;
  subtitle: string;
  cardDeck: string;
  standfirst: string;
  relatedBlurb: string;
  region: string;
  connectedCoffees: ConnectedCoffee[];
  coffeeHeading: string;
  coffeeBlurb: string;
  relatedOriginSlug: string;
  relatedOriginBlurb: string;
  leadAsset: RedClayAsset;
  supportingAssets: RedClayAsset[];
  sections: EditionSection[];
  sources: EditionSource[];
};

export const editions: Edition[] = [
  {
    slug: "water-and-time",
    storyOrdinal: "01",
    eyebrow: "VOLUME 01 — PLACE / STORY 01",
    title: "Water & Time",
    subtitle: "Why washed coffee became such a defining part of Kenya’s specialty-coffee identity",
    cardDeck: "Start with the coffee fruit, follow the washed sequence, and meet three varieties behind one of Kenya’s defining styles.",
    standfirst: "A bag label reduces washed coffee to one word. The work is a chain of selection, fruit removal, fermentation, washing, and drying—and Kenya’s relationship with that chain has its own history.",
    relatedBlurb: "Follow what happens between a ripe cherry and dry parchment, and why no single processing word explains the whole cup.",
    region: "Central Kenya",
    connectedCoffees: [
      { slug: "kiambu-washed-01", name: "Kiambu / Washed 01", blurb: "Blackcurrant, plum, and cane sugar in the more structured Kenyan profile." },
      { slug: "kirinyaga-washed-02", name: "Kirinyaga / Washed 02", blurb: "Red currant, hibiscus, and pomelo in the more lifted Kenyan profile." },
    ],
    coffeeHeading: "Read two Kenyan coffees through the same broad process.",
    coffeeBlurb: "Both Red Clay coffees are washed, but their profiles are deliberately different. Compare place, selection, and cup character instead of treating “washed Kenya” as one flavor.",
    relatedOriginSlug: "central-kenya",
    relatedOriginBlurb: "Central Kenya places the washed sequence beside the variety histories and the current contrast between Kiambu and Kirinyaga.",
    leadAsset: redClayAssets.documentary.kiambuLead,
    supportingAssets: [redClayAssets.origins.kenyaProcess, redClayAssets.documentary.homeProcess, redClayAssets.documentary.kenyaDryingTexture],
    sections: [
      {
        label: "01 / THE CUP AND THE WORK",
        heading: "Clarity begins long before brewing.",
        paragraphs: [
          "A bright Kenyan coffee can seem almost self-explanatory in the cup. Fruit appears quickly. Sweetness feels sharply drawn. The finish leaves a clean line. It is tempting to give one word on the bag—washed—all the credit.",
          "That word matters, but it compresses a long chain of decisions. Coffee must be picked as fruit, separated from that fruit, dried to a stable condition, milled, stored, roasted, and brewed. Washed processing describes part of the journey between cherry and green seed. It does not replace the variety, the growing conditions, the ripeness of the harvest, or the skill of the people handling it.",
        ],
        asset: redClayAssets.documentary.kiambuLead,
        assetClass: "edition-section-media--wide",
        caption: "View across coffee fields at Fairview Estate in Kiambu, Kenya.",
      },
      {
        label: "02 / BEFORE WASHING",
        heading: "Coffee is a fruit before it is a bean.",
        paragraphs: [
          "A coffee cherry has an outer skin and pulp, a sticky layer called mucilage, a papery parchment layer, a thin silver skin, and usually two seeds. Those seeds are what the trade calls beans. Roasting happens much later. First, producers must remove the surrounding fruit and reduce moisture so the seeds can be stored and moved without rapid deterioration.",
          "Selection begins at harvest. Ripe, unripe, damaged, and overripe cherries do not enter processing in the same condition. Sorting by hand, flotation, or both can separate part of that variation before pulping. The aim is not to make every cherry identical. It is to give the next stage a more consistent starting point.",
          "This is why the phrase “washed coffee” should not suggest that water corrects everything that came before it. Water can carry, clean, and help separate material. It cannot make an unripe seed mature or restore fruit damaged before it reaches the pulper.",
        ],
        asset: redClayAssets.documentary.kiambuCherryDetail,
        caption: "A hand holding coffee cherries at Fairview Estate in Kiambu, Kenya; no variety or Red Clay relationship is implied.",
      },
      {
        label: "03 / THE WASHED SEQUENCE",
        heading: "Pulp, ferment, wash, sort, dry.",
        paragraphs: [
          "After initial selection, a pulper removes the outer skin and much of the flesh. The seeds remain inside parchment and are still coated with mucilage. In a classic wet process, the pulped coffee rests in a tank while naturally present microorganisms and enzymes help loosen that mucilage. Some systems remove it mechanically instead. Even within the category “washed,” equipment, water use, fermentation conditions, soaking, and timing can differ.",
          "When the mucilage has loosened, the parchment coffee is washed. Channels can also help sort it by density as water carries lighter material differently from denser coffee. The result is not a finished green bean. It is wet parchment that must still be dried with care.",
          "Drying may happen on raised racks, tables, patios, or mechanical systems. On open drying surfaces, coffee is spread, turned, protected from rain or harsh conditions, and monitored as its moisture falls. A raised bed improves airflow and access, but it does not do the work by itself. Layer depth, turning, weather, and the decision about when drying is complete still matter.",
          "Fermentation also deserves more precision than the old idea that it is simply a countdown. Research summarized by the Specialty Coffee Association shows that microbial activity and the seed’s own metabolism both change during processing. Longer or shorter is not automatically better. Hygiene, temperature, oxygen, water, fruit condition, and the processing goal all shape what happens.",
        ],
        asset: redClayAssets.origins.kenyaProcess,
        caption: "Farmers sorting coffee cherries in Kenya.",
      },
      {
        label: "04 / KENYA CONTEXT",
        heading: "Why washing became closely associated with Kenya.",
        paragraphs: [
          "Kenya’s Agriculture and Food Authority describes wet processing as a prominent part of the country’s coffee system. Cooperative factories and estate facilities have long handled pulping, fermentation, washing, sorting, and drying. That infrastructure helped make the washed style familiar to buyers and drinkers far beyond Kenya.",
          "Familiar, however, is not exclusive. The same official industry guidance also lists natural, honey, and newer fermentation approaches in Kenya. A country is not a process, and a process is not a national flavor. Washed coffee became an important way that Kenyan coffee entered the specialty market, not a rule that every Kenyan coffee must follow.",
          "There is also an environmental dimension. Wet processing uses water and creates fruit-rich wastewater that must be managed. Good processing is therefore not only a sensory question. It involves water access, equipment maintenance, by-product handling, and decisions that affect the working site around the coffee.",
        ],
        asset: redClayAssets.documentary.kenyaWashingInfrastructure,
        caption: "Inactive coffee washing pits at Fairview Estate in Kiambu, Kenya; this frame does not show active washing.",
      },
      {
        label: "05 / THREE VARIETY NAMES",
        heading: "SL28, SL34, and Ruiru 11 do not tell one story.",
        paragraphs: [
          "SL28 and SL34 carry the initials of Scott Agricultural Laboratories, where both were selected in Kenya during the 1930s. World Coffee Research describes SL28 as Bourbon-related and SL34 as Typica-related, a distinction clarified by modern genetic work. Their shared prefix records a research institution, not a shared genetic identity.",
          "Ruiru 11 came later. It is a compact, composite F1 hybrid developed in Kenya and released in 1985. Its breeding history combines several parents. The work aimed to bring productivity and resistance to coffee berry disease together with useful cup quality. Calling all three simply “classic Kenyan varieties” hides different histories, plant forms, and agronomic roles.",
          "A variety name can still be useful. It tells the reader something about plant material and, when accurate, creates a path into agricultural history. It should not be treated as a tasting-note generator. The same variety can meet different soils, weather, farming systems, harvest decisions, processing conditions, storage, and roasting.",
        ],
        asset: redClayAssets.origins.kenyaDrying,
        caption: "Coffee drying on raised racks at Fairview Estate in Kiambu, Kenya.",
      },
      {
        label: "06 / WHAT PROCESS CAN TELL YOU",
        heading: "Useful information, not a flavor guarantee.",
        paragraphs: [
          "Washed tells you that the fruit skin and most mucilage were removed before drying. Natural tells you that the whole cherry dried around the seed. That difference changes the fermentation and drying environment, so it can influence chemistry and sensory character. It is meaningful information.",
          "It is still one variable. Research on coffee quality repeatedly finds interaction among plant genetics, environment, maturity, post-harvest conditions, storage, roasting, and brewing. This is why washed coffees can differ widely from one another, and why a natural coffee is not automatically heavy, boozy, or intensely fruity.",
          "The practical reading is simple: use process to ask better questions. How was fruit removed? How was fermentation managed? How was the coffee dried? Then keep the region, variety information, and the roaster’s own tasting references in view.",
        ],
        asset: redClayAssets.documentary.kenyaDryingTexture,
        caption: "Coffee drying texture at Fairview Estate in Kiambu, Kenya; a detail plate, not packaging imagery.",
      },
      {
        label: "07 / READING RED CLAY",
        heading: "Kiambu / Washed 01 is one composed profile.",
        paragraphs: [
          "Within Red Clay’s product system, Kiambu / Washed 01 brings this reading back to a specific choice: blackcurrant, plum, and cane-sugar sweetness in a bright, structured cup. Those notes describe the intended profile of this coffee. They are not offered as proof that Kiambu, SL varieties, or washed processing must taste that way.",
          "Kirinyaga / Washed 02 provides the useful check. It shares a country and broad process category, yet its profile moves toward red currant, hibiscus, and pomelo. Compare the two and the point becomes clear: washing can help explain how coffee was handled, but it never finishes the story on its own.",
        ],
      },
    ],
    sources: [
      { title: "Coffee Yearbook 2023–2024", organization: "Kenya Agriculture and Food Authority", url: "https://www.afa.go.ke/wp-content/uploads/2025/06/Coffee-Yearbook-Small.pdf" },
      { title: "The Fermentation Effect", organization: "Specialty Coffee Association", url: "https://sca.coffee/sca-news/25-magazine/issue-10/english/the-fermentation-effect-25-magazine-issue-10-bw558" },
      { title: "SL28", organization: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/sl28" },
      { title: "SL34", organization: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/sl34" },
      { title: "Ruiru 11", organization: "World Coffee Research", url: "https://varieties.worldcoffeeresearch.org/varieties/ruiru-11" },
    ],
  },
  {
    slug: "along-the-kayanza-hills",
    storyOrdinal: "02",
    eyebrow: "VOLUME 01 — PLACE / STORY 02",
    title: "Along the Kayanza Hills",
    subtitle: "How coffee moves from hillside plots to washing stations and raised drying beds",
    cardDeck: "Follow coffee from small hillside plots into the shared equipment, water, sorting, and drying work of a washing station.",
    standfirst: "In Kayanza, the important line is not only altitude or scenery. It is the route ripe cherry takes from many small plots to a station where the next decisions are made together.",
    relatedBlurb: "See how a washing station gathers many deliveries, and why a raised bed still depends on repeated human decisions.",
    region: "Kayanza / Burundi",
    connectedCoffees: [
      { slug: "kayanza-washed-01", name: "Kayanza / Washed 01", blurb: "Red apple, honey, and orange blossom in the softer, more floral profile." },
      { slug: "kayanza-natural-02", name: "Kayanza / Natural 02", blurb: "Raspberry, black tea, and brown sugar in the rounder, deeper profile." },
    ],
    coffeeHeading: "One region, two post-harvest routes.",
    coffeeBlurb: "The pair is designed to make comparison useful. Keep Kayanza in view, then notice how the washed and natural profiles move in different directions without treating process as destiny.",
    relatedOriginSlug: "kayanza-burundi",
    relatedOriginBlurb: "Explore the wider Kayanza context, including smallholder delivery, Bourbon terminology, station processing, and the work of drying.",
    leadAsset: redClayAssets.origins.burundiLead,
    supportingAssets: [redClayAssets.origins.burundiBotanical, redClayAssets.origins.burundiSupport],
    sections: [
      {
        label: "01 / HILLSIDE",
        heading: "Coffee begins across many small plots.",
        paragraphs: [
          "Kayanza is often introduced through altitude and steep green hills. The landscape matters, but not as a postcard. Slopes shape paths, plot size, erosion risk, and the effort required to move a perishable fruit after picking. Coffee cherry cannot wait indefinitely for the view to be admired.",
          "World Bank reporting on Burundi describes a sector built largely on small holdings, often with relatively few trees per household. The exact figures change and should not be turned into a portrait of every farmer. The durable point is structural: much of the harvest is dispersed across many growers rather than concentrated on one large estate.",
          "That structure makes the journey to a washing station important. A producer delivers cherry, not export-ready green coffee. The station becomes the place where many small harvests meet receiving standards, pulpers, tanks or demucilaging equipment, washing channels, drying surfaces, storage, and records.",
        ],
        asset: redClayAssets.origins.burundiLead,
        assetClass: "edition-section-media--tall",
        caption: "Coffee processing landscape in Kayanza, Burundi.",
      },
      {
        label: "02 / FROM CHERRY TO STATION",
        heading: "Distance is part of quality control.",
        paragraphs: [
          "A ripe cherry continues to change after it leaves the tree. Heat, delay, damage, and mixed maturity can make later processing harder to control. A station that is reachable from surrounding hills can shorten the time between picking and receiving, although road conditions, harvest volume, and daily capacity still shape what is possible.",
          "At intake, teams can inspect or sort deliveries before pulping. The station may keep batches separate by delivery, day, hill, quality, or another operating need. It may also combine coffee from many growers. “Washing-station coffee” therefore does not automatically mean one farm or one producer. It describes a shared point in the chain.",
          "Burundi’s modern coffee system has a long association with washing stations. World Bank records describe extensive investment in fully washed processing and stations from the 1980s onward. That history helps explain why the station is so visible in accounts of Burundian coffee today, while also reminding us that infrastructure, ownership, and performance can change over time.",
        ],
      },
      {
        label: "03 / THE STATION SEQUENCE",
        heading: "Shared equipment does not remove judgment.",
        paragraphs: [
          "In a fully washed sequence, ripe cherry can be pre-sorted, depulped, fermented or mechanically demucilaged, washed, graded, and moved into drying. Each verb contains choices. A pulper must be adjusted. Fermentation must be monitored. Water and channels can help separate material, but operators still decide what proceeds and what is removed.",
          "The station also has limits. Processing capacity is finite. Water must be managed. Fruit and wastewater need responsible handling. Rain changes the drying day. A batch arriving at the wrong time or in poor condition cannot be made uniform by equipment alone.",
          "This is why the station is better understood as a working system than as a machine. Its quality depends on people receiving cherry, operating equipment, cleaning surfaces, moving parchment, checking moisture, sorting defects, and keeping different stages from becoming confused.",
        ],
      },
      {
        label: "04 / BOURBON CONTEXT",
        heading: "A familiar family name still needs verification.",
        paragraphs: [
          "Bourbon is widely associated with Arabica production in Burundi. Official sector documents describe it as common, and individual Kayanza station records often use Bourbon or “mainly Bourbon” in their lot information. The name is useful, but it should remain attached to evidence for a specific coffee rather than applied automatically to an entire country.",
          "Bourbon itself is not one fixed sensory result. Plant health, local selection, growing conditions, harvest maturity, and every post-harvest stage continue to matter. Even where Bourbon is confirmed, the word identifies plant lineage more than it predicts red fruit, sweetness, florality, or body.",
          "For a reader, that distinction is practical. Treat variety as one field on the label. If it is missing, do not assume it. If it is present, read it beside the region, station or producer information, process, harvest details, and the roaster’s actual description of the cup.",
        ],
        asset: redClayAssets.origins.burundiBotanical,
        caption: "Coffee cherries and leaves in Ngozi, Burundi.",
      },
      {
        label: "05 / RAISED BEDS",
        heading: "Drying is an active stage of production.",
        paragraphs: [
          "Raised beds—often called African beds in coffee trade language—hold coffee above the ground on a mesh or perforated surface. Air can move around the coffee, workers can reach it from both sides, and lots can be spread in controlled layers. These are advantages, not guarantees.",
          "Coffee still needs to be turned so moisture leaves evenly. Thick layers can trap heat and slow drying. Thin layers can respond quickly to sun and wind. Rain, cool nights, intense midday heat, and changing humidity can require the coffee to be covered, moved, or gathered. Workers remove visible defects as the coffee dries and monitor when it is ready to leave the bed.",
          "Records from individual Kayanza stations document combinations of channel grading, hand sorting, and sun-drying on raised beds. That evidence supports raised beds as a real part of the region’s specialty-coffee work. It does not mean every station uses the same bed, timing, layer depth, or routine.",
          "The bed is therefore best read as a working surface. Its geometry makes the labor visible: rows of coffee, repeated turning, separation between lots, and a long exposure to weather that must be managed rather than ignored.",
        ],
        asset: redClayAssets.origins.burundiSupport,
        caption: "Hillside landscape in Banga, Burundi.",
      },
      {
        label: "06 / TWO PROCESS DIRECTIONS",
        heading: "Washed and natural begin with different conditions.",
        paragraphs: [
          "In washed processing, the skin and most mucilage are removed before the parchment coffee is dried. In natural processing, the whole cherry dries around the seed before the dried fruit is hulled away. Fermentation takes place in both routes, but it happens in different environments and over different spans of the process.",
          "Natural processing places more of the drying burden on the intact fruit. The cherry must lose moisture evenly while the seed remains inside it. Turning, sorting, and protection from unwanted mold or uncontrolled fermentation become especially important. Washed coffee has its own risks and controls, including water quality, tank hygiene, mucilage removal, and the condition of wet parchment entering the beds.",
          "Neither is the serious process and neither is the easy one. They are different production routes. A careful natural can be clean and precise; a poorly managed washed coffee can show defects. The process name tells you the broad arrangement of fruit removal and drying, not the quality of its execution.",
        ],
      },
      {
        label: "07 / PROCESS IS NOT DESTINY",
        heading: "The same hills can produce more than one cup direction.",
        paragraphs: [
          "Post-harvest processing can influence green coffee chemistry and the sensory experience after roasting. Research also shows why simple rules fail: microbial communities, fruit condition, fermentation environment, drying, genetics, and agricultural conditions interact. “Natural equals fruit” and “washed equals floral” are useful only until they become shortcuts that hide the coffee in front of us.",
          "Place is not destiny either. Kayanza contains many hills, growers, deliveries, stations, and seasons. A regional name creates a meaningful boundary for comparison, but it cannot promise one taste. The more honest use of place is to narrow the question: which part of Kayanza, which coffee, which process, which harvest, and which description from the roaster?",
        ],
      },
      {
        label: "08 / READING RED CLAY",
        heading: "Two Kayanza coffees make the comparison visible.",
        paragraphs: [
          "Kayanza / Washed 01 is Red Clay’s softer, more floral reading: red apple, honey, and orange blossom. Kayanza / Natural 02 turns toward raspberry, black tea, and brown-sugar depth. The profiles are designed to help a visitor choose, not to claim that every washed or natural coffee from the region follows the same pattern.",
          "Taste them as a pair and the useful questions become easier to hold. What stayed constant? What changed? Region is shared at a broad level. Process direction changes. The intended cup changes too. Everything else—from specific plant material to daily station practice—would need its own evidence before it could complete the explanation.",
        ],
      },
    ],
    sources: [
      { title: "Burundi Coffee Sector Development Project", organization: "World Bank", url: "https://documents1.worldbank.org/curated/en/737101468019767768/pdf/758890PAD0P127010Box374377B00OUO090.pdf" },
      { title: "World Bank Supports Communities in Burundi to Restore Landscapes", organization: "World Bank", url: "https://www.worldbank.org/en/news/press-release/2021/05/18/world-bank-supports-communities-in-burundi-to-restore-landscapes" },
      { title: "Munkaze Coffee Washing Station, Kayanza", organization: "Alliance for Coffee Excellence", url: "https://allianceforcoffeeexcellence.org/farm-directory/91-14/" },
      { title: "Post-Harvest Processing Program Guidebook", organization: "Coffee Quality Institute", url: "https://database.coffeeinstitute.org/api/s3proxy/get/coffee/files/9u7g4u15k7/PHP%20Program%20Guidebook%20v2.0%202024.pdf" },
      { title: "The Fermentation Effect", organization: "Specialty Coffee Association", url: "https://sca.coffee/sca-news/25-magazine/issue-10/english/the-fermentation-effect-25-magazine-issue-10-bw558" },
    ],
  },
  {
    slug: "beyond-heirloom",
    storyOrdinal: "03",
    eyebrow: "VOLUME 01 — PLACE / STORY 03",
    title: "Beyond “Heirloom”",
    subtitle: "Why Ethiopian coffee diversity resists one convenient word",
    cardDeck: "Unpack the catch-all term on many coffee bags, then use region, plant material, process, and tasting notes with more precision.",
    standfirst: "“Heirloom” sounds specific, but on an Ethiopian coffee it can cover landraces, local selections, mixed plantings, or varieties shaped by formal research. The word opens a question; it does not answer it.",
    relatedBlurb: "Look beneath a convenient bag label to the landraces, local selections, research varieties, and geographic detail it can hide.",
    region: "Southern Ethiopia",
    connectedCoffees: [
      { slug: "sidama-washed-01", name: "Sidama / Washed 01", blurb: "Jasmine, yellow peach, and lemon tea in the lighter Ethiopian profile." },
      { slug: "guji-natural-02", name: "Guji / Natural 02", blurb: "Strawberry, apricot, and cacao nib in the rounder Ethiopian profile." },
    ],
    coffeeHeading: "Two Ethiopian coffees, described with more than one word.",
    coffeeBlurb: "Sidama / Washed 01 and Guji / Natural 02 use place, process, and a specific sensory profile to create contrast. Neither relies on “heirloom” as a complete explanation.",
    relatedOriginSlug: "southern-ethiopia",
    relatedOriginBlurb: "Compare Sidama with Guji, washed with natural, and broad plant-language with the details an individual coffee can actually support.",
    leadAsset: redClayAssets.origins.ethiopiaLead,
    supportingAssets: [redClayAssets.origins.ethiopiaSupport, redClayAssets.origins.ethiopiaDetail, redClayAssets.documentary.ethiopiaChecking, redClayAssets.documentary.ethiopiaQualityCheck],
    sections: [
      {
        label: "01 / THE CONVENIENT WORD",
        heading: "“Heirloom” is not a single coffee variety.",
        paragraphs: [
          "A bag of Ethiopian coffee often has a familiar pattern: region, process, elevation, then “heirloom” in the variety field. The layout makes the word look equivalent to a named variety such as SL28 or Bourbon. It is not.",
          "In English-language specialty coffee, heirloom has often worked as broad shorthand for older or locally maintained Ethiopian plant material. The term has no single, stable botanical definition. Industry educators have also used it for forest coffee, traditional varieties, and even named varieties outside Ethiopia. That flexibility is exactly why the word is weak as precise identification.",
          "The generous reading is that heirloom signals real complexity when exact genetic or local names are not available. The less useful reading is that all Ethiopian coffee belongs to one romantic, ancient category. A label can acknowledge uncertainty without turning uncertainty into a brand story.",
        ],
        asset: redClayAssets.origins.ethiopiaLead,
        assetClass: "edition-section-media--wide",
        caption: "A coffee worker examining beans during sorting near Hawassa, Ethiopia.",
      },
      {
        label: "02 / DIVERSITY UNDERNEATH IT",
        heading: "Ethiopia holds many kinds of Arabica diversity.",
        paragraphs: [
          "Ethiopia is a primary center of diversity for Coffea arabica. Research distinguishes wild or lightly managed forest populations, semi-forest coffee, garden systems, farmer-maintained landraces, local selections, and varieties released through formal breeding programs. These categories overlap in real landscapes, and plant material can move between them.",
          "That diversity sits inside a species with an unusual history. Genomic research indicates that Arabica arose through a rare hybridization and polyploidization event, leaving the species with a narrower overall genetic base than many crops. Within Arabica, however, Ethiopian populations still hold important geographic structure and variation that is limited or absent from the small set of lineages spread widely through global cultivation.",
          "Both statements can be true: Arabica as a species can have low genetic variation relative to other crops, while Ethiopia contains the species’ richest and most important reservoir of diversity. “Exceptionally diverse” needs that context. It does not mean every Ethiopian farm contains every type, or that each lot is genetically mixed in the same way.",
        ],
      },
      {
        label: "03 / LANDRACES AND SELECTIONS",
        heading: "Local does not mean untouched by people.",
        paragraphs: [
          "A landrace is generally understood as a crop population maintained and shaped over time in a local farming system. Adaptation is part of the idea, but so is human selection. Farmers choose seed, keep plants that perform, exchange material, and name types through knowledge that may not match a formal genetic catalog.",
          "A local selection begins when particular plants are chosen from a broader population for useful traits. A research selection applies more formal testing and distribution. Ethiopia’s coffee research institutions have collected, conserved, selected, and released varieties, including material chosen for disease resistance, yield, and quality. Those coffees are Ethiopian, but it would be inaccurate to call every one an unidentified heirloom.",
          "The distinction matters because a catch-all word can hide agricultural knowledge. It can erase farmer names for plant types and obscure the work of Ethiopian breeders and genebanks. Precision is not about replacing one broad term with another. It is about using the most specific language the evidence allows.",
        ],
        asset: redClayAssets.origins.ethiopiaSupport,
        caption: "Workers sorting coffee beans by size in Hawassa, Ethiopia.",
      },
      {
        label: "04 / WHY NAMING IS DIFFICULT",
        heading: "A plant can have a local name, a research code, both, or neither.",
        paragraphs: [
          "Coffee variety identification can draw on farmer knowledge, plant shape, fruit and leaf traits, collection records, and genetic testing. Those sources do not always align. Two plants can look similar and have different genetic histories; one named type can contain more variation than a commercial label suggests.",
          "Genebanks use the word accession for a collected sample held as a distinct entry. An accession is not automatically a commercial variety. It may be one plant, seed from a population, or material kept for future research. The large number of accessions conserved from Ethiopia demonstrates the scale of research material, not a count of consumer-ready variety names.",
          "Mixtures add another layer. Coffee from several small plots may enter one station lot. A plot may contain more than one plant type. Unless the chain can identify and keep a specific variety separate, the honest label may remain broad. “Local landraces and selections” can be more informative than heirloom, but it is still a category, not a genetic result.",
          "Good labeling therefore includes the limit of knowledge. “Variety not specified” is not a failure when the information is genuinely unavailable. False precision is worse because it turns an assumption into product fact.",
        ],
        asset: redClayAssets.documentary.ethiopiaChecking,
        caption: "Women checking coffee in Addis Ababa, Ethiopia; this image is general Ethiopia work context, not Sidama, Guji, or Hawassa evidence.",
      },
      {
        label: "05 / SIDAMA AND GUJI",
        heading: "Geography is useful, but it is not flavor shorthand.",
        paragraphs: [
          "Sidama and Guji are distinct coffee geographies in southern Ethiopia. Ethiopian research collections treat them as separate sources of germplasm, alongside Gedeo, Amaro, Gamo Gofa, Jinka, and other areas. That makes the regional name meaningful information about where a coffee comes from.",
          "It does not make Sidama synonymous with jasmine or Guji synonymous with strawberry. Each contains multiple districts, elevations, farms, plant populations, stations, seasons, and post-harvest practices. Research in southern Ethiopia has found variation among genotypes and environments, which is the opposite of a fixed regional flavor rule.",
          "The best use of geography is to narrow the field. Country becomes region; region may become zone, district, station, cooperative, or farm when the supply chain can support it. Each added level gives the drinker more context, but none removes the need to taste the individual coffee.",
        ],
      },
      {
        label: "06 / PROCESS ADDS ANOTHER DIMENSION",
        heading: "Washed and natural describe handling, not identity.",
        paragraphs: [
          "In washed processing, the fruit skin and most mucilage are removed before the parchment coffee is dried. In natural processing, the whole cherry dries around the seed before hulling. The difference changes where fermentation occurs and how the seed responds during drying.",
          "That makes process useful on a bag. It can help a drinker compare two coffees from the same country or region. It still cannot carry the full explanation. Fruit maturity, plant material, temperature, microbes, drying rate, storage, roasting, and brewing all affect what reaches the cup.",
          "The familiar contrast—washed is floral and clean, natural is fruity and heavy—may describe some coffees. It cannot define the categories. A carefully handled natural can be delicate; a washed coffee can be full and fruit-saturated. Read the process beside the producer’s or roaster’s specific notes, not in place of them.",
        ],
        asset: redClayAssets.documentary.ethiopiaQualityCheck,
        caption: "Hands inspecting raw coffee beans in an Ethiopia Commodity Exchange / Awassa-associated quality-check series; DFID / Pete Lewis credit retained.",
      },
      {
        label: "07 / READING RED CLAY",
        heading: "Sidama / Washed 01 and Guji / Natural 02 create a deliberate contrast.",
        paragraphs: [
          "Sidama / Washed 01 is Red Clay’s lighter Ethiopian profile: jasmine, yellow peach, and lemon tea. Guji / Natural 02 is the rounder one: strawberry, apricot, and cacao nib. Place changes, process changes, and the intended sensory direction changes with them.",
          "The pair is useful because it does not ask “heirloom” to explain either coffee. Sidama and Guji locate them at a regional level. Washed and natural describe the broad post-harvest route. The tasting notes help a visitor choose between Red Clay’s two profiles. Exact variety detail should enter only when the coffee can support it.",
          "This is a product comparison, not evidence that Sidama must be floral or Guji must be fruit-driven. Reverse examples exist, and new harvests will continue to resist a neat two-column rule.",
        ],
      },
      {
        label: "08 / WHAT TO LOOK FOR ON A BAG",
        heading: "Use four fields, and notice what each leaves open.",
        paragraphs: [
          "Start with place. Country and region are useful; a more local station, cooperative, community, or farm can add context when it is supported. Next, read the variety field literally. A named variety, local selection, landrace group, mixed planting, or unspecified variety are different levels of information.",
          "Then read process. Washed, natural, honey, and newer fermentation terms should tell you something about fruit removal and drying, but the word alone does not certify quality. Finally, use tasting notes as sensory references from the roaster. They describe resemblance and direction, not ingredients added to the coffee.",
          "If a bag says heirloom, treat it as an invitation to ask what is known underneath: local landraces, named farmer selections, research varieties, a mixture, or simply incomplete identification. The answer may still be broad. What matters is that the language does not pretend to be narrower than the evidence.",
          "One convenient word once helped the coffee trade speak about complexity it had not fully named. Better information now allows a more useful habit: keep the complexity, lose the false certainty, and let each coffee tell a more specific story.",
        ],
      },
    ],
    sources: [
      { title: "Current status of coffee genetic resources in Ethiopia", organization: "Genetic Resources and Crop Evolution / FAO AGRIS", url: "https://agris.fao.org/search/en/records/64745c2713d110e4e7acc47f" },
      { title: "A single polyploidization event at the origin of Coffea arabica", organization: "Scientific Reports", url: "https://doi.org/10.1038/s41598-020-61216-7" },
      { title: "Evaluation of Arabica coffee genotypes grown in Southern Ethiopia", organization: "Heliyon", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11305185/" },
      { title: "An Unprecedented Journey: The FAO Coffee Mission to Ethiopia", organization: "Specialty Coffee Association", url: "https://sca.coffee/sca-news/25/issue-13/an-unprecedented-journey-the-fao-coffee-mission-to-ethiopia-ej3y3" },
      { title: "A Roaster’s Guide to Understanding Coffee Plant Types", organization: "Royal Coffee", url: "https://royalcoffee.com/a-roasters-guide-to-understanding-coffee-plant-types/" },
      { title: "The Fermentation Effect", organization: "Specialty Coffee Association", url: "https://sca.coffee/sca-news/25-magazine/issue-10/english/the-fermentation-effect-25-magazine-issue-10-bw558" },
    ],
  },
];

export const legacyEditionSlugs: Record<string, string> = {
  "the-shape-of-sweetness": "along-the-kayanza-hills",
  "a-vessel-for-morning": "beyond-heirloom",
  "canopy-and-landrace": "beyond-heirloom",
};

export const getEditionBySlug = (slug: string) => editions.find((edition) => edition.slug === (legacyEditionSlugs[slug] ?? slug));
