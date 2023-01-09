import React from 'react';
import styled from 'styled-components';
import ProductListElement from './ProductListElement';

const ProductListWrapper = styled.ul``;

const ProductList = ({ productList }: ProductListPropType) => {
  return (
    <ProductListWrapper>
      {productList.map((productInfo) => {
        return (
          <ProductListElement productInfo={productInfo} key={productInfo.id} />
        );
      })}
    </ProductListWrapper>
  );
};

type ProductInfoType = {
  id: string;
  name: string;
  thumbnail: string;
  writer: string;
  created: string;
  updated: string;
};

type ProductListPropType = {
  productList: ProductInfoType[];
};

export default ProductList;
