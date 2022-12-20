import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SignInPage from './SignInPage';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: var(--color-brown100);
  .login-button {
    width: 60px;
    height: 60px;
    background-color: #d9d6d4;
  }
`;

const MainWarpper = styled.main`
  padding: 0 12px;
  margin-top: 92px;
`;

export default function LayoutPage() {
  const [signIn, setSignIn] = useState(false);

  const handleLoginClick = () => {
    setSignIn(true);
  };
  return (
    <div>
      <HeaderWrapper>
        헤더 영역 입니다.
        <button className="login-button" onClick={handleLoginClick} />
        {signIn && <SignInPage setSignIn={setSignIn} />}
      </HeaderWrapper>
      <MainWarpper>
        <Outlet />
      </MainWarpper>
    </div>
  );
}
