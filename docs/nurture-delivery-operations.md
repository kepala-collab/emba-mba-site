# Nurture delivery operations

The sender selects only the latest due step: day 3 before day 7, day 7 before day 14, and day 14 before day 45. An SMTP failure is retried once after 60 minutes. Earlier pending steps are superseded when a newer step is processed.

Preview candidates using the existing bearer secret and `POST /api/internal/nurture?dryRun=1&limit=5`. The JSON body `{"dryRun":true,"limit":5}` is also supported. A true flag in either format forces dry-run mode. A preview makes no database changes and sends no mail. Check `dryRun: true` in the response.

Before contacting SMTP, each delivery is reserved with a unique `message_id` beginning `sending:`. Successful delivery replaces that reservation with the SMTP receipt. Only the matching reservation may record a delivery result. Active reservations are not automatically reclaimed or overwritten by superseding older steps.

If SMTP accepts an email but the receipt cannot be stored, the response contains `receiptErrors` and returns HTTP 503. Runtime logs contain `Nurture delivery receipt needs reconciliation`, the lead ID, step, SMTP message ID and reservation token. The non-null reservation prevents an automatic duplicate, including on a retry attempt.

An interrupted process can also leave a reservation. Treat any `sending:` row as an uncertain outcome, not proof of failure. Compare runtime logs and the mail provider's delivery evidence before changing it. Restore a confirmed SMTP receipt only if the row still holds the matching reservation. Do not bulk-clear reservations: that can resend accepted mail. When delivery cannot be established, retain the reservation for manual review.

Migration 010 is sufficient for this implementation; no additional schema change is required. Optional CRM integration is separate from nurture and requires an intentionally configured destination and matching scheduler credentials.
