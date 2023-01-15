import React from 'react';
import ProductListPage from '../components/common/ProductListPage';

const MyBidLotPage = () => {
  const url = 'api/v1/auction/list/bid?auctionStatus=경매중&';

  return (
    <ProductListPage
      url={url}
      queryKey="myBidLot"
      title="입찰한 경매 목록"
      targetElementUrl="/register/1"
    />
  );
};

export default MyBidLotPage;
