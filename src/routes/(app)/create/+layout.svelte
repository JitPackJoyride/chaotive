<script lang="ts">
	import type { LayoutData } from "./$types"

	export let data: LayoutData
</script>

<div class="flex h-full w-full">
	<main class="flex-1">
		<slot />
	</main>
	<aside class="py-4">
		<div />
	</aside>
</div>
