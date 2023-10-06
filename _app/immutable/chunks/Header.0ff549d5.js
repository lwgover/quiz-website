import{s as U,n as V}from"./scheduler.1f863384.js";import{S as O,i as Y,g as l,z as P,h as a,f as o,k as e,y as s,s as w,j as _,c as L,A as Q,l as G,a as N,m as R,n as X,o as Z}from"./index.6022397f.js";function $(u){let t,n,i,c,d,f,p,h,m,q,g;return document.title=t=u[0],{c(){n=l("meta"),i=l("meta"),c=l("meta"),d=l("meta"),f=l("meta"),p=l("meta"),h=l("meta"),m=l("meta"),q=l("meta"),g=l("meta"),this.h()},l(v){const r=P("svelte-36bwad",document.head);n=a(r,"META",{name:!0,property:!0,content:!0}),i=a(r,"META",{name:!0,property:!0,content:!0}),c=a(r,"META",{name:!0,content:!0}),d=a(r,"META",{name:!0,content:!0}),f=a(r,"META",{name:!0,content:!0}),p=a(r,"META",{name:!0,content:!0}),h=a(r,"META",{name:!0,content:!0}),m=a(r,"META",{name:!0,content:!0}),q=a(r,"META",{name:!0,content:!0}),g=a(r,"META",{name:!0,content:!0}),r.forEach(o),this.h()},h(){e(n,"name","title"),e(n,"property","og:title"),e(n,"content",u[0]),e(i,"name","description"),e(i,"property","og:description"),e(i,"content",u[1]),e(c,"name","keywords"),e(c,"content",u[2]),e(d,"name","topic"),e(d,"content",u[2]),e(f,"name","language"),e(f,"content","EN"),e(p,"name","robots"),e(p,"content","index, follow"),e(h,"name","abstract"),e(h,"content",u[1]),e(m,"name","summary"),e(m,"content",u[1]),e(q,"name","author"),e(q,"content","Lucas Gover"),e(g,"name","url"),e(g,"content","http://www.lucasgover.com")},m(v,r){s(document.head,n),s(document.head,i),s(document.head,c),s(document.head,d),s(document.head,f),s(document.head,p),s(document.head,h),s(document.head,m),s(document.head,q),s(document.head,g)},p(v,[r]){r&1&&t!==(t=v[0])&&(document.title=t),r&1&&e(n,"content",v[0]),r&2&&e(i,"content",v[1]),r&4&&e(c,"content",v[2]),r&4&&e(d,"content",v[2]),r&2&&e(h,"content",v[1]),r&2&&e(m,"content",v[1])},i:V,o:V,d(v){o(n),o(i),o(c),o(d),o(f),o(p),o(h),o(m),o(q),o(g)}}}function ee(u,t,n){let{title:i="Quiz Website"}=t,{description:c="Quiz Website made by Lucas Gover"}=t,{keywords:d="Quiz, Website, Front-End Development, Backend-Development, Full-Stack Development, SQL, MySQL, SQLite3"}=t;return u.$$set=f=>{"title"in f&&n(0,i=f.title),"description"in f&&n(1,c=f.description),"keywords"in f&&n(2,d=f.keywords)},[i,c,d]}class ce extends O{constructor(t){super(),Y(this,t,ee,$,U,{title:0,description:1,keywords:2})}}function te(u){let t,n,i,c,d,f,p,h,m,q,g,v,r,A,D='<div class="quiz-picture-top-bar-button svelte-79durp"></div> <div class="quiz-picture-top-bar-button svelte-79durp"></div> <div class="quiz-picture-top-bar-button svelte-79durp"></div>',C,y,k,I,z,M,E,B='<li class="quiz-picture-question svelte-79durp"></li> <li class="quiz-picture-question svelte-79durp"></li> <li class="quiz-picture-question svelte-79durp"></li> <li class="quiz-picture-question svelte-79durp"></li>',S,H,x='<div class="promo-subtitle svelte-79durp">Welcome to</div> <div class="promo-title svelte-79durp">Quiz Quest!</div> <div class="promo-text svelte-79durp">Take Quizzes</div> <div class="promo-text svelte-79durp" style="transform: translate( 7vw, 0px);">Make Quizzes</div> <div class="promo-text svelte-79durp">Share Quizzes</div>';return{c(){t=l("section"),n=l("div"),i=l("div"),c=w(),d=l("div"),f=w(),p=l("div"),h=w(),m=l("div"),q=w(),g=l("div"),v=l("div"),r=l("div"),A=l("div"),A.innerHTML=D,C=w(),y=l("div"),k=l("div"),I=w(),z=l("div"),M=w(),E=l("ul"),E.innerHTML=B,S=w(),H=l("div"),H.innerHTML=x,this.h()},l(b){t=a(b,"SECTION",{class:!0});var W=_(t);n=a(W,"DIV",{class:!0});var T=_(n);i=a(T,"DIV",{class:!0,style:!0}),_(i).forEach(o),c=L(T),d=a(T,"DIV",{class:!0,style:!0}),_(d).forEach(o),f=L(T),p=a(T,"DIV",{class:!0,style:!0}),_(p).forEach(o),h=L(T),m=a(T,"DIV",{id:!0,class:!0}),_(m).forEach(o),q=L(T),g=a(T,"DIV",{class:!0});var J=_(g);v=a(J,"DIV",{class:!0});var K=_(v);r=a(K,"DIV",{class:!0});var F=_(r);A=a(F,"DIV",{class:!0,"data-svelte-h":!0}),Q(A)!=="svelte-ciscj2"&&(A.innerHTML=D),C=L(F),y=a(F,"DIV",{class:!0,style:!0});var j=_(y);k=a(j,"DIV",{class:!0}),_(k).forEach(o),I=L(j),z=a(j,"DIV",{class:!0,style:!0}),_(z).forEach(o),j.forEach(o),M=L(F),E=a(F,"UL",{class:!0,"data-svelte-h":!0}),Q(E)!=="svelte-lwopd"&&(E.innerHTML=B),F.forEach(o),K.forEach(o),J.forEach(o),S=L(T),H=a(T,"DIV",{class:!0,"data-svelte-h":!0}),Q(H)!=="svelte-1sbi4ia"&&(H.innerHTML=x),T.forEach(o),W.forEach(o),this.h()},h(){e(i,"class","blue-circle svelte-79durp"),G(i,"transform","translate(-20vw,-40vh)"),e(d,"class","green-circle svelte-79durp"),G(d,"transform","translate(70vw,0vh)"),e(p,"class","red-circle svelte-79durp"),G(p,"transform","translate(30vw,50vh)"),e(m,"id","highlight"),e(m,"class","svelte-79durp"),e(A,"class","quiz-picture-top-bar svelte-79durp"),e(k,"class","quiz-picture-title svelte-79durp"),e(z,"class","quiz-picture-title svelte-79durp"),G(z,"width","50%"),e(y,"class","quiz-picture-header svelte-79durp"),e(y,"style",`background: linear-gradient( to bottom right, ${u[0][Math.floor(Math.random()*u[0].length)]}, ${u[0][Math.floor(Math.random()*u[0].length)]});`),e(E,"class","quiz-picture-question-list svelte-79durp"),e(r,"class","quiz-picture-container svelte-79durp"),e(v,"class","quiz-picture-gradient-outline svelte-79durp"),e(g,"class","quiz-picture-container-container-bc-im-good-at-css-and-naming svelte-79durp"),e(H,"class","promo-text-container svelte-79durp"),e(n,"class","hero-container svelte-79durp"),e(t,"class","Hero")},m(b,W){N(b,t,W),s(t,n),s(n,i),s(n,c),s(n,d),s(n,f),s(n,p),s(n,h),s(n,m),s(n,q),s(n,g),s(g,v),s(v,r),s(r,A),s(r,C),s(r,y),s(y,k),s(y,I),s(y,z),s(r,M),s(r,E),s(n,S),s(n,H)},p:V,i:V,o:V,d(b){b&&o(t)}}}function ne(u){return typeof window<"u"&&window.addEventListener("mousemove",function(n){let i=document.getElementById("highlight");i.style.transform="translate("+(n.x-400)+"px,"+(n.y-400+window.scrollY)+"px)"}),[["#8c4b6f","#f3715c","#fbb040","#10ac8f","#3d99d4","#66d2ea","#fe938c","#F1A9A0","#e55813","#f58233","#d88495","#ebbd30","#7DCFB6","#68ABB3","#A3DAE5","#D85C68","#9CEC5B","#FFB75E","#FFA931","#Fa5b30"]]}class ue extends O{constructor(t){super(),Y(this,t,ne,te,U,{})}}function se(u){let t,n='<div class="login svelte-1qnci1t">Login</div>';return{c(){t=l("a"),t.innerHTML=n,this.h()},l(i){t=a(i,"A",{href:!0,"data-svelte-h":!0}),Q(t)!=="svelte-cf68t6"&&(t.innerHTML=n),this.h()},h(){e(t,"href","./login")},m(i,c){N(i,t,c)},d(i){i&&o(t)}}}function ie(u){let t,n='<li class="login page-item svelte-1qnci1t">Sign In</li>';return{c(){t=l("a"),t.innerHTML=n,this.h()},l(i){t=a(i,"A",{href:!0,"data-svelte-h":!0}),Q(t)!=="svelte-z7jr5m"&&(t.innerHTML=n),this.h()},h(){e(t,"href","./login")},m(i,c){N(i,t,c)},d(i){i&&o(t)}}}function le(u){let t,n,i,c,d,f,p,h,m,q='<li class="page-item hover-underline-animation svelte-1qnci1t">Blog</li>',g,v,r='<li class="page-item hover-underline-animation svelte-1qnci1t">Take a Quiz</li>',A,D,C='<li class="page-item hover-underline-animation svelte-1qnci1t">Make a Quiz</li>',y;function k(M,E){return M[0]==null?ie:se}let I=k(u),z=I(u);return{c(){t=l("div"),n=l("div"),i=l("a"),c=l("div"),d=R(u[1]),f=w(),p=l("div"),h=l("ul"),m=l("a"),m.innerHTML=q,g=w(),v=l("a"),v.innerHTML=r,A=w(),D=l("a"),D.innerHTML=C,y=w(),z.c(),this.h()},l(M){t=a(M,"DIV",{class:!0});var E=_(t);n=a(E,"DIV",{class:!0});var B=_(n);i=a(B,"A",{href:!0});var S=_(i);c=a(S,"DIV",{class:!0});var H=_(c);d=X(H,u[1]),H.forEach(o),S.forEach(o),B.forEach(o),f=L(E),p=a(E,"DIV",{class:!0});var x=_(p);h=a(x,"UL",{});var b=_(h);m=a(b,"A",{href:!0,"data-svelte-h":!0}),Q(m)!=="svelte-1ri2cpk"&&(m.innerHTML=q),g=L(b),v=a(b,"A",{href:!0,"data-svelte-h":!0}),Q(v)!=="svelte-fvhjz8"&&(v.innerHTML=r),A=L(b),D=a(b,"A",{href:!0,"data-svelte-h":!0}),Q(D)!=="svelte-1ed8v3o"&&(D.innerHTML=C),y=L(b),z.l(b),b.forEach(o),x.forEach(o),E.forEach(o),this.h()},h(){e(c,"class","logo svelte-1qnci1t"),e(i,"href","./"),e(n,"class","logo-container"),e(m,"href","./blog"),e(v,"href","./take-a-quiz"),e(D,"href","./make-quiz"),e(p,"class","pages-container svelte-1qnci1t"),e(t,"class","header svelte-1qnci1t")},m(M,E){N(M,t,E),s(t,n),s(n,i),s(i,c),s(c,d),s(t,f),s(t,p),s(p,h),s(h,m),s(h,g),s(h,v),s(h,A),s(h,D),s(h,y),z.m(h,null)},p(M,[E]){E&2&&Z(d,M[1]),I!==(I=k(M))&&(z.d(1),z=I(M),z&&(z.c(),z.m(h,null)))},i:V,o:V,d(M){M&&o(t),z.d()}}}function ae(u,t,n){let{user:i=null}=t,c="Q";return typeof window<"u"&&(c=window.innerWidth<780?"Q":"Quiz Quest"),u.$$set=d=>{"user"in d&&n(0,i=d.user)},[i,c]}class de extends O{constructor(t){super(),Y(this,t,ae,le,U,{user:0})}}export{de as H,ce as S,ue as a};
