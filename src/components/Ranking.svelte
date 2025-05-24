<script lang="ts">
	let { companies, categories } = $props();
	import RankingCompany from "@/components/Ranking/RankingCompany.svelte";
</script>

<div class="ranking">
	<!-- <div class="cats">
		{#each categories as { category_name, id }, index}
			<div class="mr-2" data-name={category_name} data-id={id}>
				{category_name}
			</div>
		{/each}
	</div> -->
	<div class="companies">
		{#each companies.data as company, index}
			<RankingCompany
				{company}
				pageNo={companies.meta.pagination.start}
				{index}
			/>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
	.ranking {
		@apply w-full h-full flex flex-col items-center justify-center gap-y-10;
	}
	.companies {
		@apply my-10 flex flex-col items-center justify-center gap-4;
	}
</style>
