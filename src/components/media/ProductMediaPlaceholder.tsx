type ProductMediaPlaceholderProps = {
  assetId: string;
  aspectRatio?: string;
  label: string;
  kind?: "coffee" | "kiln-cup" | "pairing";
  className?: string;
  src?: string;
};

export function ProductMediaPlaceholder({ assetId, aspectRatio = "4 / 5", label, kind = "coffee", className = "", src }: ProductMediaPlaceholderProps) {
  if (src) {
    return <img className={`media-image ${className}`} src={src} alt={label} style={{ aspectRatio }} />;
  }

  return (
    <div className={`product-placeholder product-placeholder--${kind} ${className}`} style={{ aspectRatio }} role="img" aria-label={label} data-asset-id={assetId} data-placeholder-kind={kind}>
      <div className="placeholder-object" aria-hidden="true">
        <span className="placeholder-mark">RED CLAY</span>
        <span className="placeholder-label">{label}</span>
      </div>
      <span className="placeholder-alt" aria-hidden="true">Material study</span>
    </div>
  );
}
