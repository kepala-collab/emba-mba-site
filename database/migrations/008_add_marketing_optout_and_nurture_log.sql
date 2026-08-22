-- Marketing opt-out flag on leads + nurture send log.
-- Run once on the production database before enabling the nurture cron.

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS marketing_opt_out TINYINT(1) NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS marketing_opt_out_at TIMESTAMP NULL DEFAULT NULL;

CREATE TABLE IF NOT EXISTS lead_nurture_log (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  lead_id BIGINT UNSIGNED NOT NULL,
  step VARCHAR(32) NOT NULL,
  language ENUM('en', 'zh') NOT NULL DEFAULT 'en',
  message_id VARCHAR(255) NULL,
  sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY lead_nurture_log_lead_step_unique (lead_id, step),
  KEY lead_nurture_log_lead_index (lead_id),
  CONSTRAINT lead_nurture_log_lead_fk FOREIGN KEY (lead_id) REFERENCES leads (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
