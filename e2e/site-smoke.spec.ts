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
        window.__turnstileResetCount = 0;
        window.turnstile = {
          render: (container, options) => {
            const id = 'widget-' + (++sequence); widgets.set(id, options); container.dataset.widgetId = id;
            if (options.execution !== 'execute') setTimeout(() => options.callback('lead-test-token'), 0);
            return id;
          },
          execute: (id) => { const options = widgets.get(id); setTimeout(() => options && options.callback('chat-test-token'), 0); },
          reset: () => { window.__turnstileResetCount += 1; }, remove: (id) => widgets.delete(id)
        };
      })();`,
    });
  });
}

test("core routes render without console failures", async ({ page }) => {
  await mockTurnstile(page);
  const failures = await captureConsoleFailures(page);
  for (const route of ["/home", "/apply", "/fees", "/intakes", "/insights/executive-education-vs-executive-mba", "/zh", "/zh/how-it-works", "/zh/apply"]) {
    const response = await goto(page, route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
  }
  expect(failures).toEqual([]);
});

test("the legacy root permanently resolves to the named Home route", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/home$/);
  await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
});

test("Malay locale preserves responsive structure, metadata and accessibility", async ({ page }) => {
  await mockTurnstile(page);
  const routes = [
    "/ms",
    "/ms/executive-mba",
    "/ms/how-it-works",
    "/ms/fees",
    "/ms/apply",
    "/ms/asian-business-consulting",
    "/ms/resources/advancement-brief",
  ];
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: width < 1000 ? 844 : 800 });
    for (const route of routes) {
      const response = await goto(page, route);
      expect(response?.status(), `${route} at ${width}px`).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", "ms-MY");
      await expect(page.locator("main h1")).toHaveCount(1);
      const dimensions = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      expect(dimensions.scroll, `${route} at ${width}px`).toBeLessThanOrEqual(dimensions.client);
    }
  }

  await goto(page, "/ms");
  for (const hreflang of ["en", "zh-Hans", "ms", "x-default"]) {
    await expect(page.locator(`link[rel="alternate"][hreflang="${hreflang}"]`)).toHaveCount(1);
  }
  const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
  expect(results.violations.map((item) => item.id), "Malay homepage accessibility").toEqual([]);
});

test("desktop header provides four exclusive navigation dropdowns", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await goto(page, "/home");
  const dropdowns = page.locator(".desktop-nav .nav-dropdown");
  await expect(dropdowns).toHaveCount(4);
  const homeLink = page.locator(".desktop-nav").getByRole("link", { name: "Home", exact: true });
  await expect(homeLink).toHaveAttribute("href", "/home");
  const brandBox = await page.locator(".navbar .brand-title").boundingBox();
  const homeBox = await homeLink.boundingBox();
  expect((homeBox?.x || 0) - ((brandBox?.x || 0) + (brandBox?.width || 0))).toBeGreaterThanOrEqual(28);

  const programme = dropdowns.nth(0);
  const recognition = dropdowns.nth(1);
  await programme.locator("summary").click();
  await expect(programme).toHaveAttribute("open", "");
  await expect(programme.getByRole("link", { name: "Programme overview" })).toBeVisible();

  await recognition.locator("summary").click();
  await expect(recognition).toHaveAttribute("open", "");
  await expect(programme).not.toHaveAttribute("open", "");
  const openMenuAccessibility = await new AxeBuilder({ page }).exclude("iframe").analyze();
  expect(openMenuAccessibility.violations, openMenuAccessibility.violations.map((item) => item.id).join(", ")).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(recognition).not.toHaveAttribute("open", "");
  await expect(recognition.locator("summary")).toBeFocused();
});

test("mobile navigation preserves the four-group information hierarchy", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await goto(page, "/home");
  await page.getByRole("button", { name: "Open menu" }).click();
  const mobilePanel = page.locator("#mobile-navigation");
  await expect(mobilePanel.locator(".mobile-nav-group")).toHaveCount(4);
  await expect(mobilePanel.locator("a.mobile-nav-home")).toHaveAttribute("href", "/home");
  await expect(mobilePanel.getByRole("link", { name: /Programme overview/i })).toBeVisible();
  await expect(mobilePanel.getByRole("link", { name: /Contact Future Ready EMBA/i })).toBeVisible();
  await expect(mobilePanel.getByRole("link", { name: /Executive MBA vs MBA/i })).toBeVisible();
});

test("page navigation starts at the top while intentional anchors still work", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await goto(page, "/faculty");
  await page.locator("footer").waitFor();
  await page.waitForTimeout(350);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollHeight)).toBeGreaterThan(720);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(100);

  const primaryHome = page.getByLabel("Primary navigation").getByRole("link", { name: "Home", exact: true });
  await primaryHome.click();
  await expect(page).toHaveURL(/\/home$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await primaryHome.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);

  await page.getByRole("link", { name: "Watch the graduation film" }).click();
  await expect(page).toHaveURL(/\/asian-business-consulting#abc-film$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await expect(page.locator("#abc-film")).toBeInViewport();
});

test("CMI recognition pages keep technical terms legible and the offer unambiguous", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await goto(page, "/chartered-manager-malaysia");
  await expect(page.getByRole("heading", { name: "Professional recognition for work you can use." })).toBeVisible();
  await page.locator("details").filter({ hasText: "Does the programme automatically award Chartered Manager status?" }).locator("summary").click();
  await expect(page.getByText(/Chartered Manager is a separate optional CMI route/i).first()).toBeVisible();
  await expect(page.getByText(/£|USD 2,500/)).toHaveCount(0);

  await goto(page, "/zh/chartered-manager-malaysia");
  await expect(page.getByRole("heading", { name: "让实际管理成果获得专业认可。" })).toBeVisible();
  await page.locator("details").filter({ hasText: "完成课程后会自动成为 Chartered Manager 吗？" }).locator("summary").click();
  await expect(page.getByText(/Chartered Manager 为独立可选路线/).first()).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.fonts.status)).toBe("loaded");
});

test("indexed content routes expose visible breadcrumb orientation", async ({ page }) => {
  for (const [route, current] of [
    ["/mba-for-sme-owners", "For SME owners"],
    ["/resources/advancement-brief", "Advancement brief"],
    ["/zh/faculty", "师资与导师"],
  ] as const) {
    await goto(page, route);
    const breadcrumbs = page.locator(".site-breadcrumbs");
    await expect(breadcrumbs).toBeVisible();
    await expect(breadcrumbs.locator('[aria-current="page"]')).toHaveText(current);
    await expect(breadcrumbs.getByRole("link").first()).toHaveAttribute("href", route.startsWith("/zh/") ? "/zh" : "/home");
  }
});

test("desktop hero exposes a primary conversion action in the first viewport", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await goto(page, "/home");
  const box = await page.locator(".navbar").getByRole("link", { name: /Get the guide/i }).boundingBox();
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
    await goto(page, "/home");
    await expect(page.locator(".brand-product")).toBeVisible();
    const brandContained = await page.locator(".brand-link").evaluate((element) => element.scrollWidth <= element.clientWidth + 1);
    expect(brandContained, `${width}px brand lockup`).toBe(true);
    const dimensions = await page.evaluate(() => ({
      client: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scroll, `${width}px viewport`).toBeLessThanOrEqual(dimensions.client);
  }
});

test("long footer contact links wrap inside narrow bilingual columns", async ({ page }) => {
  for (const width of [320, 375, 390]) {
    await page.setViewportSize({ width, height: 844 });
    await goto(page, "/zh");
    const email = page.locator('footer a[href="mailto:support@futurereadymba.com"]');
    await expect(email).toBeVisible();
    const contained = await email.evaluate((element) => element.scrollWidth <= element.clientWidth + 1);
    expect(contained, `${width}px Chinese footer email`).toBe(true);
  }
});

test("priority content pages reflow without horizontal overflow", async ({ page }) => {
  test.setTimeout(60_000);
  const routes = ["/home", "/executive-mba", "/how-it-works", "/curriculum", "/mba-for-working-professionals", "/chartered-manager-malaysia", "/fees", "/resources/advancement-brief", "/insights/executive-education-vs-executive-mba", "/zh", "/zh/executive-mba", "/zh/how-it-works", "/zh/chartered-manager-malaysia", "/zh/fees"];
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

test("retired programme offers permanently resolve to the Future Ready eMBA journey", async ({ page }) => {
  for (const [route, target] of [
    ["/online-executive-mba", "/executive-mba"],
    ["/corporate-training", "/hrd-corp-claimable"],
    ["/programmes/shift-hr", "/executive-mba"],
  ] as const) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(`${target.replaceAll("/", "\\/")}$`));
    await expect(page.locator("main h1")).toHaveCount(1);
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

  await goto(page, "/home");
  const heroGrid = page.locator(".home-hero-stage-grid");
  const heroForm = heroGrid.locator("form[data-form-id]");
  await expect(heroForm).toBeVisible();
  await expect(heroForm.getByRole("heading", { name: "Send me the 2026 programme guide." })).toBeVisible();
  await expect(heroForm.getByLabel("Email")).toBeVisible();
  await expect(heroForm.getByLabel("Phone / WhatsApp")).toBeVisible();
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
  await goto(page, "/home");
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
    for (const route of ["/home", "/executive-mba", "/chartered-manager-malaysia", "/fees", "/apply", "/insights/executive-education-vs-executive-mba", "/zh", "/zh/executive-mba", "/zh/chartered-manager-malaysia", "/zh/fees", "/zh/apply"]) {
      await goto(page, route);
      await page.waitForTimeout(700);
      const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
      expect(results.violations, `${route} at ${width}px: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
    }
  }
});

