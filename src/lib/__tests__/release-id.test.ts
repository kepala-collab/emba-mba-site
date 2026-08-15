import { afterEach, expect, test, vi } from "vitest";

const originalReleaseId = process.env.RELEASE_ID;

afterEach(() => {
  if (originalReleaseId === undefined) delete process.env.RELEASE_ID;
  else process.env.RELEASE_ID = originalReleaseId;
  vi.resetModules();
});

test("a retained hosting environment value cannot override the source fingerprint", async () => {
  process.env.RELEASE_ID = "content-stale-hosting-value";
  vi.resetModules();

  const { default: config } = await import("../../../next.config");
  const rules = await config.headers?.();
  const releaseHeader = rules
    ?.flatMap((rule) => rule.headers)
    .find((header) => header.key === "X-Release-ID");

  expect(releaseHeader?.value).toMatch(/^content-[a-f0-9]{12}$/);
  expect(releaseHeader?.value).not.toBe(process.env.RELEASE_ID);
});
