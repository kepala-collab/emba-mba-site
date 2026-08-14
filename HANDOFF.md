# Future Ready Executive MBA — Project Handoff

Everything another developer or agent needs to build, run, and deploy this site.

---

## 1. What this is

A **lead-generation website** for the **Future Ready Executive MBA** — a professional programme recognised by CMI (UK) against CMI Professional Standards
Executive MBA delivered by **Asian Business Consulting (ABC)**. The site is operated by
**Right Dots Resources (RDR)**, the authorised Global and Local Programme Partner handling
marketing, enquiries, pricing and enrolment coordination. ABC provides and delivers the programme.
(RDR ≠ ABC — never present ABC's track record as RDR's.)

- **Domain:** https://futurereadymba.com
- **Production host:** Hostinger Business Web Hosting (Node.js)
- **Languages:** English + Simplified Chinese (`/zh`)

---

## 2. Stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router) |
| UI | **React 19**, TypeScript, **Tailwind CSS v4** |
| Fonts | next/font/google — Fraunces (display), Archivo (body), IBM Plex Mono (labels) |
| Styling | Custom dark design system via CSS variables in `src/app/globals.css` ("Architecture of Thinking") |
| Data | Content-driven from `src/lib/content.ts` (single source of truth) |
| Leads | POST `src/app/api/lead/route.ts` → Hostinger MySQL |
| Build output | `output: "standalone"`; `postbuild` copies public/static assets into the runtime bundle |

---

## 3. Environment variables

`NEXT_PUBLIC_SITE_URL` is available to the build. Database settings are server-only and must
be configured in the Hostinger Node.js application environment. A committed template with no
secrets is at `web/.env.production.example`.

| Variable | Purpose | Example / note |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (metadata, sitemap, JSON-LD, hreflang) | `https://futurereadymba.com` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public Turnstile widget key | safe to expose in client builds |
| `TURNSTILE_VERIFY_URL` | Managed Worker used for server-side token verification | public URL; no secret in Hostinger |
| `DB_HOST` | MySQL hostname | `srv2132.hstgr.io` for the isolated Hostinger Node.js runtime |
| `DB_PORT` | MySQL port | `3306` |
| `DB_NAME` | Hostinger database | `u606386577_emba` |
| `DB_USER` | Hostinger database user | `u606386577_emba_app` |
| `DB_PASSWORD` | Database password | server-only — never commit |
| `LEAD_HASH_SECRET` | HMAC key for pseudonymous abuse fingerprints and deduplication | 32+ random bytes; server-only — never commit |
| `SMTP_HOST` / `SMTP_PORT` | Hostinger transactional mail transport | `smtp.hostinger.com` / `465` |
| `SMTP_USER` / `SMTP_PASSWORD` | Sending mailbox credentials | server-only; mailbox is `support@futurereadymba.com` |
| `EMAIL_FROM_NAME` / `EMAIL_REPLY_TO` | Applicant-facing sender identity | `Future Ready Programme Team` / `support@futurereadymba.com` |
| `EMAIL_CRON_SECRET` | Bearer secret protecting the retry processor | separate 32+ random bytes; server-only |
| `GROQ_API_KEY` | Server-only API credential for the programme assistant | create in GroqCloud; never expose to the browser |
| `GROQ_MODEL` | Chat model override | `openai/gpt-oss-120b` by default |

---

## 4. Lead capture (Hostinger MySQL)

- **Database:** `u606386577_emba`
- **Tables:** `leads`, `lead_rate_limits`, and `lead_email_outbox` — provisioned by the ordered SQL files in
  `database/migrations/`
- **Columns include:** name, email, phone, company, participant_type, programme_interest,
  page_path, page_language, landing_page, referrer, first_referrer, utm_source/medium/campaign/term/content,
  click_id_type/value, attribution_session_id/json, **source**
- **Flow:** `LeadForm` (client) → `POST /api/lead` → managed Turnstile verification
  Worker → parameterised MySQL insert
- **Target runtime DB permissions:** `SELECT`, `INSERT`, and `UPDATE` on
  `u606386577_emba.*`; no DDL or `DELETE`.
  Verify the Hostinger database user privileges in hPanel after provisioning.
- **API controls:** same-origin checks, 16 KiB body cap, strict field validation,
  process-local and durable IP/subnet/email/phone throttling, daily duplicate suppression,
  bounded DB/verification timeouts, and no-store responses. Abuse identifiers are stored as
  keyed SHA-256 fingerprints rather than raw IP/email/phone values.
- **Applicant acknowledgement:** after a verified lead transaction commits, one
  language-matched receipt email is queued per recipient per day and attempted
  immediately. A bearer-protected Hostinger cron calls `POST /api/internal/email-outbox`
  every five minutes for retries. Delivery failures never roll back a valid application;
  messages stop after five attempts, contain no tracking pixel, and use a stable message ID
  to reduce duplicates after an uncertain SMTP result.
