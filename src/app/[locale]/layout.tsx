import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {LanguageEnum} from '@/types';
import '../../../public/global/globals.css';

export interface ILocale {
  locale: LanguageEnum;
}

const inter = Inter({subsets: ['latin']});

const APP_NAME = 'Portfólio Page';
const APP_DESCRIPTION = 'Meu portfólio online, com projetos e atividades.';

export const metadata: Metadata = {
  title: 'Portfólio page',
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  manifest: './manifest.json',
  icons: [
    {rel: 'apple-touch-icon', url: './icons/apple-touch-icon.png'},
    {rel: 'shortcut icon', url: './icons/favicon.ico'},
  ],
  keywords: ['nextjs', 'pwa', 'next-pwa'],
};

export function generateStaticParams() {
  return [
    {locale: LanguageEnum.en_US},
    {locale: LanguageEnum.fr_FR},
    {locale: LanguageEnum.pt_BR},
  ];
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: ILocale;
}) {
  const {children, params} = props;

  const laguage = params.locale ?? LanguageEnum.en_US;

  let messages;
  try {
    messages = (await import(`../../messages/${laguage}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={laguage}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={laguage} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
