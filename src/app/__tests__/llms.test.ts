import { describe, expect, it } from "vitest";
import { GET } from "@/app/llms.txt/route";
import { SITE } from "@/lib/content";
import { EN_ROUTES, LOCALE_PAIRS } from "@/lib/locale-routes";

// Routes that carry a noindex directive and must never appear in an AI-crawler
// discovery document, in any language mirror.
const NOINDEX_ROUTES = [
  "/corporate-training",
  "/online-executive-mba",
  "/programmes/shift-hr",
  "/lp/google",
  "/lp/meta",
  "/unsubscribed",
];

async function llmsBody() {
  const response = GET();
  return response.text();
}

describe("llms.txt route coverage", () => {
  it("lists the English, Malay and Chinese URL for every public, indexable route", async () => {
    const body = await llmsBody();

    for (const path of EN_ROUTES) {
      if (NOINDEX_ROUTES.includes(path)) continue;
      const pair = LOCALE_PAIRS.find((candidate) => candidate.en === path);
      expect(pair, `no LOCALE_PAIRS entry for ${path}`).toBeDefined();
      expect(body, `missing English URL for ${path}`).toContain(`${SITE.url}${path}`);
      expect(body, `missing zh URL for ${path}`).toContain(`${SITE.url}${pair!.zh}`);
      expect(body, `missing ms URL for ${path}`).toContain(`${SITE.url}${pair!.ms}`);
    }
  });

  it("never lists a noindex route, in any locale", async () => {
    const body = await llmsBody();

    for (const path of NOINDEX_ROUTES) {
      expect(body, `${path} (en) should be absent`).not.toContain(`${SITE.url}${path}`);
      const pair = LOCALE_PAIRS.find((candidate) => candidate.en === path);
      if (pair) {
        expect(body, `${pair.zh} should be absent`).not.toContain(`${SITE.url}${pair.zh}`);
        expect(body, `${pair.ms} should be absent`).not.toContain(`${SITE.url}${pair.ms}`);
      }
    }
  });

  it("keeps the required section headings", async () => {
    const body = await llmsBody();
    expect(body).toContain("# ");
    expect(body).toContain("## Primary sources");
    expect(body).toContain("## Important interpretation");
    expect(body).toContain("## Contact");
  });
});
