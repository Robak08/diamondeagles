<script lang="ts">
	import RankingFilters from "@/components/Ranking/RankingFilters.svelte";
	import RankingCompany from "@/components/Ranking/Card/RankingCompany.svelte";

	import * as Pagination from "$lib/components/ui/pagination/index.js";

	import { companies } from "@lib/strapi";

	const categoryId = 2; // this is gonna be constant based on website pathname

	const pageSize = 10;

	let filtersObject = {
		company_category: { id: { $eq: categoryId } },
	};

	const queryCompanies = async (filtersObj, pageNumber) => {
		// const { company_category } = filtersObject;
		return await companies.find({
			sort: "score:desc,total_reviews:desc",
			// filters: { company_category: { id: { $eq: categoryId } } },
			filters: filtersObject,
			populate: {
				company_category: {
					fields: ["*"],
				},
			},
			pagination: {
				page: pageNumber || 1,
				pageSize: pageSize,
			},
		});
	};

	let pageNumber = $state(1);
	let companiesRes = $state();
	$effect(async () => {
		companiesRes = await queryCompanies(filtersObject, pageNumber);
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
		<RankingFilters />
	</div>
	<div class="ranking-pagination">
		{#if companiesRes?.meta}
			<Pagination.Root
				count={companiesRes?.meta.pagination.total}
				perPage={pageSize}
				bind:page={pageNumber}
			>
				{#snippet children({ pages, currentPage })}
					<Pagination.Content>
						<Pagination.Item>
							<Pagination.PrevButton />
						</Pagination.Item>
						{#each pages as page (page.key)}
							{#if page.type === "ellipsis"}
								<Pagination.Item>
									<Pagination.Ellipsis />
								</Pagination.Item>
							{:else}
								<Pagination.Item>
									<Pagination.Link {page} isActive={currentPage === page.value}>
										{page.value}
									</Pagination.Link>
								</Pagination.Item>
							{/if}
						{/each}
						<Pagination.Item>
							<Pagination.NextButton />
						</Pagination.Item>
					</Pagination.Content>
				{/snippet}
			</Pagination.Root>
			<!-- <Pagination.Item> -->
			<!-- <input type="numeric" title="Go to page" bind:value={pageNumber} /> -->
			<!-- </Pagination.Item> -->
		{/if}
	</div>
	<div class="ranking-companies">
		{#each companiesRes?.data as company, index (company.uuid)}
			<RankingCompany {company} {pageNumber} {index} />
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
	.ranking {
		@apply max-w-screen-md mx-auto;
		@apply w-full h-full flex flex-col items-center justify-center gap-y-10;
		.ranking-companies {
			@apply my-10 flex flex-col items-center justify-center gap-4;
			@apply w-full;
		}
		.ranking-pagination {
			@apply w-full;
		}
	}
</style>
