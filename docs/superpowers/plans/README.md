# Future Ready EMBA — site quality programme, execution index

Spec: [`docs/superpowers/specs/2026-09-03-site-quality-programme-design.md`](../specs/2026-09-03-site-quality-programme-design.md). The spec is authoritative; every brief here implements one of its sections.

Research the briefs depend on: [`site-map.md`](../research/site-map.md) (technical map), [`ms-register.md`](../research/ms-register.md), [`zh-register.md`](../research/zh-register.md).

Repo: `C:\Users\Acer\Documents\FutureReadyEMBA\web`, branch `codex/hostinger-deployment`.

---

## Release order

Three releases. **Each release is fully verified and deployed before the next starts.** No brief from Release 2 begins while a Release 1 brief is unmerged.

### Release 1 — technical foundation (no copy changes)

| Brief | Owner model | Depends on |
|---|---|---|
| [`R1.1-hero-still-image.md`](R1.1-hero-still-image.md) | Sonnet | — |
| [`R1.2-gate-repair-and-ci.md`](R1.2-gate-repair-and-ci.md) | Sonnet | — |
| [`R1.3-security-hygiene.md`](R1.3-security-hygiene.md) | Sonnet | — |
| [`R1.4-ai-crawler-policy-and-llms.md`](R1.4-ai-crawler-policy-and-llms.md) | Sonnet | — |
| [`R1.5-pdf-pipeline-replatform.md`](R1.5-pdf-pipeline-replatform.md) | Sonnet | — |
| [`R1.6-performance-and-fonts.md`](R1.6-performance-and-fonts.md) | Sonnet | **R1.1 merged** |

### Release 2 — language and UI

| Brief | Owner model | Depends on |
|---|---|---|
| [`R2.1-malay-rewrite.md`](R2.1-malay-rewrite.md) | Opus writer + Opus reviewer | Release 1 complete |
| [`R2.2-chinese-rewrite.md`](R2.2-chinese-rewrite.md) | Opus writer + Opus reviewer | Release 1 complete |
| [`R2.3-english-tightening.md`](R2.3-english-tightening.md) | Opus writer + Opus reviewer | the matching R2.1 and R2.2 unit merged |
| [`R2.4-malay-assistant.md`](R2.4-malay-assistant.md) | Sonnet + Opus reviewer for the Malay string | R2.1 unit 2 merged |
| [`R2.5-ui-ux-pass.md`](R2.5-ui-ux-pass.md) | Sonnet | **all** R2.1–R2.4 units merged |

R2.3 unit 38 (`--strict-locales` on in `package.json`) is the last task of Release 2 and runs alone, after every other language unit.

### Release 3 — derived artefacts (from final copy)

| Brief | Owner model | Depends on |
|---|---|---|
| [`R3.1-email-flow.md`](R3.1-email-flow.md) | Sonnet + Opus writer/reviewer per language | Release 2 complete |
| [`R3.2-pdf-regeneration.md`](R3.2-pdf-regeneration.md) | Opus writer/reviewer + Sonnet | Release 2 complete, R1.5 merged |
| [`R3.3-seo-schemas-sitemap.md`](R3.3-seo-schemas-sitemap.md) | Sonnet | Release 2 complete |
| [`R3.4-ai-discoverability-content.md`](R3.4-ai-discoverability-content.md) | Sonnet + Opus writer/reviewer per language | **R3.1, R3.2, R3.3 merged** |

---

## Parallel and sequential

Spec section 7: independent briefs within a release run in parallel on separate branches; anything touching the same file runs in sequence.

**Contended files.** A brief or unit touching any of these is sequential against every other brief or unit touching the same file:

- `src/app/globals.css` — R1.1 (delete video rules), R1.6 (CJK fallbacks), R2.5 (layout fixes)
- `e2e/site-smoke.spec.ts` — R1.1, R2.4, R2.5
- `scripts/release-audit.mjs` — R1.1 only
- `package.json` — R1.1 (remove `media:compress-hero`), R1.5 (add `pdfs:*`), R2.3 unit 38 (`--strict-locales`)
- `.github/workflows/quality.yml` — R1.2 (push trigger), R1.5 (Python steps)
- `src/lib/content.ts` — R2.1 unit 1, R2.2 unit 1, R2.3 unit 1
- `src/lib/__tests__/fact-parity.test.ts` — R2.1 unit 1 and R2.2 unit 1 **only**
- `src/lib/chat-knowledge.ts` — R1.4 (extract fact function), R2.4 (Malay), R3.4 unit 1 (shared bullets)
- `src/app/llms.txt/route.ts` and `llms-full.txt/route.ts` — R1.4, then R3.4 units 2/3/4
- The sixteen shared locale components (`FutureCommerceHome`, `Header`, `Footer`, `LeadForm`, `IntakeSchedule`, `GuideApplyPage`, `ExecutiveDiagnostic`, `CmiProgressionChart`, `ProgrammeComparison`, `CtaSection`, `RouteBreadcrumbs`, `ProgrammeMarks`, `WhatsAppFloat`, `ArticleAttribution`, `YouTubeFilm`, `ProgrammeAssistant`) — the matching R2.1 / R2.2 / R2.3 units are sequential with each other
- `scripts/pdf/copy/<lang>.json` — the four R3.2 units sharing one language file are sequential

**May run in parallel.**

