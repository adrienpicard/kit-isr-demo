<script>
	import { page } from '$app/stores';
	import Menu from '../../../components/menu.svelte';
</script>

<h1>{$page.params.first} / {$page.params.second ?? '_blank_'}</h1>

<Menu />
