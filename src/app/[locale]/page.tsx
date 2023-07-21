'use client';

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return <h1 data-testid='teste_home'>{t('title')}</h1>;
}
