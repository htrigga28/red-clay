import { expect, test, type Browser, type Page } from "@playwright/test";
import { mkdir, rename, rm } from "node:fs/promises";
import { join } from "node:path";
import { allActiveProducts, getProductById, type ProductId } from "@/content/coffees";

const baseUrl = "http://127.0.0.1:3100";
const evidenceRoot = join(process.cwd(), "recordings", "commerce-canon-integration");
const screenshotRoot = join(evidenceRoot, "screenshots");
const viewports = [
  { width: 320, height: 844 },
  { width: 375, height: 844 },
  { width: 390, height: 844 },
  { width: 430, height: 844 },
  { width: 768, height: 900 },
  { width: 900, height: 900 },
  { width: 1024, height: 900 },
  { width: 1100, height: 900 },
  { width: 1200, height: 900 },
  { width: 1280, height: 900 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
] as const;

const exactFacts: Partial<Record<ProductId, Record<string, string>>> = {
  "KIAMBU / WASHED 01": { Country: "Kenya", Region: "Kiambu County", Process: "Washed", Variety: "SL28 / SL34 / Ruiru 11", Roast: "Light" },
  "KIRINYAGA / WASHED 02": { Country: "Kenya", Region: "Kirinyaga County", Process: "Washed", Variety: "SL28 / SL34 / Batian", Roast: "Light" },
  "KAYANZA / WASHED 01": { Country: "Burundi", Region: "Kayanza Province", Process: "Washed", Variety: "Red Bourbon", Roast: "Light" },
  "KAYANZA / NATURAL 02": { Country: "Burundi", Region: "Kayanza Province", Process: "Natural", Variety: "Red Bourbon", Roast: "Light" },
  "SIDAMA / WASHED 01": { Country: "Ethiopia", Region: "Sidama", Process: "Washed", Variety: "Ethiopian landrace selections", Roast: "Light" },
  "GUJI / NATURAL 02": { Country: "Ethiopia", Region: "Guji Zone, Oromia", Process: "Natural", Variety: "Ethiopian landrace selections", Roast: "Light" },
  AFTERLIGHT: { Country: "Ethiopia", Process: "Water-process decaf", Roast: "Medium-light" },
};

for (const viewport of viewports) {
  test(`every purchasable PDP has no horizontal overflow at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize(viewport);

    for (const product of allActiveProducts) {
      await page.goto(`/shop/${product.slug}`, { waitUntil: "networkidle" });
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
      expect(await page.locator("main").evaluate((element) => element.getBoundingClientRect().right <= window.innerWidth)).toBe(true);
    }
  });
}

test("AFTERLIGHT is one line at normal desktop widths and has no orphan character at smaller widths", async ({ page }) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/shop/afterlight", { waitUntil: "networkidle" });
    const lines = await page.locator("#pdp-title").evaluate((heading) => {
      const text = heading.textContent ?? "";
      const groups = new Map<number, string>();
      for (let index = 0; index < text.length; index += 1) {
        const range = document.createRange();
        range.setStart(heading.firstChild!, index);
        range.setEnd(heading.firstChild!, index + 1);
        const rect = range.getBoundingClientRect();
        const key = Math.round(rect.top);
        groups.set(key, `${groups.get(key) ?? ""}${text[index]}`);
      }
      return [...groups.values()];
    });

    expect(lines.every((line) => line.length > 1), `${viewport.width}px left a one-character AFTERLIGHT line`).toBe(true);
    if (viewport.width >= 1200) expect(lines).toHaveLength(1);
  }
});

test("current-harvest, Afterlight, Kiln Cup, and Beyond Heirloom facts use the approved public wording", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  for (const [id, facts] of Object.entries(exactFacts) as Array<[ProductId, Record<string, string>]>) {
    const product = getProductById(id)!;
    await page.goto(`/shop/${product.slug}`, { waitUntil: "networkidle" });
    for (const [term, value] of Object.entries(facts)) {
      await expect(page.locator(".pdp-facts").getByText(term, { exact: true })).toBeVisible();
      await expect(page.locator(".pdp-facts").getByText(value, { exact: true })).toBeVisible();
    }
  }

  await page.goto("/shop/the-kiln-cup", { waitUntil: "networkidle" });
  for (const value of ["KES 5,900", "High-fired iron-rich stoneware", "Lead-free and food-safe", "300ml comfortable fill / 340ml to brim", "Approx. 82mm rim diameter × 94mm high", "Approx. 360g", "Dishwasher safe. Microwave safe.", "No physical prototype or manufacturing test has been completed."]) {
    await expect(page.getByText(value, { exact: false })).toBeVisible();
  }

  await page.goto("/journal/beyond-heirloom", { waitUntil: "networkidle" });
  await expect(page.getByText("“Heirloom” is not a single coffee variety.", { exact: true })).toBeVisible();
  await expect(page.getByText("This is a product comparison, not evidence that Sidama must be floral or Guji must be fruit-driven. Reverse examples exist, and new harvests will continue to resist a neat two-column rule.", { exact: true })).toBeVisible();
  await expect(page.getByText("A coffee worker examining beans during sorting near Hawassa, Ethiopia.", { exact: true })).toBeVisible();
});

test("captures the required desktop commerce walkthrough and screenshots", async ({ browser }) => {
  const rawPath = join(evidenceRoot, "desktop-1366x768.raw.webm");
  await withRecordedPage(browser, { width: 1366, height: 768 }, rawPath, async (page) => {
    await mkdir(join(screenshotRoot, "1366"), { recursive: true });

    await page.goto(`${baseUrl}/shop`, { waitUntil: "networkidle" });
    await pause(page);
    await page.goto(`${baseUrl}/shop/sidama-washed-01`, { waitUntil: "networkidle" });
    expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
    await page.screenshot({ path: join(screenshotRoot, "1366", "sidama-opening.png") });
    await pause(page);
    await page.goto(`${baseUrl}/shop/afterlight`, { waitUntil: "networkidle" });
    await expect(page.locator("#pdp-title")).toBeVisible();
    await page.screenshot({ path: join(screenshotRoot, "1366", "afterlight-opening.png") });
    await pause(page);

    await addToBag(page, "laterite");
    await expect(page.getByRole("dialog").getByRole("link", { name: "Checkout" })).toBeVisible();
    await expect(page.getByRole("dialog").getByRole("link", { name: "Checkout" })).toBeEnabled();
    await pause(page);
    await page.screenshot({ path: join(screenshotRoot, "1366", "bag-drawer-1-item.png") });
    await closeDrawer(page);
    await addToBag(page, "laterite", "1kg", "Espresso Grind");
    await closeDrawer(page);
    await addToBag(page, "kiambu-washed-01", undefined, "Filter Grind");
    await closeDrawer(page);
    await addToBag(page, "the-kiln-cup");
    await expect(page.getByRole("dialog").locator(".cart-line")).toHaveCount(4);
    await pause(page);
    await page.screenshot({ path: join(screenshotRoot, "1366", "bag-drawer-4-items.png") });

    await page.getByRole("dialog").getByRole("link", { name: "View bag" }).click();
    await expect(page).toHaveURL(/\/bag$/);
    await page.getByRole("button", { name: "Increase LATERITE quantity" }).first().click();
    await page.getByRole("button", { name: "Remove" }).nth(1).click();
    expect(await page.locator("html").evaluate((element) => element.scrollWidth === element.clientWidth)).toBe(true);
    await page.screenshot({ path: join(screenshotRoot, "1366", "bag-review.png") });
    await pause(page);
    await page.getByRole("button", { name: "Remove" }).nth(2).click();
    await page.getByRole("button", { name: "Decrease LATERITE quantity" }).click();
    await expect(page.getByText("KES 1,450 away from free Kenya delivery.", { exact: true })).toBeVisible();

    await page.getByRole("link", { name: "Checkout" }).click();
    await fillCheckout(page);
    await page.getByLabel("M-Pesa demo").check();
    await pause(page);
    await page.getByLabel("Card demo").check();
    await page.screenshot({ path: join(screenshotRoot, "1366", "checkout-review.png") });
    await pause(page);
    await page.getByRole("button", { name: "Place demo order" }).click();
    await expect(page).toHaveURL(/\/checkout\/complete\?order=RC-DEMO-/);
    await pause(page);

    await page.goto(`${baseUrl}/shop/the-kiln-cup`, { waitUntil: "networkidle" });
    await page.locator(".kiln-cup-scale").scrollIntoViewIfNeeded();
    await expect(page.getByText("No physical prototype or manufacturing test has been completed.", { exact: false })).toBeVisible();
    await pause(page);
  });
});

test("captures the required mobile commerce walkthrough and screenshots", async ({ browser }) => {
  const rawPath = join(evidenceRoot, "mobile-390x844.raw.webm");
  await withRecordedPage(browser, { width: 390, height: 844 }, rawPath, async (page) => {
    await mkdir(join(screenshotRoot, "390"), { recursive: true });

    await page.goto(`${baseUrl}/shop/laterite`, { waitUntil: "networkidle" });
    await page.getByLabel("1kg").check();
    await page.getByLabel("Espresso Grind").check();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator(".pdp-mobile-buy")).toBeVisible();
    await page.locator(".pdp-mobile-buy").getByRole("button", { name: "Add to Bag" }).click();
    await closeDrawer(page);

    await addToBag(page, "kiambu-washed-01", undefined, "Filter Grind");
    await expect(page.getByRole("dialog").locator(".cart-line")).toHaveCount(2);
    await pause(page);
    await page.screenshot({ path: join(screenshotRoot, "390", "bag-drawer.png") });
    await page.getByRole("dialog").getByRole("link", { name: "View bag" }).click();
    await expect(page).toHaveURL(/\/bag$/);
    await page.screenshot({ path: join(screenshotRoot, "390", "bag-review.png") });
    await pause(page);

    await page.getByRole("link", { name: "Checkout" }).click();
    await fillCheckout(page);
    await page.getByLabel("Card demo").check();
    await page.screenshot({ path: join(screenshotRoot, "390", "checkout-delivery-payment.png") });
    await pause(page);
    await page.getByRole("button", { name: "Place demo order" }).click();
    await expect(page).toHaveURL(/\/checkout\/complete\?order=RC-DEMO-/);
    await pause(page);
  });
});

test("a valid Bag drawer has a visible Checkout link and completes the demo order", async ({ page }) => {
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.goto("/shop/laterite", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Add to Bag" }).click();
  const checkout = page.getByRole("dialog").getByRole("link", { name: "Checkout" });
  await expect(checkout).toBeVisible();
  await expect(checkout).toBeEnabled();
  await checkout.click();
  await expect(page).toHaveURL(/\/checkout$/);
  await fillCheckout(page);
  await page.getByLabel("Card demo").check();
  await page.getByRole("button", { name: "Place demo order" }).click();
  await expect(page).toHaveURL(/\/checkout\/complete\?order=RC-DEMO-/);
  await expect(page.getByRole("heading", { name: "Your demo order was received." })).toBeVisible();
});

test("a settled one-item Bag drawer is opaque and does not reserve empty drawer space", async ({ page }) => {
  for (const viewport of [{ width: 390, height: 844 }, { width: 488, height: 496 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/shop/laterite", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Add to Bag" }).click();
    await pause(page);
    const drawer = page.getByRole("dialog");
    const state = await drawer.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return { bottom: rect.bottom, height: rect.height, opacity: style.opacity, backgroundColor: style.backgroundColor };
    });
    expect(state.opacity).toBe("1");
    expect(state.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(state.bottom).toBeLessThanOrEqual(viewport.height);
    if (viewport.height === 844) expect(state.height).toBeLessThan(viewport.height);
    await expect(drawer.getByRole("link", { name: "Checkout" })).toBeVisible();
  }
});

async function withRecordedPage(browser: Browser, viewport: { width: number; height: number }, rawPath: string, flow: (page: Page) => Promise<void>) {
  await mkdir(evidenceRoot, { recursive: true });
  await rm(rawPath, { force: true });
  const context = await browser.newContext({ viewport, recordVideo: { dir: evidenceRoot, size: viewport } });
  const page = await context.newPage();
  const video = page.video();
  try {
    await flow(page);
  } finally {
    await context.close();
  }
  await rename(await video!.path(), rawPath);
}

async function addToBag(page: Page, slug: string, format?: string, grind?: "Filter Grind" | "Espresso Grind") {
  if (!page.url().endsWith(`/shop/${slug}`)) {
    if (!page.url().endsWith("/shop")) {
      await page.getByRole("link", { name: /Back to Shop/ }).click();
      await expect(page).toHaveURL(/\/shop$/);
    }
    await page.locator(`a[href="/shop/${slug}"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`/shop/${slug}$`));
  }
  if (format) await page.getByLabel(format).check();
  if (grind) await page.getByLabel(grind).check();
  await page.getByRole("button", { name: "Add to Bag" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
}

async function closeDrawer(page: Page) {
  await page.getByRole("dialog").getByRole("button", { name: "Close" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
}

async function fillCheckout(page: Page) {
  await page.getByLabel("Email").fill("evidence@example.invalid");
  await page.getByLabel("Phone").fill("+254700123456");
  await page.getByLabel("First name").fill("Evidence");
  await page.getByLabel("Last name").fill("Check");
  await page.getByLabel("Address").fill("17 Demo Road");
  await page.getByLabel("City / town").fill("Nairobi West");
  await page.getByLabel("County / region").fill("Nairobi County");
  await page.getByLabel("Country").fill("Kenya");
  await expect(page.getByText(/(Nairobi|Free Kenya) delivery — KES (300|0)/, { exact: false })).toBeVisible();
}

function pause(page: Page) {
  return page.waitForTimeout(700);
}
