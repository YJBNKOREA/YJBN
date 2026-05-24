import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const routeSlugs = ['about', 'brands', 'products', 'rd-quality', 'global-business', 'oem-odm-obm', 'contact'];
const locales = ['ko', 'zh', 'ru', 'vi'];
const notFoundRedirect = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>YJBN</title>
    <script>
      (() => {
        const base = '/YJBN';
        const routes = new Set(${JSON.stringify(routeSlugs)});
        const locales = new Set(${JSON.stringify(locales)});
        const path = window.location.pathname.replace(/\\/+$/, '');
        const query = window.location.search || '';
        const hash = window.location.hash || '';

        if (path === base) {
          window.location.replace(base + '/' + query + hash);
          return;
        }

        if (path.startsWith(base + '/')) {
          const segments = path.slice(base.length + 1).split('/').filter(Boolean);
          const isEnglishRoute = segments.length === 1 && routes.has(segments[0]);
          const isLocaleRoot = segments.length === 1 && locales.has(segments[0]);
          const isLocalizedRoute = segments.length === 2 && locales.has(segments[0]) && routes.has(segments[1]);

          if (isEnglishRoute || isLocaleRoot || isLocalizedRoute) {
            window.location.replace(path + '/' + query + hash);
            return;
          }
        }

        window.location.replace(base + '/' + query + hash);
      })();
    </script>
  </head>
  <body></body>
</html>
`;

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

await writeFile(new URL('../dist/404.html', import.meta.url), notFoundRedirect);

console.log('Static YJBN website built to dist/ with multilingual route folders.');
