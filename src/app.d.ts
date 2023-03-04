// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

declare module "$icons/*" {
	import { SvelteComponentTyped } from "svelte"
	export default class extends SvelteComponentTyped<svelte.JSX.IntrinsicElements["svg"]> {}
}
