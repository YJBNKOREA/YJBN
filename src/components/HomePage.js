function renderCards(items, className = 'card') {
  return items
    .map(
      (item) => `
        <article class="${className}">
          ${item.kicker ? `<p class="eyebrow">${item.kicker}</p>` : ''}
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join('');
}

function renderSectionHeader(section) {
  return `
    <div class="section-header">
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
  } = content;

  return `
    <main>
      <section id="hero" class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow">${sections.hero.eyebrow}</p>
          <h1>${sections.hero.title}</h1>
          <p>${sections.hero.description}</p>
          <div class="hero-actions">
            <a class="button primary" href="#contact">${labels.primaryCta}</a>
            <a class="button secondary" href="#brands">${labels.secondaryCta}</a>
          </div>
        </div>
        <div class="hero-panel" aria-label="${labels.coreCapabilities}">
          ${stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}
        </div>
      </section>

      <section id="about" class="content-section about-layout">
        ${renderSectionHeader(sections.about)}
        <div class="about-panel">
          ${sections.about.points.map((point) => `<p>${point}</p>`).join('')}
        </div>
      </section>

      <section id="brands" class="content-section muted-section">
        ${renderSectionHeader(sections.brands)}
        <div class="brand-grid">
          ${brands
            .map(
              (brand) => `
                <article class="brand-card">
                  <span>${brand.category}</span>
                  <h3>${brand.name}</h3>
                  <p>${brand.description}</p>
                  <ul>${brand.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}</ul>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="products" class="content-section">
        ${renderSectionHeader(sections.products)}
        <div class="card-grid three-columns">${renderCards(productCategories)}</div>
      </section>

      <section id="rd" class="content-section split-section">
        ${renderSectionHeader(sections.rd)}
        <div class="timeline-list">${renderCards(rdItems, 'timeline-card')}</div>
      </section>

      <section id="global" class="content-section global-section">
        ${renderSectionHeader(sections.global)}
        <div class="market-strip">
          ${globalMarkets.map((market) => `<span>${market}</span>`).join('')}
        </div>
      </section>

      <section id="oem" class="content-section muted-section">
        ${renderSectionHeader(sections.oem)}
        <div class="process-grid">${renderCards(partnershipSteps, 'process-card')}</div>
      </section>

      <section id="contact" class="content-section contact-section">
        <div>
          ${renderSectionHeader(sections.contact)}
          <dl class="contact-list">
            <div><dt>${labels.address}</dt><dd>${contact.address}</dd></div>
            <div><dt>${labels.email}</dt><dd><a href="mailto:${contact.email}">${contact.email}</a></dd></div>
            <div><dt>${labels.phone}</dt><dd><a href="tel:${contact.phoneHref}">${contact.phone}</a></dd></div>
          </dl>
        </div>
        <form class="inquiry-card" aria-label="${form.aria}">
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
