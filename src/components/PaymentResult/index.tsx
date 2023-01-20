import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { paymentResultErrMsgAtom, pgAtom } from '../../store/paymentAtom';
import customAxios from '../../utils/customAxios';
import CompletedPayment from './CompletedPayment';
import FailedPayment from './FailedPayment';

interface IProps {
  auctionId: number;
}

export default function PaymentResult({ auctionId }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const impUid = searchParams.get('imp_uid');
  const orderNumber = searchParams.get('merchant_uid');
  const success = searchParams.get('imp_success');
  const errorMsg = searchParams.get('error_msg');

  const [pg, setPg] = useAtom(pgAtom);
  const [errMsg, setErrMsg] = useAtom(paymentResultErrMsgAtom);
  const [isValidationChecked, setIsValidationChecked] = useState(false);

  const getPaymentData = async () => {
    const { data } = await customAxios.get('/api/v1/payment', {
      params: {
        auctionId,
        impUid: impUid,
      },
    });

    if (data?.pay_method) {
      setPg(data?.pay_method);
    } else {
      setErrMsg(data?.message);
    }

    setIsValidationChecked(true);

    // 테스트
    console.log(data);
  };

  useEffect(() => {
    if (!isValidationChecked) {
      getPaymentData();
    }
  }, []);

  return (
    <>
      {isValidationChecked && (
        <>
          {success === 'true' && pg && (
            <CompletedPayment orderNumber={orderNumber || ''} />
          )}
          {success === 'false' && <FailedPayment errMsg={errorMsg || errMsg} />}
        </>
      )}
    </>
  );
}