- **Lead source tags** (the `source` field — use to attribute each lead):
  - `emba-hub` — main English site
  - `zh-hub` — Chinese site (`/zh`)
  - `lp-google` / `lp-meta` — English ad landing pages
  - `lp-google-zh` / `lp-meta-zh` — Chinese ad landing pages

### Programme assistant

- `ProgrammeAssistant` is a bilingual, mobile-first site component calling
  `POST /api/chat`; Groq credentials are server-only.
- Answers are bounded to verified facts in `src/lib/chat-knowledge.ts`. The route
  rejects personal contact/identity details, caps bodies, message length, history and
  output, verifies Turnstile action `programme-chat`, and applies process-local plus
  durable MySQL-backed IP/subnet limits.
- No transcripts are written to the application database. The UI warns visitors not
  to enter personal data, identifies answers as AI-generated and hands off to the
  existing language-aware WhatsApp contact.

---

## 5. Routes / structure

```
src/app/
  page.tsx                 EN homepage (hub → dedicated pages)
  executive-mba, how-it-works, curriculum, fees, intakes, faculty, faq, apply
  corporate-training/      HRD Corp corporate training hub (10 tracks)
  hrd-corp-claimable, online-executive-mba, executive-mba-vs-mba, ai-executive-mba,
  mba-for-working-professionals, executive-mba-malaysia, mba-for-sme-owners,
  mba-for-entrepreneurs, programmes/shift-hr        ← SEO cluster pages
  insights/ ...            ← thought-leadership articles
  about, contact, privacy, terms
  lp/google, lp/meta       EN ad landing pages (noindex, source-tagged)
  zh/                      Chinese homepage funnel (single comprehensive page)
  zh/lp/google, zh/lp/meta Chinese ad landing pages
  api/lead/route.ts        lead POST handler → Hostinger MySQL
  sitemap.ts, robots.ts
src/components/site/       Header, Footer, LeadForm, CtaSection, Reveal, NodeCanvas,
                           WhatsAppFloat, RdrMark
src/lib/content.ts         ALL copy/data (SITE, FACTS, FACULTY, INTAKES, FAQS, CORP_TRAINING, NAV…)
legacy/meridian/           ARCHIVED old static-HTML "Meridian" placeholder site — DO NOT USE
                           (rejected design + placeholder brand; kept only as backup)
```

## 6. Internationalisation (EN + Chinese)

- `LeadForm` takes `lang="en" | "zh"` (label dictionary inside the component) and a `source` prop.
- `Header` and `Footer` are **client components**, locale-aware via `usePathname()` — Chinese chrome
  renders on any `/zh*` path; English elsewhere. A **EN ⇄ 中文 switcher** is in the nav.
- **hreflang** wired on `/` ⇄ `/zh` and on each ad LP ⇄ its Chinese twin (`en` / `zh-Hans` / `x-default`).
- The Chinese pages use real EMBA content (not the archived Meridian placeholder). The Chinese site is a
  focused conversion funnel, not a 1:1 mirror of all 26 English SEO pages (by design).
- English and Chinese use separate root layouts, so the document language is `en-MY` for English
  routes and `zh-Hans` for `/zh` routes. Keep both locale trees aligned when changing global chrome.

---

## 7. Commands

```bash
npm install
npm run lint     # Oxc; warnings fail the check
npm run dev      # local dev
npm run build    # production build
npm start        # serve the prepared standalone production build
```

---

## 8. Git / repo

- **Canonical repo:** `https://github.com/kepala-collab/emba-mba-site.git` (private). Repo root = this `web/` folder.
- Old repo (superseded): `naveenedmarker-cloud/future-ready-emba.git`.

---

## 9. Deployment

Production uses Hostinger Business Web Hosting's managed Node.js runtime, not a VPS.
The canonical source remains the private GitHub repository. See `DEPLOY-HOSTINGER.md`
for the environment, build, deployment, and verification checklist.

---

## 10. Key facts (as configured)

- Coordinator: **Rostam Affandi Ahmad** · WhatsApp/phone **+60 12-981 8533** · **support@futurereadymba.com**
- Global and Local Programme Partner / operator: Right Dots Resources · Reg. 202603145615 (003856919-U)
- Pricing: standard fee **RM10,000.00**. Malaysian participants pay **RM6,000.00** after a **RM4,000.00 LIFE Innoversity scholarship**. Eligible HRD Corp-registered employers may apply to claim up to 100% of the approved programme fee for employees, subject to programme registration, prior approval and sufficient levy balance.
- Structure: six-month professional pathway. Months 1–3 comprise six training days across three monthly sessions and the applied project leading to the CMI-recognised Executive MBA programme certificate. Months 4–6 provide supported preparation for eligible participants pursuing CMI's separate Chartered Manager assessment. CMgr MCMI is awarded only after successful CMI assessment.
- Compliance: not MQA-accredited; CMI (UK)-recognised professional programme; PDPA 2010
