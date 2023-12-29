import PublicationCard from '@/components/publicationCard';
import { client } from '@/utils/sanity.client';
import { SanityPublication } from '@/utils/sanity.types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bio | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default async function Bio() {
  const projects = await client.fetch<SanityPublication[]>(
    `*[_type == "publication"]`
  );
  return (
    <main className="max-w-6xl content-center mx-auto px-10">
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 pt-20 gap-5 mb-10">
        {projects.map(item => (
          <PublicationCard key={item._id} publication={item} />
        ))}
      </div>
    </main>
  );
}
