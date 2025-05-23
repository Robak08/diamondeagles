<script lang="ts">
	let { companies, categories } = $props();

	console.log("FROM COMPONENT", companies, categories);
</script>

<div class="ranking">
	<div class="cats">
		{#each categories as { category_name, id }, ind}
			<div class="mr-2" data-name={category_name} data-id={id}>
				{category_name}
			</div>
		{/each}
	</div>
	<div class="companies">
		{#each companies as { uuid, name, website, phone, address, score, total_reviews, thumbnail_id, score_details, createdAt }, ind}
			<div class="company">
				<div class="name">
					{name}
				</div>
				<div class="datte">
					{createdAt}
				</div>
				<div class="score">
					{score} ({total_reviews})
				</div>
				<div class="website">{website}</div>
				<div class="phone">
					{phone}
				</div>
				<img
					src="https://api.diamondeaglesusa.com/img/{thumbnail_id}.jpg"
					alt={name}
				/>
				<div class="score-det">
					{JSON.stringify(score_details)}
				</div>
			</div>
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
		.company {
			@apply text-xs;
			@apply border-foreground/10 rounded-2xl p-4;
		}
	}
</style>
