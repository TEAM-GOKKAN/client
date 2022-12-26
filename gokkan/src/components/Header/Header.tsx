import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo/logo.png';
import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineUser } from 'react-icons/hi';

const Container = styled.header`
  display: fixed;
  height: 60px;
  background: var(--color-white);
`;

const Fixed = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IconButton = styled.button`
  padding: 0;
  display: flex;

  & > * {
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  height: 100%;

  & img {
    height: 100%;
    object-fit: cover;
  }
`;

const Header = () => {
  return (
    <Container>
      <Fixed>
        <IconButton>
          <HiOutlineMenu size="22" color="var(--color-brown300)" />
        </IconButton>
        <LogoContainer>
          <img src={logo} alt="gokkan" />
        </LogoContainer>
        <IconButton>
          <HiOutlineUser size="22" color="var(--color-brown300)" />
        </IconButton>
      </Fixed>
    </Container>
  );
};

export default Header;
