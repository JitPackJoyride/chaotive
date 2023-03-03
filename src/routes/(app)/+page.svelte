<script lang="ts">
	import { page } from "$app/stores"
	import { trpc } from "$lib/trpc/client"

	const client = trpc($page)
	const tasks = client.getTasks.createQuery(undefined, { retry: false })
</script>

<div class="flex flex-col items-center justify-center">
	<h1 class="text-3xl font-bold text-primary">All tasks</h1>

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
