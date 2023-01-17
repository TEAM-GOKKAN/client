import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getRemainingTime } from '../../utils/getDiffTime';
import { insertCommas } from '../../utils/handleCommas';

interface Iprops {
  closeTime: string;
  currentPrice: number | string;
}

export default function BidBox({ closeTime, currentPrice }: Iprops) {
  const location = useLocation();

  const [remainingTime, setRemainingTime] = useState('');
  const [currPrice, setCurrPrice] = useState('');

  // 남은 시간 업데이트 함수
  const updateRemainingTime = () => {
    const diffTime = getRemainingTime(closeTime);
    setRemainingTime(diffTime);
  };

  // 가격에 콤마 삽입
  const getPriceWithCommas = (price: number | string) => {
    const priceWithCommas = insertCommas(Number(price));
    setCurrPrice(priceWithCommas);
  };

  // 남은 시간 타이머 설정
  useEffect(() => {
    updateRemainingTime();
    const timeoutId = setInterval(updateRemainingTime, 1000);

    // 타이머 해제
    return () => clearInterval(timeoutId);
  }, [closeTime]);

  // 가격 변동 시마다 콤마 삽입
  useEffect(() => {
    getPriceWithCommas(currentPrice);
  }, [currentPrice]);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <Container>
      <CurrentPrice>
        <div>현재가</div>
        <div>
          <Price>{currPrice}</Price>
          <span> 원</span>
        </div>
      </CurrentPrice>
      <RemainingTime>{remainingTime}</RemainingTime>
      <Link to="bid" state={{ background: location }}>
        <PlaceBidButton type="button">응찰하기</PlaceBidButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0%;
  left: 0%;
  right: 0;
  /* transform: translate(0%, -16px); */
  width: 100%;
  height: 100px;
  color: var(--color-brown100);
  background: var(--color-brown500);
  padding: 16px;
`;

const CurrentPrice = styled.div`
  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown200);
    margin-bottom: 6px;
  }
`;

const Price = styled.span`
  font-size: var(--font-2x-large);
  font-weight: 500;
  letter-spacing: normal;
`;

const RemainingTime = styled.div`
  margin-top: 16px;
  font-size: var(--font-small);
  color: var(--color-brown300);
  letter-spacing: normal;
`;

const PlaceBidButton = styled.button`
  padding: 12px 24px;
  background: var(--color-purple);
  color: var(--color-brown100);
  font-size: var(--font-regular);
  font-weight: 500;
  position: absolute;
  right: 16px;
  bottom: 30px;
`;
