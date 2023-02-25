import { z } from "zod"
import { t } from "./t"

export const router = t.router({
	greeting: t.procedure.input(z.string()).query(async ({ input }) => {
		return `Hello ${input}`
	})
})

export type Router = typeof router
