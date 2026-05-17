const SITE_BASE_PATH = '/YJBN';
const visualPath = (name) => `${SITE_BASE_PATH}/public/${name}`;

const brandVisuals = ['brand-cellreborn.svg', 'brand-hairbest.svg', 'brand-beautylabs.svg'];
const productVisuals = ['product-skincare.svg', 'product-haircare.svg', 'product-bodycare.svg'];

function formatText(value = '') {
  return String(value).split('\n').join('<br />');
}

function renderCards(items, className = 'card') {
  return items
    .map(
      (item) => `
        <article class="${className} reveal">
          ${item.kicker ? `<p class="eyebrow">${item.kicker}</p>` : ''}
          <h3>${formatText(item.title)}</h3>
          <p>${formatText(item.description)}</p>
        </article>
      `,
    )
    .join('');
}

function renderSectionHeader(section) {
  return `
    <div class="section-header reveal">
      <p class="eyebrow">${section.eyebrow}</p>
      <h2>${formatText(section.title)}</h2>
      <p>${formatText(section.description)}</p>
    </div>
  `;
}

function renderVisualTile({ src, label, caption, className = '' }) {
  return `
    <figure class="visual-tile ${className}" aria-label="${label}">
      <img src="${src}" alt="${label}" loading="lazy" />
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

export function renderHomePage(content) {
  const {
    sections,
    stats,
    contact,
    productCategories,
    brands,
    rdItems,
    globalMarkets,
    partnershipSteps,
    labels,
    form,
  } = content;

  return `
    <main>
      <section id="hero" class="hero-section">
        <div class="hero-copy reveal">
          <p class="eyebrow">${sections.hero.eyebrow}</p>
          <h1>${formatText(sections.hero.title)}</h1>
          <p>${formatText(sections.hero.description)}</p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">${labels.primaryCta}</a>
            <a class="button secondary" href="#brands">${labels.secondaryCta}</a>
          </div>
        </div>
        <div class="hero-media reveal" aria-label="${labels.coreCapabilities}">
          <div class="hero-image-wrap">
            <img src="${visualPath('hero-cosmetic-lab.svg')}" alt="${labels.heroVisualAlt}" />
            <span class="media-badge">CELLREBORN · YJBN</span>
          </div>
          <div class="hero-panel">
            ${stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}
          </div>
        </div>
      </section>

      <section id="about" class="content-section about-layout">
        ${renderSectionHeader(sections.about)}
        <div class="about-panel reveal">
          ${sections.about.points.map((point) => `<p>${formatText(point)}</p>`).join('')}
          <div class="about-visual-grid">
            ${renderVisualTile({ src: visualPath('company-lab.svg'), label: labels.companyVisualAlt, caption: labels.companyVisualCaption })}
            ${renderVisualTile({ src: visualPath('product-textures.svg'), label: labels.textureVisualAlt, caption: labels.textureVisualCaption, className: 'is-offset' })}
          </div>
        </div>
      </section>

      <section id="brands" class="content-section muted-section">
        ${renderSectionHeader(sections.brands)}
        <div class="brand-grid">
          ${brands
            .map(
              (brand, index) => `
                <article class="brand-card reveal">
                  <div class="card-media">
                    <img src="${visualPath(brandVisuals[index] || brandVisuals[0])}" alt="${brand.name} ${brand.category}" loading="lazy" />
                  </div>
                  <div class="card-body">
                    <span>${brand.category}</span>
                    <h3>${brand.name}</h3>
                    <p>${formatText(brand.description)}</p>
                    <ul>${brand.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}</ul>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="products" class="content-section products-section">
        ${renderSectionHeader(sections.products)}
        <div class="product-grid">
          ${productCategories
            .map(
              (item, index) => `
                <article class="product-card reveal">
                  <img src="${visualPath(productVisuals[index] || productVisuals[0])}" alt="${item.title}" loading="lazy" />
                  <div>
                    ${item.kicker ? `<p class="eyebrow">${item.kicker}</p>` : ''}
                    <h3>${formatText(item.title)}</h3>
                    <p>${formatText(item.description)}</p>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="rd" class="content-section split-section">
        ${renderSectionHeader(sections.rd)}
        <div class="timeline-list">${renderCards(rdItems, 'timeline-card')}</div>
      </section>

      <section id="global" class="content-section global-section">
        <div>
          ${renderSectionHeader(sections.global)}
          <div class="market-strip reveal">
            ${globalMarkets.map((market) => `<span>${market}</span>`).join('')}
          </div>
        </div>
        <div class="global-visual reveal">
          <img src="${visualPath('global-b2b.svg')}" alt="${labels.globalVisualAlt}" loading="lazy" />
        </div>
      </section>

      <section id="oem" class="content-section muted-section">
        ${renderSectionHeader(sections.oem)}
        <div class="process-grid">${renderCards(partnershipSteps, 'process-card')}</div>
      </section>

      <section id="contact" class="content-section contact-section">
        <div class="reveal">
          ${renderSectionHeader(sections.contact)}
          <dl class="contact-list">
            <div><dt>${labels.address}</dt><dd>${contact.address}</dd></div>
            <div><dt>${labels.email}</dt><dd><a href="mailto:${contact.email}">${contact.email}</a></dd></div>
            <div><dt>${labels.phone}</dt><dd><a href="tel:${contact.phoneHref}">${contact.phone}</a></dd></div>
          </dl>
        </div>
        <form class="inquiry-card reveal" aria-label="${form.aria}">
          <label>${form.company}<input type="text" name="company" placeholder="${form.companyPlaceholder}" /></label>
          <label>${form.name}<input type="text" name="name" placeholder="${form.namePlaceholder}" /></label>
          <label>${form.email}<input type="email" name="email" placeholder="${form.emailPlaceholder}" /></label>
          <label>${form.inquiryType}<select name="type">${form.options.map((option) => `<option>${option}</option>`).join('')}</select></label>
          <label>${form.message}<textarea name="message" rows="5" placeholder="${form.messagePlaceholder}"></textarea></label>
          <button class="button primary" type="submit">${form.submit}</button>
          <p>${form.note}</p>
        </form>
      </section>
    </main>
  `;
}
