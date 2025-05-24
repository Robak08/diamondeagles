<script lang="ts">
	import { Badge } from "@/components/ui/badge";
	let { category } = $props();
</script>

<Badge variant="secondary" className="badge-filter bg-muted/85 select-none">
	<span>
		{category}
	</span>
</Badge>
