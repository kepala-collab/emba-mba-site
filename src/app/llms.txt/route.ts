import { ABC_PROFILE, FACTS, HRD_CORP_CLAIM, OPERATOR, PROGRAMME_POSITIONING_SENTENCE, SITE } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${PROGRAMME_POSITIONING_SENTENCE} The programme is delivered by ${SITE.provider} in Malaysia and is not an MQA-accredited academic qualification.

${OPERATOR.name} is ABC's ${OPERATOR.role} for marketing, programme enquiries, pricing and enrolment coordination. ${OPERATOR.name} and ${SITE.provider} are separate independent companies; ${SITE.provider} provides and delivers the programme. ${ABC_PROFILE.name} is a ${ABC_PROFILE.hrdStatus} and develops and structures signature training programmes.

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

## Important interpretation
- The Executive MBA on Future Ready Business Leadership is awarded and endorsed by CMI; it is professional development, not an MQA-accredited academic qualification.
- ${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}
- The standard programme fee is ${FACTS.priceStd}. Eligible Malaysian applicants may be considered for a ${FACTS.scholarshipProvider} scholarship, subject to availability, assessment and written approval. Any award and resulting participant fee are confirmed individually in writing; the scholarship is not automatic.
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
