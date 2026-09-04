# Future Ready EMBA — technical map (branch `codex/hostinger-deployment`, commit d033d24, mapped 2026-09-03)

Repo: C:\Users\Acer\Documents\FutureReadyEMBA\web

## 1. Hero media pipeline

Component: `src/components/site/CommerceHeroMedia.tsx` (client component, 141 lines)
- Poster: `<Image src="/media/future-commerce/hero-leader-poster.webp" fill loading="eager" fetchPriority="high" quality={88} sizes="(max-width: 1080px) 100vw, 46vw">` lines 82-90. File: 1280x720, 62,994 bytes.
- Video element lines 91-114: `autoPlay muted loop playsInline preload="auto" aria-hidden="true" tabIndex={-1}`. No `poster` attribute; the poster is a separate stacked `<Image>` behind it (z-index 0 vs video z-index 1).
- Single `<source>` lines 109-113: `/media/future-commerce/future-ready-emba-leadership-hero-v8.mp4`, `type="video/mp4"`, `media="(min-width: 641px) and (prefers-reduced-motion: no-preference)"`. No WebM fallback.
- Readiness: `useEffect` lines 30-62 attaches loadeddata/canplay/playing/pause/ended/error; sets `.is-ready` which flips opacity 0 -> 1 (`globals.css:1285-1286`).
- Play/pause button lines 122-130 (`.commerce-media-control`).

Video file `public/media/future-commerce/future-ready-emba-leadership-hero-v8.mp4`: 1,896,628 bytes, 1280x720, H.264 High@4.0, yuv420p, 24 fps CFR, ~950 kbps, 382 frames, 15.917 s, no audio.

Orphan asset: `public/media/home-graduation-loop.mp4` (394,623 bytes, 854x480, 6.0 s). Zero references in the repo.

Reduced-motion / mobile gating (`src/app/globals.css`): line 1478 inside `@media(max-width:640px)` hides `.commerce-hero-media>video`; lines 1516-1521 `@media(prefers-reduced-motion:reduce)` hide video and control. The `media` attribute on `<source>` stops the fetch.

Generation scripts:
- `scripts/compress-hero-video.mjs` (131 lines): trim 0..3.6 s, setpts/1.10, minterpolate to 30 fps (mci/aobmc/bidir), ping-pong loop; libx264 preset slow, tune film, crf 26, high@4.0, 30 fps CFR, g 60, faststart; VP9 pass crf 37. The shipped v8 (24 fps, 15.9 s) was NOT produced by this script's current settings.
- `scripts/optimize-image.mjs` (69 lines): sharp -> WebP, quality 82 default, effort 6, optional resize + unsharp.
- npm scripts `media:compress-hero`, `media:optimize-image`.

next.config.ts image settings (118-126): qualities [75,82,88], deviceSizes [320..1920], dangerouslyAllowSVG, contentDispositionType attachment, per-image CSP sandbox.

Hero filename references (three stale):
| Location | Name | Exists |
|---|---|---|
| CommerceHeroMedia.tsx:110 | hero-v8.mp4 | yes |
| next.config.ts:102 (immutable cache header) | hero-v8.mp4 | yes |
| scripts/release-audit.mjs:27-35 | hero-v7.mp4 | NO (ENOENT; audit:release cannot pass) |
| e2e/site-smoke.spec.ts:477,481 / 500,504 / 848,852 | hero-v4.webm + .mp4 | NO |

`release-audit.mjs:49-52` also enforces hero video <= 1,000,000 bytes and moov-before-mdat. v8 is 1.90 MB and would fail the size gate even after the path fix. E2E 477/500/848 assert source[0]=webm, source[1]=mp4 but the component renders one mp4 source. E2E 861-878 asserts duration >= 7.9 s.

`ProgrammeIntroduction.tsx` (188 lines) is a separate media surface: `VIDEO_URL = NEXT_PUBLIC_PROGRAMME_VIDEO_URL`, `CAPTIONS_URL = NEXT_PUBLIC_PROGRAMME_VIDEO_CAPTIONS_URL`; unset -> text `.film-placeholder`. Modal with focus trap, `controls preload="metadata"`, poster `/brand/working-scholar-hero.webp`. Milestones 0/25/50/75/100 -> `programme_video_start|progress` events.

## 2. Lead and email flow

