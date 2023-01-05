import{M as d}from"./ModalFull.237fe4c5.js";import{s as c,r as p,c as r,j as t,a as B,b as h}from"./index.7e56801c.js";import{A as m,p as g}from"./registerAtom.fd4b7f46.js";import{g as D}from"./customAxios.4e711c83.js";import"./iconBase.9b13aa84.js";import"./axios.77c802c4.js";import"./tokenAtom.bed01f95.js";const A=c.div`
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
`,x=c.li`
  width: 100%;
  height: 30px;
  display: felx;
  align-items: center;
  padding-left: 10px;
  margin-top: 10px;
`,n=({title:e,listItems:i=[],clickFn:a})=>{const[s,l]=p.exports.useState(!1);return r(A,{children:[r("div",{className:"title",onClick:()=>{l(o=>!o)},children:[e,i.length!==0&&t("div",{className:"iconHolder","data-listopen":s,children:t(m,{})})]}),s&&t("ul",{children:i.map((o,C)=>t(x,{children:o},C))})]})},f=()=>{const e=[];return e.push(t("div",{children:"\uAD00\uC2EC\uC788\uB294 \uACBD\uB9E4"})),e.push(t("div",{children:"\uC785\uCC30\uD55C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB099\uCC30\uB41C \uACBD\uB9E4"})),e.push(t("div",{children:"\uB4F1\uB85D\uD55C \uACBD\uB9E4"})),t(n,{title:"\uB098\uC758 \uACBD\uB9E4 \uBAA9\uB85D",listItems:e})},v=()=>{const e=D(),i=B(),[a,s]=h(g);return t("div",{onClick:()=>{e.post("api/v1/items/temp").then(({data:u})=>{s(String(u)),i(`../register/1/${u}`)}).catch(u=>{console.log(u)})},children:"\uC0C8\uB85C\uC6B4 \uACBD\uB9E4 \uB4F1\uB85D"})},E=()=>{const e=[];return e.push(t(v,{})),e.push(t("div",{children:"\uC791\uC131 \uC911\uC778 \uACBD\uB9E4 \uBD88\uB7EC\uC624\uAE30"})),t(n,{title:"\uACBD\uB9E4 \uB4F1\uB85D",listItems:e})},L=()=>{const e=[];return e.push(t("div",{children:"\uD68C\uC6D0 \uC815\uBCF4"})),e.push(t("div",{children:"\uCE74\uB4DC \uC815\uBCF4"})),t(n,{title:"\uC124\uC815",listItems:e})},w=()=>t(n,{title:"\uB85C\uADF8\uC544\uC6C3"}),b=()=>r(d,{title:"\uB9C8\uC774\uD398\uC774\uC9C0",children:[t(f,{}),t(E,{}),t(L,{}),t(w,{})]});export{b as default};
