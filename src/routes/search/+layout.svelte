<script>
    import { page } from '$app/stores';
  </script>
  
  <div class="backdrop"></div>
  <main>
    <slot></slot>
  </main>
  
  <style>
    main {
      width: 80vw;
      height: 100vh;
      background: red;
      border: 10px solid gold;
      margin: 5vh auto;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .backdrop {
      width: 100vw;
      height: 100vh;
      background: url('https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960');
      background-size: cover;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      filter: blur(5px);
      border: 30px solid black;
    }
  </style>