import React from 'react';
import ModalFull from '../components/common/ModalFull';
import PayBox from '../components/Payment/PayBox';
import PaymentAmount from '../components/Payment/PaymentAmount';
import PaymentMethods from '../components/Payment/PaymentMethods';
import PaymentTerms from '../components/Payment/PaymentTerms';
import ProductInfo from '../components/Payment/ProductInfo';
import ShippingAddress from '../components/Payment/ShippingAddress';

export default function PaymentPage() {
  return (
    <ModalFull title="결제">
      <ShippingAddress />
      <ProductInfo />
      <PaymentAmount />
      <PaymentMethods />
      <PaymentTerms />
      <PayBox />
    </ModalFull>
  );
}
