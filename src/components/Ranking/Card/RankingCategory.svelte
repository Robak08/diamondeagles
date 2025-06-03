<script lang="ts">
	import { Badge } from "$lib/components/ui/badge/index.js";
	let { category } = $props();
</script>

<Badge
	variant="secondary"
	class="badge-filter bg-muted/85 text-foreground select-none"
>
	<span data-id={category.id}>
		{category.category_name}
	</span>
</Badge>
