import React from 'react';
import styled from 'styled-components';

const ConfirmButtonWrapper = styled.button`
  position: absolute;
  bottom: 1vh;
  width: 90vw;
  height: 10vh;
  z-index: 1;
`;

const SingUpConfirmButton = () => {
  return <ConfirmButtonWrapper>제출</ConfirmButtonWrapper>;
};

export default SingUpConfirmButton;
