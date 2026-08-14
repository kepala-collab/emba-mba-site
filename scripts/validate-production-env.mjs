import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const file = process.argv[2] || ".env.production";
const raw = readFileSync(resolve(process.cwd(), file), "utf8");
const values = new Map();

for (const line of raw.split(/\r?\n/)) {
  const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
  if (match) values.set(match[1], match[2].trim().replace(/^['"]|['"]$/g, ""));
}

const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_TURNSTILE_SITE_KEY",
  "TURNSTILE_VERIFY_URL",
  "DB_HOST",
  "DB_PORT",
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
  "LEAD_HASH_SECRET",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "EMAIL_FROM_NAME",
  "EMAIL_REPLY_TO",
  "EMAIL_CRON_SECRET",
  "GROQ_API_KEY",
];

const placeholders = /(paste-|change-me|example|placeholder|<.+>)/i;
const failures = [];
for (const key of required) {
  const value = values.get(key) || "";
  if (!value) failures.push(`${key}: missing`);
  else if (placeholders.test(value)) failures.push(`${key}: placeholder value`);
}

for (const key of ["LEAD_HASH_SECRET", "EMAIL_CRON_SECRET"]) {
  const value = values.get(key) || "";
  if (Buffer.byteLength(value, "utf8") < 32) failures.push(`${key}: must contain at least 32 bytes`);
}

if (values.get("LEAD_HASH_SECRET") && values.get("LEAD_HASH_SECRET") === values.get("EMAIL_CRON_SECRET")) {
  failures.push("LEAD_HASH_SECRET and EMAIL_CRON_SECRET must be different");
}

if (failures.length) {
  console.error(`Production environment validation failed:\n${failures.join("\n")}`);
  process.exit(1);
}

const optional = [
  "GOOGLE_SITE_VERIFICATION",
  "BING_SITE_VERIFICATION",
  "NEXT_PUBLIC_GTM_ID",
  "INDEXNOW_KEY",
  "INDEXNOW_CRON_SECRET",
  "NEXT_PUBLIC_PROVIDER_URL",
  "NEXT_PUBLIC_PROVIDER_LINKEDIN",
  "NEXT_PUBLIC_OPERATOR_LINKEDIN",
  "GROQ_MODEL",
];
const inactive = optional.filter((key) => !values.get(key));
console.log(`Required production variables are present in ${file}.`);
if (inactive.length) console.log(`Optional integrations not configured: ${inactive.join(", ")}`);
