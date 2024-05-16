import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";


export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
    tailwind(),
    mdx({ syntaxHighlight: "shiki", shikiConfig: { theme: "dracula" } }),
  ],
});
