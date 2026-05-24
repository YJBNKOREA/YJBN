import { resolvePagePath } from './Header.js';

function renderVisual(media, className = '') {
  if (!media) {
    return `<div class="visual-placeholder ${className}" aria-hidden="true"></div>`;
  }

  return `<img class="visual-media ${className}" src="${media.src}" alt="${media.alt || ''}" loading="lazy" />`;
}

function renderButton(action, locale) {
  return `<a class="button ${action.variant || 'secondary'}" href="${resolvePagePath(locale, action.page)}">${action.label}</a>`;
}

function renderSectionHeader(section) {
  return `
    <div class="section-header reveal-card">
      <p class="eyebrow">${section.eyebrow}</p>
      <h2>${section.title}</h2>
      <p>${section.description}</p>
    </div>
  `;
}

function renderSimpleCards(items, locale) {
  return items
    .map((item) => {
      const tag = item.page ? 'a' : 'article';
      const href = item.page ? ` href="${resolvePagePath(locale, item.page)}"` : '';
      return `
        <${tag} class="info-card reveal-card"${href}>
          ${item.kicker ? `<span>${item.kicker}</span>` : ''}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </${tag}>
      `;
    })
    .join('');
}

function renderBrandCards(items) {
  return items
    .map(
      (brand) => `
        <article class="brand-card reveal-card">
          <div class="brand-visual">${renderVisual(brand.media)}</div>
          <div class="brand-content">
            <span>${brand.category}</span>
            <h3>${brand.name}</h3>
            <p>${brand.description}</p>
            <ul>${brand.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}</ul>
          </div>
        </article>
      `,
    )
    .join('');
}

function renderProcess(items) {
  return items
    .map(
      (item, index) => `
        <article class="process-card reveal-card">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join('');
}

function renderSplitSection(section) {
  return `
    <div class="split-layout">
      <div class="split-visual reveal-card">${renderVisual(section.media)}</div>
      <div class="split-panel reveal-card">
        ${section.points.map((point) => `<p>${point}</p>`).join('')}
      </div>
    </div>
  `;
}

function renderCertificationGroups(groups) {
  return groups
    .map(
      (group) => `
        <article class="cert-card reveal-card">
          <span>${group.kicker}</span>
          <h3>${group.title}</h3>
          <ul>${group.items.map((item) => `<li>${item}</li>`).join('')}</ul>
        </article>
      `,
    )
    .join('');
}

function renderContactSection(section, content) {
  const { contact, form, labels } = content;
  return `
    <div class="contact-layout">
      <div class="contact-panel reveal-card">
        <dl class="contact-list">
          <div><dt>${labels.address}</dt><dd>${contact.address}</dd></div>
          <div><dt>${labels.email}</dt><dd><a href="mailto:${contact.email}">${contact.email}</a></dd></div>
          ${contact.phone ? `<div><dt>${labels.phone}</dt><dd><a href="tel:${contact.phoneHref || contact.phone}">${contact.phone}</a></dd></div>` : ''}
        </dl>
        <div class="inquiry-tags">
          ${section.categories.map((category) => `<span>${category}</span>`).join('')}
        </div>
      </div>
      <form class="inquiry-card reveal-card" aria-label="${form.aria}">
        <label>${form.company}<input type="text" name="company" placeholder="${form.companyPlaceholder}" /></label>
        <label>${form.name}<input type="text" name="name" placeholder="${form.namePlaceholder}" /></label>
        <label>${form.email}<input type="email" name="email" placeholder="${form.emailPlaceholder}" /></label>
        <label>${form.inquiryType}<select name="type">${form.options.map((option) => `<option>${option}</option>`).join('')}</select></label>
        <label>${form.message}<textarea name="message" rows="6" placeholder="${form.messagePlaceholder}"></textarea></label>
        <button class="button primary" type="submit">${form.submit}</button>
        <p>${form.note}</p>
      </form>
    </div>
  `;
}

function renderSection(section, content) {
  const body = {
    split: () => renderSplitSection(section),
    cards: () => `<div class="card-grid">${renderSimpleCards(section.items, content.locale)}</div>`,
    brands: () => `<div class="brand-grid">${renderBrandCards(section.items)}</div>`,
    products: () => `<div class="product-grid">${renderSimpleCards(section.items, content.locale)}</div>`,
    timeline: () => `<div class="timeline-grid">${renderSimpleCards(section.items, content.locale)}</div>`,
    process: () => `<div class="process-grid">${renderProcess(section.items)}</div>`,
    certifications: () => `<div class="cert-grid">${renderCertificationGroups(section.groups)}</div>`,
    markets: () => `<div class="market-grid">${renderSimpleCards(section.items, content.locale)}</div>`,
    contact: () => renderContactSection(section, content),
    cta: () => `
      <div class="cta-band reveal-card">
        <div>
          <p class="eyebrow">${section.eyebrow}</p>
          <h2>${section.title}</h2>
          <p>${section.description}</p>
        </div>
        <div class="cta-actions">${section.actions.map((action) => renderButton(action, content.locale)).join('')}</div>
      </div>
    `,
  }[section.type];

  if (section.type === 'cta') {
    return `<section class="content-section cta-section">${body()}</section>`;
  }

  return `
    <section class="content-section ${section.tone || ''} ${section.type}-section">
      ${renderSectionHeader(section)}
      ${body ? body() : ''}
    </section>
  `;
}

export function renderHomePage(content, route) {
  const page = content.pages[route.pageKey] || content.pages.home;
  const background = page.hero.media ? ` style="--hero-image: url('${page.hero.media.src}')"` : '';

  return `
    <main>
      <section class="page-hero ${route.pageKey === 'home' ? 'home-hero' : 'subpage-hero'}"${background}>
        <div class="hero-overlay">
          <div class="hero-copy reveal-card">
            <p class="eyebrow">${page.hero.eyebrow}</p>
            <h1>${page.hero.title}</h1>
            <p>${page.hero.description}</p>
            <div class="hero-actions">
              ${page.hero.actions.map((action) => renderButton(action, content.locale)).join('')}
            </div>
          </div>
          ${page.stats ? `<div class="hero-panel reveal-card">${page.stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}</div>` : ''}
        </div>
      </section>
      ${page.sections.map((section) => renderSection(section, content)).join('')}
    </main>
  `;
}
