import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function captureConsoleFailures(page: Page) {
  const failures: string[] = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) failures.push(`${message.type()}: ${message.text()}`);
  });
  page.on("pageerror", (error) => failures.push(`pageerror: ${error.message}`));
  return failures;
}

async function goto(page: Page, route: string) {
  return page.goto(route, { waitUntil: "domcontentloaded" });
}

async function dismissConsent(page: Page) {
  const button = page.getByRole("button", { name: /Essential only|仅必要功能/i });
  await page.waitForTimeout(400);
  if (await button.isVisible()) {
    await button.click();
    await expect(button).toBeHidden();
  }
}

async function mockTurnstile(page: Page) {
  await page.route("https://challenges.cloudflare.com/turnstile/v0/api.js**", async (route) => {
    await route.fulfill({
      contentType: "application/javascript",
      body: `(() => {
        const widgets = new Map(); let sequence = 0;
        window.turnstile = {
          render: (container, options) => {
            const id = 'widget-' + (++sequence); widgets.set(id, options); container.dataset.widgetId = id;
            if (options.execution !== 'execute') setTimeout(() => options.callback('lead-test-token'), 0);
            return id;
          },
          execute: (id) => { const options = widgets.get(id); setTimeout(() => options && options.callback('chat-test-token'), 0); },
          reset: () => {}, remove: (id) => widgets.delete(id)
        };
      })();`,
    });
  });
}

test("core routes render without console failures", async ({ page }) => {
  const failures = await captureConsoleFailures(page);
  for (const route of ["/", "/apply", "/fees", "/intakes", "/zh", "/zh/apply"]) {
    const response = await goto(page, route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
  }
  expect(failures).toEqual([]);
});

test("desktop hero exposes its primary action in the first viewport", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await goto(page, "/");
  const box = await page.getByRole("link", { name: /See how the programme works/i }).boundingBox();
  expect(box).not.toBeNull();
  expect((box?.y || 9999) + (box?.height || 0)).toBeLessThanOrEqual(800);
  await expect(page.getByRole("button", { name: /Ask the programme assistant/i })).toBeHidden();
});

test("narrow layouts retain the product name and never overflow", async ({ page }) => {
  for (const width of [320, 375, 768]) {
    await page.setViewportSize({ width, height: 812 });
    await goto(page, "/");
    await expect(page.locator(".brand-product")).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scroll, `${width}px viewport`).toBeLessThanOrEqual(dimensions.client);
  }
});

test("priority content pages reflow without horizontal overflow", async ({ page }) => {
  const routes = ["/", "/executive-mba", "/fees", "/zh", "/zh/executive-mba", "/zh/fees"];
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: width < 1000 ? 844 : 800 });
    for (const route of routes) {
      await goto(page, route);
      const dimensions = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(dimensions.scroll, `${route} at ${width}px`).toBeLessThanOrEqual(dimensions.client);
      await expect(page.locator("main h1")).toHaveCount(1);
    }
  }
});

test("mobile enquiry sections stack copy above a full-width form", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/", "/executive-mba", "/fees"]) {
    await goto(page, route);
    const grid = page.locator(".cta-grid");
    const form = grid.locator("form[data-form-id]");
    await expect(grid).toBeVisible();
    await expect(form).toBeVisible();
    const columns = await grid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    expect(columns, route).toBe(1);
    const gridBox = await grid.boundingBox();
    const formBox = await form.boundingBox();
    expect(Math.abs((gridBox?.x || 0) - (formBox?.x || 0)), route).toBeLessThanOrEqual(24);
  }
});

test("mobile Apply presents the form immediately after its introduction", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await goto(page, "/apply");
  const box = await page.locator("form[data-form-id]").boundingBox();
  expect(box).not.toBeNull();
  expect(box?.y || 9999).toBeLessThan(900);
});