test("web fonts load and technical terms avoid malformed display glyphs", async ({ page }) => {
  await goto(page, "/home");
  const englishFonts = await page.evaluate(async () => {
    await document.fonts.ready;
    const root = getComputedStyle(document.documentElement);
    const primaryFamily = (variable: string) => root.getPropertyValue(variable).trim().split(",")[0];
    const body = getComputedStyle(document.body).fontFamily;
    const heading = getComputedStyle(document.querySelector("h1,h2,h3") as HTMLElement).fontFamily;
    return {
      status: document.fonts.status,
      body,
      heading,
      sansLoaded: document.fonts.check(`16px ${primaryFamily("--font-archivo")}`),
      serifLoaded: document.fonts.check(`32px ${primaryFamily("--font-fraunces")}`),
      malformed: document.body.innerText.includes("\uFFFD"),
    };
  });
  expect(englishFonts.status).toBe("loaded");
  expect(englishFonts.body).toContain("Archivo");
  expect(englishFonts.heading).toContain("Source Serif 4");
  expect(englishFonts.sansLoaded).toBe(true);
  expect(englishFonts.serifLoaded).toBe(true);
  expect(englishFonts.malformed).toBe(false);

  await goto(page, "/chartered-manager-malaysia");
  const technicalTerm = page.locator(".technical-term").first();
  await expect(technicalTerm).toBeVisible();
  expect(await technicalTerm.evaluate((element) => getComputedStyle(element).fontFamily)).toContain("Archivo");

  await goto(page, "/zh");
  const chineseFonts = await page.evaluate(async () => {
    await document.fonts.ready;
    const root = getComputedStyle(document.documentElement);
    const primaryFamily = root.getPropertyValue("--font-noto-sans-sc").trim().split(",")[0];
    return {
      status: document.fonts.status,
      body: getComputedStyle(document.body).fontFamily,
      loaded: document.fonts.check(`16px ${primaryFamily}`),
      malformed: document.body.innerText.includes("\uFFFD"),
    };
  });
  expect(chineseFonts.status).toBe("loaded");
  expect(chineseFonts.body).toContain("Noto Sans SC");
  expect(chineseFonts.loaded).toBe(true);
  expect(chineseFonts.malformed).toBe(false);
});

