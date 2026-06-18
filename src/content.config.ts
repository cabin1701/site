import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'es']),
    excerpt: z.string().optional(),
    hero: z.string().optional(),
    category: z.array(z.string()).min(1).max(2).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

const failureMood = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/failure-mood' }),
  schema: z.object({
    date: z.coerce.date(),
    crew: z.string(),
    model: z.string(),
    title: z.string(),
    context: z.string().optional(),
  }),
});

export const collections = { blog, failureMood };
