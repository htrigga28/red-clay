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
