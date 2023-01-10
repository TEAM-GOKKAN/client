import{c as d,j as u,s as i,e as s,i as a}from"./index.6e976c01.js";import{g as c}from"./customAxios.6a5724de.js";const C=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),M=e=>e.replace(/,/g,""),T=e=>{const o=new Date(e),r=new Date,t=Number(o)-Number(r);if(t<0)return"\uB9C8\uAC10";const n=Math.floor(t/(1e3*60*60*24)),m=Math.floor(t/(1e3*60*60)%24),l=Math.floor(t/(1e3*60)%60),p=Math.floor(t/1e3%60);return`${n}\uC77C ${m}\uC2DC\uAC04 ${l}\uBD84 ${p}\uCD08`},b=e=>{const o=new Date(e),r=new Date,t=Number(r)-Number(o);return t<0?"0\uCD08 \uC804":t<1e3*60?`${Math.floor(t/1e3%60)}\uCD08 \uC804`:t<1e3*60*60?`${Math.floor(t/6e4%60)}\uBD84 \uC804`:t<1e3*60*60*24?`${Math.floor(t/36e5%24)}\uC2DC\uAC04 \uC804`:`${Math.floor(t/864e5)}\uC77C \uC804`};function I({bidHistory:e}){return d(g,{children:[u(h,{children:"\uC785\uCC30 \uB0B4\uC5ED"}),u(A,{children:e.map(o=>{if(!o)return"";const r=b(o.bidTime),t=C(o.price);return d(x,{children:[u(D,{children:o.memberId}),u(w,{children:r}),d(v,{children:[t,"\uC6D0"]})]},`${o.memberId}${o.price}`)})})]})}const g=i.div`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`,h=i.h4`
  font-size: var(--font-regular);
  font-weight: 500;
  margin-bottom: 28px;
`,A=i.div`
  position: relative;
`,x=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  & * {
    font-size: var(--font-small);
  }
`,D=i.span`
  color: var(--color-brown300);
  font-weight: 500;
  letter-spacing: normal;
`,w=i.span`
  position: absolute;
  left: 33.33%;
  color: var(--color-brown300);
  letter-spacing: normal;
`,v=i.span`
  font-weight: 500;
  letter-spacing: normal;
`,K=e=>{const o=Number(e.slice(0,4)),r=Number(e.slice(5,7)),t=Number(e.slice(8,10)),n=Number(e.slice(8,10)),m=Number(e.slice(14,16)),l=Number(e.slice(17,19));return{year:o,month:r,day:t,hour:n,min:m,sec:l}},f=s(7),[N]=a(e=>({queryKey:["lotDetail",e(f)],queryFn:async({queryKey:[,o]})=>{const r=c(),{data:t}=await r.get("/api/v1/items/details/auction",{params:{itemId:o}});return t}})),[$]=a(e=>({queryKey:["expertValuation",e(f)],queryFn:async({queryKey:[,o]})=>{const r=c(),{data:t}=await r.get("/api/v1/expert/comment",{params:{itemId:o}});return t}})),[H]=a(e=>({queryKey:["sellerInfo",e(f)],queryFn:async({queryKey:[,o]})=>{const r=c(),{data:t}=await r.get("/api/v1/users/seller",{params:{itemId:o}});return t}})),y=s(2),[F]=a(e=>({queryKey:["bidInfo",e(y)],queryFn:async({queryKey:[,o]})=>{const r=c(),{data:t}=await r.get("/api/v1/auction",{params:{auctionId:o}});return t}})),[S]=a(e=>({queryKey:["bidHistory",e(y)],queryFn:async({queryKey:[,o]})=>{const r=c(),{data:t}=await r.get("/api/v1/auction/history",{params:{auctionId:o}});return t}})),j=s(null),E=s(0),k=s([]),z=s(""),P=s(""),V=s("");export{I as B,j as S,F as a,S as b,K as c,y as d,$ as e,E as f,T as g,k as h,C as i,P as j,V as k,N as l,z as m,M as r,H as s};
