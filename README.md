# YJBN Global B2B Website

YJBN Co., Ltd. 공식 글로벌 B2B 홈페이지입니다. 기본 언어는 English이며, 한국 K-Beauty 기업 정체성과 글로벌 바이어/해외 총판/OEM·ODM·OBM 파트너가 신뢰할 수 있는 기업 소개형 톤을 목표로 합니다.

## Routing

| Path | Language | Role |
| --- | --- | --- |
| `/` | English | 기본 글로벌 메인 홈페이지 |
| `/ko/` | Korean | 국내/한국어 파트너용 공식 문체 |
| `/zh/` | Simplified Chinese | 중국 바이어/유통사용 콘텐츠, 향후 중국 내 호스팅 분리 용이 |
| `/ru/` | Russian | 러시아/CIS 바이어용 비즈니스 문체 |
| `/vi/` | Vietnamese | 베트남 바이어/유통 파트너용 현지화 문체 |

## Structure

- `index.html`: English 기본 SEO 메타데이터, Open Graph, hreflang, 앱 진입점
- `ko/index.html`, `zh/index.html`, `ru/index.html`, `vi/index.html`: 언어별 SEO와 라우팅 진입점
- `src/main.js`: 라우트 기반 locale 감지, 렌더링, 문의 메일 연결
- `src/components/`: Header, Footer, HomePage 컴포넌트
- `src/data/`: 언어별 현지화 콘텐츠 데이터
- `src/i18n/getLocaleContent.js`: locale 감지 및 콘텐츠 로더
- `src/styles/global.css`: 프리미엄 K-Beauty B2B 톤의 전역 스타일
- `public/`: favicon 및 Open Graph 이미지

## Chinese Site Separation

중국어 콘텐츠는 `zh/index.html`과 `src/data/zh.js`에 분리되어 있습니다. 향후 Alibaba Cloud 또는 중국 내 호스팅 계정으로 독립 배포할 때 다음 항목만 별도 프로젝트로 이동하면 됩니다.

1. `zh/index.html`을 중국 사이트의 루트 `index.html`로 사용
2. `src/data/zh.js`, 공통 컴포넌트, 스타일, 이미지 에셋 복사
3. canonical/hreflang 도메인을 중국 호스팅 도메인으로 변경

## Development

```bash
npm run dev
npm run build
npm run preview
```

## GitHub Pages Preview Deployment

This repository includes `.github/workflows/pages.yml`, which builds the static site with `npm run build` and deploys the generated `dist/` folder to GitHub Pages. The build prerenders the main content into each HTML file, so the page is not blank while JavaScript is loading or if a module request fails.

### GitHub Settings

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Go to **Actions** → **Deploy static site to GitHub Pages**.
5. Run the workflow manually with **Run workflow**, or push to `main` to trigger deployment automatically.
6. After deployment finishes, open the Pages URL and verify:
   - `/`
   - `/ko/`
   - `/zh/`
   - `/ru/`
   - `/vi/`

The HTML files use relative CSS/JS asset paths. The workflow sets `PAGES_BASE_PATH=/YJBN`, and the browser runtime also detects the GitHub Pages project base path so language links and assets work at `https://yjbnkorea.github.io/YJBN/`.
