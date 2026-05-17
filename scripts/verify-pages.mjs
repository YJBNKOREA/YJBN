import { readFile } from 'node:fs/promises';

const pages = [
  { path: 'dist/index.html', expected: 'A Korean K-Beauty company for global hair care partnerships' },
  { path: 'dist/ko/index.html', expected: '글로벌 헤어케어 파트너를 위한 한국 K-Beauty 기업' },
  { path: 'dist/zh/index.html', expected: '面向全球美妆渠道的韩国K-Beauty头发护理合作伙伴' },
  { path: 'dist/ru/index.html', expected: 'Корейская K-Beauty компания для международных партнерств в hair care' },
  { path: 'dist/vi/index.html', expected: 'Doanh nghiệp K-Beauty Hàn Quốc dành cho đối tác hair care toàn cầu' },
];

for (const page of pages) {
  const html = await readFile(page.path, 'utf8');

  if (!html.includes(page.expected)) {
    throw new Error(`${page.path} is missing expected prerendered content: ${page.expected}`);
  }

  if (html.includes('src="/src/') || html.includes('href="/src/') || html.includes('href="/public/') || html.includes('content="/public/')) {
    throw new Error(`${page.path} contains root-absolute /src or /public asset paths that break under /YJBN/.`);
  }
}

const rootHtml = await readFile('dist/index.html', 'utf8');
for (const route of ['/YJBN/', '/YJBN/ko/', '/YJBN/zh/', '/YJBN/ru/', '/YJBN/vi/']) {
  if (!rootHtml.includes(`href="${route}"`)) {
    throw new Error(`dist/index.html is missing GitHub Pages language route: ${route}`);
  }
}

console.log('GitHub Pages static output verified for /YJBN/ base path.');
