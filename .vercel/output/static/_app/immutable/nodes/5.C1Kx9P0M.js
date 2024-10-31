import{s as ae,n as Q,r as ne}from"../chunks/scheduler.DWBu5tsU.js";import{S as oe,i as ie,e as p,s as P,c as m,a as T,k as A,f as N,d as _,l as c,g as F,h as l,q as Z,r as z,m as ce,t as M,b as B,j as J}from"../chunks/index.frEX2zQP.js";import{e as $}from"../chunks/each.D6YF6ztN.js";function ee(n,e,t){const s=n.slice();return s[11]=e[t],s}function te(n){let e,t,s=n[11].reference+"",o,x,r,v=n[11].text+"",f,h;return{c(){e=p("li"),t=p("strong"),o=M(s),x=M(":"),r=P(),f=M(v),h=P(),this.h()},l(k){e=m(k,"LI",{class:!0});var g=T(e);t=m(g,"STRONG",{});var u=T(t);o=B(u,s),x=B(u,":"),u.forEach(_),r=N(g),f=B(g,v),h=N(g),g.forEach(_),this.h()},h(){c(e,"class","mb-2")},m(k,g){F(k,e,g),l(e,t),l(t,o),l(t,x),l(e,r),l(e,f),l(e,h)},p:Q,d(k){k&&_(e)}}}function se(n){let e,t;return{c(){e=p("p"),t=M(n[2]),this.h()},l(s){e=m(s,"P",{class:!0});var o=T(e);t=B(o,n[2]),o.forEach(_),this.h()},h(){c(e,"class","text-red-600 text-lg mb-2 fade-in svelte-1efavih")},m(s,o){F(s,e,o),l(e,t)},p(s,o){o&4&&J(t,s[2])},d(s){s&&_(e)}}}function le(n){let e,t="Fetching scripture...";return{c(){e=p("p"),e.textContent=t,this.h()},l(s){e=m(s,"P",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-ltna2k"&&(e.textContent=t),this.h()},h(){c(e,"class","text-gray-700 text-lg mb-2 fade-in svelte-1efavih")},m(s,o){F(s,e,o)},d(s){s&&_(e)}}}function re(n){let e,t,s=n[1].reference+"",o,x,r,v,f,h=n[1].text+"",k,g,u,S,D=n[1].translation_name+"",I;return{c(){e=p("article"),t=p("h3"),o=M(s),x=P(),r=p("div"),v=p("div"),f=p("strong"),k=M(h),g=P(),u=p("p"),S=M("Translation: "),I=M(D),this.h()},l(b){e=m(b,"ARTICLE",{class:!0});var L=T(e);t=m(L,"H3",{class:!0});var U=T(t);o=B(U,s),U.forEach(_),x=N(L),r=m(L,"DIV",{class:!0});var V=T(r);v=m(V,"DIV",{class:!0});var H=T(v);f=m(H,"STRONG",{class:!0});var R=T(f);k=B(R,h),R.forEach(_),g=N(H),u=m(H,"P",{class:!0});var O=T(u);S=B(O,"Translation: "),I=B(O,D),O.forEach(_),H.forEach(_),V.forEach(_),L.forEach(_),this.h()},h(){c(t,"class","text-lg font-bold text-white"),c(f,"class","font-medium text-white"),c(u,"class","mt-1 text-xs font-medium text-gray-300 svelte-1efavih"),c(v,"class","block rounded-lg border border-gray-800 p-4 hover:border-brandSecondary"),c(r,"class","mt-4"),c(e,"class","rounded-xl border border-gray-800 bg-brand p-4 fade-in mb-6 svelte-1efavih")},m(b,L){F(b,e,L),l(e,t),l(t,o),l(e,x),l(e,r),l(r,v),l(v,f),l(f,k),l(v,g),l(v,u),l(u,S),l(u,I)},p(b,L){L&2&&s!==(s=b[1].reference+"")&&J(o,s),L&2&&h!==(h=b[1].text+"")&&J(k,h),L&2&&D!==(D=b[1].translation_name+"")&&J(I,D)},d(b){b&&_(e)}}}function fe(n){let e,t,s,o="Search for...",x,r,v,f,h,k='<span class="sr-only">Search</span> <i class="fa-solid fa-magnifying-glass text-xl"></i>',g,u,S='<h2 class="text-xl text-brandSecondary font-bold mb-3 svelte-1efavih">Instructions and Tips</h2> <p class="text-gray-300 mb-2 svelte-1efavih">Enter a scripture reference in the format: <strong>Book Chapter:Verse</strong> (e.g., <em>John 3:16</em>).</p> <p class="text-gray-300 svelte-1efavih">You can also search for popular verses directly from the list below.</p>',D,I,b,L="Popular Verses",U,V,H,R,O,K,W,j=$(n[6]),y=[];for(let a=0;a<j.length;a+=1)y[a]=te(ee(n,j,a));let E=n[3]&&se(n),C=n[4]&&le(),w=n[5]&&re(n);return{c(){e=p("div"),t=p("section"),s=p("label"),s.textContent=o,x=P(),r=p("input"),v=P(),f=p("span"),h=p("button"),h.innerHTML=k,g=P(),u=p("section"),u.innerHTML=S,D=P(),I=p("section"),b=p("h2"),b.textContent=L,U=P(),V=p("ul");for(let a=0;a<y.length;a+=1)y[a].c();H=P(),E&&E.c(),R=P(),C&&C.c(),O=P(),w&&w.c(),this.h()},l(a){e=m(a,"DIV",{class:!0});var d=T(e);t=m(d,"SECTION",{class:!0});var i=T(t);s=m(i,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),A(s)!=="svelte-tyxwk6"&&(s.textContent=o),x=N(i),r=m(i,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),v=N(i),f=m(i,"SPAN",{class:!0});var q=T(f);h=m(q,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),A(h)!=="svelte-76bvkr"&&(h.innerHTML=k),q.forEach(_),i.forEach(_),g=N(d),u=m(d,"SECTION",{class:!0,"data-svelte-h":!0}),A(u)!=="svelte-6hmb49"&&(u.innerHTML=S),D=N(d),I=m(d,"SECTION",{class:!0});var G=T(I);b=m(G,"H2",{class:!0,"data-svelte-h":!0}),A(b)!=="svelte-owv2jt"&&(b.textContent=L),U=N(G),V=m(G,"UL",{class:!0});var X=T(V);for(let Y=0;Y<y.length;Y+=1)y[Y].l(X);X.forEach(_),G.forEach(_),H=N(d),E&&E.l(d),R=N(d),C&&C.l(d),O=N(d),w&&w.l(d),d.forEach(_),this.h()},h(){c(s,"for","Search"),c(s,"class","sr-only"),c(r,"type","text"),c(r,"id","Search"),c(r,"placeholder","Book, chapter, verse (e.g., John 3:16)"),c(r,"class","w-full rounded-md border border-gray-300 py-3 px-4 shadow-sm text-sm dark:border-gray-800 dark:bg-brand dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"),c(h,"type","button"),c(h,"class","text-gray-700 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"),c(f,"class","absolute inset-y-0 right-0 grid w-10 place-content-center"),c(t,"class","relative w-full mb-4"),c(u,"class","mb-6"),c(b,"class","text-xl text-brandSecondary font-bold mb-3 svelte-1efavih"),c(V,"class","list-disc list-inside text-gray-300"),c(I,"class","mb-6"),c(e,"class","container mx-auto p-4 max-w-screen-lg svelte-1efavih")},m(a,d){F(a,e,d),l(e,t),l(t,s),l(t,x),l(t,r),Z(r,n[0]),l(t,v),l(t,f),l(f,h),l(e,g),l(e,u),l(e,D),l(e,I),l(I,b),l(I,U),l(I,V);for(let i=0;i<y.length;i+=1)y[i]&&y[i].m(V,null);l(e,H),E&&E.m(e,null),l(e,R),C&&C.m(e,null),l(e,O),w&&w.m(e,null),K||(W=[z(r,"input",n[9]),z(r,"keydown",n[8]),z(h,"click",n[7])],K=!0)},p(a,[d]){if(d&1&&r.value!==a[0]&&Z(r,a[0]),d&64){j=$(a[6]);let i;for(i=0;i<j.length;i+=1){const q=ee(a,j,i);y[i]?y[i].p(q,d):(y[i]=te(q),y[i].c(),y[i].m(V,null))}for(;i<y.length;i+=1)y[i].d(1);y.length=j.length}a[3]?E?E.p(a,d):(E=se(a),E.c(),E.m(e,R)):E&&(E.d(1),E=null),a[4]?C||(C=le(),C.c(),C.m(e,O)):C&&(C.d(1),C=null),a[5]?w?w.p(a,d):(w=re(a),w.c(),w.m(e,null)):w&&(w.d(1),w=null)},i:Q,o:Q,d(a){a&&_(e),ce(y,a),E&&E.d(),C&&C.d(),w&&w.d(),K=!1,ne(W)}}}function he(n,e,t){let s="",o=null,x="",r=!1,v=!1,f=!1;const h=[{reference:"John 3:16",text:"For God so loved the world..."},{reference:"Philippians 4:13",text:"I can do all things through Christ..."},{reference:"Psalm 23:1",text:"The Lord is my shepherd; I shall not want."}];async function k(){if(!s.trim()){t(2,x="Please enter a valid scripture reference."),t(3,r=!0);return}t(2,x=""),t(1,o=null),t(3,r=!1),t(4,v=!0),t(5,f=!1);try{const S=await fetch(`https://bible-api.com/${encodeURIComponent(s)}`);if(!S.ok)throw new Error("Error fetching the verse.");t(1,o=await S.json()),t(5,f=!0),t(0,s="")}catch(S){t(2,x="Failed to fetch the verse. Please check your input."),t(3,r=!0),console.error(S)}finally{t(4,v=!1)}}function g(S){S.key==="Enter"&&k()}function u(){s=this.value,t(0,s)}return[s,o,x,r,v,f,h,k,g,u]}class me extends oe{constructor(e){super(),ie(this,e,he,fe,ae,{})}}export{me as component};