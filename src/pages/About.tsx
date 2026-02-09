import React from 'react';
import { useTranslations } from 'next-intl';
import { SEO } from '@/components/common/SEO';

export function About() {
  const t = useTranslations('common');

  return (
    <>
      <SEO title={`${t('about')} - Mr Luxury`} />
      <div className="min-h-screen bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">{t('about')}</h1>
          <p className="text-xl">About page content goes here</p>
        </div>
      </div>
    </>
  );
}
