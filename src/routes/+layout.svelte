<script>
	const { children } = $props();

	const invalidate = () => {
		fetch('/yay', {
			headers: { 'x-prerender-revalidate': 'ec04d5c6-2fc3-446a-9879-5dbe00bf3730' }
		});
		fetch('/nay', {
			headers: { 'x-prerender-revalidate': 'ec04d5c6-2fc3-446a-9879-5dbe00bf3730' }
		});
	};
</script>

<ul class="flex gap-2 p-2">
	<li><a href="/yay">/yay</a></li>
	<li><a href="/nay">/nay</a></li>
</ul>

{@render children()}

<button onclick={invalidate}>Invalidate both pages</button>
