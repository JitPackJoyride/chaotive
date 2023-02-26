<script lang="ts">
	import Header from "$lib/Header.svelte"
	import { QueryClientProvider } from "@tanstack/svelte-query"
	import "../app.css"
	import type { PageData } from "./$types"

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
