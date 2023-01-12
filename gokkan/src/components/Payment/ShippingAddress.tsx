import { useAtomValue } from 'jotai';
import React, { useState } from 'react';
import styled from 'styled-components';
import ChangeAddress from './ChangeAddress';
import Section from './Section';

interface IProps {
  data: {
    name: string;
    phoneNumber: string;
    address: string;
    addressDetail?: string;
  };
  isPaid?: boolean;
}

export default function ShippingAddress({ data, isPaid }: IProps) {
  const { name, phoneNumber, address, addressDetail } = data;

  const [isChangeMode, setIsChangeMode] = useState(false);

  const handleClickChangeButton = () => {
    setIsChangeMode(true);
  };

  const handleClickCompleteButton = () => {
    setIsChangeMode(false);
  };

  return (
    <Section
      title="배송지"
      preview={addressDetail ? `${address} ${addressDetail}` : address}
    >
      {/* {!isChangeMode && ( */}
      <>
        <div>
          <span>{name}</span>
          <span> / </span>
          <PhoneNumber>{phoneNumber}</PhoneNumber>
        </div>
        <Address>
          {addressDetail ? `${address} ${addressDetail}` : address}
        </Address>
        {/* {!isPaid && (
            <ChangeButton type="button" onClick={handleClickChangeButton}>
              변경
            </ChangeButton>
          )} */}
      </>
      {/* )} */}
      {/* {isChangeMode && <ChangeAddress onComplete={handleClickCompleteButton} />} */}
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
