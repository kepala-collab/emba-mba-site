# Future Ready EMBA site quality programme — design spec

Date: 2026-09-03. Owner: site operator (Right Dots Resources). Architect: Claude (this document). Executors: subagents or any capable model, one brief at a time.

## 1. Purpose and success criteria

Bring futurereadymba.com to a state the owner is confident spending campaign budget on. No fixed date; quality over speed. Three staged releases, each fully verified before the next starts.

Success means all of the following are true on the live site:

1. Hero is a sharp still image; no choppy video anywhere on the home page.
2. Malay and Chinese read as native Kuala Lumpur copy in the registers defined by the two research guides, and pass their self-validation checklists and the fact rules.
3. Every automated gate in `DEPLOY-HOSTINGER.md` passes on the deployed commit, including e2e and the release audit, and CI runs on every push to the working branch.
4. The application sends the full Content-Security-Policy as both a response header and the HTML meta fallback, and the public release verifier passes. CDN behaviour at the host is outside this programme.
5. Lighthouse mobile on `/home`, `/ms`, `/zh`: Performance >= 95, Accessibility 100, Best Practices 100, SEO 100; LCP <= 2.0 s lab, CLS 0.
6. All twelve PDFs, the four-email flow, `llms.txt`, schemas and sitemap are regenerated from the final copy and consistent across the three languages.
7. The programme assistant answers in Malay as well as English and Chinese.

## 2. Non-negotiable constraints

- **Facts never change.** Fee RM10,000.00; scholarship language exactly as `SEO-CONTENT-GOVERNANCE.md` and `src/lib/content.ts` define it; CMI recognition wording locked by `src/lib/__tests__/fact-parity.test.ts` (note: that test currently locks the Malay phrase `dianugerahkan dan disokong oleh CMI` and the Chinese `颁授并背书`, both of which the register guides ban; R2.1 and R2.2 update those assertions test-first, keeping the meaning `recognised by CMI`, before touching copy); not MQA-accredited; six-month programme, six training days, three sessions, applied project; HRD Corp is employer-led. Rewrites reference the constants in `content.ts`, `content-ms.ts`, `content-zh.ts`; they never retype a number or a claim.
- **Banned patterns** in `scripts/content-clarity-audit.mjs` apply to all three languages. Release 1 extends the audit to `content-ms.ts` and adds Malay and Chinese pattern lists taken from the research guides.
- **Agents self-validate.** There is no human native reviewer. Every language change is produced by a writer agent and checked by an independent reviewer agent with a fresh context, using section 7 of the relevant guide.
- **Register sources of truth:** `docs/superpowers/research/ms-register.md`, `docs/superpowers/research/zh-register.md`. Technical map: `docs/superpowers/research/site-map.md`.
- **Models:** language writing and review on Opus; technical work on Sonnet; the architect (any model) only reviews gate output. Fable is not used for execution.
- **Branch and release action:** `codex/hostinger-deployment` in `C:\Users\Acer\Documents\FutureReadyEMBA\web`. One feature branch per brief; feature branches may be pushed to GitHub at any time for CI. The host builds from `codex/hostinger-deployment`, so pushing that branch is the deployment: it is pushed only after the full gate in section 6 is green. Hostinger configuration is out of scope.
- **Out of scope:** new pages, new programmes, pricing changes, CRM integration, experiments, design-system replacement.

## 3. Release 1 — technical foundation (no copy changes)

### R1.1 Hero still image

Replace the hero video with a still image.

