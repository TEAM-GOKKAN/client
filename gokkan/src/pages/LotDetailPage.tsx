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
  lotIdAtom,
} from '../store/lotDetailAtom';
import {
  bidHistoryAtom,
  auctionInfoAtom,
  StompClientAtom,
  bidErrMsgAtom,
  addedBidTimeAtom,
  auctionIdAtom,
  isTimeAddedAtom,
} from '../store/bidAtom';
import { useAtom, useAtomValue } from 'jotai';
import { Client, IMessage } from '@stomp/stompjs';
import useStomp from '../lib/hooks/useStomp';
import CategoryInfo from '../components/LotDetail/CategoryInfo';
import { useUpdateAtom } from 'jotai/utils';
import { useParams } from 'react-router-dom';

export default function LotDetailPage() {
  const params = useParams();

  const setAuctionId = useUpdateAtom(auctionIdAtom);
  const setLotId = useUpdateAtom(lotIdAtom);
  const lotDetail = useAtomValue(lotDetailAtom);
  const expertValuation = useAtomValue(expertValuationAtom);
  const sellerInfo = useAtomValue(sellerInfoAtom);
  const { data: auctionInfo, refetch: updateAuctionInfo } =
    useAtomValue(auctionInfoAtom);
  const { data: bidHistory, refetch: updateBidHistory } =
    useAtomValue(bidHistoryAtom);

  const [isTimeAdded, setIsTimeAdded] = useAtom(isTimeAddedAtom);

  // 웹소켓 Client
  const client = useRef<Client>();
  const setStompClient = useUpdateAtom(StompClientAtom);

  const [bidErrMsg, setBidErrMsg] = useAtom(bidErrMsgAtom);
  const [bidCloseTime, setBidCloseTime] = useAtom(addedBidTimeAtom);

  // 웹소켓 subscribe 콜백 함수
  const subscribeAuctionInfo = useCallback((message: IMessage) => {
    updateAuctionInfo();
    updateBidHistory();
  }, []);

  // 추가된 시간 받는 함수
  const subsribeAddedTime = useCallback((messege: IMessage) => {
    const data = JSON.parse(messege?.body);
    setBidCloseTime(data?.endDateTime);
    setIsTimeAdded(true);
  }, []);

  // 에러 subscribe 콜백 함수
  const subscribeBidError = useCallback((message: IMessage) => {
    const data = JSON.parse(message?.body);
    setBidErrMsg(data?.message);
  }, []);

  // subscription 목록
  const subscriptionList = [
    {
      destination: `/topic/${params.auctionId}`,
      callback: subscribeAuctionInfo,
    },
    {
      destination: `/topic/endDateTime/${params.auctionId}`,
      callback: subsribeAddedTime,
    },
    {
      destination: '/user/queue/error',
      callback: subscribeBidError,
    },
  ];

  // 웹소켓 연결 Hook
  let [connect, disconnect] = useStomp(client, subscriptionList);

  // itemId, auctionId 불러옴
  useEffect(() => {
    const { itemId, auctionId } = params;
    setLotId(Number(itemId));
    setAuctionId(Number(auctionId));
  }, []);

  useEffect(() => {
    updateAuctionInfo();
    updateBidHistory();
  }, []);

  useEffect(() => {
    if (!auctionInfo) return;

    setBidCloseTime(auctionInfo.auctionEndDateTime);
  }, [auctionInfo?.auctionEndDateTime]);

  // 웹소켓 연결 및 해제
  useEffect(() => {
    connect();
    setStompClient(client);

    return () => disconnect();
  }, []);

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
      {/* <Favorite /> */}
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
      <BidHistory bidHistory={bidHistory || []} />
      <SellerInfo data={sellerInfo} />
      <BidBox
        currentPrice={auctionInfo?.currentPrice || 0}
        closeTime={bidCloseTime}
        isTimeAdded={isTimeAdded}
      />
    </div>
  );
}
