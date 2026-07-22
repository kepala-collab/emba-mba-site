# Future Ready Executive MBA — Lead-Gen Site

Marketing & lead-generation website for the **Future Ready Executive MBA (CMI UK-endorsed)**.

Operated by **Right Dots Resources (RDR)** — an authorised marketing & enrolment partner — promoting the
programme **delivered by Asian Business Consulting (ABC)**. Visitors apply through the site; leads are captured
and handed to the ABC programme team to close.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** + a custom dark design system (`src/app/globals.css`)
- **next/font** — Fraunces (display), Archivo (body), IBM Plex Mono (labels)
- **Supabase** — lead capture (`/api/lead` → `public.leads`)
- **Vercel** — hosting & deploy
- Data-driven from a single content module: **`src/lib/content.ts`**

## Structure

26 pages, each with its own metadata + JSON-LD schema:

- **Core:** `/`, `/executive-mba`, `/how-it-works`, `/curriculum`, `/fees`, `/intakes`, `/faculty`, `/faq`, `/apply`
- **SEO clusters:** `/hrd-corp-claimable`, `/online-executive-mba`, `/executive-mba-vs-mba`, `/ai-executive-mba`, `/mba-for-working-professionals`, `/mba-for-sme-owners`, `/mba-for-entrepreneurs`, `/executive-mba-malaysia`, `/programmes/shift-hr`
- **Insights pillar:** `/insights` + first-principles / systems / design thinking articles
- **Legal/info:** `/about`, `/contact`, `/privacy`, `/terms`
- `sitemap.ts`, `robots.ts`, and JSON-LD (Organization / Course / FAQPage / Article)

Shared components live in `src/components/site/` (Header, Footer, LeadForm, CtaSection, NodeCanvas, Reveal, WhatsAppFloat).

## Environment variables

Create `.env.local` (not committed):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...   # publishable / anon key (client-safe)
NEXT_PUBLIC_WHATSAPP=60123456789
NEXT_PUBLIC_SITE_URL=https://emba-mba-site.vercel.app
```

The same values must be set in the Vercel project settings for production.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

```bash
vercel deploy --prod --yes
```

---

_Programme content is provided by Asian Business Consulting. The programme is a professional programme recognised
by CMI (UK); it is not a regulated qualification and is not MQA-accredited._
