var C=Object.defineProperty;var B=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>B(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,v as w,q as I,w as S,x as j,d as b,y as L,z as q,p as N,A as D,B as H,C as P}from"./scheduler.DT4m0kE1.js";let p=!1;function T(){p=!0}function z(){p=!1}function M(e,t,n,i){for(;e<t;){const l=e+(t-e>>1);n(l)<=i?e=l+1:t=l}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let s=0;s<t.length;s++){const o=t[s];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let l=0;for(let r=0;r<t.length;r++){const s=t[r].claim_order,o=(l>0&&t[n[l]].claim_order<=s?l+1:M(1,l,d=>t[n[d]].claim_order,s))-1;i[r]=n[o]+1;const f=o+1;n[f]=r,l=Math.max(f,l)}const c=[],a=[];let u=t.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(c.push(t[r-1]);u>=r;u--)a.push(t[u]);u--}for(;u>=0;u--)a.push(t[u]);c.reverse(),a.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<a.length;r++){for(;s<c.length&&a[r].claim_order>=c[s].claim_order;)s++;const o=s<c.length?c[s]:null;e.insertBefore(a[r],o)}}function F(e,t){if(p){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function te(e,t,n){p&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function G(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function R(e){return document.createElement(e)}function U(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function ie(){return x(" ")}function re(){return x("")}function le(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e){return function(t){return t.preventDefault(),e.call(this,t)}}function ae(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,l=!1){W(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l||(e.claim_info.last_index=a),u}}for(let a=e.claim_info.last_index-1;a>=0;a--){const u=e[a];if(t(u)){const r=n(u);return r===void 0?e.splice(a,1):e[a]=r,l?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,u}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function E(e,t,n,i){return A(e,l=>l.nodeName===t,l=>{const c=[];for(let a=0;a<l.attributes.length;a++){const u=l.attributes[a];n[u.name]||c.push(u.name)}c.forEach(a=>l.removeAttribute(a))},()=>i(t))}function ce(e,t,n){return E(e,t,n,R)}function fe(e,t,n){return E(e,t,n,U)}function J(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function oe(e){return J(e," ")}function _e(e,t){t=""+t,e.data!==t&&(e.data=t)}function de(e,t){e.value=t??""}function me(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function he(e,t,n){for(let i=0;i<e.options.length;i+=1){const l=e.options[i];if(l.__value===t){l.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function pe(e){const t=e.querySelector(":checked");return t&&t.__value}function $e(e,t,n){e.classList.toggle(t,!!n)}function ye(e,t){return new e(t)}const m=new Set;let _;function xe(){_={r:0,c:[],p:_}}function ge(){_.r||h(_.c),_=_.p}function K(e,t){e&&e.i&&(m.delete(e),e.i(t))}function ve(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),_.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function we(e){e&&e.c()}function be(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),b(()=>{const c=e.$$.on_mount.map(D).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),l.forEach(b)}function X(e,t){const n=e.$$;n.fragment!==null&&(L(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(H.push(e),P(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,l,c,a=null,u=[-1]){const r=q;N(e);const s=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:l,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:w(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};a&&a(s.root);let o=!1;if(s.ctx=n?n(e,t.props||{},(f,d,...g)=>{const v=g.length?g[0]:d;return s.ctx&&l(s.ctx[f],s.ctx[f]=v)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](v),o&&Y(e,f)),d}):[],s.update(),o=!0,h(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){T();const f=V(t.target);s.fragment&&s.fragment.l(f),f.forEach(G)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),z(),I()}N(r)}class Se{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){X(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);export{$e as A,ge as B,xe as C,ye as D,we as E,be as F,Q as G,X as H,Se as S,V as a,J as b,ce as c,G as d,R as e,oe as f,te as g,F as h,Ne as i,_e as j,K as k,ae as l,ve as m,U as n,ue as o,fe as p,de as q,me as r,ie as s,x as t,he as u,le as v,ne as w,pe as x,se as y,re as z};
