-- Run once with a database migration/admin account before deploying the app.
-- The runtime DB user only needs INSERT on this table.
CREATE TABLE IF NOT EXISTS leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  company VARCHAR(160) NULL,
  participant_type ENUM('malaysian', 'international') NOT NULL,
  programme_interest VARCHAR(160) NULL,
  page_path VARCHAR(2048) NULL,
  referrer TEXT NULL,
  utm_source VARCHAR(255) NULL,
  utm_medium VARCHAR(255) NULL,
  utm_campaign VARCHAR(255) NULL,
  utm_term VARCHAR(255) NULL,
  utm_content VARCHAR(255) NULL,
  source VARCHAR(100) NOT NULL DEFAULT 'emba-hub',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY leads_created_at_index (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
