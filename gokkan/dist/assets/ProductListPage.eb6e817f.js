import{Q as I,q as k,t as T,v as q,r as l,w as z,x as E,y as D,s as R,a as W,b as P,j as f}from"./index.bf00bd78.js";import{c as G}from"./customAxios.cf9d9e49.js";import{L as H}from"./LoadingIndicator.9054c4de.js";import{i as B}from"./handleCommas.3e182434.js";class K extends I{constructor(t,r){super(t,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,r){super.setOptions({...t,behavior:k()},r)}getOptimisticResult(t){return t.behavior=k(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,r){var n,s,i,a,o,c;const{state:u}=t,d=super.createResult(t,r),{isFetching:x,isRefetching:S}=d,v=x&&((n=u.fetchMeta)==null||(s=n.fetchMore)==null?void 0:s.direction)==="forward",h=x&&((i=u.fetchMeta)==null||(a=i.fetchMore)==null?void 0:a.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:T(r,(o=u.data)==null?void 0:o.pages),hasPreviousPage:q(r,(c=u.data)==null?void 0:c.pages),isFetchingNextPage:v,isFetchingPreviousPage:h,isRefetching:S&&!v&&!h}}}var F={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=l.exports;function U(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J=typeof Object.is=="function"?Object.is:U,X=w.useState,Y=w.useEffect,Z=w.useLayoutEffect,ee=w.useDebugValue;function te(e,t){var r=t(),n=X({inst:{value:r,getSnapshot:t}}),s=n[0].inst,i=n[1];return Z(function(){s.value=r,s.getSnapshot=t,L(s)&&i({inst:s})},[e,r,t]),Y(function(){return L(s)&&i({inst:s}),e(function(){L(s)&&i({inst:s})})},[e]),ee(r),r}function L(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!J(e,r)}catch{return!0}}function re(e,t){return t()}var ne=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?re:te;A.useSyncExternalStore=w.useSyncExternalStore!==void 0?w.useSyncExternalStore:ne;(function(e){e.exports=A})(F);const ie=F.exports.useSyncExternalStore,j=l.exports.createContext(!1),se=()=>l.exports.useContext(j);j.Provider;function oe(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const ae=l.exports.createContext(oe()),ce=()=>l.exports.useContext(ae);function ue(e,t){return typeof e=="function"?e(...t):!!e}const le=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},de=e=>{l.exports.useEffect(()=>{e.clearReset()},[e])},fe=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>e.isError&&!t.isReset()&&!e.isFetching&&ue(r,[e.error,n]),he=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},ge=(e,t)=>e.isLoading&&e.isFetching&&!t,ve=(e,t,r)=>(e==null?void 0:e.suspense)&&ge(t,r),pe=(e,t,r)=>t.fetchOptimistic(e).then(({data:n})=>{e.onSuccess==null||e.onSuccess(n),e.onSettled==null||e.onSettled(n,null)}).catch(n=>{r.clearReset(),e.onError==null||e.onError(n),e.onSettled==null||e.onSettled(void 0,n)});function xe(e,t){const r=z({context:e.context}),n=se(),s=ce(),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=E.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=E.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=E.batchCalls(i.onSettled)),he(i),le(i,s),de(s);const[a]=l.exports.useState(()=>new t(r,i)),o=a.getOptimisticResult(i);if(ie(l.exports.useCallback(c=>n?()=>{}:a.subscribe(E.batchCalls(c)),[a,n]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),l.exports.useEffect(()=>{a.setOptions(i,{listeners:!1})},[i,a]),ve(i,o,n))throw pe(i,a,s);if(fe({result:o,errorResetBoundary:s,useErrorBoundary:i.useErrorBoundary,query:a.getCurrentQuery()}))throw o.error;return i.notifyOnChangeProps?o:a.trackResult(o)}function me(e,t,r){const n=D(e,t,r);return xe(n,K)}var V=new Map,N=new WeakMap,Q=0,ye=void 0;function be(e){return e?(N.has(e)||(Q+=1,N.set(e,Q.toString())),N.get(e)):"0"}function Pe(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?be(e.root):e[t])}).toString()}function we(e){var t=Pe(e),r=V.get(t);if(!r){var n=new Map,s,i=new IntersectionObserver(function(a){a.forEach(function(o){var c,u=o.isIntersecting&&s.some(function(d){return o.intersectionRatio>=d});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(c=n.get(o.target))==null||c.forEach(function(d){d(u,o)})})},e);s=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:i,elements:n},V.set(t,r)}return r}function Se(e,t,r,n){if(r===void 0&&(r={}),n===void 0&&(n=ye),typeof window.IntersectionObserver>"u"&&n!==void 0){var s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),function(){}}var i=we(r),a=i.id,o=i.observer,c=i.elements,u=c.get(e)||[];return c.has(e)||c.set(e,u),u.push(t),o.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(c.delete(e),o.unobserve(e)),c.size===0&&(o.disconnect(),V.delete(a))}}function Re(e){var t,r=e===void 0?{}:e,n=r.threshold,s=r.delay,i=r.trackVisibility,a=r.rootMargin,o=r.root,c=r.triggerOnce,u=r.skip,d=r.initialInView,x=r.fallbackInView,S=r.onChange,v=l.exports.useState(null),h=v[0],$=v[1],m=l.exports.useRef(),g=l.exports.useState({inView:!!d,entry:void 0}),y=g[0],C=g[1];m.current=S,l.exports.useEffect(function(){if(!(u||!h)){var b;return b=Se(h,function(_,M){C({inView:_,entry:M}),m.current&&m.current(_,M),M.isIntersecting&&c&&b&&(b(),b=void 0)},{root:o,rootMargin:a,threshold:n,trackVisibility:i,delay:s},x),function(){b&&b()}}},[Array.isArray(n)?n.toString():n,h,o,a,c,u,i,x,s]);var O=(t=y.entry)==null?void 0:t.target;l.exports.useEffect(function(){!h&&O&&!c&&!u&&C({inView:!!d,entry:void 0})},[h,O,c,u,d]);var p=[$,y.inView,y.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const Ce=R.div`
  display: flex;
  flex-direction: column;
  width: calc((100vw - 60px) / 2);
  margin-bottom: 48px;
  img,
  .none-image {
    height: 227px;
    width: 100%;
    margin-bottom: 8px;
    border: 0.5px solid var(--color-brown200);
    background-color: var(--color-brown200);
  }
  .title {
    margin-bottom: 12px;
    .untitled {
      color: var(--color-brown300);
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    color: var(--color-brown300);
    [data-price='true'] {
      color: var(--color-brown500);
      font-size: 16px;
      font-weight: 600;
      font-family: poppins;
    }
    .price-content {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      .unit {
        margin-left: 4px;
      }
    }
  }
`,Ee=({productInfo:e})=>{const[t,r]=l.exports.useState("-"),n=W(),s=()=>{n(`/register/1/${e.id}`)};return l.exports.useEffect(()=>{e.startPrice&&e.startPrice!==0&&r(B(e.startPrice))},[e.startPrice]),P(Ce,{onClick:s,children:[e.thumbnail?f("img",{src:e.thumbnail}):f("div",{className:"none-image"}),f("div",{className:"title",children:e.name===""?f("p",{className:"untitled",children:"Untitled"}):e.name}),P("div",{className:"price",children:[f("p",{className:"price-title",children:"\uC2DC\uC791\uAC00"}),P("div",{className:"price-content","data-price":t!=="-",children:[t,f("p",{className:"unit",children:"\uC6D0"})]})]})]})},Ne=R.div`
  .total-count {
    margin-bottom: 19px;
    font-size: 14px;
    font-weight: 500;
  }
`,Me=R.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 15px;
`,Le=({productList:e,productListNumber:t})=>{const r=B(Number(t));return P(Ne,{children:[P("div",{className:"total-count",children:["\uCD1D ",r," \uAC1C"]}),f(Me,{children:e.map(n=>f(Ee,{productInfo:n},n.id))})]})},Ve=R.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 24px;
  }
`,$e=R.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Be=({url:e,queryKey:t,title:r})=>{const[n,s]=l.exports.useState([]),[i,a]=l.exports.useState(0),[o,c]=Re(),u=({pageParam:g=0})=>G.get(`${e}size=6&page=${g}`),{data:d,error:x,fetchNextPage:S,hasNextPage:v,isFetching:h,isFetchingNextPage:$,status:m}=me({queryKey:[t],queryFn:u,getNextPageParam:(g,y)=>{if(!g.data.last)return g.data.number+1}});return l.exports.useEffect(()=>{if(!h&&m==="success"){const g=d.pages.length;a(d.pages[0].data.totalElements),s(y=>{const C=d.pages[g-1].data.content;return[...y,...C]})}},[h,m,v]),l.exports.useEffect(()=>{c&&S()},[c]),P(Ve,{children:[f("div",{className:"title",children:r}),f(Le,{productList:n,productListNumber:i}),v===!0&&f($e,{ref:o,children:f(H,{})})]})};export{Be as P};
