import { createHmac, timingSafeEqual } from "node:crypto";

export type UnsubscribeLanguage = "en" | "zh";

const TOKEN_BYTES = 16; // 32 hex characters — enough to make guessing infeasible.

function secret(): string {
  return process.env.UNSUBSCRIBE_TOKEN_SECRET?.trim() || "";
}

function requiredSecret(): string {
  const value = secret();
  if (Buffer.byteLength(value, "utf8") < 32) {
    throw new Error("UNSUBSCRIBE_TOKEN_SECRET must contain at least 32 bytes.");
  }
  return value;
}

export function unsubscribeConfigured(): boolean {
  return Buffer.byteLength(secret(), "utf8") >= 32;
}

export function unsubscribeToken(email: string): string {
  return createHmac("sha256", requiredSecret())
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, TOKEN_BYTES * 2);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!unsubscribeConfigured()) return false;
  const expected = Buffer.from(unsubscribeToken(email), "utf8");
  const provided = Buffer.from(String(token || ""), "utf8");
  if (expected.length !== provided.length) return false;
  return timingSafeEqual(expected, provided);
}

export function encodeEmailParameter(email: string): string {
  return Buffer.from(email.trim().toLowerCase(), "utf8").toString("base64url");
}

export function decodeEmailParameter(value: string): string | null {
  try {
    const email = Buffer.from(value, "base64url").toString("utf8").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return null;
    return email;
  } catch {
    return null;
  }
}

export function unsubscribeUrl(email: string, language: UnsubscribeLanguage, baseUrl = "https://futurereadymba.com"): string {
  const url = new URL("/api/unsubscribe", baseUrl);
  url.searchParams.set("e", encodeEmailParameter(email));
  url.searchParams.set("t", unsubscribeToken(email));
  url.searchParams.set("l", language);
  return url.toString();
}
