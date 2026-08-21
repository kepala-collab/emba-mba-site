-- Conversion OS v2: make qualified leads a first-class lifecycle stage.
-- Apply after 006_add_conversion_lifecycle.sql before deploying code that writes this stage.

ALTER TABLE leads
  MODIFY COLUMN lifecycle_stage
    ENUM('new', 'contacted', 'qualified', 'meeting_scheduled', 'evaluating', 'employer_process', 'applied', 'enrolled', 'not_proceeding')
    NOT NULL DEFAULT 'new';
