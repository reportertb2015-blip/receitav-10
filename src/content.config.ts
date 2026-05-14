import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		// ADICIONE ESTA LINHA ABAIXO:
		category: z.string().optional(), 
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
