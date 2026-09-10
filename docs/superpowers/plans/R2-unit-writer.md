# R2 unit writer brief (one unit = one page or component set, all three languages)

You are the writer for ONE unit of the Release 2 copy rewrite. You write English first from the messaging spec, then transcreate Malay and Chinese from your new English. An independent reviewer per language checks your work afterwards; write so that it passes.

## Inputs, read in this order (use Grep for headings; read large files in ranges)

1. `docs/superpowers/specs/2026-09-04-messaging-architecture.md`: sections 2, 3, 4 (rules and the instead-of/write table), 8 (the archetype for your page type), 10 (vocabulary and naming), 11 (fact tokens), 12 (review checklist), 13 (transcreation notes), 14 (owner decisions; they win).
2. `docs/superpowers/research/owner-vocabulary-rules.md` (short; overrides everything on vocabulary and CTA verbs).
3. `SEO-CONTENT-GOVERNANCE.md` and `scripts/content-clarity-audit.mjs` (banned patterns; run the audit before you finish).
4. `src/lib/content.ts`, `src/lib/content-ms.ts`, `src/lib/content-zh.ts`: the fact and label constants. Copy interpolates constants; it never retypes a number, a fee, a date, a claim about CMI, MQA, HRD Corp or the scholarship.
5. `docs/superpowers/research/ms-register.md` sections 3, 5, 7 and `zh-register.md` sections 3, 5, 7, plus the high-confidence items (Grep "high") in `ms-register-audit-rules.json`, `ms-register-audit-checklist.json`, `zh-register-audit.json`. Where an audit contradicts a guide, the audit wins.
6. `docs/superpowers/research/messaging-map-digest.json`: Grep for your route to see the reader's opportunities and risks for this page.
7. The unit's files, listed in the dispatch message, in all three language trees. The Malay tree is `src/app/(ms)/ms/...`, the Chinese tree `src/app/(zh)/zh/...`; shared components carry per-language blocks in one file.

## Rules that decide pass or fail

- Meaning: every page opens on the change of experience (from-state to to-state as activities), then the means as facts from constants, then the terms with who decides. Hope is what the participant does during the six months, never what happens afterwards. No verdict on the reader. No disparagement of any other route or provider. No scarcity. "Free" never leads; "Free PDF" at most once, in fine print.
- Facts: identical in all three languages and sourced from constants. Wherever the certificate, CMI or the word progress appears, the professional-relevance sentence renders in the same block. The not-an-MQA-degree boundary sits in the same viewport as any CMI claim.
- English: headline patterns from the archetype; sentences under 20 words in heroes; the naming decisions (the 2026 programme guide, Programme fit check, the CTA labels from `CTA_LABELS`).
- Malay: "anda"; warm but formal; no exclamation marks; no "-lah/nak/tak"; RM with no space and comma thousands; DBP spelling ("Sept", "e-mel", "dalam talian"); official English terms in italics inside brackets on first use; owner pattern "kepimpinan berkhidmat (servant leadership)"; "kemajuan" not "progres"; "Jadualkan sesi perbincangan program"; never "laluan pilihan", "perbualan program", "pengurus bekerja" as a calque, "projek aplikasi"; Malay headlines at most 9 words; two short sentences beat one long one.
- Chinese: Malaysian Simplified Chinese in the editorial register of the dailies' education sections; at most one decorative four-character phrase per heading, two per paragraph, none on fee or recognition lines; numbers before adjectives; 学员, 届, 报读, 进修, 令吉; 认可 for CMI, 认证 only for MQA; never 背书, 班次, 参与者, 渠道, 创始人, 首席执行官, 营销, 免费获取; full-width punctuation; pangu spacing between Chinese and Latin or digits; no sentence-initial 它 or 这; owner pattern "仆人式领导 (servant leadership)"; headlines at most 14 characters.
- Metadata: rewrite the page's title, description and any JSON-LD text fields in the same pass; canonical and hreflang untouched.
- Tests: if a test locks a string you must change, change the test first in the same unit, keeping the fact's meaning.

## Process

1. Rewrite the English file(s). 2. Transcreate Malay from your English. 3. Transcreate Chinese from your English. 4. Run `npm run typecheck` and `node scripts/content-clarity-audit.mjs` from the repo root; fix every failure; warnings for your files must be zero. 5. Run the section-7 self-checks of both guides against your own Malay and Chinese and fix what fails. 6. Do NOT commit and do NOT run `npm run build` or e2e; other writers share the checkout. 7. Write a hand-back JSON to `docs/superpowers/plans/handbacks/R2-<unit>-writer.json` with: unit, files changed, the new H1 and lede in each language, constants used, audit and typecheck exit codes, self-check results, and anything you left for the reviewer.

Reply in at most 8 lines: unit, files changed, exit codes, hand-back path.
