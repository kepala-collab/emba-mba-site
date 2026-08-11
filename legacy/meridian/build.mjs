// Vercel build script: assembles the static site into ./public from the repo files.
// (Now that Vercel deploys straight from GitHub, this just copies — no remote fetching.)
import { mkdir, copyFile } from 'fs/promises';

const FILES = [
  'index.html', 'lp-google.html', 'lp-meta.html', 'thankyou.html', 'robots.txt', 'sitemap.xml', 'og-image.png',
  'zh/index.html', 'zh/lp-google.html', 'zh/lp-meta.html', 'zh/thankyou.html',
];

await mkdir('public/zh', { recursive: true });
for (const f of FILES) {
  await copyFile(f, 'public/' + f);
  console.log('copied', f);
}
console.log('site assembled into ./public');
