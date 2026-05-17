import { en } from '../data/en.js';
import { ko } from '../data/ko.js';
import { zh } from '../data/zh.js';
import { ru } from '../data/ru.js';
import { vi } from '../data/vi.js';

const locales = { en, ko, zh, ru, vi };
export const supportedLocales = Object.keys(locales);

function normalizePathname(pathname) {
  return pathname.replace(/\/index\.html$/, '/');
}

export function detectLocale(pathname = window.location.pathname, documentLang = document.documentElement.lang) {
  const segments = normalizePathname(pathname).split('/').filter(Boolean);
  const localeSegment = segments.find((segment) => supportedLocales.includes(segment));

  if (localeSegment) {
    return localeSegment;
  }

  const normalizedLang = documentLang.toLowerCase().split('-')[0];
  return supportedLocales.includes(normalizedLang) ? normalizedLang : 'en';
}

export function detectBasePath(pathname = window.location.pathname) {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split('/').filter(Boolean);
  const localeIndex = segments.findIndex((segment) => supportedLocales.includes(segment));

  if (localeIndex > -1) {
    return localeIndex === 0 ? '' : `/${segments.slice(0, localeIndex).join('/')}`;
  }

  if (segments.length === 0) {
    return '';
  }

  if (normalized.endsWith('/')) {
    return `/${segments.join('/')}`;
  }

  return segments.length > 1 ? `/${segments.slice(0, -1).join('/')}` : '';
}

export function getLocaleContent(locale = 'en') {
  const normalized = locale.toLowerCase().split('-')[0];
  return locales[normalized] || locales.en;
}
