import React from 'react';
import { useLocation } from 'react-router-dom';
import CompletedPayment from '../components/PaymentResult/CompletedPayment';
import FailedPayment from '../components/PaymentResult/FailedPayment';

export default function PaymentResultPage() {
  const { state } = useLocation();

  return (
    <>
      {state?.orderNumber && (
        <CompletedPayment orderNumber={state.orderNumber} />
      )}
      {state?.error && <FailedPayment errMsg={state.error} />}
    </>
  );
}
