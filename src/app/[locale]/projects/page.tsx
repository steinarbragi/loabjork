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
    <main className="max-w-6xl content-center mx-auto px-10">
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 pt-20 gap-5 mb-10">
        {projects.map(item => (
          <ProjectCard key={item._id} project={item} />
        ))}
      </div>
    </main>
  );
}
