import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-template.netlify.app',
  integrations: [mdx(), svelte()],
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [
      [
        'rehype-external-links',
        {
          target: '_blank',
        },
      ],
    ],
  },
})
