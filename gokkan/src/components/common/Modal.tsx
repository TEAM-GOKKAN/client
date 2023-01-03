import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Iprops {
  children: React.ReactNode;
  buttonText?: string;
  onSubmit?: () => void;
}

export default function Modal({ children, buttonText, onSubmit }: Iprops) {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };

  return (
    <ModalWrapper>
      <Container>
        <Dialog>{children}</Dialog>
        <ModalButtons>
          <button type="button" onClick={handleClose}>
            닫기
          </button>
          {buttonText && (
            <button type="button" onClick={onSubmit}>
              {buttonText}
            </button>
          )}
        </ModalButtons>
      </Container>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #9d9792ad;
`;

const Container = styled.div`
  width: calc(100% - 24px);
  background: var(--color-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

const Dialog = styled.dialog`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: var(--color-white);
  position: relative;
`;

const ModalButtons = styled.div`
  width: 100%;
  display: flex;

  & button {
    margin: 0;
    width: 100%;
    background: var(--color-brown500);
    color: var(--color-brown100);
    height: 42px;

    &:first-child {
      background: var(--color-brown200);
      color: var(--color-brown300);
    }
  }
`;
