# Design Review: Future Ready Executive MBA website

Reviewed against: established project direction (no repository design brief found)
Philosophy: premium navy editorial commerce, focused lead generation, consistent EN/MS/ZH presentation
Date: 2026-08-26

## Screenshots Captured

All screenshots are in `screenshots/`.

| Screenshot | Breakpoint | Description |
| --- | --- | --- |
| `screenshots/review-home-desktop-1280.png` | 1280 × 800 | English Home, full page |
| `screenshots/review-home-tablet-768.png` | 768 × 1024 | English Home, full page |
| `screenshots/review-home-mobile-375.png` | 375 × 812 | English Home, full page |
| `screenshots/review-programme-desktop-1280.png` | 1280 × 800 | Programme, full page |
| `screenshots/review-programme-tablet-768.png` | 768 × 1024 | Programme, full page |
| `screenshots/review-programme-mobile-375.png` | 375 × 812 | Programme, full page |
| `screenshots/review-fees-desktop-1280.png` | 1280 × 800 | Fees, full page |
| `screenshots/review-fees-tablet-768.png` | 768 × 1024 | Fees, full page |
| `screenshots/review-fees-mobile-375.png` | 375 × 812 | Fees, full page |
| `screenshots/review-apply-desktop-1280.png` | 1280 × 800 | Apply, full page |
| `screenshots/review-apply-tablet-768.png` | 768 × 1024 | Apply, full page |
| `screenshots/review-apply-mobile-375.png` | 375 × 812 | Apply, full page |
| `screenshots/review-home-ms-desktop-1280.png` | 1280 × 800 | Malay Home, full page |
| `screenshots/review-home-ms-tablet-768.png` | 768 × 1024 | Malay Home, full page |
| `screenshots/review-home-ms-mobile-375.png` | 375 × 812 | Malay Home, full page |
| `screenshots/review-home-zh-desktop-1280.png` | 1280 × 800 | Chinese Home, full page |
| `screenshots/review-home-zh-tablet-768.png` | 768 × 1024 | Chinese Home, full page |
| `screenshots/review-home-zh-mobile-375.png` | 375 × 812 | Chinese Home, full page |
| `screenshots/review-home-top-desktop-1280.png` | 1280 × 800 | Home first viewport |
| `screenshots/review-home-top-mobile-375.png` | 375 × 812 | Home first viewport |
| `screenshots/review-fees-top-desktop-1280.png` | 1280 × 800 | Fees first viewport |
| `screenshots/review-fees-top-mobile-375.png` | 375 × 812 | Fees first viewport |
| `screenshots/review-apply-top-desktop-1280.png` | 1280 × 800 | Apply first viewport |
| `screenshots/review-apply-top-mobile-375.png` | 375 × 812 | Apply first viewport |
| `screenshots/review-home-scrolled-desktop-1280.png` | 1280 × 800 | Home after lazy-loaded imagery was exercised |

## Summary

The visual system is strong and coherent: the navy editorial direction, typography, photography, proof hierarchy and language layouts feel intentional. There is no foundational responsive or accessibility failure. The remaining work is concentrated in conversion friction: the privacy banner obscures key actions, the Apply form begins too low, and the mobile experience is longer and denser than the intended five-row commerce structure.

## Must Fix

1. **The privacy banner obscures conversion controls and is not localized in Malay.** At 375 px it overlaps 46 of 53 pixels of the Fees primary action and all 53 pixels of the Malay Home primary action. At 768 px it covers 111 pixels of the Apply form. Malay visitors receive English consent copy. Locations: `src/components/site/ConsentBanner.tsx:15`, `src/components/site/ConsentBanner.tsx:39`, and `src/app/globals.css:456`. See `screenshots/review-fees-top-mobile-375.png`, `screenshots/review-apply-top-mobile-375.png`, and `screenshots/review-home-ms-mobile-375.png`. **Remediation:** add Malay copy and replace the blocking banner with an essential-only compact privacy control that opens a preferences sheet; optional analytics should remain off until deliberately enabled.

