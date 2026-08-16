import { Buffer } from "node:buffer";
import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";
import { canonicalFileContent, computeReleaseFingerprint } from "./release-fingerprint.mjs";

describe("release fingerprint canonicalization", () => {
  test("normalizes Windows and Unix text line endings to identical bytes", () => {
    const windows = canonicalFileContent(Buffer.from("first\r\nsecond\r\n", "utf8"));
    const unix = canonicalFileContent(Buffer.from("first\nsecond\n", "utf8"));

    expect(windows.equals(unix)).toBe(true);
  });

  test("does not rewrite binary content", () => {
    const binary = Buffer.from([0x00, 0x0d, 0x0a, 0xff]);

    expect(canonicalFileContent(binary).equals(binary)).toBe(true);
  });

  test("the frozen release manifest matches the current source", () => {
    const declared = readFileSync("release-id.txt", "utf8").trim();

    expect(declared).toBe(computeReleaseFingerprint());
  });
});
