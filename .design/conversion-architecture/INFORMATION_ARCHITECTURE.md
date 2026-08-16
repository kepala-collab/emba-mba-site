# Information Architecture: Future Ready Executive MBA

## Site Map

- Home `/` and Chinese home `/zh`
  - Programme `/executive-mba` and `/zh/executive-mba`
  - Method `/how-it-works` and `/zh/how-it-works`
  - Curriculum `/curriculum` and `/zh/curriculum`
  - Recognition `/chartered-manager-malaysia` and `/zh/chartered-manager-malaysia`
  - Fees and scholarship `/fees` and `/zh/fees`
  - 2026 dates `/intakes` and `/zh/intakes`
- Lead capture `/apply` and `/zh/apply`
- Supporting proof: faculty, FAQ, resources, comparison and insight pages
- Campaign funnels `/lp/google`, `/lp/meta` and their Chinese equivalents
- Legal and company information: about, contact, privacy and terms

## Navigation Model

- **Primary navigation:** Programme, Method, Curriculum, Recognition, Fees and 2026 Dates.
- **Primary conversion action:** Request/Get Programme Guide.
- **Secondary navigation:** Faculty, FAQ, resources and supporting SEO pages remain available through contextual links and the footer.
- **Mobile navigation:** The same six decision pages appear in a full-screen menu with a persistent guide CTA.

## Content Hierarchy

### Home

1. One direct promise about management judgement and future readiness.
2. One primary guide-request action and one programme-exploration action.
3. Four verified programme facts without pricing complexity.
4. Six cards routing visitors to one-answer-per-page decision paths.
5. Three applied management outcomes.
6. One lead form with low-commitment contact choices.

### Fees and Scholarship

1. RM10,000 standard fee.
2. RM5,000 scholarship for eligible Malaysian applicants.
3. Explicit availability, assessment and written-approval conditions.
4. RM5,000 payable only after scholarship approval.
5. Programme inclusions, payment options and separate HRD Corp process.

### Campaign Landing Pages

1. Audience-specific problem and applied outcome.
2. Short proof strip.
3. RM5,000 scholarship as an eligibility-based incentive, never an automatic discount.
4. Minimal programme-guide form.
5. No competing main-site navigation.

## User Flows

### Visitor seeking a quick overview

1. Land on Home.
2. Read the promise and four facts.
3. Open the one decision page that matches the current question.
4. Request the guide or contact the team when ready.

### Scholarship-interested Malaysian applicant

1. Land on Home or a campaign page.
2. See that a RM5,000 scholarship is available to eligible applicants.
3. Open Fees and Scholarship.
4. Review the standard fee, conditions and approved-recipient scenario.
5. Submit an enquiry for an eligibility review.

### Employer-funded participant

1. Open Fees or the HRD Corp page.
2. Distinguish scholarship assessment from employer-led HRD Corp funding.
3. Review employer responsibilities and timing.
4. Request the programme documents required for the employer application.

## Naming Conventions

| Concept | Label in UI | Notes |
|---|---|---|
| Lead action | Request/Get Programme Guide | Lower commitment than Apply Now |
| Commercial baseline | Standard fee | Always RM10,000 unless formally changed |
| Incentive | Scholarship for eligible Malaysian applicants | Never call it an automatic Malaysian fee |
| Discounted outcome | Fee after scholarship approval | RM5,000 only after written approval |
| Employer funding | Employer-led HRD Corp funding | Separate from scholarship eligibility |
| Professional status | Chartered Manager assessment | Separate CMI eligibility and assessment |

## Component Reuse Map

| Component | Used on | Behaviour differences |
|---|---|---|
| `Header` | All public pages | Full decision navigation; reduced campaign navigation |
| `ProgrammeMarks` | Home, apply and campaign pages | English/Chinese copy; labelled or compact presentation |
| `CtaSection` | English decision pages | Page-specific heading, source and checklist |
| `LeadForm` | Home, apply and campaign pages | Standard or campaign variant; English/Chinese copy |
| `ChineseCorePage` | Chinese decision pages | Shared readable page structure |

## Content Growth Plan

- Insights and resources may grow as separate supporting collections.
- Primary navigation remains fixed at six decision pages.
- New campaign pages must map to one audience and one conversion action.
- Fee, scholarship, recognition and intake claims require review after every material programme change.

## URL Strategy

- English core pages use root-level descriptive slugs.
- Chinese equivalents use `/zh/<matching-slug>`.
- Campaign routes remain under `/lp/` and `/zh/lp/` and are excluded from indexing.
- Every bilingual core page has canonical and reciprocal hreflang metadata.
