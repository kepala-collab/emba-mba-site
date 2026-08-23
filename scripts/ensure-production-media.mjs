import { createHash } from "node:crypto";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const MEDIA = [
  {
    path: "public/media/abc-graduation.mp4",
    url: "https://raw.githubusercontent.com/kepala-collab/emba-mba-site/75bf286/public/media/abc-graduation.mp4",
    sha256: "15d2e73eacf37f3cd3e49570e6619421859f7c9f37779989e6afaad5e3311c9b",
  },
  {
    path: "public/media/abc-graduation-mobile.mp4",
    url: "https://raw.githubusercontent.com/kepala-collab/emba-mba-site/75bf286/public/media/abc-graduation-mobile.mp4",
    sha256: "5db68750d799afc86d543f4d1ce48ab68c249fbac7213769ac0a4e815737d796",
  },
];

function digest(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

async function validFile(path, sha256) {
  try {
    return digest(await readFile(path)) === sha256;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

async function ensureMedia(asset) {
  const target = resolve(asset.path);
  if (await validFile(target, asset.sha256)) return;

  const response = await fetch(asset.url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Unable to restore ${asset.path}: HTTP ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  if (digest(buffer) !== asset.sha256) {
    throw new Error(`Integrity check failed for ${asset.path}`);
  }

  await mkdir(dirname(target), { recursive: true });
  const temporary = `${target}.download`;
  await writeFile(temporary, buffer);
  await rm(target, { force: true });
  await rename(temporary, target);
  console.log(`Restored verified production media: ${asset.path}`);
}

await Promise.all(MEDIA.map(ensureMedia));
