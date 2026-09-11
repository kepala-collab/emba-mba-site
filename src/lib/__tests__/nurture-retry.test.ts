import { describe, expect, it } from "vitest";
import {
  NURTURE_MAX_ATTEMPTS,
  NURTURE_RETRY_DELAY_MINUTES,
  isRetryEligible,
  isTerminalAfterFailure,
  isWithinMaxAge,
} from "../nurture-retry";

describe("nurture retry policy", () => {
  it("a failed send (attempt_count 1) is not eligible before 60 minutes have passed", () => {
    const lastAttemptAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-01T00:59:00Z");
    expect(isRetryEligible(1, lastAttemptAt, now)).toBe(false);
  });

  it("a failed send (attempt_count 1) is eligible exactly 60 minutes after the first attempt", () => {
    const lastAttemptAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-01T01:00:00Z");
    expect(isRetryEligible(1, lastAttemptAt, now, NURTURE_RETRY_DELAY_MINUTES)).toBe(true);
  });

  it("a never-attempted row (attempt_count 0) is not a retry candidate", () => {
    const lastAttemptAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-02T00:00:00Z");
    expect(isRetryEligible(0, lastAttemptAt, now)).toBe(false);
  });

  it("a row already at the max attempt count is not retried again", () => {
    const lastAttemptAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-02T00:00:00Z");
    expect(isRetryEligible(2, lastAttemptAt, now)).toBe(false);
  });

  it("the first failure (attempt_count 0 before failure) stays claimable, not terminal", () => {
    expect(isTerminalAfterFailure(0, NURTURE_MAX_ATTEMPTS)).toBe(false);
  });

  it("the second failure (attempt_count 1 before failure) is terminal", () => {
    expect(isTerminalAfterFailure(1, NURTURE_MAX_ATTEMPTS)).toBe(true);
  });

  it("a row within MAX_LEAD_AGE_DAYS is retryable", () => {
    const createdAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-01-30T00:00:00Z");
    expect(isWithinMaxAge(createdAt, now, 45)).toBe(true);
  });

  it("a row older than MAX_LEAD_AGE_DAYS is never retried", () => {
    const createdAt = new Date("2026-01-01T00:00:00Z");
    const now = new Date("2026-03-01T00:00:00Z");
    expect(isWithinMaxAge(createdAt, now, 45)).toBe(false);
  });
});