Submission `src/app/api/lead/route.ts` (558 lines, nodejs runtime). Gate order: in-memory IP limit (5 per 10 min) -> origin check -> content-type json -> body <= 16 KB -> honeypot `website` (silent ok) -> parseLead -> Turnstile action `lead-submit` (unavailable -> 503 security_unavailable; invalid -> 400 security_failed) -> durable DB rate limit -> transactional insert. Insert is ON DUPLICATE KEY UPDATE on `leads_daily_identity_unique (dedupe_date, dedupe_hash)`. On new lead: audit event `lead.created` + integration outbox event. If email present: INSERT IGNORE into `lead_email_outbox` (`application_received`) then inline `processLeadEmailOutbox` attempt. Response `{ok, lead_reference}`. Marketing consent is opt-in (`body.marketing` absent -> opt-out).

Email sequence:
| # | Trigger | Delay | Subject en / zh / ms | Attachment |
|---|---|---|---|---|
| 1 | lead with email; outbox `application_received` | immediate | "We've received your programme conversation request" / 我们已收到您的课程沟通请求 / "Permintaan perbualan program anda telah kami terima" | guide PDF by language |
| 2 | nurture cron, stage new, opted-in, consent_at not null | day 3 | "Did the guide answer your questions?" / 课程指南解答了您的疑问吗？ / "Adakah panduan program menjawab persoalan anda?" | none |
| 3 | same | day 7 | "The remaining 2026 cohorts, in one view" / 2026 年剩余班次，一目了然 / "Kohort 2026 yang masih tinggal, dalam satu paparan" | none |
| 4 | same | day 14 | "One conversation. No commitment." / 一次沟通，零承诺 / "Satu perbualan. Tiada komitmen." | none |

Attachments (`src/lib/lead-email.ts:17-26,155-163`): en `working-managers-guide-2026.pdf` -> `Future-Ready-Executive-MBA-Programme-Guide-2026.pdf`; zh `zaizhi-jingli-zhinan-2026.pdf` -> `Future-Ready-Executive-MBA-课程指南-2026.pdf`; ms `panduan-pengurus-bekerja-2026.pdf` -> `Panduan-Program-Future-Ready-Executive-MBA-2026.pdf`. Missing file -> sends without attachment.

Ack email headers: `Auto-Submitted: auto-replied`, `X-Auto-Response-Suppress: All`; no List-Unsubscribe on the ack. Nurture emails carry List-Unsubscribe + one-click POST (`nurture/route.ts:121-124`).

SMTP: smtp.hostinger.com:465 secure, pooled (2 conn, 50 msgs), TLS >= 1.2. Env SMTP_USER/SMTP_PASSWORD/SMTP_HOST/SMTP_PORT/EMAIL_FROM_NAME/EMAIL_REPLY_TO.

Retry rules:
| Queue | Max attempts | Backoff min | Terminal | Stale lock |
|---|---|---|---|---|
| lead_email_outbox | 5 | 5,15,60,240 | status failed + last_error_code | processing > 10 min -> pending/failed |
| lead_integration_outbox | 6 | 5,15,60,240,720 | dead_letter | same |
| lead_nurture_log | 1 (no retry) | n/a | message_id 'send_failed', manual clear | n/a |
Nurture processes latest step first; overdue earlier steps marked 'superseded'. MAX_LEAD_AGE_DAYS 45. Claim via (lead_id, step) unique key.

Unsubscribe: token = HMAC-SHA256(UNSUBSCRIBE_TOKEN_SECRET, lowercased email) truncated to 32 hex; URL `/api/unsubscribe?e=<b64url email>&t=<token>&l=<en|zh|ms>`; GET -> update leads marketing_opt_out -> 303 to `/unsubscribed` (locale) with status; POST one-click RFC 8058. Nurture cron refuses to run without UNSUBSCRIBE_TOKEN_SECRET.

Internal endpoints and secrets: `/api/internal/email-outbox` POST EMAIL_CRON_SECRET; `/api/internal/nurture` GET/POST NURTURE_CRON_SECRET (dryRun, limit 1-200); `/api/internal/integration-outbox` POST CONVERSION_CRON_SECRET; `/api/internal/conversion-health` GET CONVERSION_CRON_SECRET; `/api/internal/lead-lifecycle` POST LEAD_LIFECYCLE_SECRET; `/api/internal/indexnow` POST INDEXNOW_CRON_SECRET + INDEXNOW_KEY (no length floor). Shared helper `src/lib/internal-auth.ts` timingSafeEqual; unconfigured -> 503. All internal routes: no-store + X-Robots-Tag noindex.

CRM webhook (`lead-integration.ts`): CONVERSION_WEBHOOK_URL (https only) + CONVERSION_WEBHOOK_SECRET (>= 32 bytes); headers X-Future-Ready-Event-Id/Timestamp/Signature v1=hmac(ts.body), Content-Digest sha-256, 8 s timeout.

