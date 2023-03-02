<script lang="ts">
	import { page } from "$app/stores"

	$: currentRoute = $page.route.id

	const ALL_ROUTES = {
		"/": "Execute",
		"/about": "Triage"
	}
</script>

<nav class="btn-group mx-auto my-4 rounded-lg border border-gray-500">
	{#each Object.entries(ALL_ROUTES) as [route, name]}
		<a
			href={route}
			class="btn-sm btn normal-case first:ml-0 {route === currentRoute && 'btn-active'}">{name}</a
		>
	{/each}
</nav>
