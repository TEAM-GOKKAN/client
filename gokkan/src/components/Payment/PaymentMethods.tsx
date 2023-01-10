import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function PaymentMethods() {
  return (
    <Section title="결제수단" preview="카카오페이">
      <PaymentButton type="button">신용/체크카드</PaymentButton>
      <PaymentButton type="button">카카오페이</PaymentButton>
    </Section>
  );
}

const PaymentButton = styled.button`
  height: 42px;
  padding: 0 12px;
  border: 1px solid var(--color-brown300);
  margin-right: 10px;

  &.active {
    color: var(--color-brown500);
    border: 1px solid var(--color-brown500);
  }
`;