DB tables: `leads` (identity, attribution, lifecycle_stage/version, consent, marketing_opt_out...), `lead_email_outbox`, `lead_rate_limits`, `lead_audit_events` (append-only), `lead_integration_outbox`, `lead_nurture_log` (unique lead_id+step). Migration 009 widened language enums to en/zh/ms; 007 added `qualified` stage. Lifecycle stages: new, contacted, qualified, meeting_scheduled, evaluating, employer_process, applied, enrolled (terminal), not_proceeding (reversible).

## 3. PDF pipeline

Inventory `public/downloads/` (12 files):
| Document | en | ms | zh | Pages |
|---|---|---|---|---|
| Working Manager's Guide 2026 | working-managers-guide-2026.pdf 106 KB | panduan-pengurus-bekerja-2026.pdf 106 KB | zaizhi-jingli-zhinan-2026.pdf 121 KB | 3 |
| Decision guide | future-ready-decision-guide.pdf 114 KB | -ms.pdf | -zh.pdf 142 KB | 4 |
| Employer funding brief | future-ready-employer-funding-brief.pdf 111 KB | -ms.pdf | -zh.pdf 131 KB | 3 |
| Scholarship eligibility | future-ready-scholarship-eligibility.pdf 111 KB | -ms.pdf | -zh.pdf 125 KB | 3 |

Generation: ReportLab platypus, A4, custom page chrome (navy header bar, gold rule, footer). `scripts/generate-working-manager-guides.py` (314 lines) owns the three *-2026 guides AND also declares ms/zh variants of the other three documents; `scripts/generate-lead-magnet-pdfs.py` (582 lines) owns all nine future-ready-* files. The two scripts overlap; last run wins. `scripts/render-lead-magnet-pdfs.py` is proof-render only (pypdfium2 -> tmp/pdfs/render).

Fonts: hard-coded `C:/Windows/Fonts` (arial, arialbd, georgia, georgiab, simhei). CJK embedded via SimHei. Malay uses the same Arial/Georgia as English. Not runnable on Linux CI; not invoked by any npm script or workflow.

Linkage: `LeadForm.tsx:56-58` links the three *-2026 guides by language; `lead-email.ts` attaches the same three. The nine future-ready-* PDFs are linked from nothing (only HANDOFF.md names them as the approved follow-up library). E2E :826 asserts the guide link href.

## 4. SEO and schema layer

`seo.ts withSeo(path, page)`: canonical = path against metadataBase; alternates.languages = languageAlternates(path); OG locale zh_MY/ms_MY/en_MY; social image `/opengraph-image` 1200x630; twitter summary_large_image.

`locale-routes.ts`: EN_ROUTES registry of 36 routes; LOCALE_PAIRS maps /home <-> /zh <-> /ms, everything else prefix mirror; languageAlternates emits en, zh-Hans, ms, x-default (en); undefined for unregistered paths; isCampaignRoute matches /lp/, /zh/lp/, /ms/lp/.

Sitemap `src/app/sitemap.ts`: ten hand-maintained buckets with fixed lastModified constants (programme/commercial/insights 2026-08-21, legal 2026-08-14); PRIMARY 0.95 weekly, CORE 0.8, CLUSTER 0.75, INSIGHTS 0.7, ZH_CORE 0.8, ZH_RESOURCES 0.7, ZH_FULL_MIRROR 0.65, MS_CORE 0.8, MS_MIRROR 0.65, INFO 0.4. Bucket membership is independent of EN_ROUTES (can drift).

robots.ts: `*` Allow / Disallow /api/; OAI-SearchBot Allow; GPTBot Disallow /. No rules for ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Bytespider, Amazonbot, Applebot-Extended, Meta-ExternalAgent, cohere-ai, Diffbot, ChatGPT-User (all inherit `*`).

