import React from 'react';
import styled from 'styled-components';
import Section from './Section';

interface IProps {
  data: {
    name: string;
    phoneNumber: string;
    address: string;
    addressDetail: string;
  };
}

export default function ShippingAddress({ data }: IProps) {
  const { name, phoneNumber, address, addressDetail } = data;

  return (
    <Section
      title="배송지"
      preview="서울특별시 성동구 서울로1길 197 서울동, 서울아파트 101호"
      isFirstSection
    >
      <div>
        <span>{name}</span>
        <span> / </span>
        <PhoneNumber>{phoneNumber}</PhoneNumber>
      </div>
      <Address>{`${address} ${addressDetail}`}</Address>
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
