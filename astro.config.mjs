// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



// https://astro.build/config
export default defineConfig({
    site: "https://nicolam94.github.io",
    base: '/NicolaM94.github.io',
    markdown: {
        syntaxHighlight:"prism",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      }
});