test("consent choice stays compact and visibly identifies its privacy link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await goto(page, "/home");
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
  await expect(page.getByRole("link", { name: "Contact Future Ready EMBA on WhatsApp" })).toHaveAttribute("href", /^https:\/\/wa\.me\/60129818533/);
  await page.getByRole("button", { name: /What does the programme cost/i }).click();
  await expect(page.getByText("The test answer is available.")).toBeVisible();
  await expect.poll(() => page.evaluate(() =>
    (window as typeof window & { __turnstileResetCount?: number }).__turnstileResetCount || 0,
  )).toBe(1);
});

test("lead form keeps the existing submit flow behind a Turnstile token", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/lead", async (route) => {
    const request = route.request().postDataJSON() as { turnstile_token?: string; marketing?: string };
    expect(request.turnstile_token).toBe("lead-test-token");
    expect(request.marketing).toBe("no");
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ lead_reference: "TEST-LEAD" }),
    });
  });
  await goto(page, "/apply");
  await page.getByRole("button", { name: /Continue to contact details/i }).click();
  const form = page.locator('form[data-form-id]').filter({ has: page.locator('input[name="phone_local"]') });
  await expect(form.locator("[data-widget-id]")).toBeVisible();
  await form.locator('input[name="name"]').fill("Test Participant");
  await form.getByLabel("Phone / WhatsApp").fill("12 345 6789");
  await form.locator('input[name="email"]').fill("test@example.com");
  await form.getByRole("checkbox").first().check();
  await form.getByRole("button", { name: /Send my programme request/i }).click();
  await expect(page.getByText("Request received")).toBeVisible();
  await expect(page.getByText("TEST-LEAD")).toBeVisible();
});

