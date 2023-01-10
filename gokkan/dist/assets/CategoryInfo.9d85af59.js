import{b as t,j as n,s as o}from"./index.bf00bd78.js";import{I as g}from"./ImageSlider.2ae0b88c.js";import{G as f}from"./iconBase.6cff797d.js";function M(r){const{lotName:i,lotNumber:d,lotImageUrls:c}=r;return t(x,{children:[n(g,{children:c.length&&c.map(s=>n("img",{src:s.url,alt:"image"},s.id))}),n(b,{children:i}),n(v,{children:`No.${d}`})]})}const x=o.div`
  margin-bottom: 18px;
`,b=o.h1`
  font-size: var(--font-x-large);
  margin-top: 32px;
  margin-bottom: 6px;
  letter-spacing: normal;
`,v=o.span`
  color: var(--color-brown300);
  font-size: var(--font-x-micro);
  letter-spacing: normal;
`;function N(r){const{brand:i,designer:d,material:c,period:s,size:p,conditionGrade:h,conditionDescription:m}=r;return t(u,{children:[t(e,{children:[n(a,{children:"Brand"}),n(l,{children:i})]}),t(e,{children:[n(a,{children:"Designer"}),n(l,{children:d})]}),t(e,{children:[n(a,{children:"Material"}),n(l,{children:c})]}),t(e,{children:[n(a,{children:"Period"}),n(l,{children:s})]}),t(e,{children:[n(a,{children:"Size"}),n(l,{children:p})]}),t(e,{children:[n(a,{children:"Condition"}),t(l,{children:[n("span",{children:h}),n("span",{children:" - "+m})]})]})]})}const u=o.ul`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`,e=o.li`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  position: relative;
`,a=o.span`
  color: var(--color-brown300);
  font-size: var(--font-micro);
  letter-spacing: normal;
`,l=o.span`
  position: absolute;
  left: calc(50% + 8px);
`;function j(r){return n(w,{children:n(I,{children:r.content})})}const w=o.div`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`,I=o.p`
  font-size: var(--font-small);
  line-height: calc(var(--font-small) * 1.6);
  white-space: pre-line;
`;o.button`
  padding: 0;
  margin-top: 16px;
  display: flex;
  gap: 2px;

  & > span {
    font-weight: 500;
  }
`;function z(r){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(r)}function G({category:r}){var i;return t(C,{children:[n("span",{children:r.name}),n(z,{}),n("span",{children:(i=r.children)==null?void 0:i.at(-1)})]})}const C=o.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  & * {
    font-size: var(--font-micro);
    color: var(--color-brown300);
  }
`;export{G as C,M as I,j as L,N as a};
