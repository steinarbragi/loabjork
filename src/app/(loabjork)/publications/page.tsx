import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default function Publications() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        Publications
      </div>
    </main>
  );
}
