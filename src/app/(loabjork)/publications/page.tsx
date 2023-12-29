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
    <main className="flex flex-col lg:flex-row p-24 lg:space-x-4 space-y-10 lg:space-y-0">
      {projects.map(item => (
        <PublicationCard key={item._id} publication={item} />
      ))}
    </main>
  );
}
