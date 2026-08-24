type LocaleTriple = { en: string; zh: string; ms: string };

/**
 * Full trilingual route registry. `zh` and `ms` mirror the English tree:
 * /zh and /ms are the localized homepages (English home lives at /home).
 */
const EN_ROUTES = [
  "/home",
  "/executive-mba",
  "/how-it-works",
  "/chartered-manager-malaysia",
  "/curriculum",
  "/fees",
  "/intakes",
  "/faculty",
  "/asian-business-consulting",
  "/faq",
  "/apply",
  "/contact",
  "/privacy",
  "/terms",
  "/resources",
  "/diagnostic",
  "/resources/advancement-brief",
  "/insights/advancement-question",
  "/lp/google",
  "/lp/meta",
  "/about",
  "/ai-executive-mba",
  "/corporate-training",
  "/executive-mba-malaysia",
  "/executive-mba-vs-mba",
  "/hrd-corp-claimable",
  "/insights",
  "/insights/design-thinking-for-business",
  "/insights/executive-education-vs-executive-mba",
  "/insights/first-principles-thinking",
  "/insights/systems-thinking-for-leaders",
  "/mba-for-entrepreneurs",
  "/mba-for-sme-owners",
  "/mba-for-working-professionals",
  "/online-executive-mba",
  "/programmes/shift-hr",
  "/unsubscribed",
] as const;

export const LOCALE_PAIRS: LocaleTriple[] = EN_ROUTES.map((en) => ({
  en,
  zh: en === "/home" ? "/zh" : `/zh${en}`,
  ms: en === "/home" ? "/ms" : `/ms${en}`,
}));

export function isCampaignRoute(path: string) {
  return path.startsWith("/lp/") || path.startsWith("/zh/lp/") || path.startsWith("/ms/lp/");
}

export function languageAlternates(path: string) {
  const pair = LOCALE_PAIRS.find(
    (candidate) => candidate.en === path || candidate.zh === path || candidate.ms === path,
  );
  if (!pair) return undefined;
  return {
    en: pair.en,
    "zh-Hans": pair.zh,
    ms: pair.ms,
    "x-default": pair.en,
  };
}

export function pairedRoute(path: string) {
  return LOCALE_PAIRS.find(
    (candidate) => candidate.en === path || candidate.zh === path || candidate.ms === path,
  );
}

export type SiteLocale = "en" | "zh" | "ms";

export function localeOfPath(path: string): SiteLocale {
  if (path === "/zh" || path.startsWith("/zh/") || path.startsWith("/zh#")) return "zh";
  if (path === "/ms" || path.startsWith("/ms/") || path.startsWith("/ms#")) return "ms";
  return "en";
}
