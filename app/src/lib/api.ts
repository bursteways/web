import { useSanityClient, groq } from 'astro-sanity';

export async function getAllPosts() {
  const client = useSanityClient();
  const query = '*[_type == "post"]';
  const posts = await client.fetch(query);
  return posts;
}

export const getSiteSettings = async () => {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"]`;
  const [siteSettings] = await useSanityClient().fetch(query);
  return siteSettings;
};
