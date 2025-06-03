<script lang="ts">
	let { phone, name } = $props();
	import { Phone } from "@lucide/svelte";
</script>

<a
	class="item-phone"
	href={"tel:" + phone}
	target="_self"
	rel="noreferrer nofollower"
	title={name}
>
	<Phone size="12" class="inline-block mr-1" />
	{phone}
</a>

<style lang="postcss">
	@reference '@styles/app.css';
	a.item-phone {
		@apply flex items-center transition-colors;
		&:hover,
		&:focus {
			@apply text-primary;
		}
	}
</style>
