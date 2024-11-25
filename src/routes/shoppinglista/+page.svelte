<script>
    let items = [
      { name: 'Apples', purchased: false },
      { name: 'Bananas', purchased: false },
      { name: 'Milk', purchased: false },
      { name: 'Bread', purchased: false },
    ];
  
    let newItem = '';
  
    function addItem() {
      if (newItem.trim() !== '') {
        items = [...items, { name: newItem, purchased: false }];
        newItem = ''; 
      }
    }
  
    function removeItem(item) {
      items = items.filter(i => i !== item);
    }
  
    function markAsPurchased(item) {
      items = items.map(i => 
        i === item ? { ...i, purchased: true } : i
      );
    }
  
    function moveToBuy(item) {
      items = items.map(i => 
        i === item ? { ...i, purchased: false } : i
      );
    }
  </script>
  
  <style>
    /* Container styling */
    .container {
      background-color: #000;
      color: #fff;
      width: 60vw;
      height: 70vh;
      border-radius: 10px;
      padding: 10px;
      font-family: Arial, sans-serif;
      margin: 0 auto;
    }
  
    /* Header styling */
    h1 {
      text-align: center;
      background-color: red;
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5rem;
    }
  
    /* Input container styling */
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
      border: 1px solid #fff;
      color: #000;
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
  
    /* List section styling */
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
      margin: 5px 0;
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
  
    .move-button {
      background-color: #333;
      margin-left: 5px;
    }
  
    .move-button:hover {
      background-color: #555;
    }
  </style>
  
  <main class="container">
    <h1>Shopping List</h1>
  
    <!-- Input för att lägga till ett nytt objekt -->
    <div class="input-container">
      <input type="text" bind:value={newItem} placeholder="Add new item..." />
      <button on:click={addItem}>Add</button>
    </div>
  
    <div class="categories_container">
      <!-- Lista med objekt att köpa -->
      <section>
        <h2>Items to Buy</h2>
        <ul>
          {#each items.filter(item => !item.purchased) as item}
            <li>
              {item.name}
              <div>
                <button class="move-button" on:click={() => markAsPurchased(item)}>Mark as Purchased</button>
                <button on:click={() => removeItem(item)}>Remove</button>
              </div>
            </li>
          {/each}
        </ul>
      </section>
  
      <!-- Lista med köpta objekt -->
      <section>
        <h2>Purchased Items</h2>
        <ul>
          {#each items.filter(item => item.purchased) as item}
            <li>
              {item.name}
              <div>
                <button class="move-button" on:click={() => moveToBuy(item)}>Move to Buy</button>
                <button on:click={() => removeItem(item)}>Remove</button>
              </div>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </main>
  