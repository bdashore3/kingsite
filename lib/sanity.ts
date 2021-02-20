import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient, createImageUrlBuilder } from 'next-sanity';

const config = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  useCdn: true
};

export const sanity = createClient(config);
export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
