import { useSanityClient, groq } from 'astro-sanity';

export const getFirstBlogPost = async () => {
  const query = groq`*[_type == "post"]`;
  const [firstBlogPost] = await useSanityClient().fetch(query);
  return firstBlogPost;
};
