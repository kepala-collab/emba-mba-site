# Future Ready Conversion OS release readiness

- Candidate/version: local working tree, 2026-08-15
- Scope: conversion journey, lead reliability, measurement, accessibility and performance
- Owner: Right Dots Resources
- Planned cohort/time: not scheduled
- Rollback owner and trigger: deployment owner; rollback on elevated submission failures, duplicate leads, delivery backlog or material Web Vitals regression

## Outcome and exclusions

The candidate gives English and Mandarin visitors a progressive, retry-safe enquiry journey with cohort and intent context, append-only audit history, a durable signed integration outbox and consent-gated, non-PII measurement. It does not create a browser-accessible CRM, enable experiments, provision a third-party CRM endpoint or apply production database changes.

## Gate evidence

| Gate | Evidence | Result | Residual risk | Owner |
|---|---|---|---|---|
| Functional journey | 608 general browser assertions, 56 design/content assertions and 19 conversion-flow assertions | pass | Live provider and database behaviour still require production smoke tests | Deployment owner |
| Authorization and isolation | Same-origin public create route; internal endpoints require timing-safe bearer secrets; no public lead-read route | pass locally | Rotate and store production secrets outside source control | Deployment owner |
| Data/migration | Migration 006 reviewed; idempotent submission ID and lead UUID contracts covered by tests | blocked | Production backup and migration have not been executed | Database owner |
| Messaging/integration durability | Transactional outboxes, exponential retry, dead-letter state, HMAC signature and no-PII logs | pass locally | Authorised HTTPS CRM endpoint is not configured | Integration owner |
| Accessibility/usability | Lighthouse Accessibility 100; mobile English and Mandarin form journeys pass | pass | Confirm with keyboard and screen-reader sampling after production deployment | Product owner |
| Performance/SLO | Lighthouse mobile Performance 95, LCP 2.3 s, CLS 0, TBT 40 ms | pass | Recheck against the live CDN and production database | Deployment owner |
| Reliability/restore | Retry-safe client submission and durable email/integration queues | conditional | Production restore evidence and queue alerting are operational tasks | Operations owner |
| Audit/observability | Append-only lifecycle events, health endpoint and consent-gated Web Vitals/error telemetry | pass locally | Connect alerts and review retention in production | Operations owner |
| AI evaluation | Programme assistant remains informational with human escalation | not applicable | Provider key is not configured locally | Programme owner |

## Rollout and abort thresholds

- Cohort sequence: internal smoke test, limited production release, then full traffic.
- Monitored indicators: lead API success rate, duplicate rate, email and CRM outbox depth/age, Web Vitals and contact conversion.
- Abort thresholds: any lead loss or disclosure, repeated submissions above baseline, oldest pending outbox item above 15 minutes, or p75 LCP above 2.5 seconds after a representative sample.
- Data reconciliation: compare accepted submission IDs, lead rows, audit events and both outboxes before and after rollout.

## Decision

- GO / NO-GO: NO-GO for production; READY FOR CONFIGURATION locally.
- Decision owner: deployment owner.
- Rationale: code and local quality gates pass, but migration 006 and mandatory production secrets are not yet in place.
- Follow-up and expiry: rerun all environment, migration, build, browser, integration and live Lighthouse gates immediately before deployment.
