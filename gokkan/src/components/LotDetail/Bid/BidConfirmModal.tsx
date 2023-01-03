import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../common/Modal';

export default function BidConfirmModal() {
  const handlePlaceBid = () => {
    console.log('Place Bid');
  };

  return (
    <Modal buttonText="응찰" onSubmit={handlePlaceBid}>
      <BidPrice>
        <div>응찰가</div>
        <div>120,000원</div>
      </BidPrice>
      <CautionMessage>
        <div>응찰 버튼을 누르시면 취소가 불가능합니다.</div>
        <div>동시 응찰할 경우, 서버시각 기준 우선순위가 부여됩니다.</div>
      </CautionMessage>
    </Modal>
  );
}

const BidPrice = styled.div`
  font-size: var(--font-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:last-child {
    font-size: var(--font-2x-large);
    font-weight: 500;
    margin-top: 5px;
  }
`;

const CautionMessage = styled.div`
  font-size: var(--font-small);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    &:first-child {
      color: var(--color-orange);
      margin-bottom: 6px;
    }

    &:last-child {
      color: var(--color-brown300);
    }
  }
`;
