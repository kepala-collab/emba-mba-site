# Future Ready Conversion OS delivery control

## Last updated

2026-08-15

## Phase

Local implementation complete; production release gated

## Outcome

A prospective participant can identify the right route, select a cohort, request the preferred next conversation without losing data, and create one auditable lead that can be delivered reliably to authorised programme systems.

## Current vertical slice

`visitor intent/cohort -> progressive form -> protected API -> durable lead + audit + outboxes -> acknowledgement -> lifecycle telemetry`

## Verified this cycle

- Existing public lead endpoint already enforces body limits, same-origin submission, Turnstile, in-memory and durable rate limits, validation, daily deduplication and transactional email enqueueing.
- Existing browser attribution captures first and last touch without sending contact details to the data layer.
- Chrome DevTools MCP package and local Chrome executable start successfully; the desktop client must restart before the new tools appear in this task.
- The progressive bilingual lead journey preserves form state and the submission UUID across retries, carries cohort and intent context, and emits only non-PII analytics.
- Type checking, linting, six unit tests, content/SEO/release audits, and 683 browser assertions pass.
- Mobile Lighthouse scores are Performance 95, Accessibility 100, Best Practices 100 and SEO 100; LCP is 2.3 seconds, CLS is 0 and TBT is 40 milliseconds.
- Both full and production-only npm audits report zero known vulnerabilities.

## Decisions

- Keep a modular Next.js application with explicit lead, lifecycle, integration and measurement modules.
- Keep the public surface create-only; do not add a browser-accessible CRM or lead read API.
- Use a client-generated submission UUID for retries and a server-generated immutable lead UUID for external references.
- Integrate downstream systems through a generic HMAC-signed transactional outbox, not synchronous lead creation calls.
- Keep experiments dark by default until baseline volume, guardrails and decision ownership are confirmed.
- Treat the programme assistant as informational; consequential claims and enrolment decisions stay with a human.

## Assumptions

- Hostinger MySQL supports the existing migration syntax and JSON is stored as validated text for broad MySQL/MariaDB compatibility.
- The production runtime DB user receives only the documented SELECT, INSERT and UPDATE grants.
- CRM delivery is enabled only after an authorised HTTPS endpoint and separate secrets are configured.

## Risks

- Production backup restore evidence, retention automation and CRM data-processing terms remain operational tasks.
- Migration 006 must be applied before the new application build is released.
- Live conversion rate and sample size are not yet known, so experiment rollout remains disabled.

## Blockers

- Production migration `006_add_conversion_lifecycle.sql` has not been applied.
- Required production values `LEAD_HASH_SECRET`, `SMTP_PASSWORD`, `EMAIL_CRON_SECRET` and `GROQ_API_KEY` are not configured in the local production environment.
- CRM delivery remains intentionally disabled until an authorised HTTPS endpoint and separate integration secrets are available.
- Chrome DevTools MCP requires a Codex desktop restart before its tools can be exercised in this task.

## Next action

Restart Codex, provide the four required production secrets, apply migration 006 to the production database, configure the authorised CRM endpoint if required, then rerun the release gate before deployment.
