import { client } from "$lib/edgeDb"
import { t } from "./t"

import e from "$db"

export const router = t.router({
	getTasks: t.procedure.query(async () => {
		const query = e.select(e.Task, (task) => ({
			id: true,
			title: true
		}))
		const tasks = await query.run(client)
		return tasks
	})
})

export type Router = typeof router
