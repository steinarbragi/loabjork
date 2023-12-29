import { SanityImageSource } from '@sanity/asset-utils/dist/types';
import { TypedObject } from 'sanity';

export type SanityProject = {
  _id: string;
  title?: string;
  description?: string;
  images?: SanityImageSource[];
  content_is?: TypedObject;
  content_en?: TypedObject;
  video?: string;
  slug?: {
    current: string;
    _type: string;
  };
};

export type SanityPublication = {
  _id: string;
  title?: string;
  description?: string;
  image?: SanityImageSource;
  content_is?: TypedObject;
  content_en?: TypedObject;
  dagsetning?: string;
  link?: string;
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
