import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderHomePage } from './components/HomePage.js';
import { detectRoute, getLocaleContent } from './i18n/getLocaleContent.js';

const route = detectRoute();
const content = getLocaleContent(route.locale);

document.documentElement.lang = route.locale === 'zh' ? 'zh-CN' : route.locale;
document.title = content.pages[route.pageKey]?.metaTitle || content.pages.home.metaTitle;

document.querySelector('#app').innerHTML = `
  ${renderHeader(content, route)}
  ${renderHomePage(content, route)}
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

const revealTargets = document.querySelectorAll('.reveal-card');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add('is-visible'));
}
