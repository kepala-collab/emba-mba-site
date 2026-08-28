import { existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const [, , inputArg, outputArg, widthArg, qualityArg, sharpenArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error(
    "Usage: npm run media:optimize-image -- <source> <destination.webp> [maxWidth] [quality] [sharpenSigma]",
  );
  process.exit(1);
}

const input = resolve(inputArg);
const output = resolve(outputArg);
const width = widthArg ? Number.parseInt(widthArg, 10) : undefined;
const quality = qualityArg ? Number.parseInt(qualityArg, 10) : 82;
const sharpenSigma = sharpenArg ? Number.parseFloat(sharpenArg) : undefined;

if (!existsSync(input)) {
  console.error(`Source image not found: ${input}`);
  process.exit(1);
}

if (input === output) {
  console.error("Source and destination must be different files.");
  process.exit(1);
}

if (
  (width !== undefined && (!Number.isInteger(width) || width < 1)) ||
  quality < 1 ||
  quality > 100 ||
  (sharpenSigma !== undefined && (!Number.isFinite(sharpenSigma) || sharpenSigma < 0.3 || sharpenSigma > 2))
) {
  console.error(
    "maxWidth must be a positive integer, quality must be between 1 and 100, and sharpenSigma must be between 0.3 and 2.",
  );
  process.exit(1);
}

const pipeline = sharp(input).autoOrient();
if (width) pipeline.resize({ width, withoutEnlargement: true });
if (sharpenSigma) {
  pipeline.sharpen({
    sigma: sharpenSigma,
    m1: 0.7,
    m2: 2.2,
    x1: 2,
    y2: 10,
    y3: 18,
  });
}

const info = await pipeline
  .webp({
    quality,
    alphaQuality: 90,
    effort: 6,
    smartSubsample: true,
  })
  .toFile(output);

const inputBytes = statSync(input).size;
const reduction = ((1 - info.size / inputBytes) * 100).toFixed(1);

console.log(
  `WebP created: ${info.width}x${info.height}, ${inputBytes} -> ${info.size} bytes (${reduction}% smaller)`,
);
