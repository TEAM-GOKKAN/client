import { useAtomValue } from 'jotai';
import React from 'react';
import { lotDetailAtom } from '../../../store/lotDetailAtom';
import ModalFull from '../../common/ModalFull';
import BidSection from './BidSection';
import LotPreview from './LotPreview';

interface Iprops {
  children: React.ReactNode;
  currentPrice: number | string;
  onPlaceBid: (price: number | string) => void;
  onCloseModal: () => void;
}

export default function BidModal({
  children,
  currentPrice,
  onPlaceBid,
  onCloseModal,
}: Iprops) {
  const { name, imageItemUrls } = useAtomValue(lotDetailAtom);

  return (
    <ModalFull title="3일 2시간 17분 20초" onClickBtn={onCloseModal}>
      <LotPreview
        lotName={name}
        thumbnail={imageItemUrls?.at(-1)?.url}
        currentPrice={currentPrice}
      />
      <BidSection currentPrice={currentPrice} onPlaceBid={onPlaceBid} />
      {children}
    </ModalFull>
  );
}
