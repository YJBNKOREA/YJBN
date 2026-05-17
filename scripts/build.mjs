import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of ['index.html', 'ko', 'zh', 'ru', 'vi', 'src', 'public', 'README.md']) {
  if (existsSync(new URL(`../${entry}`, import.meta.url))) {
    await cp(new URL(`../${entry}`, import.meta.url), new URL(`../dist/${entry}`, import.meta.url), {
      recursive: true,
    });
  }
}

console.log('Static YJBN website built to dist/.');