- Release 1: **R1.1, R1.2, R1.3, R1.4, R1.5** all at once — R1.2 does not touch `release-audit.mjs`, and R1.1 and R1.5 touch different `package.json` lines (merge order decides; resolve the trivial conflict). **R1.6 waits for R1.1.**
- Release 2: R2.1 and R2.2 units **5–37** run in parallel with each other *except* on the shared components listed above. Within one language, units 5–37 are mutually independent. R2.4 runs in parallel with R2.1/R2.2 units 5+ once R2.1 unit 2 has merged.
- Release 3: **R3.1, R3.2, R3.3** in parallel. R3.4 waits for all three.

**Strictly sequential chains.**

1. R2.1 units 1 → 2 → 3 → 4, before any R2.1 unit 5+.
2. R2.2 units 1 → 2 → 3 → 4, before any R2.2 unit 5+.
3. R2.3 unit N waits for R2.1 unit N and R2.2 unit N.
4. R2.5 after everything else in Release 2 except R2.3 unit 38; then R2.3 unit 38 last.
5. R3.4 unit 1 → 2 → 3 → 4.

---

## Dispatch prompt template

Launch one subagent per brief (or per unit, for the language briefs). Use exactly this, substituting the filename:

```
Read docs/superpowers/plans/<file> and execute it end to end; report using its Hand-back section.
```

For a language brief, name the unit:

```
Read docs/superpowers/plans/R2.1-malay-rewrite.md and execute unit 6 (Fees) end to end; report using its Hand-back section.
```

For a reviewer pass:

```
Read docs/superpowers/plans/R2.1-malay-rewrite.md, then review branch feat/r2-1-malay-fees against its Reviewer steps and Acceptance section. You have no writer context; read the diff, not the conversation. Return PASS, or FAIL with file:line references.
```

Model per brief is stated in each brief's **Model and role** section. Technical briefs are Sonnet; language writing and review are Opus, with the reviewer in a fresh context. Fable is not used for execution.

Architect review is **gate output only**: the executor pastes command results, the architect reads failures, not diffs.

---

## Release gate

Run on the release commit with the CI environment, then again on the deployed site. Spec section 6, verbatim:

```
npm ci && npm run lint && npm run typecheck && npm test && npm run audit:content && npm run audit:styles && npm run validate:env:contract && npm audit --omit=dev --audit-level=high && npm run build && npm run audit:seo && npm run audit:release && npm run test:e2e && npm run pdfs:check
npm run release:sync && npm run release:check
```

`npm run pdfs:check` exists only after R1.5 merges. Before then, drop it from the chain and say so in the hand-back.

**Then:** commit on the feature branch, push it, confirm CI is green, merge into `codex/hostinger-deployment` and push — **that push is the deployment**. After the host build completes: `node scripts/verify-public-release.mjs <id>`, Lighthouse mobile on `/home`, `/ms`, `/zh`, and one test lead per language checked in the `leads` table and the acknowledgement mailbox. `main` is fast-forwarded from `codex/hostinger-deployment` after each release.

**Rollback:** redeploy the previous release archive from `deploy/` with its release id. No migration is destructive — `010` adds one nullable column.

---

## Owner tasks

From spec section 7 and section 8.

1. **Supply a high-resolution hero still** (>= 2560x1440), optional, at any time. R1.1 ships a stopgap frame extracted from the retired video; the component and the gates accept a higher-resolution replacement at `public/media/future-commerce/hero-leader.webp` **with no code change**. Drop the new master into `assets/hero/hero-leader-master.png`, re-run `npm run media:optimize-image`, and re-run the gate.
2. **Host environment is assumed configured and is out of scope** — secrets, crons and CDN. Release 3's email brief (R3.1) verifies the nurture cron responds before relying on it, but sets nothing.
3. **Deployment is a push of `codex/hostinger-deployment`** to GitHub, done only after the gate above is green. No Hostinger panel work is in scope for this programme.

---

## Known spec-versus-code contradictions

Recorded during brief authoring, verified against the code at commit `d033d24`. Each is handled inside the brief that owns it.

1. **`fact-parity.test.ts:49-50` locks the exact phrases the register guides ban** — `dianugerahkan dan disokong oleh CMI` and `颁授并背书`. Spec section 2 calls this test the lock on CMI wording, while R2.1 and R2.2 require those phrases gone. R2.1 unit 1 and R2.2 unit 1 update the assertions, test first, in the same commit. No other unit may touch that file.
2. **The Malay intake date bug is not in the page the spec names.** `src/app/(ms)/ms/intakes/page.tsx:35` only renders `<IntakeSchedule lang="ms" />`. The English month strings come from `src/components/site/IntakeSchedule.tsx` lines 128–130, 134, 169–171 and 173. R1.2 fixes it there.
3. **`ProgrammeAssistant.tsx` already supports Malay.** `type Lang` includes `"ms"`, `COPY.ms` exists at line 57, and the component already posts `lang: "ms"`. The real gap is `chat-knowledge.ts` (`ChatLanguage = "en" | "zh"`) and `src/app/api/chat/route.ts:198`, which coerces anything not `"zh"` to `"en"`. R2.4 is narrower than the spec implies.
4. **Route counts drift.** `EN_ROUTES` has **37** entries, not the 36 in the site map, and there are **five** insight articles, not the four in the spec's R2.0 page order. R1.4, R2.x and R3.3 derive route lists programmatically instead of hand-copying.
5. **The e2e test at line 493 is a hero test, not an intro test.** The spec says it "asserts the intro surface only"; it actually locates `.commerce-hero-media` and asserts `video source` `src` values at lines 495–508. R1.1 rewrites it as a hero-image test alongside the other five.
