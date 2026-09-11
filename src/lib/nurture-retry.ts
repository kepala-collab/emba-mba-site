// Pure retry-decision helpers for the nurture sender. Kept side-effect free so
// the retry policy can be unit tested without a database connection.

export const NURTURE_RETRY_DELAY_MINUTES = 60;
export const NURTURE_MAX_ATTEMPTS = 2;

/**
 * Whether a lead row that has already failed once for this step is eligible
 * to be retried right now. Only attempt_count === 1 (one prior failure) is
 * retriable — attempt_count 0 means "never attempted" (a fresh claim, not a
 * retry) and attempt_count >= 2 means the row is already terminal.
 */
export function isRetryEligible(
  attemptCount: number,
  lastAttemptAt: Date,
  now: Date,
  delayMinutes: number = NURTURE_RETRY_DELAY_MINUTES,
): boolean {
  if (attemptCount !== 1) return false;
  const elapsedMs = now.getTime() - lastAttemptAt.getTime();
  return elapsedMs >= delayMinutes * 60_000;
}

/**
 * Whether a failure at the given attempt count (the count BEFORE this
 * failure is recorded) makes the row terminal. After the second failure
 * (attemptCount was 1, becomes 2) the row is terminal.
 */
export function isTerminalAfterFailure(
  attemptCountBeforeFailure: number,
  maxAttempts: number = NURTURE_MAX_ATTEMPTS,
): boolean {
  return attemptCountBeforeFailure + 1 >= maxAttempts;
}

/** Whether a lead created at `createdAt` is still within the nurture age window. */
export function isWithinMaxAge(createdAt: Date, now: Date, maxAgeDays: number): boolean {
  const ageMs = now.getTime() - createdAt.getTime();
  return ageMs <= maxAgeDays * 24 * 60 * 60 * 1000;
}