- Component `src/components/site/CommerceHeroMedia.tsx`: remove `<video>`, the play/pause control, the `.is-ready` readiness effect and all `loadeddata/canplay` handling. Render one `next/image` with `fill`, `priority`, `fetchPriority="high"`, `quality={82}`, `sizes="(max-width: 1080px) 100vw, 46vw"`, `alt` from existing props. Keep the editorial frame, the reduced-motion behaviour (now trivially satisfied) and the 640 px mobile layout.
- Asset: `public/media/future-commerce/hero-leader.webp` (source master kept as `hero-leader-master.png` outside `public/`, in `assets/hero/`). Owner supplies a still >= 2560x1440 when available. **Stopgap:** extract the sharpest frame from `future-ready-emba-leadership-hero-v8.mp4` at native 1280x720, encode WebP quality 88 with `scripts/optimize-image.mjs`; the component and gates must accept the higher-resolution replacement with no code change.
- `next.config.ts`: add `images.formats = ["image/avif", "image/webp"]`; delete the immutable-cache header block for the mp4; add one for `/media/future-commerce/hero-leader.webp`.
- Delete: `future-ready-emba-leadership-hero-v8.mp4`, `hero-leader-poster.webp` (superseded), `public/media/home-graduation-loop.mp4` (orphan), `scripts/compress-hero-video.mjs`, the `media:compress-hero` npm script, the video CSS rules in `src/app/globals.css` (lines ~1285, ~1478, ~1516-1521 as mapped).
- `scripts/release-audit.mjs`: replace the video check (path, 1 MB budget, faststart parsing) with an image check: hero asset exists, width >= 1280, height >= 720, file <= 400 KB.
- e2e `e2e/site-smoke.spec.ts`: rewrite tests at 450, 493, 842, 861, 937, 956 to assert the image (`img` inside `.commerce-hero-media` with the expected `src` path prefix, `fetchpriority="high"`, visible at 320 and 1440, no `video` element). `ProgrammeIntroduction.tsx` is untouched. The test at 493 asserts the hero video sources despite its title, so it is rewritten with the others.
- Acceptance: `npm run build && npm run audit:release && npm run test:e2e` pass; Lighthouse mobile LCP on `/home` <= 2.0 s with the LCP element being the hero image; `/home` total transfer <= 600 KB excluding fonts.

### R1.2 Gate repair and CI

- `scripts/release-audit.mjs`: done in R1.1.
- `scripts/content-clarity-audit.mjs`: add `src/lib/content-ms.ts` to the file list; add a Malay pattern list (from ms-register.md section 7, at minimum: `biasanya`, `disokong` when near CMI, `projek aplikasi`, `pengurus bekerja`, `perbualan program`, `program awam`, `laluan lanjutan`) and a Chinese list (from zh-register.md section 7, at minimum: `班次`, `参与者`, `诚实边界`, `颁授并背书`, `身份启用`, `折扣码`, `免费获取`, `渠道`, `创始人`, `首席执行官`, `营销`). The new Malay and Chinese patterns report as warnings (exit 0) in Release 1 via a `--strict-locales` flag that is off; the last task of Release 2 turns the flag on in `package.json` so they become errors.
- `.github/workflows/quality.yml`: add `push: branches: [main, "codex/**"]`.
- Fix the Malay intake table rendering English month abbreviations: the formatting lives in `src/components/site/IntakeSchedule.tsx` (not the page file), which must format dates per locale (`ms-MY` month names, `zh` numerals) via one helper in `src/lib/intakes.ts`. This is a rendering bug, not copy, so it belongs here.
- Acceptance: full checklist green locally; a push to the branch triggers CI and it passes.

### R1.3 Security hygiene (application side only)

- Host CDN configuration is out of scope. The application already sends the full CSP header plus the meta fallback; keep both and keep `verify-public-release.mjs` passing in fallback mode.
- `public/.well-known/security.txt`: `Preferred-Languages: en, ms, zh`; extend `Expires` by one year at each release.
- Add a unit test that `contentSecurityPolicyHeader` contains `default-src 'self'`, `object-src 'none'`, `form-action 'self'`, `frame-ancestors 'none'`, and that the meta variant omits only `frame-ancestors`.

### R1.4 AI crawler policy and discoverability structure

