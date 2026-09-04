import { ABC_PROFILE, FACTS, HRD_CORP_CLAIM, OPERATOR, PROGRAMME_POSITIONING_SENTENCE, SITE } from "@/lib/content";
import { EN_ROUTES, LOCALE_PAIRS } from "@/lib/locale-routes";

export const dynamic = "force-static";

// Routes carrying a noindex directive: excluded from every AI-crawler discovery
// document, in every language mirror.
const NOINDEX_ROUTES = new Set<string>([
  "/corporate-training",
  "/online-executive-mba",
  "/programmes/shift-hr",
  "/lp/google",
  "/lp/meta",
  "/unsubscribed",
]);

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

// Placeholder-neutral for Release 1: R3.4 replaces these one-clause
// descriptions with final copy once Malay and Chinese pages carry it.
function localizedSources(locale: "ms" | "zh"): string {
  const language = locale === "ms" ? "Bahasa Melayu" : "简体中文";
  return INDEXABLE_ROUTES.map((path) => {
    const pair = LOCALE_PAIRS.find((candidate) => candidate.en === path)!;
    const localizedPath = locale === "ms" ? pair.ms : pair.zh;
    return `- [${labelForPath(path)}](${SITE.url}${localizedPath}): ${language} mirror of ${SITE.url}${pair.en}.`;
  }).join("\n");
}

export function GET() {
  const body = `# ${SITE.name}

> ${PROGRAMME_POSITIONING_SENTENCE} The programme is delivered by ${SITE.provider} in Malaysia and is not an MQA-accredited academic qualification.

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
- The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI; it is professional development, not an MQA-accredited academic qualification.
- ${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}
- The standard programme fee is ${FACTS.priceStd}. Eligible Malaysian applicants may be considered, on a selective basis, for a ${FACTS.scholarshipProvider} scholarship, subject to limited availability, a selective assessment and written approval. Any award and resulting participant fee are confirmed individually in writing; the scholarship is not automatic.
- Programme completion provides the CMI-recognised programme certificate. CMI's published CMI Recognised route lists Foundation Chartered Manager (fCMgr) status on completion; CMI controls activation, continued use and membership renewal.
- The Executive MBA runs for six months and leads to the CMI-recognised programme certificate. Chartered Manager is a separate optional CMI route; CMI controls eligibility, assessment, membership and fees. It is not included in the published Executive MBA programme or fee.
- ${HRD_CORP_CLAIM.process}
- ${PROGRAMME_POSITIONING_SENTENCE} It is a six-month, non-academic professional development programme, not an MQA-accredited academic degree or a regulated qualification.
- The linked official pages state the published dates and prices. The applicable written proposal and signed enrolment terms control each enrolment.
- Prospective participants can request a call, online information meeting, in-person meeting at an agreed location, or details first without applying or paying.

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