test("lead form resets a redeemed Turnstile token before a retry", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/lead", async (route) => {
    await route.fulfill({
      status: 400,
      contentType: "application/json",
      body: JSON.stringify({ error: "Security verification failed", code: "security_failed" }),
    });
  });
  await goto(page, "/apply");
  await page.getByRole("button", { name: /Continue to contact details/i }).click();
  const form = page.locator('form[data-form-id]').filter({ has: page.locator('input[name="phone_local"]') });
  await form.locator('input[name="name"]').fill("Test Participant");
  await form.getByLabel("Phone / WhatsApp").fill("12 345 6789");
  await form.locator('input[name="email"]').fill("test@example.com");
  await form.getByRole("checkbox").first().check();
  await form.getByRole("button", { name: /Send my programme request/i }).click();
  await expect.poll(() => page.evaluate(() =>
    (window as typeof window & { __turnstileResetCount?: number }).__turnstileResetCount || 0,
  )).toBe(1);
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

test("campaign lead capture collects guide delivery and contact details", async ({ page }) => {
  await mockTurnstile(page);
  await page.route("**/api/lead", async (route) => {
    const request = route.request().postDataJSON() as Record<string, unknown>;
    expect(request.turnstile_token).toBe("lead-test-token");
    expect(request.company).toBeUndefined();
    expect(request.preferred_contact_window).toBe("flexible");
    expect(request.contact_preference).toBe("details_first");
    expect(request.email).toBe("campaign@example.com");
    expect(request.phone).toBe("+60123456789");
    expect(request.marketing).toBe("no");
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
  await form.getByLabel("Phone / WhatsApp").fill("12 345 6789");
  await form.getByLabel("Email").fill("campaign@example.com");
  await form.getByRole("checkbox").first().check();
  await form.getByRole("button", { name: /Send my guide/i }).click();
  await expect(page.getByText("CAMPAIGN-LEAD")).toBeVisible();
  await expect(page.getByRole("link", { name: /Open the 2026 programme guide/i })).toHaveAttribute("href", "/resources/advancement-brief");
});

test("campaign routes have no automated accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [390, 1280]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    for (const route of ["/lp/google", "/lp/meta", "/zh/lp/google", "/zh/lp/meta"]) {
      await goto(page, route);
      await page.waitForTimeout(300);
      const results = await new AxeBuilder({ page }).exclude("iframe").analyze();
      expect(results.violations, `${route} at ${width}px: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
    }
  }
});

test("home hero carousel presents video, photography and accessible controls", async ({ page }) => {
  await goto(page, "/home");
  const slider = page.locator(".home-slider");
  await expect(slider).toBeVisible();
  await expect(slider.locator(".home-slide")).toHaveCount(3);
  await expect(slider.locator("video source")).toHaveAttribute("src", "/media/home-graduation-loop.mp4");
  const pauseButton = slider.getByRole("button", { name: "Pause slide rotation" });
  await expect(pauseButton).toBeVisible();
  await pauseButton.click();
  const actionTops: number[] = [];
  for (const slideNumber of [1, 2, 3]) {
    const selector = slider.getByRole("button", { name: new RegExp(`Show slide ${slideNumber}:`) });
    await selector.click();
    await expect(selector).toHaveAttribute("aria-current", "true");
    await page.waitForTimeout(450);
    const actionBox = await slider.locator(".home-slide.is-active .home-slide-action").boundingBox();
    actionTops.push(actionBox?.y || 0);
  }
  expect(Math.max(...actionTops) - Math.min(...actionTops)).toBeLessThanOrEqual(1);
  const secondSlide = slider.getByRole("button", { name: /Show slide 2:/ });
  await secondSlide.click();
  await expect(secondSlide).toHaveAttribute("aria-current", "true");
  await expect(slider.locator(".home-slide.is-active").getByRole("heading")).toContainText("Bring the decision");
});

test("home hero controls remain readable and touch-sized at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 844 });
  await goto(page, "/home");
  const slider = page.locator(".home-slider");
  const pauseButton = slider.getByRole("button", { name: "Pause slide rotation" });
  await expect(pauseButton).toBeVisible();
  const controls = await slider.locator(".home-slider-controls button").evaluateAll((buttons) => buttons.map((button) => ({
    width: button.getBoundingClientRect().width,
    height: button.getBoundingClientRect().height,
    contained: button.scrollWidth <= button.clientWidth + 1,
  })));
  for (const control of controls) {
    expect(control.width).toBeGreaterThanOrEqual(44);
    expect(control.height).toBeGreaterThanOrEqual(44);
    expect(control.contained).toBe(true);
  }
});

test("home hero aligns the slider, form and carousel actions on desktop", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: width >= 1440 ? 900 : 800 });
    await goto(page, "/home");
    await page.evaluate(() => document.fonts.ready);
    const slider = page.locator(".home-slider");
    const form = page.locator(".working-hero-form");
    const sliderBox = await slider.boundingBox();
    const formBox = await form.boundingBox();
    expect(sliderBox, `${width}px slider`).not.toBeNull();
    expect(formBox, `${width}px form`).not.toBeNull();
    expect(Math.abs((sliderBox?.y || 0) + (sliderBox?.height || 0) - (formBox?.y || 0) - (formBox?.height || 0)), `${width}px bottom alignment`).toBeLessThanOrEqual(1);

    await slider.getByRole("button", { name: "Pause slide rotation" }).click();
    const controls = await slider.locator(".home-slider-controls").boundingBox();
    for (const slideNumber of [1, 2, 3]) {
      const selector = slider.getByRole("button", { name: new RegExp(`Show slide ${slideNumber}:`) });
      await selector.click();
      await expect(selector).toHaveAttribute("aria-current", "true");
      const action = await slider.locator(".home-slide.is-active .home-slide-action").boundingBox();
      expect((action?.y || 0) + (action?.height || 0), `${width}px slide ${slideNumber} action clearance`).toBeLessThanOrEqual((controls?.y || 0) - 2);
    }
  }
});

test("home hero selects the crop designed for each screen size", async ({ page }) => {
  for (const [width, expectedCrop] of [[390, "9x16"], [768, "4x5"], [1280, "16x9"]] as const) {
    await page.setViewportSize({ width, height: width < 1000 ? 844 : 800 });
    await goto(page, "/home");
    const slider = page.locator(".home-slider");
    await slider.getByRole("button", { name: /Show slide 2:/ }).click();
    const image = slider.locator(".home-slide.is-active picture img");
    await expect(image).toBeVisible();
    const currentSrc = await image.evaluate((element: HTMLImageElement) => element.currentSrc);
    expect(currentSrc, `${width}px crop`).toContain(expectedCrop);
    expect(await image.evaluate((element: HTMLImageElement) => element.naturalWidth)).toBeGreaterThan(0);
  }
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
  await goto(page, "/home");
  expect(await page.locator("footer.site .foot-seal").count()).toBeGreaterThan(0);
});
