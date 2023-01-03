import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface Iprops {
  currentPrice: number | string;
  onPlaceBid: (price: number | string) => void;
}

export default function BidSection({ currentPrice, onPlaceBid }: Iprops) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleBidInput = () => {
    if (!inputRef.current?.value) return;

    onPlaceBid(inputRef.current.value);
  };

  // 모달 띄우기
  const handleOpenModal = () => {
    navigate('bid', {
      state: {
        background: location,
      },
    });
  };

  return (
    <Container>
      {/* <PriceButtonsContainer>
        <button type="submit">{currentPrice}</button>
        <button type="submit">{currentPrice}</button>
        <button type="submit">{currentPrice}</button>
      </PriceButtonsContainer> */}
      <PriceInputContainer>
        <input
          type="text"
          placeholder={`${currentPrice}원 이상`}
          ref={inputRef}
        />
        {/* <div>유효한 금액을 입력해주세요.</div> */}
      </PriceInputContainer>
      <BidButtonsContainer>
        {/* <Link to="modal" state={{ background: location }}> */}
        <BidOnceButton type="button" onClick={handleOpenModal}>
          1회 응찰
        </BidOnceButton>
        {/* </Link> */}
        {/* <Link to="modal" state={{ background: location }}>
            <BidAutoButton type="button">자동 응찰</BidAutoButton>
          </Link> */}
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
    /* background: var(--color-brown500); */
    font-weight: 500;

    /* &:last-child {
      background: var(--color-purple);
    } */
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
