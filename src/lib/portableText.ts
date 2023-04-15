import { portableTextToHtml } from 'astro-sanity';
import { urlForImage } from './urlForImage';

const customComponents = {
  /* your custom components here */
  types: {
    image: ({ value }: any) =>
      `<img class="fade" src="${urlForImage(
        value,
      ).url()}" style="max-width:100%;" />`,
    code: ({ value }: any) => `<pre><code>${value.code}</code></pre>`,
  },
};

export const sanityPortableText = (portabletext: string) => {
  return portableTextToHtml(portabletext, customComponents);
};
