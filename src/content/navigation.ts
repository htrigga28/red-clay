import { coffees, kilnCup } from "./coffees";
import { origins } from "./origins";

export const navigation = {
  primary: [
    { label: "Shop", href: "/shop" },
    { label: "Origins", href: "/origins" },
    { label: "The Editions", href: "/journal" },
    { label: "About", href: "/about" },
  ],
  shopReveal: [...coffees.map(({ id, slug }) => ({ label: id, href: `/shop/${slug}` })), { label: kilnCup.id, href: `/shop/${kilnCup.slug}` }],
  originReveal: [...origins.map(({ name, slug }) => ({ label: name, href: `/origins/${slug}` })), { label: "The Earthen Folio", href: "/origins" }],
} as const;
