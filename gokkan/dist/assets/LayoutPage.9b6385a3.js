import{s as n,u as s,a as c,j as t,b as i,L as d,O as l}from"./index.bf00bd78.js";import{G as r}from"./iconBase.6cff797d.js";const g="/assets/logo.24f7f741.png";function h(o){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}}]})(o)}function u(o){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(o)}const p=n.button`
  padding: 0;
  display: flex;

  & > * {
    height: 100%;
  }
`,f=()=>{const o=s(),e=c(),a=localStorage.getItem("accessToken");return t(p,{onClick:()=>{a!==""?e("myPage",{state:{background:o}}):e("signin",{state:{background:o}})},children:t(u,{size:"22",color:"var(--color-brown300)"})})},k=f;function x(){return t(v,{children:i(m,{children:[t(b,{children:t(h,{size:"22",color:"var(--color-brown300)"})}),t(w,{children:t(d,{to:"/",children:t("img",{src:g,alt:"gokkan"})})}),t(k,{})]})})}const v=n.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: var(--color-white);
  z-index: 9990;
`,m=n.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,b=n.button`
  padding: 0;
  display: flex;
`,w=n.div`
  cursor: pointer;
  height: 100%;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;function y(){return i(L,{children:[t(x,{}),t(B,{children:t(l,{})})]})}const L=n.div`
  width: 100%;
  overflow-x: hidden;
`,B=n.main`
  padding: 0 16px;
  margin-top: 60px;
  padding-top: 32px;
`;export{y as default};
