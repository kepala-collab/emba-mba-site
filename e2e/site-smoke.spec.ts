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
  await button.waitFor({ state: "visible", timeout: 2_500 }).catch(() => undefined);
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
  for (const route of ["/", "/apply", "/fees", "/intakes", "/zh", "/zh/how-it-works", "/zh/apply"]) {
    const response = await goto(page, route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
  }
  expect(failures).toEqual([]);
});

test("desktop hero exposes its primary action in the first viewport", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await goto(page, "/");
  const box = await page.locator(".working-hero-actions").getByRole("link", { name: /Request the programme guide/i }).boundingBox();
  expect(box).not.toBeNull();
  expect((box?.y || 9999) + (box?.height || 0)).toBeLessThanOrEqual(800);
  const form = await page.locator(".working-hero-form form[data-form-id]").boundingBox();
  expect(form).not.toBeNull();
  expect(form?.y || 9999).toBeLessThan(800);
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
  const routes = ["/", "/executive-mba", "/chartered-manager-malaysia", "/fees", "/resources/advancement-brief", "/zh", "/zh/executive-mba", "/zh/how-it-works", "/zh/chartered-manager-malaysia", "/zh/fees"];
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

test("fee calculation remains contained across desktop breakpoints", async ({ page }) => {
  for (const width of [1024, 1223, 1280, 1440]) {
    await page.setViewportSize({ width, height: 850 });
    await goto(page, "/fees");
    const card = page.locator(".fee-equation-card");
    const total = card.locator(".fee-equation-total dd");
    await expect(total).toBeVisible();

    const cardBox = await card.boundingBox();
    const totalBox = await total.boundingBox();
    expect(cardBox, `${width}px fee card`).not.toBeNull();
    expect(totalBox, `${width}px fee total`).not.toBeNull();
    expect((totalBox?.x || 0) + (totalBox?.width || 0), `${width}px fee total right edge`)
      .toBeLessThanOrEqual((cardBox?.x || 0) + (cardBox?.width || 0) - 1);

    const contained = await total.evaluate((element) => element.scrollWidth <= element.clientWidth + 1);
    expect(contained, `${width}px fee total text`).toBe(true);
  }
});

test("advancement brief keeps chapter and fact-card alignment across breakpoints", async ({ page }) => {
  for (const width of [390, 768, 1280]) {
    await page.setViewportSize({ width, height: width < 1000 ? 844 : 900 });
    await goto(page, "/resources/advancement-brief");
    const investment = page.locator(".brief-chapter").filter({ hasText: "06 / Investment" });
    const facts = investment.locator(".brief-facts");
    await expect(facts).toBeVisible();

    const columns = await facts.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
    expect(columns, `${width}px fact-card columns`).toBe(width <= 640 ? 1 : 3);

    const valuesFit = await facts.locator("strong").evaluateAll((values) =>
      values.every((value) => value.scrollWidth <= value.clientWidth + 1 && value.getClientRects().length === 1),
    );
    expect(valuesFit, `${width}px fact-card values`).toBe(true);

    if (width === 1280) {
      const label = await investment.locator(":scope > span").boundingBox();
      const heading = await investment.locator("h2").boundingBox();
      expect(Math.abs((label?.y || 0) - (heading?.y || 0))).toBeLessThanOrEqual(10);
    }
  }
});

test("CMI progression chart separates qualification levels from the programme pathway", async ({ page }) => {
  for (const [route, boundary] of [
    ["/chartered-manager-malaysia", "Professional development; not an academic degree."],
    ["/zh/chartered-manager-malaysia", "专业发展课程，不是学术学位。"],
  ] as const) {
    for (const width of [320, 768, 1280]) {
      await page.setViewportSize({ width, height: width < 1000 ? 844 : 800 });
      await goto(page, route);
      const chart = page.locator(".cmi-progression-chart");
      await expect(chart).toBeVisible();
      await expect(chart.locator(".cmi-level-list > li")).toHaveCount(6);
      await expect(chart.locator(".cmi-programme-list > li")).toHaveCount(4);
      await expect(chart.getByText(boundary, { exact: true })).toBeVisible();
      const box = await chart.boundingBox();
      expect((box?.width || width + 1), `${route} chart at ${width}px`).toBeLessThanOrEqual(width);
    }
  }
});

test("mobile enquiry sections stack copy above a full-width form", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/executive-mba", "/fees"]) {
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

  await goto(page, "/");
  const heroGrid = page.locator(".working-hero-grid");
  const heroForm = heroGrid.locator("form[data-form-id]");
  await expect(heroForm).toBeVisible();
  await expect(heroForm.getByRole("heading", { name: "Send me the 2026 programme guide." })).toBeVisible();
  await expect(heroForm.getByRole("textbox", { name: "Email" })).toBeVisible();
  await expect(heroForm.getByLabel("Phone / WhatsApp")).toHaveCount(0);
  const columns = await heroGrid.evaluate((element) => getComputedStyle(element).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(1);
  await expect(page.locator(".home-video-section .programme-film")).toBeVisible();
  await expect(page.locator(".home-video-section form[data-form-id]")).toHaveCount(0);
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
  const dialog = page.getByRole("dialog", { name: /What happens during the three-month programme/i });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Three months. One focused programme.")).toBeVisible();
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
  await expect(page.getByRole("heading", { name: "Here is what to evaluate next." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Your selected priorities" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Keep the result and review the full guide." })).toBeVisible();
  const result = await page.locator(".diagnostic-result").boundingBox();
  expect(result).not.toBeNull();
  expect(result?.y || 9999).toBeLessThan(180);
});

test("priority pages have no automated accessibility violations after hydration", async ({ page }) => {
  test.setTimeout(90_000);
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    for (const route of ["/", "/executive-mba", "/chartered-manager-malaysia", "/fees", "/apply", "/zh", "/zh/executive-mba", "/zh/chartered-manager-malaysia", "/zh/fees", "/zh/apply"]) {
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
  const form = page.locator('form[data-form-id]').filter({ has: page.locator('input[name="phone"]') });
  await expect(form.locator("[data-widget-id]")).toBeVisible();
  await form.locator('input[name="name"]').fill("Test Participant");
  await form.locator('input[name="phone"]').fill("+60123456789");
  await form.locator('input[name="email"]').fill("test@example.com");
  await form.getByRole("checkbox").check();
  await form.getByRole("button", { name: /Send my programme request/i }).click();
  await expect(page.getByText("Request received")).toBeVisible();
  await expect(page.getByText("TEST-LEAD")).toBeVisible();
});

test("paid campaign routes use focused chrome with one primary action", async ({ page }) => {
  for (const route of ["/lp/google", "/lp/meta", "/zh/lp/google", "/zh/lp/meta"]) {
    await goto(page, route);
    await expect(page.locator(".campaign-navbar")).toBeVisible();
    await expect(page.locator(".desktop-nav,.mobile-menu-toggle,.foot,.programme-assistant-launcher")).toHaveCount(0);
    await expect(page.locator(".campaign-footer")).toBeVisible();
    await expect(page.locator(".campaign-nav-actions .navcta")).toHaveCount(1);
    await expect(page.locator(".wa-float")).toHaveAttribute("aria-hidden", "true");
    await expect(page.locator('img[src*="cmi-logo-official.svg"]').first()).toBeVisible();
    await expect(page.locator('img[src*="hrdcorp-claimable-official.png"]').first()).toBeVisible();
    const markWidths = await page.locator(".programme-marks").first().locator("img").evaluateAll((images) => images.map((image) => image.getBoundingClientRect().width));
    expect(markWidths.every((width) => width >= 72), `${route} official mark size`).toBe(true);
  }
});

test("mobile campaign pages preserve the value proposition before the form", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ["/lp/google", "/zh/lp/google"]) {
    await goto(page, route);
    const heading = await page.locator("main h1").boundingBox();
    const form = await page.locator("#apply form[data-form-id]").boundingBox();
    expect(heading).not.toBeNull();
    expect(form).not.toBeNull();
    expect(heading?.y || 9999, route).toBeLessThan(form?.y || 0);
    const dimensions = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(dimensions.scroll, route).toBeLessThanOrEqual(dimensions.client);
  }
});

