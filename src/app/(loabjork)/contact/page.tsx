import ContactForm from '@/components/contactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default function Contact() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}
