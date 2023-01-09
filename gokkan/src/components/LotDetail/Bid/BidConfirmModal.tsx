import { useAtomValue } from 'jotai';
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { StompClientAtom } from '../../../store/lotDetailAtom';
import Modal from '../../common/Modal';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTY2MzE0NzQzIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY3MjgyMzM5OX0.zwqKkWgQOOfL8eTuQ-vyZDj3aQ3USB7NkCy7nZBSa7k';
const auctionId = 1;

interface Iprops {
  bidPrice: number;
  onConfirmClose: () => void;
}

export default function BidConfirmModal({ bidPrice, onConfirmClose }: Iprops) {
  const client = useAtomValue(StompClientAtom);

  const handlePlaceBid = useCallback(async () => {
    client?.current?.publish({
      destination: `/auction/${auctionId}`,
      body: JSON.stringify(bidPrice),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  return (
    <Modal buttonText="응찰" onSubmit={handlePlaceBid} onClose={onConfirmClose}>
      <BidPrice>
        <div>응찰가</div>
        <div>{bidPrice}</div>
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
