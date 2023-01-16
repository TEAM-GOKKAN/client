import { Client } from '@stomp/stompjs';
import { useUpdateAtom } from 'jotai/utils';
import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../../lib/hooks/useInput';
import { insertCommas, removeCommas } from '../../../utils/handleCommas';

interface Iprops {
  currentPrice: number | string;
  onConfirmOpen: () => void;
  onSetBidPrice: (price: number) => void;
  onSetAutoBid: Dispatch<SetStateAction<boolean>>;
}

export default function BidSection({
  currentPrice,
  onConfirmOpen,
  onSetBidPrice,
  onSetAutoBid,
}: Iprops) {
  const [minBidPrice, setMinBidPrice] = useState<number>(
    Number(currentPrice) + 10000
  );
  const [inputErrMsg, setInputErrMsg] = useState('');

  const [value, , setValue] = useInput<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputPriceWithCommas = insertCommas(removeCommas(e.target.value));
    setValue(inputPriceWithCommas);
  };

  // 모달 띄우기
  const openConfirmModal = () => {
    const bidPriceWithoutCommas = Number(removeCommas(value));
    onSetBidPrice(bidPriceWithoutCommas);
    onConfirmOpen();
  };

  const handleClickBidButton = () => {
    onSetAutoBid(false);
    openConfirmModal();
  };

  const handleClickAutoBidButton = () => {
    onSetAutoBid(true);
    openConfirmModal();
  };

  // 추천 응찰가 클릭
  const handleClickRecommendedBidButton = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    if (e.target instanceof HTMLButtonElement && e.target.textContent) {
      onSetAutoBid(false);

      console.log(e.target.textContent);

      const bidPrice = e.target.textContent.slice(0, -1);
      console.log(bidPrice);

      const bidPriceWithCommas = Number(removeCommas(bidPrice));
      onSetBidPrice(bidPriceWithCommas);
      onConfirmOpen();
    }
  };

  return (
    <Container>
      <PriceButtonsContainer>
        <button type="button" onClick={handleClickRecommendedBidButton}>
          {insertCommas(minBidPrice) + '원'}
        </button>
        <button type="button" onClick={handleClickRecommendedBidButton}>
          {insertCommas(minBidPrice + 10000) + '원'}
        </button>
        <button type="button" onClick={handleClickRecommendedBidButton}>
          {insertCommas(minBidPrice + 20000) + '원'}
        </button>
      </PriceButtonsContainer>
      <PriceInputContainer>
        <input
          placeholder={`${insertCommas(Number(currentPrice) + 10000)}원 이상`}
          value={value}
          onChange={handleInputChange}
        />
        {inputErrMsg && <div>{inputErrMsg}</div>}
      </PriceInputContainer>
      <BidButtonsContainer>
        <BidOnceButton type="button" onClick={handleClickBidButton}>
          1회 응찰
        </BidOnceButton>
        <BidAutoButton type="button" onClick={handleClickAutoBidButton}>
          자동 응찰
        </BidAutoButton>
      </BidButtonsContainer>
    </Container>
  );
}

const Container = styled.form`
  margin-bottom: 72px;
  display: flex;
  flex-direction: column;
`;

const PriceButtonsContainer = styled.div`
  margin-bottom: 18px;

  & > button {
    width: calc((100% - 20px) / 3);
    margin-right: 10px;
    background: var(--color-brown100);
    height: 42px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown100);
    background: var(--color-brown400);
    font-weight: 500;
    letter-spacing: normal;
  }
`;

const PriceInputContainer = styled.div`
  margin-bottom: 10px;

  & > input {
    padding-left: 12px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown500);
    letter-spacing: normal;
  }

  & > div {
    margin-top: 6px;
    font-size: var(--font-micro);
    color: var(--color-orange);
  }
`;

const BidButtonsContainer = styled.div`
  & button {
    width: calc((100% - 10px) / 2);
    margin-right: 10px;
    background: var(--color-brown100);
    height: 42px;
    font-size: var(--font-regular);
    line-height: var(--font-regular);
    color: var(--color-brown100);
    font-weight: 500;
  }
`;

const BidOnceButton = styled.button`
  && {
    background: var(--color-brown500);
  }
`;

const BidAutoButton = styled.button`
  && {
    background: var(--color-purple);
  }
`;
