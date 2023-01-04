import{s as c,b as r,a as h,r as m,j as n}from"./index.7e56801c.js";import{R as p}from"./Blocks.17c42566.js";import{q as f}from"./index.45a2c6a0.js";import{a as u,r as g}from"./tokenAtom.bed01f95.js";import{a as l}from"./axios.77c802c4.js";const d=c.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=()=>{const{token:e,refreshToken:t}=f.parse(window.location.search),[,a]=r(u),[,i]=r(g),o=h();return m.exports.useEffect(()=>{e!==""&&t!==""&&(a(String(e)),i(String(t)),l.get("http://3.38.59.40:8080/api/v1/users",{headers:{Authorization:`Bearer ${e}`}}).then(({data:s})=>{s.phoneNumber?o("/"):o("/signup")}).catch(s=>{console.log(s)}))},[e,t]),n(d,{children:n(p,{strokeColor:"black",strokeWidth:"3",animationDuration:"0.75",width:"50",visible:!0})})};export{x as default};
