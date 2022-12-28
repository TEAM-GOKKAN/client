import{c as L,d as R,j as M,a as _,b as W,g as ae,F as se}from"./index.c94ae585.js";import{s as B}from"./styled-components.browser.esm.ae46c4dc.js";const le=Symbol(),q=Symbol();L(()=>[]);function fe(t){let a,s;const v={getItem:m=>{var g,l;const w=S=>{if(S=S||"",a!==S){try{s=JSON.parse(S)}catch{return q}a=S}return s},j=(l=(g=t())==null?void 0:g.getItem(m))!=null?l:null;return j instanceof Promise?j.then(w):w(j)},setItem:(m,g)=>{var l;return(l=t())==null?void 0:l.setItem(m,JSON.stringify(g))},removeItem:m=>{var g;return(g=t())==null?void 0:g.removeItem(m)}};return typeof window<"u"&&typeof window.addEventListener=="function"&&(v.subscribe=(m,g)=>{const l=w=>{w.key===m&&w.newValue&&g(JSON.parse(w.newValue))};return window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}}),v}const de=fe(()=>typeof window<"u"?window.localStorage:void 0);function k(t,a,s=de){const v=()=>{const l=s.getItem(t);return l instanceof Promise?l.then(w=>w===q?a:w):l===q?a:l},m=L(s.delayInit?a:v());return m.onMount=l=>{let w;if(s.subscribe&&(w=s.subscribe(t,l),l(v())),s.delayInit){const j=v();j instanceof Promise?j.then(l):l(j)}return w},L(l=>l(m),(l,w,j)=>{const S=typeof j=="function"?j(l(m)):j;return S===le?(w(m,a),s.removeItem(t)):(w(m,S),s.setItem(t,S))})}const pe=k("name",""),me=k("nickname",""),he=k("nicknamecheck",""),ye=k("address",""),ge=k("addressdetail",""),be=k("phone","");k("imgurl","/src/asset/userDefaultImage.png");k("imgfile","");const Ce=B.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  width: 100%;
  input {
    margin-left: calc(2vw + 18px);
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
  }
