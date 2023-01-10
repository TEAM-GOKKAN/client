import{s as n,u as s,a as c,b as d,j as t,c as i,L as l,O as g}from"./index.6e976c01.js";import{G as r}from"./iconBase.a857eaf5.js";import{a as u}from"./tokenAtom.4a9834de.js";const h="/assets/logo.24f7f741.png";function p(o){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}}]})(o)}function f(o){return r({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(o)}const k=n.button`
  padding: 0;
  display: flex;

  & > * {
    height: 100%;
  }
`,x=()=>{const o=s(),e=c(),[a]=d(u);return t(k,{onClick:()=>{a!==""?e("myPage",{state:{background:o}}):e("signin",{state:{background:o}})},children:t(f,{size:"22",color:"var(--color-brown300)"})})},m=x;function v(){return t(b,{children:i(w,{children:[t(L,{children:t(p,{size:"22",color:"var(--color-brown300)"})}),t(B,{children:t(l,{to:"/",children:t("img",{src:h,alt:"gokkan"})})}),t(m,{})]})})}const b=n.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: var(--color-white);
  z-index: 9990;
`,w=n.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`,L=n.button`
  padding: 0;
  display: flex;
`,B=n.div`
  cursor: pointer;
  height: 100%;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;function O(){return i(C,{children:[t(v,{}),t(j,{children:t(g,{})})]})}const C=n.div`
  width: 100%;
  overflow-x: hidden;
`,j=n.main`
  padding: 0 16px;
  margin-top: 60px;
  padding-top: 32px;
`;export{O as default};
