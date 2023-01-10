import { useAtomValue } from 'jotai';
import React from 'react';
import ModalFull from '../components/common/ModalFull';
import PayBox from '../components/Payment/PayBox';
import PaymentAmount from '../components/Payment/PaymentAmount';
import PaymentMethods from '../components/Payment/PaymentMethods';
import PaymentTerms from '../components/Payment/PaymentTerms';
import ProductInfo from '../components/Payment/ProductInfo';
import ShippingAddress from '../components/Payment/ShippingAddress';
import {
  addressAtom,
  paymentAmountAtom,
  productInfoAtom,
} from '../store/paymentAtom';

export default function PaymentPage() {
  const shippingAddress = useAtomValue(addressAtom);
  const productInfo = useAtomValue(productInfoAtom);
  const paymentAmount = useAtomValue(paymentAmountAtom);

  console.log(paymentAmount);

  return (
    <ModalFull title="결제">
      <ShippingAddress data={shippingAddress} />
      <ProductInfo data={productInfo} />
      <PaymentAmount data={paymentAmount} />
      <PaymentMethods />
      <PaymentTerms />
      <PayBox />
    </ModalFull>
  );
}