test("campaign lead capture asks for one contact method and delivers the programme guide", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/lead", async (route) => {
    const request = route.request().postDataJSON() as Record<string, unknown>;
    expect(request.turnstile_token).toBe("lead-test-token");
    expect(request.company).toBeUndefined();
    expect(request.preferred_contact_window).toBe("flexible");
    expect(request.contact_preference).toBe("details_first");
    expect(request.email).toBe("campaign@example.com");
    expect(request.phone).toBeUndefined();
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ lead_reference: "CAMPAIGN-LEAD" }),
    });
  });
  await goto(page, "/lp/google");
  const form = page.locator("#apply form[data-form-id]");
  await expect(form.locator(".intent-option:visible")).toHaveCount(0);
  await expect(form.getByLabel(/Preferred 2026 cohort/i)).toHaveCount(0);
  await expect(form.getByLabel("Company (optional)")).toHaveCount(0);
  await expect(form.getByLabel("Preferred contact time")).toHaveCount(0);
  await expect(form.getByLabel("How would you like to continue?")).toHaveCount(0);
  await form.getByLabel("Full name").fill("Campaign Participant");
  await form.getByRole("textbox", { name: "Email" }).fill("campaign@example.com");
  await form.getByRole("checkbox").check();
  await form.getByRole("button", { name: /Send my guide/i }).click();
  await expect(page.getByText("CAMPAIGN-LEAD")).toBeVisible();
  await expect(page.getByRole("link", { name: /Open the 2026 programme guide/i })).toHaveAttribute("href", "/resources/advancement-brief");
});

