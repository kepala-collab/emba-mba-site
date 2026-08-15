# Future Ready Conversion OS

## Outcome

The system turns an anonymous programme visitor into one durable, auditable conversation
request, preserves the selected intent and cohort, acknowledges the request, and can
deliver lifecycle events to an authorised CRM without making lead capture depend on that
CRM being online.

## Journey and ownership

1. The visitor chooses one controlled intent and an optional published cohort.
2. The contact step collects only the information needed to respond and records the
   current PDPA consent version.
3. The public API verifies origin, body size, field contracts, Turnstile and durable rate
   limits.
4. One transaction writes the lead, append-only creation audit, acknowledgement outbox
   and CRM integration outbox. Success is returned only after commit.
5. Email and CRM delivery are retried independently. A delivery failure never deletes or
   duplicates the committed lead.
6. Authorised operations can advance the lifecycle through the secret-protected internal
   endpoint. Every transition requires an expected version and creates an audit event.

The programme operations owner owns response time and lifecycle accuracy. The website
owner owns availability, delivery queues, consent controls and measurement quality. The
CRM owner owns webhook verification, event deduplication and downstream access control.

## Lead contract

- `lead_uuid` is the immutable external reference. Numeric database IDs never leave the
  server.
- `submission_id` is created once in the browser and reused after network or API errors.
  Replaying it returns the existing logical lead.
- Daily email/phone deduplication remains a second defence against accidental repeated
  submissions from refreshed or older pages.
- `lead_intent`, `cohort_key`, `contact_preference` and `preferred_contact_window` are
  controlled enums. Free-text intent, campaign and lifecycle fields are not accepted.
- `consent_version`, `consent_at` and `form_version` identify the exact capture contract.
- Names, emails, phone numbers and companies never enter `window.dataLayer`.

## Lifecycle

The stages are `new`, `contacted`, `meeting_scheduled`, `evaluating`,
`employer_process`, `applied`, `enrolled` and `not_proceeding`.

Transitions are enforced server-side by `src/lib/lead-lifecycle.ts`. `enrolled` is
terminal. `not_proceeding` may reopen only through an explicit authorised transition.
The internal caller must send the current `expected_version`; stale concurrent updates
receive `409 version_conflict` instead of overwriting newer work.

Example authorised update:

```http
POST /api/internal/lead-lifecycle
Authorization: Bearer <LEAD_LIFECYCLE_SECRET>
Content-Type: application/json

{
  "lead_reference": "<lead_uuid>",
  "to_stage": "meeting_scheduled",
  "expected_version": 2,
  "actor_reference": "programme-operations",
  "reason_code": "meeting_confirmed"
}
```

`actor_reference` is stored only as a SHA-256 hash. Notes and personal data are not
accepted by this endpoint.

## CRM webhook

Set all four server-only values together:

```dotenv
CONVERSION_WEBHOOK_URL=https://crm.example.com/hooks/future-ready
CONVERSION_WEBHOOK_SECRET=<32+ random bytes>
CONVERSION_CRON_SECRET=<different 32+ random bytes>
LEAD_LIFECYCLE_SECRET=<different 32+ random bytes>
```

The webhook is HTTPS-only in production, does not follow redirects and has an eight-second
timeout. Each request includes:

- `X-Future-Ready-Event-Id`: immutable event UUID used for consumer deduplication.
- `X-Future-Ready-Timestamp`: Unix seconds.
- `X-Future-Ready-Signature`: `v1=` plus a hexadecimal HMAC-SHA256 of
  `<timestamp>.<exact request body>`.
- `Content-Digest`: SHA-256 digest of the exact request body.

The receiver must reject timestamps outside a five-minute window, compare the HMAC in
constant time, accept each event ID once, and return a 2xx status only after its own
durable write. It must not log the request body. The webhook contains applicant contact
data and may be configured only for an authorised processor covered by the relevant data
processing terms.

Run the delivery processor every five minutes:

```cron
*/5 * * * * curl -fsS -X POST -H "Authorization: Bearer <CONVERSION_CRON_SECRET>" https://futurereadymba.com/api/internal/integration-outbox
```

Delivery attempts use bounded backoff and end in `dead_letter` after six failures. A
dead-letter event requires owner review; do not delete it to clear a dashboard.

