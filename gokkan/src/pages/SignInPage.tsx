import React from 'react';
import KakaoButton from '../component/SignIn/KakaoButton';
import styled from 'styled-components';

const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  position: absolute;
  top: 0;
  left: 0;
  .login-holder {
    width: 100%;
    height: 231px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;
    flex-direction: column;
    .close {
      width: 100%;
      height: 42px;
      bottom: 0;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #d9d6d4;
    }
    .content-holder {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      height: 189px;
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
  }
`;

const SignInPage = ({ setSignIn }: SiginInType) => {
  return (
    <SignInWrapper>
      <div className="login-holder">
        <div className="content-holder">
          <div className="title">
            로그인 <div className="small">또는</div> 회원가입
          </div>
          <div className="content">
            큐레이팅된 빈티지 가구들로 곳간을 채워보세요
          </div>
          <KakaoButton />
        </div>
        <button
          className="close"
          onClick={() => {
            setSignIn(false);
          }}
        >
          닫기
        </button>
      </div>
    </SignInWrapper>
  );
};

type SiginInType = {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default SignInPage;
