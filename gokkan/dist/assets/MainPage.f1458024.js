import{g as a}from"./customAxios.4e711c83.js";import{r as l,a as i}from"./tokenAtom.bed01f95.js";import{a as C,b as t,c as r,j as c,s as h}from"./index.7e56801c.js";import"./axios.77c802c4.js";const g=h.div`
  display: flex;
  flex-direction: column;
  button {
    width: 200px;
    height: 200px;
    border: 1px solid black;
  }
`;function v(){C();const s=a(),[d,u]=t(l),[p,n]=t(i);return r(g,{children:["Main page \uC785\uB2C8\uB2E4.",c("button",{onClick:()=>{const e="api/v1/users";s.get(e).then(({data:o})=>{console.log(o)}).catch(o=>{console.log(o)})},children:"\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD655\uC778 \uD14C\uC2A4\uD2B8"}),c("button",{onClick:()=>{const e="api/v1/users/logout";s.post(e).then(({data:o})=>{console.log(o),u(""),n("")}).catch(o=>{console.log(o)})},children:"\uC0AC\uC6A9\uC790 \uB85C\uADF8\uC544\uC6C3 \uD14C\uC2A4\uD2B8"})]})}export{v as default};
