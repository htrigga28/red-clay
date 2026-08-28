import { expect, test } from "@playwright/test";
import { CartLineItem } from "@/components/commerce/CartLineItem";
import { makeCartLineId, type CartLine } from "@/lib/commerce";

async function closeDrawer(page: import("@playwright/test").Page) {
  await page.getByRole("dialog").getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
}

test("the shared line makes unavailable selections explicit and removable", () => {
  const invalidLine: CartLine = {
    lineId: makeCartLineId({ productId: "KIAMBU / WASHED 01", formatId: "250g", grindId: "espresso" }),
    productId: "KIAMBU / WASHED 01",
    formatId: "250g",
    grindId: "espresso",
    quantity: 1,
  };
  const markup = JSON.stringify(CartLineItem({
    item: invalidLine,
    density: "compact",
    increment: () => undefined,
    decrement: () => undefined,
    remove: () => undefined,
  }));

  expect(markup).toContain("Unavailable product option");
  expect(markup).toContain("Checkout is blocked until you remove it.");
  expect(markup).toContain("Remove");
});

test("drawer and review page retain four distinct Bag lines at desktop width", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/shop/laterite");

  await page.getByRole("button", { name: "Add to Bag" }).click();
  const drawer = page.getByRole("dialog");
  await expect(drawer).toBeVisible();
  await expect(drawer.locator(".placeholder-label")).toHaveCount(0);
  await expect(drawer.getByText("House Coffee", { exact: true })).toBeVisible();
  await expect(drawer.getByText("KES 1,600 each", { exact: true })).toBeVisible();
  await drawer.getByRole("button", { name: "Increase LATERITE quantity" }).click();
  await expect(drawer.getByText("KES 3,200", { exact: true })).toBeVisible();
  await drawer.getByRole("button", { name: "Decrease LATERITE quantity" }).click();
  await expect(drawer.getByText("KES 1,600", { exact: true })).toBeVisible();
  await closeDrawer(page);
  await expect(page.getByRole("button", { name: "Add to Bag" })).toBeFocused();

  await page.getByLabel("1kg").check();
  await page.getByLabel("Espresso Grind").check();
  await page.getByRole("button", { name: "Add to Bag" }).click();
  await closeDrawer(page);

  await page.getByRole("link", { name: /Back to Shop/ }).click();
  await page.locator('a[href="/shop/kiambu-washed-01"]').first().click();
  await page.getByLabel("Filter Grind").check();
  await page.getByRole("button", { name: "Add to Bag" }).click();
  await closeDrawer(page);

  await page.getByRole("link", { name: /Back to Shop/ }).click();
  await page.locator('a[href="/shop/the-kiln-cup"]').first().click();
  await page.locator("button.button--dark").filter({ hasText: "Add to Bag" }).first().click();
  await expect(drawer.locator(".cart-line")).toHaveCount(4);
  expect(await drawer.locator(".bag-drawer-items").evaluate((element) => element.scrollHeight > element.clientHeight)).toBe(true);

  await drawer.getByRole("link", { name: "View bag" }).click();
  await expect(page).toHaveURL(/\/bag$/);
  await expect(page.locator(".bag-review-grid")).toBeVisible();
  expect(await page.locator(".bag-review-grid").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)).toBe(2);
  await expect(page.locator(".cart-line")).toHaveCount(4);
  await page.getByRole("button", { name: "Increase LATERITE quantity" }).first().click();
  await expect(page.getByText("KES 16,650", { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Remove" }).nth(1).click();
  await expect(page.locator(".cart-line")).toHaveCount(3);
  expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
});

test("Bag controls fit at 320px and preserve drawer keyboard close", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await page.goto("/shop/laterite");
  await page.getByRole("button", { name: "Add to Bag" }).click();

  const drawer = page.getByRole("dialog");
  const remove = drawer.getByRole("button", { name: "Remove" });
  await expect(drawer.getByRole("button", { name: "Close" })).toBeFocused();
  const thumbnailWidth = await drawer.locator(".cart-line-media").evaluate((element) => element.clientWidth);
  expect(thumbnailWidth).toBeGreaterThanOrEqual(64);
  expect(thumbnailWidth).toBeLessThanOrEqual(120);
  expect((await remove.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("body")).not.toHaveClass(/bag-open/);

  await page.getByRole("link", { name: "Bag, 1 items" }).click();
  await drawer.getByRole("link", { name: "View bag" }).click();
  await expect(page).toHaveURL(/\/bag$/);
  expect(await page.locator(".bag-review-grid").evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length)).toBe(1);
  expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
});
