<script>
  let varor = [{ name: "apples", bought: false }, { name: "banan", bought: false }];
  let nyvara = "";

  function addItem() {
    if (nyvara !== "") {
      varor.push({ name: nyvara, bought: false });
      varor = [...varor];  
      nyvara = ""; 
    }
  }

  function removeItem(index) {
    varor.splice(index, 1);
    varor = [...varor];  
  }

  function toggleBought(index) {
    varor[index].bought = !varor[index].bought;
    varor = [...varor];  
  }
</script>

<main class="container">
  <h1>Shopping List</h1>

  <div class="input-container">
    <input
      type="text"
      placeholder="Type an item..."
      bind:value={nyvara}
    />
    <button on:click={addItem}>Add</button>
  </div>

  <div class="categories_container">
    <section>
      <h2>Varor Att köpa</h2>
      <ul>
        {#each varor as vara, index (vara.name)}
          {#if !vara.bought}
            <li>
              {vara.name}
              <div>
                <button on:click={() => toggleBought(index)}>Markera Köpt</button>
                <button on:click={() => removeItem(index)}>Remove</button>
              </div>
            </li>
          {/if}
        {/each}
      </ul>
    </section>

    <section>
      <h2>Köpta Varor</h2>
      <ul>
        {#each varor as vara, index (vara.name)}
          {#if vara.bought}
            <li>
              {vara.name}
              <div>
                <button on:click={() => toggleBought(index)}>Tillbaks Till Lista</button>
                <button on:click={() => removeItem(index)}>Ta Bort</button>
              </div>
            </li>
          {/if}
        {/each}
      </ul>
    </section>
  </div>
</main>

<style>
  /* Basic styles with black, grey, and red */
  .container {
    background-color: #000;
    color: white;
    width: 60%;
    height: 70%;
    border-radius: 10px;
    padding: 20px;
    margin: auto;
    background-image: url("https://wallpapers.com/images/featured/conor-mcgregor-gy2ym714mloopi42.jpg"); 
    background-size: cover;
  }

  main {
    font-family: Arial, sans-serif;
  }

  h1 {
    text-align: center;
    background-color: red;
    padding: 10px;
    border-radius: 5px;
  }

  .input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .input-container input {
    padding: 5px;
    font-size: 14px;
    margin-right: 5px;
    border-radius: 5px;
    color: black;  
  }

  .input-container button {
    padding: 5px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .input-container button:hover {
    background-color: darkred;
  }

  .categories_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  section {
    background-color: #222;
    padding: 10px;
    border-radius: 5px;
  }

  h2 {
    text-align: center;
    color: red;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    background-color: #444;
    margin: 5px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }

  li button {
    background-color: red;
    color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  li button:hover {
    background-color: darkred;
  }
</style>
