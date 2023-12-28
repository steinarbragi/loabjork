import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
