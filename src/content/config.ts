import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        isDraft: z.boolean().default(false),
        date: z.string().transform((str) => new Date(str)),
        image: z.string().optional(), //Image can be optional
    })
});

// Export
export const collections = {
    'blogs': blogCollection
};