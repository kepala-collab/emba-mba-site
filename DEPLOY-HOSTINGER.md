# Deploying Future Ready EMBA to Hostinger

Production runs as a managed Node.js application on the existing Hostinger Business
Web Hosting plan. A VPS, Vercel, and Supabase are not required.

## Production resources

- Domain: `futurereadymba.com`
- Hostinger website account: `u606386577`
- Hosting order: `1009802178`
- Data center: Kuala Lumpur
- Runtime: Node.js 22
- Source: `https://github.com/kepala-collab/emba-mba-site`
- Database: `u606386577_emba`
- Database user: `u606386577_emba_app`

## Environment

Configure these values in the Hostinger Node.js application environment. Never
commit the real password or a populated `.env.production` file.

```dotenv
NEXT_PUBLIC_SITE_URL=https://futurereadymba.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAEM-BhpyOxghbYJZ
TURNSTILE_VERIFY_URL=https://turnstile-siteverify-future-ready-mba.bisol-future-ready-mba.workers.dev/siteverify
DB_HOST=srv2132.hstgr.io
DB_PORT=3306
DB_NAME=u606386577_emba
DB_USER=u606386577_emba_app
DB_PASSWORD=<Hostinger database password>
LEAD_HASH_SECRET=<32+ random bytes, stored only in Hostinger>
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=support@futurereadymba.com
SMTP_PASSWORD=<Hostinger mailbox password>
EMAIL_FROM_NAME=Future Ready Programme Team
EMAIL_REPLY_TO=support@futurereadymba.com
EMAIL_CRON_SECRET=<separate 32+ random bytes, stored only in Hostinger>
NEXT_PUBLIC_EXPERIMENTS_ENABLED=false
# Configure the four values below only when an authorised CRM receiver is ready.
CONVERSION_WEBHOOK_URL=<authorised HTTPS CRM webhook>
CONVERSION_WEBHOOK_SECRET=<separate 32+ random bytes>
CONVERSION_CRON_SECRET=<separate 32+ random bytes>
LEAD_LIFECYCLE_SECRET=<separate 32+ random bytes>
GROQ_API_KEY=<server-only Groq API key>
GROQ_MODEL=openai/gpt-oss-120b
```

`GROQ_API_KEY` is used only by `POST /api/chat`; never give it a
`NEXT_PUBLIC_` prefix. Configure the Turnstile widget and verification Worker to
allow both `lead-submit` and `programme-chat` actions. The assistant rejects common
personal contact/identity patterns, limits each request and conversation, uses durable
IP/subnet throttling and does not store chat transcripts in the application database.
Keep inference retention disabled in GroqCloud Data Controls.

Before creating a production archive, validate a local environment file without
printing any secret values:

```bash
npm run validate:env
```

The validator fails closed for missing or placeholder runtime values and verifies
that the two server secrets are at least 32 bytes and are not reused. Search,
analytics, IndexNow and entity-profile values are reported separately because they
activate optional integrations rather than the lead pipeline.

The MySQL user is local to the Hostinger account; no public remote-access rule is
needed. Before deploying, run every SQL file in `database/migrations/` in numerical
order with an administrative database account. The application runtime user should
have only `SELECT`, `INSERT`, and `UPDATE` on `u606386577_emba.*`; it must not have
DDL or `DELETE` privileges. The request route never creates or alters tables.

Migration `003_add_lead_attribution.sql` must be applied before deploying the
analytics-ready release; the lead insert expects its attribution columns to exist.
Migration `004_create_lead_email_outbox.sql` must be applied before deploying the
transactional email release; lead submission and email retry processing use this table.
Migration `005_add_lead_contact_preference.sql` records the requested conversation route.
Migration `006_add_conversion_lifecycle.sql` is required before deploying the Conversion
OS release; it adds replay-safe lead references, intent/cohort data, lifecycle audit and
the CRM integration outbox. The migration is additive and must be backed up and applied
before the new application build starts receiving requests.

`LEAD_HASH_SECRET` keys privacy-preserving rate-limit fingerprints and daily lead
deduplication. Generate it independently from the database password, never expose it
to the browser, and rotate it only as a planned security operation because rotation
starts new rate-limit and deduplication identities.