test("programme introduction falls back to a complete text overview", async ({ page }) => {
  await goto(page, "/");
  await page.getByRole("button", { name: "Read", exact: true }).first().click();
  const dialog = page.getByRole("dialog", { name: /What happens during the six-month programme/i });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Six months. Two separate stages.")).toBeVisible();
  await expect(dialog.getByText(/approved video can be added/i)).toHaveCount(0);
  await expect(dialog.locator(".film-placeholder img")).toHaveCount(0);
});

test("mobile programme fit check returns to its factual result", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await goto(page, "/diagnostic");
  await dismissConsent(page);
  for (let question = 0; question < 4; question += 1) {
    await page.locator(".diagnostic-option").first().click();
    await page.getByRole("button", { name: question === 3 ? /See a starting point/i : /Continue/i }).click();
  }
  await expect(page.getByRole("heading", { name: "Use your answers to check programme fit." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Your selected priorities" })).toBeVisible();
  const result = await page.locator(".diagnostic-result").boundingBox();
  expect(result).not.toBeNull();
  expect(result?.y || 9999).toBeLessThan(180);
});

test("priority pages have no automated accessibility violations after hydration", async ({ page }) => {
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    for (const route of ["/", "/executive-mba", "/fees", "/apply", "/zh", "/zh/executive-mba", "/zh/fees", "/zh/apply"]) {
      await goto(page, route);
      await page.waitForTimeout(700);
      const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
      expect(results.violations, `${route} at ${width}px: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
    }
  }
});

test("consent choice stays compact and visibly identifies its privacy link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await goto(page, "/");
  await page.waitForTimeout(700);
  const banner = page.locator(".consent-banner");
  await expect(banner).toBeVisible();
  const box = await banner.boundingBox();
  expect(box?.height || 9999).toBeLessThanOrEqual(160);
  const decoration = await banner.getByRole("link", { name: "Privacy policy" }).evaluate((link) => getComputedStyle(link).textDecorationLine);
  expect(decoration).toContain("underline");
});

test("lead contact steps have no automated accessibility violations", async ({ page }) => {
  await mockTurnstile(page);
  for (const route of ["/apply", "/zh/apply"]) {
    await goto(page, route);
    await dismissConsent(page);
    await page.getByRole("button", { name: route.startsWith("/zh") ? /继续填写联系方式/i : /Continue to contact details/i }).click();
    await page.waitForTimeout(300);
    const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
    expect(results.violations, `${route}: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
  }
});

test("Chinese Apply keeps heading levels sequential", async ({ page }) => {
  await goto(page, "/zh/apply");
  const levels = await page.locator("h1,h2,h3,h4,h5,h6").evaluateAll((headings) =>
    headings.map((heading) => Number(heading.tagName.slice(1))),
  );
  for (let index = 1; index < levels.length; index += 1) {
    expect(levels[index] - levels[index - 1]).toBeLessThanOrEqual(1);
  }
});

test("assistant explicitly executes Turnstile and returns an answer", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/chat", async (route) => {
    const request = route.request().postDataJSON() as { turnstile_token?: string };
    expect(request.turnstile_token).toBe("chat-test-token");
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ answer: "The test answer is available." }),
    });
  });
  await goto(page, "/intakes");
  await dismissConsent(page);
  await page.getByRole("button", { name: /Ask the programme assistant/i }).click();
  await page.getByRole("button", { name: /What does the programme cost/i }).click();
  await expect(page.getByText("The test answer is available.")).toBeVisible();
});

test("lead form keeps the existing submit flow behind a Turnstile token", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/lead", async (route) => {
    const request = route.request().postDataJSON() as { turnstile_token?: string };
    expect(request.turnstile_token).toBe("lead-test-token");
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ lead_reference: "TEST-LEAD" }),
    });
  });
  await goto(page, "/apply");
  await page.getByRole("button", { name: /Continue to contact details/i }).click();
  await page.getByLabel("Full name").fill("Test Participant");
  await page.getByLabel("Phone / WhatsApp").fill("+60123456789");
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: /Request a conversation/i }).click();
  await expect(page.getByText("Request received")).toBeVisible();
  await expect(page.getByText("TEST-LEAD")).toBeVisible();
});
