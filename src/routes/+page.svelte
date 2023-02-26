<script lang="ts">
	import { page } from "$app/stores"
	import type { Task } from "$db/types"
	import { trpc } from "$lib/trpc/client"
	import uuidv4 from "$lib/uuidv4"

	const client = trpc($page)
	const hello = client.greeting.createQuery("World", { retry: false })

	let tasks: Task[] = [
		{
			id: uuidv4(),
			title: "Task 12"
		}
	]
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

{#each tasks as task}
	<p>{task.title}</p>
{/each}
