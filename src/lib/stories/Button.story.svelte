<script lang="ts">
	import { buttonClasses } from "$lib/twClasses"
	import type { Hst } from "@histoire/plugin-svelte"
	import type { VariantProps } from "class-variance-authority"
	import { logEvent } from "histoire/client"
	import type { MouseEventHandler } from "svelte/elements"

	export let Hst: Hst

	const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		logEvent("Click", event)
	}

	let content = "Click me!"

	let intents: Array<NonNullable<VariantProps<typeof buttonClasses>["intent"]>> = [
		"primary",
		"secondary",
		"ghost"
	]
	let sizes: Array<NonNullable<VariantProps<typeof buttonClasses>["size"]>> = ["small", "large"]

	let variants = intents.map((intent) => sizes.map((size) => ({ intent, size }))).flat()
</script>

<Hst.Story>
	<Hst.Variant title="default">
		<button type="button" class={buttonClasses()} on:click={handleClick}>
			{content}
		</button>
	</Hst.Variant>
	{#each variants as { intent, size }}
		<Hst.Variant title={`${intent} ${size}`}>
			<button type="button" on:click={handleClick} class={buttonClasses({ intent, size })}>
				{content}
			</button>
		</Hst.Variant>
	{/each}
	{#each variants as { intent, size }}
		<Hst.Variant title={`disabled ${intent} ${size}`}>
			<button type="button" disabled on:click={handleClick} class={buttonClasses({ intent, size })}>
				{content}
			</button>
		</Hst.Variant>
	{/each}
</Hst.Story>
