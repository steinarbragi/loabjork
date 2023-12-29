import { client, urlForImage } from '@/utils/sanity.client';
import { SanityBio } from '@/utils/sanity.types';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import Img from 'next/image';

export const metadata: Metadata = {
  title: 'Bio | Lóa Björk',
  description: 'Lóa Björk Bragadóttir',
};

export default async function Bio({
  params,
}: {
  params: { locale: 'is' | 'en' };
}) {
  const bio = await client.fetch<SanityBio>(
    `*[_type == "bio" && _id == 'bio']{
      image,
      title,
      description,
      content_is,
      content_en,
      file
    }[0]`
  );

  const imageUrl = urlForImage(bio.image)
    .width(500)
    .height(500)
    .dpr(2)
    .quality(80)
    .url();
  const blurUrl = urlForImage(bio.image).width(20).quality(20).url(); // Low-quality blurred image

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-3xl mb-10">{bio.title}</h1>
        <Img
          width={500}
          height={500}
          src={imageUrl}
          blurDataURL={blurUrl}
          alt="Lóa Björk Bragadóttir"
          className="rounded-full"
        />
        <p className="mt-10">{bio.description}</p>
        <p className="mt-10 max-w-lg">
          <PortableText
            value={bio[`content_${params.locale}`] || { _type: 'text' }}
          />
        </p>
      </div>
    </main>
  );
}
