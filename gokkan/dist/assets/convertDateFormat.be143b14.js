import{b as f,j as s,s as i}from"./index.bf00bd78.js";import{i as l}from"./handleCommas.3e182434.js";const M=o=>{const t=new Date(o),r=new Date,e=Number(t)-Number(r);if(e<0)return"\uB9C8\uAC10";const n=Math.floor(e/(1e3*60*60*24)),c=Math.floor(e/(1e3*60*60)%24),a=Math.floor(e/(1e3*60)%60),u=Math.floor(e/1e3%60);return`${n}\uC77C ${c}\uC2DC\uAC04 ${a}\uBD84 ${u}\uCD08`},m=o=>{const t=new Date(o),r=new Date,e=Number(r)-Number(t);return e<0?"0\uCD08 \uC804":e<1e3*60?`${Math.floor(e/1e3%60)}\uCD08 \uC804`:e<1e3*60*60?`${Math.floor(e/6e4%60)}\uBD84 \uC804`:e<1e3*60*60*24?`${Math.floor(e/36e5%24)}\uC2DC\uAC04 \uC804`:`${Math.floor(e/864e5)}\uC77C \uC804`};function v({bidHistory:o}){return f(d,{children:[s(C,{children:"\uC785\uCC30 \uB0B4\uC5ED"}),s(p,{children:o.map(t=>{if(!t)return"";const r=m(t.bidTime),e=l(t.price);return f(h,{children:[s(b,{children:t.memberId}),s(D,{children:r}),f(g,{children:[e,"\uC6D0"]})]},`${t.memberId}${t.price}`)})})]})}const d=i.div`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`,C=i.h4`
  font-size: var(--font-regular);
  font-weight: 500;
  margin-bottom: 28px;
`,p=i.div`
  position: relative;
`,h=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  & * {
    font-size: var(--font-small);
  }
`,b=i.span`
  color: var(--color-brown300);
  font-weight: 500;
  letter-spacing: normal;
`,D=i.span`
  position: absolute;
  left: 33.33%;
  color: var(--color-brown300);
  letter-spacing: normal;
`,g=i.span`
  font-weight: 500;
  letter-spacing: normal;
`,x=o=>{const t=Number(o.slice(0,4)),r=Number(o.slice(5,7)),e=Number(o.slice(8,10)),n=Number(o.slice(8,10)),c=Number(o.slice(14,16)),a=Number(o.slice(17,19));return{year:t,month:r,day:e,hour:n,min:c,sec:a}};export{v as B,x as c,M as g};
