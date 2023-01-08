import React from 'react';
import styled from 'styled-components';

interface Iprops {
  lotName: string;
  thumbnail: string | undefined;
  currentPrice: number | string;
  closeTime: string;
}

export default function LotPreview({
  lotName,
  thumbnail,
  currentPrice,
  closeTime,
}: Iprops) {
  const month = Number(closeTime.slice(5, 7));
  const day = Number(closeTime.slice(8, 10));
  const hour = Number(closeTime.slice(8, 10));
  const min = Number(closeTime.slice(14, 16));

  return (
    <Container>
      <ImageContainer>
        <img src={thumbnail || ''} alt="thumbnail" />
      </ImageContainer>
      <LotInfo>
        <LotTitle>{lotName}</LotTitle>
        <CurrentPrice>
          <div>현재가</div>
          <div>{currentPrice}</div>
        </CurrentPrice>
        <CloseTime>
          <div>마감시간</div>
          <div>{`${month}월 ${day}일 ${hour}시 ${min}분`}</div>
        </CloseTime>
      </LotInfo>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 42px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: calc((100% - 16px) / 2);
  height: calc((100vw - 48px) / 2);
  background: var(--color-brown100);
  /* margin-bottom: 32px; */

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LotInfo = styled.div`
  width: calc((100% - 16px) / 2);
  margin-left: 16px;
  white-space: pre-line;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & * {
    letter-spacing: normal;
  }
`;

const LotTitle = styled.div`
  width: 100%;
  font-size: var(--font-regular);
  white-space: pre-line;
`;

const CurrentPrice = styled.div`
  /* margin-top: 24px; */
  position: absolute;
  bottom: 48px;
  font-size: var(--font-x-large);
  font-weight: 500;

  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
    letter-spacing: -0.0625em;
  }
`;

const CloseTime = styled.div`
  font-size: var(--font-small);
  font-weight: 500;
  color: var(--color-brown400);

  & > div:first-child {
    font-size: var(--font-micro);
    color: var(--color-brown300);
    letter-spacing: -0.0625em;
  }
`;
