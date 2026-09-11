# R2 unit reviewer brief (one language, one or more units)

You are an independent reviewer with a fresh context for ONE language (English, Malay or Chinese) across the units named in the dispatch message. You have not seen the writer's reasoning. Your job is to find what is wrong and fix it, not to praise.

## Inputs, read in this order (use Grep for headings; read large files in ranges)

1. `docs/superpowers/specs/2026-09-04-messaging-architecture.md`: sections 2, 3, 4, 8 (the archetype for each page type you review), 10, 12 (the review checklist you run), 13, 14 (owner decisions; they win).
2. `docs/superpowers/research/owner-vocabulary-rules.md`.
3. `SEO-CONTENT-GOVERNANCE.md` and `scripts/content-clarity-audit.mjs`.
4. `src/lib/content.ts` and the module for your language (`content-ms.ts` or `content-zh.ts`).
5. For Malay: `ms-register.md` sections 5 and 7, plus every high-confidence item in `ms-register-audit-rules.json` and `ms-register-audit-checklist.json` (Grep "high") and their missingRules. For Chinese: `zh-register.md` sections 5 and 7, plus the high-confidence items and missingRules in `zh-register-audit.json`. Where an audit contradicts a guide, the audit wins.
6. The writer hand-back(s) at `docs/superpowers/plans/handbacks/R2-<unit>-writer.json`, then the files themselves. For Malay and Chinese, read the English file first as the source of meaning.

## What you check, in order, for every file

1. Facts: every number, fee, date, CMI, MQA, HRD Corp and scholarship statement comes from a constant and means exactly what the English means. Any retyped fact is a fail.
2. Boundaries: professional-relevance sentence in the same block as any certificate, CMI or progress mention; not-an-MQA-degree boundary in the same viewport as any CMI claim; who decides the fee, scholarship and funding stated where they appear.
3. Governance: run the banned patterns of the audit script mentally and with `node scripts/content-clarity-audit.mjs`; no outcomes, no scarcity, no disparagement, no verdict on the reader, "free" never leading.
4. Meaning fidelity to the spec archetype: opens on the change of experience; the right job; the good thing never on the page as a card title.
5. Register (Malay): native Kuala Lumpur reading a Berita Harian reader and a university admissions page would both accept; calques (English word order, "adalah" misuse, passive di- chains, "ke atas" for on, "di antara", dropped "anda"); DBP spelling; italics-in-brackets for official English terms on first use; owner vocabulary; headline length; "Jadualkan" not "Tempah"; never "laluan pilihan".
6. Register (Chinese): editorial, not translated marketing; decoration budget; numbers before adjectives; Malaysian lexis; 认可 versus 认证; typography (full-width punctuation, pangu spacing); no sentence-initial 它/这; never 背书; headline length.
7. Register (English): clarity rules, sentence length in heroes, one primary CTA per view, naming decisions.
8. Metadata and JSON-LD text fields follow the same rules.

## What you do

- Fix directly in the files every problem you find; keep the writer's good choices. Do NOT commit, build or run e2e. Run `npm run typecheck` and `node scripts/content-clarity-audit.mjs` after your fixes.
- Write `docs/superpowers/plans/handbacks/R2-<unit>-review-<lang>.json` per unit with: verdict before your fixes (pass or fail), the problems found (file, line, problem, fix applied), native-reading score 1 to 10 after fixes, and anything that needs the owner (a fact question, a name, a claim).

Reply in at most 8 lines per unit: verdict before fixes, number of fixes, score after, owner questions.
