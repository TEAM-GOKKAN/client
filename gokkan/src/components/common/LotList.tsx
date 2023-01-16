import React from 'react';
import styled from 'styled-components';
import { insertCommas } from '../../utils/handleCommas';
import LotListElement from './LotListElement';

const LotList = ({ lotList, lotListCount }: PropType) => {
  const listElementCount = insertCommas(Number(lotListCount));

  return (
    <Container>
      <div className="total-count">총 {listElementCount} 개</div>
      <LotListGridWrapper>
        {lotList.map((lotInfo) => {
          return <LotListElement lotInfo={lotInfo} key={lotInfo.id} />;
        })}
      </LotListGridWrapper>
    </Container>
  );
};

type LotInfoType = {
  id: number;
  itemId: number;
  name: string;
  thumbnail: string;
  currentPrice: number;
  writer: string;
  auctionState: string;
  auctionEndDateTime: string;
};

type PropType = {
  lotList: LotInfoType[];
  lotListCount?: number;
};

export default LotList;

const Container = styled.div`
  .total-count {
    margin-bottom: 19px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const LotListGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 15px;
`;