- `src/app/robots.ts`: explicit groups. Allow (with `Disallow: /api/`): `*`, `Googlebot`, `Bingbot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Extended`, `Applebot`, `DuckAssistBot`. Disallow all: `GPTBot`, `CCBot`, `Bytespider`, `Meta-ExternalAgent`, `Amazonbot`, `Applebot-Extended`, `cohere-ai`, `Diffbot`, `omgili`, `Timpibot`, `ImagesiftBot`, `anthropic-ai`. Keep `Sitemap` and `Host`.
- `src/app/llms.txt/route.ts`: derive the source lists from `EN_ROUTES` and `LOCALE_PAIRS` in `src/lib/locale-routes.ts` (37 routes, five insight articles) rather than hand-listing, so Malay and Chinese mirrors, `/insights`, `/resources`, `/apply` and `/diagnostic` are covered automatically. Add `src/app/llms-full.txt/route.ts` (force-static) that renders the same 31 verified facts used by `src/lib/chat-knowledge.ts`, in English, Malay and Chinese, from the content constants. Copy text is placeholder-neutral until Release 3 refreshes it.
- `src/app/manifest.ts`: unchanged.
- Acceptance: `/robots.txt`, `/llms.txt`, `/llms-full.txt` build and are listed in the release audit's route check; a unit test asserts every `EN_ROUTES` public route appears in `llms.txt` for all three locales.

### R1.5 PDF pipeline re-platform (structure only)

- One generator: `scripts/pdf/build.py` replacing `generate-lead-magnet-pdfs.py` and `generate-working-manager-guides.py`. Document definitions move to `scripts/pdf/documents/*.py` (one file per document, three language dicts each), content pulled from a single `scripts/pdf/copy/<lang>.json` so Release 3 can regenerate from final copy.
- Fonts bundled under `scripts/pdf/fonts/` (OFL): Noto Serif and Noto Sans for Latin, Noto Sans SC for Chinese. No `C:/Windows/Fonts`.
- Deterministic output: ReportLab `invariant=1`, fixed metadata, so CI can regenerate and `git diff --exit-code public/downloads` proves the committed PDFs match source.
- npm scripts `pdfs:build` and `pdfs:check`; CI runs `pdfs:check` after `npm ci` (Python 3.12 + `reportlab`, `pypdfium2` via `pip install -r scripts/pdf/requirements.txt`).
- Acceptance: twelve PDFs regenerate byte-identical on a second run; Chinese glyphs render (proof PNGs via `render-lead-magnet-pdfs.py`); page counts unchanged.

### R1.6 Performance and fonts

- Keep the three `next/font` families. Add explicit CJK fallback stacks for `lang="zh-Hans-MY"` in `globals.css`: `"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans CJK SC","Noto Sans SC",sans-serif` for body and headings.
- Measure and record in the brief output: gzipped CSS size, JS per route, LCP/CLS/INP for `/home`, `/ms`, `/zh`, `/fees`, `/apply` at Moto G4 profile. Fix anything failing section 1 item 5. No refactor of `globals.css` beyond removing dead video rules.

## 4. Release 2 — language and UI

### R2.0 Method (applies to R2.1-R2.3)

Unit of work: one page (or one shared content file) in one language.

1. **Writer** (Opus): reads the guide's sections 3, 4, 5 and the audit examples in section 6; reads `SEO-CONTENT-GOVERNANCE.md`; reads the page's English source for meaning; rewrites the target file. Facts are imported constants, never retyped. Headline length limits: Malay hero headline <= 9 words, Chinese <= 14 characters, body sentences per the guide's per-page table.
2. **Reviewer** (Opus, fresh context): runs section 7 of the guide as a checklist, runs `npm run audit:content`, `npm test` (fact parity), and greps the banned lists. Returns pass, or fail with line references. Maximum two writer/reviewer loops; a third failure escalates to the architect.
3. **Page order:** `content-<lang>.ts` shared strings; then `/`, `/executive-mba`, `/fees`, `/apply`, `/intakes`, `/faq`, `/hrd-corp-claimable`, `/chartered-manager-malaysia`, `/executive-mba-malaysia`, `/executive-mba-vs-mba`, `/mba-for-working-professionals`, `/mba-for-sme-owners`, `/mba-for-entrepreneurs`, `/ai-executive-mba`, `/curriculum`, `/how-it-works`, `/faculty`, `/about`, `/asian-business-consulting`, `/resources` and `/resources/advancement-brief`, `/insights` and its four articles, `/lp/google`, `/lp/meta`, `/contact`, `/diagnostic`, `/corporate-training`, `/online-executive-mba`, `/programmes/shift-hr`, `/privacy`, `/terms`, `/unsubscribed`, not-found.
4. Metadata (title, description, OG) and JSON-LD text fields are rewritten with the page.

