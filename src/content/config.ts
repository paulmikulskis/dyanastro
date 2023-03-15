// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const danysMarkdownBlog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    hidden: z.boolean().optional().default(false),
    collection: z.string().optional(),
    collectionDescription: z.string().optional(),
    collectionThumbnail: z.string().optional(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': danysMarkdownBlog,
};