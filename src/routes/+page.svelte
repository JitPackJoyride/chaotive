<script lang="ts">
	import { page } from "$app/stores"
	import { trpc } from "$lib/trpc/client"

	const client = trpc($page)
	const hello = client.greeting.createQuery("foo", { retry: false })
</script>

<p>
	{#if $hello.isLoading}
		Loading...
	{:else if $hello.isError}
		Error: {$hello.error.message}
	{:else}
		{$hello.data}
	{/if}
</p>
