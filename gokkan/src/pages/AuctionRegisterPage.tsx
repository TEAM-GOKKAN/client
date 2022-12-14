import React from 'react';
import ImageUploader from '../component/register/ImageUploader';
import ProductName from '../component/register/ProductName';
import ProductCategorySelector from '../component/register/ProductCategorySelector';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
  padding: 1vw;
`;

const AuctionRegister = () => {
  return (
    <RegisterWrapper>
      <ProductName />
      <ProductCategorySelector />
      <ImageUploader />
    </RegisterWrapper>
  );
};

export default AuctionRegister;
