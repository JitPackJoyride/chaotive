const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	important: true,
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
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
