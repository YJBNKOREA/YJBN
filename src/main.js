import './styles/global.css';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHomePage } from './components/HomePage.js';
import { detectLocale, getLocaleContent } from './i18n/getLocaleContent.js';

const locale = detectLocale();
const content = getLocaleContent(locale);

document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;

document.querySelector('#app').innerHTML = `
  ${renderHeader(content)}
  ${renderHomePage(content)}
  ${renderFooter(content)}
`;

const inquiryForm = document.querySelector('.inquiry-card');
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(inquiryForm);
  const labels = content.form.mailBodyLabels;
  const subject = encodeURIComponent(`${content.form.subjectPrefix} ${formData.get('company') || content.form.unnamedCompany}`);
  const body = encodeURIComponent(`${labels.company}: ${formData.get('company') || ''}
${labels.name}: ${formData.get('name') || ''}
${labels.email}: ${formData.get('email') || ''}
${labels.type}: ${formData.get('type') || ''}

${labels.message}:
${formData.get('message') || ''}`);
  window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
});
