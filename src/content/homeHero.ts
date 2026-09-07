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
    image: redClayAssets.documentary.homePlace.src,
    alt: redClayAssets.documentary.homePlace.alt,
    objectPosition: "52% 52%",
    headerTone: "light",
  },
  {
    id: "process",
    label: "Process",
    secondaryLabel: "Fairview Estate, Kiambu, Kenya",
    image: redClayAssets.documentary.homeProcess.src,
    alt: redClayAssets.documentary.homeProcess.alt,
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
