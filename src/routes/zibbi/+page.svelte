<script>
    let images = [
        'https://hips.hearstapps.com/hmg-prod/images/pinkpantheress5-66ace830a49a6.jpg?crop=1xw:0.5xh;center,top&resize=1200:*',
        'https://assets.teenvogue.com/photos/60c8db3553c4c66702240f2c/1:1/w_2761,h_2761,c_limit/1200014422',
        'https://media.npr.org/assets/img/2023/09/01/minaj_custom-b03a0992f23b6fe5d3d5add53c8920cd1b7e0c42.jpg?s=1100&c=50&f=jpeg'
    ];
    let currentIndex = 1;

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
    }
</script>

<style>
    body {
        background-color: #fef8f3;
        color: #333;
        margin: 0;
        padding: 0;
    }
    .title {
        text-align: center;
        font-size: 70px;
        font-weight: bold;
        color: #ff66b2;
        padding: 50px;
    }
    .flower-underline {
        width: 100%;
        height: 150px;
        background: url("src\routes\zibbi\blommor.jpg");
        padding: inherit;
        margin-top: -20px;
        margin-bottom: 40px;
        text-align: center;
    }
    .cart-container {
        border-radius: 8px;
        border: 3px solid #ff66b2;
        position: fixed;
        top: 20px;
        right: 20px;
        width: 100px; 
        height: 50px; 
        display: inline-block;
    }
    .cart {
        width: 50%;
        height: 100%;
    }
    .count {
        text-align: center;
        margin-top: -32px;
        margin-left: 45px;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
    .price {
        text-align: center;
        margin-top: -32px;
        margin-left: 45px;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }
    .gallery {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0;
        position: relative;
    }
    .gallery img {
        width: 50vw;
        max-width: 300px;
        opacity: 0.8;
        border-radius: 8px;
        border: 3px solid #ff66b2;
        transition: opacity 0.3s, transform 0.3s;
    }
    .gallery img.active {
        opacity: 1;
        transform: scale(1.4);
    }
    .arrow-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .arrow {
        font-size: 80px;
        color: #ff66b2;
        cursor: pointer;
        transition: color 0.3s;
        padding: 0 15px;
    }
    .arrow:hover {
        color: #ff3385;
    }
    .products {
        text-align: center;
        margin-top: 80px;
        font-size: 50px;
        font-weight: bold;
        color: #ff66b2;
    }
    .product-images {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 30px;
    }
    .product-images img {
        width: 180px;
        height: 180px;
        border-radius: 8px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
        border: 3px solid #ff66b2;
    }
    .product-images img:hover {
        transform: scale(1.1);
    }
    .footer {
        background-color: #ff66b2;
        color: white;
        padding: 20px 0;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .footer div {
        width: 150px;
    }
    .footer a {
        color: white;
        text-decoration: none;
        font-size: 16px;
        display: block;
        margin: 10px 0;
        transition: color 0.3s;
    }
    .footer a:hover {
        color: #ffe0f0;
    }

    /* mobil */
    @media (max-width: 768px) {
        .title {
            font-size: 50px;
            padding: 30px;
        }
        .flower-underline {
            height: 100px;
            margin-top: -10px;
            margin-bottom: 20px;
        }
        .cart-container {
            width: 80px;
            height: 40px;
            top: 10px;
            right: 10px;
        }
        .count {
            font-size: 20px;
            margin-left: 35px;
        }
        .gallery img {
            width: 18vw;
            max-width: 200px;
        }
        .arrow {
            font-size: 50px;
        }
        .products {
            font-size: 25px;
        }
        .product-images img {
            width: 80px;
            height: 80px;
        }
        .footer {
            flex-direction: column;
            padding: 10px 0;
        }
        .footer div {
            width: auto;
        }
    }
    
</style>

<div class="title">❤️ZIBBI❤️</div>
<img src="/blommor.jpg" alt="" class="flower-underline">
<div class="cart-container">
    <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" class="cart" alt="Shopping Cart">
    <div class="count">0st</div>
</div>

<div class="gallery">
    <div class="arrow-container">
        <span class="arrow" on:click={prevImage}>⬅</span>
        {#each images as img, i}
            <img src={img} class={i === currentIndex ? 'active' : ''} alt="">
        {/each}
        <span class="arrow" on:click={nextImage}>➡</span>
    </div>
</div>

<div class="products">⭐våra produkter⭐</div>

<div class="product-images">
    <div>
        <img src="https://purepng.com/public/uploads/large/purepng.com-lipstickclothinglipstickfashion-objects-girl-makeup-stick-sexy-beauty-accessory-lipstick-lip-lips-cosmetics-631522935839vcyto.png" alt="Product 1">
        <div class="price">99kr</div>

    </div>
    <div>  
          <img src="https://ec.nice-cdn.com/upload/image/product/large/default/couleur-caramel-infaellbar-puderborste-nr-03-1-st-1463487-sv.png" alt="Product 2">
          <div class="price">300krst</div>

    </div>
    <div>  
          <img src="https://www.dermosil.se/_next/image/?url=https%3A%2F%2Flitium.dermosil.se%2F_images%2Fc8c427a7-347f-4468-9d82-52714a703102%2Fmakeup-midnight-haze-eye-shadow-palette-7188-1.png&w=1920&q=100" alt="Product 3">
          <div class="price">255kr</div>

    </div>
    <div>  
          <img src="https://png.pngtree.com/png-vector/20250120/ourmid/pngtree-pink-makeup-remover-bottle-with-gray-cap-labeled-beauty-products-isolated-png-image_15284542.png" alt="Product 4">
          <div class="price">100kr</div>

    </div>
</div>

<div class="footer">
    <div>
        <a >About Us</a>
        <a >FAQ</a>
        <a >Contact</a>
    </div>
</div>
