import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [
    tailwind(),
    mdx({ syntaxHighlight: "shiki", shikiConfig: { theme: "dracula" } }),
  ],
});
