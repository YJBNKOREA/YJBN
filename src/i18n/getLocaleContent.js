import { en } from '../data/en.js';
import { ko } from '../data/ko.js';
import { zh } from '../data/zh.js';
import { ru } from '../data/ru.js';
import { vi } from '../data/vi.js';

const locales = { en, ko, zh, ru, vi };
const supportedLocales = Object.keys(locales);

export function detectLocale(pathname = window.location.pathname, documentLang = document.documentElement.lang) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment;
  }

  const normalizedLang = documentLang.toLowerCase().split('-')[0];
  return supportedLocales.includes(normalizedLang) ? normalizedLang : 'en';
}

export function getLocaleContent(locale = 'en') {
  const normalized = locale.toLowerCase().split('-')[0];
  return locales[normalized] || locales.en;
}
