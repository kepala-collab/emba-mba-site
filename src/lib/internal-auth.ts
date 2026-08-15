import { timingSafeEqual } from "node:crypto";

export type SecretStatus = "valid" | "invalid" | "unconfigured";

export function bearerSecretStatus(
  request: Request,
  environmentVariable: string,
  minimumBytes = 32,
): SecretStatus {
  const secret = process.env[environmentVariable]?.trim() || "";
  if (Buffer.byteLength(secret, "utf8") < minimumBytes) return "unconfigured";

  const provided = request.headers.get("authorization") || "";
  const expected = `Bearer ${secret}`;
  const providedBuffer = Buffer.from(provided, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");
  if (providedBuffer.length !== expectedBuffer.length) return "invalid";
  return timingSafeEqual(providedBuffer, expectedBuffer) ? "valid" : "invalid";
}
