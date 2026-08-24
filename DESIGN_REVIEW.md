# Future Ready EMBA — Production Site Audit

**Review date:** 15 August 2026

**Production site:** https://futurereadymba.com

**Reviewed branch / commit:** `codex/hostinger-deployment` / `3b418d9`

**Mode:** Read-only production and source review. No real lead was submitted.

## Executive outcome

The site has a coherent premium blue-and-white visual direction, a credible editorial tone, strong legal boundaries, valid SEO foundations and a thoughtful mobile navigation system. It is not yet enterprise-grade conversion-ready.

The main gap is not aesthetics. It is reliability at the points where trust must become action: the live programme assistant fails its Turnstile verification, the English mobile enquiry form begins 2.6 viewports below the top of the Apply page, the production CSP header is materially weaker than the source policy, and the release process has no CI or browser-level regression suite.

This review replaces the previous `9.2/10` self-assessment. A numeric score would hide the fact that one conversion-critical feature is currently failing and another has not been verified end to end.

## Remediation status — 15 August 2026

The audited source issues have now been remediated locally. The original findings
below remain as the production baseline and must not be read as a claim that the live
Hostinger release has changed.

- Turnstile now uses explicit execution for programme-assistant sessions, while the
  lead form retains a visible managed challenge. Client events and privacy-safe server
  failure diagnostics cover script, render, execution, token and verification states.
- The English mobile Apply route now places its form directly after the concise
  introduction; automated testing confirms it starts within 900 CSS pixels at 375px.
- Accessible colour/focus tokens, semantic Chinese lists, visible-by-default content,
  narrow-screen media sizing, persistent EMBA naming and laptop-height hero spacing
  have been corrected.
- English and Chinese priority routes now pass automated serious/critical axe checks.
- Programme-video captions have an explicit environment contract and supporting images
  are no longer eagerly loaded outside the homepage LCP context.
- The claims dictionary, contact identity, HRD Corp wording and high-risk metadata copy
  have been normalised.
- Full CSP and release headers, a five-minute shared HTML cache ceiling, immutable
  release IDs and a public post-deploy verifier are implemented in source.
- GitHub quality gates now cover lint, TypeScript, unit tests, content/SEO/style audits,
  production build, dependency audit and Playwright conversion/accessibility smoke tests.

### Comprehension and responsive follow-up — 15 August 2026

- The homepage now answers five visitor questions in order: what the programme is,
  who it is for, how the six months work, what it costs and how to speak with the
  programme team.
- Abstract labels such as “Working Scholar”, “Decision Brief” and “structured
  inquiry” have been removed. Navigation, resource names, module descriptions and
  calls to action now use direct, task-based language.
- The English Programme and Fees pages have been rebuilt as summary-first reading
  journeys. The fee calculation is visible above the fold and the two programme
  stages are separated clearly: certificate work in months 1–3 and Chartered
  Manager preparation in months 4–6.
- Shared heading measures, card density, section spacing and enquiry layouts now
  adapt across desktop, tablet and mobile instead of collapsing into long walls of
  equally weighted cards. Chinese core pages use the same hierarchy.
- Browser regression tests now check six priority English/Chinese routes at 320,
  390, 768 and 1280 CSS pixels. The suite reports no horizontal overflow, confirms
  mobile enquiry stacking and reports no serious automated accessibility violations.
- The content audit now blocks ambiguous estimates and the retired abstract
  positioning language from being reintroduced.

## Final global and Malaysian market benchmark — 15 August 2026

The final local review compared the priority journeys with the current programme
presentation patterns used by INSEAD Global Executive MBA, IMD Executive MBA,
London Business School Executive MBA, Harvard Business School Executive Education
and Asia School of Business Executive MBA. Malaysian funding and recognition copy
was checked against current HRD Corp and CMI public guidance.

| Decision signal | Benchmark pattern | Local implementation |
|---|---|---|
| Format and time away from work | Duration, delivery mode and work absence appear near the top | Six months, six in-person days, three sessions and continued employment are above the fold |
| Participant fit | Seniority and current responsibility are stated plainly | Business owners, directors, general managers and senior managers are named; the fit check creates a private checklist without claiming to predict suitability |
| Programme structure | Stages and practical application are separated | Certificate work in months 1–3 and optional CMgr assessment preparation in months 4–6 are presented as separate stages |
| Fees | Exact tuition, inclusions and financing are visible before enquiry | RM10,000.00 standard fee, RM4,000.00 scholarship, RM6,000.00 payable fee, inclusions and payment terms are explicit |
| Employer support | A distinct organisation-sponsored route is available | Employer-led HRD Corp steps, responsibility and approval limits are explained without guaranteeing funding |
| Human proof | Named faculty and participant evidence replace generic prestige claims | Three named practitioners now appear on the homepage with a link to the full seven-person panel; no participant testimonial or outcome has been invented |
| Low-pressure contact | Brochure, eligibility feedback and a call are offered separately | Programme guide, programme-fit checklist, email-first route, call, online meeting, in-person meeting and WhatsApp are available |
| Credential precision | Award, accreditation and later professional designations are distinguished | CMI Certificate of Recognition, Foundation Chartered Manager and the separate CMgr assessment are described independently; the non-MQA academic status is explicit |

