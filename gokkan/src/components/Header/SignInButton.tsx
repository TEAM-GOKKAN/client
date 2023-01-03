import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { accessTokenAtom } from '../../store/tokenAtom';
import { useAtom } from 'jotai';

const IconButton = styled.button`
  padding: 0;
  display: flex;

  & > * {
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 2px;
  width: 80px;
  height: 90px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-brown500);
  button {
    width: 100%;
    height: 30px;
  }
`;

const SignInButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken] = useAtom(accessTokenAtom);
  const [infoOpen, setInfoOpen] = useState(false);

  const handleSignInButttonClick = () => {
    if (accessToken !== '') {
      setInfoOpen((pre) => !pre);
    } else {
      navigate('signin', { state: { background: location } });
    }
  };

  const handleProductRegister = () => {
    console.log('hi');
  };

  return (
    <>
      <IconButton onClick={handleSignInButttonClick}>
        <HiOutlineUser size="22" color="var(--color-brown300)" />
      </IconButton>
      {infoOpen && (
        <InfoWrapper>
          <button onClick={handleProductRegister}>경매 등록</button>
          <button>내 경매 보기</button>
          <button>로그아웃</button>
        </InfoWrapper>
      )}
    </>
  );
};

export default SignInButton;
