import React from 'react';
import ProductListPage from '../components/common/ProductListPage';

const MyRegisteredProductPage = () => {
  const url = 'api/v1/items/my-items?states=COMPLETE&';

  return (
    <ProductListPage
      url={url}
      queryKey="myRegisteredProduct"
      title="등록한 경매 목록"
      targetElementUrl="/register/1"
    />
  );
};

export default MyRegisteredProductPage;
