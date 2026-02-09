import { useTranslations } from 'next-intl';
import { useLocale } from '@/contexts/LocaleContext';
import { SEO } from '@/components/common';

export function SeoSample() {
  const t = useTranslations('home');
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      <SEO
        title={t('title')}
        description={t('description')}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-cyan-600">{t('title')}</h1>
          <p className="text-xl mb-8">{t('description')}</p>
          <button
            onClick={toggleLanguage}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </div>
    </>
  );
}
