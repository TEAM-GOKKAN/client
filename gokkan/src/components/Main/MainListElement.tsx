import React from 'react';
import styled from 'styled-components';
import { insertCommas } from '../../utils/handleCommas';
import { getElapsedTime } from '../../utils/getDiffTime';
import { useNavigate } from 'react-router-dom';

const MainListElement = ({ lotInfo }: MainListElementPropType) => {
  const navigate = useNavigate();

  const handleAuctionItemClick = () => {
    navigate(`/auction/${lotInfo.itemId}/${lotInfo.id}`);
  };

  return (
    <Container onClick={handleAuctionItemClick}>
      <img src={lotInfo.thumbnail} />
      <div className="lot-name">{lotInfo.name}</div>
      <div className="price">
        <p className="price-title">현재가</p>
        <div className="price-content">
          <span className="price-value">
            {insertCommas(lotInfo.currentPrice)}
          </span>
          <span className="unit">원</span>
        </div>
      </div>
      <div className="end-time">
        {getElapsedTime(lotInfo.auctionEndDateTime, '남은시간')}
      </div>
    </Container>
  );
};

export default MainListElement;

interface MainListElementPropType {
  lotInfo: {
    id: number;
    itemId: number;
    name: string;
    thumbnail: string;
    currentPrice: number;
    writer: string;
    auctionState: string;
    auctionEndDateTime: string;
  };
}

const Container = styled.div`
  min-width: 60vw;
  height: 45vh;
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  img {
    height: 70%;
    width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
  }
  .lot-name {
    margin-bottom: 11px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.5px;
  }
  .price {
    display: flex;
    flex-direction: column;
    .price-title {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -4%;
    }
    .price-content {
      display: flex;
      flex-direction: row;
      .unit {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -4%;
      }
      .price-value {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        font-family: 'Poppins';
        letter-spacing: normal;
      }
    }
  }
  .end-time {
    margin-top: 3px;
    color: var(--color-brown300);
    font-weight: 400;
    font-size: 12px;
  }
`;
