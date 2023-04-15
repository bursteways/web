import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    sanity({
      projectId: 'tiaoeeth',
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
  ],
});
