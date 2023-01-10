import{Q as B,t as _,v as F,w as T,r as l,x as W,y as b,z as q,s as N,a as z,c as S,j as g}from"./index.6e976c01.js";import{g as D}from"./customAxios.6a5724de.js";import{L as H}from"./LoadingIndicator.18dcab76.js";import"./axios.77c802c4.js";import"./tokenAtom.4a9834de.js";import"./Blocks.603b724f.js";class K extends B{constructor(t,r){super(t,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,r){super.setOptions({...t,behavior:_()},r)}getOptimisticResult(t){return t.behavior=_(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...r}={}){return this.fetch({...r,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,r){var i,s,n,o,a,u;const{state:c}=t,d=super.createResult(t,r),{isFetching:p,isRefetching:x}=d,f=p&&((i=c.fetchMeta)==null||(s=i.fetchMore)==null?void 0:s.direction)==="forward",h=p&&((n=c.fetchMeta)==null||(o=n.fetchMore)==null?void 0:o.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:F(r,(a=c.data)==null?void 0:a.pages),hasPreviousPage:T(r,(u=c.data)==null?void 0:u.pages),isFetchingNextPage:f,isFetchingPreviousPage:h,isRefetching:x&&!f&&!h}}}var Q={exports:{}},L={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=l.exports;function U(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Y=typeof Object.is=="function"?Object.is:U,G=y.useState,J=y.useEffect,X=y.useLayoutEffect,Z=y.useDebugValue;function ee(e,t){var r=t(),i=G({inst:{value:r,getSnapshot:t}}),s=i[0].inst,n=i[1];return X(function(){s.value=r,s.getSnapshot=t,C(s)&&n({inst:s})},[e,r,t]),J(function(){return C(s)&&n({inst:s}),e(function(){C(s)&&n({inst:s})})},[e]),Z(r),r}function C(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Y(e,r)}catch{return!0}}function te(e,t){return t()}var re=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?te:ee;L.useSyncExternalStore=y.useSyncExternalStore!==void 0?y.useSyncExternalStore:re;(function(e){e.exports=L})(Q);const ne=Q.exports.useSyncExternalStore,j=l.exports.createContext(!1),ie=()=>l.exports.useContext(j);j.Provider;function se(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const oe=l.exports.createContext(se()),ae=()=>l.exports.useContext(oe);function ce(e,t){return typeof e=="function"?e(...t):!!e}const ue=(e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},le=e=>{l.exports.useEffect(()=>{e.clearReset()},[e])},fe=({result:e,errorResetBoundary:t,useErrorBoundary:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&ce(r,[e.error,i]),de=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},he=(e,t)=>e.isLoading&&e.isFetching&&!t,ge=(e,t,r)=>(e==null?void 0:e.suspense)&&he(t,r),ve=(e,t,r)=>t.fetchOptimistic(e).then(({data:i})=>{e.onSuccess==null||e.onSuccess(i),e.onSettled==null||e.onSettled(i,null)}).catch(i=>{r.clearReset(),e.onError==null||e.onError(i),e.onSettled==null||e.onSettled(void 0,i)});function pe(e,t){const r=W({context:e.context}),i=ie(),s=ae(),n=r.defaultQueryOptions(e);n._optimisticResults=i?"isRestoring":"optimistic",n.onError&&(n.onError=b.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=b.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=b.batchCalls(n.onSettled)),de(n),ue(n,s),le(s);const[o]=l.exports.useState(()=>new t(r,n)),a=o.getOptimisticResult(n);if(ne(l.exports.useCallback(u=>i?()=>{}:o.subscribe(b.batchCalls(u)),[o,i]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),l.exports.useEffect(()=>{o.setOptions(n,{listeners:!1})},[n,o]),ge(n,a,i))throw ve(n,o,s);if(fe({result:a,errorResetBoundary:s,useErrorBoundary:n.useErrorBoundary,query:o.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:o.trackResult(a)}function xe(e,t,r){const i=q(e,t,r);return pe(i,K)}const me=N.div`
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
    margin-bottom: 16px;
    .untitled {
      color: var(--color-brown300);
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    color: var(--color-brown300);
    .price-content {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      .unit {
        margin-left: 4px;
      }
    }
  }
`,ye=({productInfo:e})=>{const t=z();return S(me,{onClick:()=>{t(`/register/1/${e.id}`)},children:[e.thumbnail?g("img",{src:e.thumbnail}):g("div",{className:"none-image"}),g("div",{className:"title",children:e.name===""?g("p",{className:"untitled",children:"Untitled"}):e.name}),S("div",{className:"price",children:[g("p",{className:"price-title",children:"\uC2DC\uC791\uAC00"}),S("div",{className:"price-content",children:["-",g("p",{className:"unit",children:"\uC6D0"})]})]})]})};var M=new Map,w=new WeakMap,I=0,be=void 0;function we(e){return e?(w.has(e)||(I+=1,w.set(e,I.toString())),w.get(e)):"0"}function Se(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?we(e.root):e[t])}).toString()}function Re(e){var t=Se(e),r=M.get(t);if(!r){var i=new Map,s,n=new IntersectionObserver(function(o){o.forEach(function(a){var u,c=a.isIntersecting&&s.some(function(d){return a.intersectionRatio>=d});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(u=i.get(a.target))==null||u.forEach(function(d){d(c,a)})})},e);s=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:i},M.set(t,r)}return r}function Pe(e,t,r,i){if(r===void 0&&(r={}),i===void 0&&(i=be),typeof window.IntersectionObserver>"u"&&i!==void 0){var s=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),function(){}}var n=Re(r),o=n.id,a=n.observer,u=n.elements,c=u.get(e)||[];return u.has(e)||u.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(u.delete(e),a.unobserve(e)),u.size===0&&(a.disconnect(),M.delete(o))}}function Ee(e){var t,r=e===void 0?{}:e,i=r.threshold,s=r.delay,n=r.trackVisibility,o=r.rootMargin,a=r.root,u=r.triggerOnce,c=r.skip,d=r.initialInView,p=r.fallbackInView,x=r.onChange,f=l.exports.useState(null),h=f[0],A=f[1],R=l.exports.useRef(),V=l.exports.useState({inView:!!d,entry:void 0}),P=V[0],O=V[1];R.current=x,l.exports.useEffect(function(){if(!(c||!h)){var m;return m=Pe(h,function(k,E){O({inView:k,entry:E}),R.current&&R.current(k,E),E.isIntersecting&&u&&m&&(m(),m=void 0)},{root:a,rootMargin:o,threshold:i,trackVisibility:n,delay:s},p),function(){m&&m()}}},[Array.isArray(i)?i.toString():i,h,a,o,u,c,n,p,s]);var $=(t=P.entry)==null?void 0:t.target;l.exports.useEffect(function(){!h&&$&&!u&&!c&&O({inView:!!d,entry:void 0})},[h,$,u,c,d]);var v=[A,P.inView,P.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const Ce=N.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,Me=N.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ie=()=>{const e=D(),[t,r]=l.exports.useState([]),[i,s]=Ee(),n=({pageParam:f=0})=>e.get(`api/v1/items/my-items?states=TEMPORARY&size=6&page=${f}`),{data:o,error:a,fetchNextPage:u,hasNextPage:c,isFetching:d,isFetchingNextPage:p,status:x}=xe({queryKey:["projects"],queryFn:n,getNextPageParam:(f,h)=>{if(!f.data.last)return f.data.number+1}});return l.exports.useEffect(()=>{if(!d&&x==="success"){const f=o.pages.length;r(h=>[...h,...o.pages[f-1].data.content])}},[d,x,c]),l.exports.useEffect(()=>{s&&u()},[s]),S(Ce,{children:[t.map(f=>g(ye,{productInfo:f},f.id)),c===!0&&g(Me,{ref:i,children:g(H,{})})]})};export{Ie as default};
