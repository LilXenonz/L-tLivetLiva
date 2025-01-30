<script>
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon}
    <article>
      {#each Object.entries(pokemon.pokemon.sprites) as [key, value]}
        {#if typeof value === "string"}
          <img src={value} />
        {/if}
      {/each}
    </article>
    <h1>{pokemon.pokemon.name}</h1>
    <section>
      <p>Weight: {pokemon.pokemon.weight}</p>
      <p>Height: {pokemon.pokemon.height}</p>
      <p>Base Experience: {pokemon.pokemon.base_experience}</p>
    </section>
  {/await}
  
  <style>
    article {
      display: flex;
      width: 90%;
      height: 30%;
      gap: 1em;
    }
  </style>
  