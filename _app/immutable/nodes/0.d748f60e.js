import{s as H,n as g,i as P,c as S,o as L,d as h,e as G,u as V,g as q,f as U,t as X}from"../chunks/scheduler.8ba4d870.js";import{S as F,i as N,x as J,r as K,s as Q,u as Y,c as Z,v as ee,a as te,d as E,t as W,f as ne,w as re}from"../chunks/index.e841be42.js";import{w as oe}from"../chunks/index.f872b789.js";import{g as ie}from"../chunks/globals.7f7f1b26.js";import{c as b,g as se}from"../chunks/_commonjsHelpers.de833af9.js";import{w as j,a as M}from"../chunks/global.ca78281b.js";import{p as ae}from"../chunks/stores.5f1a2c14.js";const ce=!0,Pe=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"})),ue="dark",fe=window.localStorage.getItem("theme")??ue,le=oe(fe);le.subscribe(e=>{window.localStorage.setItem("theme",e)});var me="Expected a function",x=0/0,de="[object Symbol]",pe=/^\s+|\s+$/g,ge=/^[-+]0x[0-9a-f]+$/i,be=/^0b[01]+$/i,_e=/^0o[0-7]+$/i,we=parseInt,ye=typeof b=="object"&&b&&b.Object===Object&&b,he=typeof self=="object"&&self&&self.Object===Object&&self,je=ye||he||Function("return this")(),Te=Object.prototype,Se=Te.toString,ve=Math.max,Ie=Math.min,T=function(){return je.Date.now()};function Oe(e,t,i){var r,a,s,n,o,f,u=0,I=!1,m=!1,_=!0;if(typeof e!="function")throw new TypeError(me);t=C(t)||0,v(i)&&(I=!!i.leading,m="maxWait"in i,s=m?ve(C(i.maxWait)||0,t):s,_="trailing"in i?!!i.trailing:_);function w(c){var l=r,d=a;return r=a=void 0,u=c,n=e.apply(d,l),n}function R(c){return u=c,o=setTimeout(p,t),I?w(c):n}function z(c){var l=c-f,d=c-u,k=t-l;return m?Ie(k,s-d):k}function O(c){var l=c-f,d=c-u;return f===void 0||l>=t||l<0||m&&d>=s}function p(){var c=T();if(O(c))return $(c);o=setTimeout(p,z(c))}function $(c){return o=void 0,_&&r?w(c):(r=a=void 0,n)}function A(){o!==void 0&&clearTimeout(o),u=0,r=f=a=o=void 0}function B(){return o===void 0?n:$(T())}function y(){var c=T(),l=O(c);if(r=arguments,a=this,f=c,l){if(o===void 0)return R(f);if(m)return o=setTimeout(p,t),w(f)}return o===void 0&&(o=setTimeout(p,t)),n}return y.cancel=A,y.flush=B,y}function v(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function $e(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||$e(e)&&Se.call(e)==de}function C(e){if(typeof e=="number")return e;if(ke(e))return x;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(pe,"");var i=be.test(e);return i||_e.test(e)?we(e.slice(2),i?2:8):ge.test(e)?x:+e}var Ee=Oe;const D=se(Ee),{window:We}=ie;function Me(e){let t,i;return{c:g,l:g,m(r,a){t||(i=J(We,"resize",function(){P(D(e[1],e[0]))&&D(e[1],e[0]).apply(this,arguments)}),t=!0)},p(r,[a]){e=r},i:g,o:g,d(r){t=!1,i()}}}function xe(e,t,i){let r,a;S(e,j,o=>i(2,r=o)),S(e,M,o=>i(3,a=o));let{debounceDur:s=300}=t;const n=()=>{h(M,a=window.innerWidth,a),Math.abs(r-window.innerHeight)>r*.2&&h(j,r=window.innerHeight,r)};return L(()=>{n(),h(j,r=window.innerHeight,r)}),e.$$set=o=>{"debounceDur"in o&&i(0,s=o.debounceDur)},[s,n]}class Ce extends F{constructor(t){super(),N(this,t,xe,Me,H,{debounceDur:0})}}function De(e){let t,i,r;t=new Ce({});const a=e[3].default,s=G(a,e,e[2],null);return{c(){K(t.$$.fragment),i=Q(),s&&s.c()},l(n){Y(t.$$.fragment,n),i=Z(n),s&&s.l(n)},m(n,o){ee(t,n,o),te(n,i,o),s&&s.m(n,o),r=!0},p(n,[o]){s&&s.p&&(!r||o&4)&&V(s,a,n,n[2],r?U(a,n[2],o,null):q(n[2]),null)},i(n){r||(E(t.$$.fragment,n),E(s,n),r=!0)},o(n){W(t.$$.fragment,n),W(s,n),r=!1},d(n){n&&ne(i),re(t,n),s&&s.d(n)}}}function He(e,t,i){let r,a;S(e,ae,u=>i(1,a=u));let{$$slots:s={},$$scope:n}=t,o=!1;L(()=>{o=!0});async function f(){o&&(await X(),document.scrollingElement.scrollTop=0,window.scrollTo(0,0))}return e.$$set=u=>{"$$scope"in u&&i(2,n=u.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&i(0,r=a.url.pathname),e.$$.dirty&1&&f()},[r,a,n,s]}class Ge extends F{constructor(t){super(),N(this,t,He,De,H,{})}}export{Ge as component,Pe as universal};
