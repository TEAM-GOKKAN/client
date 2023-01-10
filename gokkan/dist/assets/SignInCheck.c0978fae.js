import{s as a,a as i,r as n,j as s}from"./index.bf00bd78.js";import{R as c}from"./Blocks.b87fc395.js";import{q as h}from"./index.45a2c6a0.js";import{a as l}from"./axios.77c802c4.js";const g=a.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,d=()=>{const{token:e,refreshToken:t}=h.parse(window.location.search),o=i();return n.exports.useEffect(()=>{e!==""&&t!==""&&(localStorage.setItem("accessToken",String(e)),localStorage.setItem("refreshToken",String(t)),l.get("http://3.38.59.40:8080/api/v1/users",{headers:{Authorization:`Bearer ${e}`}}).then(({data:r})=>{r.phoneNumber?o("/"):o("/signup")}).catch(r=>{console.log(r)}))},[e,t]),s(g,{children:s(c,{strokeColor:"black",strokeWidth:"3",animationDuration:"0.75",width:"50",visible:!0})})};export{d as default};
