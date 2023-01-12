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
          {insertCommas(lotInfo.currentPrice)}
          <p className="unit">원</p>
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
  height: 50vh;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  img {
    height: 70%;
    width: 100%;
    margin-bottom: 12px;
  }
  .lot-name {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 16px;
  }
  .price {
    display: flex;
    flex-direction: column;
    color: var(--color-brown500);
    font-size: 16px;
    font-weight: 600;
    font-family: poppins;
    .price-content {
      margin-top: 4px;
      display: flex;
      flex-direction: row;
      .unit {
        margin-left: 4px;
      }
    }
  }
  .end-time {
    margin-top: 15px;
    color: var(--color-brown300);
  }
`;
