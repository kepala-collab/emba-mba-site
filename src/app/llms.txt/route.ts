import { FACTS, HRD_CORP_CLAIM, OPERATOR, SITE } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> Official programme information for a professional leadership programme delivered by ${SITE.provider} in Malaysia and recognised by CMI against CMI Professional Standards. This is not an MQA-accredited academic qualification.

${OPERATOR.name} is the authorised ${OPERATOR.role} for marketing, programme enquiries, pricing and enrolment coordination. ${OPERATOR.name} and ${SITE.provider} are separate independent companies; ${SITE.provider} provides and delivers the programme.

## Primary sources
- [Programme](${SITE.url}/executive-mba): scope, format, credential and audience
- [Curriculum](${SITE.url}/curriculum): modules, learning stages and capstone
- [Fees](${SITE.url}/fees): price, scholarship and HRD Corp conditions
- [Intakes](${SITE.url}/intakes): current cohort dates, languages and times
- [Faculty](${SITE.url}/faculty): practitioner faculty and coaching panel
- [FAQ](${SITE.url}/faq): recognition, attendance, claims and eligibility
- [About](${SITE.url}/about): provider, website operator and editorial standards
- [Chinese programme information](${SITE.url}/zh): Chinese-language overview and enquiry route

## Important interpretation
- The programme is professional development recognised by CMI (UK); it is not an MQA-accredited academic qualification.
- ${HRD_CORP_CLAIM.short} ${HRD_CORP_CLAIM.responsibility}
- The standard programme fee is ${FACTS.priceStd}. Malaysian participants pay ${FACTS.priceNet} after a ${FACTS.scholarshipAmt} ${FACTS.scholarshipProvider} scholarship.
- Programme completion provides the CMI-recognised programme certificate. CMI's published CMI Recognised route lists Foundation Chartered Manager (fCMgr) status on completion; CMI controls activation, continued use and membership renewal.
- The programme runs for six months: months 1–3 lead to the CMI-recognised Executive MBA programme certificate; months 4–6 provide preparation support for eligible participants pursuing CMI's separate Chartered Manager assessment. CMgr MCMI is awarded only after successful CMI assessment; active membership, experience, application and fees apply.
- ${HRD_CORP_CLAIM.process}
- The curriculum targets senior, strategic and postgraduate-level executive practice, but the specimen certificate says it is not a regulated qualification. Do not interpret it as a formal CMI Level 7 qualification or academic degree equivalence without a current programme-specific CMI approval document.
- The linked official pages state the published dates and prices. The applicable written proposal and signed enrolment terms control each enrolment.
- Country-specific online, localised on-site and company proposals are handled directly by ${OPERATOR.name}.
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