### Malaysia-specific opportunity applied

- The mobile path prioritises local WhatsApp contact without displaying both the
  desktop widget and mobile bar.
- Self-funded, employer-sponsored, Mandarin and international enquiry routes are
  separated at the start of the form.
- The public fee calculation uses Malaysian currency and names the scholarship
  provider; employer funding remains an employer application decided by HRD Corp.
- English and Mandarin cohort choices, dates and 9am–6pm commitments are published
  before payment.
- The site does not imitate an academic MBA admissions claim. Visitors who need an
  MQA-accredited degree are directed to the defined comparison instead.

### Final copy and interface corrections

- Replaced “pathway”, “journey”, “readiness diagnostic” and similar abstract
  marketing labels with programme, structure, assessment preparation and programme
  fit terminology.
- Rebuilt the fit-check result so it displays the visitor's actual selections and a
  factual review checklist. It no longer derives a pseudo-personalised result from
  an arbitrary score.
- When no programme video URL is configured, the introduction now identifies itself
  as a text overview and no longer shows a video-play affordance or implementation
  placeholder.
- Replaced the homepage quote-only section with named faculty evidence while retaining
  Dr Xavier Johnson's approved “We Connect The Dots” statement as supporting copy.
- Reorganised English and Chinese mobile footers into compact columns while preserving
  the complete legal and data-protection notices.

### Screenshots captured

Four English priority pages were captured at 1280×800, 768×1024 and 375×812, with
additional Chinese homepage and Apply captures at 375×812. The programme overview dialog
was reviewed at 1280×800 and the completed programme fit check at 375×812. All 16 files are stored in
`screenshots/final-market-review/` using the pattern
`review-{home|programme|fees|apply}-{desktop-1280|tablet-768|mobile-375}.png`, plus
`review-zh-home-mobile-375.png` and `review-zh-apply-mobile-375.png`.

Production sign-off still requires a new deployment, Hostinger/CDN cache purge, the
public release verifier, an approved synthetic lead through the real database/email/
integration path, and physical assistive-technology/device testing. GTM, programme
video/captions and search-verification integrations remain inactive until their real
external IDs or assets are supplied.

## Scope and evidence

- Reviewed all 46 indexed sitemap routes; every route returned HTTP 200.
- Verified HTTP-to-HTTPS and `www` canonical redirects.
- Ran `lint`, TypeScript, production build, unit tests, SEO audit, content audit and release audit successfully.
- Ran `npm audit --omit=dev`: zero known production dependency vulnerabilities.
- Tested the live site at 320, 375, 768, 1024 and 1280 CSS-pixel widths.
- Tested mobile menu focus, Escape handling, form step progression, native form validation, header return-to-top behavior and browser console output.
- Reviewed accessibility structure, contrast tokens, metadata, JSON-LD syntax, sitemap, robots, `llms.txt`, security headers, APIs, rate limits, attribution, consent and release configuration.
- Chrome DevTools trace tooling was not available in this environment. No Lighthouse score or Core Web Vitals result is claimed or estimated.
- Physical VoiceOver, TalkBack, keyboard-only Safari and low-end Android testing remain outstanding.

## Visual evidence

