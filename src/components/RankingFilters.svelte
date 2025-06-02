<script lang="ts">
	let { categories } = $props();
</script>

<div class="ranking-filters">
	<!-- <div class="cats">
		{#each categories as { category_name, id }, index}
			<div class="mr-2" data-name={category_name} data-id={id}>
				{category_name}
			</div>
		{/each}
	</div> -->
	<div class="companies">
		{#each categories as { id, category_name }, index}
			<div class="filter" id>
				{category_name}
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
	.ranking-filters {
		@apply w-full h-full flex flex-col items-center justify-center gap-y-10;
	}
	.companies {
		@apply my-10 flex flex-col items-center justify-center gap-4;
	}
</style>
