import { ABC_PROFILE, FACTS, HRD_CORP_CLAIM, OPERATOR, SITE } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> Official programme information for a professional leadership programme delivered by ${SITE.provider} in Malaysia and recognised by CMI against CMI Professional Standards. This is not an MQA-accredited academic qualification.

${OPERATOR.name} is ABC's ${OPERATOR.role} for marketing, programme enquiries, pricing and enrolment coordination. ${OPERATOR.name} and ${SITE.provider} are separate independent companies; ${SITE.provider} provides and delivers the programme. ${ABC_PROFILE.name} is a ${ABC_PROFILE.hrdStatus} and develops and structures signature training programmes.

## Primary sources
- [Programme](${SITE.url}/executive-mba): scope, format, credential and audience
- [Chartered Manager Malaysia](${SITE.url}/chartered-manager-malaysia): current CMI routes, eligibility, assessment, fCMgr, CMgr MCMI and Malaysia network
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
- The standard programme fee is ${FACTS.priceStd}. Eligible Malaysian applicants may receive a ${FACTS.scholarshipAmount} ${FACTS.scholarshipProvider} scholarship, subject to availability, assessment and written approval. Approved recipients pay ${FACTS.priceAfterScholarship}; the scholarship is not automatic.
- Programme completion provides the CMI-recognised programme certificate. CMI's published CMI Recognised route lists Foundation Chartered Manager (fCMgr) status on completion; CMI controls activation, continued use and membership renewal.
- The Executive MBA runs for three months and leads to the CMI-recognised programme certificate. Chartered Manager is a separate optional CMI route; CMI controls eligibility, assessment, membership and fees. It is not included in the published Executive MBA programme or fee.
- CMI publishes Full Assessment, CMI Fast Track and Apprenticeship routes. This programme is CMI Recognised, not a CMI qualification, and does not automatically create Fast Track eligibility. CMI confirms the applicable route for each participant.
- ${HRD_CORP_CLAIM.process}
- The Future Ready Executive MBA is a three-month professional development programme with CMI (UK) Endorsed and Recognised status. It is non-academic, not an MQA-accredited academic degree or a regulated qualification. It does not create CMI Fast Track eligibility for Chartered Manager.
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
