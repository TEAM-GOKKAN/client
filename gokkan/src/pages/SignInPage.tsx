import React from 'react';
import KakaoButton from '../components/SignIn/KakaoButton';
import styled from 'styled-components';
import Modal from '../components/common/Modal';

const SignInWrapper = styled.div`
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
`;

const SignInPage = () => {
  return (
    <Modal>
      <SignInWrapper>
        <div className="content-holder">
          <div className="title">
            로그인 <div className="small">또는</div> 회원가입
          </div>
          <div className="content">
            큐레이팅된 빈티지 가구들로 곳간을 채워보세요
          </div>
          <KakaoButton />
        </div>
      </SignInWrapper>
    </Modal>
  );
};

type SiginInType = {
  setSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export default SignInPage;
