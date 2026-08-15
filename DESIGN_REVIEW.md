# Future Ready EMBA — Post-implementation Design Review

**Review date:** 15 August 2026

**Product:** Future Ready Executive MBA website

**Direction:** Premium light editorial system in blue and white; serious, composed and designed for experienced working adults.
**Review lenses:** design review, UX writing, content strategy, responsive design, accessibility, form design and design-token consistency.

## Outcome

The priority Manus recommendations have been implemented and verified in the production build. The website now behaves as one responsive system rather than a collection of individually positioned pages and floating controls.

The result is proposition-first on mobile, clearer at high-intent decision points and materially calmer. The white and light-blue system preserves the Right Dots Resources logo, CMI/HRD Corp trust signals and the formal learning tone without relying on generic education imagery or aggressive conversion language.

**Post-implementation design maturity: 9.2/10.** The remaining items are operational inputs and device-assisted checks, not identified layout defects.

| Area | Result | Evidence |
|---|---|---|
| Brand and visual system | Complete | Semantic blue/white tokens, consistent logo use and three role-specific Working Scholar visuals |
| Desktop composition | Complete | Strong editorial hierarchy, restrained cards and one clear primary action per section |
| Mobile-native experience | Complete | Proposition-first Apply flow, vertical intake cards, one persistent WhatsApp bar and menu-based assistant access |
| Interface orchestration | Complete | Consent, navigation, content dialog, assistant and persistent actions use a shared state model |
| Conversion clarity | Complete | Consultative CTAs, exact fee breakdown and explicit no-payment enquiry language |
| Accessibility foundations | Complete | Skip link, focus traps, inert backgrounds, tab keyboard behavior, labels, alt text and reduced-motion support |
| English/Chinese parity | Complete for priority routes | Resources, diagnostic, advancement brief, insight and intake experiences are available in both route systems |
| Content governance | Complete | Canonical facts, recognition boundaries and automated ambiguity/stale-fee checks |

## Final visual evidence

| View | Capture | Review result |
|---|---|---|
| Homepage · 1440px | [final-home-desktop-1440.png](screenshots/final-home-desktop-1440.png) | Editorial hero, decision brief, method, pathway, proof, resources and enquiry form read as one coherent system |
| Homepage · 768px | [final-home-tablet-768.png](screenshots/final-home-tablet-768.png) | Tablet layout collapses cleanly with no horizontal overflow |
| Homepage · 360px | [final-home-mobile-360.png](screenshots/final-home-mobile-360.png) | Primary action, programme introduction and proof remain legible in the narrowest tested viewport |
| Apply · 390px | [final-apply-mobile-390.png](screenshots/final-apply-mobile-390.png) | Programme context and contact choices precede the full form; company is explicitly optional |
| Intakes · 390px | [final-intakes-mobile-390.png](screenshots/final-intakes-mobile-390.png) | Cohorts render as phone-native date cards rather than a sideways reconciliation task |
| Chinese homepage · 390px | [final-zh-mobile-390.png](screenshots/final-zh-mobile-390.png) | Proposition precedes data capture and the page retains Chinese typography and content hierarchy |

## Implemented decisions

### One floating-interface system

`FloatingUiContext` establishes explicit exclusivity across mobile navigation, the programme assistant and the programme-introduction dialog. Consent is shown only when no blocking surface is open. WhatsApp appears only after consent is resolved and is suppressed behind a dialog, menu or visible lead form.

On mobile, WhatsApp is the sole persistent bottom action. The programme assistant remains available from the mobile menu instead of competing as a second launcher. Desktop retains the compact assistant launcher and circular WhatsApp action.

### A clearer decision sequence

The homepage now moves through a deliberate sequence: proposition, private decision brief, programme facts, learning method, six-month pathway, recognition and fee boundaries, private resources, the Dr. Xavier principle and a consultative enquiry.

The Apply page explains the choice before requesting personal data. Visitors can request a call, online information meeting, in-person meeting at an agreed location or details by email. The form identifies the company field as optional and explains why email and contact preference are requested.

### Phone-native schedules and comparisons

Below 641px, the six-column intake schedule becomes one vertical card per cohort. Each card preserves language, cohort, three exact dates, delivery days, time and availability. Tablet and desktop retain the accessible table. Programme comparisons also use labelled stacked cards at phone widths.

### Recognition and fee clarity

The principal programme language distinguishes the CMI-recognised programme certificate from CMI's separate Chartered Manager assessment. It does not present CMgr MCMI, membership, activation, eligibility or fees as automatic.

The current published financial facts are consistent throughout the site: RM10,000.00 standard fee, RM5,000.00 LIFE Innoversity scholarship and RM5,000.00 Malaysian participant fee. HRD Corp is presented as an employer-led application whose eligibility and approved amount are decided by HRD Corp.

### Responsive and localisation parity

Priority English and Simplified Chinese routes now share resource, diagnostic, advancement-brief, insight and intake structures. The header and footer expose the expanded Chinese decision path, and active-route treatment provides orientation in both systems.

### Accessibility and interaction

- A keyboard-visible skip link targets the main content.
- Navigation, assistant and programme-introduction dialogs trap focus, close with Escape and restore focus.
- Decision Brief tabs support Arrow, Home and End keys.
- Forms retain visible labels, 48px controls, focus indicators and explicit optional-field language.
- Images use contextual alternative text; decorative marks remain hidden from assistive technology.
- Reduced-motion users receive immediate content without movement.

## Verification

The final production build is subject to four automated gates:

- lint and TypeScript compilation;
- public-copy clarity checks across 88 files;
- SEO regression checks for 14 core pages;
- a rendered browser suite covering 18 priority routes at 360px, 768px and 1440px.

The browser suite checks response status, horizontal overflow, one-H1 structure, page language, skip links, duplicate IDs, visible field labels, action names, image alternatives, superseded fee references, overlay exclusivity, mobile WhatsApp behavior, intake presentation, Apply-page content order, return-to-top behavior and browser console errors.

## Remaining operational inputs

- Add the approved programme video through `NEXT_PUBLIC_PROGRAMME_VIDEO_URL`; the current transcript-first placeholder is intentional and does not autoplay.
- Complete VoiceOver and TalkBack checks on physical iOS and Android devices before a formal WCAG conformance claim.
- Validate Turnstile, lead submission, autoresponder and programme-assistant responses in the deployed Hostinger environment with production credentials.
- Re-run the browser suite after deployment because CDN, proxy and third-party script behavior cannot be proven by a local production build alone.

## Sign-off

No unresolved responsive, copy-governance or interaction blocker was identified in the tested production build. The design is ready for deployment verification once the user requests deployment.