`,ve=()=>{const[t,a]=R(pe);return M(Ce,{children:[_("div",{children:"\uC774\uB984"}),_("input",{type:"text",placeholder:"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",value:t,onChange:v=>{a(v.target.value)}})]})},we=B.div`
  position: relative;
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  input {
    margin-left: 2vw;
    padding-left: 2vw;
    width: 70vw;
    font-size: 18px;
    &[data-duplicate=''] {
      border: 1px solid black;
    }
    &[data-duplicate='false'] {
      border: 2px solid red;
    }
    &[data-duplicate='true'] {
      border: 2px solid green;
    }
    &[data-duplicate='checking'] {
      border: 2px solid orange;
    }
  }
  .available {
    font-size: 12px;
    color: green;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
  .unavailable {
    font-size: 12px;
    color: red;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
  .checking {
    font-size: 12px;
    color: orange;
    position: absolute;
    top: 3vh;
    left: 15vw;
  }
`,Oe=()=>{const[t,a]=R(me),[s,v]=R(he);return M(we,{children:[_("div",{children:"\uB2C9\uB124\uC784"}),_("input",{type:"text",placeholder:"\uB2C9\uB124\uC784\uC744 \uC9C0\uC5B4\uC8FC\uC138\uC694",value:t,onChange:l=>{a(l.target.value)},onBlur:()=>{},"data-duplicate":s}),s==="true"&&_("div",{className:"available",children:"* \uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uB2C9\uB124\uC784\uC785\uB2C8\uB2E4."}),s==="false"&&_("div",{className:"unavailable",children:"* \uC911\uBCF5\uB41C \uB2C9\uB124\uC784\uC785\uB2C8\uB2E4."}),s==="checking"&&_("div",{className:"checking",children:"* \uB2C9\uB124\uC784 \uC911\uBCF5 \uD655\uC778 \uC911\uC785\uB2C8\uB2E4."})]})};var X={},Y={},T={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.postcodeScriptUrl=void 0;var a="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";t.postcodeScriptUrl="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";var s=function(){var m=null;return function(){var g=0<arguments.length&&arguments[0]!==void 0?arguments[0]:a;return m||(m=new Promise(function(l,w){var j=document.createElement("script");j.src=g,j.onload=function(){var S,P;return(S=window)!==null&&S!==void 0&&(P=S.daum)!==null&&P!==void 0&&P.Postcode?l(window.daum.Postcode):void w(new Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."))},j.onerror=function(S){return w(S)},j.id="daum_postcode_script",document.body.appendChild(j)}),m)}}(),v=s;t.default=v})(T);(function(t){function a(u){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(W.exports),v=l(T),m=["scriptUrl","className","style","defaultQuery","autoClose","errorMessage","onComplete","onClose","onResize","onSearch"];function g(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,f=new WeakMap;return(g=function(d){return d?f:c})(u)}function l(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||a(u)!=="object"&&typeof u!="function")return{default:u};var f=g(c);if(f&&f.has(u))return f.get(u);var d={},F=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in u)if(E!="default"&&Object.prototype.hasOwnProperty.call(u,E)){var x=F?Object.getOwnPropertyDescriptor(u,E):null;x&&(x.get||x.set)?Object.defineProperty(d,E,x):d[E]=u[E]}return d.default=u,f&&f.set(u,d),d}function w(u,c){var f=Object.keys(u);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(u);c&&(d=d.filter(function(F){return Object.getOwnPropertyDescriptor(u,F).enumerable})),f.push.apply(f,d)}return f}function j(u){for(var c,f=1;f<arguments.length;f++)c=arguments[f]==null?{}:arguments[f],f%2?w(Object(c),!0).forEach(function(d){o(u,d,c[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(c)):w(Object(c)).forEach(function(d){Object.defineProperty(u,d,Object.getOwnPropertyDescriptor(c,d))});return u}function S(u,c){if(u==null)return{};var f,d,F=P(u,c);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(u);for(d=0;d<E.length;d++)f=E[d],0<=c.indexOf(f)||Object.prototype.propertyIsEnumerable.call(u,f)&&(F[f]=u[f])}return F}function P(u,c){if(u==null)return{};var f,d,F={},E=Object.keys(u);for(d=0;d<E.length;d++)f=E[d],0<=c.indexOf(f)||(F[f]=u[f]);return F}function A(u,c){if(!(u instanceof c))throw new TypeError("Cannot call a class as a function")}function I(u,c){for(var f,d=0;d<c.length;d++)f=c[d],f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(u,f.key,f)}function U(u,c,f){return c&&I(u.prototype,c),f&&I(u,f),u}function p(u,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(c&&c.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),c&&b(u,c)}function b(u,c){return b=Object.setPrototypeOf||function(f,d){return f.__proto__=d,f},b(u,c)}function C(u){var c=r();return function(){var f,d=n(u);if(c){var F=n(this).constructor;f=Reflect.construct(d,arguments,F)}else f=d.apply(this,arguments);return h(this,f)}}function h(u,c){return c&&(a(c)==="object"||typeof c=="function")?c:e(u)}function e(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function r(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function n(u){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)},n(u)}function o(u,c,f){return c in u?Object.defineProperty(u,c,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[c]=f,u}var i=s.default.createElement("p",null,"\uD604\uC7AC Daum \uC6B0\uD3B8\uBC88\uD638 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694."),O={width:"100%",height:400},y={scriptUrl:v.postcodeScriptUrl,errorMessage:i,autoClose:!0},D=function(u){function c(){var d;A(this,c);for(var F=arguments.length,E=Array(F),x=0;x<F;x++)E[x]=arguments[x];return d=f.call.apply(f,[this].concat(E)),o(e(d),"wrap",(0,s.createRef)()),o(e(d),"state",{hasError:!1}),o(e(d),"initiate",function(z){if(d.wrap.current){var N=d.props;N.scriptUrl,N.className,N.style;var re=N.defaultQuery,Q=N.autoClose;N.errorMessage;var J=N.onComplete,te=N.onClose,ne=N.onResize,oe=N.onSearch,ue=S(N,m),ie=new z(j(j({},ue),{},{oncomplete:function(ce){J&&J(ce),Q&&d.wrap.current&&d.wrap.current.remove()},onsearch:oe,onresize:ne,onclose:te,width:"100%",height:"100%"}));ie.embed(d.wrap.current,{q:re,autoClose:Q})}}),o(e(d),"onError",function(z){console.error(z),d.setState({hasError:!0})}),d}p(c,u);var f=C(c);return U(c,[{key:"componentDidMount",value:function(){var F=this.initiate,E=this.onError,x=this.props.scriptUrl;x&&(0,v.default)(x).then(F).catch(E)}},{key:"render",value:function(){var F=this.props,E=F.className,x=F.style,z=F.errorMessage,N=this.state.hasError;return s.default.createElement("div",{ref:this.wrap,className:E,style:j(j({},O),x)},N&&z)}}]),c}(s.Component);o(D,"defaultProps",y);var $=D;t.default=$})(Y);var Z={};(function(t){function a(p){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},a(p)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=W.exports,v=l(T),m=["defaultQuery","left","top","popupKey","popupTitle","autoClose","onComplete","onResize","onClose","onSearch","onError"];function g(p){if(typeof WeakMap!="function")return null;var b=new WeakMap,C=new WeakMap;return(g=function(h){return h?C:b})(p)}function l(p,b){if(!b&&p&&p.__esModule)return p;if(p===null||a(p)!=="object"&&typeof p!="function")return{default:p};var C=g(b);if(C&&C.has(p))return C.get(p);var h={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in p)if(r!="default"&&Object.prototype.hasOwnProperty.call(p,r)){var n=e?Object.getOwnPropertyDescriptor(p,r):null;n&&(n.get||n.set)?Object.defineProperty(h,r,n):h[r]=p[r]}return h.default=p,C&&C.set(p,h),h}function w(p,b){var C=Object.keys(p);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(p);b&&(h=h.filter(function(e){return Object.getOwnPropertyDescriptor(p,e).enumerable})),C.push.apply(C,h)}return C}function j(p){for(var b,C=1;C<arguments.length;C++)b=arguments[C]==null?{}:arguments[C],C%2?w(Object(b),!0).forEach(function(h){S(p,h,b[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(b)):w(Object(b)).forEach(function(h){Object.defineProperty(p,h,Object.getOwnPropertyDescriptor(b,h))});return p}function S(p,b,C){return b in p?Object.defineProperty(p,b,{value:C,enumerable:!0,configurable:!0,writable:!0}):p[b]=C,p}function P(p,b){if(p==null)return{};var C,h,e=A(p,b);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(p);for(h=0;h<r.length;h++)C=r[h],0<=b.indexOf(C)||Object.prototype.propertyIsEnumerable.call(p,C)&&(e[C]=p[C])}return e}function A(p,b){if(p==null)return{};var C,h,e={},r=Object.keys(p);for(h=0;h<r.length;h++)C=r[h],0<=b.indexOf(C)||(e[C]=p[C]);return e}function I(){var p=0<arguments.length&&arguments[0]!==void 0?arguments[0]:v.postcodeScriptUrl;(0,s.useEffect)(function(){(0,v.default)(p)},[p]);var b=(0,s.useCallback)(function(C){var h=j({},C),e=h.defaultQuery,r=h.left,n=h.top,o=h.popupKey,i=h.popupTitle,O=h.autoClose,y=h.onComplete,D=h.onResize,$=h.onClose,u=h.onSearch,c=h.onError,f=P(h,m);return(0,v.default)(p).then(function(d){var F=new d(j(j({},f),{},{oncomplete:y,onsearch:u,onresize:D,onclose:$}));F.open({q:e,left:r,top:n,popupTitle:i,popupKey:o,autoClose:O})}).catch(c)},[p]);return b}var U=I;t.default=U})(Z);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DaumPostcodeEmbed",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"useDaumPostcodePopup",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"loadPostcode",{enumerable:!0,get:function(){return v.default}}),t.default=void 0;var a=m(Y),s=m(Z),v=m(T);function m(l){return l&&l.__esModule?l:{default:l}}var g=a.default;t.default=g})(X);const je=ae(X),Pe=B.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  .address {
    margin-left: calc(2vw + 18px);
    padding-left: 2vw;
    width: 50vw;
    font-size: 18px;
    border: 1px solid black;
  }
  button {
    margin-left: 2vw;
  }
`,Se=B.div`
  input {
    margin-left: calc(54px + 2vw);
    width: 72vw;
    font-size: 18px;
    margin-top: 1vh;
    border: 1px solid black;
    padding-left: 2vw;
  }
`,_e=B.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
  background-color: white;
  display: flex;
  justify-content: center;
  .daum-address {
    margin-top: 5vh;
    width: 90%;
  }
`,Fe=()=>{const[t,a]=R(ye),[s,v]=R(ge),[m,g]=W.exports.useState(!1);return M(se,{children:[M(Pe,{children:[_("div",{children:"\uC8FC\uC18C"}),_("div",{className:"address",children:t}),_("button",{onClick:()=>{g(!0)},children:"\uC8FC\uC18C\uCC3E\uAE30"})]}),_(Se,{children:_("input",{type:"text",placeholder:"\uC0C1\uC138 \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",value:s,onChange:S=>{v(S.target.value)}})}),m&&_(_e,{children:_("div",{className:"daum-address",children:_(je,{onComplete:S=>{a(String(S.address)),g(!1)}})})})]})};var K={},Ee=t=>encodeURIComponent(t).replace(/[!'()*]/g,a=>`%${a.charCodeAt(0).toString(16).toUpperCase()}`),ee="%[a-f0-9]{2}",H=new RegExp("("+ee+")|([^%]+?)","gi"),G=new RegExp("("+ee+")+","gi");function V(t,a){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;a=a||1;var s=t.slice(0,a),v=t.slice(a);return Array.prototype.concat.call([],V(s),V(v))}function De(t){try{return decodeURIComponent(t)}catch{for(var a=t.match(H)||[],s=1;s<a.length;s++)t=V(a,s).join(""),a=t.match(H)||[];return t}}function xe(t){for(var a={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},s=G.exec(t);s;){try{a[s[0]]=decodeURIComponent(s[0])}catch{var v=De(s[0]);v!==s[0]&&(a[s[0]]=v)}s=G.exec(t)}a["%C2"]="\uFFFD";for(var m=Object.keys(a),g=0;g<m.length;g++){var l=m[g];t=t.replace(new RegExp(l,"g"),a[l])}return t}var Ae=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return xe(t)}},Ne=(t,a)=>{if(!(typeof t=="string"&&typeof a=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(a==="")return[t];const s=t.indexOf(a);return s===-1?[t]:[t.slice(0,s),t.slice(s+a.length)]},Be=function(t,a){for(var s={},v=Object.keys(t),m=Array.isArray(a),g=0;g<v.length;g++){var l=v[g],w=t[l];(m?a.indexOf(l)!==-1:a(l,w,t))&&(s[l]=w)}return s};(function(t){const a=Ee,s=Ae,v=Ne,m=Be,g=e=>e==null,l=Symbol("encodeFragmentIdentifier");function w(e){switch(e.arrayFormat){case"index":return r=>(n,o)=>{const i=n.length;return o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:o===null?[...n,[P(r,e),"[",i,"]"].join("")]:[...n,[P(r,e),"[",P(i,e),"]=",P(o,e)].join("")]};case"bracket":return r=>(n,o)=>o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:o===null?[...n,[P(r,e),"[]"].join("")]:[...n,[P(r,e),"[]=",P(o,e)].join("")];case"colon-list-separator":return r=>(n,o)=>o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:o===null?[...n,[P(r,e),":list="].join("")]:[...n,[P(r,e),":list=",P(o,e)].join("")];case"comma":case"separator":case"bracket-separator":{const r=e.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(o,i)=>i===void 0||e.skipNull&&i===null||e.skipEmptyString&&i===""?o:(i=i===null?"":i,o.length===0?[[P(n,e),r,P(i,e)].join("")]:[[o,P(i,e)].join(e.arrayFormatSeparator)])}default:return r=>(n,o)=>o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:o===null?[...n,P(r,e)]:[...n,[P(r,e),"=",P(o,e)].join("")]}}function j(e){let r;switch(e.arrayFormat){case"index":return(n,o,i)=>{if(r=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),!r){i[n]=o;return}i[n]===void 0&&(i[n]={}),i[n][r[1]]=o};case"bracket":return(n,o,i)=>{if(r=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),!r){i[n]=o;return}if(i[n]===void 0){i[n]=[o];return}i[n]=[].concat(i[n],o)};case"colon-list-separator":return(n,o,i)=>{if(r=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!r){i[n]=o;return}if(i[n]===void 0){i[n]=[o];return}i[n]=[].concat(i[n],o)};case"comma":case"separator":return(n,o,i)=>{const O=typeof o=="string"&&o.includes(e.arrayFormatSeparator),y=typeof o=="string"&&!O&&A(o,e).includes(e.arrayFormatSeparator);o=y?A(o,e):o;const D=O||y?o.split(e.arrayFormatSeparator).map($=>A($,e)):o===null?o:A(o,e);i[n]=D};case"bracket-separator":return(n,o,i)=>{const O=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),!O){i[n]=o&&A(o,e);return}const y=o===null?[]:o.split(e.arrayFormatSeparator).map(D=>A(D,e));if(i[n]===void 0){i[n]=y;return}i[n]=[].concat(i[n],y)};default:return(n,o,i)=>{if(i[n]===void 0){i[n]=o;return}i[n]=[].concat(i[n],o)}}}function S(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function P(e,r){return r.encode?r.strict?a(e):encodeURIComponent(e):e}function A(e,r){return r.decode?s(e):e}function I(e){return Array.isArray(e)?e.sort():typeof e=="object"?I(Object.keys(e)).sort((r,n)=>Number(r)-Number(n)).map(r=>e[r]):e}function U(e){const r=e.indexOf("#");return r!==-1&&(e=e.slice(0,r)),e}function p(e){let r="";const n=e.indexOf("#");return n!==-1&&(r=e.slice(n)),r}function b(e){e=U(e);const r=e.indexOf("?");return r===-1?"":e.slice(r+1)}function C(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):r.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function h(e,r){r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r),S(r.arrayFormatSeparator);const n=j(r),o=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return o;for(const i of e.split("&")){if(i==="")continue;let[O,y]=v(r.decode?i.replace(/\+/g," "):i,"=");y=y===void 0?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?y:A(y,r),n(A(O,r),y,o)}for(const i of Object.keys(o)){const O=o[i];if(typeof O=="object"&&O!==null)for(const y of Object.keys(O))O[y]=C(O[y],r);else o[i]=C(O,r)}return r.sort===!1?o:(r.sort===!0?Object.keys(o).sort():Object.keys(o).sort(r.sort)).reduce((i,O)=>{const y=o[O];return Boolean(y)&&typeof y=="object"&&!Array.isArray(y)?i[O]=I(y):i[O]=y,i},Object.create(null))}t.extract=b,t.parse=h,t.stringify=(e,r)=>{if(!e)return"";r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r),S(r.arrayFormatSeparator);const n=y=>r.skipNull&&g(e[y])||r.skipEmptyString&&e[y]==="",o=w(r),i={};for(const y of Object.keys(e))n(y)||(i[y]=e[y]);const O=Object.keys(i);return r.sort!==!1&&O.sort(r.sort),O.map(y=>{const D=e[y];return D===void 0?"":D===null?P(y,r):Array.isArray(D)?D.length===0&&r.arrayFormat==="bracket-separator"?P(y,r)+"[]":D.reduce(o(y),[]).join("&"):P(y,r)+"="+P(D,r)}).filter(y=>y.length>0).join("&")},t.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);const[n,o]=v(e,"#");return Object.assign({url:n.split("?")[0]||"",query:h(b(e),r)},r&&r.parseFragmentIdentifier&&o?{fragmentIdentifier:A(o,r)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);const n=U(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),O=Object.assign(i,e.query);let y=t.stringify(O,r);y&&(y=`?${y}`);let D=p(e.url);return e.fragmentIdentifier&&(D=`#${r[l]?P(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${y}${D}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);const{url:o,query:i,fragmentIdentifier:O}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:m(i,r),fragmentIdentifier:O},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?i=>!r.includes(i):(i,O)=>!r(i,O);return t.pick(e,o,n)}})(K);const ke=B.div`
  display: flex;
  font-size: 18px;
  margin-top: 3vh;
  input {
    margin-left: 2vw;
    padding-left: 2vw;
    width: 50vw;
    font-size: 18px;
  }
  button {
    margin-left: 5vw;
    width: 15vw;
  }
`,Ie=()=>{const[t,a]=R(be),s=m=>{/^[0-9\b -]{0,13}$/.test(m.target.value)&&a(m.target.value)},v=()=>{if(t.length!==13){window.alert("\uD734\uB300\uBC88\uD638\uB97C \uBAA8\uB450 \uC785\uB825\uD574\uC8FC\uC138\uC694");return}const{IMP:m}=window;m.init("imp15165453"),m.certification({merchant_uid:"ORD20180131-0000011",m_redirect_url:"http://localhost:5173/signup"},()=>{})};return W.exports.useEffect(()=>{t.length===10&&a(t.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")),t.length===13&&a(t.replace(/-/g,"").replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3"))},[t]),W.exports.useEffect(()=>{const m=K.parse(window.location.search),g=m==null?void 0:m.imp_uid,l=m==null?void 0:m.success;l&&console.log(g),console.log(g,l)},[]),M(ke,{children:[_("div",{children:"\uD734\uB300\uD3F0"}),_("input",{type:"text",onChange:s,value:t,placeholder:"010-xxxx-xxxx"}),_("button",{onClick:v,children:"\uC778\uC99D"})]})},Ue=B.button`
  position: absolute;
  bottom: 1vh;
  width: 90vw;
  height: 10vh;
  z-index: 1;
`,Re=()=>_(Ue,{children:"\uC81C\uCD9C"}),Me=B.div`
  width: 94vw;
  height: 94vh;
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  padding-left: 2vw;
  position: relative;
`,Te=()=>(W.exports.useEffect(()=>{K.parse(window.location.search)},[]),M(Me,{children:[_(ve,{}),_(Oe,{}),_(Ie,{}),_(Fe,{}),_(Re,{})]}));export{Te as default};
