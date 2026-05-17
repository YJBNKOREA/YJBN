import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { renderHeader } from '../src/components/Header.js';
import { renderFooter } from '../src/components/Footer.js';
import { renderHomePage } from '../src/components/HomePage.js';
import { en } from '../src/data/en.js';
import { ko } from '../src/data/ko.js';
import { zh } from '../src/data/zh.js';
import { ru } from '../src/data/ru.js';
import { vi } from '../src/data/vi.js';

const dist = new URL('../dist/', import.meta.url);
const pages = [
  { source: 'index.html', output: 'index.html', content: en },
  { source: 'ko/index.html', output: 'ko/index.html', content: ko },
  { source: 'zh/index.html', output: 'zh/index.html', content: zh },
  { source: 'ru/index.html', output: 'ru/index.html', content: ru },
  { source: 'vi/index.html', output: 'vi/index.html', content: vi },
];

const pagesBasePath = process.env.PAGES_BASE_PATH ?? '/YJBN';

function renderApp(content) {
  const renderContent = { ...content, basePath: pagesBasePath };
  return `
  ${renderHeader(renderContent)}
  ${renderHomePage(renderContent)}
  ${renderFooter(renderContent)}
`;
}

async function writePrerenderedPage({ source, output, content }) {
  const template = await readFile(new URL(`../${source}`, import.meta.url), 'utf8');
  const html = template.replace('<div id="app"></div>', `<div id="app">${renderApp(content)}</div>`);
  const outputUrl = new URL(`../dist/${output}`, import.meta.url);
  await mkdir(new URL('.', outputUrl), { recursive: true });
  await writeFile(outputUrl, html);
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of ['src', 'public', 'README.md']) {
  if (existsSync(new URL(`../${entry}`, import.meta.url))) {
    await cp(new URL(`../${entry}`, import.meta.url), new URL(`../dist/${entry}`, import.meta.url), {
      recursive: true,
    });
  }
}

for (const page of pages) {
  await writePrerenderedPage(page);
}

await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');

console.log('Static YJBN website built to dist/.');
