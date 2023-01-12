import React, { MouseEvent, useRef } from 'react';
import styled from 'styled-components';
import { PGS } from '../../lib/constants/payment';
import Section from './Section';

interface IProps {
  pg: string;
  onSetPg: (method: string) => void;
}

export default function PaymentMethods({ pg, onSetPg }: IProps) {
  const buttonsRef = useRef([]);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      onSetPg(e.target.value);
    }
  };

  return (
    <Section title="결제수단" preview={pg}>
      {PGS.map((method) => (
        <PaymentButton
          type="button"
          key={method.value}
          value={method.value}
          onClick={handleButtonClick}
          ref={buttonsRef.current[0]}
        >
          {method.label}
        </PaymentButton>
      ))}
    </Section>
  );
}

const PaymentButton = styled.button`
  height: 42px;
  padding: 0 12px;
  border: 1px solid var(--color-brown300);
  color: var(--color-brown300);
  margin-right: 10px;

  &.active {
    color: var(--color-brown500);
    border-color: var(--color-brown500);
  }
`;
