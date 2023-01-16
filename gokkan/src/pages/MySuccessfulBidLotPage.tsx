import React from 'react';
import LotListPage from '../components/common/LotListPage';

const MySuccessfulBidLotPage = () => {
  const url = 'api/v1/auction/list/bid?auctionStatus=결제대기&';

  return (
    <LotListPage
      url={url}
      queryKey="mySuccessfulBidLot"
      title="낙찰된 경매 목록"
    />
  );
};

export default MySuccessfulBidLotPage;
