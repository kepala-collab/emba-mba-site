import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { LOCALE_PAIRS } from "@/lib/locale-routes";

const REVIEW_DATES = {
  programme: new Date("2026-08-14T00:00:00+08:00"),
  commercial: new Date("2026-08-14T00:00:00+08:00"),
  insights: new Date("2026-08-14T00:00:00+08:00"),
  legal: new Date("2026-08-14T00:00:00+08:00"),
} as const;

const PRIMARY = ["", "/executive-mba", "/apply", "/zh"];
const CORE = ["/how-it-works", "/curriculum", "/fees", "/intakes", "/faculty", "/faq", "/corporate-training"];
const CLUSTER = [
  "/hrd-corp-claimable", "/online-executive-mba", "/executive-mba-vs-mba",
  "/ai-executive-mba", "/mba-for-working-professionals", "/programmes/shift-hr",
  "/executive-mba-malaysia", "/mba-for-sme-owners", "/mba-for-entrepreneurs",
];
const INSIGHTS = [
  "/insights", "/insights/first-principles-thinking",
  "/insights/systems-thinking-for-leaders", "/insights/design-thinking-for-business",
  "/insights/advancement-question",
];
const ZH_CORE = [
  "/zh/executive-mba", "/zh/curriculum", "/zh/fees", "/zh/intakes",
  "/zh/faculty", "/zh/faq", "/zh/apply", "/zh/contact", "/zh/privacy", "/zh/terms",
];
const ZH_RESOURCES = [
  "/zh/resources", "/zh/resources/advancement-brief",
  "/zh/diagnostic", "/zh/insights/advancement-question",
];
const INFO = ["/about", "/contact", "/privacy", "/terms", "/resources", "/resources/advancement-brief", "/diagnostic"];

function alternatesFor(path: string) {
  const pair = LOCALE_PAIRS.find(({ en, zh }) => en === path || zh === path);
  if (!pair) return undefined;
  return {
    languages: {
      en: `${SITE.url}${pair.en}`,
      "zh-Hans": `${SITE.url}${pair.zh}`,
      "x-default": `${SITE.url}${pair.en}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const build = (
    routes: string[],
    priority: number,
    changeFrequency: "weekly" | "monthly",
    lastModified: Date,
  ) =>
    routes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: alternatesFor(path),
    }));

  return [
    ...build(PRIMARY, 0.95, "weekly", REVIEW_DATES.programme),
    ...build(CORE, 0.8, "weekly", REVIEW_DATES.programme),
    ...build(CLUSTER, 0.75, "monthly", REVIEW_DATES.commercial),
    ...build(INSIGHTS, 0.7, "monthly", REVIEW_DATES.insights),
    ...build(ZH_CORE, 0.8, "weekly", REVIEW_DATES.programme),
    ...build(ZH_RESOURCES, 0.7, "monthly", REVIEW_DATES.insights),
    ...build(INFO, 0.4, "monthly", REVIEW_DATES.legal),
  ];
}
