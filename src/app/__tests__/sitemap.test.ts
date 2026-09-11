import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { SITE } from "@/lib/content";
import { EN_ROUTES, LOCALE_PAIRS, NOINDEX_ROUTES } from "@/lib/locale-routes";

const VALID_PRIORITIES = [0.95, 0.8, 0.75, 0.7, 0.4];
const VALID_FREQUENCIES = ["weekly", "monthly"];

describe("sitemap() derivation", () => {
  const entries = sitemap();

  it("emits exactly one entry per locale for every non-noindex EN_ROUTES entry", () => {
    for (const { en, zh, ms } of LOCALE_PAIRS) {
      if (NOINDEX_ROUTES.includes(en)) continue;
      for (const path of [en, zh, ms]) {
        const expectedUrl = `${SITE.url}${path}`;
        const matches = entries.filter((e) => e.url === expectedUrl);
        expect(matches.length, `expected exactly one entry for ${path}`).toBe(1);
      }
    }
  });

  it("never includes a noindex route in any locale, and never includes the root stub", () => {
    for (const noindexPath of NOINDEX_ROUTES) {
      const pair = LOCALE_PAIRS.find((p) => p.en === noindexPath);
      expect(pair, `NOINDEX_ROUTES entry ${noindexPath} must be a real EN_ROUTES entry`).toBeDefined();
      if (!pair) continue;
      for (const path of [pair.en, pair.zh, pair.ms]) {
        const url = `${SITE.url}${path}`;
        expect(entries.some((e) => e.url === url), `${url} must not appear in the sitemap`).toBe(false);
      }
    }
    expect(entries.some((e) => e.url === `${SITE.url}/`)).toBe(false);
  });

  it("gives every entry alternates.languages with en, zh-Hans, ms and x-default", () => {
    for (const entry of entries) {
      expect(entry.alternates, `${entry.url} missing alternates`).toBeDefined();
      const languages = entry.alternates?.languages as Record<string, string> | undefined;
      expect(languages, `${entry.url} missing alternates.languages`).toBeDefined();
      expect(languages).toHaveProperty("en");
      expect(languages).toHaveProperty("zh-Hans");
      expect(languages).toHaveProperty("ms");
      expect(languages).toHaveProperty("x-default");
    }
  });

  it("uses only declared route-class priority and changeFrequency values", () => {
    for (const entry of entries) {
      expect(VALID_PRIORITIES, `${entry.url} priority ${entry.priority}`).toContain(entry.priority);
      expect(VALID_FREQUENCIES, `${entry.url} changeFrequency ${entry.changeFrequency}`).toContain(
        entry.changeFrequency,
      );
    }
  });

  it("totals 3 * (EN_ROUTES.length - NOINDEX_ROUTES.length) entries", () => {
    expect(entries.length).toBe(3 * (EN_ROUTES.length - NOINDEX_ROUTES.length));
  });
});
