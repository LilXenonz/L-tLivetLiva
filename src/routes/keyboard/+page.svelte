<script>
    import { onDestroy, onMount } from "svelte"; 
  
    let currentLetter = "";
    let message = "Tryck på Start för att börja spelet!";
    let score = 0;
    let timeLeft = 60;
    let gameOver = true;
    let timerInterval;
  
    function getRandomLetter() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return letters[Math.floor(Math.random() * letters.length)];
    }
  
    function startNewRound() {
      if (timeLeft > 0) {
        currentLetter = getRandomLetter();
        message = `Tryck på: ${currentLetter}`;
      }
    }
  
    function handleKeyPress(event) {
      if (gameOver) return; 
      if (event.key.toUpperCase() === currentLetter) {
        score += 1; 
        startNewRound(); 
      }
    }
  
    function startGame() {
      score = 0;
      timeLeft = 60;
      gameOver = false;
      message = "Tryck på rätt key så snabbt som möjligt!";
      startNewRound();
      startTimer();
    }
  
    function startTimer() {
      timerInterval = setInterval(() => {
        timeLeft -= 1;
        if (timeLeft <= 0) {
          clearInterval(timerInterval); 
          gameOver = true;
          message = "Tiden är slut! ta det 💀!";
        }
      }, 1000);
    }
  
    onMount(()=>{
    window.addEventListener("keydown", handleKeyPress);

 onDestroy(() => {
      window.removeEventListener("keydown", handleKeyPress);
      clearInterval(timerInterval);
    });
    })
  
   
  </script>
  
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      margin: 0;
      flex-direction: column;
    }
    .container {
      text-align: center;
      position: relative;
    }
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    p {
      font-size: 24px;
      font-weight: bold;
    }
    .letter {
      font-size: 150px;
      font-weight: bold;
      color: gold;
      margin: 20px 0;
    }
    .button {
      padding: 15px 30px;
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      color: #282c34;
    }
    .end-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .timer {
      position: absolute;
      bottom: 20px;
      left: 200px;
      transform: translateX(-50%);
      font-size: 24px;
      font-weight: bold;
    }
    .score {
      position: absolute;
      bottom: 20px;
      right: 200px;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
  
  <div class="container">
    {#if !gameOver}
      <h1>{message}</h1>
      <p class="letter">{currentLetter}</p>
      <p class="timer">Tid kvar: {timeLeft} sekunder</p>
      <p class="score">Poäng: {score}</p>
    {:else}
      <div class="end-screen">
        <h1>Spelet är över!</h1>
        <p>Din slutliga poäng: {score}</p>
        <button class="button" on:click={startGame}>Starta om</button>
      </div>
    {/if}
    {#if gameOver}
      <button class="button" on:click={startGame}>Starta Spelet</button>
    {/if}
  </div>