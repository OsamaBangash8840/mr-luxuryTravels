import enMessages from '../../messages/en.json';
import arMessages from '../../messages/ar.json';

export type Locale = 'en' | 'ar';

const messages = {
  en: enMessages.en,
  ar: arMessages.ar,
};

export function getMessages(locale: Locale) {
  return messages[locale];
}
