import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const routeSlugs = ['about', 'brands', 'products', 'rd-quality', 'global-business', 'oem-odm-obm', 'contact'];
const locales = ['ko', 'zh', 'ru', 'vi'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of ['index.html', 'ko', 'zh', 'ru', 'vi', 'src', 'public', 'README.md']) {
  if (existsSync(new URL(`../${entry}`, import.meta.url))) {
    await cp(new URL(`../${entry}`, import.meta.url), new URL(`../dist/${entry}`, import.meta.url), {
      recursive: true,
    });
  }
}

const englishTemplate = await readFile(new URL('../index.html', import.meta.url), 'utf8');
for (const route of routeSlugs) {
  const routeDir = new URL(`../dist/${route}/`, import.meta.url);
  await mkdir(routeDir, { recursive: true });
  await writeFile(new URL('index.html', routeDir), englishTemplate);
}

for (const locale of locales) {
  const template = await readFile(new URL(`../${locale}/index.html`, import.meta.url), 'utf8');
  for (const route of routeSlugs) {
    const routeDir = new URL(`../dist/${locale}/${route}/`, import.meta.url);
    await mkdir(routeDir, { recursive: true });
    await writeFile(new URL('index.html', routeDir), template);
  }
}

console.log('Static YJBN website built to dist/ with multilingual route folders.');
