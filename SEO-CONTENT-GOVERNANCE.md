# SEO and content governance

## Ownership

- Asian Business Consulting owns and approves programme, credential, curriculum,
  faculty, dates, pricing, scholarship and HRD Corp statements.
- Right Dots Resources is an Associate Partner to Asian Business Consulting. It operates
  the website and handles marketing, enquiries, pricing and enrolment coordination.
- The website must not imply that Right Dots Resources awards the credential.

## Review cycle

- Intake dates, fees, scholarships and availability: review monthly and after every change.
- Credential, CMI, MQA and HRD Corp language: review quarterly and after regulatory change.
- Faculty profiles: confirm before every cohort and remove unverifiable claims.
- Insight articles: review at least annually; change `dateModified` only after a substantive review.
- Legal and privacy copy: review after a data-flow, vendor or legal change.

## Evidence standard

- Link material regulatory and credential claims to the current official source.
- Keep written approval or source documentation for numeric outcomes, employer names,
  participant counts and testimonials.
- Never add review ratings, outcomes or credentials to structured data unless they are
  visible on the page and supported by evidence.
- Treat the programme certificate specimen, current ABC company profile and current
  enrolment terms as controlled evidence. Record document title, owner, version date,
  approved claim, public URL (where available) and next review date in the evidence register.
- Do not describe Chartered Manager as automatic or as a fixed second programme stage.
  It is a separate CMI application subject to current eligibility and assessment requirements.
- Client, associate and faculty claims describe ABC source materials; inclusion must not
  imply endorsement of this website, employment by ABC or a current formal partnership.

## Clarity standard

- Publish exact quantities, dates, prices, durations and named decision-makers. Do not use
  `roughly`, `approximately`, `typically`, `usually`, `commonly`, `often`, `most`, `about`
  before a number, or a tilde before a quantity.
- When an outcome depends on a third party, state the action, the decision-maker and the
  controlling document. Example: the employer submits the grant before training; HRD Corp
  decides eligibility and the approved amount under its Allowable Cost Matrix.
- Do not replace missing evidence with a range, qualifier, prestige label or superlative.
  Remove the claim until the exact fact and source are recorded.
- Define comparison groups before comparing them. The reference academic MBA on this site
  is the 18–24 month model described in `COMPARISON_SCOPE`; the table does not represent every MBA.
- Keep programme facts in `src/lib/content.ts` and translated policy facts in
  `src/lib/content-zh.ts`. Pages, metadata, structured data, `llms.txt` and the chatbot must
  reuse those facts instead of introducing independent versions.
- Run `npm run audit:content` before a release. A failed clarity audit blocks publication.

## Voice and tone

- Use a calm executive voice: direct, evidence-led and specific. Explain the programme before
  persuading the reader to enquire.
- Describe capabilities, learning activities and decision processes. Do not promise personal,
  commercial, employment, salary or promotion outcomes.
- On credential, funding, fee and legal pages, name the controlling organisation and written
  document. Avoid prestige labels, urgency devices and implied guarantees.
- Do not shame the reader, disparage other institutions or describe competing programmes as
  inferior. Define the comparison group and explain the different purpose of each route.
- Calls to action must name the action and its purpose: `Discuss programme fit`, `Review the
  schedule` or `Request a corporate proposal`. An enquiry is not an application approval,
  enrolment or payment commitment.
- English and Simplified Chinese must communicate equivalent meaning. Translate for clarity and
  natural usage rather than preserving English idioms or campaign metaphors literally.

## Controlled terminology

| Use | Do not substitute |
| --- | --- |
| CMI Certificate of Recognition | CMI qualification, CMI degree or academic MBA award |
| Professional programme recognised against CMI Professional Standards | MQA-accredited degree, regulated qualification or formal Level 7 qualification |
| Separate optional Chartered Manager route controlled by CMI | Automatic Chartered Manager award or a fixed second programme stage |
| Malaysian participant fee after the LIFE Innoversity scholarship | Discounted price, promotional price or approximate fee |
| Employer-led HRD Corp grant application | Automatic claim, guaranteed reimbursement or 100% approval |
| Applied business project or transformation plan | Thesis, guaranteed ROI project or board-approved plan |
| Programme enquiry or programme conversation | Admission, enrolment or confirmed place |

## Evidence register required before public launch

| Claim family | Current internal source | Publication rule |
| --- | --- | --- |
| CMI recognition | Certificate specimen and current programme brochure | Match the certificate wording; retain the not-regulated notice. |
| HRD Corp provider/status | ABC company profile plus current official HRD Corp record | State the employer application, HRD Corp decision and levy-balance ceiling; link the official process and Allowable Cost Matrix. |
| Cohorts and graduates | ABC company profile, page 14 | Attribute numbers to ABC and date every future update. |
| Client and associate names | ABC company profile | Present as organisations listed by ABC, never as website endorsements. |
| Faculty biographies | Current international brochure and ABC confirmation | Use affiliation rather than employment unless employment is verified. |
| Session 1 refund | Current signed enrolment terms | The enrolment terms control the deadline, scope, exclusions and processing time. |
| Malaysian participant fee and scholarship | Current LIFE Innoversity scholarship terms confirmed 15 August 2026 | Publish RM10,000.00 as the standard fee. Eligible Malaysian applicants may receive a RM5,000.00 LIFE Innoversity scholarship subject to availability, assessment and written approval; it is not automatic. |
| Individual and company delivery pricing | Programme pricing approval dated 13 August 2026 plus the applicable Right Dots Resources or company proposal | Publish the global online public programme at USD 2,500 per person irrespective of country. Country-specific online and localised on-site pricing must direct participants to Right Dots Resources as the Global and Local Programme Partner. In-house MDP pricing is proposal-based. Describe any CMI relationship as programme recognition against CMI Professional Standards; do not imply that CMI awards an academic MBA degree. |

## Publishing checklist

1. Assign one primary search intent and one canonical URL.
2. Confirm title, description, H1, internal links, language and legal wording.
3. Add a named person author when a qualified individual has approved authorship;
   otherwise use the accurately described editorial team.
4. Update sitemap `lastModified` only for substantively reviewed content.
5. Validate JSON-LD and rendered canonical/hreflang output.
6. Submit changed URLs through Search Console and IndexNow.
7. Monitor queries, citations, conversions and accuracy; consolidate overlapping pages
   instead of creating a thin page for every keyword variation.
