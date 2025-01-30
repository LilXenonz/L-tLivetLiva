<script>
  import { goto } from '$app/navigation';
  let search = '';
</script>

<form on:submit|preventDefault={() => goto(`/search/${search.toLowerCase()}`)}>
  <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>

<style>
  input {
    padding: 10px;
    font-size: 1.2em;
    border-radius: 5px;
    border: 1px solid ccc;
    color: black;
  }
</style>