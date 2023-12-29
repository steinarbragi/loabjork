import { SanityImageSource } from '@sanity/asset-utils/dist/types';

export type SanityProject = {
  _id: string;
  title?: string;
  content?: string;
  images: SanityImageSource[];
  video: string;
};
