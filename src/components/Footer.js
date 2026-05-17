export function renderFooter({ company, contact, navigation, labels }) {
  return `
    <footer class="site-footer">
      <div>
        <p class="eyebrow">${company.legalName}</p>
        <h2>${company.footerTitle}</h2>
        <p>${company.footerDescription}</p>
      </div>
      <div class="footer-grid">
        <address>
          <strong>${labels.contactInfo}</strong>
          <span>${contact.address}</span>
          <a href="mailto:${contact.email}">${contact.email}</a>
          <a href="tel:${contact.phoneHref}">${contact.phone}</a>
        </address>
        <div>
          <strong>${labels.explore}</strong>
          ${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </div>
      </div>
      <p class="copyright">© ${new Date().getFullYear()} ${company.legalName}. ${labels.copyright}</p>
    </footer>
  `;
}
