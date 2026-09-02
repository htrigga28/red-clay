export type AssetStatus =
  | "APPROVED_CURRENT"
  | "PROVISIONAL_REPLACEABLE"
  | "CUSTOM_ASSET_PENDING";

export type RedClayAsset = {
  id: string;
  src?: string;
  status: AssetStatus;
  alt: string;
  role: string;
  location?: string;
  creator?: string;
  license?: string;
  sourcePage?: string;
};

export const redClayAssets = {
  architecture: {
    hero: {
      id: "ARCH-201",
      src: "/media/red-clay/ARCHITECTURE/ARCH-201.jpg",
      status: "PROVISIONAL_REPLACEABLE",
      alt: "Contemporary rammed-earth walls beneath a timber pergola.",
      role: "Home brand-world hero prototype",
    },
  },
  materials: {
    clay: {
      id: "MAT-CLAY-001",
      src: "/media/red-clay/MATERIALS/MAT-CLAY-001.jpg",
      status: "APPROVED_CURRENT",
      alt: "Cracked red earth texture.",
      role: "Clay material plane",
    },
    stone: {
      id: "MAT-STONE-102",
      src: "/media/red-clay/MATERIALS/MAT-STONE-102.jpg",
      status: "APPROVED_CURRENT",
      alt: "Dark fractured stone texture.",
      role: "Basalt material support",
    },
    linen: {
      id: "MAT-LINEN-101",
      src: "/media/red-clay/MATERIALS/MAT-LINEN-101.jpg",
      status: "APPROVED_CURRENT",
      alt: "Close woven linen texture.",
      role: "Linen surface support",
    },
  },
  origins: {
    kenyaLead: {
      id: "KEN-LAND-001",
      src: "/media/red-clay/KENYA/KEN-LAND-001.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee plants near Kawaida Falls in Kiambu County, Kenya.",
      role: "Central Kenya origin lead",
    },
    kenyaProcess: {
      id: "KEN-PROC-001",
      src: "/media/red-clay/KENYA/KEN-PROC-001.jpg",
      status: "APPROVED_CURRENT",
      alt: "Farmers sorting coffee cherries in Kenya.",
      role: "Kenya process plate",
    },
    kenyaDrying: {
      id: "KEN-PROC-111",
      src: "/media/red-clay/KENYA/KEN-PROC-111.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee beans drying on raised racks at Fairview Estate in Kiambu, Kenya.",
      role: "Kenya process detail",
    },
    kenyaDetail: {
      id: "KEN-PROC-115",
      src: "/media/red-clay/KENYA/KEN-PROC-115.jpg",
      status: "APPROVED_CURRENT",
      alt: "Ripe coffee cherries on a plant at Fairview Estate in Kiambu, Kenya.",
      role: "Kenya botanical detail",
    },
    burundiLead: {
      id: "BUR-LAND-001",
      src: "/media/red-clay/BURUNDI/BUR-LAND-001.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee processing landscape in Kayanza, Burundi.",
      role: "Kayanza / Burundi origin lead",
    },
    burundiSupport: {
      id: "BUR-LAND-003",
      src: "/media/red-clay/BURUNDI/BUR-LAND-003.jpg",
      status: "APPROVED_CURRENT",
      alt: "Hillside landscape in Banga, Burundi.",
      role: "Burundi landscape support",
    },
    burundiBotanical: {
      id: "BUR-BOT-001",
      src: "/media/red-clay/BURUNDI/BUR-BOT-001.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee cherries and leaves in Ngozi, Burundi.",
      role: "Burundi botanical detail",
    },
    ethiopiaLead: {
      id: "ETH-PROC-103",
      src: "/media/red-clay/ETHIOPIA/ETH-PROC-103.jpg",
      status: "PROVISIONAL_REPLACEABLE",
      alt: "A coffee worker examining beans during sorting near Hawassa, Ethiopia.",
      role: "Southern Ethiopia origin lead",
    },
    ethiopiaSupport: {
      id: "ETH-PROC-104",
      src: "/media/red-clay/ETHIOPIA/ETH-PROC-104.jpg",
      status: "APPROVED_CURRENT",
      alt: "Workers sorting coffee beans by size in Hawassa, Ethiopia.",
      role: "Ethiopia process support",
    },
    ethiopiaDetail: {
      id: "ETH-PROC-105",
      src: "/media/red-clay/ETHIOPIA/ETH-PROC-105.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee beans being sifted during quality sorting in Ethiopia.",
      role: "Ethiopia process detail",
    },
  },
  documentary: {
    homePlace: {
      id: "HOME-PLACE-4K",
      src: "/media/red-clay/documentary/hpl-01_kia-l1__kiambu_dirt_road_fairview-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Dirt road through coffee cultivation at Fairview Estate in Kiambu, Kenya.",
      role: "Homepage place hero",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Dirt_road_at_Fairview_Estates_coffee_planation,_Kiambu,_KE.jpg",
    },
    kiambuLead: {
      id: "KIAMBU-LAND-4K",
      src: "/media/red-clay/documentary/hpl-02_kia-l2__kiambu_view_across_coffee_fields-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "View across coffee fields at Fairview Estate in Kiambu, Kenya.",
      role: "Kiambu landscape lead",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:View_across_coffee_fields,_Fairview_Estate,_Kiambu,_KE.jpg",
    },
    kiambuSupport: {
      id: "KIAMBU-LAND-SUPPORT-4K",
      src: "/media/red-clay/documentary/hpl-03_kia-l3__kiambu_coffee_bushes_palms-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee bushes, trees, and palms at Fairview Estate in Kiambu, Kenya.",
      role: "Dense cultivation and place support",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Coffee_bushes,_trees_and_palms_at_Fairview_Estate,_Kiambu,_KE.jpg",
    },
    homeProcess: {
      id: "HOME-PROCESS-4K",
      src: "/media/red-clay/documentary/hpr-01_ken-d1__kiambu_coffee_drying_rack-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee drying on raised racks at Fairview Estate in Kiambu, Kenya.",
      role: "Homepage process hero and Kenya drying support",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Coffee_beans_drying_at_Fairview_Estate,_Kiambu,_KE.jpg",
    },
    kenyaWashingInfrastructure: {
      id: "KENYA-WASH-INFRASTRUCTURE-4K",
      src: "/media/red-clay/documentary/hpr-02_ken-w1__kiambu_washing_pits_inactive-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Inactive coffee washing pits at Fairview Estate in Kiambu, Kenya.",
      role: "Washed-process infrastructure support",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Coffee_washing_pits_at_Fairview_Estate,_Kiamu,_KE.jpg",
    },
    kiambuCultivation: {
      id: "KIAMBU-CULT-4K",
      src: "/media/red-clay/documentary/kia-c1__kiambu_unripe_coffee_berries-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Unripe coffee berries on plants at Fairview Estate in Kiambu, Kenya.",
      role: "Kiambu cultivation detail",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Coffee_berries_on_plants_at_Fairview_Estate,_Kiambu,_KE.jpg",
    },
    kiambuCherryDetail: {
      id: "KIAMBU-CHERRY-DETAIL-4K",
      src: "/media/red-clay/documentary/kia-c2__kiambu_hand_holding_mature_cherries-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "A hand holding coffee cherries at Fairview Estate in Kiambu, Kenya.",
      role: "Mature cherry supporting detail",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Hand_holding_coffee_cherries.jpg",
    },
    kenyaDryingTexture: {
      id: "KENYA-DRYING-TEXTURE-4K",
      src: "/media/red-clay/documentary/ken-d2__kiambu_drying_coffee_texture-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Coffee beans drying in a close texture view at Fairview Estate in Kiambu, Kenya.",
      role: "Kenya drying texture detail",
      location: "Fairview Estate, Kiambu, Kenya",
      creator: "Daniel Case",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Drying_coffee_bean_texture_at_Fairview_Estate,_Kiambu,_KE.jpg",
    },
    ethiopiaChecking: {
      id: "ETHIOPIA-COFFEE-CHECKING-4K",
      src: "/media/red-clay/documentary/hpr-03_eth-s1__addis_women_checking_coffee-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Women checking coffee in Addis Ababa, Ethiopia.",
      role: "Ethiopia coffee checking and sorting support",
      location: "Addis Ababa, Ethiopia",
      creator: "Nhb201",
      license: "CC BY-SA 4.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Women_checking_coffee.jpg",
    },
    ethiopiaQualityCheck: {
      id: "ETHIOPIA-QUALITY-CHECK-EDITORIAL",
      src: "/media/red-clay/documentary/eth-s2__ethiopia_raw_coffee_quality_check-2400.jpg",
      status: "APPROVED_CURRENT",
      alt: "Hands inspecting raw coffee beans at an Ethiopia Commodity Exchange and Awassa-associated quality check.",
      role: "Ethiopia quality-control editorial detail",
      location: "Ethiopia Commodity Exchange / Awassa-associated series",
      creator: "DFID - UK Department for International Development",
      license: "CC BY 2.0",
      sourcePage: "https://commons.wikimedia.org/wiki/File:The_shape,_colour_and_odour_of_beans.jpg",
    },
  },
  ritual: {
    pourOver: {
      id: "RITUAL-203",
      src: "/media/red-clay/RITUAL/RITUAL-203.jpg",
      status: "APPROVED_CURRENT",
      alt: "Glass pour-over dripper and server casting shadows in morning light.",
      role: "Domestic ritual plate",
    },
    hands: {
      id: "RITUAL-216",
      src: "/media/red-clay/RITUAL/RITUAL-216.jpg",
      status: "APPROVED_CURRENT",
      alt: "Hot water being poured into a coffee dripper.",
      role: "Pour-over hands plate",
    },
  },
  pending: {
    laterite: { id: "SHOP-LATERITE-01", status: "CUSTOM_ASSET_PENDING", role: "Laterite product media", alt: "Laterite coffee." },
    basalt: { id: "SHOP-BASALT-01", status: "CUSTOM_ASSET_PENDING", role: "Basalt product media", alt: "Basalt coffee." },
    linen: { id: "SHOP-LINEN-01", status: "CUSTOM_ASSET_PENDING", role: "Linen product media", alt: "Linen coffee." },
    kiambuWashed01: { id: "SHOP-KIAMBU-WASHED-01", status: "CUSTOM_ASSET_PENDING", role: "Kiambu Washed 01 product media", alt: "Kiambu / Washed 01 coffee." },
    kirinyagaWashed02: { id: "SHOP-KIRINYAGA-WASHED-02", status: "CUSTOM_ASSET_PENDING", role: "Kirinyaga Washed 02 product media", alt: "Kirinyaga / Washed 02 coffee." },
    kayanzaWashed01: { id: "SHOP-KAYANZA-WASHED-01", status: "CUSTOM_ASSET_PENDING", role: "Kayanza Washed 01 product media", alt: "Kayanza / Washed 01 coffee." },
    kayanzaNatural02: { id: "SHOP-KAYANZA-NATURAL-02", status: "CUSTOM_ASSET_PENDING", role: "Kayanza Natural 02 product media", alt: "Kayanza / Natural 02 coffee." },
    sidamaWashed01: { id: "SHOP-SIDAMA-WASHED-01", status: "CUSTOM_ASSET_PENDING", role: "Sidama Washed 01 product media", alt: "Sidama / Washed 01 coffee." },
    gujiNatural02: { id: "SHOP-GUJI-NATURAL-02", status: "CUSTOM_ASSET_PENDING", role: "Guji Natural 02 product media", alt: "Guji / Natural 02 coffee." },
    afterlight: { id: "SHOP-AFTERLIGHT-01", status: "CUSTOM_ASSET_PENDING", role: "Afterlight product media", alt: "Afterlight decaf coffee." },
    instantEthiopia: { id: "SHOP-INSTANT-ETHIOPIA-01", status: "CUSTOM_ASSET_PENDING", role: "Red Clay Instant Ethiopia product media", alt: "Red Clay Instant — Ethiopia." },
    threeRegions: { id: "SHOP-THREE-REGIONS-01", status: "CUSTOM_ASSET_PENDING", role: "Three Regions product media", alt: "Three Regions discovery box." },
    kilnCup: { id: "SHOP-KILN-01", status: "CUSTOM_ASSET_PENDING", role: "Kiln Cup product media", alt: "The Kiln Cup." },
  },
} as const satisfies Record<string, Record<string, RedClayAsset>>;

export const pendingPlaceholderPath = (assetId: string, kind: "coffee" | "kiln-cup" | "pairing" = "coffee") =>
  `/media/red-clay/placeholders/${kind}/${assetId.toLowerCase()}.svg`;
