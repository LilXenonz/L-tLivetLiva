<script>
    // Skapa en array med 12 kortobjekt
    let cards = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      image: "favicon.png", // Länka till din bild för framsidan
      flipped: false,
      matched: false
    }));
  </script>
  
  <style>
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    main {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(4, 100px);
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
  
    .card {
      width: 100px;
      height: 100px;
      border: 1px solid black;
      position: relative;
      perspective: 1000px;
    }
  
    .card img {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      transition: transform 0.5s;
    }
  
    .card .front {
      transform: rotateY(180deg);
    }
  
    .card.flipped .front {
      transform: rotateY(0);
    }
  
    .card.flipped .back {
      transform: rotateY(180deg);
    }
  </style>
  
  <h1>Memory</h1>
  <main>
    {#each cards as card}
      <div class="card {card.flipped ? 'flipped' : ''}" on:click={() => flipCard(card)}>
        <img class="front" src={card.image} alt="Card Front" />
        <img class="back" src="https://via.placeholder.com/100" alt="Card Back" />
      </div>
    {/each}
  </main>
  
  <script>
    // Funktion för att vända kortet
    function flipCard(card) {
      if (!card.matched) {
        card.flipped = !card.flipped;
      }
    }
  </script>
  