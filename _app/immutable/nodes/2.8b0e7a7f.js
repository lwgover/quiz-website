import{h as ce,j as Ee,s as ee,r as te,c as j,o as Fe,k as Ce,n as N,l as X}from"../chunks/scheduler.2616fb51.js";import{z as ke,A as ze,S as se,i as re,g as E,s as x,h as F,j as C,c as A,B as Q,f as v,k as _,a as z,y as w,C as ue,x as T,D as Te,p as ve,t as M,b as ge,d as D,E as J,e as fe,F as De,m as ye,n as be,o as we,G as Y,H as W,l as R,r as H,u as O,v as B,w as q}from"../chunks/index.f97f3fdf.js";import{S as Ie}from"../chunks/Seo.1f41478a.js";import{H as Me,a as xe}from"../chunks/Header.cd527504.js";import{i as de,c as $e}from"../chunks/global.0f902a3c.js";import{g as Ae}from"../chunks/globals.7f7f1b26.js";import{w as Se}from"../chunks/index.d0e2fddc.js";function he(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function K(t){const e=t-1;return e*e*e+1}function Z(t,e){if(t===e||t!==t)return()=>t;const l=typeof t;if(l!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const s=e.map((r,i)=>Z(t[i],r));return r=>s.map(i=>i(r))}if(l==="object"){if(!t||!e)throw new Error("Object cannot be null");if(de(t)&&de(e)){t=t.getTime(),e=e.getTime();const i=e-t;return n=>new Date(t+n*i)}const s=Object.keys(e),r={};return s.forEach(i=>{r[i]=Z(t[i],e[i])}),i=>{const n={};return s.forEach(o=>{n[o]=r[o](i)}),n}}if(l==="number"){const s=e-t;return r=>t+r*s}throw new Error(`Cannot interpolate ${l} values`)}function me(t,e={}){const l=Se(t);let s,r=t;function i(n,o){if(t==null)return l.set(t=n),Promise.resolve();r=n;let a=s,d=!1,{delay:p=0,duration:m=400,easing:y=Ee,interpolate:h=Z}=ce(ce({},e),o);if(m===0)return a&&(a.abort(),a=null),l.set(t=r),Promise.resolve();const f=ke()+p;let u;return s=ze(g=>{if(g<f)return!0;d||(u=h(t,n),typeof m=="function"&&(m=m(t,n)),d=!0),a&&(a.abort(),a=null);const c=g-f;return c>m?(l.set(t=n),!1):(l.set(t=u(y(c/m))),!0)}),s.promise}return{set:i,update:(n,o)=>i(n(r,t),o),subscribe:l.subscribe}}function G(t,{delay:e=0,duration:l=400,easing:s=K,axis:r="y"}={}){const i=getComputedStyle(t),n=+i.opacity,o=r==="y"?"height":"width",a=parseFloat(i[o]),d=r==="y"?["top","bottom"]:["left","right"],p=d.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),m=parseFloat(i[`padding${p[0]}`]),y=parseFloat(i[`padding${p[1]}`]),h=parseFloat(i[`margin${p[0]}`]),f=parseFloat(i[`margin${p[1]}`]),u=parseFloat(i[`border${p[0]}Width`]),g=parseFloat(i[`border${p[1]}Width`]);return{delay:e,duration:l,easing:s,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*n};${o}: ${c*a}px;padding-${d[0]}: ${c*m}px;padding-${d[1]}: ${c*y}px;margin-${d[0]}: ${c*h}px;margin-${d[1]}: ${c*f}px;border-${d[0]}-width: ${c*u}px;border-${d[1]}-width: ${c*g}px;`}}function _e(t,e,l){const s=t.slice();return s[12]=e[l],s}function Ve(t){let e,l="Sorry, We couldn't find any Quizzes with that name",s,r;return{c(){e=E("div"),e.textContent=l,this.h()},l(i){e=F(i,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-bs1vib"&&(e.textContent=l),this.h()},h(){_(e,"class","search-results-title svelte-fassy7")},m(i,n){z(i,e,n),r=!0},p:N,i(i){r||(i&&X(()=>{r&&(s||(s=J(e,G,{delay:200,duration:300,axis:"x"},!0)),s.run(1))}),r=!0)},o(i){i&&(s||(s=J(e,G,{delay:200,duration:300,axis:"x"},!1)),s.run(0)),r=!1},d(i){i&&v(e),i&&s&&s.end()}}}function He(t){let e,l,s=he(t[1]),r=[];for(let n=0;n<s.length;n+=1)r[n]=pe(_e(t,s,n));const i=n=>M(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=fe()},l(n){for(let o=0;o<r.length;o+=1)r[o].l(n);e=fe()},m(n,o){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(n,o);z(n,e,o),l=!0},p(n,o){if(o&10){s=he(n[1]);let a;for(a=0;a<s.length;a+=1){const d=_e(n,s,a);r[a]?(r[a].p(d,o),D(r[a],1)):(r[a]=pe(d),r[a].c(),D(r[a],1),r[a].m(e.parentNode,e))}for(ve(),a=s.length;a<r.length;a+=1)i(a);ge()}},i(n){if(!l){for(let o=0;o<s.length;o+=1)D(r[o]);l=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)M(r[o]);l=!1},d(n){n&&v(e),De(r,n)}}}function Oe(t){let e=t[12].title+"",l;return{c(){l=ye(e)},l(s){l=be(s,e)},m(s,r){z(s,l,r)},p(s,r){r&2&&e!==(e=s[12].title+"")&&we(l,e)},d(s){s&&v(l)}}}function Be(t){let e,l='<div class="loading-shine svelte-fassy7"></div>';return{c(){e=E("div"),e.innerHTML=l,this.h()},l(s){e=F(s,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-u6dxzy"&&(e.innerHTML=l),this.h()},h(){_(e,"class","search-result-title-loading svelte-fassy7")},m(s,r){z(s,e,r)},p:N,d(s){s&&v(e)}}}function qe(t){let e=t[12].author+"",l;return{c(){l=ye(e)},l(s){l=be(s,e)},m(s,r){z(s,l,r)},p(s,r){r&2&&e!==(e=s[12].author+"")&&we(l,e)},d(s){s&&v(l)}}}function je(t){let e,l='<div class="loading-shine svelte-fassy7"></div>';return{c(){e=E("div"),e.innerHTML=l,this.h()},l(s){e=F(s,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-1ept0g5"&&(e.innerHTML=l),this.h()},h(){_(e,"class","search-result-author-loading svelte-fassy7")},m(s,r){z(s,e,r)},p:N,d(s){s&&v(e)}}}function pe(t){let e,l,s,r,i,n,o,a;function d(u,g){return u[12].title===null?Be:Oe}let p=d(t),m=p(t);function y(u,g){return u[12].author===null?je:qe}let h=y(t),f=h(t);return{c(){e=E("div"),l=E("div"),s=E("div"),m.c(),r=x(),i=E("div"),f.c(),n=x(),this.h()},l(u){e=F(u,"DIV",{class:!0,style:!0,role:!0});var g=C(e);l=F(g,"DIV",{class:!0});var c=C(l);s=F(c,"DIV",{class:!0});var b=C(s);m.l(b),b.forEach(v),r=A(c),i=F(c,"DIV",{class:!0});var $=C(i);f.l($),$.forEach(v),c.forEach(v),n=A(g),g.forEach(v),this.h()},h(){_(s,"class","search-results-title search-results-loading svelte-fassy7"),_(i,"class","search-results-author search-results-loading svelte-fassy7"),_(l,"class","search-quiz-mini-background svelte-fassy7"),_(e,"class","search-quiz-mini svelte-fassy7"),_(e,"style",`background: linear-gradient( to bottom right, ${t[3][Math.floor(Math.random()*t[3].length)]}, ${t[3][Math.floor(Math.random()*t[3].length)]});`),_(e,"role","none")},m(u,g){z(u,e,g),w(e,l),w(l,s),m.m(s,null),w(l,r),w(l,i),f.m(i,null),w(e,n),a=!0},p(u,g){p===(p=d(u))&&m?m.p(u,g):(m.d(1),m=p(u),m&&(m.c(),m.m(s,null))),h===(h=y(u))&&f?f.p(u,g):(f.d(1),f=h(u),f&&(f.c(),f.m(i,null)))},i(u){a||(u&&X(()=>{a&&(o||(o=J(e,G,{delay:200,duration:300,axis:"x"},!0)),o.run(1))}),a=!0)},o(u){u&&(o||(o=J(e,G,{delay:200,duration:300,axis:"x"},!1)),o.run(0)),a=!1},d(u){u&&v(e),m.d(),f.d(),u&&o&&o.end()}}}function Ne(t){let e,l,s,r,i,n,o,a,d,p='<div class="search-bar-submit svelte-fassy7">⚲</div>',m,y,h,f,u,g,c,b;const $=[He,Ve],S=[];function le(k,I){return k[1].length>0?0:1}return f=le(t),u=S[f]=$[f](t),{c(){e=E("section"),l=E("div"),s=E("div"),r=E("div"),i=E("div"),n=E("form"),o=E("input"),a=x(),d=E("button"),d.innerHTML=p,m=x(),y=E("div"),h=E("div"),u.c(),this.h()},l(k){e=F(k,"SECTION",{class:!0});var I=C(e);l=F(I,"DIV",{class:!0});var V=C(l);s=F(V,"DIV",{class:!0});var L=C(s);r=F(L,"DIV",{class:!0,role:!0});var ne=C(r);i=F(ne,"DIV",{class:!0});var oe=C(i);n=F(oe,"FORM",{class:!0});var P=C(n);o=F(P,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0,autocomplete:!0}),a=A(P),d=F(P,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(d)!=="svelte-188e66a"&&(d.innerHTML=p),P.forEach(v),oe.forEach(v),ne.forEach(v),m=A(L),y=F(L,"DIV",{class:!0});var ie=C(y);h=F(ie,"DIV",{class:!0});var ae=C(h);u.l(ae),ae.forEach(v),ie.forEach(v),L.forEach(v),V.forEach(v),I.forEach(v),this.h()},h(){_(o,"class","search-bar-input svelte-fassy7"),_(o,"type","text"),_(o,"name","query"),_(o,"placeholder","Search..."),_(o,"autocomplete","one-time-code"),_(d,"type","submit"),_(d,"class","search-bar-submit-button svelte-fassy7"),_(n,"class","search-bar svelte-fassy7"),_(i,"class","search-bar-underline svelte-fassy7"),_(r,"class","search-bar-container svelte-fassy7"),_(r,"role","search"),_(h,"class","search-results-flex-container svelte-fassy7"),_(y,"class","search-results svelte-fassy7"),_(s,"class","search-background-pattern-fade svelte-fassy7"),_(l,"class","search-background-pattern svelte-fassy7"),_(e,"class","search svelte-fassy7")},m(k,I){z(k,e,I),w(e,l),w(l,s),w(s,r),w(r,i),w(i,n),w(n,o),ue(o,t[0]),w(n,a),w(n,d),w(s,m),w(s,y),w(y,h),S[f].m(h,null),g=!0,c||(b=[T(o,"input",t[6]),T(n,"submit",t[7]),T(n,"submit",Te(t[5])),T(r,"mouseenter",t[8]),T(r,"mouseleave",t[9])],c=!0)},p(k,[I]){I&1&&o.value!==k[0]&&ue(o,k[0]);let V=f;f=le(k),f===V?S[f].p(k,I):(ve(),M(S[V],1,1,()=>{S[V]=null}),ge(),u=S[f],u?u.p(k,I):(u=S[f]=$[f](k),u.c()),D(u,1),u.m(h,null))},i(k){g||(D(u),g=!0)},o(k){M(u),g=!1},d(k){k&&v(e),S[f].d(),c=!1,te(b)}}}function Le(t,e,l){let s;j(t,$e,u=>l(10,s=u));let r=s,i="",n=["#E5009C","#FF6346","#FFD788","#05C99C","#2CC570","#2FBA9B","#25FCDE","#00AEFF","#2B81D7","#5968FF","#8731E8","#A192F7","#CE47FE","#ED05BF","#F3BF03","#F89E20","#FDEB4D","#00A8B3","#51AFAC","#92D1CF"],o=[{author:null,description:null,title:null},{author:null,description:null,title:null},{author:null,description:null,title:null},{author:null,description:null,title:null}];console.log(o);const a=u=>new Promise(g=>setTimeout(g,u));async function d(u){let g={searchTerm:u};return console.log(JSON.stringify(g)),await a(1e3),fetch("http://127.0.0.1:5000/Search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(c=>{if(c.ok)return c.json();throw c}).then(c=>{console.log(c.quizzes),l(1,o=c.quizzes)})}Fe(()=>d(""));function p(u){Ce.call(this,t,u)}function m(){i=this.value,l(0,i)}return[i,o,r,n,d,p,m,()=>d(i),()=>r.set(5),()=>r.set(15)]}class Pe extends se{constructor(e){super(),re(this,e,Le,Ne,ee,{})}}const{window:U}=Ae;function Ye(t){let e,l,s,r,i,n,o,a,d,p,m,y;return{c(){e=Y("svg"),l=Y("circle"),i=x(),n=Y("svg"),o=Y("circle"),this.h()},l(h){e=W(h,"svg",{class:!0});var f=C(e);l=W(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0,style:!0}),C(l).forEach(v),f.forEach(v),i=A(h),n=W(h,"svg",{class:!0,style:!0});var u=C(n);o=W(u,"circle",{cx:!0,cy:!0,r:!0,fill:!0,style:!0}),C(o).forEach(v),u.forEach(v),this.h()},h(){_(l,"cx",s=t[3].x),_(l,"cy",r=t[3].y),_(l,"r",t[4]),_(l,"fill","white"),R(l,"mix-blend-mode","exclusion"),_(e,"class","w-full h-full cursor svelte-wr79we"),_(o,"cx",a=t[5].x),_(o,"cy",d=t[5].y),_(o,"r",p=Math.min(1/(t[4]/100),t[4]/2)),_(o,"fill","white"),R(o,"mix-blend-mode","difference"),_(n,"class","w-full h-full cursor svelte-wr79we"),R(n,"z-index","1000")},m(h,f){z(h,e,f),w(e,l),z(h,i,f),z(h,n,f),w(n,o),m||(y=[T(U,"mousemove",t[11]),T(U,"mousedown",t[12]),T(U,"mouseup",t[13]),T(U,"scroll",t[14])],m=!0)},p(h,[f]){f&8&&s!==(s=h[3].x)&&_(l,"cx",s),f&8&&r!==(r=h[3].y)&&_(l,"cy",r),f&16&&_(l,"r",h[4]),f&32&&a!==(a=h[5].x)&&_(o,"cx",a),f&32&&d!==(d=h[5].y)&&_(o,"cy",d),f&16&&p!==(p=Math.min(1/(h[4]/100),h[4]/2))&&_(o,"r",p)},i:N,o:N,d(h){h&&(v(e),v(i),v(n)),m=!1,te(y)}}}function We(t,e,l){let s,r,i,n;j(t,$e,$=>l(15,s=$));let o=0,a=0,d=0;typeof window<"u"&&(d=window.scrollY);let p=me({x:0,y:0},{easing:K,duration:500});j(t,p,$=>l(3,r=$));let m=me({x:0,y:0},{easing:K,duration:10});j(t,m,$=>l(5,n=$));let y=s;j(t,y,$=>l(4,i=$));function h(){p.set({x:o,y:a+d}),m.set({x:o,y:a+d})}function f(){p.set({x:o,y:a+d}),m.set({x:o,y:a+d})}return[o,a,d,r,i,n,p,m,y,h,f,$=>{l(0,o=$.clientX),l(1,a=$.clientY),h()},$=>{y.set(30)},$=>{y.set(15)},$=>{l(2,d=window.scrollY),f()}]}class Ue extends se{constructor(e){super(),re(this,e,We,Ye,ee,{})}}function Xe(t){let e=!1,l=()=>{e=!1},s,r,i,n,o,a,d,p,m,y,h,f,u,g;return X(t[3]),X(t[4]),r=new Ie({}),o=new Me({}),d=new xe({}),m=new Pe({}),h=new Ue({}),{c(){H(r.$$.fragment),i=x(),n=E("main"),H(o.$$.fragment),a=x(),H(d.$$.fragment),p=x(),H(m.$$.fragment),y=x(),H(h.$$.fragment),this.h()},l(c){O(r.$$.fragment,c),i=A(c),n=F(c,"MAIN",{id:!0,class:!0});var b=C(n);O(o.$$.fragment,b),a=A(b),O(d.$$.fragment,b),p=A(b),O(m.$$.fragment,b),y=A(b),O(h.$$.fragment,b),b.forEach(v),this.h()},h(){_(n,"id","home"),_(n,"class","svelte-uomq4v")},m(c,b){B(r,c,b),z(c,i,b),z(c,n,b),B(o,n,null),w(n,a),B(d,n,null),w(n,p),B(m,n,null),w(n,y),B(h,n,null),f=!0,u||(g=[T(window,"resize",t[3]),T(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(l,100),t[4]()})],u=!0)},p(c,[b]){b&4&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,c[2]),s=setTimeout(l,100))},i(c){f||(D(r.$$.fragment,c),D(o.$$.fragment,c),D(d.$$.fragment,c),D(m.$$.fragment,c),D(h.$$.fragment,c),f=!0)},o(c){M(r.$$.fragment,c),M(o.$$.fragment,c),M(d.$$.fragment,c),M(m.$$.fragment,c),M(h.$$.fragment,c),f=!1},d(c){c&&(v(i),v(n)),q(r,c),q(o),q(d),q(m),q(h),u=!1,te(g)}}}function Je(t,e,l){let s,r,i=0;function n(){l(0,s=window.innerWidth),l(1,r=window.innerHeight)}function o(){l(2,i=window.pageYOffset)}return t.$$.update=()=>{t.$$.dirty&1},[s,r,i,n,o]}class st extends se{constructor(e){super(),re(this,e,Je,Xe,ee,{})}}export{st as component};
