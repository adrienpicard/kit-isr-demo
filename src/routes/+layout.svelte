<script>
	const { children } = $props();
</script>

<ul class="flex gap-2 p-2">
	<li><a href="/route-a">/route-a</a></li>
	<li><a href="/route-b">/route-b</a></li>
</ul>

{@render children()}
