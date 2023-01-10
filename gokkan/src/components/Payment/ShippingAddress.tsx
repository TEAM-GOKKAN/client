import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function ShippingAddress() {
  return (
    <Section
      title="배송지"
      preview="서울특별시 성동구 서울로1길 197 서울동, 서울아파트 101호"
      isFirstSection
    >
      <div>
        <span>배송송</span>
        <span> / </span>
        <PhoneNumber>010-9456-2789</PhoneNumber>
      </div>
      <Address>
        서울특별시 성동구 서울로1길 197 서울동, 서울아파트 101호
      </Address>
      <ChangeButton type="button">변경</ChangeButton>
    </Section>
  );
}

const Address = styled.address`
  margin-top: 10px;
  color: var(--color-brown300);
`;

const PhoneNumber = styled.span`
  letter-spacing: normal;
`;

const ChangeButton = styled.button`
  margin-top: 16px;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--color-brown300);
  border: 1px solid var(--color-brown300);
`;
