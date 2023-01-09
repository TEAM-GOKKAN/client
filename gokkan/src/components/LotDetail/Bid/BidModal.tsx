import { useAtom, useAtomValue } from 'jotai';
import React, { useCallback, useEffect, useState } from 'react';
import {
  auctionInfoAtom,
  bidCloseTimeAtom,
  bidHistoryAtom,
  currBidHistoryAtom,
  currBidPriceAtom,
  lotDetailAtom,
} from '../../../store/lotDetailAtom';
import { insertCommas } from '../../../utils/handleCommas';
import ModalFull from '../../common/ModalFull';
import BidSection from './BidSection';
import LotPreview from './LotPreview';
import BidConfirmModal from './BidConfirmModal';
import { getRemainingTime } from '../../../utils/getDiffTime';
import BidHistory from '../BidHistory';

export default function BidModal() {
  const { name, thumbnail } = useAtomValue(lotDetailAtom);

  const { currentPrice, auctionEndDateTime } = useAtomValue(auctionInfoAtom);
  const bidHistory = useAtomValue(bidHistoryAtom);

  const [currBidPrice, setCurrBidPrice] = useAtom(currBidPriceAtom);
  const [bidCloseTime, setBidCloseTime] = useAtom(bidCloseTimeAtom);
  const [currBidHistory, setCurrBidHistory] = useAtom(currBidHistoryAtom);

  const [bidPrice, setBidPrice] = useState(0);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState('');
  const [isAutoBid, setIsAutoBid] = useState(false);
  const [isAuctionClosed, setIsAuctionClosed] = useState(false);

  // 남은 시간 업데이트 함수
  const updateRemainingTime = () => {
    const diffTime = getRemainingTime(bidCloseTime);
    setRemainingTime(diffTime);
  };

  const handleOpenConfirmModal = useCallback(() => {
    setConfirmModalOpen(true);
  }, []);

  const handleCloseConfirmModal = useCallback(() => {
    setConfirmModalOpen(false);
  }, []);

  const handleSetBidPrice = (price: number) => {
    setBidPrice(price);
  };

  useEffect(() => {
    setCurrBidPrice(currentPrice);
  }, [currentPrice]);

  useEffect(() => {
    setBidCloseTime(auctionEndDateTime);
  }, [auctionEndDateTime]);

  useEffect(() => {
    setCurrBidHistory(bidHistory);
  }, [bidHistory]);

  useEffect(() => {
    updateRemainingTime();
    const timeoutId = setInterval(updateRemainingTime, 1000);

    // 경매 마감 시 타이머 해제 및 응찰 섹션 숨기기
    if (remainingTime === '마감') {
      setIsAuctionClosed(true);
      clearInterval(timeoutId);
    }

    // 타이머 해제
    return () => clearInterval(timeoutId);
  }, [bidCloseTime, remainingTime]);

  return (
    <ModalFull title={remainingTime}>
      <LotPreview
        lotName={name}
        thumbnail={thumbnail}
        currentPrice={insertCommas(Number(currBidPrice))}
        closeTime={bidCloseTime}
      />
      {!isAuctionClosed && (
        <BidSection
          currentPrice={currBidPrice}
          onSetBidPrice={handleSetBidPrice}
          onConfirmOpen={handleOpenConfirmModal}
          onSetAutoBid={setIsAutoBid}
        />
      )}
      <BidHistory bidHistory={currBidHistory} />
      {confirmModalOpen && (
        <BidConfirmModal
          bidPrice={bidPrice}
          isAutoBid={isAutoBid}
          onConfirmClose={handleCloseConfirmModal}
        />
      )}
    </ModalFull>
  );
}
