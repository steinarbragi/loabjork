import { client, urlForImage } from '@/utils/sanity.client';
import { SanityProject } from '@/utils/sanity.types';
import truncateWithEllipses from '@/utils/truncate';
import { PortableText } from '@portabletext/react';
import Head from 'next/head';
import Image from 'next/image';

export default async function Page({
  params,
}: {
  params: { slug: string; locale: 'is' | 'en' };
}) {
  const project = await client.fetch<SanityProject>(
    `*[_type == "project" && slug.current == '${params.slug}'][0]`
  );

  return (
    <main className="p-10 lg:p-24 max-w-full">
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="mt-20">
        <h1 className="text-3xl mb-10">{project?.title}</h1>
        <p className="mt-10">{project?.description}</p>
        {project.video && (
          <div
            className="my-10 w-full max-w-full flex justify-center"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: project.video }}
          />
        )}
        <p className="mt-10 max-w-lg">
          <PortableText
            value={project[`content_${params.locale}`] || { _type: 'text' }}
          />
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-10 lg:space-y-0">
          {project?.images?.map(item => (
            <Image
              width={500}
              height={500}
              key={item.toString()}
              src={urlForImage(item)
                .width(500)
                .height(500)
                .dpr(2)
                .quality(80)
                .url()}
              blurDataURL={urlForImage(item).width(20).quality(20).url()}
              alt="Lóa Björk Bragadóttir"
              className="block w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await client.fetch<SanityProject>(
    `*[_type == "project" && slug.current == '${params.slug}'][0]`
  );
  return {
    title: `${project.title} | Lóa Björk`,
    description: truncateWithEllipses(project.description || '', 200),
  };
}
