import { SanityImageSource } from '@sanity/asset-utils/dist/types';

export type SanityProject = {
  _id: string;
  title?: string;
  content?: string;
  images?: SanityImageSource[];
  video?: string;
  slug?: {
    current: string;
    _type: string;
  };
};

export type SanityBio = {
  _id: string;
  title?: string;
  content?: string;
  image: SanityImageSource;
};
