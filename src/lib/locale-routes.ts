type LocalePair = { en: string; zh: string };

export const LOCALE_PAIRS: LocalePair[] = [
  { en: "/", zh: "/zh" },
  { en: "/executive-mba", zh: "/zh/executive-mba" },
  { en: "/chartered-manager-malaysia", zh: "/zh/chartered-manager-malaysia" },
  { en: "/curriculum", zh: "/zh/curriculum" },
  { en: "/fees", zh: "/zh/fees" },
  { en: "/intakes", zh: "/zh/intakes" },
  { en: "/faculty", zh: "/zh/faculty" },
  { en: "/faq", zh: "/zh/faq" },
  { en: "/apply", zh: "/zh/apply" },
  { en: "/contact", zh: "/zh/contact" },
  { en: "/privacy", zh: "/zh/privacy" },
  { en: "/terms", zh: "/zh/terms" },
  { en: "/resources", zh: "/zh/resources" },
  { en: "/diagnostic", zh: "/zh/diagnostic" },
  { en: "/resources/advancement-brief", zh: "/zh/resources/advancement-brief" },
  { en: "/insights/advancement-question", zh: "/zh/insights/advancement-question" },
];

export function languageAlternates(path: string) {
  const pair = LOCALE_PAIRS.find((candidate) => candidate.en === path || candidate.zh === path);
  if (!pair) return undefined;
  return {
    en: pair.en,
    "zh-Hans": pair.zh,
    "x-default": pair.en,
  };
}

export function pairedRoute(path: string) {
  return LOCALE_PAIRS.find((candidate) => candidate.en === path || candidate.zh === path);
}
