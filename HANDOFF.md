# Future Ready Executive MBA — Project Handoff

Everything another developer or agent needs to build, run, and deploy this site.

---

## 1. What this is

A **lead-generation website** for the **Future Ready Executive MBA** — a CMI (UK)-endorsed
Executive MBA delivered by **Asian Business Consulting (ABC)**. The site is operated by
**Right Dots Resources (RDR)**, ABC's independent channel partner. RDR captures leads; ABC
closes and delivers. (RDR ≠ ABC — never present ABC's track record as RDR's.)

- **Domain:** https://futurereadymba.com
- **Current live host:** Vercel — https://emba-mba-site.vercel.app (until Hostinger cutover)
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
| Leads | POST `src/app/api/lead/route.ts` → Supabase REST |
| Build output | `output: "standalone"` (see `next.config.ts`) |

---

## 3. Environment variables

All are `NEXT_PUBLIC_*` and **inlined at build time** — they must be set *before* `npm run build`.
Real values live in `web/.env.local` (local) and the Vercel project env (prod). A committed template
with no secrets is at `web/.env.production.example`.

| Variable | Purpose | Example / note |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (metadata, sitemap, JSON-LD, hreflang) | `https://futurereadymba.com` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://jqlgtxaultqxdhlrmhwl.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/publishable key (public by design; protected by RLS) | copy from `.env.local` — do **not** commit |

---

## 4. Lead capture (Supabase)

- **Project ref:** `jqlgtxaultqxdhlrmhwl`
- **Table:** `public.leads` — RLS allows **anon INSERT only** (policy `anon_insert_leads`)
- **Columns include:** name, email, phone, company, participant_type, programme_interest,
  page_path, referrer, utm_source/medium/campaign/term/content, **source**
- **Flow:** `LeadForm` (client) → `POST /api/lead` → Supabase `/rest/v1/leads`
- **Lead source tags** (the `source` field — use to attribute each lead):
  - `emba-hub` — main English site
  - `zh-hub` — Chinese site (`/zh`)
  - `lp-google` / `lp-meta` — English ad landing pages
  - `lp-google-zh` / `lp-meta-zh` — Chinese ad landing pages

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
  api/lead/route.ts        lead POST handler → Supabase
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
- Known limitation: root `<html lang>` is `en` globally (App Router renders one root layout);
  `/zh` content is wrapped in `lang="zh-Hans"` and uses zh hreflang/OG locale. A full per-locale
  `<html lang>` would require an `app/[lang]/` restructure.

---

## 7. Commands

```bash
npm install
npm run dev      # local dev
npm run build    # production build (needs env vars set first)
npm start        # serve the production build (next start)
```

---

## 8. Git / repo

- **Canonical repo:** `https://github.com/kepala-collab/emba-mba-site.git` (private). Repo root = this `web/` folder.
- Old repo (superseded): `naveenedmarker-cloud/future-ready-emba.git`.

---

## 9. Deployment options

### A. Vercel (current, easiest "push-to-deploy + env keys")
Native Node + GitHub integration + free auto-renewing SSL + env vars in dashboard.
This IS the "traditional Node upload via GitHub, then set environment keys" experience.
Point `futurereadymba.com` at the Vercel project and it's done.

### B. Hostinger VPS (self-hosted)
Hostinger **shared/Web Hosting is PHP/MySQL only — it cannot run Node.js/Next.js.** Running this app
on Hostinger requires the **VPS**. Two ways on the VPS:
- **Coolify** (recommended): install Coolify → connect this GitHub repo → paste the 3 env vars in the
  UI → it builds and auto-deploys on every push, with automatic Let's Encrypt SSL. This is the
  GitHub-upload + env-keys experience, self-hosted.
- **Manual**: Node 22 + PM2 + Nginx + certbot — see `DEPLOY-HOSTINGER.md`.
- The **Hostinger MCP / API app** lets an AI manage the VPS, domains and DNS via API — it *automates*
  the VPS, it does **not** turn shared hosting into Node hosting.

### C. Any Node PaaS (Railway, Render, etc.)
Same as Vercel conceptually: connect repo, set the 3 env vars, deploy.

---

## 10. Key facts (as configured)

- Coordinator: **Rostam Affandi Ahmad** · WhatsApp/phone **+60 12-981 8533** · **support@futurereadymba.com**
- Operator: Right Dots Resources · Reg. 202603145615 (003856919-U)
- Pricing: RM10,000 → **RM6,000** after RM4,000 Malaysian scholarship · 100% HRD Corp claimable
- Structure: 6 months — CMI (UK) MBA cert in 3 months (3 weekend sessions), then Chartered Manager (CMgr)
- Compliance: not MQA-accredited; CMI (UK)-recognised professional programme; PDPA 2010
