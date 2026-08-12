-- Run once with a database migration/admin account before deploying this release.
-- The runtime user needs SELECT, INSERT and UPDATE, but no DDL or DELETE.

CREATE TABLE IF NOT EXISTS lead_rate_limits (
  scope VARCHAR(32) NOT NULL,
  fingerprint BINARY(32) NOT NULL,
  window_started_at DATETIME(6) NOT NULL,
  request_count INT UNSIGNED NOT NULL DEFAULT 1,
  window_expires_at DATETIME(6) NOT NULL,
  last_seen_at DATETIME(6) NOT NULL,
  PRIMARY KEY (scope, fingerprint),
  KEY lead_rate_limits_last_seen_index (last_seen_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS dedupe_hash BINARY(32) NULL AFTER source,
  ADD COLUMN IF NOT EXISTS dedupe_date DATE NULL AFTER dedupe_hash,
  ADD UNIQUE INDEX IF NOT EXISTS leads_daily_identity_unique (dedupe_date, dedupe_hash);
