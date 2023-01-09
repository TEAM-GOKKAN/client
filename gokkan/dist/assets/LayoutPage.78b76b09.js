import{s as o,u as s,a as c,b as d,j as t,c as i,L as l,O as u}from"./index.7e56801c.js";import{G as r}from"./iconBase.9b13aa84.js";import{a as g}from"./tokenAtom.bed01f95.js";const h="/assets/logo.24f7f741.png";function p(n){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}}]})(n)}function f(n){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(n)}const k=o.button`
  padding: 0;
  display: flex;

  & > * {
    height: 100%;
  }
`,x=()=>{const n=s(),e=c(),[a]=d(g);return t(k,{onClick:()=>{a!==""?e("myPage",{state:{background:n}}):e("signin",{state:{background:n}})},children:t(f,{size:"22",color:"var(--color-brown300)"})})},m=x;function v(){return t(b,{children:i(L,{children:[t(w,{children:t(p,{size:"22",color:"var(--color-brown300)"})}),t(B,{children:t(l,{to:"/",children:t("img",{src:h,alt:"gokkan"})})}),t(m,{})]})})}const b=o.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: var(--color-white);
  z-index: 9990;
`,L=o.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,w=o.button`
  padding: 0;
  display: flex;
`,B=o.div`
  cursor: pointer;
  height: 100%;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;function z(){return i("div",{children:[t(v,{}),t(j,{children:t(u,{})})]})}const j=o.main`
  margin-top: 32px;
  padding: 0 16px;
`;export{z as default};