| View | Capture | Main observation |
|---|---|---|
| Homepage · 1280×800 | [review-live-home-1280x800.png](screenshots/review-live-home-1280x800.png) | Primary hero actions are below the fold; assistant launcher overlaps the hero image caption |
| Homepage · 768×1024 | [review-live-home-768x1024.png](screenshots/review-live-home-768x1024.png) | Settled tablet layout is coherent and the WhatsApp bar renders correctly |
| Homepage · 375×812 | [review-live-home-375x812.png](screenshots/review-live-home-375x812.png) | Strong hierarchy, but the product name is shortened to “Future Ready” and the hero action is below the fold |
| Homepage · 320×812 | [review-live-home-320x812.png](screenshots/review-live-home-320x812.png) | Narrow-screen typography holds, but the hero media component later exceeds its content width |
| Apply · 1280×800 | [review-live-apply-1280x800.png](screenshots/review-live-apply-1280x800.png) | Good desktop two-column intent/form structure |
| Apply · 375×812 | [review-live-apply-375x812.png](screenshots/review-live-apply-375x812.png) | The form is not visible in the first screen and begins 2,113px from the top |
| Fees · 375×812 | [review-live-fees-375x812.png](screenshots/review-live-fees-375x812.png) | Clear presentation, but price and comparison detail require a very long mobile journey |
| Intakes · 375×812 | [review-live-intakes-375x812.png](screenshots/review-live-intakes-375x812.png) | Clear introduction and phone-native cohort cards below it |
| Chinese homepage · 375×812 | [review-live-zh-375x812.png](screenshots/review-live-zh-375x812.png) | Legible Chinese layout, but proposition and information architecture differ materially from English |
| Mobile menu · 320×812 | [review-live-menu-320x812.png](screenshots/review-live-menu-320x812.png) | Focus management, Escape close and action grouping work correctly |
| Programme assistant · 1280×800 | [review-live-assistant-1280x800.png](screenshots/review-live-assistant-1280x800.png) | The UI is polished, but the session ends in a security-verification error |

## Must fix

### M1. The live programme assistant cannot complete security verification

**Evidence:** In the production BISOL Chrome session, selecting “What does the programme cost?” produced `Security verification could not be completed. Please try again or use WhatsApp.` No assistant answer was returned. The client did not obtain a Turnstile token before the request.

**Impact:** A visible conversion feature appears available, accepts a question, waits, then fails. This damages trust and creates support leakage to WhatsApp.

**Required action:** Repair the Turnstile client lifecycle, verify the production site key/hostname/action combination, add telemetry for widget load, token callback and verification failure, and run an end-to-end assistant test in a clean browser before re-enabling the launcher.

### M2. The lead form shares the same unproven Turnstile dependency

**Evidence:** Step 1 to Step 2 and native required-field validation work. In the same production session, the form created a Turnstile response field but did not expose a completed token during the audit. A real lead was deliberately not submitted.

**Impact:** The site may collect all contact details and then block submission at the final security step. That is the highest-cost point for a form failure.

**Required action:** Run a monitored synthetic submission using an approved test address and number, confirm database insertion, autoresponder, internal notification, outbox processing and success UI, then delete or label the test lead according to the data policy. Add this flow to automated release smoke tests.

### M3. The English mobile Apply page delays the form until 2.6 viewports down

**Evidence:** At 375×812, the first form begins at `y=2113px`. The desktop DOM order places the complete pitch, badges, programme introduction, next-step list and direct-contact block before the form when the grid collapses.

**Impact:** A visitor who intentionally chose “Talk” does not reach the requested action promptly. This is a direct conversion-architecture defect, not a copy issue.

**Required action:** On mobile, place the form immediately after the concise heading and one reassurance paragraph. Move the video, proof and “what happens next” detail below the form or into expandable supporting content.

### M4. Several accessibility colours fail WCAG 2.2 contrast requirements

**Evidence:** Current token ratios on light surfaces include:

- `--steel: #367CE7` on `#F7FBFF`: 3.89:1, below 4.5:1 for normal text.
- `--steel` on white: 4.04:1, below 4.5:1 for normal text.
- `--muted: #667891` on `#F7FBFF`: 4.33:1, below 4.5:1.
- focus outline `#8FB2FF` on white/light blue: about 2.1:1, below the 3:1 non-text contrast requirement.

Small mono labels use these colours extensively. Keyboard focus is present but can be too faint on the dominant light surfaces.

**Required action:** Darken the small-text steel and muted tokens, introduce a dedicated accessible focus token with at least 3:1 contrast against every adjacent surface, and add automated contrast checks to CI.

### M5. Production serves only a minimal CSP response header

**Evidence:** Production responses return `content-security-policy: upgrade-insecure-requests`. The stronger application policy is delivered as an HTML meta tag and still permits `'unsafe-inline'` for scripts and styles.

**Impact:** A meta CSP starts later in parsing, cannot provide all header-only protections, and `'unsafe-inline'` materially weakens script-injection containment. `X-Frame-Options: DENY` is present and helps with framing, but this is not an enterprise CSP posture.

**Required action:** Enforce the complete policy at Hostinger/CDN response-header level, migrate toward nonces or hashes for scripts, remove `'unsafe-inline'` where technically possible, and validate in report-only mode before enforcement.

