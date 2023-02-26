import { cva } from "class-variance-authority"

export const buttonClasses = cva("btn normal-case", {
	variants: {
		intent: {
			primary: "btn-primary",
			secondary: "btn-secondary",
			ghost: "btn-ghost disabled:bg-transparent"
		},
		size: {
			small: "btn-sm text-sm",
			large: "btn-xl text-xl"
		}
	},
	defaultVariants: {
		intent: "primary",
		size: "small"
	}
})
