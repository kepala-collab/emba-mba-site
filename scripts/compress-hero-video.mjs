import { spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";

const [, , inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error(
    "Usage: npm run media:compress-hero -- <source.mp4> <destination.mp4>",
  );
  process.exit(1);
}

const input = resolve(inputArg);
const output = resolve(outputArg);

if (!existsSync(input)) {
  console.error(`Source video not found: ${input}`);
  process.exit(1);
}

const ffmpeg = process.env.FFMPEG_PATH || "ffmpeg";
const result = spawnSync(
  ffmpeg,
  [
    "-hide_banner",
    "-loglevel",
    "error",
    "-y",
    "-i",
    input,
    "-map",
    "0:v:0",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "26",
    "-profile:v",
    "high",
    "-level",
    "4.0",
    "-pix_fmt",
    "yuv420p",
    "-r",
    "24",
    "-fps_mode",
    "cfr",
    "-g",
    "48",
    "-keyint_min",
    "48",
    "-sc_threshold",
    "0",
    "-movflags",
    "+faststart",
    "-an",
    output,
  ],
  { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
);

if (result.error) {
  console.error(`Unable to run FFmpeg (${ffmpeg}): ${result.error.message}`);
  process.exit(1);
}

if (result.status !== 0) {
  console.error(result.stderr.trim() || "FFmpeg compression failed.");
  process.exit(result.status || 1);
}

const inputBytes = statSync(input).size;
const outputBytes = statSync(output).size;
const reduction = ((1 - outputBytes / inputBytes) * 100).toFixed(1);

console.log(
  `Hero video compressed: ${inputBytes} -> ${outputBytes} bytes (${reduction}% smaller)`,
);
