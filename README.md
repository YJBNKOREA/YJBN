# YJBN Global B2B Website

YJBN Co., Ltd. official global B2B website. The site positions YJBN as a Global K-Beauty Connector for overseas buyers, distributors, brand partners, and OEM/ODM/OBM cooperation.

## Routes

English routes:

- `/`
- `/about`
- `/brands`
- `/products`
- `/rd-quality`
- `/global-business`
- `/oem-odm-obm`
- `/contact`

Localized routes use the same page structure under `/ko`, `/zh`, `/ru`, and `/vi`.

## Structure

- `index.html`, `ko/index.html`, `zh/index.html`, `ru/index.html`, `vi/index.html`: language entry templates with SEO metadata.
- `src/main.js`: route detection, page rendering, reveal animation, and inquiry email handling.
- `src/components/`: header, footer, and page section renderers.
- `src/data/site.js`: multilingual B2B content for all corporate pages.
- `src/i18n/getLocaleContent.js`: GitHub Pages `/YJBN/` base-path-aware route and locale detection.
- `src/styles/global.css`: premium B2B corporate design system and responsive layout.
- `public/images/`: visual assets used across hero and content sections.
- `scripts/build.mjs`: static build that creates route folders in `dist/` for GitHub Pages.

## Development

```bash
npm run build
```

On Windows PowerShell, use `npm.cmd run build` if script execution policy blocks `npm.ps1`.
