import{M as m}from"./ModalFull.d85688e2.js";import{s as d,r as B,c,j as t,a as C,b as a}from"./index.6e976c01.js";import{A as g,p as A}from"./registerAtom.dfdd80dd.js";import{g as p}from"./customAxios.6a5724de.js";import{a as D,r as f}from"./tokenAtom.4a9834de.js";import"./iconBase.a857eaf5.js";import"./axios.77c802c4.js";const v=d.div`
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
`,x=d.li`
  width: 100%;
  height: 30px;
  display: felx;
  align-items: center;
  padding-left: 10px;
  margin-top: 10px;
`,r=({title:e,listItems:s=[],clickFn:o})=>{const[u,l]=B.exports.useState(!1);return c(v,{children:[c("div",{className:"title",onClick:()=>{o?o():l(n=>!n)},children:[e,s.length!==0&&t("div",{className:"iconHolder","data-listopen":u,children:t(g,{})})]}),u&&t("ul",{children:s.map((n,h)=>t(x,{children:n},h))})]})},k=()=>{const e=[];return e.push(t("div",{children:"\uAD00\uC2EC\uC788\uB294 \uACBD\uB9E4"})),e.push(t("div",{children:"\uC785\uCC30\uD55C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB099\uCC30\uB41C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB4F1\uB85D\uD55C \uACBD\uB9E4"})),t(r,{title:"\uB098\uC758 \uACBD\uB9E4 \uBAA9\uB85D",listItems:e})},L=()=>{const e=p(),s=C(),[o,u]=a(A);return t("div",{onClick:()=>{e.post("api/v1/items/temp").then(({data:i})=>{u(String(i)),s(`../register/1/${i}`)}).catch(i=>{console.log(i)})},children:"\uC0C8\uB85C\uC6B4 \uACBD\uB9E4 \uB4F1\uB85D"})},E=()=>{const e=C();return t("div",{onClick:()=>{e("/myWritingProduct")},children:"\uC791\uC131 \uC911\uC778 \uACBD\uB9E4 \uBD88\uB7EC\uC624\uAE30"})},y=()=>{const e=[];return e.push(t(L,{})),e.push(t(E,{})),t(r,{title:"\uACBD\uB9E4 \uB4F1\uB85D",listItems:e})},w=()=>{const e=[];return e.push(t("div",{children:"\uD68C\uC6D0 \uC815\uBCF4"})),e.push(t("div",{children:"\uCE74\uB4DC \uC815\uBCF4"})),t(r,{title:"\uC124\uC815",listItems:e})},M=()=>{const e=p(),[,s]=a(D),[,o]=a(f),u=C();return t(r,{title:"\uB85C\uADF8\uC544\uC6C3",clickFn:()=>{const i="api/v1/users/logout";e.post(i).then(({data:n})=>{s(""),o(""),u("/")}).catch(n=>{console.log(n)})}})},j=()=>c(m,{title:"\uB9C8\uC774\uD398\uC774\uC9C0",children:[t(k,{}),t(y,{}),t(w,{}),t(M,{})]});export{j as default};
