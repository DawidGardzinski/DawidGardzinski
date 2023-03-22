(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function ye(e){if(!e||!("nodeType"in e))throw new Error("Node expected")}const ge=(e,r)=>{const t=e.filter(a=>Boolean(a));document.addEventListener("mousedown",a=>{t.some(o=>(ye(a.target),o.contains(a.target)))||r()})},M=(e,r)=>{e&&(e.checked=r)},N=(e,r,t={})=>{const n={...{forwardDelay:100,backwardDelay:75,transitionalDelay:200,leaveLastWord:!0},...t},{forwardDelay:o,backwardDelay:i,transitionalDelay:c,leaveLastWord:l}=n;e&&(e.innerText="",function u(y){if(!y.length)return;let d=!1,m=y.length===1;(function v(b){setTimeout(()=>{if(!b&&!d){if(d=!0,l&&m)return;v(y[0]);return}if(!d){e.innerText=e.textContent+b[0],v(b.slice(1));return}if(e.innerText=b,!b&&d){u(y.slice(1));return}v(b.slice(0,-1))},d?i:b?o:c)})(y[0])}(r))};var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ve(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var O=ve,pe=typeof $=="object"&&$&&$.Object===Object&&$,re=pe,me=re,he=typeof self=="object"&&self&&self.Object===Object&&self,Te=me||he||Function("return this")(),F=Te,je=F,$e=function(){return je.Date.now()},xe=$e,_e=/\s/;function Ae(e){for(var r=e.length;r--&&_e.test(e.charAt(r)););return r}var Ie=Ae,Oe=Ie,Se=/^\s+/;function Ee(e){return e&&e.slice(0,Oe(e)+1).replace(Se,"")}var we=Ee,Le=F,Be=Le.Symbol,te=Be,U=te,ne=Object.prototype,Pe=ne.hasOwnProperty,ke=ne.toString,T=U?U.toStringTag:void 0;function Me(e){var r=Pe.call(e,T),t=e[T];try{e[T]=void 0;var a=!0}catch{}var n=ke.call(e);return a&&(r?e[T]=t:delete e[T]),n}var Fe=Me,We=Object.prototype,Re=We.toString;function Ce(e){return Re.call(e)}var Ne=Ce,G=te,Ue=Fe,Ge=Ne,De="[object Null]",Ke="[object Undefined]",D=G?G.toStringTag:void 0;function qe(e){return e==null?e===void 0?Ke:De:D&&D in Object(e)?Ue(e):Ge(e)}var S=qe;function Ve(e){return e!=null&&typeof e=="object"}var E=Ve,ze=S,Xe=E,He="[object Symbol]";function Ye(e){return typeof e=="symbol"||Xe(e)&&ze(e)==He}var Je=Ye,Qe=we,K=O,Ze=Je,q=0/0,er=/^[-+]0x[0-9a-f]+$/i,rr=/^0b[01]+$/i,tr=/^0o[0-7]+$/i,nr=parseInt;function ar(e){if(typeof e=="number")return e;if(Ze(e))return q;if(K(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=K(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Qe(e);var t=rr.test(e);return t||tr.test(e)?nr(e.slice(2),t?2:8):er.test(e)?q:+e}var or=ar,ir=O,L=xe,V=or,sr="Expected a function",cr=Math.max,ur=Math.min;function fr(e,r,t){var a,n,o,i,c,l,u=0,y=!1,d=!1,m=!0;if(typeof e!="function")throw new TypeError(sr);r=V(r)||0,ir(t)&&(y=!!t.leading,d="maxWait"in t,o=d?cr(V(t.maxWait)||0,r):o,m="trailing"in t?!!t.trailing:m);function v(f){var g=a,h=n;return a=n=void 0,u=f,i=e.apply(h,g),i}function b(f){return u=f,c=setTimeout(j,r),y?v(f):i}function le(f){var g=f-l,h=f-u,C=r-g;return d?ur(C,o-h):C}function W(f){var g=f-l,h=f-u;return l===void 0||g>=r||g<0||d&&h>=o}function j(){var f=L();if(W(f))return R(f);c=setTimeout(j,le(f))}function R(f){return c=void 0,m&&a?v(f):(a=n=void 0,i)}function de(){c!==void 0&&clearTimeout(c),u=0,a=l=n=c=void 0}function be(){return c===void 0?i:R(L())}function w(){var f=L(),g=W(f);if(a=arguments,n=this,l=f,g){if(c===void 0)return b(l);if(d)return clearTimeout(c),c=setTimeout(j,r),v(l)}return c===void 0&&(c=setTimeout(j,r)),i}return w.cancel=de,w.flush=be,w}var ae=fr,lr=ae,dr=O,br="Expected a function";function yr(e,r,t){var a=!0,n=!0;if(typeof e!="function")throw new TypeError(br);return dr(t)&&(a="leading"in t?!!t.leading:a,n="trailing"in t?!!t.trailing:n),lr(e,r,{leading:a,maxWait:r,trailing:n})}var gr=yr;let oe=!1;const _=e=>{oe=e},z=(e,r,t=1,a={throttleInvocationRate:10})=>{const{throttleInvocationRate:n}=a;!e||!r||e.addEventListener("scroll",gr(()=>{oe||(r.scrollTop=t*e.scrollY)},n))},ie=()=>window.innerWidth<650,vr=ie();document.querySelectorAll(".js-disabled").forEach(e=>{e.classList.remove("js-disabled")});const p=document.getElementById("hamburgerCheckbox"),x=document.getElementById("hamburgerCheckboxLabel"),pr=document.getElementById("nav-list"),X=document.getElementById("typewriter");ge([pr,x],()=>{M(p,!1)});x==null||x.addEventListener("keypress",e=>{(e.key==="Enter"||e.code==="Space")&&(e.preventDefault(),M(p,!(p!=null&&p.checked)))});const B=document.getElementById("startButton"),H=document.getElementById("about");B==null||B.addEventListener("click",()=>{H&&(_(!0),H.scrollIntoView())});vr?N(X,["Hissasad",":)"]):N(X,["Hiasdasd","I am Dawid","Web developer",":)"]);document.querySelectorAll(".nav-list__item").forEach(e=>{e.addEventListener("click",()=>{M(p,!1),_(!0)})});function mr(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var hr=mr,Tr=Math.floor,jr=Math.random;function $r(e,r){return e+Tr(jr()*(r-e+1))}var xr=$r,_r=xr;function Ar(e,r){var t=-1,a=e.length,n=a-1;for(r=r===void 0?a:r;++t<r;){var o=_r(t,n),i=e[o];e[o]=e[t],e[t]=i}return e.length=r,e}var se=Ar,Ir=hr,Or=se;function Sr(e){return Or(Ir(e))}var Er=Sr;function wr(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var Lr=wr,Br=Lr;function Pr(e,r){return Br(r,function(t){return e[t]})}var kr=Pr;function Mr(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var Fr=Mr,Wr=S,Rr=E,Cr="[object Arguments]";function Nr(e){return Rr(e)&&Wr(e)==Cr}var Ur=Nr,Y=Ur,Gr=E,ce=Object.prototype,Dr=ce.hasOwnProperty,Kr=ce.propertyIsEnumerable,qr=Y(function(){return arguments}())?Y:function(e){return Gr(e)&&Dr.call(e,"callee")&&!Kr.call(e,"callee")},Vr=qr,zr=Array.isArray,ue=zr,A={},Xr={get exports(){return A},set exports(e){A=e}};function Hr(){return!1}var Yr=Hr;(function(e,r){var t=F,a=Yr,n=r&&!r.nodeType&&r,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,c=i?t.Buffer:void 0,l=c?c.isBuffer:void 0,u=l||a;e.exports=u})(Xr,A);var Jr=9007199254740991,Qr=/^(?:0|[1-9]\d*)$/;function Zr(e,r){var t=typeof e;return r=r??Jr,!!r&&(t=="number"||t!="symbol"&&Qr.test(e))&&e>-1&&e%1==0&&e<r}var et=Zr,rt=9007199254740991;function tt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=rt}var fe=tt,nt=S,at=fe,ot=E,it="[object Arguments]",st="[object Array]",ct="[object Boolean]",ut="[object Date]",ft="[object Error]",lt="[object Function]",dt="[object Map]",bt="[object Number]",yt="[object Object]",gt="[object RegExp]",vt="[object Set]",pt="[object String]",mt="[object WeakMap]",ht="[object ArrayBuffer]",Tt="[object DataView]",jt="[object Float32Array]",$t="[object Float64Array]",xt="[object Int8Array]",_t="[object Int16Array]",At="[object Int32Array]",It="[object Uint8Array]",Ot="[object Uint8ClampedArray]",St="[object Uint16Array]",Et="[object Uint32Array]",s={};s[jt]=s[$t]=s[xt]=s[_t]=s[At]=s[It]=s[Ot]=s[St]=s[Et]=!0;s[it]=s[st]=s[ht]=s[ct]=s[Tt]=s[ut]=s[ft]=s[lt]=s[dt]=s[bt]=s[yt]=s[gt]=s[vt]=s[pt]=s[mt]=!1;function wt(e){return ot(e)&&at(e.length)&&!!s[nt(e)]}var Lt=wt;function Bt(e){return function(r){return e(r)}}var Pt=Bt,I={},kt={get exports(){return I},set exports(e){I=e}};(function(e,r){var t=re,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,i=o&&t.process,c=function(){try{var l=n&&n.require&&n.require("util").types;return l||i&&i.binding&&i.binding("util")}catch{}}();e.exports=c})(kt,I);var Mt=Lt,Ft=Pt,J=I,Q=J&&J.isTypedArray,Wt=Q?Ft(Q):Mt,Rt=Wt,Ct=Fr,Nt=Vr,Ut=ue,Gt=A,Dt=et,Kt=Rt,qt=Object.prototype,Vt=qt.hasOwnProperty;function zt(e,r){var t=Ut(e),a=!t&&Nt(e),n=!t&&!a&&Gt(e),o=!t&&!a&&!n&&Kt(e),i=t||a||n||o,c=i?Ct(e.length,String):[],l=c.length;for(var u in e)(r||Vt.call(e,u))&&!(i&&(u=="length"||n&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Dt(u,l)))&&c.push(u);return c}var Xt=zt,Ht=Object.prototype;function Yt(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Ht;return e===t}var Jt=Yt;function Qt(e,r){return function(t){return e(r(t))}}var Zt=Qt,en=Zt,rn=en(Object.keys,Object),tn=rn,nn=Jt,an=tn,on=Object.prototype,sn=on.hasOwnProperty;function cn(e){if(!nn(e))return an(e);var r=[];for(var t in Object(e))sn.call(e,t)&&t!="constructor"&&r.push(t);return r}var un=cn,fn=S,ln=O,dn="[object AsyncFunction]",bn="[object Function]",yn="[object GeneratorFunction]",gn="[object Proxy]";function vn(e){if(!ln(e))return!1;var r=fn(e);return r==bn||r==yn||r==dn||r==gn}var pn=vn,mn=pn,hn=fe;function Tn(e){return e!=null&&hn(e.length)&&!mn(e)}var jn=Tn,$n=Xt,xn=un,_n=jn;function An(e){return _n(e)?$n(e):xn(e)}var In=An,On=kr,Sn=In;function En(e){return e==null?[]:On(e,Sn(e))}var wn=En,Ln=se,Bn=wn;function Pn(e){return Ln(Bn(e))}var kn=Pn,Mn=Er,Fn=kn,Wn=ue;function Rn(e){var r=Wn(e)?Mn:Fn;return r(e)}var Z=Rn;const Cn=(e,r,t)=>{if(!e)return;const a=new IntersectionObserver(n=>{r&&r(n)},t);return a.observe(e),a},ee=(e,r)=>Math.floor(Math.random()*(r-e+1)+e),Nn=(e,r,t={delay:1e3})=>{const{delay:a}=t;e.addEventListener("scroll",ae(r,a),{once:!0})},k=document.getElementById("parallax");window.location.hash?Nn(window,()=>{z(window,k)}):z(window,k);Cn(k,e=>{e[0].isIntersecting?_(!1):_(!0)});const P=["typescript","react","javascript","redux","next","nx","bem","css","sass","html","styled components","vite","webpack","lodash","a11y","core web vitals","seo","frontend","backend","mysql","postgresql","node.js","mongodb","cloudflare","docker","owasp","git","github","gitlab","bitbucket","ci/cd","github actions","rwd","spa","ssr","ssg"];document.querySelectorAll(".parallax__layer").forEach(e=>{const r=ie();Z(r?P:[...P,...P]).map(n=>{const o=document.createElement("div"),i=document.createTextNode(n);return o.appendChild(i),o.classList.add("parallax__word"),o.style.top=`${ee(0,100)}%`,o.style.left=`${ee(0,100)}%`,o}).forEach(n=>e.appendChild(n))});
