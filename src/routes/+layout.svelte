<script lang="ts">
	import { QueryClientProvider } from "@tanstack/svelte-query"
	import "../app.css"
	import type { PageData } from "./$types"
	import Header from "./Header.svelte"

	export let data: PageData
</script>

<QueryClientProvider client={data.queryClient}>
	<Header />
	<main class="flex-1 p-4">
		<slot />
	</main>
</QueryClientProvider>

<style lang="postcss">
	:global(html, body) {
		height: 100%;
	}
</style>
