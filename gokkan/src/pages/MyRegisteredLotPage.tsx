import React from 'react';
import LotListPage from '../components/common/LotListPage';

const MyRegisteredProductPage = () => {
  const url = 'api/v1/auction/list/my?auctionStatus=경매중&';

  return (
    <LotListPage
      url={url}
      queryKey="myRegisteredLot"
      title="내가 올린 경매 목록"
    />
  );
};

export default MyRegisteredProductPage;
