<script lang="ts">
	let { website, name } = $props();
	import { ExternalLink } from "@lucide/svelte";
</script>

<a href={website} target="_blank" rel="noreferrer nofollower" title={name}>
	Go to website <ExternalLink size="10" class="inline-block ml-1" />
</a>

<style lang="postcss">
	@reference '@styles/app.css';
	a {
		@apply flex items-center transition-colors;
		&:hover,
		&:focus {
			@apply text-primary;
		}
	}
</style>
