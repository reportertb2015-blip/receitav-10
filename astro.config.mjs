import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Carrega Markdown e MDX da pasta content/blog
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Validação dos campos (Esquema)
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog };
