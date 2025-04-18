<script>
	const invalidate = () => {
		fetch('/route-a', {
			headers: { 'x-prerender-revalidate': 'ec04d5c6-2fc3-446a-9879-5dbe00bf3730' }
		});
		fetch('/route-b', {
			headers: { 'x-prerender-revalidate': 'ec04d5c6-2fc3-446a-9879-5dbe00bf3730' }
		});
	};
</script>

<button onclick={invalidate}>Invalidate pages</button>
