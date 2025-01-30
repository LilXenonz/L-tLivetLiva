<script>
	import '../app.postcss';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<slot />

<style>
    :global(body), :global(html) {
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        font-family: 'Arial', sans-serif;
        background-color: #1a1a1a; 
        color: #ffffff; 
    }


    :global(nav) {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: black;
        padding: 5px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center; 
        align-items: center;
    }

    :global(nav a) {
        color: #e5b800; 
        font-family: 'Arial', sans-serif;
        font-size: 18px;
        font-weight: 900; 
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 20px;
        margin: 0 15px;
        position: relative;
        transition: all 0.3s ease;
    }

    :global(nav a::after) {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, #e53935, #e5b800); 
        transition: width 0.3s ease;
    }

    :global(nav a:hover::after) {
        width: 100%; 
    }

    :global(nav a:hover) {
        color: #ffffff; 
        transform: scale(1.1); 
    }

    /* Theme for divs */
    :global(div) {
        background-color: #333333;
        border: 3px solid #e5b800;
        border-radius: 8px;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
    }

    /* Theme for buttons */
    :global(button) {
        background-color: #e53935;
        color: white;
        border: 2px solid #d32f2f;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
    }

    :global(button:hover) {
        background-color: #d32f2f;
        transform: scale(1.1);
    }

    :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
        color: #e5b800;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    :global(aside) {
        background-color: #4e4e4e;
        color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(31, 31, 31, 0.5);
    }

    :global(.container) {
        border: 5px solid #e5b800;
        background-color: #2c2c2c;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
    }

    :global(p) {
      font-size: 18px;
      line-height: 1.6;
      color: #ffffff;
      font-family: 'Arial', sans-serif;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
  :global(article), :global(section) {
      background-color: #333333;
      border: 3px solid #e5b800;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
      padding: 20px;
      margin: 10px 0;
  }

</style>

<nav>
	<a href="/">Main</a>
	<a href="/memory">Memory</a>
	<a href="/photoapp">PhotoApp</a>
	<a href="/login">Login</a>
	<a href="/register">Register</a>
	<a href="/shoppinglista">Shopping Lista</a>
    <a href="/chat">Chat</a>
	<a href="/search">Search</a>
    <a href="/dålighemsida">Dålig UI</a>


</nav>
