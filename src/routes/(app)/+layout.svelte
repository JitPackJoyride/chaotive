<script lang="ts">
	import { QueryClientProvider } from "@tanstack/svelte-query"
	import "../../app.css"
	import type { PageData } from "./$types"
	import Header from "./Header.svelte"

	export let data: PageData
</script>

<QueryClientProvider client={data.queryClient}>
	<Header />
	<div class="flex-1">
		<slot />
	</div>
</QueryClientProvider>
