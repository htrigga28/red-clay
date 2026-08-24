export type Coffee = {
  id: "KENYA LOT 01" | "BURUNDI LOT 01" | "ETHIOPIA LOT 01" | "ETHIOPIA LOT 02";
  slug: string;
  region: string;
  notes: string;
  process: string;
  assetId: string;
};

export const coffees: Coffee[] = [
  { id: "KENYA LOT 01", slug: "kenya-lot-01", region: "Central Kenya", notes: "Blackcurrant / plum / cane sugar", process: "Washed", assetId: "SHOP-KENYA-01" },
  { id: "BURUNDI LOT 01", slug: "burundi-lot-01", region: "Kayanza / Burundi", notes: "Red apple / honey / orange blossom", process: "Lot details pending", assetId: "SHOP-BURUNDI-01" },
  { id: "ETHIOPIA LOT 01", slug: "ethiopia-lot-01", region: "Southern Ethiopia", notes: "Seasonal profile pending", process: "Washed / natural", assetId: "SHOP-ETHIOPIA-01" },
  { id: "ETHIOPIA LOT 02", slug: "ethiopia-lot-02", region: "Southern Ethiopia", notes: "Seasonal profile pending", process: "Washed / natural", assetId: "SHOP-ETHIOPIA-02" },
];

export const kilnCup = { id: "THE KILN CUP", slug: "the-kiln-cup", region: "Companion object", notes: "Raw terracotta / mineral-white glaze", process: "Vessel", assetId: "SHOP-KILN-01" };
