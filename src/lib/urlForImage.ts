import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useSanityClient, createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source);
