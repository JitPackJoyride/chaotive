import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$db: "./dbschema/edgeql-js",
			"$db/types": "./dbschema/interfaces.ts",
			$icons: "~icons"
		}
	},

	vitePlugin: {
		experimental: {
			inspector: true
		}
	}
}

export default config
