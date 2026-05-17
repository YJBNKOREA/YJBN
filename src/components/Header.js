const SITE_BASE_PATH = '/YJBN';

function resolveSitePath(href) {
  if (!href.startsWith('/')) {
    return href;
  }

  return `${SITE_BASE_PATH}${href}`;
}

export function renderHeader({ navigation, company, languages, locale }) {
  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand-mark" href="#hero" aria-label="Go to YJBN home section">
        <span class="brand-symbol">Y</span>
        <span>
          <strong>${company.shortName}</strong>
          <small>${company.tagline}</small>
        </span>
      </a>
      <nav class="main-nav" aria-label="Section navigation">
        ${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
      </nav>
      <nav class="language-note" aria-label="Language navigation">
        ${languages
          .map(
            (item) => `<a class="${item.locale === locale ? 'is-active' : ''}" href="${resolveSitePath(item.href)}" hreflang="${item.locale}">${item.label}</a>`,
          )
          .join('')}
      </nav>
    </header>
  `;
}