test("campaign routes have no automated accessibility violations", async ({ page }) => {
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    for (const route of ["/lp/google", "/lp/meta", "/zh/lp/google", "/zh/lp/meta"]) {
      await goto(page, route);
      await page.waitForTimeout(500);
      const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
      expect(results.violations, `${route} at ${width}px: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
    }
  }
});

test("home hero renders and draws the animated node network", async ({ page }) => {
  await goto(page, "/");
  const canvas = page.locator("canvas.node-canvas");
  await expect(canvas).toHaveCount(1);
  await page.waitForTimeout(600);
  const info = await canvas.evaluate((element) => {
    const canvasElement = element as HTMLCanvasElement;
    let drawn = 0;
    try {
      const data = canvasElement.getContext("2d")!.getImageData(0, 0, canvasElement.width, canvasElement.height).data;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] > 8) { drawn += 1; if (drawn > 40) break; }
      }
    } catch { /* canvas unavailable */ }
    return { width: canvasElement.width, drawn };
  });
  expect(info.width, "canvas backing store should size to the hero, not the 300px default").toBeGreaterThan(320);
  expect(info.drawn, "node network should paint visible pixels").toBeGreaterThan(20);
});

test("core pages carry the geometric hero backdrop in both languages", async ({ page }) => {
  for (const route of ["/how-it-works", "/curriculum", "/fees", "/chartered-manager-malaysia", "/zh/how-it-works", "/zh/curriculum", "/zh/fees", "/zh/chartered-manager-malaysia"]) {
    await goto(page, route);
    expect(await page.locator(".geo-section").count(), route).toBeGreaterThan(0);
  }
});

test("partnership seal appears on the About page and in the footer", async ({ page }) => {
  await goto(page, "/about");
  await expect(page.locator(".partnership-seal img")).toBeVisible();
  await goto(page, "/");
  expect(await page.locator("footer.site .foot-seal").count()).toBeGreaterThan(0);
});
