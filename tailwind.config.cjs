const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	important: true,
	theme: {
		extend: {
			colors: {
				primaryColors: {
					50: "var(--color-primary-50)",
					100: "var(--color-primary-100)",
					200: "var(--color-primary-200)",
					300: "var(--color-primary-300)",
					400: "var(--color-primary-400)",
					500: "var(--color-primary-500)",
					600: "var(--color-primary-600)",
					700: "var(--color-primary-700)",
					800: "var(--color-primary-800)",
					900: "var(--color-primary-900)"
				}
			}
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=emerald]"]
				}
			},
			{
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: colors.sky[500],
					"primary-focus": colors.sky[600]
				}
			}
		]
	}
}
