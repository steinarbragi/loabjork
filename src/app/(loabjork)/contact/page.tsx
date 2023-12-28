import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm flex">
        Contact
      </div>
    </main>
  );
}
