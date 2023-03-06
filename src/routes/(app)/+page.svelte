<script lang="ts">
	import { page } from "$app/stores"
	import { trpc } from "$lib/trpc/client"

	const client = trpc($page)
	const tasks = client.getTasks.createQuery()
</script>

<div class="flex flex-col items-center justify-center py-2">
	{#if $tasks.isLoading}
		<p>Loading...</p>
	{:else if $tasks.isError}
		<p>Error: {$tasks.error.message}</p>
	{:else}
		{#each $tasks.data as task}
			<p>{task.title}</p>
		{/each}
	{/if}
</div>
