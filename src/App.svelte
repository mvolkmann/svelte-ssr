<script>
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<svelte:head>
  <title>My SSR Demo</title>
</svelte:head>

<h1>Hello {name}!</h1>
