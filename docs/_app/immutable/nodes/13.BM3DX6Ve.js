import{s as f,n as l,r as d}from"../chunks/scheduler.DT4m0kE1.js";import{S as _,i as v,e as u,c as p,a as g,d as m,l as i,g as y,h as $,q as h,v as c,y as b}from"../chunks/index.No75viyK.js";import{g as S}from"../chunks/entry.C2UGnaxP.js";function k(r){let t,e,a,o;return{c(){t=u("form"),e=u("input"),this.h()},l(s){t=p(s,"FORM",{});var n=g(t);e=p(n,"INPUT",{type:!0,placeholder:!0,class:!0}),n.forEach(m),this.h()},h(){i(e,"type","text"),i(e,"placeholder","Sök upp en pokemon"),i(e,"class","svelte-1u7t4w9")},m(s,n){y(s,t,n),$(t,e),h(e,r[0]),a||(o=[c(e,"input",r[1]),c(t,"submit",b(r[2]))],a=!0)},p(s,[n]){n&1&&e.value!==s[0]&&h(e,s[0])},i:l,o:l,d(s){s&&m(t),a=!1,d(o)}}}function q(r,t,e){let a="";function o(){a=this.value,e(0,a)}return[a,o,()=>S(`/search/${a.toLowerCase()}`)]}class E extends _{constructor(t){super(),v(this,t,q,k,f,{})}}export{E as component};
