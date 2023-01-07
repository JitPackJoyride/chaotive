import { t } from "./t"

export const router = t.router({
	greeting: t.procedure.query(async () => {
		// await delay(500); // 👈 simulate an expensive operation
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`
	})
})

export type Router = typeof router
