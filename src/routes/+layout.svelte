<script>
	import Menu from "../components/menu.svelte";

	const { children } = $props();
</script>

<Menu />

{@render children()}
