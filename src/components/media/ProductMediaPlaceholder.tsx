import Image from "next/image";
import type { RedClayAsset } from "@/lib/assets/registry";

type ProductMediaPlaceholderProps = {
  assetId: string;
  aspectRatio?: string;
  label: string;
  kind?: "coffee" | "kiln-cup" | "pairing";
  className?: string;
  src?: string;
  alternate?: RedClayAsset;
};

export function ProductMediaPlaceholder({ assetId, aspectRatio = "4 / 5", label, kind = "coffee", className = "", src, alternate }: ProductMediaPlaceholderProps) {
  return (
    <div className={`product-media-stage ${className}`} style={{ aspectRatio }}>
      {src ? <Image className="product-media-primary" src={src} alt={label} fill sizes="(max-width: 767px) 100vw, 44vw" /> : (
        <div className={`product-placeholder product-placeholder--${kind}`} role="img" aria-label={label} data-asset-id={assetId} data-placeholder-kind={kind}>
          <div className="placeholder-object" aria-hidden="true">
            <span className="placeholder-mark">RED CLAY</span>
            <span className="placeholder-label">{label}</span>
          </div>
          <span className="placeholder-alt" aria-hidden="true">Material study</span>
        </div>
      )}
      {alternate?.src && <Image className="product-media-alternate" src={alternate.src} alt="" fill sizes="(max-width: 767px) 100vw, 44vw" />}
    </div>
  );
}
