import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import { join } from "node:path";
import nodemailer, { type Transporter } from "nodemailer";
import type { Pool, RowDataPacket } from "mysql2/promise";
import { SITE } from "@/lib/content";

const DATABASE_TIMEOUT_MS = 5_000;
const MAX_DELIVERY_ATTEMPTS = 5;
const MAX_BATCH_SIZE = 25;
const STALE_LOCK_MINUTES = 10;
const RETRY_DELAYS_MINUTES = [5, 15, 60, 240] as const;
const DEFAULT_SMTP_HOST = "smtp.hostinger.com";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_FROM_NAME = "Future Ready Programme Team";
const DEFAULT_REPLY_TO = "support@futurereadymba.com";
const DECISION_GUIDE_FILENAME = "future-ready-decision-guide.pdf";

type Language = "en" | "zh";

type SmtpConfiguration = {
  host: string;
  port: number;
  user: string;
  password: string;
  fromName: string;
  replyTo: string;
};

type OutboxRow = RowDataPacket & {
  id: number;
  lead_id: number;
  language: Language;
  attempt_count: number;
  message_id: string | null;
  name: string;
  email: string;
  contact_preference: ContactPreference | null;
};

type ContactPreference = "programme_call" | "in_person_meeting" | "online_meeting" | "details_first" | "whatsapp";

type ClaimedOutboxRow = Omit<OutboxRow, "attempt_count" | "message_id"> & {
  attempt_count: number;
  message_id: string;
};

export type EmailOutboxResult = {
  configured: boolean;
  processed: number;
  sent: number;
  retried: number;
  failed: number;
};

const globalForEmail = globalThis as typeof globalThis & {
  embaSmtpTransporter?: Transporter;
};

function cleanHeaderValue(value: string, maximumLength: number): string {
  // oxlint-disable-next-line no-control-regex -- Header control bytes must be stripped.
  return value.replace(/[\r\n\u0000-\u001F\u007F]/g, " ").trim().slice(0, maximumLength);
}

function isEmailAddress(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function smtpConfiguration(): SmtpConfiguration | null {
  const user = process.env.SMTP_USER?.trim().toLowerCase() || "";
  const password = process.env.SMTP_PASSWORD || "";
  const host = process.env.SMTP_HOST?.trim() || DEFAULT_SMTP_HOST;
  const requestedPort = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT);
  const port = Number.isInteger(requestedPort) && requestedPort > 0 && requestedPort <= 65_535
    ? requestedPort
    : DEFAULT_SMTP_PORT;
  const fromName = cleanHeaderValue(
    process.env.EMAIL_FROM_NAME || DEFAULT_FROM_NAME,
    120,
  ) || DEFAULT_FROM_NAME;
  const replyTo = (process.env.EMAIL_REPLY_TO?.trim().toLowerCase() || DEFAULT_REPLY_TO);

  if (!user || !password || !isEmailAddress(user) || !isEmailAddress(replyTo)) return null;
  return { host, port, user, password, fromName, replyTo };
}

function smtpTransporter(config: SmtpConfiguration): Transporter {
  if (!globalForEmail.embaSmtpTransporter) {
    globalForEmail.embaSmtpTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: true,
      auth: { user: config.user, pass: config.password },
      pool: true,
      maxConnections: 2,
      maxMessages: 50,
      connectionTimeout: 5_000,
      greetingTimeout: 5_000,
      socketTimeout: 10_000,
      tls: {
        minVersion: "TLSv1.2",
        servername: config.host,
      },
    });
  }

  return globalForEmail.embaSmtpTransporter;
}

