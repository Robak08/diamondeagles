<script lang="ts">
	let { address } = $props();
	// https://maps.google.com/maps?q=Your+Address
	import { MapPin } from "@lucide/svelte";
	const joinedAddress = address
		.trim()
		.replaceAll(", ", ",")
		.replaceAll(" ", "+");
</script>

<a
	class="item-address"
	href={"https://maps.google.com/maps?q=" + joinedAddress}
	target="_blank"
	rel="nofollower noreferrer noopener"
	><MapPin size="12" class="inline-block mr-1" />{address}</a
>

<style lang="postcss">
	@reference '@styles/app.css';
	a.item-address {
		@apply flex items-center transition-colors;
		&:hover,
		&:focus {
			@apply text-primary;
		}
	}
</style>
