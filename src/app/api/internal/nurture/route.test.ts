import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ execute: vi.fn(), sendMail: vi.fn() }));
vi.mock("@/lib/db", () => ({ getDatabasePool: () => ({ execute: mocks.execute }) }));
vi.mock("@/lib/internal-auth", () => ({ bearerSecretStatus: () => "valid" }));
vi.mock("@/lib/lead-email", () => ({
  smtpConfiguration: () => ({ user: "sender@example.invalid", fromName: "Review", replyTo: "sender@example.invalid" }),
  smtpTransporter: () => ({ sendMail: mocks.sendMail }),
}));
vi.mock("@/lib/unsubscribe", () => ({ unsubscribeConfigured: () => true, unsubscribeUrl: () => "https://example.invalid/unsubscribe" }));
import { POST } from "./route";

type Log = { count: number; messageId: string | null; minute: number };
let logs: Map<string, Log>;
let minute: number;
let ageDays: number;
let failReceipt: boolean;
let writes: number;

async function run(query = "", body?: string) {
  return POST(new Request(`https://example.invalid/api/internal/nurture${query}`, { method: "POST", body }));
}

beforeEach(() => {
  logs = new Map(); minute = 0; ageDays = 4; failReceipt = false; writes = 0;
  mocks.sendMail.mockReset().mockResolvedValue({ messageId: "smtp-accepted" });
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  mocks.execute.mockReset().mockImplementation(async ({ sql, values: v }: { sql: string; values: (string | number)[] }) => {
    if (sql.startsWith("SELECT l.id")) {
      const [step, after, before, delay] = v;
      const g = logs.get(String(step));
      const eligible = !g || (g.messageId === null && g.count === 1 && g.minute <= minute - Number(delay));
      return [ageDays >= Number(after) && ageDays < Number(before) && eligible
        ? [{ id: 1, name: "Synthetic", email: "synthetic@example.invalid", language: "en" }] : []];
    }
    writes += 1;
    if (sql.startsWith("INSERT IGNORE")) {
      const step = String(v[1]);
      if (logs.has(step)) return [{ affectedRows: 0 }];
      logs.set(step, { count: 0, messageId: sql.includes("'superseded'") ? "superseded" : String(v[3]), minute });
      return [{ affectedRows: 1 }];
    }
    if (sql.includes("SET sent_at = NOW()")) {
      const g = logs.get(String(v[2]));
      if (g?.messageId === null && g.count === 1 && g.minute <= minute - Number(v[3])) {
        g.messageId = String(v[0]); g.minute = minute; return [{ affectedRows: 1 }];
      }
      return [{ affectedRows: 0 }];
    }
    if (sql.includes("SET message_id = IF")) {
      const g = logs.get(String(v[2]));
      if (g && g.messageId === v[3]) { g.messageId = g.count + 1 >= Number(v[0]) ? "send_failed" : null; g.count++; }
      return [{ affectedRows: 1 }];
    }
    if (sql.includes("SET message_id = 'superseded'")) {
      const g = logs.get(String(v[1]));
      if (g && g.messageId === null && g.count === 1) g.messageId = "superseded";
      return [{ affectedRows: 1 }];
    }
    if (sql.includes("SET message_id = ?")) {
      if (failReceipt) throw new Error("Injected database timeout after SMTP accepted");
      const g = logs.get(String(v[2]));
      if (g?.messageId !== v[3]) return [{ affectedRows: 0 }];
      g.messageId = String(v[0]); return [{ affectedRows: 1 }];
    }
    throw new Error(`Unexpected query: ${sql}`);
  });
});
afterEach(() => vi.restoreAllMocks());

describe("nurture route delivery safety", () => {
  it.each([false, true])("does not resend accepted mail after a receipt failure (retry=%s)", async (retry) => {
    if (retry) logs.set("day3", { count: 1, messageId: null, minute: -61 });
    failReceipt = true;
    const first = await run();
    expect(first.status).toBe(503);
    expect((await first.json()).receiptErrors).toBe(1);
    expect(logs.get("day3")?.messageId).toMatch(/^sending:/);
    minute = 61; failReceipt = false;
    await run();
    expect(mocks.sendMail).toHaveBeenCalledTimes(1);
  });

  it("retries an actual SMTP failure only after cooldown and stops after the second failure", async () => {
    mocks.sendMail.mockRejectedValue(new Error("SMTP unavailable"));
    await run();
    expect(logs.get("day3")).toMatchObject({ count: 1, messageId: null });
    minute = 59; await run(); expect(mocks.sendMail).toHaveBeenCalledTimes(1);
    minute = 60; await run(); expect(logs.get("day3")).toMatchObject({ count: 2, messageId: "send_failed" });
    minute = 121; await run(); expect(mocks.sendMail).toHaveBeenCalledTimes(2);
  });

  it.each([8, 15])("never sends an older retry after the latest step at age %s days", async (age) => {
    ageDays = age;
    logs.set("day3", { count: 1, messageId: null, minute: -120 });
    if (age === 15) logs.set("day7", { count: 1, messageId: null, minute: -120 });
    await run();
    expect(logs.get("day3")?.messageId).toBe("superseded");
    minute = 61; await run();
    expect(mocks.sendMail).toHaveBeenCalledTimes(1);
    expect(logs.get(age === 8 ? "day7" : "day14")?.messageId).toBe("smtp-accepted");
  });

  it.each(["already-sent", "sending:another-worker"])("preserves earlier receipt or active claim %s", async (messageId) => {
    ageDays = 8; logs.set("day3", { count: 1, messageId, minute: -120 });
    await run(); expect(logs.get("day3")?.messageId).toBe(messageId);
  });

  it("does not reclaim an in-flight retry even beyond the cooldown", async () => {
    logs.set("day3", { count: 1, messageId: "sending:another-worker", minute: -120 });
    await run(); expect(mocks.sendMail).not.toHaveBeenCalled();
  });

  it.each([7, 14, 45])("uses only the latest eligible age window at day %s", async (age) => {
    ageDays = age; await run();
    expect(mocks.sendMail).toHaveBeenCalledTimes(age === 45 ? 0 : 1);
    if (age !== 45) expect(logs.get(age === 7 ? "day7" : "day14")?.messageId).toBe("smtp-accepted");
  });

  it.each([
    ["?dryRun=1&limit=5", undefined],
    ["", '{"dryRun":true,"limit":5}'],
    ["?dryRun=0", '{"dryRun":true}'],
  ])("honours dry-run without database writes or SMTP: %s %s", async (query, body) => {
    const response = await run(query, body);
    expect((await response.json()).dryRun).toBe(true);
    expect(writes).toBe(0); expect(mocks.sendMail).not.toHaveBeenCalled();
  });

  it.each(['{"dryRun":', '{"dryRun":"true"}', '[]'])("rejects malformed or ambiguous operator input: %s", async (body) => {
    expect((await run("", body)).status).toBe(400);
    expect(writes).toBe(0); expect(mocks.sendMail).not.toHaveBeenCalled();
  });
});
