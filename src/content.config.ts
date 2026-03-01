import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional().default(0),
    category: z.enum(['quick-start', 'config', 'tutorial', 'api', 'plan']).optional()
  })
});

const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    status: z.enum(['stable', 'developing', 'planned']).default('stable'),
    order: z.number().optional().default(0)
  })
});

const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    version: z.string(),
    date: z.string(),
    type: z.enum(['feature', 'fix', 'breaking', 'improvement']).optional()
  })
});

export const collections = {
  docs,
  features,
  changelog
};
