import { interpretationBullets, programmePositioning } from "@/lib/chat-knowledge";
import { ABC_PROFILE, OPERATOR, SITE } from "@/lib/content";
import { EN_ROUTES, LOCALE_PAIRS, NOINDEX_ROUTES as NOINDEX_ROUTE_LIST } from "@/lib/locale-routes";

export const dynamic = "force-static";

// Routes carrying a noindex directive: excluded from every AI-crawler discovery
// document, in every language mirror. Derived from the same export the sitemap
// (R3.3) reads, so this list can never drift from what search engines see.
const NOINDEX_ROUTES = new Set<string>(NOINDEX_ROUTE_LIST);

const INDEXABLE_ROUTES = EN_ROUTES.filter((path) => !NOINDEX_ROUTES.has(path));

const ACRONYMS = new Set(["mba", "hrd", "cmi", "faq", "ai", "sme"]);
const MINOR_WORDS = new Set(["for", "vs", "and", "the", "a", "on", "of", "in"]);

function humanizeWord(word: string, isFirst: boolean): string {
  if (ACRONYMS.has(word)) return word.toUpperCase();
  if (!isFirst && MINOR_WORDS.has(word)) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function humanizeSegment(segment: string): string {
  return segment
    .split("-")
    .map((word, index) => humanizeWord(word, index === 0))
    .join(" ");
}

function labelForPath(path: string): string {
  if (path === "/home") return "Homepage";
  return path.split("/").filter(Boolean).map(humanizeSegment).join(" – ");
}

// R3.4: the localized "mirror" clause after each link is in the section's own
// language — Malay and Chinese sections no longer carry English prose.
function localizedSources(locale: "ms" | "zh"): string {
  const language = locale === "ms" ? "Bahasa Melayu" : "简体中文";
  return INDEXABLE_ROUTES.map((path) => {
    const pair = LOCALE_PAIRS.find((candidate) => candidate.en === path)!;
    const localizedPath = locale === "ms" ? pair.ms : pair.zh;
    const clause =
      locale === "ms"
        ? `versi ${language} bagi ${SITE.url}${pair.en}`
        : `${SITE.url}${pair.en} 的${language}版本`;
    return `- [${labelForPath(path)}](${SITE.url}${localizedPath}): ${clause}.`;
  }).join("\n");
}

function bulletList(language: "en" | "ms" | "zh"): string {
  return interpretationBullets(language)
    .map((bullet) => `- ${bullet}`)
    .join("\n");
}

export function GET() {
  const body = `# ${SITE.name}

> ${programmePositioning("en")} The programme is delivered by ${SITE.provider} in Malaysia and is not an MQA-accredited academic qualification.

${OPERATOR.name} is ABC's ${OPERATOR.role} for programme enquiries, pricing and enrolment coordination. ${OPERATOR.name} and ${SITE.provider} are separate independent companies; ${SITE.provider} provides and delivers the programme. ${ABC_PROFILE.name} is a ${ABC_PROFILE.hrdStatus} and develops and structures signature training programmes.

## Primary sources
- [Programme](${SITE.url}/executive-mba): scope, format, credential and audience
- [CMI recognition](${SITE.url}/chartered-manager-malaysia): programme recognition, certificate and the boundary around any separate optional CMI route
- [Curriculum](${SITE.url}/curriculum): modules, learning stages and capstone
- [Fees](${SITE.url}/fees): price, scholarship and HRD Corp conditions
- [Intakes](${SITE.url}/intakes): current cohort dates, languages and times
- [Faculty](${SITE.url}/faculty): practitioner faculty and coaching panel
- [FAQ](${SITE.url}/faq): recognition, attendance, claims and eligibility
- [About](${SITE.url}/about): provider, website operator and editorial standards
- [Chinese programme information](${SITE.url}/zh): Chinese-language overview and enquiry route
- [Insights](${SITE.url}/insights): management-thinking articles behind the programme
- [Resources](${SITE.url}/resources): decision guides and comparison checklists
- [Apply](${SITE.url}/apply): the enrolment enquiry form
- [Diagnostic](${SITE.url}/diagnostic): the no-data programme-fit check

## Malay sources (Bahasa Melayu)
${localizedSources("ms")}

## Chinese sources (简体中文)
${localizedSources("zh")}

## Important interpretation
${bulletList("en")}

## Contact
- Email: ${SITE.email}
- Telephone: ${SITE.phone}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
