import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

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
    {rel: 'shortcut icon', url: './favicon.ico'},
  ],
  keywords: ['nextjs', 'pwa', 'next-pwa'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
