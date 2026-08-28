import {
  getProductById,
  type FormatId,
  type GrindId,
  type Product,
  type ProductId,
} from "@/content/coffees";

export type ProductSelection = {
  formatId: FormatId;
  grindId?: GrindId;
};

export type CartLineIdentity = ProductSelection & {
  productId: ProductId;
};

export type CartLine = CartLineIdentity & {
  lineId: string;
  quantity: number;
};

export type ResolvedCartLine = {
  line: CartLine;
  product: Product;
  format: Product["commerce"]["formats"][number];
  grindId?: GrindId;
  unitPriceKes: number;
};

export function formatKes(value: number) {
  return `KES ${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)}`;
}

export function makeCartLineId({ productId, formatId, grindId }: CartLineIdentity) {
  return `${productId}::${formatId}::${grindId ?? "none"}`;
}

export function getDefaultSelection(product: Product): ProductSelection {
  return {
    formatId: product.commerce.defaultFormatId,
    ...(product.commerce.defaultGrindId ? { grindId: product.commerce.defaultGrindId } : {}),
  };
}

export function resolveSelection(product: Product | undefined, selection: ProductSelection) {
  if (!product) return null;
  const format = product.commerce.formats.find((option) => option.id === selection.formatId);
  if (!format) return null;
  const requiresGrind = product.commerce.grindOptions.length > 0;
  if (requiresGrind !== Boolean(selection.grindId)) return null;
  if (selection.grindId && !product.commerce.grindOptions.includes(selection.grindId)) return null;
  return { product, format, grindId: selection.grindId, unitPriceKes: format.priceKes };
}

export function resolveCartLine(line: CartLine): ResolvedCartLine | null {
  if (!Number.isInteger(line.quantity) || line.quantity < 1 || line.lineId !== makeCartLineId(line)) return null;
  const selection = resolveSelection(getProductById(line.productId), line);
  return selection ? { line, ...selection } : null;
}

export function calculateSubtotal(lines: ReadonlyArray<Pick<ResolvedCartLine, "line" | "unitPriceKes">>) {
  return lines.reduce((total, { line, unitPriceKes }) => total + line.quantity * unitPriceKes, 0);
}

export function getKenyaDeliveryProgress(subtotalKes: number) {
  const remainingKes = Math.max(0, 5000 - subtotalKes);
  return {
    thresholdKes: 5000,
    remainingKes,
    isEligible: remainingKes === 0,
    message: remainingKes === 0 ? "Free Kenya delivery unlocked." : `${formatKes(remainingKes)} away from free Kenya delivery.`,
  };
}
