import React, { useCallback, useEffect, useRef, useState } from 'react';
import ExpertValuation from '../components/LotDetail/ExpertValuation';
import InfoMain from '../components/LotDetail/InfoMain';
import InfoDetail from '../components/LotDetail/InfoDetail';
import LotDescription from '../components/LotDetail/LotDescription';
import BidHistory from '../components/LotDetail/BidHistory';
import SellerInfo from '../components/LotDetail/SellerInfo';
import BidBox from '../components/LotDetail/BidBox';
import Favorite from '../components/LotDetail/Favorite';
import {
  lotDetailAtom,
  expertValuationAtom,
  sellerInfoAtom,
} from '../store/lotDetailAtom';
import {
  bidHistoryAtom,
  auctionInfoAtom,
  StompClientAtom,
  currBidPriceAtom,
  bidErrMsgAtom,
  addedBidTimeAtom,
  currBidHistoryAtom,
  auctionIdAtom,
} from '../store/bidAtom';
import { useAtom, useAtomValue } from 'jotai';
import { Client, IMessage } from '@stomp/stompjs';
import useStomp from '../lib/hooks/useStomp';
import CategoryInfo from '../components/LotDetail/CategoryInfo';
import { useUpdateAtom } from 'jotai/utils';
import { useParams } from 'react-router-dom';

export default function LotDetailPage() {
  const lotDetail = useAtomValue(lotDetailAtom);
  const auctionInfo = useAtomValue(auctionInfoAtom);
  const bidHistory = useAtomValue(bidHistoryAtom);
  const expertValuation = useAtomValue(expertValuationAtom);
  const sellerInfo = useAtomValue(sellerInfoAtom);
  const auctionId = useAtomValue(auctionIdAtom);
  const params = useParams();

  // 웹소켓 Client
  const client = useRef<Client>();
  const setStompClient = useUpdateAtom(StompClientAtom);

  const [currPrice, setCurrPrice] = useAtom(currBidPriceAtom);
  const [currBidHistory, setCurrBidHistory] = useAtom(currBidHistoryAtom);
  const [bidErrMsg, setBidErrMsg] = useAtom(bidErrMsgAtom);
  const [bidCloseTime, setBidCloseTime] = useAtom(addedBidTimeAtom);

  // 웹소켓 subscribe 콜백 함수
  const subscribeAuctionInfo = useCallback((message: IMessage) => {
    const { history, currentPrice } = JSON.parse(message?.body);
    if (history.length) setCurrBidHistory(history);
    setCurrPrice(currentPrice);
  }, []);

  // 추가된 시간 받는 함수
  const subsribeAddedTime = useCallback((messege: IMessage) => {
    const data = JSON.parse(messege?.body);
    setBidCloseTime(data?.endDateTime);
  }, []);

  // 에러 subscribe 콜백 함수
  const subscribeBidError = useCallback((message: IMessage) => {
    const data = JSON.parse(message?.body);
    setBidErrMsg(data?.message);
  }, []);

  // subscription 목록
  const subscriptionList = [
    {
      destination: `/auction/${auctionId}`,
      callback: subscribeAuctionInfo,
    },
    {
      destination: `/topic/endDateTime/${auctionId}`,
      callback: subsribeAddedTime,
    },
    {
      destination: '/user/queue/error',
      callback: subscribeBidError,
    },
  ];

  // 웹소켓 연결 Hook
  const [connect, disconnect] = useStomp(client, subscriptionList);

  // itemId, auctionId 불러옴
  useEffect(() => {
    const { itemId, auctionId } = params;
  }, []);

  // 웹소켓 연결 및 해제
  useEffect(() => {
    connect();
    setStompClient(client);

    return () => disconnect();
  }, []);

  useEffect(() => {
    setCurrPrice(auctionInfo.currentPrice);
    setBidCloseTime(auctionInfo.auctionEndDateTime);
  }, [auctionInfo]);

  useEffect(() => {
    setCurrBidHistory(bidHistory);
  }, [bidHistory]);

  useEffect(() => {
    console.log('bid err msg');
    console.log(bidErrMsg);
  }, [bidErrMsg]);

  return (
    <div>
      <CategoryInfo category={lotDetail.category} />
      <InfoMain
        lotName={lotDetail.name}
        lotNumber={lotDetail.itemNumber}
        lotImageUrls={lotDetail.imageItemUrls}
      />
      <Favorite />
      <ExpertValuation data={expertValuation} />
      <InfoDetail
        brand={lotDetail.brand}
        designer={lotDetail.designer}
        material={lotDetail.material}
        period={lotDetail.productionYear}
        size={`${lotDetail.width} x ${lotDetail.depth} x ${lotDetail.height} cm`}
        conditionGrade={lotDetail.conditionGrade}
        conditionDescription={lotDetail.conditionDescription}
      />
      <LotDescription content={lotDetail.text} />
      <BidHistory bidHistory={currBidHistory} />
      <SellerInfo data={sellerInfo} />
      <BidBox currentPrice={currPrice} closeTime={bidCloseTime} />
    </div>
  );
}
