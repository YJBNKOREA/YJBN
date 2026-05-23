import { siteContent } from '../data/site.js';

export const SITE_BASE_PATH = '/YJBN';

const supportedLocales = Object.keys(siteContent);
const pageSlugs = {
  '': 'home',
  about: 'about',
  brands: 'brands',
  products: 'products',
  'rd-quality': 'rdQuality',
  'global-business': 'globalBusiness',
  'oem-odm-obm': 'oem',
  contact: 'contact',
};

function stripBaseSegments(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === SITE_BASE_PATH.replace('/', '')) {
    return segments.slice(1);
  }

  return segments;
}

export function detectRoute(pathname = window.location.pathname, documentLang = document.documentElement.lang) {
  const segments = stripBaseSegments(pathname);
  const firstSegment = segments[0] || '';
  const hasLocale = supportedLocales.includes(firstSegment);
  const localeFromPath = hasLocale ? firstSegment : null;
  const langLocale = documentLang.toLowerCase().split('-')[0];
  const locale = localeFromPath || (supportedLocales.includes(langLocale) ? langLocale : 'en');
  const slug = hasLocale ? segments[1] || '' : firstSegment;
  const pageKey = pageSlugs[slug] || 'home';

  return {
    locale,
    pageKey,
    slug: Object.entries(pageSlugs).find(([, key]) => key === pageKey)?.[0] || '',
  };
}

export function getLocaleContent(locale = 'en') {
  const normalized = locale.toLowerCase().split('-')[0];
  return siteContent[normalized] || siteContent.en;
}