### R2.1 Malay rewrite

Register per `ms-register.md` section 3. Key rules: official English terms kept in English in italics inside brackets on first use; HRD Corp and MQA verbs as the guide lists; `diiktiraf/diperakukan` for recognition, never `disokong`; RM with no space and comma thousands; Malay month names; `profesional yang bekerja` or `golongan pengurus dan eksekutif` instead of `pengurus bekerja` (this changes the Malay meta title and the Malay guide PDF title, so the PDF filename `panduan-pengurus-bekerja-2026.pdf` is kept as a stable URL but its displayed title changes in Release 3); CTA family `sesi perbincangan program`; warmth from `anda/kita/kami`, spoken connectives, long-then-short rhythm, no exclamation marks, no `-lah/nak/tak`.

### R2.2 Chinese rewrite

Register per `zh-register.md` section 3. Key rules: at most one decorative four-character phrase or parallel structure per heading and two per paragraph, none on fee or recognition pages; numbers before adjectives in ledes; Malaysian lexis (`令吉, 大专, 报读, 进修, 首席执行员, 管道, 数码, 行销`) and never the mainland forms listed in the guide; `学员` for participant, `届/班` for cohort; `认证` reserved for MQA, `认可` for CMI; EMBA glossed once as 高级工商管理硕士 then Latin; full-width punctuation and pangu spacing as already implemented; `免费索取` not `免费获取`; no urgency phrases.

### R2.3 English tightening

Apply the clarity rules already in the audit to every English page; align CTA family and headline lengths with the new Malay and Chinese so the three sites feel like one product. No fact or positioning changes.

### R2.4 Malay assistant

- `src/lib/chat-knowledge.ts`: `ChatLanguage = "en" | "zh" | "ms"`; Malay instructions block with a 150-word cap; facts rendered from `content-ms.ts` constants.
- `src/app/api/chat/route.ts` currently coerces any non-`zh` language to `en`; accept `ms`. `src/components/site/ProgrammeAssistant.tsx` already carries Malay UI strings and posts `lang: "ms"`, so it needs verification only.
- Tests: extend the chat unit coverage for `ms`; e2e "assistant explicitly executes Turnstile and returns an answer" runs on `/ms` too.

### R2.5 UI and UX pass (after copy)

- Breakpoints 320, 375, 390, 768, 1024, 1440. Check: no overflow with the longer Malay strings, CJK line-height and heading wrap, form labels and errors in all languages, CTA hierarchy (one primary per view), focus states, skip links, breadcrumb wrap, table regions, consent banner height on 320.
- Tooling: existing Playwright suite plus axe; add assertions for the failures found. Fix within the existing design system; no new components unless a defect cannot be fixed otherwise.
- Acceptance: axe clean on the priority pages; style-budget audit within limits; e2e green.

## 5. Release 3 — derived artefacts (from final copy)

### R3.1 Email flow

- Rewrite the four templates in all three languages in `src/lib/lead-email.ts` and `src/lib/nurture-email.ts` using the guides' email register rows.
- The nine `future-ready-*` PDFs are the approved follow-up library named in `HANDOFF.md`; their text is the previously approved rewrite and is the baseline, not disposable. Sequence: day 0 acknowledgement with the guide attached (unchanged mechanics); day 3 links the decision guide (`/downloads/future-ready-decision-guide[-ms|-zh].pdf`); day 7 links the employer funding brief and the cohort view; day 14 links the scholarship eligibility brief and the no-commitment conversation. Links, not attachments, on nurture mail. Filenames never change.
- Reliability: one retry after 60 minutes for a failed nurture send (`lead_nurture_log` gains `attempt_count`, migration `010`); keep the 45-day cutoff.
- Tests: `nurture-email.test.ts` extended for the links and the three languages; a dry-run against staging data; one real send per language to the operator mailbox, checked for subject, attachment name, unsubscribe link, plain-text part.