function safePersonName(name: string, language: Language): string {
  // oxlint-disable-next-line no-control-regex -- Stored legacy names are defensively normalised.
  const normalized = name.replace(/[\r\n\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized) return language === "zh" ? "您好" : "there";
  return (language === "zh" ? normalized : normalized.split(" ")[0]).slice(0, 60);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function programmeUrl(language: Language): string {
  let url: URL;
  try {
    url = new URL(language === "zh" ? "/zh/resources/advancement-brief" : "/resources/advancement-brief", SITE.url);
  } catch {
    url = new URL(language === "zh" ? "/zh/resources/advancement-brief" : "/resources/advancement-brief", "https://futurereadymba.com");
  }
  url.searchParams.set("utm_source", "transactional_email");
  url.searchParams.set("utm_medium", "email");
  url.searchParams.set("utm_campaign", "application_received");
  url.searchParams.set("utm_content", language);
  return url.toString();
}

function decisionGuideAttachment() {
  const path = join(process.cwd(), "public", "downloads", DECISION_GUIDE_FILENAME);
  if (!existsSync(path)) return [];
  return [{
    filename: "Future-Ready-Executive-MBA-Decision-Guide.pdf",
    path,
    contentType: "application/pdf",
  }];
}

function whatsAppUrl(language: Language): string {
  const message = language === "zh"
    ? "您好，我已提交 Future Ready 高管 MBA 课程沟通请求，希望进一步了解课程。"
    : "Hello Future Ready EMBA team, I requested a programme conversation and would like to learn more.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function buildApplicationReceivedEmail(input: {
  name: string;
  language: Language;
  contactPreference?: ContactPreference | null;
}) {
  const { language } = input;
  const personName = safePersonName(input.name, language);
  const escapedName = escapeHtml(personName);
  const siteUrl = programmeUrl(language);
  const waUrl = whatsAppUrl(language);
  const preference = input.contactPreference || "programme_call";
  const preferenceLabel = language === "zh"
    ? {
        programme_call: "简短通话，了解课程是否适合",
        in_person_meeting: "在双方同意的地点面谈",
        online_meeting: "线上课程说明会",
        details_first: "先发送资料，暂不通话",
        whatsapp: "通过 WhatsApp 沟通",
      }[preference]
    : {
        programme_call: "a short programme-fit call",
        in_person_meeting: "an in-person meeting at an agreed location",
        online_meeting: "an online information meeting",
        details_first: "programme details first, with no call yet",
        whatsapp: "a WhatsApp conversation",
      }[preference];

  if (language === "zh") {
    const subject = "我们已收到您的课程沟通请求";
    const text = [
      `${personName}，您好：`,
      "",
      "感谢您联系我们。我们已收到您的请求；《课程决策指南》已随邮件附上，课程资料也可通过以下链接查看。",
      "",
      `您的选择：${preferenceLabel}。课程团队将按此方式跟进。`,
      "",
      "此邮件仅确认我们已收到沟通请求，并不构成录取或付款承诺。",
      "",
      `2026 课程资料：${siteUrl}`,
      `WhatsApp：${waUrl}`,
      "",
      "Future Ready Programme Team",
      DEFAULT_REPLY_TO,
    ].join("\n");

    return {
      subject,
      text,
      html: emailHtml({
        language,
        preheader: "您的课程沟通请求已安全收到。",
        greeting: `${escapedName}，您好：`,
        introduction: "感谢您联系我们。我们已收到您的请求；《课程决策指南》已随邮件附上，课程资料也可通过以下链接查看。",
        nextHeading: "接下来",
        nextCopy: `您的选择：${preferenceLabel}。课程团队将按此方式跟进。`,
        notice: "此邮件仅确认我们已收到沟通请求，并不构成录取或付款承诺。",
        siteLabel: "查看 2026 课程资料",
        whatsAppLabel: "通过 WhatsApp 联系 Future Ready 高管 MBA",
        siteUrl,
        waUrl,
      }),
    };
  }

  const subject = "We’ve received your programme conversation request";
  const text = [
    `Hello ${personName},`,
    "",
    "Thank you for contacting us. We received your request. Your private decision guide is attached, and your programme plan is available below.",
    "",
    `Your preference: ${preferenceLabel}. The programme team will follow up accordingly.`,
    "",
    "This email confirms your conversation request only. It is not an offer of admission or a payment commitment.",
    "",
    `2026 programme plan: ${siteUrl}`,
    `WhatsApp: ${waUrl}`,
    "",
    "Future Ready Programme Team",
    DEFAULT_REPLY_TO,
  ].join("\n");

  return {
    subject,
    text,
    html: emailHtml({
      language,
      preheader: "Your programme conversation request has been received securely.",
      greeting: `Hello ${escapedName},`,
      introduction: "Thank you for contacting us. We received your request. Your private decision guide is attached, and your programme plan is available below.",
      nextHeading: "What happens next",
      nextCopy: `Your preference: ${preferenceLabel}. The programme team will follow up accordingly.`,
      notice: "This email confirms your conversation request only. It is not an offer of admission or a payment commitment.",
      siteLabel: "Open the 2026 programme plan",
      whatsAppLabel: "Contact Future Ready EMBA on WhatsApp",
      siteUrl,
      waUrl,
    }),
  };
}

function emailHtml(input: {
  language: Language;
  preheader: string;
  greeting: string;
  introduction: string;
  nextHeading: string;
  nextCopy: string;
  notice: string;
  siteLabel: string;
  whatsAppLabel: string;
  siteUrl: string;
  waUrl: string;
}): string {
  const dir = "ltr";
  return `<!doctype html>
<html lang="${input.language === "zh" ? "zh-Hans" : "en"}" dir="${dir}">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;background:#f3f4f6;color:#111827;font-family:Arial,'Helvetica Neue',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(input.preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f4f6;">
      <tr><td align="center" style="padding:24px 12px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <tr><td style="background:#0b1220;padding:24px 30px;color:#ffffff;">
            <div style="font-size:12px;line-height:18px;letter-spacing:.12em;text-transform:uppercase;color:#d6b777;">Future Ready</div>
            <div style="font-size:22px;line-height:30px;font-weight:700;margin-top:2px;">Executive MBA</div>
          </td></tr>
          <tr><td style="padding:30px;">
            <p style="margin:0 0 18px;font-size:17px;line-height:27px;font-weight:700;">${input.greeting}</p>
            <p style="margin:0 0 22px;font-size:16px;line-height:26px;color:#374151;">${escapeHtml(input.introduction)}</p>
            <div style="margin:0 0 22px;padding:18px 20px;background:#f8fafc;border-left:4px solid #b58a3a;">
              <p style="margin:0 0 6px;font-size:14px;line-height:22px;font-weight:700;color:#111827;">${escapeHtml(input.nextHeading)}</p>
              <p style="margin:0;font-size:15px;line-height:24px;color:#374151;">${escapeHtml(input.nextCopy)}</p>
            </div>
            <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>
              <td style="padding:0 10px 10px 0;"><a href="${escapeHtml(input.siteUrl)}" style="display:inline-block;padding:12px 18px;border-radius:6px;background:#8f1d2c;color:#ffffff;text-decoration:none;font-size:14px;line-height:20px;font-weight:700;">${escapeHtml(input.siteLabel)}</a></td>
              <td style="padding:0 0 10px;"><a href="${escapeHtml(input.waUrl)}" style="display:inline-block;padding:11px 17px;border-radius:6px;border:1px solid #d1d5db;color:#111827;text-decoration:none;font-size:14px;line-height:20px;font-weight:700;">${escapeHtml(input.whatsAppLabel)}</a></td>
            </tr></table>
            <p style="margin:14px 0 0;font-size:13px;line-height:21px;color:#6b7280;">${escapeHtml(input.notice)}</p>
          </td></tr>
          <tr><td style="padding:20px 30px;background:#f8fafc;border-top:1px solid #e5e7eb;font-size:12px;line-height:19px;color:#6b7280;">
            <strong style="color:#374151;">Future Ready Programme Team</strong><br>
            <a href="mailto:${DEFAULT_REPLY_TO}" style="color:#6b7280;">${DEFAULT_REPLY_TO}</a> · ${escapeHtml(SITE.phone)}
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

function errorCode(error: unknown): string {
  if (!error || typeof error !== "object") return "send_error";
  const candidate = error as { code?: unknown; responseCode?: unknown };
  const responseCode = Number(candidate.responseCode);
  if (Number.isInteger(responseCode) && responseCode >= 400 && responseCode <= 599) {
    return `smtp_${Math.floor(responseCode / 100)}xx`;
  }
  if (typeof candidate.code === "string" && /^[A-Z0-9_-]{1,48}$/.test(candidate.code)) {
    return candidate.code.toLowerCase();
  }
  return "send_error";
}

async function claimNextOutboxRow(
  pool: Pool,
  leadId?: number,
): Promise<ClaimedOutboxRow | null> {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    await connection.execute({
      sql: `UPDATE lead_email_outbox
        SET status = 'failed', locked_at = NULL, last_error_code = 'delivery_timeout'
        WHERE status = 'processing'
          AND locked_at < DATE_SUB(UTC_TIMESTAMP(6), INTERVAL ${STALE_LOCK_MINUTES} MINUTE)
          AND attempt_count >= ?`,
      values: [MAX_DELIVERY_ATTEMPTS],
      timeout: DATABASE_TIMEOUT_MS,
    });
    await connection.execute({
      sql: `UPDATE lead_email_outbox
        SET status = 'pending', locked_at = NULL, next_attempt_at = UTC_TIMESTAMP(6),
          last_error_code = 'delivery_timeout'
        WHERE status = 'processing'
          AND locked_at < DATE_SUB(UTC_TIMESTAMP(6), INTERVAL ${STALE_LOCK_MINUTES} MINUTE)
          AND attempt_count < ?`,
      values: [MAX_DELIVERY_ATTEMPTS],
      timeout: DATABASE_TIMEOUT_MS,
    });

    const values = leadId ? [leadId, MAX_DELIVERY_ATTEMPTS] : [MAX_DELIVERY_ATTEMPTS];
    const leadPredicate = leadId ? "AND o.lead_id = ?" : "";
    const [rows] = await connection.execute<OutboxRow[]>({
      sql: `SELECT
        o.id, o.lead_id, o.language, o.attempt_count, o.message_id,
        l.name, l.email, l.contact_preference
      FROM lead_email_outbox o
      INNER JOIN leads l ON l.id = o.lead_id
      WHERE o.status = 'pending'
        AND o.next_attempt_at <= UTC_TIMESTAMP(6)
        ${leadPredicate}
        AND o.attempt_count < ?
      ORDER BY o.next_attempt_at ASC, o.id ASC
      LIMIT 1
      FOR UPDATE`,
      values,
      timeout: DATABASE_TIMEOUT_MS,
    });

    const row = rows[0];
    if (!row) {
      await connection.commit();
      return null;
    }

    const messageId = row.message_id || `<${randomUUID()}@futurereadymba.com>`;
    const attemptCount = Number(row.attempt_count) + 1;
    await connection.execute({
      sql: `UPDATE lead_email_outbox
        SET status = 'processing', attempt_count = ?, locked_at = UTC_TIMESTAMP(6),
          message_id = ?, last_error_code = NULL
        WHERE id = ?`,
      values: [attemptCount, messageId, row.id],
      timeout: DATABASE_TIMEOUT_MS,
    });
    await connection.commit();
    return { ...row, attempt_count: attemptCount, message_id: messageId };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

async function markSent(pool: Pool, row: ClaimedOutboxRow): Promise<void> {
  await pool.execute({
    sql: `UPDATE lead_email_outbox
      SET status = 'sent', sent_at = UTC_TIMESTAMP(6), locked_at = NULL,
        last_error_code = NULL
      WHERE id = ? AND status = 'processing'`,
    values: [row.id],
    timeout: DATABASE_TIMEOUT_MS,
  });
}

async function markDeliveryFailure(
  pool: Pool,
  row: ClaimedOutboxRow,
  failureCode: string,
): Promise<"retried" | "failed"> {
  if (row.attempt_count >= MAX_DELIVERY_ATTEMPTS) {
    await pool.execute({
      sql: `UPDATE lead_email_outbox
        SET status = 'failed', locked_at = NULL, last_error_code = ?
        WHERE id = ? AND status = 'processing'`,
      values: [failureCode, row.id],
      timeout: DATABASE_TIMEOUT_MS,
    });
    return "failed";
  }

  const delayMinutes = RETRY_DELAYS_MINUTES[row.attempt_count - 1] ?? 240;
  const nextAttempt = new Date(Date.now() + delayMinutes * 60_000);
  await pool.execute({
    sql: `UPDATE lead_email_outbox
      SET status = 'pending', next_attempt_at = ?, locked_at = NULL,
        last_error_code = ?
      WHERE id = ? AND status = 'processing'`,
    values: [nextAttempt, failureCode, row.id],
    timeout: DATABASE_TIMEOUT_MS,
  });
  return "retried";
}

async function sendOutboxRow(
  transporter: Transporter,
  config: SmtpConfiguration,
  row: ClaimedOutboxRow,
): Promise<void> {
  const email = buildApplicationReceivedEmail({
    name: row.name,
    language: row.language === "zh" ? "zh" : "en",
    contactPreference: row.contact_preference,
  });
  const result = await transporter.sendMail({
    from: { name: config.fromName, address: config.user },
    to: row.email,
    replyTo: config.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
    attachments: decisionGuideAttachment(),
    messageId: row.message_id,
    headers: {
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
    },
  });

  const accepted = Array.isArray(result.accepted) ? result.accepted.length : 0;
  if (accepted < 1) throw Object.assign(new Error("SMTP recipient was not accepted"), { code: "EENVELOPE" });
}

export async function processLeadEmailOutbox(
  pool: Pool,
  options: { limit?: number; leadId?: number } = {},
): Promise<EmailOutboxResult> {
  const config = smtpConfiguration();
  const result: EmailOutboxResult = {
    configured: Boolean(config),
    processed: 0,
    sent: 0,
    retried: 0,
    failed: 0,
  };
  if (!config) return result;

  const transporter = smtpTransporter(config);
  const requestedLimit = Number(options.limit || 10);
  const limit = Math.min(MAX_BATCH_SIZE, Math.max(1, Math.floor(requestedLimit)));

  for (let index = 0; index < limit; index += 1) {
    const row = await claimNextOutboxRow(pool, options.leadId);
    if (!row) break;
    result.processed += 1;

    try {
      await sendOutboxRow(transporter, config, row);
      await markSent(pool, row);
      result.sent += 1;
    } catch (error) {
      const outcome = await markDeliveryFailure(pool, row, errorCode(error));
      result[outcome] += 1;
      console.error("Lead acknowledgement delivery deferred", {
        type: error instanceof Error ? error.name : "UnknownError",
        code: errorCode(error),
        attempt: row.attempt_count,
      });
    }
  }

  return result;
}