## Measurement model

North-star business outcome:

`enrolled leads / valid new leads`

Primary journey outcomes:

- Conversation-request conversion = `generate_lead / unique eligible apply-page sessions`.
- Qualified-conversation rate = leads reaching `meeting_scheduled` or `evaluating` /
  valid new leads.
- Employer-process rate = leads reaching `employer_process` / employer-intent leads.
- Application rate = leads reaching `applied` / valid new leads.

Diagnostic metrics:

- Route completion = `lead_form_step_complete(step 1) / lead_form_start`.
- Contact completion = `generate_lead / lead_form_step_view(step 2)`.
- Cohort-assisted conversion = `generate_lead with cohort_key / cohort_select`.
- Recovery rate = successful retry after `lead_form_error` / sessions with a form error.
- Acknowledgement delivery = sent email outbox rows / queued email outbox rows.
- CRM delivery = delivered integration rows / queued integration rows.

Guardrails:

- API rejection rate under 2% of human form submits, excluding Turnstile-confirmed abuse.
- Duplicate logical lead rate under 1% after idempotency and daily deduplication.
- No personal or free-text data in analytics events.
- p75 Core Web Vitals targets: LCP at or below 2.5 seconds, INP at or below 200 ms,
  CLS at or below 0.1.
- No sustained integration item older than 30 minutes and no unowned dead-letter item.

Report conversion metrics by language, intent, cohort and traffic source only when the
segment has enough volume to avoid identifying an individual. Keep business outcomes and
diagnostic events separate; a WhatsApp click is not a lead, meeting or enrolment.

## Experiment policy

Experiments are disabled by default with `NEXT_PUBLIC_EXPERIMENTS_ENABLED=false`.
Assignment requires analytics consent. The registry contains
`apply_value_frame_v1` as a dark-launch definition only; enabling the registry does not
authorise a live test without the record below.

Required experiment record:

- Hypothesis: a decision-support value frame increases valid conversation requests
  because it reduces perceived sales pressure.
- Control and treatment: one copy change only; route, price, form fields, privacy and
  programme claims remain identical.
- Primary metric: valid `generate_lead` per eligible apply-page session.
- Guardrails: form errors, WhatsApp exits, p75 INP/LCP/CLS, complaint/withdrawal signals,
  and qualified-conversation rate.
- Allocation unit: consented anonymous visitor; one assignment across the test window.
- Sample size: calculate from the measured baseline, agreed minimum detectable effect,
  95% confidence and 80% power. Do not invent a sample target before the baseline exists.
- Run window: at least one full business cycle and until the precomputed sample is met;
  no repeated significance checks.
- Decision owner: named before launch; document ship, iterate or stop and retain the
  result whether positive or negative.

## Operational checks

Use the secret-protected health endpoint without exposing applicant details:

```http
GET /api/internal/conversion-health
Authorization: Bearer <CONVERSION_CRON_SECRET>
```

It returns lead volume for the last 24 hours, pending/dead-letter integration counts,
pending/failed email counts and the age of the oldest integration item. HTTP 503 means
an operational threshold is degraded, not that the public site is necessarily offline.

Alert and investigate when:

- the health endpoint itself fails twice in succession;
- any dead-letter/failed item exists;
- the oldest integration item exceeds 30 minutes;
- valid lead creation drops to zero during an active campaign window;
- form error or Core Web Vitals guardrails regress after a release.

## Release order

1. Back up the production database and verify the restore owner.
2. Apply migration `006_add_conversion_lifecycle.sql` with the migration account.
3. Verify runtime grants; the runtime account must not receive DDL or DELETE.
4. Configure independent secrets and the authorised webhook URL, or leave the entire CRM
   integration block blank so it fails closed.
5. Deploy the application build.
6. Submit one clearly labelled English test lead and one Chinese test lead.
7. Replay one submission ID and confirm there is one logical lead and one creation event.
8. Confirm acknowledgement delivery, signed CRM delivery and a valid lifecycle transition.
9. Run the conversion health check, accessibility/browser suite and Chrome DevTools trace.
10. Keep experiments disabled until baseline and ownership requirements are satisfied.

Rollback the application if valid lead capture fails. The additive migration may remain in
place during an application rollback; do not drop its tables or columns during an incident.