Cloudflare Turnstile is configured for `futurereadymba.com`, `localhost`, and
`127.0.0.1`. The site key and verification Worker URL are public configuration;
the Turnstile secret exists only as a Cloudflare Worker secret and must never be
copied into this repository or Hostinger.

Application acknowledgements are sent through Hostinger SMTP over implicit TLS on
port 465. They are queued only after a verified application is committed, use the
lead's English or Chinese page language, and retry without making a valid form
submission fail. Configure a Hostinger cron job to run every five minutes:

```cron
*/5 * * * * curl -fsS -X POST -H "Authorization: Bearer <EMAIL_CRON_SECRET>" https://futurereadymba.com/api/internal/email-outbox
```

The cron endpoint returns counts only and never logs applicant contact details. Keep
the cron secret out of the repository, use a value different from `LEAD_HASH_SECRET`,
and rotate it if the cron command is ever exposed.

When the CRM webhook is configured, add a second five-minute cron job:

```cron
*/5 * * * * curl -fsS -X POST -H "Authorization: Bearer <CONVERSION_CRON_SECRET>" https://futurereadymba.com/api/internal/integration-outbox
```

Use the same secret to read `/api/internal/conversion-health`. The health response contains
counts and queue ages only. Webhook payloads contain applicant contact data and therefore
may be sent only to an authorised processor. Signature verification, lifecycle usage,
alert thresholds and rollback order are documented in `CONVERSION-OPERATIONS.md`.

## Build and deploy

Use the repository root (the folder containing `package.json`):

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Deploy the source through Hostinger's Node.js application deployment. Exclude
`node_modules`, `.next`, `.git`, local environment files, and every other path
matched by `.gitignore`; Hostinger installs dependencies and builds the app on its
server. The package declares Node.js 22 and uses these scripts:

- Build: `npm run build`
- Post-build: `npm run postbuild` runs automatically after `npm run build` and copies
  `public/` plus `.next/static/` into the standalone deployment bundle
- Start: `npm start` (runs Next.js's generated standalone server)

## Search visibility environment

The application supports optional environment-controlled integrations:

- `GOOGLE_SITE_VERIFICATION` — Search Console HTML meta-token value.
- `BING_SITE_VERIFICATION` — Bing Webmaster Tools `msvalidate.01` value.
- `NEXT_PUBLIC_GTM_ID` — GTM container loaded only after analytics consent.
- `INDEXNOW_KEY` — public IndexNow key served dynamically at `/<key>.txt`.
- `INDEXNOW_CRON_SECRET` — private bearer secret for `/api/internal/indexnow`.

After a meaningful publish, submit only URLs on `futurereadymba.com` to the IndexNow
endpoint. Never place the cron secret in client-side code or Git.

## Verification

After each deployment:

1. Confirm the Hostinger build state is `completed` and inspect the build log.
2. Open `https://futurereadymba.com` and confirm the real Future Ready EMBA copy loads.
3. Check `/robots.txt`, `/sitemap.xml`, `/zh`, and one insight article.
4. Check `/llms.txt`, one Chinese core route, canonical tags and `hreflang` pairs.
5. Submit a clearly labelled test enquiry through the form.
6. Confirm the test row exists in the Hostinger MySQL `leads` table. For a tagged
   test URL, also confirm its page-language, UTM, landing-page, click-ID and attribution fields,
   then remove the row.
7. Confirm the matching `lead_email_outbox` row reaches `sent` and the English or
   Chinese acknowledgement arrives once with the expected subject and reply-to.
8. Confirm `lead_audit_events` has one `lead.created` event, the integration event is
   delivered once, replaying the same submission ID creates no duplicate, and the
   authenticated conversion health endpoint reports `ok`.
9. Ask one English and one Chinese programme question in the assistant. Confirm
   answers use published facts, the browser never receives the Groq key, and personal
   contact details are rejected before transmission.
10. Confirm `/.well-known/security.txt` is reachable and the HSTS,
   `X-Content-Type-Options`, and `X-Frame-Options` headers are present.
11. Hostinger replaces the application CSP response header with
   `upgrade-insecure-requests`; confirm the HTML contains the full
   `Content-Security-Policy` meta policy from `src/app/layout.tsx`.

If content looks stale, clear the Hostinger website cache. If the site returns an
application error, inspect the Node.js build/runtime logs and confirm the database,
Turnstile, and hashing-secret environment variables are present.
