// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
	integrations: [react(), svelte(), sitemap()],
	output: "server",
	// output: "static",
	prefetch: {
		defaultStrategy: "hover",
		prefetchAll: true,
	},
	adapter: vercel({
		// webAnalytics: {
		// 	enabled: true,
		// },
		// CHECK isr
		// isr: true,
		// imagesConfig: {
		// 	sizes: [320, 640, 1280],
		// },
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
