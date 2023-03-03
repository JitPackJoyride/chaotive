<script lang="ts">
	import { page } from "$app/stores"
	import { buttonClasses } from "$lib/twClasses"
</script>

<main class="flex flex-1 flex-col items-center justify-center space-y-4">
	{#if $page.status === 404}
		<h1>Page not found</h1>
		<p>Oops, I don't know how you got here. But here's your escape button!</p>
		<a href="/" class={buttonClasses()}>Back to home</a>
	{:else}
		<h1>This page is broken</h1>
		<p class="text-center">
			Yikes, something must have gone really wrong for you to end up here.
			<br /> Our team has been notified and is looking into the issue.
		</p>
		<a href="/" class={buttonClasses()}>Back to home</a>
	{/if}
</main>
<footer class="self-end">
	<p class="font-thin">{$page.status}</p>
</footer>

<style lang="postcss">
	h1 {
		@apply text-6xl font-bold;
		text-shadow: 0 0 0.2em;
	}
</style>
