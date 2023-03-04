<script lang="ts">
	import Header from "./Header.svelte"
	import { QueryClientProvider } from "@tanstack/svelte-query"
	import "../../app.css"
	import type { PageData } from "./$types"

	export let data: PageData
</script>

<QueryClientProvider client={data.queryClient}>
	<Header />
	<main class="mx-auto max-w-2xl flex-1">
		<slot />
	</main>
</QueryClientProvider>

<style>
	:global(html, body) {
		height: 100%;
	}
</style>
