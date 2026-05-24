import { resolvePagePath } from './Header.js';

export function renderFooter({ company, contact, navigation, labels, locale }) {
  return `
    <footer class="site-footer">
      <div class="footer-lead">
        <p class="eyebrow">${company.legalName}</p>
        <h2>${company.footerTitle}</h2>
        <p>${company.footerDescription}</p>
      </div>
      <div class="footer-grid">
        <address>
          <strong>${labels.contactInfo}</strong>
          <span>${contact.address}</span>
          <a href="mailto:${contact.email}">${contact.email}</a>
          ${contact.phone ? `<a href="tel:${contact.phoneHref || contact.phone}">${contact.phone}</a>` : ''}
        </address>
        <div>
          <strong>${labels.explore}</strong>
          ${navigation.map((item) => `<a href="${resolvePagePath(locale, item.page)}">${item.label}</a>`).join('')}
        </div>
      </div>
      <p class="copyright">&copy; ${new Date().getFullYear()} ${company.legalName}. ${labels.copyright}</p>
    </footer>
  `;
}
