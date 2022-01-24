import{j as R,r as l,a as N,R as b,b as L}from"./vendor.26b63288.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function m(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=m(e);fetch(e.href,s)}};M();const j="Aa",D="Ab",$="Ac";var x={container:j,textarea:D,title:$};const O="Ae";var w={button:O};const d=R.exports.jsx,T=R.exports.jsxs,z=({text:o,onClick:t})=>d("button",{className:w.button,onClick:t,children:o}),A=o=>o.replace(/\s+/g," ").replace(/,+/g,","),C=o=>o.split(", ").map(t=>A(t).trim()).filter(t=>t!==""),B="Af",k="Ag";var E={tags:B,tag:k};const I="Ag",H="Ah",K="Ai";var y={tag:I,cross:H,danger:K};const F=({text:o,onClickRemove:t,addClass:m,onDrag:i,onResize:e})=>{const[s,n]=l.exports.useState(!1),r=l.exports.useRef(null),a=l.exports.useRef(!1);l.exports.useEffect(()=>(addEventListener("resize",g),()=>removeEventListener("resize",g)));const g=()=>{const{left:f,top:v}=r.current.getBoundingClientRect();e(f,v)},h=({target:f})=>{a.current=!0,addEventListener("mouseup",u,{once:!0}),addEventListener("touchend",u,{once:!0})},c=({target:f})=>{if(!a.current)return;const{left:v,top:S}=f.getBoundingClientRect();i(v,S)},u=()=>{a.current=!1},p=()=>n(!s);return T("div",{className:`${s&&y.danger} ${y.tag} ${m}`,onTouchStart:h,onMouseDown:h,onTouchMove:c,onMouseMove:c,ref:r,children:[o,d("button",{className:y.cross,onClick:t,onMouseEnter:p,onMouseLeave:p,children:"\u2716"})]})},J=({tags:o,onClickRemove:t})=>{const i=l.exports.useRef({}).current,e=(n,r,a)=>{console.log("drag",n,r,a)},s=(n,r,a)=>{i[n]={left:r,top:a},console.log(i)};return l.exports.useEffect(()=>{},[]),d("div",{className:E.tags,children:o.map((n,r)=>d(F,{text:n,onClickRemove:()=>t(r),addClass:E.tag,onDrag:(a,g)=>e(r,a,g),onResize:(a,g)=>s(r,a,g)},`${r}`))})};function P(){const[o,t]=l.exports.useState([]),[m,i]=l.exports.useState(""),e=l.exports.useRef(null);l.exports.useEffect(()=>{let c=localStorage.getItem("tags")||"[]";t(JSON.parse(c))},[]),l.exports.useEffect(()=>{N(e.current),s()},[o]);const s=()=>{localStorage.setItem("tags",JSON.stringify(o))},n=({target:{value:c}})=>{let u=c,p=u.match(/\s*,*\s*$/)[0];p=A(p),u=u.replace(/\s*,\s*/g,", ");let f=C(u);i(p),t(f)},r=()=>{const c=o.join(", ").replace(/[\s,]+/g,", ");t(C(c))},a=()=>i(""),g=c=>{/[0-9А-яЁёA-Za-z_@\-',.\s]/.test(c.key)||c.preventDefault()},h=c=>{const u=o.filter((p,f)=>f!==c);t(u)};return T("div",{className:x.container,children:[d("h1",{className:x.title,children:"Simple Tag Editor"}),d(z,{text:"_ > ,",onClick:r}),d("textarea",{className:x.textarea,onChange:n,onKeyDown:g,onBlur:a,value:o.join(", ")+m,ref:e}),d(J,{tags:o,onClickRemove:h})]})}b.render(d(L.StrictMode,{children:d(P,{})}),document.getElementById("app"));
