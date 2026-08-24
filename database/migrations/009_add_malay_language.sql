-- Adds Bahasa Melayu ('ms') to every language enum so /ms pages can submit
-- leads, queue guide emails and join the nurture lane.
-- Run ONCE against the production database (idempotent: MODIFY is safe to re-run).

ALTER TABLE leads
  MODIFY COLUMN page_language ENUM('en', 'zh', 'ms') NULL;

ALTER TABLE lead_email_outbox
  MODIFY COLUMN language ENUM('en', 'zh', 'ms') NOT NULL;

ALTER TABLE lead_nurture_log
  MODIFY COLUMN language ENUM('en', 'zh', 'ms') NOT NULL;
