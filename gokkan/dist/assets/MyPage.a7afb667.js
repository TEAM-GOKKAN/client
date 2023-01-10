import{M as B}from"./ModalFull.9fd98d21.js";import{s as p,r as a,b as C,j as t,a as u,c as h,F as m}from"./index.bf00bd78.js";import{A as f,p as x}from"./registerAtom.7b214520.js";import{c as d}from"./customAxios.cf9d9e49.js";import{u as D}from"./signUpAtom.35114587.js";import"./iconBase.6cff797d.js";import"./axios.77c802c4.js";const k=p.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .title {
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    .iconHolder {
      transition: all ease 0.3s;
      &[data-listopen='true'] {
        transform: rotate(180deg);
      }
    }
  }
`,A=p.li`
  width: 100%;
  height: 30px;
  display: felx;
  align-items: center;
  padding-left: 10px;
  margin-top: 10px;
`,r=({title:e,listItems:i=[],clickFn:n})=>{const[s,o]=a.exports.useState(!1);return C(k,{children:[C("div",{className:"title",onClick:()=>{n?n():o(c=>!c)},children:[e,i.length!==0&&t("div",{className:"iconHolder","data-listopen":s,children:t(f,{})})]}),s&&t("ul",{children:i.map((c,g)=>t(A,{children:c},g))})]})},v=()=>{const e=[];return e.push(t("div",{children:"\uAD00\uC2EC\uC788\uB294 \uACBD\uB9E4"})),e.push(t("div",{children:"\uC785\uCC30\uD55C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB099\uCC30\uB41C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB4F1\uB85D\uD55C \uACBD\uB9E4"})),t(r,{title:"\uB098\uC758 \uACBD\uB9E4 \uBAA9\uB85D",listItems:e})},L=()=>{const e=u(),[i,n]=h(x);return t("div",{onClick:()=>{d.post("api/v1/items/temp").then(({data:o})=>{n(String(o)),e(`../register/1/${o}`)}).catch(o=>{console.log(o)})},children:"\uC0C8\uB85C\uC6B4 \uACBD\uB9E4 \uB4F1\uB85D"})},E=()=>{const e=u();return t("div",{onClick:()=>{e("/myWritingProduct")},children:"\uC791\uC131 \uC911\uC778 \uACBD\uB9E4 \uBD88\uB7EC\uC624\uAE30"})},I=()=>{const e=[];return e.push(t(L,{})),e.push(t(E,{})),t(r,{title:"\uACBD\uB9E4 \uB4F1\uB85D",listItems:e})},y=()=>{const[,e]=h(D),i=u();return t("div",{onClick:()=>{e("fix"),i("/signup")},children:"\uD68C\uC6D0 \uC815\uBCF4"})},F=()=>{const e=[];return e.push(t(y,{})),e.push(t("div",{children:"\uCE74\uB4DC \uC815\uBCF4"})),t(r,{title:"\uC124\uC815",listItems:e})},M=()=>{const e=u();return t(r,{title:"\uB85C\uADF8\uC544\uC6C3",clickFn:()=>{const n="api/v1/users/logout";d.post(n).then(({data:s})=>{localStorage.setItem("accessToken",""),localStorage.setItem("refreshToken",""),e("/")}).catch(s=>{console.log(s)})}})},S=()=>{const[e,i]=a.exports.useState(!1),n=u(),s=()=>{n("/expertWorkList")};return a.exports.useEffect(()=>{const o="api/v1/expert/info/is-expert";d.get(o).then(({data:l})=>{l&&i(!0)}).catch(l=>{console.log(l)})},[]),e?t(r,{title:"\uAC80\uC218 \uBAA9\uB85D",clickFn:s}):t(m,{})},P=()=>C(B,{title:"\uB9C8\uC774\uD398\uC774\uC9C0",children:[t(v,{}),t(I,{}),t(F,{}),t(M,{}),t(S,{})]});export{P as default};
