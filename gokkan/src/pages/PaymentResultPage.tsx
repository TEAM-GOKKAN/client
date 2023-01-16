import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CompletedPayment from '../components/PaymentResult/CompletedPayment';
import FailedPayment from '../components/PaymentResult/FailedPayment';
import { auctionIdAtom } from '../store/bidAtom';
import { lotIdAtom } from '../store/lotDetailAtom';

export default function PaymentResultPage() {
  const { state } = useLocation();
  const params = useParams();
  const [, setAuctionId] = useAtom(auctionIdAtom);
  const [, setItemId] = useAtom(lotIdAtom);

  useEffect(() => {
    if (params.itemId && params.auctionId) {
      setAuctionId(Number(params.auctionId));
      setItemId(Number(params.itemId));
    }
  }, []);

  return (
    <>
      {state?.orderNumber && (
        <CompletedPayment orderNumber={state.orderNumber} />
      )}
      {state?.error && <FailedPayment errMsg={state.error} />}
    </>
  );
}
