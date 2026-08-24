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
    kenyaProduct: { id: "SHOP-KENYA-01", status: "CUSTOM_ASSET_PENDING", role: "Kenya coffee product media", alt: "KENYA LOT 01 product media pending." },
    burundiProduct: { id: "SHOP-BURUNDI-01", status: "CUSTOM_ASSET_PENDING", role: "Burundi coffee product media", alt: "BURUNDI LOT 01 product media pending." },
    ethiopia01Product: { id: "SHOP-ETHIOPIA-01", status: "CUSTOM_ASSET_PENDING", role: "Ethiopia Lot 01 product media", alt: "ETHIOPIA LOT 01 product media pending." },
    ethiopia02Product: { id: "SHOP-ETHIOPIA-02", status: "CUSTOM_ASSET_PENDING", role: "Ethiopia Lot 02 product media", alt: "ETHIOPIA LOT 02 product media pending." },
    kilnCup: { id: "SHOP-KILN-01", status: "CUSTOM_ASSET_PENDING", role: "Kiln Cup product media", alt: "The Kiln Cup product media pending." },
  },
} as const satisfies Record<string, Record<string, RedClayAsset>>;

export const pendingPlaceholderPath = (assetId: string, kind: "coffee" | "kiln-cup" | "pairing" = "coffee") =>
  `/media/red-clay/placeholders/${kind}/${assetId.toLowerCase()}.svg`;
