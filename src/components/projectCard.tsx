import { urlForImage } from '@/utils/sanity.client';
import { SanityProject } from '@/utils/sanity.types';
import Img from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: SanityProject }) {
  let imageUrl;
  let blurUrl;
  if (project.images) {
    imageUrl = urlForImage(project.images[0])
      .width(500)
      .height(500)
      .dpr(2)
      .quality(80)
      .url();
    blurUrl = urlForImage(project.images[0]).width(20).quality(20).url(); // Low-quality blurred image
  }

  return (
    <Link
      href={`/projects/${project?.slug?.current || ''}`}
      className="flex flex-col bg-white dark:bg-black rounded-lg"
    >
      <Img
        width={500}
        height={500}
        src={imageUrl || ''}
        blurDataURL={blurUrl}
        alt="Lóa Björk Bragadóttir"
        className="rounded-t-lg w-full"
      />
      <div className="p-5">
        <h2 className="text-2xl mb-10">{project.title}</h2>
        <p className="mt-10">{project.content}</p>
      </div>
    </Link>
  );
}
