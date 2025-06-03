<script lang="ts">
	import NumberFlow from "@number-flow/svelte";
	let { stat, text, duration, children } = $props();

	const endNumber =
		typeof stat === "string" ? Number(stat.replace(",", "")) : stat;

	let currentNumber = $state(0);
	let iconClass = $state("scale-90 opacity-85");
	let svgClass = $state("");

	$effect(() => {
		// if (isInView)
		setTimeout(() => {
			currentNumber = endNumber;
			svgClass = "animate-circle";
		}, 100);
		setTimeout(() => {
			iconClass = "scale-[1.05] opacity-100";
		}, 2200);
	});
</script>

<div data-slot="card" class="stat-card-inner overflow-none">
	<div class="block p-0">
		<div class="flex flex-col items-center md:items-start gap-4">
			<span
				class="relative flex justify-center items-center shrink-0 h-16 w-16 overflow-hidden rounded-full border-primary/20"
			>
				<svg class={`stat-card-svg ${svgClass}`} viewbox="0 0 60 60">
					<circle cx="30" cy="30" r="30" stroke-width="8" fill="transparent" />
				</svg>
				<div
					class={`stat-card-icon transition-all duration-[300ms] ease-in-out ${iconClass}`}
				>
					{@render children?.()}
				</div>
			</span>
			<div
				data-stat={stat}
				class="mt-4 text-4xl lg:text-5xl leading-tight font-semibold"
			>
				<NumberFlow
					value={currentNumber}
					spinTiming={{
						duration,
					}}
				/>
			</div>
			<p
				class="mb-5 max-w-52 text-base lg:text-lg font-medium text-center md:text-left"
			>
				{text}
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference '@styles/app.css';
</style>
