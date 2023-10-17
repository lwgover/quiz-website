import{j as O,k as X,s as q,n as k,r as B,c as g}from"./scheduler.7dd7cd7d.js";import{A as F,B as G,S as H,i as I,C as v,s as J,D as E,j as b,f as w,c as K,k as f,l as S,a as z,y as D,x as A}from"./index.4d271582.js";import{g as L}from"./globals.7f7f1b26.js";import{w as N}from"./index.e9d0ede5.js";import{i as M,c as Q,b as R}from"./global.79438c26.js";import{c as P}from"./Footer.0f958785.js";function Y(e,s){if(e===s||e!==e)return()=>e;const r=typeof e;if(r!==typeof s||Array.isArray(e)!==Array.isArray(s))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const u=s.map((i,l)=>Y(e[l],i));return i=>u.map(l=>l(i))}if(r==="object"){if(!e||!s)throw new Error("Object cannot be null");if(M(e)&&M(s)){e=e.getTime(),s=s.getTime();const l=s-e;return o=>new Date(e+o*l)}const u=Object.keys(s),i={};return u.forEach(l=>{i[l]=Y(e[l],s[l])}),l=>{const o={};return u.forEach(n=>{o[n]=i[n](l)}),o}}if(r==="number"){const u=s-e;return i=>e+i*u}throw new Error(`Cannot interpolate ${r} values`)}function T(e,s={}){const r=N(e);let u,i=e;function l(o,n){if(e==null)return r.set(e=o),Promise.resolve();i=o;let a=u,_=!1,{delay:d=0,duration:m=400,easing:y=X,interpolate:t=Y}=O(O({},s),n);if(m===0)return a&&(a.abort(),a=null),r.set(e=i),Promise.resolve();const c=F()+d;let h;return u=G(x=>{if(x<c)return!0;_||(h=t(e,o),typeof m=="function"&&(m=m(e,o)),_=!0),a&&(a.abort(),a=null);const j=x-c;return j>m?(r.set(e=o),!1):(r.set(e=h(y(j/m))),!0)}),u.promise}return{set:l,update:(o,n)=>l(o(i,e),n),subscribe:r.subscribe}}const{window:C}=L;function U(e){let s,r,u,i,l,o,n,a,_,d,m,y;return{c(){s=v("svg"),r=v("circle"),l=J(),o=v("svg"),n=v("circle"),this.h()},l(t){s=E(t,"svg",{class:!0});var c=b(s);r=E(c,"circle",{cx:!0,cy:!0,r:!0,fill:!0,style:!0}),b(r).forEach(w),c.forEach(w),l=K(t),o=E(t,"svg",{class:!0,style:!0});var h=b(o);n=E(h,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),b(n).forEach(w),h.forEach(w),this.h()},h(){f(r,"cx",u=e[3].x),f(r,"cy",i=e[3].y),f(r,"r",e[4]),f(r,"fill","white"),S(r,"mix-blend-mode","exclusion"),f(s,"class","w-full h-full cursor svelte-1sy17ic"),f(n,"cx",a=e[5].x),f(n,"cy",_=e[5].y),f(n,"r",d=Math.min(1/(e[4]/100),e[4]/2)),f(n,"fill",e[6]),f(o,"class","w-full h-full cursor svelte-1sy17ic"),S(o,"z-index","1000")},m(t,c){z(t,s,c),D(s,r),z(t,l,c),z(t,o,c),D(o,n),m||(y=[A(C,"mousemove",e[12]),A(C,"mousedown",e[13]),A(C,"mouseup",e[14]),A(C,"scroll",e[15])],m=!0)},p(t,[c]){c&8&&u!==(u=t[3].x)&&f(r,"cx",u),c&8&&i!==(i=t[3].y)&&f(r,"cy",i),c&16&&f(r,"r",t[4]),c&32&&a!==(a=t[5].x)&&f(n,"cx",a),c&32&&_!==(_=t[5].y)&&f(n,"cy",_),c&16&&d!==(d=Math.min(1/(t[4]/100),t[4]/2))&&f(n,"r",d),c&64&&f(n,"fill",t[6])},i:k,o:k,d(t){t&&(w(s),w(l),w(o)),m=!1,B(y)}}}function V(e,s,r){let u,i,l,o,n;g(e,Q,p=>r(16,u=p)),g(e,R,p=>r(6,n=p));let a=0,_=0,d=0;typeof window<"u"&&(d=window.scrollY);let m=T({x:0,y:0},{easing:P,duration:500});g(e,m,p=>r(3,i=p));let y=T({x:0,y:0},{easing:P,duration:10});g(e,y,p=>r(5,o=p));let t=u;g(e,t,p=>r(4,l=p));function c(){m.set({x:a,y:_+d}),y.set({x:a,y:_+d})}function h(){m.set({x:a,y:_+d}),y.set({x:a,y:_+d})}return[a,_,d,i,l,o,n,m,y,t,c,h,p=>{r(0,a=p.clientX),r(1,_=p.clientY),c()},p=>{t.set(30)},p=>{t.set(15)},p=>{r(2,d=window.scrollY),h()}]}class le extends H{constructor(s){super(),I(this,s,V,U,q,{})}}export{le as C};
