import React, { useCallback, useEffect, useRef, useState } from 'react';
import ExpertValuation from '../components/LotDetail/ExpertValuation';
import InfoMain from '../components/LotDetail/InfoMain';
import InfoDetail from '../components/LotDetail/InfoDetail';
import LotDescription from '../components/LotDetail/LotDescription';
import BidHistory from '../components/LotDetail/BidHistory';
import SellerInfo from '../components/LotDetail/SellerInfo';
import BidBox from '../components/LotDetail/BidBox';
import Favorite from '../components/LotDetail/Favorite';
import Modal from '../components/common/Modal';
import {
  bidHistoryAtom,
  auctionInfoAtom,
  lotDetailAtom,
  expertValuationAtom,
  sellerInfoAtom,
} from '../store/lotDetailAtom';
import { useAtomValue } from 'jotai';
import BidModal from '../components/LotDetail/Bid/BidModal';
import { Client } from '@stomp/stompjs';
import useStomp from '../lib/hooks/useStomp';
import CategoryInfo from '../components/LotDetail/CategoryInfo';

interface BidInfo {
  memberId: string;
  price: number;
  bidTime: string;
}

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNTY2MzE0NzQzIiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY3MjY0NzMxMX0.ENToJT1634k9ZXwy0NgR1GiqMoLdLcL8J_3fqVfkuak';
const auctionId = 1;

export default function LotDetailPage() {
  const lotDetail = useAtomValue(lotDetailAtom);
  const auctionInfo = useAtomValue(auctionInfoAtom);
  const bidHistory = useAtomValue(bidHistoryAtom);
  const expertValuation = useAtomValue(expertValuationAtom);
  const sellerInfo = useAtomValue(sellerInfoAtom);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // 웹소켓 Client
  const client = useRef<Client>();
  const [bidList, setBidList] = useState<BidInfo[] | null[]>(bidHistory);
  const [currPrice, setCurrPrice] = useState<number | string>(
    auctionInfo.currentPrice
  );

  // 웹소켓 subscribe 콜백 함수
  const subscribeCallback = useCallback(({ body }: { body: string }) => {
    const { history, currentPrice } = JSON.parse(body);
    if (history.length) setBidList(history);
    setCurrPrice(currentPrice);
  }, []);

  // 웹소켓 publish 함수 (응찰)
  const handlePlaceBid = useCallback(async (price: number | string) => {
    client.current?.publish({
      destination: `/auction/${auctionId}`,
      body: JSON.stringify(price),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, []);

  // 웹소켓 연결 Hook
  const [connect, disconnect] = useStomp(
    client,
    `/topic/${auctionId}`,
    subscribeCallback
  );

  // 웹소켓 연결 및 해제
  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

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
      <BidHistory bidHistory={bidList} />
      <SellerInfo data={sellerInfo} />
      <BidBox
        currentPrice={currPrice}
        closeTime={auctionInfo.auctionEndDateTime}
        onOpenModal={handleOpenModal}
      />
      {modalOpen && (
        <BidModal
          currentPrice={currPrice}
          onPlaceBid={handlePlaceBid}
          onCloseModal={handleCloseModal}
        >
          <BidHistory bidHistory={bidList} />
        </BidModal>
      )}
    </div>
  );
}
