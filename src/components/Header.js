import { SITE_BASE_PATH } from '../i18n/getLocaleContent.js';

function pagePath(locale, pageKey = 'home') {
  const slugMap = {
    home: '',
    about: 'about',
    brands: 'brands',
    products: 'products',
    rdQuality: 'rd-quality',
    globalBusiness: 'global-business',
    oem: 'oem-odm-obm',
    contact: 'contact',
  };
  const slug = slugMap[pageKey] || '';
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const route = slug ? `${localePrefix}/${slug}` : `${localePrefix}/`;

  return `${SITE_BASE_PATH}${route}`.replace(/\/$/, '/') || `${SITE_BASE_PATH}/`;
}

export function resolvePagePath(locale, pageKey) {
  return pagePath(locale, pageKey);
}

export function renderHeader({ navigation, company, languages, locale }, route) {
  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand-mark" href="${pagePath(locale)}" aria-label="${company.shortName} home">
        <span class="brand-symbol">Y</span>
        <span>
          <strong>${company.shortName}</strong>
          <small>${company.tagline}</small>
        </span>
      </a>
      <nav class="main-nav" aria-label="Main pages">
        ${navigation
          .map(
            (item) =>
              `<a class="${route.pageKey === item.page ? 'is-active' : ''}" href="${pagePath(locale, item.page)}">${item.label}</a>`,
          )
          .join('')}
      </nav>
      <nav class="language-note" aria-label="Language navigation">
        ${languages
          .map(
            (item) =>
              `<a class="${item.locale === locale ? 'is-active' : ''}" href="${pagePath(item.locale, route.pageKey)}" hreflang="${item.hreflang}">${item.label}</a>`,
          )
          .join('')}
      </nav>
    </header>
  `;
}
