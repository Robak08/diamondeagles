<script lang="ts">
	let { categories } = $props();
	import RankingFilters from "@/components/RankingFilters.svelte";
	import RankingCompany from "@/components/Ranking/RankingCompany.svelte";

	import { companies } from "@lib/strapi";

	// TODO move fetching here

	let pageNumber = $state(1);

	const queryCompanies = async (activeFilters) => {
		const { pageNumber } = activeFilters;
		return await companies.find({
			sort: "score:desc,total_reviews:desc",
			filters: { company_category: { category_name: { $eq: "Beauty" } } },
			populate: {
				company_category: {
					fields: ["*"],
				},
			},
			pagination: {
				page: pageNumber || 1,
				pageSize: 10,
			},
		});
	};

	let companiesRes = $state();
	$effect(async () => {
		companiesRes = await queryCompanies({ pageNumber });

		console.log(companiesRes);
	});
</script>

<div class="ranking">
	<!-- <div class="cats">
		{#each categories as { category_name, id }, index}
			<div class="mr-2" data-name={category_name} data-id={id}>
				{category_name}
			</div>
		{/each}
	</div> -->
	<div class="ranking-filters">
		<!-- <RankingFilters {categories} /> -->
	</div>
	<div class="ranking-pagination"></div>
	<div class="ranking-companies">
		{#each companiesRes?.data as company, index}
			<RankingCompany
				{company}
				pageNo={companiesRes.meta.pagination.page}
				{index}
			/>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
	.ranking {
		@apply w-full h-full flex flex-col items-center justify-center gap-y-10;
		.ranking-companies {
			@apply my-10 flex flex-col items-center justify-center gap-4;
		}
		.ranking-pagination {
			@apply w-full;
		}
	}
</style>