JSON-LD: renderer `JsonLd.tsx`; `BreadcrumbJsonLd.tsx` is dead code (returns null); breadcrumbs via `RouteBreadcrumbs.tsx:120` + `breadcrumbSchema()` (`seo.ts:79-90`). Site-wide @graph in `SiteChrome.tsx:21-84`: EducationalOrganization (#programme-provider), Organization (#website-operator), WebSite (#website, inLanguage en-MY/zh-Hans-MY/ms-MY).
| @type | Pages |
|---|---|
| EducationalOrganization, Organization, ImageObject, PostalAddress, ContactPoint, WebSite | every page |
| BreadcrumbList | every indexed page except /home, /zh, /ms |
| Course, Syllabus | /executive-mba (en only) |
| Course + EducationalOrganization + CourseInstance (+Offer, Country) | /executive-mba-malaysia, /intakes (en only), /mba-for-sme-owners, /mba-for-working-professionals x en/ms/zh |
| FAQPage | /faq, /executive-mba-vs-mba, /hrd-corp-claimable, /chartered-manager-malaysia x en/ms/zh |
| Article (+ Organization author/publisher) | 4 insights articles x en/ms/zh |
| CollectionPage + ItemList | /insights x en/ms/zh |
| ItemList + Person | /faculty (en) |
| Person | /about (en) |
| Organization + Person + VideoObject (YouTube 6uEbqYOZxkg) | /asian-business-consulting x en/ms/zh |
Stable @ids in seo.ts:8-14.

noindex: index:false follow:true on /corporate-training, /online-executive-mba, /programmes/shift-hr (x3 locales) and `/` root stub; index:false follow:false on /lp/google, /lp/meta, /unsubscribed (x3). Everything else index/follow.

`scripts/seo-audit.mjs`: post-build, 26 pages; canonical exact match, exactly one h1, hreflang en/zh-Hans/ms present where flagged.
`opengraph-image/route.tsx`: next/og, 1200x630, force-static, Arial only, copy from FACTS.

## 5. AI and agent discoverability

`src/app/llms.txt/route.ts` (force-static, text/plain, cache 1h/swr 1d), ~2.4 KB, 4 headings: site name + positioning + provider/operator separation; Primary sources (9 links: /executive-mba, /chartered-manager-malaysia, /curriculum, /fees, /intakes, /faculty, /faq, /about, /zh — no /ms, /insights, /resources, /diagnostic, /apply); Important interpretation (10 bullets); Contact. No llms-full.txt, no markdown mirrors.

`public/.well-known/`: security.txt only (Contact support@, Expires 2027-08-11, Preferred-Languages en, zh — no ms). No ai.txt/agent.json/mcp.json.

IndexNow: `src/app/[indexNowKey]/route.ts` serves INDEXNOW_KEY at `/<key>.txt`; `/api/internal/indexnow` POST forwards up to 100 same-origin URLs to api.indexnow.org.

`manifest.ts`: id "/", start_url "/", standalone, lang en-MY, icons /icon.svg + /brand/rdr-emblem.webp.

`src/lib/chat-knowledge.ts`: `ChatLanguage = "en" | "zh"` (no ms). `programmeChatSystemPrompt(language)` = guardrail instructions + 31 fact bullets interpolated from content.ts (SITE, FACTS, OPERATOR, ABC_PROFILE, CERTIFICATE_POSITIONING, HRD_CORP_CLAIM, COMPANY_ENROLMENT, DELIVERY_CONTROL, REFUND_TERMS, PROGRAMME_AUDIENCE, INTAKES). Caps 120 words en / 150 chars zh; prompt-injection clause. Consumed by `api/chat/route.ts` (Groq, GROQ_MODEL default openai/gpt-oss-120b), rate-limited 8/10min per IP, 40/day, 150/hour per /24.

## 6. Security and performance

CSP (`src/lib/content-security-policy.ts`): default-src 'self'; script-src 'self' 'unsafe-inline' [+unsafe-eval dev] challenges.cloudflare.com [+googletagmanager if GTM]; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: challenges.cloudflare.com [+GA]; font-src 'self' data:; connect-src 'self' challenges.cloudflare.com [+GA]; frame-src challenges.cloudflare.com youtube-nocookie.com; worker-src 'self' blob:; media-src 'self'; manifest-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests (prod). Meta variant strips frame-ancestors. Applied via next.config headers, proxy.ts middleware, and <meta> in each locale layout. Live CDN (hcdn) currently overrides the header down to `upgrade-insecure-requests`.

Other headers: Referrer-Policy strict-origin-when-cross-origin, nosniff, X-Frame-Options DENY, X-Permitted-Cross-Domain-Policies none, Origin-Agent-Cluster ?1, X-Release-ID, Permissions-Policy (camera, mic, geo, payment, usb, topics off), HSTS 1y includeSubDomains, poweredByHeader false. Caching: pages max-age=0 must-revalidate s-maxage=300 swr=60; /api no-store; /_next/static and hero mp4 immutable 1y. Content-Language zh-Hans on /zh, ms on /ms. www -> apex 308.

Rate limits (durable, `lead_rate_limits`): email-day 5/24h, email-hour 3/1h, phone-day 5, phone-hour 3, ip-ten-min 5, subnet-hour 30, chat-ip-ten-min 8, chat-ip-day 40, chat-subnet-hour 150. Fingerprints HMAC-SHA256(LEAD_HASH_SECRET, scope\0value); LEAD_HASH_SECRET >= 32 bytes else production throws at first use. Client IP: cf-connecting-ip -> x-real-ip -> x-forwarded-for.

Turnstile server (`turnstile-server.ts`): direct siteverify, idempotency_key, 10 s timeout; requires TURNSTILE_SECRET and TURNSTILE_HOSTNAMES allowlist (else 503 fail-closed); validates success, action, hostname. Widgets render=explicit, lazily injected (LeadForm.tsx:746, ProgrammeAssistant.tsx:360).

Fonts (all three layouts, next/font/google, self-hosted): Source_Serif_4 (--font-fraunces, latin, display optional, variable), Archivo (--font-archivo, latin, optional, variable), IBM_Plex_Mono (500/600, optional). Latin subsets only; zh and ms rely on system fallbacks. No @font-face in CSS.

CSS: single `src/app/globals.css`, 1,521 lines, 165,018 bytes raw. Tailwind v4 via @tailwindcss/postcss.

Third-party client scripts: GTM (afterInteractive, gated by NEXT_PUBLIC_GTM_ID + consent localStorage `fr_emba_consent_v1.analytics === granted`), Cloudflare Turnstile (lazy), YouTube nocookie iframe (click-to-load). No Meta pixel, no LinkedIn tag.

Web Vitals: `instrumentation-client.ts` -> consented dynamic import of web-vitals -> onCLS/onFCP/onINP/onLCP/onTTFB -> `trackEvent("web_vital", ...)`; client_error, page_navigation events. `analytics.ts` pushes to dataLayer with schema 1.0 envelope, Consent Mode gtag; 9 UTM keys, 10 click IDs; 23 tracked events. ConsentBanner: two buttons (Essential only / Allow analytics); marketing hard-coded denied; copy says "No advertising pixels are active."

`scripts/style-budget-audit.mjs`: inline `style={` <= 723, `<style` <= 17, `!important` <= 37 across src.

## 7. Tests and gates

e2e `e2e/site-smoke.spec.ts`: 983 lines, 47 tests (titles at lines 75..978). Axe accessibility at 528, 604, 829. Hero-source assertions (stale v4) at 450, 493, 842. Release-fingerprint test at 691.

Vitest `src/lib/__tests__/`: analytics, conversion-contract, fact-parity (cross-language fact parity, forbidden scholarship amounts, CMI claims verbatim, Malay MQA FAQ selector), lead-lifecycle, modules (twelve modules), nurture-email (3 languages x 3 steps), release-id, turnstile-server, unsubscribe.

`scripts/release-audit.mjs`: post-build; hero video path (stale v7) + <= 1 MB + faststart; per indexed page canonical, one h1, breadcrumbs (visible + JSON-LD) except home routes, meta description <= 180 chars, JSON-LD parses, internal hrefs resolve to built routes.

`scripts/content-clarity-audit.mjs`: source-level; scans src/app, src/components/site, content.ts, content-zh.ts, lead-email.ts, chat-knowledge.ts, root-metadata.ts, seo.ts (NOT content-ms.ts). 29 banned patterns (estimates, prestige claims, pressure CTAs, stale money RM 4,000/5,000/6,000, retired wording, Level 7, retired names/CTAs, Chinese pressure framing), unqualified "HRD Corp claimable", 9 canonical facts verbatim in content.ts + 4 identity strings on ABC pages.

`.github/workflows/quality.yml`: triggers pull_request + push main only. Steps: npm ci, lint, typecheck, test, audit:content, audit:styles, validate:env:contract, npm audit, build, audit:seo, audit:release, playwright install, test:e2e, upload report on failure.

## Cross-cutting facts

- Three CI-blocking defects on this branch: release-audit v7 path (ENOENT); 1 MB hero budget vs 1.90 MB v8; three e2e tests asserting webm+mp4 source pair.
- `/` is a noindex redirect stub; real English home is /home; LOCALE_PAIRS maps /home <-> /zh <-> /ms.
- Two PDF generators overlap on six ms/zh files; both Windows-only; not wired to any script or CI.
- Nine of twelve shipped PDFs are linked from nothing.
- chat-knowledge supports en|zh only; no Malay assistant.
- robots.ts names only OAI-SearchBot and GPTBot.
- llms.txt omits /ms; no llms-full.txt or markdown mirrors.
- content-clarity-audit scans content-zh.ts but not content-ms.ts.
- Sitemap buckets are hand-maintained and independent of EN_ROUTES.
