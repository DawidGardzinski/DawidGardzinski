(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function f(e){if(!e||!("nodeType"in e))throw new Error("Node expected")}const m=(e,n)=>{const i=e.filter(r=>Boolean(r));document.addEventListener("mousedown",r=>{i.some(o=>(f(r.target),o.contains(r.target)))||n()})},u=(e,n)=>{e&&(e.checked=n)};document.querySelectorAll(".js-disabled").forEach(e=>{e.classList.remove("js-disabled")});const s=document.getElementById("hamburgerCheckbox"),c=document.getElementById("hamburgerCheckboxLabel"),y=document.getElementById("nav-list");document.querySelectorAll(".nav-list__item").forEach(e=>{e.addEventListener("click",()=>{u(s,!1)})});m([y,c],()=>{u(s,!1)});c==null||c.addEventListener("keypress",e=>{(e.key==="Enter"||e.code==="Space")&&(e.preventDefault(),u(s,!(s!=null&&s.checked)))});const d=document.getElementById("startButton"),a=document.getElementById("about");d==null||d.addEventListener("click",()=>{a&&a.scrollIntoView()});
