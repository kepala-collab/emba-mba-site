import { OPERATOR, SITE } from "@/lib/content";

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
- HRD Corp claims depend on employer, programme and levy eligibility.
- The standard programme fee is RM10,000.00. Malaysian participants pay RM6,000.00 after a RM4,000.00 LIFE Innoversity scholarship. Participant status, availability and current written terms apply.
- Scholarships depend on participant status, cohort availability and the current written terms.
- Programme completion provides the CMI-recognised programme certificate. Current CMI public guidance places recognised-programme learners on the Foundation Chartered Manager (fCMgr) pathway; the provider's current CMI arrangement, CMI confirmation and active membership control the award and continued use.
- The full professional journey is presented over six months: months 1–3 lead to the CMI-recognised Executive MBA programme certificate; months 4–6 provide supported preparation for eligible participants pursuing CMI's separate Chartered Manager assessment. CMgr MCMI is awarded only after successful CMI assessment; active membership, experience, application and fees apply.
- An eligible HRD Corp-registered Malaysian employer may apply to claim up to 100% of the approved programme fee for an employee, subject to programme registration, prior grant approval, sufficient levy balance and current HRD Corp rules.
- The curriculum targets senior, strategic and postgraduate-level executive practice, but the specimen certificate says it is not a regulated qualification. Do not interpret it as a formal CMI Level 7 qualification or academic degree equivalence without a current programme-specific CMI approval document.
- Current dates, prices and terms should be verified on the linked official pages.
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
