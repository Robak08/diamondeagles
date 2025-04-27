// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap()],
  adapter: vercel()
});