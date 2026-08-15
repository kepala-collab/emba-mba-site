export const LEAD_INTENTS = [
  "individual_self_funded",
  "employer_sponsored",
  "employer_evaluating",
  "international",
  "mandarin",
  "details_first",
] as const;

export const CONTACT_WINDOWS = [
  "weekday_morning",
  "weekday_afternoon",
  "weekday_evening",
  "weekend",
  "flexible",
] as const;

export type LeadIntent = (typeof LEAD_INTENTS)[number];
export type ContactWindow = (typeof CONTACT_WINDOWS)[number];

export function isLeadIntent(value: unknown): value is LeadIntent {
  return typeof value === "string" && (LEAD_INTENTS as readonly string[]).includes(value);
}
export function isContactWindow(value: unknown): value is ContactWindow {
  return typeof value === "string" && (CONTACT_WINDOWS as readonly string[]).includes(value);
}

export function normalizeCohortKey(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim().toLowerCase();
  return /^[a-z0-9][a-z0-9_-]{0,63}$/.test(clean) ? clean : null;
}

export function cohortKey(language: string, cohort: string): string {
  return `${language}-${cohort}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}
