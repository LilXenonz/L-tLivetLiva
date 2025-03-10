<style>
  main{
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 100px;
  }
  .bigblock{
    background-color: red;
    height: 100px;
    grid-column: span 3; 
  }
  .mediumblock{
    background-color: red;
    height: 200px;
  }
  .smallblock{
    background-color: red;
    height: 100px;
  }
  .container{
    gap: 10px;
    display: grid;
    width: 600px;
    grid-template-columns: repeat(3,1fr);
  }

</style>

<main>
    <div class="container">
        <div class="bigblock">
            <p></p>
        </div>
        <div class="mediumblock">
            <p>0</p>
        </div>
        <div class="mediumblock">
            <p>01</p>
        </div>
        <div class="mediumblock">           
             <p>012</p>
        </div>
        <div class="smallblock">
            <p>0123</p>
        </div>
        <div class="smallblock">
            <p>01234</p>
        </div>
    </div>
</main>