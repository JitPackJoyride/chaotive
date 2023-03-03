<script lang="ts">
	import "../app.css"
</script>

<div class="flex flex-1 flex-col p-2">
	<slot />
</div>

<style lang="postcss">
	:global(html, body) {
		height: 100%;
	}
</style>
