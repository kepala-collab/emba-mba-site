-- Run once with a database migration/admin account before deploying this release.
-- Records how a prospective participant prefers to continue the conversation.

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS contact_preference
    ENUM('programme_call', 'in_person_meeting', 'online_meeting', 'details_first')
    NULL AFTER participant_type;
