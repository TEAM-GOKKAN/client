import React from 'react';
import ImageUploader from '../component/register/ImageUploader';
import ProductName from '../component/register/ProductName';
import ProductCategorySelector from '../component/register/ProductCategorySelector';
import ProductPrice from '../component/register/ProductPrice';
import ProductDetailInfo from '../component/register/ProductDetailInfo';
import RegisterSubmit from '../component/register/RegisterSubmit';
import ProductFigure from '../component/register/ProductFigure';
import ProductStyle from '../component/register/ProductStyle';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
  padding: 1vw;
`;

const AuctionRegister = () => {
  return (
    <RegisterWrapper>
      <ProductName />
      <ProductCategorySelector />
      <ProductPrice />
      <ImageUploader />
      <ProductDetailInfo />
      <RegisterSubmit />
      <ProductFigure />
      <ProductStyle />
    </RegisterWrapper>
  );
};

export default AuctionRegister;
