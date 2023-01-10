import{r as o,c as e,j as t,s as n,g,b as B}from"./index.6e976c01.js";import{i as C,r as y,c as $,S as H,d as N,j,l as O,a as L,b as R,f as V,m as F,h as W,B as J,g as q}from"./bidAtom.2aa8eb2f.js";import{M as G}from"./ModalFull.d85688e2.js";import{a as K}from"./tokenAtom.4a9834de.js";import{M as Q}from"./Modal.b8f055f5.js";import"./customAxios.6a5724de.js";import"./axios.77c802c4.js";import"./iconBase.a857eaf5.js";const U=a=>{const[c,s]=o.exports.useState(a),r=o.exports.useCallback(i=>{s(i.target.value)},[]);return[c,r,s]},X=U;function Y({currentPrice:a,onConfirmOpen:c,onSetBidPrice:s,onSetAutoBid:r}){const[i,d]=o.exports.useState(Number(a)+1e4),[l,u]=o.exports.useState(""),[m,,p]=X(""),x=h=>{const v=C(y(h.target.value));p(v)},b=()=>{const h=Number(y(m));s(h),c()},A=()=>{r(!1),b()},w=()=>{r(!0),b()};return e(Z,{children:[e(_,{children:[e("button",{type:"submit",children:[t("span",{children:C(i)}),t("span",{children:"\uC6D0"})]}),e("button",{type:"submit",children:[t("span",{children:C(i+1e4)}),t("span",{children:"\uC6D0"})]}),e("button",{type:"submit",children:[t("span",{children:C(i+2e4)}),t("span",{children:"\uC6D0"})]})]}),e(tt,{children:[t("input",{placeholder:`${C(Number(a)+1e4)}\uC6D0 \uC774\uC0C1`,value:m,onChange:x}),l&&t("div",{children:l})]}),e(ot,{children:[t(et,{type:"button",onClick:A,children:"1\uD68C \uC751\uCC30"}),t(nt,{type:"button",onClick:w,children:"\uC790\uB3D9 \uC751\uCC30"})]})]})}const Z=n.form`
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
`,_=n.div`
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
`,tt=n.div`
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
`,ot=n.div`
  & button {
    width: calc((100% - 10px) / 2);
    margin-right: 10px;
    background: var(--color-brown100);
    height: 42px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown100);
    font-weight: 500;
  }
`,et=n.button`
  && {
    background: var(--color-brown500);
  }
`,nt=n.button`
  && {
    background: var(--color-purple);
  }
`;function rt({lotName:a,thumbnail:c,currentPrice:s,closeTime:r}){const{month:i,day:d,hour:l,min:u}=$(r);return e(it,{children:[t(st,{children:t("img",{src:c||"",alt:"thumbnail"})}),e(at,{children:[t(ct,{children:a}),e(ut,{children:[t("div",{children:"\uD604\uC7AC\uAC00"}),t("div",{children:s})]}),e(lt,{children:[t("div",{children:"\uB9C8\uAC10\uC2DC\uAC04"}),t("div",{children:`${i}\uC6D4 ${d}\uC77C ${l}\uC2DC ${u}\uBD84`})]})]})]})}const it=n.div`
  margin-bottom: 42px;
  display: flex;
`,st=n.div`
  width: calc((100% - 16px) / 2);
  height: calc((100vw - 48px) / 2);
  background: var(--color-brown100);
  /* margin-bottom: 32px; */

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,at=n.div`
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
`,ct=n.div`
  width: 100%;
  font-size: var(--font-regular);
  white-space: pre-line;
`,ut=n.div`
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
`,lt=n.div`
  font-size: var(--font-small);
  font-weight: 500;
  color: var(--color-brown400);

  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
    letter-spacing: -0.0625em;
  }
`;function dt({bidPrice:a,isAutoBid:c,onConfirmClose:s}){const r=g(H),i=g(N),d=c?`/auction/auto/${i}`:`/auction/${i}`,l=g(K),u=B(j),m=o.exports.useCallback(async()=>{var p;(p=r==null?void 0:r.current)==null||p.publish({destination:d,body:JSON.stringify(a),headers:{Authorization:`Bearer ${l}`}}),s()},[]);return o.exports.useEffect(()=>{console.log(u)},[u]),e(Q,{buttonText:"\uC751\uCC30",onSubmit:m,onClose:s,children:[e(Ct,{children:[t("div",{children:c?"\uC790\uB3D9\uC751\uCC30\uAC00":"\uC751\uCC30\uAC00"}),t("div",{children:C(Number(a))})]}),e(mt,{children:[t("div",{children:"\uC751\uCC30 \uBC84\uD2BC\uC744 \uB204\uB974\uC2DC\uBA74 \uCDE8\uC18C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."}),t("div",{children:"\uB3D9\uC2DC \uC751\uCC30\uD560 \uACBD\uC6B0, \uC11C\uBC84\uC2DC\uAC01 \uAE30\uC900 \uC6B0\uC120\uC21C\uC704\uAC00 \uBD80\uC5EC\uB429\uB2C8\uB2E4."})]})]})}const Ct=n.div`
  font-size: var(--font-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:last-child {
    font-size: var(--font-2x-large);
    font-weight: 500;
    margin-top: 5px;
  }
`,mt=n.div`
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
`;function At(){const{name:a,thumbnail:c}=g(O),{currentPrice:s,auctionEndDateTime:r}=g(L),i=g(R),[d,l]=B(V),[u,m]=B(F),[p,x]=B(W),[b,A]=o.exports.useState(0),[w,h]=o.exports.useState(!1),[v,P]=o.exports.useState(""),[M,k]=o.exports.useState(!1),[I,E]=o.exports.useState(!1),D=()=>{const f=q(u);P(f)},S=o.exports.useCallback(()=>{h(!0)},[]),T=o.exports.useCallback(()=>{h(!1)},[]),z=f=>{A(f)};return o.exports.useEffect(()=>{l(s)},[s]),o.exports.useEffect(()=>{m(r)},[r]),o.exports.useEffect(()=>{x(i)},[i]),o.exports.useEffect(()=>{D();const f=setInterval(D,1e3);return v==="\uB9C8\uAC10"&&(E(!0),clearInterval(f)),()=>clearInterval(f)},[u,v]),e(G,{title:v,children:[t(rt,{lotName:a,thumbnail:c,currentPrice:C(Number(d)),closeTime:u}),!I&&t(Y,{currentPrice:d,onSetBidPrice:z,onConfirmOpen:S,onSetAutoBid:k}),t(J,{bidHistory:p}),w&&t(dt,{bidPrice:b,isAutoBid:M,onConfirmClose:T})]})}export{At as default};
