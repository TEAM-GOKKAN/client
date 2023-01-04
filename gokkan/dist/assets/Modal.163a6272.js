import{a as e,j as o,c as i,s as t}from"./index.7e56801c.js";function b({children:r,buttonText:n,onSubmit:l}){const a=e();return o(c,{children:i(d,{children:[o(s,{children:r}),i(h,{children:[o("button",{type:"button",onClick:()=>{a(-1)},children:"\uB2EB\uAE30"}),n&&o("button",{type:"button",onClick:l,children:n})]})]})})}const c=t.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #9d9792ad;
`,d=t.div`
  width: calc(100% - 24px);
  background: var(--color-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`,s=t.dialog`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--color-white);
  position: relative;
`,h=t.div`
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
`;export{b as M};
