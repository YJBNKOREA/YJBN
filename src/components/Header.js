function withBasePath(href, basePath = '') {
  if (!href.startsWith('/')) {
    return href;
  }

  const normalizedBase = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  return `${normalizedBase}${href}` || '/';
}

export function renderHeader({ navigation, company, languages, locale, basePath }) {
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
            (item) => `<a class="${item.locale === locale ? 'is-active' : ''}" href="${withBasePath(item.href, basePath)}" hreflang="${item.locale}">${item.label}</a>`,
          )
          .join('')}
      </nav>
    </header>
  `;
}
