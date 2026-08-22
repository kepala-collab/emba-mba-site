import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  decodeEmailParameter,
  encodeEmailParameter,
  unsubscribeConfigured,
  unsubscribeToken,
  unsubscribeUrl,
  verifyUnsubscribeToken,
} from "../unsubscribe";

const previousSecret = process.env.UNSUBSCRIBE_TOKEN_SECRET;

beforeEach(() => {
  process.env.UNSUBSCRIBE_TOKEN_SECRET = "test-unsubscribe-secret-with-more-than-32-bytes";
});

afterEach(() => {
  if (previousSecret === undefined) delete process.env.UNSUBSCRIBE_TOKEN_SECRET;
  else process.env.UNSUBSCRIBE_TOKEN_SECRET = previousSecret;
});

describe("unsubscribe links", () => {
  it("encodes the email, signs it, and verifies only the original address", () => {
    const email = "Manager@example.com";
    const encoded = encodeEmailParameter(email);
    const token = unsubscribeToken(email);

    expect(decodeEmailParameter(encoded)).toBe("manager@example.com");
    expect(token).toMatch(/^[0-9a-f]{32}$/);
    expect(verifyUnsubscribeToken(email, token)).toBe(true);
    expect(verifyUnsubscribeToken("other@example.com", token)).toBe(false);
    const replacement = token.endsWith("0") ? "1" : "0";
    expect(verifyUnsubscribeToken(email, `${token.slice(0, -1)}${replacement}`)).toBe(false);
  });

  it("creates a language-aware one-click URL without exposing the signing secret", () => {
    const url = new URL(unsubscribeUrl("manager@example.com", "zh"));

    expect(url.origin).toBe("https://futurereadymba.com");
    expect(url.pathname).toBe("/api/unsubscribe");
    expect(url.searchParams.get("l")).toBe("zh");
    expect(url.searchParams.get("e")).toBeTruthy();
    expect(url.searchParams.get("t")).toMatch(/^[0-9a-f]{32}$/);
    expect(url.toString()).not.toContain(process.env.UNSUBSCRIBE_TOKEN_SECRET!);
  });

  it("fails closed when the signing secret is missing or too short", () => {
    process.env.UNSUBSCRIBE_TOKEN_SECRET = "short";

    expect(unsubscribeConfigured()).toBe(false);
    expect(() => unsubscribeToken("manager@example.com")).toThrow(/at least 32 bytes/);
    expect(verifyUnsubscribeToken("manager@example.com", "0".repeat(32))).toBe(false);
  });
});
