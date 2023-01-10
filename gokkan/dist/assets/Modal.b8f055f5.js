import{a as c,j as o,c as r,s as t}from"./index.6e976c01.js";function g({children:l,buttonText:i,onSubmit:a,onClose:n}){const e=c();return o(d,{children:r(s,{children:[o(h,{children:l}),r(p,{children:[o("button",{type:"button",onClick:()=>{n?n():e(-1)},children:"\uB2EB\uAE30"}),i&&o("button",{type:"button",onClick:a,children:i})]})]})})}const d=t.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #9d9792ad;
`,s=t.div`
  width: calc(100% - 24px);
  background: var(--color-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`,h=t.dialog`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--color-white);
  position: relative;
`,p=t.div`
  width: 100%;
  display: flex;

  & button {
    margin: 0;
    width: 100%;
    background: var(--color-brown500);
    color: var(--color-brown100);
    height: 42px;

    &:first-child {
      background: var(--color-brown200);
      color: var(--color-brown300);
    }
  }
`;export{g as M};
