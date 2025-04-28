<script lang="ts">
	const links = [
		{
			label: "About Eagles",
			href: "/about",
		},
		{
			label: "Industries",
			href: "/industries",
			children: [
				{
					label: "Industry 1",
					href: "/",
				},
				{
					label: "Industry 2",
					href: "/",
				},
				{
					label: "Industry 3",
					href: "/",
				},
				{
					label: "Industry 4",
					href: "/",
				},
			],
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "Terms and Conditions",
			href: "/terms-and-conditions",
		},
	];
</script>

{#each links as { label, href, children }, i}
	{#if !children}
		<li class="list-item"><a title={label} {href}>{label}</a></li>
	{:else}
		<li class="list-item">
			<details>
				<summary>{label}</summary>
				<ul>
					{#each children as { label, href }, j}
						<li><a title={label} {href}>{label}</a></li>
					{/each}
				</ul>
			</details>
		</li>
	{/if}
{/each}

<style lang="postcss">
	@reference '../styles/app.css';
	.list-item {
		@apply mx-1;
	}
	ul {
		@apply bg-base-100 rounded-t-none p-2 text-xs w-full;
		li a {
			@apply px-1 justify-center;
		}
	}
</style>
