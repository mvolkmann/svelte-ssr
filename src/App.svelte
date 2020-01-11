<script>
  import Child from './Child.svelte';
  let name = 'World';
</script>

<main>
  <label>
    Name:
    <input bind:value={name} />
  </label>
	<h1>Hello {name}!</h1>
  <Child {name} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>