### M6. HTML cache lifetime depends on manual purge discipline

**Evidence:** Homepage responses carry `Cache-Control: s-maxage=31536000`; the Hostinger CDN returned cached HTML with a non-zero `Age`. This deployment already required a manual CDN flush to expose the current release.

**Impact:** A successful deployment can leave old fees, claims, dates, JavaScript references or legal copy visible for an extended period.

**Required action:** Automate CDN invalidation as a mandatory post-deploy step, verify a release fingerprint from the public site, and fail the release if the fingerprint does not change. Use a shorter HTML surrogate TTL unless purge reliability is guaranteed.

### M7. Marketing, legal and contact language is not governed from one source

**Evidence:**

- Hero/proof copy says `Approved, Awarded & Endorsed by CMI, UK`, while legal and schema language says the programme is approved and endorsed and that successful participants are awarded a certificate.
- The English Apply-page WhatsApp message previously addressed another person; the current site consistently names Roy Affandi as Programme Coordinator.
- The header logo alt text says `Right Dot Resources`; the legal business name is `Right Dots Resources`.

**Impact:** These are small strings with outsized legal and trust consequences. The CMI wording can imply that the programme itself is “awarded,” and the incorrect contact name looks operationally careless.

**Required action:** Create a controlled claims dictionary for programme recognition, certificate award, HRD Corp wording, operator/provider roles and contact identity. Generate all badges, metadata, schema, assistant knowledge and legal notices from it.

## Should fix

### S1. Primary hero actions are below the fold on a common desktop viewport

At 1280×800 the hero action group starts at `y=905px`. The page presents a large proposition but no primary in-content action before the fold; only the header action remains visible. Reduce headline scale/vertical spacing at laptop heights or use a height-aware breakpoint.

### S2. The assistant launcher visibly covers hero-card copy

At 1280×800, the launcher overlaps the hero caption by approximately 6,224 square CSS pixels. Give fixed controls a documented safe zone, change placement while the hero is in view, or reserve padding so content is never obscured.

### S3. Reveal transitions can make newly navigated pages appear blank or disabled

The generic `.reveal` starts at opacity 0 and transitions for 800ms, with per-section delays. During live navigation the Apply page was initially blank/faint before becoming readable. Content should render fully by default and enhance motion only after hydration; above-the-fold content should never depend on an IntersectionObserver to become visible.

### S4. The 320px hero media geometry exceeds the available content width

The mobile hero media uses a 390px minimum height with a fixed aspect ratio. At a 320px viewport / 305px client width, the media art calculated to 332px wide and was clipped by the hero container. Remove the fixed minimum height at very narrow widths or cap it from the available inline size.

### S5. The product name disappears from the narrow mobile header

At `max-width: 380px`, `.brand-product` is set to `display:none`, leaving only “Future Ready.” Preserve `EMBA` in an abbreviated but visible lockup, or make the logo itself an unambiguous programme mark.

### S6. The actual programme video is not configured and its future caption path is incomplete

The live component currently opens a transcript/placeholder, not a video. `NEXT_PUBLIC_PROGRAMME_VIDEO_URL` is used by the component but absent from `.env.production.example`. When a video URL is supplied, the `<video>` has no `<track kind="captions">`, despite the interface stating that captions are available.

Document the video environment variable, provide a poster, duration and compressed renditions, add WebVTT captions and keep the transcript.

### S7. English and Chinese equivalents do not tell the same top-level story

The English homepage leads with the new Working Scholar proposition. The Chinese homepage still leads with the earlier “your business will be run…” proposition and a materially different section architecture. Localisation does not require literal translation, but hreflang-paired pages should preserve equivalent intent, proof, recognition boundaries and action hierarchy.

### S8. Chinese Apply skips from H1 to H3

The English form has an H2 wrapper; `/zh/apply` moves directly from the page H1 to the form H3. Add an equivalent H2 or make the form heading level configurable.

### S9. Search snippets are valid but not consistently optimised

There are no duplicate titles or descriptions, and all indexed pages have a canonical, one H1 and valid JSON-LD syntax. However, 12 English descriptions exceed 160 characters, the homepage description is 176 characters, and two titles exceed 65 characters. Tighten the highest-impression pages first and validate pixel-width previews rather than relying only on character limits.

### S10. Production analytics is instrumented but not active in the current build

The event/data-layer architecture is comprehensive, but the live HTML CSP meta does not include Google origins and the audited production DOM had no GTM script or data layer. That indicates the build was compiled without active GTM support, or analytics remains intentionally disabled. If measurement is expected, add the GTM ID at build time and verify consent-gated loading, event receipt and conversion definitions.

