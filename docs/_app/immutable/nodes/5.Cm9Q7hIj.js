import{s as ce,b as _e,n as ee,r as de,c as ve,o as me,d as ge}from"../chunks/scheduler.NrZV1iTz.js";import{S as be,i as ye,e as f,s as y,c as h,a as H,l as S,f as C,d as A,o as u,n as c,g as pe,h as t,p as T,u as oe,q as U,r as Ce,v as we,t as Le,b as ke,w as Ee}from"../chunks/index.BNALcpTY.js";import{e as ie}from"../chunks/each.D6YF6ztN.js";import{u as ue}from"../chunks/user.CIJRMkxj.js";function fe(a,r,i){const d=a.slice();return d[14]=r[i],d}function he(a){let r,i=a[14].namn+"",d;return{c(){r=f("option"),d=Le(i),this.h()},l(v){r=h(v,"OPTION",{});var o=H(r);d=ke(o,i),o.forEach(A),this.h()},h(){r.__value=a[14].value,T(r,r.__value)},m(v,o){pe(v,r,o),t(r,d)},p:ee,d(v){v&&A(r)}}}function Ne(a){let r,i,d="Register",v,o,e,_,B,b,R="Namn:",V,w,j,k,D="Mail:",q,g,J,E,te="Lösenord:",G,N,z,x,le="Födelsedatum:",K,I,Q,P,ne="Färg:",W,L,X,F,Y,M,ae='Har du redan ett konto? <a href="/login" style="color: lightblue;">Logga in</a>.',Z,re,O=ie(a[5]),p=[];for(let l=0;l<O.length;l+=1)p[l]=he(fe(a,O,l));return{c(){r=f("main"),i=f("h1"),i.textContent=d,v=y(),o=f("div"),e=f("form"),_=f("div"),B=y(),b=f("label"),b.textContent=R,V=y(),w=f("input"),j=y(),k=f("label"),k.textContent=D,q=y(),g=f("input"),J=y(),E=f("label"),E.textContent=te,G=y(),N=f("input"),z=y(),x=f("label"),x.textContent=le,K=y(),I=f("input"),Q=y(),P=f("label"),P.textContent=ne,W=y(),L=f("select");for(let l=0;l<p.length;l+=1)p[l].c();X=y(),F=f("input"),Y=y(),M=f("p"),M.innerHTML=ae,this.h()},l(l){r=h(l,"MAIN",{class:!0});var m=H(r);i=h(m,"H1",{"data-svelte-h":!0}),S(i)!=="svelte-issj3d"&&(i.textContent=d),v=C(m),o=h(m,"DIV",{class:!0});var s=H(o);e=h(s,"FORM",{});var n=H(e);_=h(n,"DIV",{style:!0}),H(_).forEach(A),B=C(n),b=h(n,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),S(b)!=="svelte-b1h0v6"&&(b.textContent=R),V=C(n),w=h(n,"INPUT",{type:!0,id:!0,style:!0}),j=C(n),k=h(n,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),S(k)!=="svelte-6oby8f"&&(k.textContent=D),q=C(n),g=h(n,"INPUT",{type:!0,id:!0,style:!0}),J=C(n),E=h(n,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),S(E)!=="svelte-1i1nikh"&&(E.textContent=te),G=C(n),N=h(n,"INPUT",{type:!0,id:!0,style:!0}),z=C(n),x=h(n,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),S(x)!=="svelte-1k96ww8"&&(x.textContent=le),K=C(n),I=h(n,"INPUT",{type:!0,id:!0,style:!0}),Q=C(n),P=h(n,"LABEL",{for:!0,style:!0,"data-svelte-h":!0}),S(P)!=="svelte-o1j9qu"&&(P.textContent=ne),W=C(n),L=h(n,"SELECT",{id:!0,style:!0});var se=H(L);for(let $=0;$<p.length;$+=1)p[$].l(se);se.forEach(A),X=C(n),F=h(n,"INPUT",{type:!0,style:!0}),n.forEach(A),Y=C(s),M=h(s,"P",{style:!0,"data-svelte-h":!0}),S(M)!=="svelte-907yso"&&(M.innerHTML=ae),s.forEach(A),m.forEach(A),this.h()},h(){u(_,"width","100px"),u(_,"height","100px"),u(_,"border-radius","50%"),u(_,"overflow","hidden"),u(_,"background-color",a[4]),c(b,"for","name"),u(b,"color","white"),c(w,"type","text"),c(w,"id","name"),u(w,"color","black"),c(k,"for","mail"),u(k,"color","white"),c(g,"type","email"),c(g,"id","mail"),u(g,"color","black"),c(E,"for","pass"),u(E,"color","white"),c(N,"type","password"),c(N,"id","pass"),u(N,"color","black"),c(x,"for","age"),u(x,"color","white"),c(I,"type","date"),c(I,"id","age"),u(I,"color","black"),c(P,"for","Favoritfärg"),u(P,"color","white"),c(L,"id","Favoritfärg"),u(L,"color","black"),a[4]===void 0&&_e(()=>a[11].call(L)),c(F,"type","submit"),F.value="Registrera",u(F,"margin-top","10px"),u(M,"color","white"),c(o,"class","container svelte-156wvvx"),c(r,"class","svelte-156wvvx")},m(l,m){pe(l,r,m),t(r,i),t(r,v),t(r,o),t(o,e),t(e,_),t(e,B),t(e,b),t(e,V),t(e,w),T(w,a[0]),t(e,j),t(e,k),t(e,q),t(e,g),T(g,a[1]),t(e,J),t(e,E),t(e,G),t(e,N),T(N,a[2]),t(e,z),t(e,x),t(e,K),t(e,I),T(I,a[3]),t(e,Q),t(e,P),t(e,W),t(e,L);for(let s=0;s<p.length;s+=1)p[s]&&p[s].m(L,null);oe(L,a[4],!0),t(e,X),t(e,F),t(o,Y),t(o,M),Z||(re=[U(w,"input",a[7]),U(g,"input",a[8]),U(N,"input",a[9]),U(I,"input",a[10]),U(L,"change",a[11]),U(e,"submit",Ce(a[6]))],Z=!0)},p(l,[m]){if(m&16&&u(_,"background-color",l[4]),m&1&&w.value!==l[0]&&T(w,l[0]),m&2&&g.value!==l[1]&&T(g,l[1]),m&4&&N.value!==l[2]&&T(N,l[2]),m&8&&T(I,l[3]),m&32){O=ie(l[5]);let s;for(s=0;s<O.length;s+=1){const n=fe(l,O,s);p[s]?p[s].p(n,m):(p[s]=he(n),p[s].c(),p[s].m(L,null))}for(;s<p.length;s+=1)p[s].d(1);p.length=O.length}m&48&&oe(L,l[4])},i:ee,o:ee,d(l){l&&A(r),we(p,l),Z=!1,de(re)}}}function Ie(a,r,i){let d;ve(a,ue,g=>i(13,d=g));let v=[],o="",e="",_="",B="",b="grey",R=[{namn:"Blå",value:"blue"},{namn:"Röd",value:"red"},{namn:"Grå",value:"grey"}];me(()=>{d.length>2&&(v=JSON.parse(d))});function V(){let g={username:o,email:e,password:_,color:b};if(v.filter(E=>E.username===o).length>0){alert("Användarnamnet finns redan! Vänligen välj ett annat.");return}v=[...v,g],ge(ue,d=JSON.stringify(v),d),alert(`Välkommen ${o}! 
E-post: ${e} 
Lösenord: ${_}`)}function w(){o=this.value,i(0,o)}function j(){e=this.value,i(1,e)}function k(){_=this.value,i(2,_)}function D(){B=this.value,i(3,B)}function q(){b=Ee(this),i(4,b),i(5,R)}return[o,e,_,B,b,R,V,w,j,k,D,q]}class Be extends be{constructor(r){super(),ye(this,r,Ie,Ne,ce,{})}}export{Be as component};
