import { randomUUID } from "node:crypto";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MAX_TOKEN_LENGTH = 2_048;

type TurnstileSiteverifyResult = {
  success?: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export type TurnstileVerification = {
  status: "valid" | "invalid" | "unavailable";
  reason:
    | "verified"
    | "invalid_token"
    | "configuration"
    | "siteverify_unavailable"
    | "challenge_rejected"
    | "action_mismatch"
    | "hostname_mismatch";
  errorCodes?: string[];
};

type VerifyTurnstileOptions = {
  token: string;
  remoteIp?: string | null;
  expectedAction: string;
  fetchImplementation?: typeof fetch;
  secret?: string;
  allowedHostnames?: string;
};

function normalizeHostname(value: string): string {
  return value.trim().toLowerCase().replace(/\.$/, "");
}

function hostnameAllowlist(raw: string): Set<string> {
  return new Set(
    raw
      .split(",")
      .map(normalizeHostname)
      .filter(Boolean),
  );
}

export async function verifyTurnstile({
  token,
  remoteIp,
  expectedAction,
  fetchImplementation = fetch,
  secret = process.env.TURNSTILE_SECRET?.trim() || "",
  allowedHostnames = process.env.TURNSTILE_HOSTNAMES || "",
}: VerifyTurnstileOptions): Promise<TurnstileVerification> {
  const normalizedToken = token.trim();
  if (!normalizedToken || normalizedToken.length > MAX_TOKEN_LENGTH) {
    return { status: "invalid", reason: "invalid_token" };
  }

  const expectedHostnames = hostnameAllowlist(allowedHostnames);
  if (!secret || !expectedAction || expectedHostnames.size === 0) {
    return { status: "unavailable", reason: "configuration" };
  }

  const body = new URLSearchParams({
    secret,
    response: normalizedToken,
    idempotency_key: randomUUID(),
  });
  if (remoteIp && remoteIp !== "unknown") body.set("remoteip", remoteIp);

  let result: TurnstileSiteverifyResult;
  try {
    const response = await fetchImplementation(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return { status: "unavailable", reason: "siteverify_unavailable" };
    result = (await response.json()) as TurnstileSiteverifyResult;
  } catch {
    return { status: "unavailable", reason: "siteverify_unavailable" };
  }

  const errorCodes = Array.isArray(result["error-codes"])
    ? result["error-codes"].filter((code): code is string => typeof code === "string")
    : undefined;
  if (result.success !== true) {
    return { status: "invalid", reason: "challenge_rejected", errorCodes };
  }
  if (result.action !== expectedAction) {
    return { status: "invalid", reason: "action_mismatch", errorCodes };
  }
  const hostname = typeof result.hostname === "string" ? normalizeHostname(result.hostname) : "";
  if (!hostname || !expectedHostnames.has(hostname)) {
    return { status: "invalid", reason: "hostname_mismatch", errorCodes };
  }

  return { status: "valid", reason: "verified" };
}