2. **The Apply page delays the first interactive choice below the first viewport.** At 375 px the form starts at 763 px; at 1280 px the interactive form starts at 797 px. The page reads well, but a visitor who has already chosen to enquire must scroll before acting. Location: `src/app/(en)/apply/page.tsx:104`. See `screenshots/review-apply-top-desktop-1280.png` and `screenshots/review-apply-top-mobile-375.png`. **Remediation:** align the form with the hero heading, shorten the introductory copy, and place proof/video content after the form.

## Should Fix

1. **Fees mobile hierarchy is too tall before the action.** The five-line headline plus repeated scholarship explanation places the action at 638 px, where the consent banner covers it. See `screenshots/review-fees-top-mobile-375.png`. **Remediation:** use “RM10,000 standard fee. Scholarships assessed individually.” and reduce the mobile headline scale slightly; keep the detail in the fee card.

2. **Home is longer than the intended commerce-style decision path.** At 375 px the English page is 14,463 px high and its on-page guide form begins at 11,163 px. The hero anchor jumps there, so the flow works, but the browsing experience contains more stages than the requested four-to-five-row structure. Location: `src/components/site/FutureCommerceHome.tsx:220` and `src/components/site/FutureCommerceHome.tsx:335`. **Remediation:** consolidate into five blocks: hero/facts; programme choices; experience/method; recognition/community; guide capture.

3. **The mobile footer is disproportionately long and the legal copy is small.** Four link groups become one long vertical directory and the legal text remains `.76rem`. Locations: `src/components/site/Footer.tsx:177`, `src/app/globals.css:335`, and `src/app/globals.css:1045`. **Remediation:** use accessible disclosure groups below 640 px and raise legal text to at least `.82rem` with the existing line height.

## Could Improve

1. **Reduce the prominence of the separate Chartered Manager route.** The required distinction should remain, but the standalone route and repeated references compete with the single-programme funnel. Keep one concise disclosure on the recognition page and in legal copy; remove it as a parallel top-level decision path.

2. **Let “Get the guide” skip intent classification.** The guide is the incentive. A direct name-and-email capture will be a shorter path than asking the visitor to classify their enquiry first. Conversation routing can follow after delivery.

## What Works Well

- All 17 Home images load successfully after normal scrolling in English, Malay and Chinese; the blank regions in unscrolled full-page screenshots are expected lazy-loading behaviour, not broken assets.
- The desktop, tablet and mobile grids reorganize correctly rather than merely shrinking.
- English, Malay and Chinese preserve the same type system and component hierarchy.
- Focus, target sizing, breadcrumbs, heading order, reduced-motion handling and automated accessibility checks pass.
- The revised fee card now remains contained at every tested breakpoint.

## Remedial Pass Completed

All conversion-critical findings above were implemented and rechecked on 26 August 2026:

- Consent is now a compact, non-blocking control with complete English, Bahasa Melayu and Simplified Chinese copy.
- Apply is a direct PDF-guide capture in all three languages; the intent-classification step was removed and the form begins in the first mobile decision viewport.
- Home is consolidated into five decision blocks: offer, pathways, experience and fit, recognition, and guide capture.
- Fees lead with the standard fee and keep scholarship assessment as supporting detail.
- Recognition is explained inside the Future Ready Executive MBA journey instead of competing as a parallel offer.
- Mobile footer directories are accessible disclosure groups, and legal copy is larger and more readable.
- Footer contrast, WhatsApp landmark semantics, narrow-screen wrapping and localized type parity now pass automated accessibility checks.
- No malformed-text signatures were found in `src/` or `public/`; web-font rendering checks pass for the programme's technical terms.

Final verification: TypeScript, lint, content clarity, style-budget, SEO, production build and all 40 Playwright scenarios pass.
