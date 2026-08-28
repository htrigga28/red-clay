import { expect, test, type Page } from "@playwright/test";
import { calculateDemoShipping, generateDemoOrderId } from "@/lib/commerce";

const canaries = [
  "Commerce Canary 260828",
  "canary+commerce-260828@example.invalid",
  "+254700260828",
  "CANARY-ADDRESS-260828",
  "CANARY-CITY-260828",
  "CANARY-COUNTY-260828",
];

test("checkout shipping and demo order helpers use the approved rates", () => {
  expect(calculateDemoShipping({ country: " Kenya ", city: " Nairobi West ", subtotalKes: 3600 })).toEqual({ amountKes: 300, label: "Nairobi delivery", estimate: "1–2 business days" });
  expect(calculateDemoShipping({ country: "Kenya", city: "Nakuru", subtotalKes: 3600 })).toEqual({ amountKes: 500, label: "Rest of Kenya delivery", estimate: "2–4 business days" });
  expect(calculateDemoShipping({ country: "Kenya", city: "Nairobi", subtotalKes: 5000 })).toEqual({ amountKes: 0, label: "Free Kenya delivery", estimate: "1–2 business days" });
  expect(calculateDemoShipping({ country: "Uganda", city: "Kampala", subtotalKes: 1600 })).toEqual({ amountKes: 3500, label: "International demo rate", estimate: "International demo delivery" });
  expect(generateDemoOrderId(new Date("2026-08-28T12:00:00.000Z"), () => 0.42)).toBe("RC-DEMO-20260828-420000");
});

test("an empty Bag has no usable demo order action", async ({ page }) => {
  await page.goto("/checkout");
  await expect(page.getByRole("heading", { name: "Your bag is empty." })).toBeVisible();
  await expect(page.getByRole("button", { name: "Place demo order" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Shop coffees" })).toBeVisible();
});

for (const payment of ["M-Pesa demo", "Card demo"] as const) {
  test(`${payment} completes the local-only demo order`, async ({ page }) => {
    await addLateriteAndOpenCheckout(page);
    const disclosurePrecedesPayment = await page.locator(".checkout-demo-notice").evaluate((notice) => Boolean(notice.compareDocumentPosition(document.getElementById("payment-mpesa")!) & Node.DOCUMENT_POSITION_FOLLOWING));
    expect(disclosurePrecedesPayment).toBe(true);
    await fillCheckout(page, { firstName: "Ada", lastName: "Okafor", email: "ada@example.invalid", phone: "+254700123456", address: "17 Demo Road", city: "Nairobi West", county: "Nairobi County" });
    await expect(page.getByText("Nairobi delivery — KES 300", { exact: true })).toBeVisible();
    await page.getByLabel(payment).check();
    await page.getByRole("button", { name: "Place demo order" }).click();
    await expect(page).toHaveURL(/\/checkout\/complete\?order=RC-DEMO-\d{8}-\d{6}$/);
    await expect(page.getByText("No payment was collected, and no order will be fulfilled.")).toBeVisible();
    await expect(page.getByRole("link", { name: "Bag, 0 items" })).toBeVisible();
  });
}

test("checkout never sends or retains personal-data canaries", async ({ page }) => {
  const requests: Array<{ url: string; method: string; headers: Record<string, string>; body: string | null }> = [];
  const navigationUrls: string[] = [];
  const consoleMessages: string[] = [];
  page.on("request", (request) => requests.push({ url: request.url(), method: request.method(), headers: request.headers(), body: request.postData() }));
  page.on("framenavigated", (frame) => { if (frame === page.mainFrame()) navigationUrls.push(frame.url()); });
  page.on("console", (message) => consoleMessages.push(message.text()));
  await page.addInitScript(`
    window.__checkoutCanary = { beacons: [], analytics: [], paymentRequests: [] };
    navigator.sendBeacon = (url, data) => { window.__checkoutCanary.beacons.push([String(url), String(data)]); return true; };
    if (!window.analytics) window.analytics = { track: (...args) => window.__checkoutCanary.analytics.push(args), page: (...args) => window.__checkoutCanary.analytics.push(args) };
    window.PaymentRequest = function (...args) { window.__checkoutCanary.paymentRequests.push(args); };
  `);

  await addLateriteAndOpenCheckout(page);
  await fillCheckout(page, { firstName: "Commerce Canary 260828", lastName: "Canary", email: "canary+commerce-260828@example.invalid", phone: "+254700260828", address: "CANARY-ADDRESS-260828", city: "CANARY-CITY-260828", county: "CANARY-COUNTY-260828" });
  await page.getByLabel("Card demo").check();
  await page.getByRole("button", { name: "Place demo order" }).click();
  await expect(page).toHaveURL(/\/checkout\/complete\?order=RC-DEMO-\d{8}-\d{6}$/);

  const browserState = await page.evaluate(() => {
    const dumpStorage = (storage: Storage) => Object.keys(storage).map((key) => `${key}:${storage.getItem(key)}`);
    return { href: window.location.href, localStorage: dumpStorage(localStorage), sessionStorage: dumpStorage(sessionStorage), canary: window.__checkoutCanary };
  });
  const captured = JSON.stringify({ requests, navigationUrls, consoleMessages, browserState });
  for (const canary of canaries) expect(captured).not.toContain(canary);
  expect(requests.filter((request) => request.method !== "GET")).toEqual([]);
  expect(browserState.canary.beacons).toEqual([]);
  expect(browserState.canary.analytics).toEqual([]);
  expect(browserState.canary.paymentRequests).toEqual([]);
});

async function addLateriteAndOpenCheckout(page: Page) {
  await page.goto("/shop/laterite");
  await page.getByRole("button", { name: "Add to Bag" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "Checkout" }).click();
  await expect(page).toHaveURL(/\/checkout$/);
}

async function fillCheckout(page: Page, values: { firstName: string; lastName: string; email: string; phone: string; address: string; city: string; county: string }) {
  await page.getByLabel("Email").fill(values.email);
  await page.getByLabel("Phone").fill(values.phone);
  await page.getByLabel("First name").fill(values.firstName);
  await page.getByLabel("Last name").fill(values.lastName);
  await page.getByLabel("Address").fill(values.address);
  await page.getByLabel("City / town").fill(values.city);
  await page.getByLabel("County / region").fill(values.county);
  await page.getByLabel("Country").fill("Kenya");
}
