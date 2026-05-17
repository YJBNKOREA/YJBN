function renderVisual(media, fallbackClass = '') {
  if (!media) {
    return `<div class="visual-placeholder ${fallbackClass}" aria-hidden="true"></div>`;
  }

  if (media.type === 'video') {
    return `
      <video class="visual-media" autoplay muted loop playsinline poster="${media.poster || ''}" aria-label="${media.alt || ''}">
        <source src="${media.src}" type="${media.mime || 'video/mp4'}" />
      </video>
    `;
  }

  return `<img class="visual-media" src="${media.src}" alt="${media.alt || ''}" loading="lazy" />`;
}

function renderCards(items, className = 'card') {
  return items
    .map(
      (item) => `
        <article class="${className} reveal-card">
          <div class="card-visual">${renderVisual(item.media, item.visualClass || '')}</div>
          <div class="card-body">
            ${item.kicker ? `<p class="eyebrow">${item.kicker}</p>` : ''}
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join('');
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
    visuals,
  } = content;

  return `
    <main>
      <section id="hero" class="hero-section">
        <div class="hero-copy reveal-card">
          <p class="eyebrow">${sections.hero.eyebrow}</p>
          <h1>${sections.hero.title}</h1>
          <p>${sections.hero.description}</p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">${labels.primaryCta}</a>
            <a class="button secondary" href="#brands">${labels.secondaryCta}</a>
          </div>
        </div>
        <div class="hero-visual reveal-card" aria-label="${visuals.hero.alt}">
          ${renderVisual(visuals.hero)}
          <div class="hero-panel" aria-label="${labels.coreCapabilities}">
            ${stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}
          </div>
        </div>
      </section>

      <section id="about" class="content-section image-backed-section about-layout">
        ${renderSectionHeader(sections.about)}
        <div class="about-showcase reveal-card">
          <div class="about-visual">${renderVisual(visuals.about)}</div>
          <div class="about-panel">
            ${sections.about.points.map((point) => `<p>${point}</p>`).join('')}
          </div>
        </div>
      </section>

      <section id="brands" class="content-section image-backed-section muted-section">
        ${renderSectionHeader(sections.brands)}
        <div class="brand-grid">
          ${brands
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
            .join('')}
        </div>
      </section>

      <section id="products" class="content-section image-backed-section product-section">
        ${renderSectionHeader(sections.products)}
        <div class="product-showcase reveal-card">
          <div>${renderVisual(visuals.products)}</div>
          <div class="card-grid product-cards">${renderCards(productCategories)}</div>
        </div>
      </section>

      <section id="rd" class="content-section image-backed-section split-section">
        ${renderSectionHeader(sections.rd)}
        <div class="timeline-wrap reveal-card">
          <div class="documentation-visual">${renderVisual(visuals.documentation)}</div>
          <div class="timeline-list">${renderCards(rdItems, 'timeline-card')}</div>
        </div>
      </section>

      <section id="global" class="content-section global-section">
        <div class="global-inner">
          ${renderSectionHeader(sections.global)}
          <div class="global-visual reveal-card">${renderVisual(visuals.global)}</div>
          <div class="market-strip reveal-card">
            ${globalMarkets.map((market) => `<span>${market}</span>`).join('')}
          </div>
        </div>
      </section>

      <section id="oem" class="content-section image-backed-section muted-section">
        ${renderSectionHeader(sections.oem)}
        <div class="process-grid">${renderCards(partnershipSteps, 'process-card')}</div>
      </section>

      <section id="contact" class="content-section image-backed-section contact-section">
        <div class="reveal-card">
          ${renderSectionHeader(sections.contact)}
          <dl class="contact-list">
            <div><dt>${labels.address}</dt><dd>${contact.address}</dd></div>
            <div><dt>${labels.email}</dt><dd><a href="mailto:${contact.email}">${contact.email}</a></dd></div>
            <div><dt>${labels.phone}</dt><dd><a href="tel:${contact.phoneHref}">${contact.phone}</a></dd></div>
          </dl>
        </div>
        <form class="inquiry-card reveal-card" aria-label="${form.aria}">
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
