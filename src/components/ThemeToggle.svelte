<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Moon, Sun } from "@lucide/svelte";

	let currentTheme = $state();

	const handleThemeToggle = () => {
		currentTheme =
			document.documentElement.attributes.getNamedItem("data-theme")?.value;
		document.dispatchEvent(
			new CustomEvent("set-theme", {
				detail: currentTheme === "dark" ? "light" : "dark",
			})
		);
	};

	$effect(() => {
		currentTheme =
			document.documentElement.attributes.getNamedItem("data-theme")?.value;
	});
</script>

<Button
	id="theme-toggle"
	title="Toggle theme"
	variant="outline"
	size="icon"
	class="cursor-pointer transition-colors hover:text-primary-darker dark:hover:text-primary"
	onclick={handleThemeToggle}
>
	{#if currentTheme === "light"}
		<Sun
			class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all pointer-events-none"
		/>
	{:else}
		<Moon
			class="absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-all pointer-events-none"
		/>
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>

<style lang="postcss">
	@reference '@styles/app.css';
</style>
