<script lang="ts">
	import { page } from "$app/stores"

	$: currentRoute = $page.url.pathname

	const ALL_ROUTES = {
		"/": "Execute",
		"/triage": "Triage"
	}
</script>

<nav class="btn-group mx-auto my-4 rounded-lg border border-gray-500">
	{#each Object.entries(ALL_ROUTES) as [route, name]}
		<a
			href={route}
			class="btn-sm btn font-medium normal-case first:ml-0 
			{route === currentRoute && 'active'}"
		>
			{name}
		</a>
	{/each}
</nav>

<style lang="postcss">
	a.active {
		background: linear-gradient(theme(colors.slate.400) 10%, theme(colors.slate.600));
		color: theme(colors.white);
	}
</style>
