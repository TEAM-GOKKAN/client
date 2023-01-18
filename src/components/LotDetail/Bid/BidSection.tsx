import { Client } from '@stomp/stompjs';
import { useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';
import React, {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import useInput from '../../../lib/hooks/useInput';
import { bidErrMsgAtom } from '../../../store/bidAtom';
import { insertCommas, removeCommas } from '../../../utils/handleCommas';

interface Iprops {
  currentPrice: number | string | undefined;
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
  const [recommendedBidPrices, setRecommendedBidPrices] = useState<number[]>(
    []
  );

  const [bidErrMsg, setBidErrMsg] = useAtom(bidErrMsgAtom);

  const [value, , setValue] = useInput<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBidErrMsg('');

    const inputPriceWithCommas = insertCommas(removeCommas(e.target.value));
    setValue(inputPriceWithCommas);
  };

  // 모달 띄우기
  const openConfirmModal = (price: string) => {
    setBidErrMsg('');

    // 토큰이 없을 경우 에러 메세지
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setBidErrMsg(`로그인 후 응찰해주세요.`);
      return;
    }

    // 응찰가가 현재가보다 낮을 경우 에러 메세지
    if (Number(removeCommas(price)) < recommendedBidPrices[0]) {
      const minBidPriceWithCommas = insertCommas(recommendedBidPrices[0]);
      setBidErrMsg(`${minBidPriceWithCommas}원 이상부터 응찰 가능합니다.`);
      return;
    }

    const bidPriceWithoutCommas = Number(removeCommas(price));
    onSetBidPrice(bidPriceWithoutCommas);
    onConfirmOpen();
  };

  const handleClickBidButton = () => {
    onSetAutoBid(false);
    openConfirmModal(value);
  };

  const handleClickAutoBidButton = () => {
    onSetAutoBid(true);
    openConfirmModal(value);
  };

  // 추천 응찰가 클릭
  const handleClickRecommendedBidButton = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    if (e.target instanceof HTMLButtonElement && e.target.textContent) {
      onSetAutoBid(false);

      const bidPrice = e.target.textContent.slice(0, -1);
      openConfirmModal(bidPrice);
    }
  };

  useEffect(() => {
    setBidErrMsg('');
  }, []);

  useEffect(() => {
    if (!currentPrice) return;

    const minBidPrice = Number(currentPrice) + 10000;
    setRecommendedBidPrices([
      minBidPrice,
      minBidPrice + 10000,
      minBidPrice + 20000,
    ]);
  }, [currentPrice]);

  return (
    <Container>
      <PriceButtonsContainer>
        {recommendedBidPrices.map((price) => (
          <button
            type="button"
            key={price}
            onClick={handleClickRecommendedBidButton}
          >
            {insertCommas(price) + '원'}
          </button>
        ))}
      </PriceButtonsContainer>
      <PriceInputContainer>
        <input
          placeholder={`${insertCommas(Number(currentPrice) + 10000)}원 이상`}
          value={value}
          onChange={handleInputChange}
        />
        {bidErrMsg && <div>{bidErrMsg}</div>}
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
