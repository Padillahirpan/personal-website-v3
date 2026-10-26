import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notes = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tag: z.string(),
		/* warm = harvest-colored tag pill (farm posts) */
		warm: z.boolean().default(false),
		/* draft = true hides the note from lists until it is finished */
		draft: z.boolean().default(false),
		readTime: z.string(),
		/* which list the note appears in: home "writing" or the farm notes */
		section: z.enum(["engineering", "farm"]),
	}),
});

export const collections = { notes };
