-- Conversion OS v1: durable public identity, replay-safe submissions, lifecycle audit and CRM outbox.
-- Apply after 005_add_lead_contact_preference.sql with a migration/admin account.
-- Runtime grants required after migration:
--   leads: SELECT, INSERT, UPDATE
--   lead_audit_events: SELECT, INSERT (no UPDATE or DELETE)
--   lead_integration_outbox: SELECT, INSERT, UPDATE (no DELETE)

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS lead_uuid CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER id,
  ADD COLUMN IF NOT EXISTS submission_id CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER lead_uuid,
  ADD COLUMN IF NOT EXISTS site_id VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL DEFAULT 'future_ready_emba' AFTER submission_id,
  ADD COLUMN IF NOT EXISTS lead_intent
    ENUM('individual_self_funded', 'employer_sponsored', 'employer_evaluating', 'international', 'mandarin', 'details_first')
    NULL AFTER contact_preference,
  ADD COLUMN IF NOT EXISTS cohort_key VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER lead_intent,
  ADD COLUMN IF NOT EXISTS preferred_contact_window
    ENUM('weekday_morning', 'weekday_afternoon', 'weekday_evening', 'weekend', 'flexible')
    NULL AFTER cohort_key,
  ADD COLUMN IF NOT EXISTS lifecycle_stage
    ENUM('new', 'contacted', 'meeting_scheduled', 'evaluating', 'employer_process', 'applied', 'enrolled', 'not_proceeding')
    NOT NULL DEFAULT 'new' AFTER preferred_contact_window,
  ADD COLUMN IF NOT EXISTS lifecycle_version INT UNSIGNED NOT NULL DEFAULT 1 AFTER lifecycle_stage,
  ADD COLUMN IF NOT EXISTS stage_updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) AFTER lifecycle_version,
  ADD COLUMN IF NOT EXISTS consent_version VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER attribution_json,
  ADD COLUMN IF NOT EXISTS consent_at DATETIME(6) NULL AFTER consent_version,
  ADD COLUMN IF NOT EXISTS form_version VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER consent_at,
  ADD COLUMN IF NOT EXISTS experiment_json TEXT NULL AFTER form_version;

UPDATE leads SET lead_uuid = UUID() WHERE lead_uuid IS NULL;

ALTER TABLE leads
  MODIFY COLUMN lead_uuid CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  MODIFY COLUMN contact_preference
    ENUM('programme_call', 'in_person_meeting', 'online_meeting', 'details_first', 'whatsapp')
    NULL,
  ADD UNIQUE INDEX IF NOT EXISTS leads_uuid_unique (lead_uuid),
  ADD UNIQUE INDEX IF NOT EXISTS leads_submission_id_unique (submission_id),
  ADD INDEX IF NOT EXISTS leads_lifecycle_index (lifecycle_stage, stage_updated_at),
  ADD INDEX IF NOT EXISTS leads_cohort_index (cohort_key, created_at);

CREATE TABLE IF NOT EXISTS lead_audit_events (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  event_uuid CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  lead_id BIGINT UNSIGNED NOT NULL,
  event_type VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  from_stage VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NULL,
  to_stage VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NULL,
  actor_type ENUM('public', 'system', 'integration', 'operator') NOT NULL,
  actor_ref_hash BINARY(32) NULL,
  metadata_json TEXT NULL,
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  UNIQUE KEY lead_audit_event_uuid_unique (event_uuid),
  KEY lead_audit_lead_index (lead_id, created_at, id),
  KEY lead_audit_type_index (event_type, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS lead_integration_outbox (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  event_uuid CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  lead_id BIGINT UNSIGNED NOT NULL,
  event_type VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  schema_version VARCHAR(16) CHARACTER SET ascii COLLATE ascii_bin NOT NULL DEFAULT '1.0',
  status ENUM('pending', 'processing', 'delivered', 'dead_letter') NOT NULL DEFAULT 'pending',
  attempt_count TINYINT UNSIGNED NOT NULL DEFAULT 0,
  next_attempt_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  locked_at DATETIME(6) NULL,
  delivered_at DATETIME(6) NULL,
  response_status SMALLINT UNSIGNED NULL,
  last_error_code VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NULL,
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id),
  UNIQUE KEY lead_integration_event_uuid_unique (event_uuid),
  KEY lead_integration_processing_index (status, next_attempt_at, id),
  KEY lead_integration_lead_index (lead_id, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
