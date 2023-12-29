import { client, urlForImage } from '@/utils/sanity.client';
import { SanityPublication } from '@/utils/sanity.types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Publication | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default async function Page({ params }: { params: { slug: string } }) {
  const publication = await client.fetch<SanityPublication>(
    `*[_type == "publication" && slug.current == '${params.slug}'][0]`
  );

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl mb-10">{publication?.title}</h1>
        {publication.image && (
          <Image
            width={500}
            height={500}
            key={publication.image.toString()}
            src={urlForImage(publication.image)
              .width(500)
              .height(500)
              .dpr(2)
              .quality(80)
              .url()}
            blurDataURL={urlForImage(publication.image)
              .width(20)
              .quality(20)
              .url()}
            alt="Lóa Björk Bragadóttir"
            className="block max-w-lg mb-10"
          />
        )}
        {publication.link && (
          <Link className="text-xl text-indigo-500" href={publication.link}>
            {publication.title}
          </Link>
        )}
        <p className="mt-10 max-w-lg">{publication?.description}</p>
      </div>
    </main>
  );
}
