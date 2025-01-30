<script>
  let names = [
    "Aaron", "Abigail", "Adam", "Adelaide", "Alex", "Alice", "Amelia", "Andrew", "Angela", "Anna", 
    "Benjamin", "Bethany", "Blake", "Brady", "Brenda", "Brian", "Brianna", "Brooke", "Bryce", "Bruce",
    "Caden", "Caleb", "Camila", "Carlos", "Catherine", "Charles", "Charlotte", "Chloe", "Christian", "Christopher",
    "Daisy", "Daniel", "David", "Diana", "Dominic", "Donna", "Dylan", "Daphne", "Declan", "Desiree",
    "Eli", "Elena", "Elianna", "Elijah", "Emily", "Emma", "Ethan", "Eva", "Evelyn", "Everett",
    "Fiona", "Finn", "Flora", "Francis", "Freddie", "Freya", "Gabriel", "Gage", "Gemma", "George",
    "Hannah", "Harper", "Henry", "Holly", "Hope", "Hudson", "Hunter", "Hyacinth", "Ivy", "Isaac",
    "Jack", "Jacob", "Jade", "James", "Jasmine", "Jason", "Jasper", "Jennifer", "Jill", "Joan",
    "Kaitlyn", "Kara", "Karl", "Kate", "Kenneth", "Kiera", "Kimberly", "Kurt", "Kyle", "Kylie",
    "Liam", "Lily", "Logan", "Luke", "Luna", "Lydia", "Maddox", "Madeline", "Mason", "Maya",
    "Nathan", "Natalie", "Nathaniel", "Nicole", "Nina", "Noah", "Oliver", "Olivia", "Oscar", "Owen",
    "Parker", "Patrick", "Paula", "Penelope", "Peter", "Piper", "Quincy", "Quinn", "Rachel", "Riley",
    "Rebecca", "Reed", "Riley", "Robert", "Rochelle", "Ryan", "Samantha", "Samuel", "Sarah", "Sawyer",
    "Thomas", "Tina", "Tyler", "Tracy", "Tristan", "Troy", "Tyson", "Vanessa", "Victor", "Violet",
    "William", "Willa", "Wyatt", "Xander", "Xena", "Yara", "Yasmine", "Zane", "Zara"
  ];
  let selectedName = "";
  let buttonPosition = { x: window.innerWidth / 2 - 50, y: window.innerHeight / 2 + 100 }; 
  let isButtonDisabled = true;

  const moveButton = (event) => {
    if (isButtonDisabled) return;

    const maxX = window.innerWidth - event.target.offsetWidth - 10;
    const maxY = window.innerHeight - event.target.offsetHeight - 20;

    buttonPosition = {
      x: Math.max(10, Math.random() * maxX),
      y: Math.max(10, Math.random() * maxY),
    };
  };

  const enableButton = (event) => {
    isButtonDisabled = !event.target.value;
  };
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  select {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    width: 250px;
  }

  .confirm-btn {
    padding: 10px 20px;
    font-size: 18px;
    background-color: lime;
    border: 2px solid black;
    cursor: pointer;
    position: absolute;
    transition: top 0.1s ease, left 0.1s ease;
  }

  .confirm-btn:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
</style>

<div class="container">
  <label for="name">Select your name:</label>
  <select id="name" bind:value={selectedName} on:change={enableButton} style="color: black;" >
    <option value="">-- Choose a name --</option>
    {#each names as name}
      <option value={name}>{name}</option>
    {/each}
  </select>

  <button
    class="confirm-btn"
    on:mouseenter={moveButton}
    disabled={isButtonDisabled}
    style="left: {buttonPosition.x}px; top: {buttonPosition.y}px;"
  >
    Confirm
  </button>
</div>
