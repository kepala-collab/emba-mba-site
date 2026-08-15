# Analytics and campaign attribution

The site has a vendor-neutral measurement layer and does not load analytics or advertising
scripts by default. A Google Tag Manager container can be configured with
`NEXT_PUBLIC_GTM_ID`; it is loaded only after the visitor grants analytics consent through
the site consent API. Meta Pixel, LinkedIn Insight Tag, TikTok Pixel and other advertising
scripts remain unconfigured until IDs, privacy wording and ownership are confirmed.

## Data layer

All measurement events are pushed to `window.dataLayer`. The browser also exposes:

```js
window.futureReadyAnalytics.track(eventName, properties)
window.futureReadyAnalytics.setConsent({ analytics: "granted", marketing: "granted" })
window.futureReadyAnalytics.getAttribution()
```

Consent updates emit an internal browser event so the optional GTM loader can start
without a page refresh. Tags inside GTM must still respect the recorded consent state.

Every event includes `event_id`, `event_timestamp`, `schema_version`, `site_id`,
`page_path`, `page_type`, normalized `page_language` (`en` or `zh`), `page_locale`
(`en-MY` or `zh-Hans`), and available campaign attribution. Events
must never include a name, email address, phone number, company name, free-text form
input, or Turnstile token.

## Primary event taxonomy

| Event | Definition | Suggested platform mapping |
| --- | --- | --- |
| `page_view` | A rendered route/query combination | GA4 `page_view`; platform page view |
| `cta_click` | A primary or secondary programme CTA | GA4 custom/select-content event |
| `contact_click` | WhatsApp, phone, or email intent | GA4 custom contact event |
| `whatsapp_click` | WhatsApp-specific contact intent | Secondary Google Ads/GA4 conversion; Meta custom conversion |
| `lead_form_start` | First interaction with a lead form | Funnel diagnostic/custom event |
| `conversion_context_set` | Visitor confirms an intent route and optional cohort | Funnel segmentation only |
| `lead_form_step_view` | A progressive-form step becomes available | Funnel diagnostic/custom event |
| `lead_form_step_complete` | A progressive-form step passes its local requirements | Funnel diagnostic/custom event |
| `cohort_select` | Visitor selects a specific intake from the schedule | High-intent content event |
| `generate_lead` | API-confirmed, Turnstile-verified lead | GA4 `generate_lead`; Google Ads conversion; Meta `Lead`; LinkedIn conversion; TikTok `SubmitForm` |

Operational events are `analytics_ready`, `consent_default`, `consent_update`,
`page_navigation`, `lead_form_view`, `lead_form_submit`, `lead_form_step_back`,
`lead_form_error`, `experiment_assignment`, `web_vital`, and `client_error`.
Only `generate_lead` should be configured as the primary lead conversion.
`whatsapp_click` may be configured as a secondary conversion, but it measures a click,
not a delivered message, conversation, or qualified lead. Confirmed WhatsApp outcomes
require a future WhatsApp Business webhook or CRM integration.

`web_vital` and `client_error` are emitted only after analytics consent. Web-vital
properties are `metric_name`, `metric_value`, `metric_delta`, `metric_id`,
`metric_rating`, and `navigation_type`. Client-error events contain only an error class
and source category; messages, stack traces, contact data, query strings and form values
are excluded. Progressive-form events may include controlled enums and numeric steps,
but never field values or visitor-entered validation text.

## Attribution

The first and latest campaign-bearing touch in the current browser-tab session are
stored in `sessionStorage` under `fr_emba_attribution_v1`. The state contains:

- Core UTMs: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- Extended UTMs: `utm_id`, `utm_source_platform`, `utm_creative_format`, `utm_marketing_tactic`
- Click IDs: Google (`gclid`, `gbraid`, `wbraid`), Meta (`fbclid`), Microsoft (`msclkid`),
  TikTok (`ttclid`), LinkedIn (`li_fat_id`), Reddit (`rdt_cid`), Pinterest (`epik`), and
  Snapchat (`ScCid`, normalized internally as `sccid`)
- Landing page, query-free referrer, inferred traffic source/medium, capture time, and a
  random attribution session ID

Lead submissions also store the normalized page language, selected cohort and intent so
CRM and offline-conversion exports can be segmented consistently by language and route.

Query strings and URL fragments are not stored as landing pages or referrers. Attribution
is submitted to the lead API only after the visitor consents and successfully submits the
form. Apply migrations through `database/migrations/006_add_conversion_lifecycle.sql`
before deploying this code.

## Campaign naming convention

Use lowercase, stable values and avoid spaces or personal data:

```text
utm_source=google|meta|linkedin|tiktok|newsletter|partner
utm_medium=cpc|paid_social|email|referral|organic_social
utm_campaign=2026_q1_malaysia_executive_mba
utm_content=<audience>_<creative>_<variant>
utm_term=<paid-search-keyword-only>
utm_id=<ad-platform-campaign-id>
```

Do not place names, emails, phone numbers, or other personal data in UTM parameters.

## Consent and platform adoption

The data layer starts with analytics and marketing consent set to `denied`. First-party
session attribution does not send a network request. A future consent interface can call
`window.futureReadyAnalytics.setConsent(...)`; each platform loader must respect that
state before loading or sending an event.

When adopting a platform:

1. Add its public ID through a `NEXT_PUBLIC_*` environment variable.
2. Load its script only after the appropriate consent state is granted.
3. Map the stable events above; do not add platform-specific event logic to page components.
4. Update the CSP allowlist and Privacy Policy before deployment.
5. Test consent-denied, consent-granted, duplicate-event, SPA-navigation, and lead-success flows.
6. Verify events with the platform's official debugger before enabling campaign optimisation.

## Experiment controls

`NEXT_PUBLIC_EXPERIMENTS_ENABLED` defaults to `false`. When it is `true`, assignment
still occurs only after analytics consent and contains an anonymous experiment ID and
variant—never contact data. Do not enable an experiment until its hypothesis, primary
metric, guardrails, minimum detectable effect, sample-size calculation, run window and
decision owner are recorded in `CONVERSION-OPERATIONS.md`.
