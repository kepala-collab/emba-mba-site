import { spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { extname, resolve } from "node:path";

const [, , inputArg, outputArg, webmArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error(
    "Usage: npm run media:compress-hero -- <source.mp4> <destination.mp4> [destination.webm]",
  );
  process.exit(1);
}

const input = resolve(inputArg);
const output = resolve(outputArg);
const webmOutput = resolve(
  webmArg || `${output.slice(0, -extname(output).length)}.webm`,
);

if (!existsSync(input)) {
  console.error(`Source video not found: ${input}`);
  process.exit(1);
}

const ffmpeg = process.env.FFMPEG_PATH || "ffmpeg";
const motionFilter =
  "[0:v]trim=start=0:end=3.6,setpts=(PTS-STARTPTS)/1.10,minterpolate=fps=30:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1,split=2[fwd][revsrc];[revsrc]reverse[rev];[fwd][rev]concat=n=2:v=1:a=0[outv]";

function encode(args, label) {
  const result = spawnSync(
    ffmpeg,
    [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      input,
      "-filter_complex",
      motionFilter,
      "-map",
      "[outv]",
      "-an",
      ...args,
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
  );

  if (result.error) {
    console.error(`Unable to run FFmpeg (${ffmpeg}): ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(result.stderr.trim() || `${label} compression failed.`);
    process.exit(result.status || 1);
  }
}

encode(
  [
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-tune",
    "film",
    "-crf",
    "26",
    "-x264-params",
    "aq-mode=3:aq-strength=0.8:deblock=-1,-1",
    "-profile:v",
    "high",
    "-level",
    "4.0",
    "-pix_fmt",
    "yuv420p",
    "-r",
    "30",
    "-fps_mode",
    "cfr",
    "-g",
    "60",
    "-keyint_min",
    "30",
    "-sc_threshold",
    "0",
    "-movflags",
    "+faststart",
    output,
  ],
  "H.264",
);

encode(
  [
    "-c:v",
    "libvpx-vp9",
    "-deadline",
    "good",
    "-cpu-used",
    "2",
    "-row-mt",
    "1",
    "-tile-columns",
    "1",
    "-frame-parallel",
    "1",
    "-b:v",
    "0",
    "-crf",
    "37",
    "-g",
    "60",
    "-pix_fmt",
    "yuv420p",
    webmOutput,
  ],
  "VP9",
);

const inputBytes = statSync(input).size;
const outputBytes = statSync(output).size;
const webmBytes = statSync(webmOutput).size;
const mp4Reduction = ((1 - outputBytes / inputBytes) * 100).toFixed(1);
const webmReduction = ((1 - webmBytes / inputBytes) * 100).toFixed(1);

console.log(
  `Hero video compressed from ${inputBytes} bytes: MP4 ${outputBytes} bytes (${mp4Reduction}% smaller), WebM ${webmBytes} bytes (${webmReduction}% smaller).`,
);
