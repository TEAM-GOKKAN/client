import{s as i,b as c,a as l,r as h,c as o,j as t}from"./index.52785946.js";import{a as p}from"./tokenAtom.efacda69.js";import{g as d}from"./customAxios.f3545906.js";import{M as m}from"./Modal.92615f12.js";import"./axios.77c802c4.js";const C=i.section`
  button {
    background-image: url('./src/assets/kakao_login_medium_wide.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 321px;
    height: 47.48px;
    border-radius: 12px;
    cursor: pointer;
  }
  a {
    display: hidden;
  }
`;function f(){const[r]=c(p),n=l(),a=d(),s=h.exports.useRef(null);return o(C,{children:[t("button",{onClick:B=>{if(r!=="")a.get("api/v1/users").then(({data:e})=>{const u=e==null?void 0:e.phoneNumber;n(u?-1:"signup")}).catch(e=>{console.error(e)});else{const e=s.current;if(!e)return;e.click()}}}),t("a",{href:"http://3.38.59.40:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:5173/signup",ref:s})]})}const g=i.div`
  .content-holder {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 170px;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      .small {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        margin: 0 5px;
      }
    }
    .content {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #9d9792;
    }
  }
`,D=()=>t(m,{children:t(g,{children:o("div",{className:"content-holder",children:[o("div",{className:"title",children:["\uB85C\uADF8\uC778 ",t("div",{className:"small",children:"\uB610\uB294"})," \uD68C\uC6D0\uAC00\uC785"]}),t("div",{className:"content",children:"\uD050\uB808\uC774\uD305\uB41C \uBE48\uD2F0\uC9C0 \uAC00\uAD6C\uB4E4\uB85C \uACF3\uAC04\uC744 \uCC44\uC6CC\uBCF4\uC138\uC694"}),t(f,{})]})})});export{D as default};
