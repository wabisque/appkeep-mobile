import{p as o,o as s,c,a as n,g as l,i as d,w as a,d as _,e as r,n as p,t as u}from"./index.58c48e24.js";const f={},h={class:"component--icon-search-normal",fill:"none",viewBox:"0 0 24 24"},m=n("path",{d:"M11 20C13.3869 20 15.6761 19.0518 17.364 17.364C19.0518 15.6761 20 13.3869 20 11C20 8.61305 19.0518 6.32387 17.364 4.63604C15.6761 2.94821 13.3869 2 11 2C8.61305 2 6.32387 2.94821 4.63604 4.63604C2.94821 6.32387 2 8.61305 2 11C2 13.3869 2.94821 15.6761 4.63604 17.364C6.32387 19.0518 8.61305 20 11 20V20ZM18.93 20.69C19.46 22.29 20.67 22.45 21.6 21.05C22.45 19.77 21.89 18.72 20.35 18.72C19.21 18.71 18.57 19.6 18.93 20.69V20.69Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),v=[m];function y(e,t){return s(),c("svg",h,v)}const M=o(f,[["render",y]]);const C={},g={class:"component--card"};function x(e,t){return s(),c("div",g,[l(e.$slots,"default")])}const $=o(C,[["render",x]]);const k={},S={class:"component--tag"};function B(e,t){return s(),c("span",S,[l(e.$slots,"default")])}const i=o(k,[["render",B]]);const N=n("div",{class:"description"},"A very valid description",-1),T={class:"tags"},Z={__name:"Transaction",props:{type:{type:String,default:"income"}},setup(e){const t=e;return(V,w)=>(s(),d($,{class:"component--transaction"},{default:a(()=>[N,n("div",T,[_(i,null,{default:a(()=>[r("Sale")]),_:1}),_(i,null,{default:a(()=>[r("Online")]),_:1})]),n("div",{class:p(["price",`:type-${t.type}`])},u(t.type=="expense"?"-":"")+"30.00",3)]),_:1}))}};export{$ as X,Z as _,M as a};
