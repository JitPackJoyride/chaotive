<script lang="ts">
	import { page } from "$app/stores"
	import SunIcon from "$icons/carbon/sun"
	import MoonIcon from "$icons/heroicons/moon"
	import { cx } from "class-variance-authority"
	import { onMount } from "svelte"
	import { themeChange } from "theme-change"

	$: currentRoute = $page.url.pathname

	const ALL_ROUTES = {
		"/": "Execute",
		"/triage": "Triage"
	}

	let initialTheme: string | null = "dark"

	onMount(() => {
		themeChange(false)
		// 👆 false parameter is required for svelte
		initialTheme = document.getElementsByTagName("html")[0].getAttribute("data-theme")
	})

	$: isLightMode = initialTheme === "light" ? true : false
</script>

<nav class="my-4 grid grid-cols-3">
	<div />
	<div class="flex justify-center">
		<div class="btn-group rounded-lg">
			{#each Object.entries(ALL_ROUTES) as [route, name]}
				<a
					href={route}
					class={cx(
						"btn-sm btn border-gray-500 font-medium normal-case first:ml-0",
						route === currentRoute ? "active" : ""
					)}
				>
					{name}
				</a>
			{/each}
		</div>
	</div>
	<div class="flex items-center justify-end">
		<label class="swap swap-rotate">
			<!-- this hidden checkbox controls the state -->
			<input
				type="checkbox"
				bind:checked={isLightMode}
				data-toggle-theme="dark,light"
				data-act-class="ACTIVECLASS"
			/>
			<SunIcon class="swap-on h-5 w-5 fill-current" />
			<MoonIcon class="swap-off h-5 w-5 fill-current" />
		</label>
	</div>
</nav>

<style lang="postcss">
	a.active {
		background: linear-gradient(
			theme(colors.primaryColors.400) 10%,
			theme(colors.primaryColors.700)
		);
		color: theme(colors.white);
	}
</style>
