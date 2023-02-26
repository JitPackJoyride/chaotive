import { client } from "$lib/edgeDb"
import { z } from "zod"
import { t } from "./t"

import e from "$db"

export const router = t.router({
	greeting: t.procedure.input(z.string()).query(async ({ input }) => {
		const query = e.select(e.datetime_current())
		const result = await query.run(client)
		console.log(result)
		return `Hello ${input}`
	})
})

export type Router = typeof router