### R3.2 PDFs

- Seed `scripts/pdf/copy/<lang>.json` from the text already in the current generators (the previously approved rewrites); then run the writer/reviewer register check on that text as for any page, preserving structure and facts. Regenerate all twelve after R2 copy is final; Malay guide display title changes per R2.1; filenames unchanged.
- Reviewer pass on each PDF's text with the language checklist; proof PNGs inspected for glyph or layout faults.

### R3.3 SEO, schemas, sitemap

- `src/app/sitemap.ts` derives entries from `EN_ROUTES` and `LOCALE_PAIRS`; priority and changefreq by route class; `lastModified` from a per-route map updated by the release that changes the page. Unit test: every indexable route appears exactly once per locale; no noindex route appears.
- Schema parity: `Course`/`CourseInstance` on `/ms/intakes` and `/zh/intakes`; `Person` on `/ms/about`, `/zh/about`; `ItemList`+`Person` on Malay and Chinese faculty pages. Text fields from the final copy.
- `src/app/opengraph-image/route.tsx`: bundle a Noto Sans SC subset so Chinese titles render; Malay uses the Latin font.
- After deployment: submit changed URLs via `/api/internal/indexnow`.

### R3.4 AI discoverability content

- `llms.txt` and `llms-full.txt` text refreshed from the final copy in all three languages; positioning sentence and interpretation bullets mirror `chat-knowledge.ts` exactly (one source function shared by both).

## 6. Release gate, deployment, rollback

Gate, run on the release commit with the CI env and then on the deployed site:

```
npm ci && npm run lint && npm run typecheck && npm test && npm run audit:content && npm run audit:styles && npm run validate:env:contract && npm audit --omit=dev --audit-level=high && npm run build && npm run audit:seo && npm run audit:release && npm run test:e2e && npm run pdfs:check
npm run release:sync && npm run release:check
```

Then: commit on the feature branch, push it, confirm CI green, merge into `codex/hostinger-deployment` and push (this is the deployment). After the host build completes: `node scripts/verify-public-release.mjs <id>`, Lighthouse mobile on `/home`, `/ms`, `/zh`, and one test lead per language checked in the `leads` table and the acknowledgement mailbox. `main` is fast-forwarded from `codex/hostinger-deployment` after each release.

Rollback: redeploy the previous release archive (kept in `deploy/` with its release id); no migrations are destructive (010 adds a nullable column).

## 7. Execution model

- Each brief lives in `docs/superpowers/plans/` as `R<release>.<n>-<slug>.md`, self-contained: goal, inputs, files, steps, acceptance commands, out of scope. A brief must be runnable by a model that has never seen this conversation.
- Dispatch: one subagent per brief; technical briefs on Sonnet, language briefs on Opus with a second Opus reviewer. Independent briefs within a release run in parallel on separate branches; conflicting ones (anything touching `globals.css`, `site-smoke.spec.ts`, `release-audit.mjs`) run in sequence.
- Architect review is gate output only: the executor pastes the command results; the architect reads failures, not diffs.
- Owner tasks: supply a high-resolution hero still (optional, any time). Host environment (secrets, crons, CDN) is assumed configured and is out of scope; Release 3's email brief verifies the nurture cron responds before relying on it.

## 8. Assumptions recorded at approval

1. No high-resolution hero still is available; the stopgap frame ships in Release 1 and is swapped when a source arrives.
2. Crawler policy as in R1.4.
3. The nine `future-ready-*` PDFs are the approved follow-up library (owner confirmed); they are linked from the nurture sequence as in R3.1 and their existing text is the baseline for R3.2.
4. Deployment is a push of `codex/hostinger-deployment` to GitHub (owner confirmed); no Hostinger work is in scope.
