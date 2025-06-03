<script lang="ts">
	import RankingScore from "@components/Ranking/Card/RankingScore.svelte";
	import RankingPhone from "@components/Ranking/Card/RankingPhone.svelte";
	import RankingAddress from "@components/Ranking/Card/RankingAddress.svelte";
	// import RankingCategory from "@components/Ranking/Card/RankingCategory.svelte";
	import RankingWebsite from "@components/Ranking/Card/RankingWebsite.svelte";

	import { stagger, animate } from "motion";

	let { company, pageNumber, index } = $props();

	let {
		uuid,
		name,
		company_category,
		website,
		phone,
		address,
		score,
		total_reviews,
		thumbnail_id,
		score_details,
		createdAt,
	} = $derived(company);

	let rankingPlace = $state();

	let ref = $state();
	$effect(() => {
		rankingPlace =
			pageNumber === 1 && index === 0
				? 1
				: pageNumber === 1 && index === 1
					? 2
					: pageNumber === 1 && index === 2
						? 3
						: null;

		animate(ref, { opacity: 1 }, { delay: 0.1 * index });
	});
</script>

<div
	bind:this={ref}
	class="company-card opacity-0"
	class:first-place={rankingPlace === 1}
	class:second-place={rankingPlace === 2}
	class:third-place={rankingPlace === 3}
	class:laureate={rankingPlace === null}
>
	<div class="company-content-left">
		<img
			class="company-image"
			src="https://api.diamondeaglesusa.com/img/{thumbnail_id}.jpg"
			alt={name}
			width="240"
			height="160"
		/>
		<div class="company-content-inner">
			<div class="name">
				{name}
			</div>
			<!-- <div class="category">
				<RankingCategory category={company_category} />
			</div> -->
			<div class="phone">
				{#if phone}
					<RankingPhone {phone} {name} />
				{/if}
			</div>
			<div class="address">
				{#if address}
					<RankingAddress {address} />
				{/if}
			</div>
		</div>
	</div>
	<div class="company-content-right">
		<div class="placement-wrap">
			<div class="placement">
				{#if rankingPlace === 1}
					I place
				{:else if rankingPlace === 2}
					II place
				{:else if rankingPlace === 3}
					III place
				{:else}
					Laureate
				{/if}
			</div>
			{#if website}
				<div class="website">
					<RankingWebsite {website} {name} />
				</div>
			{/if}
		</div>
		<div class="score">
			<RankingScore {score} reviews={total_reviews} />
		</div>
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
	.company-card {
		@apply flex gap-3 p-3 lg:p-2;
		@apply flex-col items-center justify-center md:flex-row md:items-start md:justify-between;
		@apply rounded-xl border bg-card text-card-foreground shadow-lg;
		@apply w-full text-sm;
		.name {
			@apply text-base lg:text-lg font-medium;
		}
		&.first-place {
			@apply bg-[gold]/25 dark:bg-[gold]/10;
			@apply border-[gold]/75 dark:border-[gold]/25;
			@apply shadow-[gold]/5;
		}
		&.second-place {
			@apply bg-[gold]/15 dark:bg-[gold]/5;
			@apply border-[gold]/65 dark:border-[gold]/15;
			@apply shadow-[gold]/2;
		}
		&.third-place {
			@apply bg-[gold]/10 dark:bg-[gold]/2;
			@apply border-[gold]/55 dark:border-[gold]/5;
			@apply shadow-[gold]/1;
		}

		.company-image {
			@apply object-cover rounded-xl shadow-md aspect-square;
			@apply max-w-[140px];
		}
		.company-content-left {
			@apply flex flex-row items-start justify-start gap-x-4 md:gap-x-6;
		}
		.company-content-inner,
		.company-content-right {
			@apply flex flex-col items-start justify-center gap-y-3;
		}
		.company-content-right {
			@apply self-stretch justify-between items-end;
			/* justify-content: space-between; */
			/* place-self: stretch; */
		}
		.placement-wrap {
			@apply flex flex-col gap-y-3 items-end;
			.placement {
				@apply border border-zinc-600 text-white;
				@apply bg-zinc-800;
				@apply p-1 rounded-md w-20 text-center select-none;
				@apply text-sm;
			}
		}

		&.laureate {
			.placement {
				@apply bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-800 text-foreground;
			}
		}
	}
</style>
