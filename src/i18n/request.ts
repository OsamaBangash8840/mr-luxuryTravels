import type { Locale } from './config';
import enMessages from '../../messages/en.json';
import arMessages from '../../messages/ar.json';

const messages = {
  en: enMessages.en,
  ar: arMessages.ar,
};

export function getMessages(locale: Locale) {
  return messages[locale];
}

