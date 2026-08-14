-- Run once with a database migration/admin account before deploying this release.
-- The runtime user needs SELECT, INSERT and UPDATE on this table, but no DDL or DELETE.

CREATE TABLE IF NOT EXISTS lead_email_outbox (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id BIGINT UNSIGNED NOT NULL,
  template_key VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  language ENUM('en', 'zh') NOT NULL,
  recipient_hash BINARY(32) NOT NULL,
  queued_date DATE NOT NULL,
  status ENUM('pending', 'processing', 'sent', 'failed') NOT NULL DEFAULT 'pending',
  attempt_count TINYINT UNSIGNED NOT NULL DEFAULT 0,
  next_attempt_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  locked_at DATETIME(6) NULL,
  message_id VARCHAR(255) CHARACTER SET ascii COLLATE ascii_bin NULL,
  last_error_code VARCHAR(64) CHARACTER SET ascii COLLATE ascii_bin NULL,
  created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  updated_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  sent_at DATETIME(6) NULL,
  PRIMARY KEY (id),
  UNIQUE KEY lead_email_outbox_lead_template_unique (lead_id, template_key),
  UNIQUE KEY lead_email_outbox_recipient_daily_unique (
    recipient_hash, template_key, queued_date
  ),
  KEY lead_email_outbox_processing_index (status, next_attempt_at, id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
