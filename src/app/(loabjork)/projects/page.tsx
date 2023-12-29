import ProjectCard from '@/components/projectCard';
import { client } from '@/utils/sanity.client';
import { SanityProject } from '@/utils/sanity.types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bio | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default async function Bio() {
  const projects = await client.fetch<SanityProject[]>(`*[_type == "project"]`);
  return (
    <main className="flex flex-col lg:flex-row p-24 lg:space-x-4 space-y-10 lg:space-y-0">
      {projects.map(item => (
        <ProjectCard key={item._id} project={item} />
      ))}
    </main>
  );
}
