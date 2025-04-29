// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
// import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
	integrations: [react(), svelte(), sitemap()],
	output: "static",
	prefetch: true,
	// adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
	},
});
