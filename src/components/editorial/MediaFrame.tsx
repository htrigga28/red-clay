import Image from "next/image";
import type { RedClayAsset } from "@/lib/assets/registry";

export function MediaFrame({
  asset,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 60vw",
}: {
  asset: RedClayAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!asset.src) return null;
  return <figure className={`media-frame ${className}`}><Image src={asset.src} alt={asset.alt} fill sizes={sizes} priority={priority} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} /></figure>;
}
