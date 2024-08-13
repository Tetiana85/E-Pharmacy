import{s as r,R as p}from"./index-783777d1.js";const S=r.div`
  width: 1223px;
  padding: 72px 20px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 43px;
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
    padding: 62px 0px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`,k=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 16px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`,C=r.li`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  padding: 40px;
  width: 381px;
  height: 276px;
  background: #e7f1ed;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 344px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    height: 202px;
    padding: 32px;
  }
`,z=r.p`
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
`,O=r.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #93939a;
  display: flex;
  gap: 8px;
  @media screen and (max-width: 767px) {
    margin-bottom: 18px;
  }
`,P=r.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
`,j=r.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
`,D=r.button`
  border-radius: 24px;
  padding: 10px 16px;
  border: none;
  background: #59b17a;
  height: 34px;
  width: 102px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`,M=r.div`
  display: flex;
  gap: 14px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,E=r.div`
  gap: 14px;
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`,N=r.div`
  display: flex;
  gap: 6px;
  align-items: center;
`,A=r.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 65px;
  height: 34px;
  background: rgba(89, 177, 122, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #59b17a;
  box-sizing: border-box;
`,B=r.div`
  border-radius: 8px;
  padding: 8px 16px;
  width: 71px;
  height: 34px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
  color: #e85050;
  box-sizing: border-box;
`,W=r.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`,T=r.p`
  width: 120px;
`,V=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return o=Object.assign||function(a){for(var n,t=1,i=arguments.length;t<i;t++){n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s])}return a},o.apply(this,arguments)};function c(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]]);return n}var h={color:"#38ad48",enabled:!0,size:50,style:{}},g=function(e){return parseFloat(e.toString()).toString()===e.toString()?e+"px":e.toString()},m=function(e){var a=function(n){var t=n.color,i=n.enabled,s=n.size,d=n.style,l=c(n,["color","enabled","size","style"]),f=o(o({},l),{style:o({color:t,overflow:"visible",width:g(s)},d)});return i?p.createElement(e,o({},f)):null};return a.defaultProps=h,a},u={speed:100,still:!1,thickness:100},b=o(o({},u),{secondaryColor:"rgba(0,0,0,0.44)"});function y(e,a){a===void 0&&(a={});var n=a.insertAt;if(!(!e||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var v="@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}";y(v);var x=function(e){var a=e.secondaryColor,n=e.speed,t=e.still,i=e.thickness,s=c(e,["secondaryColor","speed","still","thickness"]),d=4*(i/100),l=t?{}:{animation:"spinners-react-circular-fixed "+140/n+"s linear infinite"};return p.createElement("svg",o({fill:"none"},s,{viewBox:"0 0 66 66"}),p.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:a,strokeWidth:d}),p.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:"currentColor",strokeDasharray:"40, 134",strokeDashoffset:"325",strokeLinecap:"round",strokeWidth:d,style:l}))};x.defaultProps=b;var _=m(x);export{T as A,B as C,S as M,P as N,A as O,V as S,D as V,_ as a,k as b,C as c,z as d,E as e,N as f,W as g,O as h,j as i,M as j};
