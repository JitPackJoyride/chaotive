<script lang="ts">
	import { page } from "$app/stores"
	import { trpc } from "$lib/trpc/client"

	const client = trpc($page)
	const hello = client.greeting.createQuery("World", { retry: false })
</script>

<p class="text-3xl font-bold text-secondary">
	{#if $hello.isLoading}
		Loading...
	{:else if $hello.isError}
		Error: {$hello.error.message}
	{:else}
		{$hello.data}
	{/if}
</p>
