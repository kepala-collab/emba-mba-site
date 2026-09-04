#!/usr/bin/env node
// Cross-platform Python launcher for the PDF pipeline npm scripts.
//
// Locally on Windows the only working interpreter is `py -3` (plain
// `python`/`python3` resolve to a Microsoft Store app-execution-alias stub
// that exits immediately without running anything). In CI, `actions/setup-python`
// puts a real `python3` on PATH. Rather than hard-coding either, this probes
// candidates in order and forwards its script path argument through to
// whichever one actually works.
import { spawnSync } from "node:child_process";

const CANDIDATES = ["python3", "py", "python"];
const PROBE_TIMEOUT_MS = 5000;

function worksAsInterpreter(bin) {
  const args = bin === "py" ? ["-3", "--version"] : ["--version"];
  const result = spawnSync(bin, args, {
    stdio: "ignore",
    timeout: PROBE_TIMEOUT_MS,
  });
  return !result.error && result.status === 0;
}

function findInterpreter() {
  for (const bin of CANDIDATES) {
    if (worksAsInterpreter(bin)) return bin;
  }
  return null;
}

function main() {
  const [scriptPath, ...extraArgs] = process.argv.slice(2);
  if (!scriptPath) {
    console.error("usage: node scripts/pdf/run.mjs <script.py> [args...]");
    process.exit(1);
  }

  const interpreter = findInterpreter();
  if (!interpreter) {
    console.error(
      `No working Python interpreter found. Tried, in order: ${CANDIDATES.join(", ")} (each probed with --version).`
    );
    process.exit(1);
  }

  const baseArgs = interpreter === "py" ? ["-3"] : [];
  const result = spawnSync(interpreter, [...baseArgs, scriptPath, ...extraArgs], {
    stdio: "inherit",
  });

  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  process.exit(result.status === null ? 1 : result.status);
}

main();
