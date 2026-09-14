-- Adds a retry counter to the nurture log so a transient SMTP failure can be
-- retried once (60 minutes later) instead of silently dropping the step.
-- Additive: one NOT NULL column with a default of 0 for existing rows.
-- Run once on the production database before enabling nurture retry.

ALTER TABLE lead_nurture_log
  ADD COLUMN attempt_count TINYINT UNSIGNED NOT NULL DEFAULT 0;
