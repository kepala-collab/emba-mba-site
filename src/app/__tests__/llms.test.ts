import { describe, expect, it } from "vitest";
import { GET } from "@/app/llms.txt/route";
import { GET as GET_FULL } from "@/app/llms-full.txt/route";
import {
  FACTS,
  HRD_CORP_CLAIM,
  INTAKES,
  PROGRAMME_POSITIONING_MS,
  PROGRAMME_POSITIONING_SENTENCE,
  PROGRAMME_POSITIONING_ZH,
  SITE,
} from "@/lib/content";
import { HRD_CORP_CLAIM_MS } from "@/lib/content-ms";
import { HRD_CORP_CLAIM_ZH } from "@/lib/content-zh";
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

async function llmsFullBody() {
  const response = GET_FULL();
  return response.text();
}

describe("llms-full.txt verified facts", () => {
  it("interpolates the shared numeric facts, never a hand-typed value", async () => {
    const body = await llmsFullBody();
    expect(body).toContain(FACTS.priceStd);
    expect(body).toContain(FACTS.durationMonths);
    expect(body).toContain(FACTS.trainingDays);
    expect(body).toContain(FACTS.liveSessions);
    expect(body).toContain(FACTS.moduleCount);
    expect(body).toContain(FACTS.scholarshipProvider);
  });

  it("interpolates the positioning sentence in all three languages", async () => {
    const body = await llmsFullBody();
    expect(body).toContain(PROGRAMME_POSITIONING_SENTENCE);
    expect(body).toContain(PROGRAMME_POSITIONING_MS);
    expect(body).toContain(PROGRAMME_POSITIONING_ZH);
  });

  it("interpolates the HRD Corp claim in all three languages", async () => {
    const body = await llmsFullBody();
    expect(body).toContain(HRD_CORP_CLAIM.short);
    expect(body).toContain(HRD_CORP_CLAIM_MS);
    expect(body).toContain(HRD_CORP_CLAIM_ZH);
  });

  it("carries the three language section markers", async () => {
    const body = await llmsFullBody();
    expect(body).toContain("## English");
    expect(body).toContain("## Bahasa Melayu");
    expect(body).toContain("## 简体中文");
  });

  it("lists every published intake cohort id", async () => {
    const body = await llmsFullBody();
    for (const intake of INTAKES) {
      expect(body, `missing ${intake.co}`).toContain(intake.co);
    }
  });
});
