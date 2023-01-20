import React, { useState } from 'react';
import styled from 'styled-components';
import { getElapsedTime } from '../../utils/getDiffTime';
import { insertCommas } from '../../utils/handleCommas';

interface Iprops {
  bidHistory: BidInfo[] | null[];
}

interface BidInfo {
  memberId: string;
  price: number;
  bidTime: string;
}

export default function BidHistory({ bidHistory }: Iprops) {
  return (
    <Container>
      <Title>입찰 내역</Title>
      <BidList>
        {bidHistory.map((bid) => {
          if (!bid) return '';

          const elpasedTime = getElapsedTime(bid.bidTime);
          const priceWithCommas = insertCommas(bid.price);

          return (
            <Bid key={`${bid.memberId}${bid.price}`}>
              <Bidder>{bid.memberId}</Bidder>
              <BidTime>{elpasedTime}</BidTime>
              <BidPrice>{priceWithCommas}원</BidPrice>
            </Bid>
          );
        })}
        {/* <Bid>
          <Bidder>233456</Bidder>
          <BidTime>30분 전</BidTime>
          <BidPrice>130,000원</BidPrice>
        </Bid> */}
      </BidList>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 42px;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 42px;
    display: block;
    border-bottom: 1px solid var(--color-brown100);
  }
`;

const Title = styled.h4`
  font-size: var(--font-regular);
  font-weight: 500;
  margin-bottom: 28px;
`;

const BidList = styled.div`
  position: relative;
`;

const Bid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  & * {
    font-size: var(--font-small);
  }
`;

const Bidder = styled.span`
  color: var(--color-brown300);
  font-weight: 500;
  letter-spacing: normal;
`;

const BidTime = styled.span`
  position: absolute;
  left: 33.33%;
  color: var(--color-brown300);
  letter-spacing: normal;
`;

const BidPrice = styled.span`
  font-weight: 500;
  letter-spacing: normal;
`;
