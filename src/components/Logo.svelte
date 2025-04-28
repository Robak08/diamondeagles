<script lang="ts">
	import LogoSvg from "./LogoSvg.svelte";

	interface Props {
		hero?: boolean;
		header?: boolean;
		footer?: boolean;
		home?: boolean;
		scrolled?: boolean;
	}

	let {
		hero = false,
		header = false,
		footer = false,
		home = false,
		scrolled = false,
	}: Props = $props();
</script>

<div class="delogo" class:hero class:header class:footer>
	{#if header}
		<a href="/" title="Home">
			<LogoSvg {footer} {scrolled} {header} {home} />
		</a>
	{:else}
		<LogoSvg {footer} {scrolled} {header} {home} />
	{/if}
</div>

<style lang="postcss">
	@reference '../styles/app.css';
	.delogo {
		@apply flex items-center w-[fit-content];
		&.header :global(svg) {
			@apply w-28;
		}
		&.footer {
			@apply w-36 md:w-40 mx-auto md:mx-0;
		}
		&.hero {
			@apply w-full max-w-sm;
		}
	}
</style>
