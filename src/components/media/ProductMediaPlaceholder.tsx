import Image from "next/image";
import type { RedClayAsset } from "@/lib/assets/registry";

type ProductMediaPlaceholderProps = {
  assetId: string;
  aspectRatio?: string;
  label: string;
  kind?: "coffee" | "kiln-cup" | "pairing";
  variant?: "default" | "cart";
  className?: string;
  src?: string;
  alternate?: RedClayAsset;
};

export function ProductMediaPlaceholder({ assetId, aspectRatio = "4 / 5", label, kind = "coffee", variant = "default", className = "", src, alternate }: ProductMediaPlaceholderProps) {
  const isCartThumbnail = variant === "cart";
  return (
    <div className={`product-media-stage ${isCartThumbnail ? "product-media-stage--cart" : ""} ${className}`} style={{ aspectRatio }}>
      {src ? <Image className="product-media-primary" src={src} alt={isCartThumbnail ? "" : label} fill sizes={isCartThumbnail ? "120px" : "(max-width: 767px) 100vw, 44vw"} /> : (
        <div className={`product-placeholder product-placeholder--${kind}`} {...(isCartThumbnail ? { "aria-hidden": true } : { role: "img", "aria-label": `${label}.` })} data-asset-id={assetId} data-placeholder-kind={kind}>
          <div className="placeholder-object" aria-hidden="true">
            <span className="placeholder-mark">RED CLAY</span>
            {!isCartThumbnail && <span className="placeholder-label">{label}</span>}
          </div>
        </div>
      )}
      {alternate?.src && <Image className="product-media-alternate" src={alternate.src} alt="" fill sizes={isCartThumbnail ? "120px" : "(max-width: 767px) 100vw, 44vw"} />}
    </div>
  );
}
