import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";
import { LOCALE_PAIRS } from "@/lib/locale-routes";

const REVIEW_DATES = {
  programme: new Date("2026-08-21T00:00:00+08:00"),
  commercial: new Date("2026-08-21T00:00:00+08:00"),
  insights: new Date("2026-08-21T00:00:00+08:00"),
  legal: new Date("2026-08-14T00:00:00+08:00"),
} as const;

const PRIMARY = ["/home", "/executive-mba", "/apply", "/zh", "/ms"];
const CORE = ["/how-it-works", "/curriculum", "/fees", "/intakes", "/faculty", "/faq"];
const CLUSTER = [
  "/hrd-corp-claimable", "/executive-mba-vs-mba",
  "/ai-executive-mba", "/mba-for-working-professionals",
  "/executive-mba-malaysia", "/chartered-manager-malaysia", "/mba-for-sme-owners", "/mba-for-entrepreneurs",
];
const INSIGHTS = [
  "/insights", "/insights/first-principles-thinking",
  "/insights/systems-thinking-for-leaders", "/insights/design-thinking-for-business",
  "/insights/advancement-question", "/insights/executive-education-vs-executive-mba",
];
const ZH_CORE = [
  "/zh/executive-mba", "/zh/how-it-works", "/zh/curriculum", "/zh/fees", "/zh/intakes",
  "/zh/faculty", "/zh/faq", "/zh/chartered-manager-malaysia", "/zh/apply", "/zh/contact", "/zh/privacy", "/zh/terms",
];
const ZH_RESOURCES = [
  "/zh/resources", "/zh/resources/advancement-brief",
  "/zh/diagnostic", "/zh/insights/advancement-question", "/zh/asian-business-consulting",
];
const ZH_FULL_MIRROR = [
  "/zh/about", "/zh/ai-executive-mba", "/zh/executive-mba-malaysia",
  "/zh/executive-mba-vs-mba", "/zh/hrd-corp-claimable", "/zh/insights",
  "/zh/insights/design-thinking-for-business", "/zh/insights/executive-education-vs-executive-mba",
  "/zh/insights/first-principles-thinking", "/zh/insights/systems-thinking-for-leaders",
  "/zh/mba-for-entrepreneurs", "/zh/mba-for-sme-owners", "/zh/mba-for-working-professionals",
];
const MS_CORE = [
  "/ms/executive-mba", "/ms/how-it-works", "/ms/curriculum", "/ms/fees", "/ms/intakes",
  "/ms/faculty", "/ms/faq", "/ms/chartered-manager-malaysia", "/ms/apply", "/ms/contact", "/ms/privacy", "/ms/terms",
];
const MS_MIRROR = [
  "/ms/resources", "/ms/resources/advancement-brief", "/ms/diagnostic", "/ms/asian-business-consulting",
  "/ms/about", "/ms/ai-executive-mba", "/ms/executive-mba-malaysia",
  "/ms/executive-mba-vs-mba", "/ms/hrd-corp-claimable", "/ms/insights",
  "/ms/insights/advancement-question", "/ms/insights/design-thinking-for-business",
  "/ms/insights/executive-education-vs-executive-mba", "/ms/insights/first-principles-thinking",
  "/ms/insights/systems-thinking-for-leaders", "/ms/mba-for-entrepreneurs", "/ms/mba-for-sme-owners",
  "/ms/mba-for-working-professionals",
];
const INFO = ["/about", "/asian-business-consulting", "/contact", "/privacy", "/terms", "/resources", "/resources/advancement-brief", "/diagnostic"];

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
    ...build(ZH_FULL_MIRROR, 0.65, "monthly", REVIEW_DATES.commercial),
    ...build(MS_CORE, 0.8, "weekly", REVIEW_DATES.programme),
    ...build(MS_MIRROR, 0.65, "monthly", REVIEW_DATES.commercial),
    ...build(INFO, 0.4, "monthly", REVIEW_DATES.legal),
  ];
}
