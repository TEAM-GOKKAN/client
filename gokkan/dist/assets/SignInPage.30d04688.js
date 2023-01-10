import{s as i,a as c,r as u,b as n,j as t}from"./index.bf00bd78.js";import{c as l}from"./customAxios.cf9d9e49.js";import{M as h}from"./Modal.71f09834.js";import"./axios.77c802c4.js";const p=i.section`
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
`;function d(){const a=localStorage.getItem("accessToken"),o=c(),r=u.exports.useRef(null);return n(p,{children:[t("button",{onClick:f=>{if(a!=="")l.get("api/v1/users").then(({data:e})=>{const s=e==null?void 0:e.phoneNumber;o(s?-1:"signup")}).catch(e=>{console.error(e)});else{const e=r.current;if(!e)return;e.click()}}}),t("a",{href:"http://3.38.59.40:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:5173/signInCheck",ref:r})]})}const m=i.div`
  .content-holder {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 12px;
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
      margin-bottom: 24px;
    }
  }
`,v=()=>t(h,{children:t(m,{children:n("div",{className:"content-holder",children:[n("div",{className:"title",children:["\uB85C\uADF8\uC778 ",t("div",{className:"small",children:"\uB610\uB294"})," \uD68C\uC6D0\uAC00\uC785"]}),t("div",{className:"content",children:"\uD050\uB808\uC774\uD305\uB41C \uBE48\uD2F0\uC9C0 \uAC00\uAD6C\uB4E4\uB85C \uACF3\uAC04\uC744 \uCC44\uC6CC\uBCF4\uC138\uC694"}),t(d,{})]})})});export{v as default};
