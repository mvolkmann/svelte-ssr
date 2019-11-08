<script>
	export let name;
</script>

<style>
	h1 {
		color: purple;
  }

  label {
    display: inline-block;
  }
</style>

<svelte:head>
  <title>My SSR Demo</title>
</svelte:head>

<div>
  <label>Name</label>
  <input bind:value={name} />
</div>

<h1>Hello {name}!</h1>
