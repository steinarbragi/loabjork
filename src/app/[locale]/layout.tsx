import type { Metadata } from 'next';
import { ReactNode } from 'react';
import pick from 'lodash/pick';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import '../globals.css';

import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export const metadata: Metadata = {
  title: 'Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

const inter = Inter({ subsets: ['latin'] });

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={pick(messages, 'navigation')}>
          <Navigation />
        </NextIntlClientProvider>
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
