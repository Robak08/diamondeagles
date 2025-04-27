// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
// import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
	integrations: [svelte(), sitemap()],
	output: "static",
	// adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
});
