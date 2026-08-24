import { redClayAssets } from "@/lib/assets/registry";

export type HeroTone = "light" | "dark";

export type HeroSlide = {
  id: string;
  label: string;
  secondaryLabel?: string;
  image: string;
  alt: string;
  objectPosition?: string;
  headerTone: HeroTone;
};

export const homeHeroToneEvent = "red-clay:home-hero-tone";

export const homeHeroSlides = [
  {
    id: "place",
    label: "Place",
    secondaryLabel: "Kiambu, Kenya",
    image: redClayAssets.origins.kenyaLead.src,
    alt: redClayAssets.origins.kenyaLead.alt,
    objectPosition: "52% 52%",
    headerTone: "light",
  },
  {
    id: "process",
    label: "Process",
    secondaryLabel: "Kayanza, Burundi",
    image: redClayAssets.origins.burundiLead.src,
    alt: redClayAssets.origins.burundiLead.alt,
    objectPosition: "50% 48%",
    headerTone: "light",
  },
  {
    id: "ritual",
    label: "Ritual",
    secondaryLabel: "The morning pour",
    image: redClayAssets.ritual.hands.src,
    alt: redClayAssets.ritual.hands.alt,
    objectPosition: "50% 48%",
    headerTone: "dark",
  },
] as const satisfies readonly HeroSlide[];
