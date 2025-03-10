<script>
	import '../app.postcss';
	import { base } from '$app/paths'

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; 
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
	@font-face {
    font-family: 'Geraldine';
    src: url("C:\teknik\Hemmsidor\my-website\src\routes\zibbi\Reilova.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
}

:global(body), :global(html) {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    font-family: 'Geraldine', sans-serif;
}

</style>


