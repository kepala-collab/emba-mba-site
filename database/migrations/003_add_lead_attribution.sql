-- Run once with a database migration/admin account before deploying this release.
-- The runtime user continues to need SELECT, INSERT and UPDATE, but no DDL or DELETE.

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS page_language ENUM('en', 'zh') NULL AFTER page_path,
  ADD COLUMN IF NOT EXISTS landing_page VARCHAR(2048) NULL AFTER page_language,
  ADD COLUMN IF NOT EXISTS first_referrer TEXT NULL AFTER referrer,
  ADD COLUMN IF NOT EXISTS click_id_type VARCHAR(32) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER utm_content,
  ADD COLUMN IF NOT EXISTS click_id VARCHAR(255) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER click_id_type,
  ADD COLUMN IF NOT EXISTS attribution_session_id CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NULL AFTER click_id,
  ADD COLUMN IF NOT EXISTS attribution_json TEXT NULL AFTER attribution_session_id,
  ADD INDEX IF NOT EXISTS leads_click_id_index (click_id_type, click_id);
