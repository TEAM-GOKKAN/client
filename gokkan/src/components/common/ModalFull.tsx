import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface Iprops {
  children: React.ReactNode | null;
  title?: string;
}

export default function ModalFull({ children, title }: Iprops) {
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Nav>
        <GoBackButton type="button" onClick={handleIconClick}>
          <IoIosArrowBack size="18px" />
        </GoBackButton>
        <NavTitle>{title}</NavTitle>
      </Nav>
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9991;
`;

const Nav = styled.nav`
  display: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: var(--color-white);
  padding: 16px;
  margin: 0 auto;
  position: relative;
`;

const NavTitle = styled.div`
  font-size: var(--font-medium);
  font-weight: 500;
  letter-spacing: normal;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GoBackButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;

const Content = styled.div`
  background: white;
  min-height: calc(100% - 60px);
  padding: 0 16px;
  padding-top: 32px;
`;