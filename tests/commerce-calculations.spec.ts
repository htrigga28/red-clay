import { expect, test } from "@playwright/test";
import { allActiveProducts, getProductById, type ProductId } from "@/content/coffees";
import {
  calculateSubtotal,
  formatKes,
  getKenyaDeliveryProgress,
  makeCartLineId,
  resolveCartLine,
  resolveSelection,
  type CartLine,
} from "@/lib/commerce";

const canon: Record<ProductId, { formats: Array<[string, string, number]>; grinds: string[] }> = {
  "LATERITE": { formats: [["250g", "250g", 1600], ["1kg", "1kg", 5600]], grinds: ["whole-bean", "filter", "espresso"] },
  "BASALT": { formats: [["250g", "250g", 1700], ["1kg", "1kg", 6000]], grinds: ["whole-bean", "filter", "espresso"] },
  "LINEN": { formats: [["250g", "250g", 1800], ["1kg", "1kg", 6400]], grinds: ["whole-bean", "filter", "espresso"] },
  "KIAMBU / WASHED 01": { formats: [["250g", "250g", 1950]], grinds: ["whole-bean", "filter"] },
  "KIRINYAGA / WASHED 02": { formats: [["250g", "250g", 2100]], grinds: ["whole-bean", "filter"] },
  "KAYANZA / WASHED 01": { formats: [["250g", "250g", 1900]], grinds: ["whole-bean", "filter"] },
  "KAYANZA / NATURAL 02": { formats: [["250g", "250g", 2050]], grinds: ["whole-bean", "filter"] },
  "SIDAMA / WASHED 01": { formats: [["250g", "250g", 2100]], grinds: ["whole-bean", "filter"] },
  "GUJI / NATURAL 02": { formats: [["250g", "250g", 2200]], grinds: ["whole-bean", "filter"] },
  "AFTERLIGHT": { formats: [["250g", "250g", 2200]], grinds: ["whole-bean", "filter", "espresso"] },
  "RED CLAY INSTANT — ETHIOPIA": { formats: [["6-sachets", "6 sachets", 2300]], grinds: [] },
  "THREE REGIONS": { formats: [["3x100g", "3 × 100g", 2800]], grinds: ["whole-bean", "filter"] },
  "THE KILN CUP": { formats: [["300ml", "300ml", 5900]], grinds: [] },
};

test("the catalog contains the exact 12 coffees and The Kiln Cup commerce matrix", () => {
  expect(allActiveProducts.map((product) => product.id)).toEqual(Object.keys(canon));
  for (const product of allActiveProducts) {
    const expected = canon[product.id];
    expect(product.commerce.currency).toBe("KES");
    expect(product.commerce.formats.map((format) => [format.id, format.label, format.priceKes])).toEqual(expected.formats);
    expect(product.commerce.grindOptions).toEqual(expected.grinds);
    for (const format of product.commerce.formats) {
      if (product.commerce.grindOptions.length === 0) {
        expect(resolveSelection(product, { formatId: format.id })).toMatchObject({ format, unitPriceKes: format.priceKes });
      } else {
        for (const grindId of product.commerce.grindOptions) {
          expect(resolveSelection(product, { formatId: format.id, grindId })).toMatchObject({ format, grindId, unitPriceKes: format.priceKes });
        }
      }
    }
    expect(resolveSelection(product, { formatId: product.id === "THE KILN CUP" ? "1kg" : "300ml" })).toBeNull();
  }
});

test("KES formatting, cart identity, subtotal, and delivery progress use whole KES values", () => {
  expect(formatKes(1600)).toBe("KES 1,600");
  expect(formatKes(5900)).toBe("KES 5,900");
  const laterite = getProductById("LATERITE");
  expect(laterite).toBeDefined();
  const wholeBean: CartLine = { lineId: makeCartLineId({ productId: "LATERITE", formatId: "250g", grindId: "whole-bean" }), productId: "LATERITE", formatId: "250g", grindId: "whole-bean", quantity: 2 };
  const sameVariant = makeCartLineId({ productId: "LATERITE", formatId: "250g", grindId: "whole-bean" });
  const espresso: CartLine = { lineId: makeCartLineId({ productId: "LATERITE", formatId: "1kg", grindId: "espresso" }), productId: "LATERITE", formatId: "1kg", grindId: "espresso", quantity: 1 };
  expect(sameVariant).toBe(wholeBean.lineId);
  expect(espresso.lineId).not.toBe(wholeBean.lineId);
  const resolvedWholeBean = resolveCartLine(wholeBean);
  const resolvedEspresso = resolveCartLine(espresso);
  expect(resolvedWholeBean).not.toBeNull();
  expect(resolvedEspresso).not.toBeNull();
  expect(calculateSubtotal([resolvedWholeBean!, resolvedEspresso!])).toBe(8800);
  expect(resolveCartLine({ ...wholeBean, productId: "KIAMBU / WASHED 01", grindId: "espresso", lineId: makeCartLineId({ productId: "KIAMBU / WASHED 01", formatId: "250g", grindId: "espresso" }) })).toBeNull();
  expect(getKenyaDeliveryProgress(3600)).toMatchObject({ remainingKes: 1400, isEligible: false, message: "KES 1,400 away from free Kenya delivery." });
  expect(getKenyaDeliveryProgress(5000)).toMatchObject({ remainingKes: 0, isEligible: true });
  expect(getKenyaDeliveryProgress(5800).remainingKes).toBe(0);
});
