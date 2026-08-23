import { afterEach, describe, expect, it, vi } from "vitest";
import { verifyTurnstile } from "../turnstile-server";

const secret = "test-secret-not-used-outside-this-unit-test";
const allowedHostnames = "futurereadymba.com,www.futurereadymba.com";

function result(body: object, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

afterEach(() => vi.restoreAllMocks());

describe("direct Turnstile verification", () => {
  it("posts the token directly to Siteverify and accepts the expected action and hostname", async () => {
    const fetchImplementation = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      expect(init?.headers).toEqual({ "Content-Type": "application/x-www-form-urlencoded" });
      const body = init?.body as URLSearchParams;
      expect(body.get("secret")).toBe(secret);
      expect(body.get("response")).toBe("fresh-token");
      expect(body.get("remoteip")).toBe("203.0.113.10");
      expect(body.get("idempotency_key")).toMatch(/^[0-9a-f-]{36}$/i);
      return result({ success: true, action: "lead-submit", hostname: "www.futurereadymba.com" });
    });

    await expect(verifyTurnstile({
      token: "fresh-token",
      remoteIp: "203.0.113.10",
      expectedAction: "lead-submit",
      fetchImplementation,
      secret,
      allowedHostnames,
    })).resolves.toEqual({ status: "valid", reason: "verified" });
  });

  it("rejects a valid challenge issued for a different action", async () => {
    const fetchImplementation = vi.fn(async () =>
      result({ success: true, action: "programme-chat", hostname: "futurereadymba.com" }),
    );
    const verification = await verifyTurnstile({
      token: "fresh-token",
      expectedAction: "lead-submit",
      fetchImplementation,
      secret,
      allowedHostnames,
    });
    expect(verification).toMatchObject({ status: "invalid", reason: "action_mismatch" });
  });

  it("rejects a valid challenge issued for an unapproved hostname", async () => {
    const fetchImplementation = vi.fn(async () =>
      result({ success: true, action: "lead-submit", hostname: "lookalike.example" }),
    );
    const verification = await verifyTurnstile({
      token: "fresh-token",
      expectedAction: "lead-submit",
      fetchImplementation,
      secret,
      allowedHostnames,
    });
    expect(verification).toMatchObject({ status: "invalid", reason: "hostname_mismatch" });
  });

  it("fails closed when Siteverify is unavailable or server configuration is missing", async () => {
    const networkFailure = await verifyTurnstile({
      token: "fresh-token",
      expectedAction: "lead-submit",
      fetchImplementation: vi.fn(async () => { throw new Error("network"); }),
      secret,
      allowedHostnames,
    });
    expect(networkFailure).toEqual({ status: "unavailable", reason: "siteverify_unavailable" });

    const missingSecret = await verifyTurnstile({
      token: "fresh-token",
      expectedAction: "lead-submit",
      secret: "",
      allowedHostnames,
    });
    expect(missingSecret).toEqual({ status: "unavailable", reason: "configuration" });
  });

  it("rejects replay when Cloudflare marks a redeemed token as duplicate", async () => {
    const fetchImplementation = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(result({ success: true, action: "lead-submit", hostname: "futurereadymba.com" }))
      .mockResolvedValueOnce(result({ success: false, "error-codes": ["timeout-or-duplicate"] }));
    const options = {
      token: "single-use-token",
      expectedAction: "lead-submit",
      fetchImplementation,
      secret,
      allowedHostnames,
    };

    await expect(verifyTurnstile(options)).resolves.toMatchObject({ status: "valid" });
    await expect(verifyTurnstile(options)).resolves.toEqual({
      status: "invalid",
      reason: "challenge_rejected",
      errorCodes: ["timeout-or-duplicate"],
    });
    expect(fetchImplementation).toHaveBeenCalledTimes(2);
  });
});
