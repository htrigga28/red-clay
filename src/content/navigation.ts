import { origins } from "./origins";

export const navigation = {
  primary: [
    { label: "Shop", href: "/shop" },
    { label: "Origins", href: "/origins" },
    { label: "The Editions", href: "/journal" },
    { label: "About", href: "/about" },
  ],
  shopRevealGroups: [
    {
      label: "HOUSE",
      items: [
        { label: "Laterite", href: "/shop/laterite" },
        { label: "Basalt", href: "/shop/basalt" },
        { label: "Linen", href: "/shop/linen" },
      ],
    },
    {
      label: "CURRENT HARVEST",
      items: [
        { label: "Kenya — 2 coffees", href: "/shop#kenya-coffees" },
        { label: "Kayanza — 2 coffees", href: "/shop#kayanza-coffees" },
        { label: "Ethiopia — 2 coffees", href: "/shop#ethiopia-coffees" },
      ],
    },
    {
      label: "MORE",
      items: [
        { label: "Afterlight", href: "/shop/afterlight" },
        { label: "Instant", href: "/shop/red-clay-instant" },
        { label: "Three Regions", href: "/shop/three-regions" },
        { label: "The Kiln Cup", href: "/shop/the-kiln-cup" },
      ],
    },
  ],
  originReveal: [...origins.map(({ name, slug }) => ({ label: name, href: `/origins/${slug}` })), { label: "The Earthen Folio", href: "/origins" }],
} as const;