### S11. Release automation does not match the enterprise claim

The repository has no Playwright configuration and no workflow files under `.github/workflows`. Only six unit tests ran. Responsive layout, Turnstile, assistant, form, consent, bilingual navigation, schema and post-deploy cache freshness are not protected by CI.

Add required checks for lint, typecheck, unit tests, production build, SEO/content audits, browser smoke tests at 320/375/768/1280, accessibility, dependency audit and public release fingerprint verification.

### S12. Local production-environment validation currently fails

`npm run validate:env` reports missing local values for `LEAD_HASH_SECRET`, `SMTP_PASSWORD`, `EMAIL_CRON_SECRET` and `GROQ_API_KEY`. Hostinger may hold the live values, but the local release cannot reproduce or preflight the production contract. Keep secrets out of Git, but provide a secure documented release-validation method that checks key presence and length in the target environment.

### S13. The Apply page eagerly prioritises a below-fold image

`ProgrammeIntroduction` marks every image as `priority`, including the conversation image that appears before the mobile form but more than two screens below the top. Make priority conditional: true for the homepage LCP image, false for Apply-page supporting media.

### S14. Mobile page depth is excessive for high-intent routes

Measured at 375×812:

- Homepage: 12,491px / 15.4 viewports / 892 words.
- Fees: 13,254px / 16.3 viewports / 1,256 words.
- Intakes: 8,284px / 10.2 viewports / 666 words.
- Apply: 5,101px / 6.3 viewports / 425 words.

The content is credible, but the Fees and Apply journeys need a clearer summary-first layer, anchors and progressive disclosure. Long-form SEO content can remain below the decision layer.

### S15. The visual system has substantial implementation debt

The source contains approximately 600 inline style props, 20 page/component `<style>` blocks and 57 `!important` declarations. This makes responsive behavior, theming and accessibility changes hard to govern. Move repeated patterns into typed components and shared tokens, then add a stylelint/design-token check.

## Could improve

### C1. Add real-device and assistive-technology certification

Complete a documented matrix for VoiceOver/Safari, TalkBack/Chrome, Windows High Contrast, 200% zoom, text-only zoom and external keyboard use. The current structural foundations are good, but this audit is not a substitute for device-assisted testing.

### C2. Add monitored conversion objectives and service-level alerts

Define alert thresholds for lead-submit failure, Turnstile failure, assistant failure, autoresponder backlog, integration dead letters and zero-lead anomalies. Client error reporting currently depends on analytics consent; operational conversion failures need consent-independent, privacy-safe server monitoring.

### C3. Prepare the 2027 content rollover now

The navigation, schema and copy are strongly tied to “2026 Intakes.” Define the archive/current-intake policy, 2027 URLs, fee effective dates, sitemap updates and redirect rules before the year-end change.

### C4. Consider HSTS preload only after subdomain readiness is verified

HSTS with one-year `includeSubDomains` is present. Preload can improve downgrade resistance, but it is difficult to reverse and should be added only after every subdomain is confirmed HTTPS-ready.

## What is already strong

- All 46 indexed routes return 200 and internal links pass the release audit.
- Canonicals, hreflang on paired pages, sitemap, robots, `llms.txt`, OG/Twitter metadata and syntactically valid JSON-LD are present.
- HTTP and `www` redirects are correct.
- The source has strict request body limits, origin checks, Turnstile server verification, durable rate limits, parameterised database operations and constant-time internal bearer-secret checks.
- No production dependency vulnerability was reported by npm audit.
- Mobile navigation uses a modal pattern with inert background, focus placement, a focus loop and Escape recovery.
- Header “Talk” correctly returns the visitor to the top when already on the Apply route.
- Lead-form step progression and browser-native required-field validation work.
- The mobile WhatsApp bar and desktop assistant/WhatsApp arrangement are mutually exclusive as designed after the viewport settles.
- No browser console errors or warnings were recorded during the tested routes.
- Reduced-motion handling, skip link, labelled controls, alt text, one H1 per indexed route and responsive intake cards are solid foundations.

## Recommended order

1. Repair and end-to-end verify Turnstile, assistant and lead submission.
2. Move the mobile Apply form above supporting content.
3. Enforce the full CSP at the CDN and automate cache purge/fingerprint verification.
4. Correct contrast/focus tokens and the three confirmed content identity inconsistencies.
5. Bring desktop hero actions above the fold and remove assistant/caption overlap.
6. Add CI browser, accessibility and production smoke tests.
7. Complete video, analytics activation, SEO snippet tightening and design-system consolidation.
