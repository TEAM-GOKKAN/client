import { useAtom, useAtomValue } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalFull from '../components/common/ModalFull';
import PayBox from '../components/Payment/PayBox';
import PaymentAmount from '../components/Payment/PaymentAmount';
import PaymentMethods from '../components/Payment/PaymentMethods';
import PaymentTerms from '../components/Payment/PaymentTerms';
import ProductInfo from '../components/Payment/ProductInfo';
import ShippingAddress from '../components/Payment/ShippingAddress';
import { USER_CODE } from '../lib/constants/payment';
import { auctionIdAtom } from '../store/bidAtom';
import {
  addressAtom,
  iamportDataAtom,
  newAddressAtom,
  newNameAtom,
  newPhoneNumberAtom,
  paymentAmountAtom,
  pgAtom,
  productInfoAtom,
} from '../store/paymentAtom';
import customAxios from '../utils/customAxios';

declare global {
  interface Window {
    IMP: any;
  }
}

export default function PaymentPage() {
  const navigate = useNavigate();

  const shippingAddress = useAtomValue(addressAtom);
  const productInfo = useAtomValue(productInfoAtom);
  const paymentAmount = useAtomValue(paymentAmountAtom);
  const iamportData = useAtomValue(iamportDataAtom);
  const auctionId = useAtomValue(auctionIdAtom);
  const [pg, setPg] = useAtom(pgAtom);
  const setNewAddress = useUpdateAtom(newAddressAtom);
  const setNewName = useUpdateAtom(newNameAtom);
  const setNewPhoneNumber = useUpdateAtom(newPhoneNumberAtom);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const callback = async (res: any) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amout,
      status,
    } = res;
    if (success) {
      console.log(imp_uid);
      console.log(merchant_uid);
      console.log(pay_method);
      console.log(paid_amout);
      console.log(status);

      alert('결제 성공');

      const { data } = await customAxios.get('/api/v1/payment', {
        params: {
          auctionId,
          impUid: imp_uid,
        },
      });

      if (data) {
        setNewAddress(data.address);
        setNewName(data.name);
        setNewPhoneNumber(data.phoneNumber);

        navigate('result', {
          state: {
            orderNumber: merchant_uid,
          },
        });
      }
    } else {
      alert(`결제 실패 : ${error_msg}`);
      navigate('result', {
        state: {
          error: error_msg,
        },
      });
    }
  };

  const handleClickPaymnet = () => {
    if (!pg) {
      return alert('결제 수단을 선택해주세요.');
    }

    // if (!isTermsChecked) {
    //   return alert('이용약관에 동의해주세요.');
    // }

    const { IMP } = window;
    IMP.init(USER_CODE);

    IMP.request_pay(iamportData, callback);
  };

  const selectPaymentMethod = (method: string) => {
    setPg(method);
  };

  useEffect(() => {
    console.log(iamportData);
  }, [iamportData]);

  return (
    <ModalFull title="결제">
      <ShippingAddress data={shippingAddress} />
      <ProductInfo data={productInfo} />
      <PaymentAmount data={paymentAmount} />
      <PaymentMethods pg={pg} onSetPg={selectPaymentMethod} />
      <PaymentTerms />
      <PayBox onClickPayment={handleClickPaymnet} />
    </ModalFull>
  );
}
