import { browser } from "$app/environment"
import { QueryClient } from "@tanstack/svelte-query"
import type { LayoutLoad } from "./$types"

export const prerender = true
export const ssr = false

export const load: LayoutLoad = async () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	})

	return { queryClient }
}
