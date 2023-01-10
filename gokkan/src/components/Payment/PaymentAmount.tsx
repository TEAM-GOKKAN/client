import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function PaymentAmount() {
  return (
    <Section title="결제금액" preview="319,000원">
      <PriceList>
        <Price>
          <span>낙찰가</span>
          <span>219,000원</span>
        </Price>
        <Price>
          <span>수수료</span>
          <span>21,900원</span>
        </Price>
      </PriceList>
      <TotalPrice>
        <span>총 결제금액</span>
        <span>319,000원</span>
      </TotalPrice>
    </Section>
  );
}

const PriceList = styled.div`
  &::after {
    content: '';
    display: inline-block;
    margin-top: 21px;
    width: 100%;
    border-bottom: 1px solid var(--color-brown100);
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  & > span:first-child {
    color: var(--color-brown300);
  }

  & > span:last-child {
    letter-spacing: normal;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  font-size: var(--font-regular);

  & > span:last-child {
    letter-spacing: normal;
    font-weight: var(--weight-semi-bold);
  }
`;
