import{a as r,c as a,j as o,s as t}from"./index.7e56801c.js";import{G as c}from"./iconBase.9b13aa84.js";function d(n){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(n)}function m({children:n,title:e,onClickBtn:i}){const s=r();return a(l,{children:[a(p,{children:[o(g,{type:"button",onClick:()=>{i?i():s(-1)},children:o(d,{size:"18px"})}),o(h,{children:e})]}),o(u,{children:n})]})}const l=t.div`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9991;
`,p=t.nav`
  width: 100%;
  height: 60px;
  background: var(--color-white);
  padding: 16px;
  margin: 0 auto;
  position: relative;
`,h=t.div`
  font-size: var(--font-medium);
  font-weight: 500;
  letter-spacing: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,g=t.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`,u=t.div`
  background: white;
  min-height: calc(100% - 60px);
  padding: 0 16px;
  padding-top: 32px;
`;export{m as M};
