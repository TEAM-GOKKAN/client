import{r as o,b as e,j as t,s as r,g as h,c as x}from"./index.bf00bd78.js";import{S as k,l as T,a as S,b as E,c as O,h as N,d as $}from"./lotDetailAtom.0741ae12.js";import{i as d,r as y}from"./handleCommas.3e182434.js";import{M as j}from"./ModalFull.9fd98d21.js";import{c as H,B as V,g as J}from"./convertDateFormat.be143b14.js";import{M as L}from"./Modal.71f09834.js";import"./customAxios.cf9d9e49.js";import"./axios.77c802c4.js";import"./iconBase.6cff797d.js";const Q=a=>{const[s,n]=o.exports.useState(a),i=o.exports.useCallback(c=>{n(c.target.value)},[]);return[s,i,n]},W=Q;function F({currentPrice:a,onConfirmOpen:s,onSetBidPrice:n}){const[i,c]=o.exports.useState(Number(a)+1e4),[u,p]=o.exports.useState(""),[l,,f]=W(""),g=m=>{const b=d(y(m.target.value));f(b)},v=()=>{const m=Number(y(l));n(m),s()};return e(R,{children:[e(U,{children:[e("button",{type:"submit",children:[t("span",{children:d(i)}),t("span",{children:"\uC6D0"})]}),e("button",{type:"submit",children:[t("span",{children:d(i+1e4)}),t("span",{children:"\uC6D0"})]}),e("button",{type:"submit",children:[t("span",{children:d(i+2e4)}),t("span",{children:"\uC6D0"})]})]}),e(Z,{children:[t("input",{placeholder:`${d(Number(a)+1e4)}\uC6D0 \uC774\uC0C1`,value:l,onChange:g}),u&&t("div",{children:u})]}),t(Y,{children:t(q,{type:"button",onClick:v,children:"1\uD68C \uC751\uCC30"})})]})}const R=r.form`
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
`,U=r.div`
  margin-bottom: 18px;

  & > button {
    width: calc((100% - 20px) / 3);
    margin-right: 10px;
    background: var(--color-brown100);
    height: 42px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown100);
    background: var(--color-brown400);
    font-weight: 500;
    letter-spacing: normal;
  }
`,Z=r.div`
  margin-bottom: 10px;

  & > input {
    padding-left: 12px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown500);
    letter-spacing: normal;
  }

  & > div {
    margin-top: 6px;
    font-size: var(--font-micro);
    color: var(--color-orange);
  }
`,Y=r.div`
  & button {
    width: calc((100% - 10px) / 2);
    margin-right: 10px;
    background: var(--color-brown100);
    height: 42px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown100);
    /* background: var(--color-brown500); */
    font-weight: 500;

    /* &:last-child {
      background: var(--color-purple);
    } */
  }
`,q=r.button`
  && {
    background: var(--color-brown500);
  }
`;r.button`
  && {
    background: var(--color-purple);
  }
`;function G({lotName:a,thumbnail:s,currentPrice:n,closeTime:i}){const{month:c,day:u,hour:p,min:l}=H(i);return e(K,{children:[t(X,{children:t("img",{src:s||"",alt:"thumbnail"})}),e(_,{children:[t(tt,{children:a}),e(ot,{children:[t("div",{children:"\uD604\uC7AC\uAC00"}),t("div",{children:n})]}),e(et,{children:[t("div",{children:"\uB9C8\uAC10\uC2DC\uAC04"}),t("div",{children:`${c}\uC6D4 ${u}\uC77C ${p}\uC2DC ${l}\uBD84`})]})]})]})}const K=r.div`
  margin-bottom: 42px;
  display: flex;
`,X=r.div`
  width: calc((100% - 16px) / 2);
  height: calc((100vw - 48px) / 2);
  background: var(--color-brown100);
  /* margin-bottom: 32px; */

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,_=r.div`
  width: calc((100% - 16px) / 2);
  margin-left: 16px;
  white-space: pre-line;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & * {
    letter-spacing: normal;
  }
`,tt=r.div`
  width: 100%;
  font-size: var(--font-regular);
  white-space: pre-line;
`,ot=r.div`
  /* margin-top: 24px; */
  position: absolute;
  bottom: 48px;
  font-size: var(--font-x-large);
  font-weight: 500;

  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
    letter-spacing: -0.0625em;
  }
`,et=r.div`
  font-size: var(--font-small);
  font-weight: 500;
  color: var(--color-brown400);

  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
    letter-spacing: -0.0625em;
  }
`,rt="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTY2MzE0NzQzIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY3MjgyMzM5OX0.zwqKkWgQOOfL8eTuQ-vyZDj3aQ3USB7NkCy7nZBSa7k",nt=1;function it({bidPrice:a,onConfirmClose:s}){const n=h(k),i=o.exports.useCallback(async()=>{var c;(c=n==null?void 0:n.current)==null||c.publish({destination:`/auction/${nt}`,body:JSON.stringify(a),headers:{Authorization:`Bearer ${rt}`}})},[]);return e(L,{buttonText:"\uC751\uCC30",onSubmit:i,onClose:s,children:[e(at,{children:[t("div",{children:"\uC751\uCC30\uAC00"}),t("div",{children:a})]}),e(ct,{children:[t("div",{children:"\uC751\uCC30 \uBC84\uD2BC\uC744 \uB204\uB974\uC2DC\uBA74 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."}),t("div",{children:"\uB3D9\uC2DC \uC751\uCC30\uD560 \uACBD\uC6B0, \uC11C\uBC84\uC2DC\uAC01 \uAE30\uC900 \uC6B0\uC120\uC21C\uC704\uAC00 \uBD80\uC5EC\uB429\uB2C8\uB2E4."})]})]})}const at=r.div`
  font-size: var(--font-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:last-child {
    font-size: var(--font-2x-large);
    font-weight: 500;
    margin-top: 5px;
  }
`,ct=r.div`
  font-size: var(--font-small);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    &:first-child {
      color: var(--color-orange);
      margin-bottom: 6px;
    }

    &:last-child {
      color: var(--color-brown300);
    }
  }
`;function gt(){const{name:a,thumbnail:s}=h(T),{currentPrice:n,auctionEndDateTime:i}=h(S),c=h(E),[u,p]=x(O),[l,f]=x(N),[g,v]=x($),[m,b]=o.exports.useState(0),[D,B]=o.exports.useState(!1),[A,I]=o.exports.useState(""),w=()=>{const C=J(l);I(C)},z=o.exports.useCallback(()=>{B(!0)},[]),M=o.exports.useCallback(()=>{B(!1)},[]),P=C=>{b(C)};return o.exports.useEffect(()=>{p(n)},[n]),o.exports.useEffect(()=>{f(i)},[i]),o.exports.useEffect(()=>{v(c)},[c]),o.exports.useEffect(()=>{w();const C=setInterval(w,1e3);return()=>clearInterval(C)},[l]),e(j,{title:A,children:[t(G,{lotName:a,thumbnail:s,currentPrice:d(u),closeTime:l}),t(F,{currentPrice:u,onSetBidPrice:P,onConfirmOpen:z}),t(V,{bidHistory:g}),D&&t(it,{bidPrice:m,onConfirmClose:M})]})}export{gt as default};
