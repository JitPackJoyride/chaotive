// Tracking issue: https://github.com/sveltejs/svelte/issues/2837
// FIXME: This is a workaround for Svelte not allowing all events to be delegated

import { onDestroy, onMount } from "svelte"
import { bubble, current_component, listen, SvelteComponent } from "svelte/internal"

export function useForwardEvents<T extends SvelteComponent | Element>(
	getRef: () => T,
	additionalEvents: string[] = []
) {
	const events = [
		"focus",
		"blur",
		"fullscreenchange",
		"fullscreenerror",
		"scroll",
		"cut",
		"copy",
		"paste",
		"keydown",
		"keypress",
		"keyup",
		"auxclick",
		"click",
		"contextmenu",
		"dblclick",
		"mousedown",
		"mouseenter",
		"mouseleave",
		"mousemove",
		"mouseover",
		"mouseout",
		"mouseup",
		"pointerlockchange",
		"pointerlockerror",
		"select",
		"wheel",
		"drag",
		"dragend",
		"dragenter",
		"dragstart",
		"dragleave",
		"dragover",
		"drop",
		"touchcancel",
		"touchend",
		"touchmove",
		"touchstart",
		"pointerover",
		"pointerenter",
		"pointerdown",
		"pointermove",
		"pointerup",
		"pointercancel",
		"pointerout",
		"pointerleave",
		"gotpointercapture",
		"lostpointercapture",
		...additionalEvents
	]
	const component = current_component
	const destructors: (() => void)[] = []

	function forward(e) {
		bubble(component, e)
	}

	onMount(() => {
		const ref = getRef()

		if (ref instanceof Element) {
			events.forEach((event) => {
				destructors.push(listen(ref, event, forward))
			})
		} else {
			events.forEach((event) => {
				destructors.push(ref.$on(event, forward))
			})
		}
	})

	onDestroy(() => {
		while (destructors.length) {
			destructors.pop()?.()
		}
	})
}
