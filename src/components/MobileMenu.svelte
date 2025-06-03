<script lang="ts">
	import * as Drawer from "$lib/components/ui/drawer/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { X, SquareMenu } from "@lucide/svelte";
	import ThemeToggle from "@components/ThemeToggle.svelte";

	let { links, currentPath } = $props();
	let open = $state(false);

	const closeDrawer = () => (open = false);
</script>

<Drawer.Root bind:open direction="right">
	<Drawer.Trigger asChild>
		<!-- builders={[builder]} -->
		<Button variant="ghost" title="Open menu" class="has-[>svg]:px-2">
			<SquareMenu class="!w-6 !h-6" />
		</Button>
	</Drawer.Trigger>
	<Drawer.Content class="h-full">
		<Drawer.Header class="relative py-6">
			<Drawer.Title class="uppercase text-xl text-left mt-2">
				Diamond Eagles
			</Drawer.Title>
			<Drawer.Close asChild class="absolute right-10 top-7">
				<Button variant="outline">
					<X />
				</Button>
			</Drawer.Close>
		</Drawer.Header>
		<div class="menu-content">
			{#each links as link}
				<a
					onclick={closeDrawer}
					href={link.href}
					title={link.label}
					class={currentPath === link.href ? "text-primary" : ""}
				>
					{link.label}
				</a>
			{/each}
		</div>
		<Drawer.Footer>
			<ThemeToggle />
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>

<style lang="postcss">
	@reference '@styles/app.css';
	.menu-content {
		@apply flex flex-col gap-y-12 justify-center items-center w-full mt-24 mb-8;
		a {
			@apply text-xl;
		}
	}
</style>
