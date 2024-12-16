<script>
  let cards = [
    {image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS8ZWQXla-6Y970WAUxBLhrAgxAHcypvOsxLsPkkY2Z_z7KfalewadIjdVZbRZ_zOdk03x8XYOg1--Swq0", flipped: false, matched: false },
    {image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcS8ZWQXla-6Y970WAUxBLhrAgxAHcypvOsxLsPkkY2Z_z7KfalewadIjdVZbRZ_zOdk03x8XYOg1--Swq0", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=xbg9Kwfj", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2021-07/MCGREGOR_CONOR_L_07-10.png?itok=xbg9Kwfj", flipped: false, matched: false },
    {image: "https://i.ytimg.com/vi/-NtW-sTeKzc/maxresdefault.jpg", flipped: false, matched: false },
    {image: "https://i.ytimg.com/vi/-NtW-sTeKzc/maxresdefault.jpg", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-10/3/PEREIRA_ALEX_L_BELT_10-05.png?itok=5O93_Ug3", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-10/3/PEREIRA_ALEX_L_BELT_10-05.png?itok=5O93_Ug3", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-10/2/ASPINALL_TOM_BELT_L_07-27.png?itok=U2Fuugd3", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2024-10/2/ASPINALL_TOM_BELT_L_07-27.png?itok=U2Fuugd3", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/2021-10/71660%252Fprofile-galery%252Fprofile-picture%252FCHIMAEV_KHAMZAT_10-30.png", flipped: false, matched: false },
    {image: "https://dmxg5wxfqgb4u.cloudfront.net/2021-10/71660%252Fprofile-galery%252Fprofile-picture%252FCHIMAEV_KHAMZAT_10-30.png", flipped: false, matched: false }
  ];

  let flipCount = 0; 
  let blueTurn = true; 
  let blueScore = 0; 
  let redScore = 0; 
  let gameOver = false;
  let winner = "";

  function flipCard(card) {
    if (!card.flipped && flipCount < 2 && !gameOver) {
      card.flipped = true;
      flipCount++;
      cards = cards;

      const flippedCards = cards.filter((card) => card.flipped && !card.matched);

      if (flippedCards.length === 2) {
        if (flippedCards[0].image === flippedCards[1].image) {
          flippedCards.forEach((card) => (card.matched = true));
          if (blueTurn) {
            blueScore++;
          } else {
            redScore++;
          }
        } else {
          setTimeout(() => {
            flippedCards.forEach((card) => (card.flipped = false));
            cards = cards;
          }, 1000);
        }

        if (flippedCards[0].image !== flippedCards[1].image) {
          setTimeout(() => {
            blueTurn = !blueTurn;
            flipCount = 0; 
            cards = cards;
          }, 1000);
        } else {
          flipCount = 0; 
        }
      }
    }

    checkGameOver();
  }

  function checkGameOver() {
    if (cards.every(card => card.matched)) {
      gameOver = true;
      winner = blueScore > redScore ? "Blue" : (redScore > blueScore ? "Red" : "It's a Tie!");
    }
  }

  function resetGame() {
    // Reset the cards and scores
    cards = cards.map(card => ({ ...card, flipped: false, matched: false }));
    blueScore = 0;
    redScore = 0;
    blueTurn = true;
    flipCount = 0;
    gameOver = false;
    winner = "";
    randomizeCards();
  }

  function randomizeCards() {
    cards = cards.sort(() => Math.random() - 0.5);
  }

  // Initialize the game by randomizing cards
  randomizeCards();
</script>

<style>
  h1 {
    text-align: center;
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    cursor: pointer;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }

  .card img {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .front {
    transform: rotateY(180deg);
  }

  aside {
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 10px yellowgreen;
  }

  .blue {
    background-color: blue;
    left: 10px;
    box-shadow: 0 0 10px 10px yellowgreen;
  }

  p {
    font-size: 30px;
  }

  button {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    font-size: 18px;
    background-color: black;
    color: red;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  button:hover {
    background-color: #333;
    color: white;
  }

  .game-over {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
  }
</style>

<h1>Memory</h1>

<aside class:blue={blueTurn}>
  <p>{blueTurn ? 'Blue' : 'Red'}: {blueTurn ? blueScore : redScore}</p>
</aside>

<main>
  {#each cards as card}
    <div class="card" class:flipped={card.flipped} on:click={() => flipCard(card)}>
      <img src={card.image} alt="" class="front" />
      <img src="https://licensing.biz/wp-content/uploads/2024/02/Topps-Chrome-UFC-trading-card-game-Full-Image-747x1024.png" alt="" class="back">
    </div>
  {/each}
</main>

<button on:click={resetGame}>Reset Game</button>

{#if gameOver}
  <div class="game-over">
    <p>Game Over!</p>
    <p>Winner: {winner}</p>
  </div>
{/if}
