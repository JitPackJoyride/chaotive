<script lang="ts">
	import { buttonClasses } from "./classes"
</script>

<nav class="navbar my-4 rounded-3xl bg-base-200">
	<a href="/" class={buttonClasses({ intent: "ghost", size: "large", class: "rounded-2xl" })}>
		Home
	</a>
	<button
		type="button"
		class={buttonClasses({ intent: "ghost", size: "large", class: "rounded-2xl" })}
	>
		About
	</button>
</nav>
