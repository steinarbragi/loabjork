import { urlForImage } from '@/utils/sanity.client';
import { SanityPublication } from '@/utils/sanity.types';
import truncateWithEllipses from '@/utils/truncate';
import Img from 'next/image';
import Link from 'next/link';

export default function PublicationCard({
  publication,
}: {
  publication: SanityPublication;
}) {
  let imageUrl;
  let blurUrl;
  if (publication.image) {
    imageUrl = urlForImage(publication?.image)
      .width(500)
      .height(500)
      .dpr(2)
      .quality(80)
      .url();
    blurUrl = urlForImage(publication.image).width(20).quality(20).url(); // Low-quality blurred image
  }

  return (
    <Link
      href={`/publications/${publication?.slug?.current || ''}`}
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
        <h2 className="text-2xl mb-10">{publication.title}</h2>
        <p className="mt-10">
          {truncateWithEllipses(publication.description || '', 300)}
        </p>
      </div>
    </Link>
  );
}
