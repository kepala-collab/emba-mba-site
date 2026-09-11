import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { EN_ROUTES, LOCALE_PAIRS, NOINDEX_ROUTES } from "@/lib/locale-routes";

type RouteClass = "primary" | "core" | "cluster" | "insights" | "info" | "legal";

const NOINDEX_SET = new Set<string>(NOINDEX_ROUTES);

/**
 * One class per `EN_ROUTES` entry, noindex routes included (their class is
 * never read — they are filtered out before rendering). `Record<..., RouteClass>`
 * over the full `EN_ROUTES` union means the build fails the moment a route is
 * added to `EN_ROUTES` without being classified here — that is the anti-drift
 * check.
 */
const ROUTE_CLASS: Record<(typeof EN_ROUTES)[number], RouteClass> = {
  "/home": "primary",
  "/executive-mba": "primary",
  "/apply": "primary",
  "/how-it-works": "core",
  "/curriculum": "core",
  "/fees": "core",
  "/intakes": "core",
  "/faculty": "core",
  "/faq": "core",
  "/chartered-manager-malaysia": "cluster",
  "/hrd-corp-claimable": "cluster",
  "/executive-mba-vs-mba": "cluster",
  "/ai-executive-mba": "cluster",
  "/mba-for-working-professionals": "cluster",
  "/executive-mba-malaysia": "cluster",
  "/mba-for-sme-owners": "cluster",
  "/mba-for-entrepreneurs": "cluster",
  "/insights": "insights",
  "/insights/first-principles-thinking": "insights",
  "/insights/systems-thinking-for-leaders": "insights",
  "/insights/design-thinking-for-business": "insights",
  "/insights/advancement-question": "insights",
  "/insights/executive-education-vs-executive-mba": "insights",
  "/about": "info",
  "/asian-business-consulting": "info",
  "/contact": "info",
  "/resources": "info",
  "/resources/advancement-brief": "info",
  "/diagnostic": "info",
  "/privacy": "legal",
  "/terms": "legal",
  // Noindex routes — never emitted, but every EN_ROUTES entry must have a class.
  "/lp/google": "cluster",
  "/lp/meta": "cluster",
  "/corporate-training": "cluster",
  "/online-executive-mba": "cluster",
  "/programmes/shift-hr": "cluster",
  "/unsubscribed": "info",
};

const CLASS_SETTINGS: Record<RouteClass, { priority: number; changeFrequency: "weekly" | "monthly" }> = {
  primary: { priority: 0.95, changeFrequency: "weekly" },
  core: { priority: 0.8, changeFrequency: "weekly" },
  cluster: { priority: 0.75, changeFrequency: "monthly" },
  insights: { priority: 0.7, changeFrequency: "monthly" },
  info: { priority: 0.4, changeFrequency: "monthly" },
  legal: { priority: 0.4, changeFrequency: "monthly" },
};

/**
 * Per-route last-modified date. The release that changes a page's content
 * updates its date here. Release 2 (R2.1–R2.3) touched every public page, so
 * everything is dated 2026-09-11 except the legal pages, which kept their
 * existing 2026-08-14 review date because Release 2 did not change them.
 */
const RELEASE_2_DATE = new Date("2026-09-11T00:00:00+08:00");
const LEGAL_REVIEW_DATE = new Date("2026-08-14T00:00:00+08:00");

const LAST_MODIFIED: Record<(typeof EN_ROUTES)[number], Date> = Object.fromEntries(
  EN_ROUTES.map((path) => [path, ROUTE_CLASS[path] === "legal" ? LEGAL_REVIEW_DATE : RELEASE_2_DATE]),
) as Record<(typeof EN_ROUTES)[number], Date>;

function alternatesFor(path: string) {
  const pair = LOCALE_PAIRS.find(({ en, zh, ms }) => en === path || zh === path || ms === path);
  if (!pair) return undefined;
  return {
    languages: {
      en: `${SITE.url}${pair.en}`,
      "zh-Hans": `${SITE.url}${pair.zh}`,
      ms: `${SITE.url}${pair.ms}`,
      "x-default": `${SITE.url}${pair.en}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALE_PAIRS.filter(({ en }) => !NOINDEX_SET.has(en)).flatMap(({ en, zh, ms }) => {
    const enPath = en as (typeof EN_ROUTES)[number];
    const routeClass = ROUTE_CLASS[enPath];
    const { priority, changeFrequency } = CLASS_SETTINGS[routeClass];
    const lastModified = LAST_MODIFIED[enPath];
    return [en, zh, ms].map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: alternatesFor(path),
    }));
  });
}
